import React, { Fragment, ReactNode, ReactNodeArray, Component } from 'react'
import ColorSelector from './tool-item/color-selector'
import { RGBA } from './tool-item/color-selector/rgba'

export interface TopToolBarProps{
    // onChange?: ()
}

export default ({  }:TopToolBarProps) => {

    const onColorChange = (val:RGBA) => {
        // console.log('rgba: ', val)
    }

    return <Fragment>
       <ColorSelector
            onChange={onColorChange}
       />
    </Fragment>
}