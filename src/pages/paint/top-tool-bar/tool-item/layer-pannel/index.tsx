import React, { useEffect, useState, useMemo, useRef, MutableRefObject, RefObject } from 'react'
import { Tooltip, List, Drawer, Tag, Divider } from 'antd'
import { PCanvasController } from '../../../pcanvas/pcnvas.controller'
import { LayerDetail, LayerDetailType } from '../../../../../workStorage'
import styles from './style.less'
import useCopyLayer from '../../../../../hooks/use-copy-layer'

export interface  LayerProps{
    pCanvasController: PCanvasController
}


export default ({ pCanvasController }: LayerProps) => {

    const [layers, setLayers] = useState<LayerDetail[]>([])

    const canvasesRef = useRef<{[layerId: string]:HTMLCanvasElement}>({})

    const needUpdateRef = useRef<LayerDetail[]>([])

    const { copyCanvas } =  useCopyLayer(layers, needUpdateRef, canvasesRef)

    const [ activeLayerId, setActiveLayerId ] = useState('')

    const [ showLayerDraw, setShowLayerDraw ] = useState(false)

   
    const onClickLayer = () => {
        setShowLayerDraw( show => {
            if(!show){
              setTimeout(copyCanvas)
            }
            return !show
        })
    }
   

    useEffect(() => {
        const init = () => {
            const allLayers = pCanvasController.getLayers() 
            let layers: LayerDetail[] =[]
            for(let i = allLayers.length -1 ; i >= 0 ; i--){
                const layer = allLayers[i]
                if(layer.type === LayerDetailType.NORMAL){
                    layers.push(layer)
                    needUpdateRef.current.push(layer)
                }
                if(layer.type === LayerDetailType.TEMP_COVER){
                    setActiveLayerId(allLayers[i+1]?.layerId)
                }
            }
            setLayers(pre => [...pre,...layers])
            // console.log('init..')
        }
        pCanvasController.on('init', init)
       return () => pCanvasController.off('init', init)
    },[])
   

    useEffect(() => {

        const onFocusLayer = (layerDetail: LayerDetail) => {
            console.log('onFocusLayer...')
            setActiveLayerId(layerDetail.layerId)
        }
        const onAddLayer = (layerDetail: LayerDetail) => {
            console.log('onAddLayer')
            if(layerDetail.type === LayerDetailType.NORMAL ){
                needUpdateRef.current.push(layerDetail)
                setLayers( preLayers =>  [layerDetail, ...preLayers])
            }
        }
        const onContentChange = (layerDetail:LayerDetail) => {
            if(layerDetail){
                needUpdateRef.current.push(layerDetail)
            }
        }
        pCanvasController.on('addLayer', onAddLayer)
        pCanvasController.on('contentChange', onContentChange)
        pCanvasController.on('focusLayer', onFocusLayer)
        return () => {
            pCanvasController.off('contentChange', onContentChange)
            pCanvasController.off('addLayer', onAddLayer)
            pCanvasController.off('focusLayer', onFocusLayer)
        }
    }, [])
   

    const addLayer =() => {
        pCanvasController.addLayer()
    }

    const focusLayer = (layerDetail: LayerDetail) => {
        pCanvasController.focusLayer(layerDetail)
    }

    const listItemLRender = ( layer: LayerDetail, index ) => {
        const { visible, layerId, name } = layer
        return <List.Item
                className={layerId === activeLayerId? styles.active : ''}
            >
                <List.Item.Meta
                    avatar={
                    <canvas 
                        onClick={() => focusLayer(layer)}
                        key={layerId}
                        id={layerId}
                        ref={(ref:HTMLCanvasElement)=> {
                            canvasesRef.current[layerId] = ref
                        }} 
                        className={styles.canvases}
                        width="45" 
                        height="45"
                    >
                    </canvas>}
                    title={<span>{`layer ${layers.length - index}`}</span>}
                    description={visible? "visible": "unvisible"}
                    />
                </List.Item>
        }

    return <div>
                <Tag onClick={onClickLayer}>111</Tag>
                <Drawer
                    title={null}
                    width={200}
                    visible={showLayerDraw}
                    onClose={onClickLayer}
                >
                    <List
                        header={<span onClick={addLayer}>+</span>}
                        className={styles.pannelWrap}
                        itemLayout="horizontal"
                        dataSource={layers}
                        rowKey="layerId"
                        renderItem={listItemLRender}
                    />
                </Drawer>
            </div>
}