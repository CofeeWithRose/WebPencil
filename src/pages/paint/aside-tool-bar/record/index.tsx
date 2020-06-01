import React, {Fragment, useEffect, useState, useRef, useReducer, Reducer} from 'react'
import { Divider } from 'antd'
import { PCanvasController, CanvasEventData } from '../../pcanvas'
import styles from './index.less'
import { copyCanvas, toBlob, createCanvasByFile } from '../../../../workStorage/canvas.util'
import { recordListReducer, RecordInfo } from './reducer'
import { uniqueId } from 'lodash'
import { FileApi } from '../../../../workStorage/file-system'
export interface RecordProps {
    pCanvasController:PCanvasController
}

const saveRecordCanvas = async (canvas: HTMLCanvasElement) => {
    const fileName = `record_${Date.now()}_${uniqueId()}.png`
    const blob = await toBlob(copyCanvas(canvas))
    const canvasPath = `record/${fileName}`
    if(blob){
        await FileApi.save({ type: 'blob', data: blob, path: canvasPath })
    }
    return  canvasPath
}

const getRecordCanvas = async (path: string) => {
   const file = await  FileApi.get(path)
   return await createCanvasByFile(file)
}
export default ({ pCanvasController }: RecordProps) => {

    const [ {cursor, recorderList}, dispatchRecord ] = useReducer(recordListReducer, { cursor: -1, recorderList: []})

    const canUndo = cursor >= 0

    const canRedo = cursor < recorderList.length -1

    useEffect(() => {

        const onAddLayer = async (event: CanvasEventData['addLayer'] ) => {
            const {data: {layerDetail: {canvas}, index}, creator} = event
            if(creator === 'history') return
                const canvasPath = await saveRecordCanvas(canvas)
                dispatchRecord({
                    type: 'add',
                    payload: new RecordInfo('add', {index, canvasPath })
                })
        }

        const onContentChange= async (event: CanvasEventData['contentChange']) => {
            const {data: { layerDetail:  {canvas}, preContent, index}, creator  } = event
            if(creator === 'history') return
            dispatchRecord({
                type: 'add',
                payload:new RecordInfo('modify', {
                    index, 
                    fromCanvasPath:  await saveRecordCanvas(preContent),  
                    toCanvasPath: await saveRecordCanvas(canvas)
                })
            })
        }

        const onRemoveLayer =  async (event: CanvasEventData['removeLayer']) => {
            const {  data: {layerDetail:{canvas}, index}, creator } = event
            if(creator === 'history') return
            const canvasPath = await saveRecordCanvas(canvas)
            dispatchRecord({
                type: 'add',
                payload: new RecordInfo('remove', {index, canvasPath })
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
        <span className={ canRedo&&styles.recordBtnActive||''} onPointerUp={canRedo&&redo|| undefined}>redo</span>
        <Divider/>
        <span className={canUndo&&styles.recordBtnActive ||''} onPointerUp={canUndo&&undo||undefined} >undo</span>
    </Fragment>
}