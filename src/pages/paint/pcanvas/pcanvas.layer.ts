import { LayerDetail, LayerDetailType } from "../../../workStorage";

export type WrapInfo = { 
    wrap: HTMLElement,
    width: number,
    height: number,
 }
export class PcanvasLayers{

    protected tempcover:HTMLCanvasElement;

    constructor(protected wrapInfo: WrapInfo, public layers: LayerDetail[]){
        const { wrap } = wrapInfo
        let lastCanvas: HTMLCanvasElement|null = null
        layers.forEach( ({ canvas, layerId, type, visible }, order) => {
            wrap.insertBefore(canvas, lastCanvas);
            lastCanvas = canvas
            if(!visible){
                canvas.className = 'unvisible'
            }
            if(type === LayerDetailType.TEMP_COVER){
                this.tempcover = canvas
            }
        })
    }

    getCanvas(){
        return this.tempcover
    }

    addLayer(){
        const { wrap } = this.wrapInfo
        const lastLayer = this.layers[this.layers.length-1]
        const newLayer = LayerDetail.create(this.wrapInfo)
        this.layers.push(newLayer)
        wrap.insertBefore(newLayer.canvas, lastLayer.canvas)
        return newLayer
    }

    getContext(){
        const ctx = this.tempcover.getContext('2d')
        if(ctx === null){
            throw 'get context faliled.'
        }
        return ctx;
    }


}