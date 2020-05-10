import React, { useEffect } from 'react'
import { PCanvasController } from '../pcanvas'
import { Slider, Divider } from 'antd'
import styles from './index.less'

export interface AsideToolBarProps {
    pCanvasController:PCanvasController
}

export default ({pCanvasController}:AsideToolBarProps) => {

    useEffect(() => {
        if(pCanvasController){
            const onInit = () => {
                pCanvasController.setBrushWidth(10)
                pCanvasController.setOpacity(1)
            }
            pCanvasController.addListener('init', onInit)
           return () => pCanvasController.removeListener('init', onInit)
        }
        pCanvasController && pCanvasController
    },[])

    const onWidthChange = (width: number) => {
        pCanvasController && pCanvasController.setBrushWidth(width)
    }
    const onOpacityChange = (op:number) => {
        pCanvasController && pCanvasController.setOpacity(op)
    }

    return <div className={styles.asideTool} >
        <Divider/>
            <Slider
                defaultValue={10} 
                vertical 
                min={10} max={200} step={2}
                onChange={onWidthChange} 
            />
            <Divider/>
            <Slider 
                vertical 
                defaultValue={1}
                min={0} max={1} step={0.01}
                onChange={onOpacityChange} 
            />
        <Divider/>
       
    </div>
   
}