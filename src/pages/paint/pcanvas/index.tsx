import React, { useRef, useEffect, MutableRefObject, useState, useMemo, Fragment } from 'react'
import styles from './style.less'
import { WorkDetail, LayerDetail, WorkInfo } from '../../../workStorage'
import useTransform from '../../../hooks/useTransform'
import { RGBA } from '../top-tool-bar/tool-item/color-selector/rgba'
import { PCanvasController, WrapInfo, CanvasEventData, CanvasEvent } from './pcnvas.controller'
import { PCanvasContext } from './pcanvas.context'
import { setContent } from '../../../util/canvas'
import { Spin } from 'antd'
 

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
   

  // const { wrapRef } = useTransform<HTMLElement>({ maxScale: devicePixelRatio * 2 })

  const coverRef = useRef<HTMLDivElement>(null)

  const wrapRef = useRef<HTMLDivElement>(null)

  /**
   * 解码后的layerDetail,在解码完成后canvas由img更新为canvas.
   */
  const [layerDetailList, setLayerDetailList] = useState<LayerDetail<HTMLImageElement|HTMLCanvasElement>[]>([])
  
  /**
   * layerId列表仅加载时使用.
   */
  const needUpdateLayerIdRef = useRef({
    total: 0, // 一共需要更新的个数.
    updatedCount: 0,
    layerIdList:new Array<string>()
  })  
  /**
   * canvas 元素的引用.
   */
  const canvasRef = useRef< { [layerId: string]: (HTMLCanvasElement|null) }>({})

  const [workInfo, setWorkInfo] = useState<WorkInfo>()

  const [ decodeing, setDecoding ] = useState(true)



  const canvasList = useMemo(() => {
    if(workInfo){
      const { width,  height} = workInfo
      return layerDetailList.map( ({layerId, canvas}, index) => {
       return<canvas  
            ref={ref => canvasRef.current[layerId]=ref}
            key={layerId}
            width={width}
            height={height}
            style={{zIndex: layerDetailList.length - index}}
          />
      })
    }
   
  }, [layerDetailList])

  useEffect(() => {
    needUpdateLayerIdRef.current.layerIdList.forEach( id => {
      const layerDetail = layerDetailList.find(({layerId}) => id === layerId )
      if(layerDetail){
        const canvas = canvasRef.current[id]
        if(canvas){
          setContent(canvas, layerDetail.canvas)
          layerDetail.canvas = canvas
          needUpdateLayerIdRef.current.updatedCount++
          if(needUpdateLayerIdRef.current.total === needUpdateLayerIdRef.current.updatedCount){
            setDecoding(false)
          }
        }
      }
    })
    console.log('canvasRef: ', Object.keys(canvasRef.current).length, layerDetailList.length, layerDetailList)
  }, [layerDetailList])
  
  const processPromise = async ({canvas, layerId, ...rest}:LayerDetail<Promise<HTMLImageElement>>) => {
    console.log('process', canvas)
    const img = await canvas
    setLayerDetailList( preInfoList => ([...preInfoList, { canvas: img, layerId, ...rest }]) ) 
    needUpdateLayerIdRef.current.layerIdList.push(layerId)
    console.log('process...')
  }

  useEffect(() => {
    if(pCanvasController&& wrapRef.current&&coverRef.current){
        const wrapInfo: WrapInfo = {
          wrap: wrapRef.current,
          cover: coverRef.current,
        }
        // TODO 处理canvas异步问题.
        const { workInfo, contens } = initValue
        setWorkInfo(workInfo)
        needUpdateLayerIdRef.current.total = contens.layers.length
        contens.layers.forEach( layerDetail => processPromise(layerDetail) )
      //  pCanvasController.init(wrapInfo, initValue)
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
      // cover.addEventListener('pointerdown', onPointerDown, {passive: false})
      // cover.addEventListener('pointermove', onPointerMove, {passive: false})
      // cover.addEventListener('pointerup', onPointerUp, {passive: false})
      console.log('add....')

      return () => {
        cover.removeEventListener('pointerdown', onPointerDown)
        cover.removeEventListener('pointermove', onPointerMove)
        cover.removeEventListener('pointerup', onPointerUp)
      }
    }
    
  }, [coverRef.current])

  
    return <main 
        className={styles.pCanvas}
    >
      <section
        ref={wrapRef}
        style={{width: `${workInfo?.width}px`, height: `${workInfo?.height}px`}}
        className={styles.canvasWrap}
      >
        { canvasList }
        <div ref={coverRef} className={styles.cover} style={{zIndex: layerDetailList.length +1 }}>
          { decodeing? <Spin  style={{ top:'50%', left:'50%', position: 'absolute', transform: 'translate3d(-50%, -50%, 0)' }}/>: null }
        </div>
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