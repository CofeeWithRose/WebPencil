import React, { useEffect, useState, useMemo, useRef, MutableRefObject, RefObject } from 'react'
import { Tooltip, List } from 'antd'
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

    const needCopIdRef = useRef<LayerDetail[]>([])

    const [ activeLayerId, setActiveLayerId ] = useState('')

   

    useEffect(() => {
        const init = () => {
            const allLayers = pCanvasController.getLayers() 
            let layers: LayerDetail[] =[]
            for(let i = allLayers.length -1 ; i >= 0 ; i--){
                const layer = allLayers[i]
                if(layer.type === LayerDetailType.NORMAL){
                    layers.push(layer)
                    needCopIdRef.current.push(layer)
                }
                if(layer.type === LayerDetailType.TEMP_COVER){
                    setActiveLayerId(allLayers[i+1]?.layerId)
                }
            }
            setLayers(pre => [...pre,...layers])
            // console.log('init..')
        }
        pCanvasController.addListener('init', init)
       return () => pCanvasController.removeListener('init', init)
    },[])
   

    useEffect(() => {
        const onAddLayer = (layerDetail: LayerDetail) => {
            if(layerDetail.type === LayerDetailType.NORMAL ){
                needCopIdRef.current.push(layerDetail)
                setLayers( preLayers =>  [layerDetail, ...preLayers])
            }
        }
        pCanvasController.addListener('addLayer', onAddLayer)
        return () => pCanvasController.removeListener('addLayer', onAddLayer)
    }, [])

    const { copyCanvas } =  useCopyLayer(layers, needCopIdRef, canvasesRef)
   

    const addLayer =() => {
        pCanvasController.addLayer()
    }

    return <Tooltip 
                className={styles.layerPannel}
                placement="bottomLeft"
                trigger="click"
                onVisibleChange={() =>setTimeout(copyCanvas, 100)}
                title={
                    <List
                        header={<span onClick={addLayer}>+</span>}
                        className={styles.pannelWrap}
                        itemLayout="horizontal"
                        dataSource={layers}
                        rowKey="layerId"
                        renderItem={({name, visible, layerId}: LayerDetail ) => (
                        <List.Item>
                            <List.Item.Meta
                            className={layerId === activeLayerId? styles.active : ''}
                            avatar={
                            <canvas 
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
                            title={name}
                            description={visible? "visible": "unvisible"}
                            />
                        </List.Item>
                        )}
                    />
                }
            >
                lll
            </Tooltip>
}