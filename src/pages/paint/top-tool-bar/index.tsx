import React, { Fragment, ReactNode, ReactNodeArray, Component } from 'react'
import ColorSelector from '../tool-item/color-selector'
import { RGBA } from '../tool-item/color-selector/rgba'
import style from './index.less'
import { PCanvasInstance } from '../p-canvas'

export interface TopToolBarProps{
    pCanvasInstance?: PCanvasInstance
    // onChange?: ()
}

export default ({ pCanvasInstance }:TopToolBarProps) => {

    const onColorChange = (val:RGBA) => {
        if(pCanvasInstance){
            pCanvasInstance.setColor(val)
        }
    }

    return <div className={style.topToolBar}>
       <ColorSelector
            onChange={onColorChange}
       />
    </div>
}