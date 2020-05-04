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
    value?: RGBA
}

export default  ({value, onChange}: ColorSelectorProps) => {
    const [showColorPanel, setShowColorPannel] = useState(false)
    
	const modaleChange = () => {
		setShowColorPannel(val => !val)
	}


	return <Fragment>
		<div 
			style={{backgroundColor: value && value.toColorString()}}
			className={style.colorBar}
			onClick={modaleChange} 
		>
        
		</div>
		<Drawer
			title="colors"
			visible={showColorPanel}
			onClose={modaleChange}
		>
			<ColorPannel 
				value={value} 
				onChange={onChange}
			/>
		</Drawer>
	</Fragment>
    
}
