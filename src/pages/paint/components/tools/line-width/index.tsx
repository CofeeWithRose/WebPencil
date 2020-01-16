import React, { useContext, useEffect, useState } from 'react'
import { Slider } from 'antd'
import localStyle from './index.less'
import { PaintContext } from '../../..'
import { ToolTypes } from '../../pannel/painter/interface'


export interface LineWidthProps {
  value?: number
  visibole: boolean
  onChange?: (value: number) => void
}

export default function LineWidth({value=10, visibole, onChange}: LineWidthProps){
	const {painter} = useContext(PaintContext)
	const [lineWidth, setLineWidth] = useState(10)
  
	const onSliderChange = (val: number) => {

		if(painter && val !== lineWidth){
			painter.setPaintDrawer(ToolTypes.WIDTH, val)
			setLineWidth(val)
			onChange && onChange(val)
		}
	}
  
	useEffect( () => {
		if(painter && value !== lineWidth){
			painter.setPaintDrawer(ToolTypes.WIDTH, value)
			setLineWidth(value)
		}
	}, [value])

	useEffect(()=> {
		if(painter&&visibole){
			painter.setPaintDrawer(ToolTypes.WIDTH, lineWidth)
		}
	}, [visibole])
  
	return 	<Slider
		value={lineWidth}
		min={1}
		max={100}
		className={`${localStyle.slider} ${
			visibole ? '' : localStyle.hideSlider}`}
		onChange={onSliderChange }
	/>
}