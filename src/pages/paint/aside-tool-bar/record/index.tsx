import React, {Fragment, useEffect, useState} from 'react'
import { Divider } from 'antd'
import { LayerDetail } from '../../../../workStorage'
import { PCanvasController } from '../../pcanvas'
export interface RecordProps {
    pCanvasController:PCanvasController
}

export default ({ pCanvasController }: RecordProps) => {

    const [ recorderCursor, setRecorderCursor ] = useState(0)

    useEffect(() => {
        const onAddLayer = (layerDetail:LayerDetail) => {
            // TODO
        }
        const onContentChange= (layerDetail: LayerDetail) => {
            // TODO
        }
        const onRemoveLayer = (layerDetail: LayerDetail) => {
            // TODO
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
        setRecorderCursor(cursor => ++cursor)
    }

    const undo = () => {
        // TODO
        setRecorderCursor( cursor => --cursor )
    }
    return <Fragment>
        <span onClick={redo}>redo</span>
        <Divider/>
        <span onClick={undo} >undo</span>
    </Fragment>
}