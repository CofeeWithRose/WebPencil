import React, { useEffect, Fragment, createContext } from 'react'
import { usePainter } from './components/pannel/index'
import style from './style.less'
import ToolBar from './components/toolbar/index'
import { Painter } from './components/pannel/painter'
export const PaintContext = createContext<{painter?: Painter}>({})
export default function Paint(){
	const { container, onSelectTool, painter } = usePainter()
	const { Provider } = PaintContext
	return <Provider value={{painter}}>
		<ToolBar onSelectTool={onSelectTool}/>
		<div ref={container}  className={style.container}></div>
	</Provider>
  
}