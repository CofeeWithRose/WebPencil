import Dexie from 'dexie'
let db: any 

export interface FileData {
    text:string
    blob: Blob
}

export interface FileInfo<T extends keyof FileData> {
    path:string
    type: T
    data:FileData[T]
}

let fileApiOptions = {
    permissionTip: (callback: () => Promise<void>) => Promise.reject(' you should init.')
}
export type FileOperate = {name: 'saveFile'|'getFileNames'|'getFile', params: any[], callback: Function}
export class FileApi {
    
    static operates:FileOperate[] = []

    static isOperating = false

    static async init(option = fileApiOptions ){
        fileApiOptions = option
         db = await new Dexie('WebPencil')
         await db.version(1).stores({
            handles: '++id, type, handle'
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

    protected static async saveFile<T extends keyof FileData>({path, data }: FileInfo<T>){
      const fileHandle = await this.getFileHandle(path, {isFile: true, create: true})
      if(fileHandle){
        await FileApi.writeData( fileHandle, data)
      }else{
          console.error('fail get file: ', path)
      }
    }

    protected static async getFile(path: string): Promise<File>{
        const fileHandle = await this.getFileHandle(path, {isFile: true, create: false})
        return await fileHandle.getFile()
    }

    protected static async getFileNames(path: string): Promise<string[]>{
        const fileHandle = await this.getFileHandle(path, { isFile: false, create: false})
        const names: string[] = [ ]
        const entries = await fileHandle.getEntries();
        for await (const entry of entries) {
            if(entry.isFile){
            names.push(entry.name)
            }
        }
        return names
    }

    protected static async writeData(fileHandle: any, data: any) {
        
        // Create a FileSystemWritableFileStream to write to.
        const writable = await fileHandle.createWritable();
        // Write the contents of the file to the stream.
        await writable.write(data);
        // Close the file and write the contents to disk.
        await writable.close();
    }

    protected static async getFileHandle( path: string, { isFile, create} = {isFile: true, create: false } ){
        let fileHandle = await this.getRootFileHandle()
        const names = path.split('/')
        for(let i = 0; i< names.length; i++){
            const name = names[i]
            console.log('name: ',name)
            if(name){
                console.log('name2: ',name)
                if(isFile && i === names.length -1){
                    fileHandle =  await fileHandle.getFile(name,{create})
                }else{
                        const entries = await fileHandle.getEntries();
                        let hasGetFileHandle = false
                        for await (const entry of entries) {
                            // const kind = entry.isFile ? 'File' : 'Directory';
                            if(entry.name === name){
                                fileHandle = await fileHandle.getDirectory(name)
                                hasGetFileHandle = true
                                break; 
                            }
                        }
                        if(!hasGetFileHandle){
                            if(create){
                                fileHandle = await fileHandle.getDirectory(name, { create })
                            }else{
                                return null
                            }
                        }
                }
                const permission = await fileHandle.requestPermission()
                if(permission !== 'garented'){
                    fileHandle.requestPermission()
                }
            }
        }
        return fileHandle
    }

    protected static async getRootFileHandle() {
        if('chooseFileSystemEntries' in window){
            const isUserAction = window.event?.target instanceof Element
            let dirHandle: any;
            const res = await db.handles.where({type: 'rootDir'}).toArray()
            dirHandle =  res && res[0] && res[0].handle
            const reqHandle = async () => {
                dirHandle =  await (window as any).chooseFileSystemEntries({ 
                    type: 'open-directory',
                })
                 await db.handles.add({ type: 'rootDir', handle: dirHandle })
            }
            if(!dirHandle){
                if(isUserAction){
                    // ui操作.
                  await  reqHandle()
                }else{
                    await fileApiOptions.permissionTip(reqHandle)
                }
               
            }else{
                // TODO 检查文件夹是否已经被删除.
            }
            const permission =  await dirHandle.queryPermission()
            if(permission !== 'granted'){
                if(isUserAction){
                    await dirHandle.requestPermission()
                }else{
                    await fileApiOptions.permissionTip(() => dirHandle.requestPermission())
                }
              
            }
          return dirHandle
           
        }else {
            throw 'Not support native file system api'
        }
       
    }

}
