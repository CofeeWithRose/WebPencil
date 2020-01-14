
import { useRef, useEffect, useState } from 'react'
import { Painter } from './painter'
import { OnSelectTool } from './painter/interface'


export const usePainter = () => {
	const container = useRef<HTMLDivElement>(null)
	const [painter, setPainter] = useState()
	useEffect(() => {
		if (container.current) {
			setPainter(Painter.createPainter(container.current, { width: screen.width, height: screen.height }))
		}
	}, [])

	const onSelectTool: OnSelectTool = (type, value) => {
		painter.setPaintDrawer(type, value)
	}
	return {
		container,
		onSelectTool,
	}
}