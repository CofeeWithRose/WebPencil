import { FileData, FileInfo, FileOperate, FileApiOptions, GetFile } from './data'
import Dexie from 'dexie'
let db: Dexie 
/**
 * 更改后会导致删库.
 */
const vsion = '1'
export class FileApi {

    protected static operates:FileOperate[] = []

    protected static isOperating = false

    static async init(_: FileApiOptions){
    	if(localStorage.getItem('has_clean_db') !==vsion){
    		await Dexie.delete('WebPencilVitureFile')
    		localStorage.setItem('has_clean_db', vsion)
    	}
    	db = await new Dexie('WebPencilVitureFile')
    	await db.version(1).stores({
    		files: '++id, [path+name]'
    	})
       
    }

    static async save<T extends keyof FileData>(fileInfo: FileInfo<T>): Promise<void>{
    	return new Promise( callback => {
    		const operte: FileOperate = { name: 'saveFile', params:[fileInfo], callback }
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
    static async remove(path: string, name?:string): Promise<void> {
    	return new Promise( callback => {
    		const operte: FileOperate = { name: 'removeFile', params:[path, name], callback }
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

    protected static async saveFile<T extends keyof FileData>({path, data, type, name }: FileInfo<T>): Promise<void>{
    	console.time('saveFile')  
    	const oldFileItem: FileInfo<T> = await (db as any).files.where('[path+name]').equals([path, name]).first()
    	if(oldFileItem){
    		const { id } = oldFileItem
    		await (db as any).files.put({ id, path, data, type, name })
    	}else{
    		await (db as any).files.add({path, data, type, name})
    	}
    	console.timeEnd('saveFile')
    }

    // protected static parseToStore = async <T extends keyof FileData>({path, data, type }: FileInfo<T>) => {
    //   const {pathName, name} = FileApi.analyzePath(path)
    //   if(type === 'application/json'){
    //   }
    //   if(type === 'image/png'){
    //     const url = URL.createObjectURL(data);
    //     // safari 不支持直接存储 Blob,转为arrayBuffer进行存储.
    //     const buffer = await ( await fetch(url)).arrayBuffer()
    //     URL.revokeObjectURL(url)
    //     return { path: pathName, name, type, file: buffer }
    //   }
    //   throw 'parse to stote error' + path
    // }

    static analyzePath(fullPath:string){
    	const index = fullPath.lastIndexOf('/')
    	const path = fullPath.substring(0, index)
    	const name = fullPath.substr(index+1)
    	return {name,  path}
    }

    protected static getFile:GetFile = async <T extends keyof FileData>(path:string, name?: string) => {
    	console.time('getFile')
    	let files:FileInfo<T>[]
    	if(!name){
    		files = await (db as any).files.where('path').equals(path).toArray()
    		// files= res.map((item:FileDes<keyof FileData>) => FileApi.transToFile(item))
    	}else{
    		// const {name, pathName} = FileApi.analyzePath(path)
    		files = [ await (db as any).files.where('[path+name]').equals([path, name]).first() ]
    		// files = [ FileApi.transToFile(res) ]
    	}
    	console.timeEnd('getFile')
    	return files
    }

    // protected static transToFile = (res:FileDes<keyof FileData>) => {
    //   if(res&&res.type === 'application/json'){
    //     const { name, type , file} = res as FileDes<'application/json'>
    //     return { text: () => file, name, type, size: file.length } as any
    //   }
    //   if(res&&res.type === 'image/png'){
    //     const { data, type  } = res as FileInfo<'image/png'>
    //     return new File([file], name )
    //   }
    // }

    protected static async getFileNames(path: string): Promise<string[]>{
    	const res = await (db as any).files.where({path}).toArray()
    	return res.map( ({name}: {name:string}) => name )
    }

    protected static async removeFile(path: string, name?:string): Promise<void> {
    	let count = 0
    	console.time('removeFile')
    	if(name){
    		//  const {name, pathName} =  this.analyzePath(path)
    		count = await (db as any).files.where('[path+name]').equals([path, name]).delete()
    	}else{
    		count =  await (db as any).files.where('path').startsWith(path).delete()
    	}
    	console.timeEnd('removeFile')
    	console.log('removeFileNUm: ', count)
       
    }

}