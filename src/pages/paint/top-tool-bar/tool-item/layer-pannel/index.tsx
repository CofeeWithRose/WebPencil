import React, { useEffect, useState, useMemo } from 'react'
import { Tooltip, List } from 'antd'
import { PCanvasController } from '../../../pcanvas/pcnvas.controller'
import { LayerDetail, LayerDetailType } from '../../../../../workStorage'
import styles from './style.less'

export interface  LayerProps{
    pCanvasController: PCanvasController
}

export default ({ pCanvasController }: LayerProps) => {

    const [layers, setLayers] = useState<LayerDetail[]>([])

    const [ activeLayerId, setActiveLayerId ] = useState('')
    
    useEffect(() => {
        const init = () => {
            const layers = pCanvasController.getLayers()
            setLayers(layers.filter( ({type}: LayerDetail) => type === LayerDetailType.NORMAL))
            const coverIndex = layers.findIndex(({type}) => type === LayerDetailType.TEMP_COVER )
            const curLayer = layers[coverIndex + 1]
            if(curLayer){
                setActiveLayerId(curLayer.layerId)
            }
        }
        pCanvasController.addListener('init', init)
       return () => pCanvasController.removeListener('init', init)
    },[])

    const addLayer =() => {
        pCanvasController.addLayer()
    }

    return <Tooltip 
                className={styles.layerPannel}
                placement="bottomLeft"
                trigger="click"
                title={
                    <List
                        header={<span onClick={addLayer}>+</span>}
                        className={styles.pannelWrap}
                        itemLayout="horizontal"
                        dataSource={layers}
                        renderItem={({name, visible, layerId}: LayerDetail) => (
                        <List.Item>
                            <List.Item.Meta
                            className={layerId === activeLayerId? styles.active : ''}
                            avatar={<canvas className={styles.canvases} width="45" height="45"></canvas>}
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