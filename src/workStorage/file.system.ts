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

export class FileApi {
    

    static init(option = fileApiOptions ){
        fileApiOptions = option
        db = new Dexie('WebPencil')
        db.version(1).stores({
            handles: '++id, type, handle'
        });
    }

    static async save<T extends keyof FileData>({path, data }: FileInfo<T>){
      const fileHandle = await this.getFileHandle(path, {isFile: true, create: true})
      if(fileHandle){
        await FileApi.writeData( fileHandle, data)
      }
    }

    static async getFile(path: string){
        const fileHandle = await this.getFileHandle(path, {isFile: true, create: false})
        return await fileHandle.getFile()
    }

    static async getFileNames(path: string): Promise<string[]>{
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