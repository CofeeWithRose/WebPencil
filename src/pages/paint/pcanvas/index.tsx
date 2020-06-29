import React, { useRef, useEffect, useState } from 'react'
import styles from './style.less'
import { WorkDetail } from '../../../workStorage'
import { PCanvasController, WrapInfo, CanvasEventData, CanvasEvent } from './pcnvas.controller'
import { Spin } from 'antd'
import useTransform from '@/hooks/useTransform'
 

 interface PCanvasProps {

    initValue?: WorkDetail,

    pCanvasController?: PCanvasController

    loading: boolean

}

const usePCanvas = () => {
	const {current: pCanvas} = useRef(new PCanvasController())
	return {
		pCanvas
	}
}

/**
 * 手绘编辑器的画板.
 */
const PCanvas = ({ initValue, pCanvasController, loading }: PCanvasProps) =>{
   
	const coverRef = useRef<HTMLDivElement>(null)

	const wrapRef = useRef<HTMLDivElement>(null)

	const viewRef = useRef<HTMLElement>(null)

	const [ minScale, setMinScale ] = useState(0.1)
	const [ info, setInfo ] = useState({width: 0, height: 0})


	const {status} = useTransform({ 
		minScale, maxScale: 10, 
		viewRef, transRef: wrapRef,
		scaleRef: wrapRef,
		srcScaleWidth: info.width,
		srcScaleHeight: info.height 
	})
  
	useEffect(() => {
		if(!initValue ) return
		if(pCanvasController&& wrapRef.current&&coverRef.current){
			const wrapInfo: WrapInfo = {
				wrap: wrapRef.current,
				cover: coverRef.current,
			}
			pCanvasController.init(wrapInfo, initValue)
			return () => {
			}
		}
	}, [initValue])

	useEffect(() => {
		if(!initValue ) return
		const cover = coverRef.current
		const onPointerDown = (pointEvent: PointerEvent) => {
			if(pCanvasController){
				if(status.isScaling || status.isTransForming) return
				pCanvasController.onPointerDown(pointEvent)
			}
		}
		const onPointerMove = (pointEvent: PointerEvent) => {
			if(pCanvasController){
				if(status.isScaling || status.isTransForming) return
				pCanvasController.onPointerMove(pointEvent)
			}
		}
		const onPointerUp = (pointEvent: PointerEvent) => {
			if(pCanvasController){
				pCanvasController.onPointerUp(pointEvent)
			}
		}
		const init = ({ data }: CanvasEventData['init']) => {
			if(cover){
				cover.addEventListener('pointerdown', onPointerDown, {passive: false})
				cover.addEventListener('pointermove', onPointerMove, {passive: false})
				cover.addEventListener('pointerup', onPointerUp, {passive: false})
				setInfo({...data})
			}
		}
    pCanvasController?.on('init', init)
    return () => {
    	if(cover){
    		cover.removeEventListener('pointerdown', onPointerDown)
    		cover.removeEventListener('pointermove', onPointerMove)
    		cover.removeEventListener('pointerup', onPointerUp)
        pCanvasController?.off('init', init)
    	}
    }
    
	}, [coverRef.current, initValue])

  
	return <main 
		ref={viewRef}
		className={styles.pCanvas}
        
	>
		<section
			ref={wrapRef}
			className={styles.canvasWrap}
		>
			<div ref={coverRef} className={styles.cover}></div>
		</section>
		{ loading&&
        <div className={styles.mask} onMouseMove={ ({nativeEvent}) => nativeEvent.stopPropagation()  }>
        	<Spin/> 
        </div>
		}
	</main>
}

export {
	PCanvas,
	PCanvasController,
	usePCanvas,
	CanvasEventData,
	CanvasEvent,
}