import { LayerDetail, LayerDetailType } from "../../../workStorage";

export type WrapInfo = { 
    wrap: HTMLElement,
    width: number,
    height: number,
 }
export class PcanvasLayers{

    protected tempcover:LayerDetail;

    protected focusedLayerDetail: LayerDetail;

    constructor(protected wrapInfo: WrapInfo, public layers: LayerDetail[]){
        const { wrap } = wrapInfo
        let lastCanvas: HTMLCanvasElement|null = null
        layers.forEach( (layer, index) => {
            const { canvas, layerId, type, visible } = layer
            wrap.insertBefore(canvas, lastCanvas);
            lastCanvas = canvas
            if(!visible){
                canvas.className = 'unvisible'
            }
            if(type === LayerDetailType.TEMP_COVER){
                this.tempcover = layer
                this.focusedLayerDetail = layers[index+1]
            }
        })
    }

    getCanvas():HTMLCanvasElement{
        return this.tempcover.canvas
    }

    applyTempCanvas(): void{
        const ctx = this.focusedLayerDetail.canvas.getContext('2d')
        const tempCtx = this.tempcover.canvas.getContext('2d')
        if(ctx && tempCtx){
            const { width, height  } = this.tempcover.canvas
            ctx.drawImage(this.tempcover.canvas, 0, 0, width, height)
            tempCtx.clearRect(0, 0 ,width, height)
        }
    }

    getFocusDetail() {
        return this.focusedLayerDetail
    }

    protected focusLayer(layerDetail:LayerDetail){
        if(layerDetail.canvas){
            this.wrapInfo.wrap.insertBefore(this.tempcover.canvas, layerDetail.canvas)
            this.tempcover = layerDetail
        }
    }

    addLayer(){
        const { wrap } = this.wrapInfo
        const lastLayer = this.layers[this.layers.length-1]
        const newLayer = LayerDetail.create(this.wrapInfo)
        wrap.insertBefore(newLayer.canvas, lastLayer.canvas)
        this.layers.push(newLayer)
        this.focusLayer(newLayer)
        // console.log('new layer:', newLayer.layerId)
        return newLayer
    }

    getContext(){
        const ctx = this.tempcover.canvas.getContext('2d')
        if(ctx === null){
            throw 'get context faliled.'
        }
        return ctx;
    }


}