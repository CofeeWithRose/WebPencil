import React, {Fragment, useEffect, useState, useRef, useReducer, Reducer} from 'react'
import { Divider } from 'antd'
import { LayerDetail } from '../../../../workStorage'
import { PCanvasController, CanvasEventData } from '../../pcanvas'
import styles from './index.less'
import { copyCanvas } from '../../../../workStorage/canvas.util'
import { recordListReducer, RecordInfo } from './reducer'
export interface RecordProps {
    pCanvasController:PCanvasController
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
        <span className={ canRedo&&styles.recordBtnActive||''} onPointerUp={canRedo&&redo|| undefined}>redo</span>
        <Divider/>
        <span className={canUndo&&styles.recordBtnActive ||''} onPointerUp={canUndo&&undo||undefined} >undo</span>
    </Fragment>
}