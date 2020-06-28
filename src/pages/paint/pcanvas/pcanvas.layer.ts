import { LayerDetail } from '../../../workStorage'

export type WrapInfo = { 
  readonly  wrap: HTMLElement,
  readonly  cover: HTMLElement,
  readonly  width: number,
  readonly  height: number,
 }

export class PcanvasLayers{

    /**
     * 临时图层,始终位于当前绘制图层的上方.
     */
    protected tempLayer:LayerDetail;

    public layers:  LayerDetail<HTMLCanvasElement>[] 
    /**
     * 当前绘制的图层.
     */
    protected focusedLayerDetail: LayerDetail;

    constructor(public readonly wrapInfo: WrapInfo){}


    async init( layers: LayerDetail[]): Promise<void>{
    	const wrapInfo = this.wrapInfo
    	const { wrap, cover } = wrapInfo
    	let lastElement: HTMLElement= cover
    	this.layers = layers
    	layers.forEach( (layer,index) => {
    		const { canvas, layerId, visible } = layer
    		wrap.insertBefore( canvas, lastElement)
    		lastElement = canvas
    		if(!visible){
    			canvas.className = 'unvisible'
    		}
    	})

    	this.tempLayer = LayerDetail.create(wrapInfo)
    	wrap.insertBefore( this.tempLayer.canvas, cover)
    	// console.log('this.tempLayer: ', this.tempLayer.layerId)
    	this.focusedLayerDetail = layers[0]
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

    addLayer(newLayer: LayerDetail, index = 0){
    	const { wrap } = this.wrapInfo
    	const oldLayerDetail = this.layers[index-1]
    	const ele = oldLayerDetail&&oldLayerDetail.canvas || this.wrapInfo.cover
    	wrap.insertBefore(newLayer.canvas, ele)
    	this.layers.splice(index, 0, newLayer)
    	return newLayer
    }


    removeLayer(layerDetail: LayerDetail){
    	const index = this.layers.indexOf(layerDetail)
    	if(index > -1){
    		this.wrapInfo.wrap.removeChild(layerDetail.canvas)
    		this.layers.splice(index, 1)
    	}else{
    		console.warn('layerDetail has been removed')
    	}
    	return { index, isFocus:  this.focusedLayerDetail === layerDetail}
    }

    getContext(){
    	const ctx = this.tempLayer.canvas.getContext('2d')
    	if(ctx === null){
    		throw 'get context faliled.'
    	}
    	ctx.imageSmoothingEnabled = false
    	return ctx
    }


}
