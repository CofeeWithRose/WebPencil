import React, { useState, Fragment } from 'react'
import style from './index.less'
import { Drawer } from 'antd'
import ColorPannel from './color-pannel'
import { PainterTooolProps } from '../../toolbar'
import { RGBA } from '../../pannel/rgba'
import { ToolTypes } from '../../pannel/painter/interface'

const Color = ({onSelectTool}: PainterTooolProps) => {
	const [color, setColor] = useState(new RGBA(0,0,0))
	const [showColorPanel, setShowColorPannel] = useState(false)
	const handleShow = () => {
        
		setShowColorPannel(true)
	}

	const handleClose = () => {
		setShowColorPannel(false)
		onSelectTool(ToolTypes.COLOR, color.toColorString())
	}
	// const handleClick = () => {
	//     onActiveTool(ToolTypes.ERASER)
	//     onSelectTool(ToolTypes.ERASER, eraser)
	// }
	const handleColorChange = (value: RGBA) => {
		setColor(value)
	}
    
	return <Fragment>
		<div 
			style={{backgroundColor: color.toColorString()}}
			className={style.colorBar}
			onClick={handleShow} 
		>
        
		</div>
		<Drawer
			title="colors"
			visible={showColorPanel}
			onClose={handleClose}
		>
			<ColorPannel 
				value={color} 
				onChange={handleColorChange}
			/>
		</Drawer>
	</Fragment>
    
}

export default Color