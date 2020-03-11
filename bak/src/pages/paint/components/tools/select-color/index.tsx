import React, { useContext } from 'react'
import toolStyle from '../index.less'
import { ToolTypes } from '../../pannel/painter/interface'
import { PainterTooolProps } from '../../toolbar'
import { PaintContext } from '../../..'
import SelectRGB from '../../pannel/pens/pen.selectRGB'
import { Tooltip, Icon } from 'antd'
export type ColorSelector = { onChange: (  ) => void }


const SelectColor = ({ onActiveTool, curState }: PainterTooolProps) => {

	const { painter } = useContext(PaintContext)

	const handleClick = () => {
		if(curState !== ToolTypes.SELECTOR ){
			onActiveTool(ToolTypes.SELECTOR)
			if(painter){
				const selector = new SelectRGB()
				selector.init(painter)
				painter.setPaintDrawer(ToolTypes.SELECTOR, selector )
			}
			
		}
	}

  

	return <div 
		className = {`${toolStyle.tooBarItem} ${ curState === ToolTypes.SELECTOR ? toolStyle.tooBarActiveItem : ''}` }
		onClick={handleClick}> 
		<Tooltip title="pick" placement="bottom" >
			<Icon type="exclamation" />
		</Tooltip>
	</div>
}
export default SelectColor