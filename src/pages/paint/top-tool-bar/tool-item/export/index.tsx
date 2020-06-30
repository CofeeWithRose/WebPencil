import React, { Fragment, useRef, useEffect } from 'react'
import { PCanvasController, CanvasEventData } from '@/pages/paint/pcanvas'
import { Button, Modal } from 'antd'
import styles from './index.less'
import { WorkInfo } from '@/workStorage'
import { createCanvas, toArrayBuffer, toBlob } from '@/util/canvas'
import { RGBA } from '../color-selector/rgba'

export interface ExportProps {
    pCanvasController:PCanvasController
}
export function Export({pCanvasController}:ExportProps){

	const wrapInfoRef = useRef<{ workInfo:WorkInfo|null }>({workInfo: null})
    
	const canvasRef = useRef<HTMLCanvasElement>(null)


	useEffect(() => {
		if(pCanvasController){
			const init = ({data}: CanvasEventData['init']) => {
				wrapInfoRef.current.workInfo = data
			}
			pCanvasController.on('init', init)
			return () =>{
				pCanvasController.off('init', init)
			}
		}
	}, [ pCanvasController])

	const showExport = async () => {
		if(wrapInfoRef.current?.workInfo){
			const { width, height, name } = wrapInfoRef.current?.workInfo
			const canvas = createCanvas(width, height, new RGBA(100,0,0))
			const layers = await pCanvasController.getLayers()
			const ctx = canvas.getContext('2d')
			if(ctx){
				layers.reduceRight( (_: any, {canvas}) => {
					ctx.drawImage(canvas, 0, 0, width, height)
				}, {})
			}
			const link = document.createElement('a')
			link.href = canvas.toDataURL()
			link.download = `${name}.png`
			link.onclick = () => {
				link.onload = null
				const {destroy} =  Modal.info({
					title: 'export',
					content: 'success',
					onOk: () => destroy()
				})
			} 
			link.click()
		}
	}

	return <Button 
		size="small" 
		style={{margin: '0 10px' }} 
		onClick={showExport}
	>
        export
	</Button>
}