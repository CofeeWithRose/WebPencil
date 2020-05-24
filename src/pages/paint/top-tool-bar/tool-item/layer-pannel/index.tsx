import React, { useEffect, useState, useMemo, useRef, MutableRefObject, RefObject } from 'react'
import { Tooltip, List, Drawer, Tag, Divider } from 'antd'
import { PCanvasController, CanvasEventData } from '../../../pcanvas/pcnvas.controller'
import { LayerDetail } from '../../../../../workStorage'
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

   
    const showLayerPannel = () => {
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
                layers.push(layer)
                needUpdateRef.current.push(layer)
            }
            setLayers(pre => [...pre,...layers])
            // console.log('init..')
        }
        pCanvasController.on('init', init)
       return () => pCanvasController.off('init', init)
    },[])
   

    useEffect(() => {

        const onFocusLayer = ( {data: {layerDetail}}: CanvasEventData['focusLayer']) => {
            console.log('onFocusLayer...')
            setActiveLayerId(layerDetail.layerId)
        }
        const onAddLayer = ( {data: {layerDetail}}: CanvasEventData['addLayer']) => {
            console.log('onAddLayer')
            needUpdateRef.current.push(layerDetail)
            setLayers( preLayers =>  [layerDetail, ...preLayers])
        }
        const onRemoveLayer = ( { data:{layerDetail}}:CanvasEventData['removeLayer']) => {
            setLayers( preLayers => {
                const index = preLayers.indexOf(layerDetail)
                if(index > -1){
                    preLayers.splice(index, 1)
                }
                return [...preLayers]
            })
        }
        const onContentChange = ({ data:{ layerDetail}, creator}:CanvasEventData['contentChange']) => {
            if(layerDetail){
                needUpdateRef.current.push(layerDetail)
                setTimeout(copyCanvas)
                if(creator === 'user'){
                    setShowLayerDraw( false)
                }
            }
        }
        pCanvasController.on('addLayer', onAddLayer)
        pCanvasController.on('contentChange', onContentChange)
        pCanvasController.on('focusLayer', onFocusLayer)
        pCanvasController.on('removeLayer', onRemoveLayer)
        return () => {
            pCanvasController.off('contentChange', onContentChange)
            pCanvasController.off('addLayer', onAddLayer)
            pCanvasController.off('focusLayer', onFocusLayer)
            pCanvasController.off('removeLayer', onRemoveLayer)
        }
    }, [])
   

    const addLayer =() => {
        pCanvasController.addLayer()
    }

    const focusLayer = (layerDetail: LayerDetail) => {
        pCanvasController.focusLayer(layerDetail)
    }

    const onRemove = (layerDetail: LayerDetail) => {
        pCanvasController.removeLayer(layerDetail)
    }

    const listItemLRender = ( layer: LayerDetail, index: number ) => {
        const { visible, layerId, name } = layer
        return <List.Item
                className={layerId === activeLayerId? styles.active : ''}
            >
                <List.Item.Meta
                    avatar={
                    <canvas 
                        onPointerUp={() => focusLayer(layer)}
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
                    description={ 
                        <div>
                            <span>{visible? "visible": "unvisible"}</span>
                            <span onPointerUp={ () => onRemove(layer)} >remove</span> 
                        </div>
                    }
                    />
                </List.Item>
        }

    return <div>
                <Tag onPointerUp={showLayerPannel}>111</Tag>
                <Drawer
                    title={null}
                    width={200}
                    visible={showLayerDraw}
                    onClose={showLayerPannel}
                    mask={false}
                >
                    <List
                        header={<span onPointerUp={addLayer}>addlayer +</span>}
                        className={styles.pannelWrap}
                        itemLayout="horizontal"
                        dataSource={layers}
                        rowKey="layerId"
                        renderItem={listItemLRender}
                    />
                </Drawer>
            </div>
}