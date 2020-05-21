import React, {Fragment, useEffect} from 'react'
import { PCanvasController } from '../pcanvas'
import { Divider } from 'antd'
import { LayerDetail } from '../../../workStorage'
export interface RecordProps {
    pCanvasController:PCanvasController
}

export default ({ pCanvasController }: RecordProps) => {

    useEffect(() => {
        const onAddLayer = (layerDetail:LayerDetail) => {

        }
        const onContentChange= (layerDetail: LayerDetail) => {

        }
        const onRemoveLayer = (layerDetail: LayerDetail) => {

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

    return <Fragment>
        <span>redo</span>
        <Divider/>
        <span>undo</span>
    </Fragment>
}