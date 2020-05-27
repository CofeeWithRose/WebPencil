import { Reducer } from "react"
import { PCanvasController } from "../../pcanvas"

export class RecordData {
    
    add: { index: number, canvas: HTMLCanvasElement }

    remove: { index: number, canvas: HTMLCanvasElement }

    modify: { from: HTMLCanvasElement, to: HTMLCanvasElement, index: number }
}

export class RecordInfo <T extends keyof RecordData>{

    constructor(
       public readonly type: T,
       public readonly data: RecordData[T]
    ){}
  
}

const getRevertRecor =<T extends keyof RecordData>( {type, data} : RecordInfo<T>): RecordInfo<keyof RecordData> => {
    if(type === 'add'){
        const { index, canvas } = data as RecordData['add']
        return new RecordInfo('remove', {index, canvas})
    }
    if(type === 'modify'){
        const { index, from, to } = data as RecordData['modify']
        return new RecordInfo('modify', {index, from: to, to: from })
    }

    // remove.
    const { index, canvas } = data as RecordData['remove']
    return new RecordInfo('add', {index, canvas})
}

const handleOperate = <T extends keyof RecordData>( record : RecordInfo<T>, pCanvas: PCanvasController) => {
    const { type, data } = record
    console.log('handleOperate: ', type)
    if(type === 'add'){
        const {index, canvas} = data as RecordData['add']
        const layerDetail = pCanvas.addLayerContent( index, canvas, 'history' )
        pCanvas.focusLayer(layerDetail)
        return
    }
    if(type === 'modify'){
        const {index, from, to} = data as RecordData['modify']
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

const MAX_ROCORD_NUMBER = 200
export const recordListReducer: Reducer<RecorderInfo, RecorderAction> = (
    {cursor, recorderList}, 
    {type, payload, pCanvasController}
) => {
    switch(type) {
        case 'add':
            if( cursor < recorderList.length-1){
                recorderList.splice(Math.max(cursor, 0))
            }
            if(MAX_ROCORD_NUMBER <= recorderList.length){
                recorderList.splice(0, recorderList.length - MAX_ROCORD_NUMBER + 1)
            }
            cursor++
            payload&&recorderList.push(payload)
            // console.log('recorlength: ',recorderList.length )
            break;
        case 'redo':
            if(++cursor<= recorderList.length -1 ){
                const operate = recorderList[cursor]
                pCanvasController&& handleOperate( operate, pCanvasController )
            }
            break;
        case 'undo': 
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
