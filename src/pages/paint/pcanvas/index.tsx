import React, { useRef, useEffect, MutableRefObject, useState } from 'react'
import styles from './style.less'
import { WorkDetail, LayerDetail } from '../../../workStorage'
import useTransform from '../../../hooks/useTransform'
import { RGBA } from '../tool-item/color-selector/rgba'
import { PCanvasController } from './pcnvas.controller'
import { PCanvasContext } from './pcanvas.context'
 

 interface PCanvasProps {

    initValue: WorkDetail,

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
   

  // const { wrapRef } = useTransform<HTMLElement>({ maxScale: devicePixelRatio * 2 })

  const coverRef = useRef<HTMLDivElement>(null)

  const paintContextRef = useRef<PCanvasContext>()

  const wrapRef = useRef<HTMLElement>(null)

  // const { layers } = useWork(defaulyValue)


  
  useEffect(() => {
    if(pCanvasController&& wrapRef.current){
      
       pCanvasController.init(wrapRef.current, initValue)
    }
  }, [])

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
      cover.addEventListener('pointerdown', onPointerDown)
      cover.addEventListener('pointermove', onPointerMove)
      cover.addEventListener('pointerup', onPointerUp)
      return () => {
        cover.removeEventListener('pointerdown', onPointerDown)
        cover.removeEventListener('pointermove', onPointerMove)
        cover.removeEventListener('pointerup', onPointerUp)
      }
    }
  }, [coverRef.current])

  
    return <main 
        ref={wrapRef}
        className={styles.pCanvas}
    >
     
      <div ref={coverRef} className={styles.cover}></div>
    </main>
}

export {
  PCanvas,
  PCanvasController,
  usePCanvas,
}