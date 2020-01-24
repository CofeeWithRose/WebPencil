import React, { Fragment, useState, useContext, useMemo, useEffect } from 'react'
import { Slider, Tooltip, Icon } from 'antd'
import style from '../index.less'
import { debounce } from 'lodash'
import PencilPen from '../../pannel/pens/pen.pencil'
import { OnSelectTool } from '../../pannel/painter/interface'
import { ToolTypes } from '../../pannel/painter/interface'
import { PainterTooolProps } from '../../toolbar'
import { PaintContext } from '../../..'
import LineWidth from '../line-width'


export default function Pencil({ onActiveTool, curState }: PainterTooolProps){

	const {painter} = useContext(PaintContext)
	const [isShowWidth, setIsShowWidth] = useState(false)
	const [lineWidth, setLineWidth] = useState(10)

	useEffect(() => {
		if(curState !== ToolTypes.PENCIL){
			setIsShowWidth(false)
		}
		if( painter && curState === ToolTypes.PENCIL){
			painter.setPaintDrawer(ToolTypes.WIDTH, lineWidth)
		}
	}, [curState])

	const handleClick = () => {
		if (curState === ToolTypes.PENCIL) {
			setIsShowWidth( isShowWidth => !isShowWidth)
		}
		onActiveTool(ToolTypes.PENCIL)
		if(painter){
			const pencilPen = new PencilPen()
			pencilPen.init(painter)
			painter.setPaintDrawer(ToolTypes.PENCIL, pencilPen)
		}
	}


	return <Fragment>
		<span
			className={`
				${style.tooBarItem }
				${curState === ToolTypes.PENCIL ? style.tooBarActiveItem : ''}
			`}   
			onClick={handleClick}
		>
			<Tooltip title="pencil" placement="bottom" >
				<Icon type="edit" />
			</Tooltip>
		</span>
		<LineWidth 
			visibole={isShowWidth} 
			value={lineWidth}
			onChange={setLineWidth}
		/>
	</Fragment>

}
