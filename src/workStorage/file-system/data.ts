export interface FileData {
    text:string
    blob: Blob
}

export interface FileInfo<T extends keyof FileData> {
    path:string
    type: T
    data:FileData[T]
}

export interface FileApiOptions {
    permissionTip: (callback: () => Promise<void>) => Promise<void>
}

export type FileOperate = {name: 'saveFile'|'getFileNames'|'getFile'|'removeFile', params: any[], callback: Function}
