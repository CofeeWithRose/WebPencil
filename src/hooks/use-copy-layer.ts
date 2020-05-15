import { LayerDetail } from "../workStorage"
import { useEffect, MutableRefObject } from "react"
import { uniqBy } from 'lodash'

export type CanvasMap = {[layerId:string]:HTMLCanvasElement}

export const mapCanvas = (srcCanvas:HTMLCanvasElement, targetCanvas: HTMLCanvasElement) => {
    const targetCtx = targetCanvas.getContext('2d');
    if(targetCtx){
        targetCtx.clearRect(0,0,targetCanvas.width, targetCanvas.height)
        targetCtx.drawImage(srcCanvas, 0, 0, srcCanvas.width, srcCanvas.height, 0, 0, targetCanvas.width, targetCanvas.height)
    }
}
const copCanvas = (   
    needCopyRef: MutableRefObject<LayerDetail[]>, 
    canvasesRef: MutableRefObject<CanvasMap>
) => {
    const needCopyLayers: LayerDetail[] =uniqBy(needCopyRef.current, ({layerId}:LayerDetail) => layerId )
    const cnvasMap = canvasesRef.current
    // console.log('c...', needCopyLayers)

    const needCopys = [...needCopyLayers]
    needCopys.forEach( la => {
      const srcCanvas = cnvasMap[la.layerId]
        if(srcCanvas){
            console.log('map..')
            mapCanvas(la.canvas, srcCanvas )
            const ind = needCopyLayers.findIndex( ({layerId}) => layerId === la.layerId )
            needCopyLayers.splice(ind, 1)
        }
    })
}

export default (
    layers: LayerDetail[], 
    needCopyRef: MutableRefObject<LayerDetail[]>, 
    canvasesRef: MutableRefObject<CanvasMap>
    ) => {
    const copyCanvas = () => copCanvas(needCopyRef, canvasesRef)
    useEffect(copyCanvas, [layers])
    return {
        copyCanvas
    }
}

