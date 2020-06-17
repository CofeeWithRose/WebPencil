
export interface FileData {
    'application/json': string
    'image/png': Blob
}

export interface FileInfo<T extends keyof FileData> {
    path:string
    type: T
    data:FileData[T]
}

export type FileDes<T extends keyof FileData> = { id?: string, path: string, name: string, type: T, file: FileData[T]}


export interface FileApiOptions {
    permissionTip: (callback: () => Promise<void>) => Promise<void>
}

export type FileOperate = {name: 'saveFile'|'getFileNames'|'getFile'|'removeFile', params: any[], callback: Function}


export type SaveFile =  <T extends keyof FileData>(fileInfoList: FileInfo<T>[],options: {isAdd: boolean}) =>  Promise<void>
 
export type GetFile = (path: string, options: {isDir: boolean}) =>  Promise<File[]>