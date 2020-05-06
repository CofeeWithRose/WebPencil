import { LayerDetail, LayerDetailType } from "../../../workStorage";

export class PcanvasLayers{

    protected tempcover:HTMLCanvasElement

    constructor(public wrap: HTMLElement, public layers: LayerDetail[]){
        
        for(let i = layers.length -1; i >= 0; i--){
            const { canvas, layerId, type, visible } = this.layers[i]
            canvas.setAttribute('layerid', layerId)
            wrap.insertBefore(canvas, null)
            if(!visible){
                canvas.className = 'unvisible'
            }
            if(type === LayerDetailType.TEMP_COVER){
                this.tempcover = canvas
            }
        }
    }

}