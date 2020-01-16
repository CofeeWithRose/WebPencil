import React, { useEffect, useRef, useMemo } from 'react'
import toolStyle from '../index.less'
import { debounce } from 'lodash'
import { OnSelectTool, ToolTypes } from '../../pannel/painter/interface'
import { PainterTooolProps } from '../../toolbar'

export type ColorSelector = { onChange: (  ) => void }

const handleSelectColor = (e: PointerEvent, onSelectTool: OnSelectTool) => {

}

const SelectColor = ({ onActiveTool, curState }: PainterTooolProps) => {


	const handleSelectColor = useRef( debounce((e: PointerEvent) => {
		// 使用 react context.
		console.log('move....', )
	},50))

	const handleClick = () => {
		if(curState !== ToolTypes.SELECTOR ){
			onActiveTool(ToolTypes.SELECTOR)
		}
	}

	useEffect(()=> {
		if(curState !== ToolTypes.SELECTOR){
			window.removeEventListener('pointermove', handleSelectColor.current)
		}else{
			window.addEventListener('pointermove', handleSelectColor.current)
			return  () => window.removeEventListener('pointermove', handleSelectColor.current)
		}
	},[curState])

  

	return <div 
		className = {`${toolStyle.tooBarItem} ${ curState === ToolTypes.SELECTOR ? toolStyle.tooBarActiveItem : ''}` }
		onClick={handleClick}> 
     选择颜色器 
	</div>
}
export default SelectColor