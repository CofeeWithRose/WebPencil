import { FileData, FileInfo, FileOperate, FileApiOptions, GetFile, FileDes } from "./data"
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

    static async save<T extends keyof FileData>({path, data, type }: FileInfo<T>): Promise<void>{
        return new Promise( callback => {
            const operte: FileOperate = { name: 'saveFile', params:[{path, data, type}], callback }
            this.sheduleOperate(operte)
        })
    }

    static get: GetFile = (...params) =>  {
        return new Promise( callback => {
            const operte: FileOperate = { name: 'getFile', params, callback }
            FileApi.sheduleOperate(operte)
        })
    }

    /**
     * @param path 
     */
    static async remove(path:string, option = {isFile: false}): Promise<void> {
        return new Promise( callback => {
            const operte: FileOperate = { name: 'removeFile', params:[path, option], callback }
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
      console.time('saveFile')  
      const {pathName, name} = this.analyzePath(path)
      const oldFileItem: FileDes<typeof type> = await db.files.where('[path+name]').equals([pathName, name]).first()
      const file: FileDes<typeof type> = { path: pathName, name, type, file: data }
      if(oldFileItem){
          const { id } = oldFileItem
          await db.files.put({ id, ...file })
      }else{
          await db.files.add(file)
      }
      console.timeEnd('saveFile')
    }

    protected static analyzePath(path:string){
        const index = path.lastIndexOf('/')
        const pathName = path.substring(0, index)
        const name = path.substr(index+1)
        return {name, pathName}
    }

    protected static getFile:GetFile = async (path, {isDir}) => {
        console.time('getFile')
        let files:File[]
        if(isDir){
            const res = await db.files.where('path').equals(path).toArray()
            files= res.map((item:FileDes<keyof FileData>) => FileApi.transToFile(item))
        }else{
            const {name, pathName} = FileApi.analyzePath(path)
            const res:FileDes<keyof FileData> = await db.files.where('[path+name]').equals([pathName, name]).first()
            files = [ FileApi.transToFile(res) ]
        }
        console.timeEnd('getFile')
        return files
    }

    protected static transToFile = (res:FileDes<keyof FileData>) => {
      if(res&&res.type === 'application/json'){
        const { name, type , file} = res as FileDes<'application/json'>
        return { text: () => file, name, type, size: file.length } as any
      }
      if(res&&res.type === 'image/png'){
        const { file, name  } = res as FileDes<'image/png'>
        return new File([file], name )
      }
    }

    protected static async getFileNames(path: string): Promise<string[]>{
        const res = await db.files.where({path}).toArray()
        return res.map( ({name}: {name:string}) => name )
    }

    protected static async removeFile(path: string, {isFile} = {isFile: false}): Promise<void> {
        let count = 0
        console.time('removeFile')
        if(isFile){
           const {name, pathName} =  this.analyzePath(path)
           count = await db.files.where('[path+name]').equals([pathName, name]).delete()
        }else{
            count =  await db.files.where('path').startsWith(path).delete()
        }
        console.timeEnd('removeFile')
        console.log('removeFile: ', count)
       
    }

}