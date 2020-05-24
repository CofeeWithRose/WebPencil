import React, { useState, Fragment, useContext, useEffect } from 'react'
import style from './index.less'
import { Drawer } from 'antd'
import ColorPannel from './color-pannel'
// import { PainterTooolProps } from '../../toolbar'
import { RGBA } from './rgba'
// import { ToolTypes } from '../../pannel/painter/interface'
// import { PaintContext } from '../../..'

export interface ColorSelectorProps {
    onChange?: (value: RGBA) => void
	value?: RGBA,
	defaultValue?: RGBA,
}

export default  ({value, onChange, defaultValue}: ColorSelectorProps) => {
	const [showColorPanel, setShowColorPannel] = useState(false)
	const [rgba, setRGBA] = useState(defaultValue|| RGBA.BLACK)

	useEffect(() => {
		if(value){
			setRGBA(value)
			return
		}
	}, [ value ])



    
	const modaleChange = () => {
		setShowColorPannel(val => !val)
	}

	const onColorChange = (val:RGBA) => {
		setRGBA(val)
		onChange && onChange(val)
	}

	return <Fragment>
		<div 
			style={{backgroundColor: rgba.toRGBAString()}}
			className={style.colorBar}
			onPointerUp={modaleChange} 
		>
        
		</div>
		<Drawer
			title="colors"
			visible={showColorPanel}
			onClose={modaleChange}
		>
			<ColorPannel 
				value={rgba} 
				onChange={onColorChange}
			/>
		</Drawer>
	</Fragment>
    
}
