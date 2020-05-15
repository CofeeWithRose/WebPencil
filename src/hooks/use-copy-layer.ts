import { LayerDetail } from "../workStorage"
import { useEffect, MutableRefObject } from "react"

export type CanvasMap = {[layerId:string]:HTMLCanvasElement}

export const mapCanvas = (srcCanvas:HTMLCanvasElement, targetCanvas: HTMLCanvasElement) => {
    const targetCtx = targetCanvas.getContext('2d');
    if(targetCtx){
        targetCtx.clearRect(0,0,targetCanvas.width, targetCanvas.height)
        targetCtx.drawImage(srcCanvas, 0, 0, srcCanvas.width, srcCanvas.height, 0, 0, targetCanvas.width, targetCanvas.height)
    }
}
const copCanvas = (needCopyLayers:LayerDetail[], cnvasMap: CanvasMap) => {
    const needCopys = [...needCopyLayers]
    needCopys.forEach( la => {
      const srcCanvas = cnvasMap[la.layerId]
        if(srcCanvas){
            // console.log('map..')
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
    const copyCanvas = () => copCanvas(needCopyRef.current, canvasesRef.current)
    useEffect(copyCanvas, [layers])
    return {
        copyCanvas
    }
}

