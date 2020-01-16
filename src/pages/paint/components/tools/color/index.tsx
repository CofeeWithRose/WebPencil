import React, { useState, Fragment, useContext } from 'react'
import style from './index.less'
import { Drawer } from 'antd'
import ColorPannel from './color-pannel'
import { PainterTooolProps } from '../../toolbar'
import { RGBA } from '../../pannel/rgba'
import { ToolTypes } from '../../pannel/painter/interface'
import { PaintContext } from '../../..'

const Color = () => {
	const [color, setColor] = useState(new RGBA(0,0,0))
	const [showColorPanel, setShowColorPannel] = useState(false)
	const handleShow = () => {
        
		setShowColorPannel(true)
	}

	const { painter} = useContext(PaintContext)
	const handleClose = () => {
		setShowColorPannel(false)
		if(painter){
			painter.setPaintDrawer(ToolTypes.COLOR, color.toColorString())
		}
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