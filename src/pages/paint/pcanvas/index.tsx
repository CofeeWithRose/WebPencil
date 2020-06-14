import React, { useRef, useEffect, useState } from 'react'
import styles from './style.less'
import { WorkDetail } from '../../../workStorage'
import useTransform from '../../../hooks/useTransform'
import { PCanvasController, WrapInfo, CanvasEventData, CanvasEvent } from './pcnvas.controller'
 

 interface PCanvasProps {

    initValue: WorkDetail<Promise<HTMLImageElement>>,

    pCanvasController?: PCanvasController

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
 const PCanvas = ({ initValue, pCanvasController }: PCanvasProps) =>{
   



  const coverRef = useRef<HTMLDivElement>(null)

  const wrapRef = useRef<HTMLDivElement>(null)

  const viewRef = useRef<HTMLElement>(null)

  const [ minScale, setMinScale ] = useState(0.1)

  useTransform({ minScale, maxScale: 1, viewRef, transRef: wrapRef, scaleRef: wrapRef })

  
  useEffect(() => {
    if(pCanvasController&& wrapRef.current&&coverRef.current){
        const wrapInfo: WrapInfo = {
          wrap: wrapRef.current,
          cover: coverRef.current,
        }
        // const onInit = () => {
        //   if(!viewRef.current) return
        //   const { width, height } = viewRef.current.getBoundingClientRect()
        //   const scale = Math.min(width, height)/Math.max( initValue.workInfo.width, initValue.workInfo.height )
        //   setMinScale(  scale)
        // }
       pCanvasController.init(wrapInfo, initValue)
      //  pCanvasController.on('init', onInit)
       return () => {
        //  pCanvasController.off('init', onInit)
       }

    }
  }, [setMinScale])

  useEffect(() => {
    const cover = coverRef.current
    if(cover){

      const onPointerDown = (pointEvent: PointerEvent) => {
        if(pCanvasController){
          pCanvasController.onPointerDown(pointEvent)
        }
      }
      const onPointerMove = (pointEvent: PointerEvent) => {
        if(pCanvasController){
          pCanvasController.onPointerMove(pointEvent)
        }
      }
      const onPointerUp = (pointEvent: PointerEvent) => {
        if(pCanvasController){
          pCanvasController.onPointerUp(pointEvent)
        }
      }
      cover.addEventListener('pointerdown', onPointerDown, {passive: false})
      cover.addEventListener('pointermove', onPointerMove, {passive: false})
      cover.addEventListener('pointerup', onPointerUp, {passive: false})

      return () => {
        cover.removeEventListener('pointerdown', onPointerDown)
        cover.removeEventListener('pointermove', onPointerMove)
        cover.removeEventListener('pointerup', onPointerUp)
      }
    }
    
  }, [coverRef.current])

  
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
    </main>
}

export {
  PCanvas,
  PCanvasController,
  usePCanvas,
  CanvasEventData,
  CanvasEvent,
}