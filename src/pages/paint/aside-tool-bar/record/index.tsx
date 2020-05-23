import React, {Fragment, useEffect, useState, useRef} from 'react'
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
    }else{
        // remove.
        const { index, canvas } = data as RecordData['remove']
        return new RecordInfo('add', {index, canvas})
    }
}

const handleOperate = <T extends keyof RecordData>( { type, data } : RecordInfo<T>, pCanvas: PCanvasController) => {
    if(type === 'add'){
        const {index, canvas} = data as RecordData['add']
        const layerDetail = pCanvas.addLayerContent( index, canvas )
        pCanvas.focusLayer(layerDetail)
        return
    }
    if(type === 'modify'){
        const {index, from, to} = data as RecordData['modify']
        const layerDetail = pCanvas.setLayerContent( index, to )
        pCanvas.focusLayer(layerDetail)
        return
    }

}

export default ({ pCanvasController }: RecordProps) => {

    const [ recorderCursor, setRecorderCursor ] = useState(-1)

    const recorderRef = useRef<RecordInfo<keyof RecordData>[]>([])

    const canUndo = recorderCursor >= 0

    const canRedo = recorderCursor < recorderRef.current.length -1
    console.log(recorderCursor, recorderRef.current.length)

    const addCursor = () => {
       
        setRecorderCursor(recorderCursor => {
            if(recorderRef.current.length-1 > recorderCursor ){
                recorderRef.current.splice( Math.min(recorderCursor, 0))
            }
            return recorderCursor +1
        })
    }

    useEffect(() => {
        const onAddLayer = (event: CanvasEventData['addLayer'] ) => {
            const {data: {layerDetail: {canvas}, index}, creator} = event
            if(creator === 'history') return
            // TODO
            addCursor()
            recorderRef.current.push(new RecordInfo('add', {index, canvas:copyCanvas(canvas) }))

        }
        const onContentChange= (event: CanvasEventData['contentChange']) => {
            const {data: { layerDetail:  {canvas}, preContent, index}, creator  } = event
            if(creator === 'history') return
            // TODO
            addCursor() 
            recorderRef.current.push(new RecordInfo('modify', {index, from: preContent,  to:copyCanvas(canvas) }))
        }
        const onRemoveLayer = (event: CanvasEventData['removeLayer']) => {
            const {  data: {layerDetail:{canvas}, index}, creator } = event
            if(creator === 'history') return
            // TODO
            addCursor()
            recorderRef.current.push(new RecordInfo('remove', {index, canvas: copyCanvas(canvas)}))
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
        // TODO
        setRecorderCursor(cursor => {
            const recordIndex = Math.min(++cursor,recorderRef.current.length -1)
            const operate = recorderRef.current[recordIndex]
           return recordIndex
        })
    }

    const undo = () => {
        // TODO
        setRecorderCursor( cursor => {
            const recordIndex = Math.max(--cursor, -1)
            const operate = recorderRef.current[recordIndex]
            return recordIndex
        })
    }
    return <Fragment>
        <span className={ canRedo&&styles.recordBtnActive||''} onClick={redo}>redo</span>
        <Divider/>
        <span className={canUndo&&styles.recordBtnActive ||''} onClick={undo} >undo</span>
    </Fragment>
}