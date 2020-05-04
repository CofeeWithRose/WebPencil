import React, { useRef, useEffect, MutableRefObject } from 'react'
import styles from './style.less'
import { WorkDetail } from '../../workStorage'
import useTransform from '../../hooks/useTransform'

export interface PCanvasInstance {

}

export interface PCanvasProps {

    workDetail?: WorkDetail,

    pCanvasRef?: MutableRefObject<PCanvasInstance| null>

}

export const usePCanvas = () => {
  const pCanvasRef = useRef<PCanvasInstance>(null)
  return {
    pCanvasRef
  }
}

/**
 * 手绘编辑器的画板.
 */
export default ({ workDetail, pCanvasRef }: PCanvasProps) =>{

  const { wrapRef } = useTransform<HTMLElement>({ maxScale: devicePixelRatio * 2 })

  useEffect(() => {
   if(pCanvasRef){
     pCanvasRef = {
       current:{}
     }
     return () => { pCanvasRef = {current: null} }
   }
  }, [])
  
    return <main 
        ref={wrapRef}
        className={styles.PCanvas}
    >
      ss
    </main>
}