import React, { useRef, useEffect, MutableRefObject } from 'react'
import styles from './style.less'
import { WorkDetail } from '../../../workStorage'
import useTransform from '../../../hooks/useTransform'
import { RGBA } from '../tool-item/color-selector/rgba'
import { functions } from  'lodash'
 
type TaskItem<K extends keyof Omit<PCanvasInstance, 'init'> > = {
  methodName:  K,
  params: Parameters< Omit<PCanvasInstance, 'init'>[K]>
}

export class PCanvasInstance {

    protected readonly tasks: TaskItem<keyof Omit<PCanvasInstance, 'init'>>[] = []

    setColor(color: RGBA) {
      this.tasks.push({ methodName: 'setColor', params: [color] })
    }

    init(ins: Omit<PCanvasInstance, 'init'>){
      functions(ins).map( (methodName: keyof Omit<PCanvasInstance, 'init'>) => this[methodName] = ins[methodName])
      let task = this.tasks.shift()
      while(task){
        this[task.methodName](...task.params)
        task = this.tasks.shift()
      }
    }
}

export interface PCanvasProps {

    workDetail?: WorkDetail,

    pCanvas?: PCanvasInstance

}

export const usePCanvas = () => {
  const pCanvas = new PCanvasInstance()
  return {
    pCanvas
  }
}

/**
 * 手绘编辑器的画板.
 */
export default ({ workDetail, pCanvas }: PCanvasProps) =>{

  // const { wrapRef } = useTransform<HTMLElement>({ maxScale: devicePixelRatio * 2 })

  const { current: patintContext } = useRef({
    color: RGBA.BLACK
  })

  useEffect(() => {
   if(pCanvas){
      pCanvas.init({
        setColor: (color: RGBA) =>  patintContext.color = color,
      })
     return () =>  pCanvas.init(new PCanvasInstance())
   }
  }, [])
  
    return <main 
        // ref={wrapRef}
        className={styles.pCanvas}
    >
      ss
    </main>
}