import React, { Fragment, ReactNode, ReactNodeArray, Component, useEffect } from 'react'
import ColorSelector from './tool-item/color-selector'
import { RGBA } from './tool-item/color-selector/rgba'
import style from './index.less'
import { PCanvasController } from '../pcanvas'
import LayerPannel from './tool-item/layer-pannel'
import SaveTool from './tool-item/save'

export interface TopToolBarProps{
    pCanvasController: PCanvasController
}

const DEFAULT_COLOR = RGBA.BLACK
export default function TopToolBar({ pCanvasController }:TopToolBarProps) {


	const changeColor = (val=DEFAULT_COLOR) => {
		pCanvasController.setColor(val)
	}
	useEffect(() => {
		if(pCanvasController){
			pCanvasController.on('init', () =>  changeColor())
			return pCanvasController.off('init', () =>  changeColor())
		}
	},[])

	return <div className={style.topToolBar}>
		<LayerPannel pCanvasController={pCanvasController}/>
		<ColorSelector
			defaultValue={DEFAULT_COLOR}
			onChange={changeColor}
		/>
		<SaveTool pCanvasController={pCanvasController} />
	</div>
}