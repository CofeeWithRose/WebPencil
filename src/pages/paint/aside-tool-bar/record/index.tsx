import React, {Fragment, useEffect, useState, useRef, useReducer, Reducer} from 'react'
import { Divider } from 'antd'
import { LayerDetail } from '../../../../workStorage'
import { PCanvasController, CanvasEventData } from '../../pcanvas'
import styles from './index.less'
import { copyCanvas } from '../../../../workStorage/canvas.util'
export interface RecordProps {
    pCanvasController:PCanvasController
}


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

type RecorderInfo ={cursor: number, recorderList: RecordInfo<keyof RecordData>[]}
type RecorderAction = { type: 'add'|'redo'|'undo', payload?: RecordInfo<keyof RecordData>, pCanvasController?: PCanvasController }

const recordListReducer: Reducer<RecorderInfo, RecorderAction> = (
    {cursor, recorderList}, 
    {type, payload, pCanvasController}
) => {
    switch(type) {
        case 'add':
            if( cursor++ > recorderList.length-1){
                recorderList.splice(Math.max(cursor, 0))
            }
            payload&&recorderList.push(payload)
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

export default ({ pCanvasController }: RecordProps) => {

    const [ {cursor, recorderList}, dispatchRecord ] = useReducer(recordListReducer, { cursor: -1, recorderList: []})

    const canUndo = cursor >= 0

    const canRedo = cursor < recorderList.length -1

    useEffect(() => {

        const onAddLayer = (event: CanvasEventData['addLayer'] ) => {
            const {data: {layerDetail: {canvas}, index}, creator} = event
            if(creator === 'history') return
            dispatchRecord({
                type: 'add',
                payload: new RecordInfo('add', {index, canvas: copyCanvas(canvas) })
            })
        }

        const onContentChange= (event: CanvasEventData['contentChange']) => {
            const {data: { layerDetail:  {canvas}, preContent, index}, creator  } = event
            if(creator === 'history') return
            dispatchRecord({
                type: 'add',
                payload:new RecordInfo('modify', {index, from: preContent,  to: copyCanvas(canvas) })
            })
        }

        const onRemoveLayer = (event: CanvasEventData['removeLayer']) => {
            const {  data: {layerDetail:{canvas}, index}, creator } = event
            if(creator === 'history') return
            dispatchRecord({
                type: 'add',
                payload: new RecordInfo('remove', {index, canvas: copyCanvas(canvas)})
            })
        }

        pCanvasController.on('addLayer', onAddLayer)
        pCanvasController.on('contentChange', onContentChange)
        pCanvasController.on('removeLayer', onRemoveLayer)
        return () => {
            pCanvasController.off('addLayer', onAddLayer)
            pCanvasController.off('contentChange', onContentChange)
            pCanvasController.off('removeLayer', onRemoveLayer)
        }
    },[])

    const redo = () => {
        dispatchRecord({ type:'redo',pCanvasController })
       
    }

    const undo = () => {
       dispatchRecord({ type: 'undo', pCanvasController })
    }
    return <Fragment>
        <span className={ canRedo&&styles.recordBtnActive||''} onClick={redo}>redo</span>
        <Divider/>
        <span className={canUndo&&styles.recordBtnActive ||''} onClick={undo} >undo</span>
    </Fragment>
}