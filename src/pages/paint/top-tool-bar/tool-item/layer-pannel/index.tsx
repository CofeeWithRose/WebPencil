import React, { useEffect, useState } from 'react'
import { Tooltip, List } from 'antd'
import { PCanvasController } from '../../../pcanvas/pcnvas.controller'
import { LayerDetail, LayerDetailType } from '../../../../../workStorage'
import styles from './style.less'

export interface  LayerProps{
    pCanvasController: PCanvasController
}

export default ({ pCanvasController }: LayerProps) => {

    const [layers, setLayers] = useState<LayerDetail[]>([])
    
    useEffect(() => {
        const init = () => {
            setLayers(pCanvasController.getLayers().filter( ({type}: LayerDetail) => type === LayerDetailType.NORMAL))
        }
        pCanvasController.addListener('init', init)
       return () => pCanvasController.removeListener('init', init)
    },[])

    return <Tooltip 
                className={styles.layerPannel}
                placement="bottomLeft"
                trigger="click"
                title={
                    <List
                    itemLayout="horizontal"
                    dataSource={layers}
                    renderItem={({}: LayerDetail) => (
                    <List.Item>
                        <List.Item.Meta
                        avatar={<canvas style={{background: 'origin'}} width="24" height="24"></canvas>}
                        title={name}
                        description="visible"
                        />
                    </List.Item>
                    )}
                />
                    // <div>
                    //     {
                    //         layers.filter( ({type}: LayerDetail) => type === LayerDetailType.NORMAL)
                    //             .map(({ layerId }: LayerDetail) => {
                    //                 return <div key={layerId}>
                    //                     <canvas width={100} height={100}  ></canvas>
                    //                     <span>1312</span>
                    //                 </div>
                    //         })
                    //     }
                    // </div>
                }
            >
                lll
            </Tooltip>
}