import { Reducer } from 'react'
import { PCanvasController } from '../../pcanvas'
import { FileApi } from '../../../../workStorage/file-system'
import { createCanvasByFile } from '../../../../util/canvas'
import { FileData, FileInfo } from '@/workStorage/file-system/data'

export class RecordData {
    
    add: { index: number, canvasPath: string }

    remove: { index: number, canvasPath: string }

    modify: { fromCanvasPath: string, toCanvasPath: string, index: number }
}

const deleteRecordFile = async ({ type, data  }: RecordInfo<keyof RecordData>) => {
	switch(type){
	case 'add':
		data = data as RecordData['add']
		const { path, name} = FileApi.analyzePath(data.canvasPath)
		await FileApi.remove(path, name)
		break
	case 'modify':
		const { fromCanvasPath, toCanvasPath} = data as RecordData['modify']
		const { path: fpath, name:fname} = FileApi.analyzePath(toCanvasPath)
		const { path:tPath, name: tName} = FileApi.analyzePath(fromCanvasPath)
		await Promise.all([ 
			FileApi.remove(fpath, fname),
			FileApi.remove(tPath, tName),
		])
		break
	case 'remove': 
		const { canvasPath } = data as RecordData['remove']
		const { path: p, name: n} = FileApi.analyzePath(canvasPath)
		await FileApi.remove(p, n)
		break
	}
}
export class RecordInfo <T extends keyof RecordData>{

	constructor(
       public readonly type: T,
       public readonly data: RecordData[T]
	){}
  
}

const getRevertRecor =<T extends keyof RecordData>( {type, data} : RecordInfo<T>): RecordInfo<keyof RecordData> => {
	if(type === 'add'){
		const { index, canvasPath: canvas } = data as RecordData['add']
		return new RecordInfo('remove', {index, canvasPath: canvas})
	}
	if(type === 'modify'){
		const { index, fromCanvasPath: from, toCanvasPath: to } = data as RecordData['modify']
		return new RecordInfo('modify', {index, fromCanvasPath: to, toCanvasPath: from })
	}

	// remove.
	const { index, canvasPath: canvas } = data as RecordData['remove']
	return new RecordInfo('add', {index, canvasPath: canvas})
}

const  handleOperate = async <T extends keyof RecordData>( record : RecordInfo<T>, pCanvas: PCanvasController) => {
	const { type, data } = record
	if(type === 'add'){
		const {index, canvasPath} = data as RecordData['add']
		const { path, name } = FileApi.analyzePath(canvasPath)
		const [{ data: buffer }] = await FileApi.get<'image/png'>(path, name)
		const canvas = await createCanvasByFile(buffer)
		const layerDetail = pCanvas.addLayerContent( index, canvas, 'history' )
		pCanvas.focusLayer(layerDetail)
		return
	}
	if(type === 'modify'){
		const {index, fromCanvasPath: from, toCanvasPath} = data as RecordData['modify']
		const { path, name } = FileApi.analyzePath(toCanvasPath)
		const [{data: buffer}] = await FileApi.get<'image/png'>(path, name)
		const to = await createCanvasByFile(buffer)
		const layerDetail = pCanvas.setLayerContent( index, to, 'history' )
		pCanvas.focusLayer(layerDetail)
		return
	}
	if(type === 'remove'){
		const {index } = data as RecordData['remove']
		const layerDetail = pCanvas.removeLayerByIndex(index, 'history')
		return
	}

}

export type RecorderInfo ={cursor: number, recorderList: RecordInfo<keyof RecordData>[]}
export type RecorderAction = { type: 'add'|'redo'|'undo', payload?: RecordInfo<keyof RecordData>, pCanvasController?: PCanvasController }

const MAX_ROCORD_NUMBER = 100
export const recordListReducer: Reducer<RecorderInfo, RecorderAction> =  (
	{cursor, recorderList}, 
	{type, payload, pCanvasController}
) => {
	switch(type) {
	case 'add':
		if( cursor < recorderList.length-1){
			const deleted =  recorderList.splice(Math.max(cursor, 0))
			deleted.map( record => deleteRecordFile(record))
		}
		if(MAX_ROCORD_NUMBER <= recorderList.length){
			const deleted  = recorderList.splice(0, recorderList.length - MAX_ROCORD_NUMBER + 1)
			deleted.map( record => deleteRecordFile(record))
		}
		cursor++
		payload&&recorderList.push(payload)
		// console.log('recorlength: ',recorderList.length )
		break
	case 'redo':

		/**
             *  state1 operate1=>  state2(current)  <=revert(operate2)  state3
             *         cursor
             * 
             * state1 operate1=>  state2  handle(operate2)=>  state3
             *                                    cursor
             */
		if(++cursor<= recorderList.length -1 ){
			const operate = recorderList[cursor]
			pCanvasController&& handleOperate( operate, pCanvasController )
		}
		break
	case 'undo': 
		/**
             * state1  operate1=>  state2  operate2=> state3(current)
             *                               cursor
             * 
             * state1 operate1=>  state2(current)  <=handle( revert(operate2) )  state3
             *         cursor
             */
		if(cursor > -1){
			const record = recorderList[cursor]
			pCanvasController&& handleOperate(getRevertRecor(record), pCanvasController )
		}
		cursor--
		break

	}
	return { 
		cursor: Math.max(Math.min(cursor, recorderList.length -1), -1), 
		recorderList 
	}
}
