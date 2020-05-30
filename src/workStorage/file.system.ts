import Dexie from 'dexie'
const db: any = new Dexie('WebPencil')
db.version(1).stores({
    handles: '++id, type, handle'
});

export interface FileData {
    text:string
    blob: Blob
}

export interface FileInfo<T extends keyof FileData> {
    path:string
    type: T
    data:FileData[T]
}
export class FileApi {

    static async save<T extends keyof FileData>({path, data }: FileInfo<T>){
      const rootHandle =  await this.getRootFileHandle()
      const fileHandle = await this.getFileHandle(path, {isFile: true, create: true})
      if(fileHandle){
        await FileApi.writeData( fileHandle, data)
      }
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
        console.log('fileHandle: ',fileHandle)
        return fileHandle
    }

    protected static async getRootFileHandle() {
        if('chooseFileSystemEntries' in window){
            let rootHandle
            rootHandle =  (await db.handles.where({type: 'rootDir'}).toArray())[0].handle
            if(!rootHandle){
                rootHandle =  await (window as any).chooseFileSystemEntries({ 
                    type: 'open-directory',
                 })
                 await db.handles.add({ type: 'rootDir', handle: rootHandle })
            }
            const permission =  await rootHandle.queryPermission()
            if(permission !== 'garented'){
              await rootHandle.requestPermission()
            }
          return rootHandle
           
        }else {
            throw 'Not support native file system api'
        }
       
    }

}