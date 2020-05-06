import { LayerDetail, LayerDetailType } from "../../../workStorage";

export class PcanvasLayers{

    protected tempcover:HTMLCanvasElement;
    

    constructor(public wrap: HTMLElement, public layers: LayerDetail[]){
        
        let lastCanvas: HTMLCanvasElement|null = null
        layers.forEach( ({ canvas, layerId, type, visible }, order) => {
            canvas.setAttribute('layerid', layerId)
            wrap.insertBefore(canvas, lastCanvas);
            lastCanvas = canvas
            // canvas.style.zIndex = `${order * 10}`
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

    getContext(){
        const ctx = this.tempcover.getContext('2d')
        if(ctx === null){
            throw 'get context faliled.'
        }
        return ctx;
    }


}