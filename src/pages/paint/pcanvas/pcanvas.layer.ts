import { LayerDetail, LayerDetailType } from "../../../workStorage";

export type WrapInfo = { 
    wrap: HTMLElement,
    cover: HTMLElement,
    width: number,
    height: number,
 }

export class PcanvasLayers{

    /**
     * 临时图层,始终位于当前绘制图层的上方.
     */
    protected tempLayer:LayerDetail;

    /**
     * 当前绘制的图层.
     */
    protected focusedLayerDetail: LayerDetail;

    constructor(protected wrapInfo: WrapInfo, public layers: LayerDetail[]){
        const { wrap, cover } = wrapInfo
        let lastElement: HTMLElement= cover
        layers.forEach( (layer, index) => {
            const { canvas, layerId, type, visible } = layer
            wrap.insertBefore(canvas, lastElement);
            console.log('layerId:', layerId)
            lastElement = canvas
            if(!visible){
                canvas.className = 'unvisible'
            }
            if(type === LayerDetailType.TEMP_COVER){
                this.tempLayer = layer
                console.log('temp: ', layerId)
                this.focusedLayerDetail = layers[index+1]
            }
        })
    }

    getCanvas():HTMLCanvasElement{
        return this.tempLayer.canvas
    }

    applyTempCanvas(): void{
        const ctx = this.focusedLayerDetail.canvas.getContext('2d')
        const tempCtx = this.tempLayer.canvas.getContext('2d')
        if(ctx && tempCtx){
            const { width, height  } = this.tempLayer.canvas
            ctx.drawImage(this.tempLayer.canvas, 0, 0, width, height)
            tempCtx.clearRect(0, 0 ,width, height)
        }
    }

    getFocusDetail(): LayerDetail {
        return this.focusedLayerDetail
    }

    focusLayer(layerDetail: LayerDetail){
        const nextLayer = this.layers[this.layers.indexOf(layerDetail) - 1]
        const nextCanvas = nextLayer&&nextLayer.canvas && nextLayer !== this.tempLayer ? nextLayer.canvas :  this.wrapInfo.cover
        this.wrapInfo.wrap.insertBefore(this.tempLayer.canvas, nextCanvas)
        this.focusedLayerDetail = layerDetail
        // TOFIX: update templyer in layers.
    }

    addLayer(){
        const { wrap } = this.wrapInfo
        const newLayer = LayerDetail.create(this.wrapInfo)
        wrap.insertBefore(newLayer.canvas, this.wrapInfo.cover)
        this.layers.unshift(newLayer)
        return newLayer
    }

    removeLayer(layerDetail: LayerDetail){
        const index = this.layers.indexOf(layerDetail)
        if(index > -1){
            this.wrapInfo.wrap.removeChild(layerDetail.canvas)
            this.layers.splice(index, 0)
            return { index, isFocus:  this.focusedLayerDetail === layerDetail}
        }
    }

    getContext(){
        const ctx = this.tempLayer.canvas.getContext('2d')
        if(ctx === null){
            throw 'get context faliled.'
        }
        return ctx;
    }


}