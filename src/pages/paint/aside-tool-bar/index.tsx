import React, { useEffect } from 'react'
import { PCanvasController } from '../pcanvas'
import { Slider, Divider } from 'antd'
import styles from './index.less'
import Record from './record'

export interface AsideToolBarProps {
    pCanvasController:PCanvasController
}

const defaultWidth = 1;

const defaultOpacity = 1;
export default ({pCanvasController}:AsideToolBarProps) => {

    useEffect(() => {
        if(pCanvasController){
            const onInit = () => {
                pCanvasController.setBrushWidth(defaultWidth)
                pCanvasController.setOpacity(defaultOpacity)
            }
            pCanvasController.on('init', onInit)
           return () => pCanvasController.off('init', onInit)
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
                defaultValue={defaultWidth} 
                vertical 
                min={1} max={200} step={1}
                onChange={onWidthChange} 
            />
            <Divider/>
            <Slider 
                vertical 
                defaultValue={defaultOpacity}
                min={0} max={1} step={0.01}
                onChange={onOpacityChange} 
            />
            <Divider />
            <Record pCanvasController={pCanvasController}/>
        <Divider/>
       
    </div>
   
}