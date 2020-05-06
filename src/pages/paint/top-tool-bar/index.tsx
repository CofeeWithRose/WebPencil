import React, { Fragment, ReactNode, ReactNodeArray, Component } from 'react'
import ColorSelector from '../tool-item/color-selector'
import { RGBA } from '../tool-item/color-selector/rgba'
import style from './index.less'
import { PCanvasController } from '../pcanvas'

export interface TopToolBarProps{
    pCanvasController?: PCanvasController
    // onChange?: ()
}

export default ({ pCanvasController }:TopToolBarProps) => {

    const onColorChange = (val:RGBA) => {
        if(pCanvasController){
            pCanvasController.setColor(val)
        }
    }

    return <div className={style.topToolBar}>
       <ColorSelector
            onChange={onColorChange}
       />
    </div>
}