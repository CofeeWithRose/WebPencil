
import { useRef, useEffect, useState } from 'react'
import { Painter } from './painter'
import { OnSelectTool } from './painter/interface'


export const usePainter = () => {
	const container = useRef<HTMLDivElement>(null)
	const [painter, setPainter] = useState()
	useEffect(() => {
		if (container.current) {
			const {clientWidth, clientHeight } = container.current
			setPainter(Painter.createPainter(container.current, { width: clientWidth, height: clientHeight }))
		}
	}, [])

	const onSelectTool: OnSelectTool = (type, value) => {
		painter.setPaintDrawer(type, value)
	}
	return {
		painter,
		container,
		onSelectTool,
	}
}