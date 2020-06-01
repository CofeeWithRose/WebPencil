import { FileData, FileInfo, FileOperate, FileApiOptions } from "./data"
import Dexie from 'dexie'
let db: any 

export class FileApi {

    protected static operates:FileOperate[] = []

    protected static isOperating = false

    static async init(option: FileApiOptions){
         db = await new Dexie('WebPencilVitureFile')
         await db.version(1).stores({
            files: '++id, [path+name]'
        });
    }

    static async save<T extends keyof FileData>({path, data }: FileInfo<T>): Promise<void>{
        return new Promise( callback => {
            const operte: FileOperate = { name: 'saveFile', params:[{path, data}], callback }
            this.sheduleOperate(operte)
        })
    }

    static async get(path: string): Promise<File>{
        return new Promise( callback => {
            const operte: FileOperate = { name: 'getFile', params:[path], callback }
            this.sheduleOperate(operte)
        })
    }

    /**
     * 文件夹以 / 结尾.
     * @param path 
     */
    static async remove(path:string): Promise<void> {
        return new Promise( callback => {
            const operte: FileOperate = { name: 'removeFile', params:[path], callback }
            this.sheduleOperate(operte)
        })
    }

    static async getNames(path: string): Promise<string[]>{
        return new Promise<any>( callback => {
            const operte: FileOperate = { name: 'getFileNames', params:[path], callback }
            this.sheduleOperate(operte)
        })
    }

    protected static async sheduleOperate(operate: FileOperate){
        this.operates.push(operate)
        if(!this.isOperating){
           await this.startOperate()
        }
    }

    protected static async startOperate(){
        let operate = this.operates.shift()
        this.isOperating = true
        while(operate){
            const { name, params,  callback} = operate 
           const returnsValue = await  (this[name] as Function).apply(this, params)
           await callback(returnsValue)
           operate = this.operates.shift()
           if(!operate){
                this.isOperating = false
               break
           }
        }
    }

    protected static async saveFile<T extends keyof FileData>({path, data, type }: FileInfo<T>): Promise<void>{
        const {pathName, name} = this.analyzePath(path)
        const res = await db.files.where({path: pathName, name}).toArray()
        const oldFileItem = res&&res[0]&&res[0]
        if(oldFileItem){
            const { id } = oldFileItem
            await db.files.put({ id, path: pathName, name, file:  new File([data], name)})
        }else{
            await db.files.add({path: pathName, name,   file:  new File([data], name)})
        }
    }

    protected static analyzePath(path:string){
        const index = path.lastIndexOf('/')
        const pathName = path.substring(0, index)
        const name = path.substr(index+1)
        return {name, pathName}
    }

    protected static async getFile(path: string): Promise<File>{
       const {name, pathName} = this.analyzePath(path)
       const res = await db.files.where({path: pathName, name}).toArray()
       return  res&&res[0]&&res[0].file
    }

    protected static async getFileNames(path: string): Promise<string[]>{
        const res = await db.files.where({path}).toArray()
        return res.map( ({name}: {name:string}) => name )
    }

    protected static async removeFile(path: string): Promise<void> {
        await db.files.where('path').startsWith(path).delete()
    }

}