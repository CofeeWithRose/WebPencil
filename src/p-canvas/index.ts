import { WrapInfo } from "../pages/paint/pcanvas/pcanvas.layer"
import { WorkDetail, LayerDetail } from "../workStorage"
import { RGBA } from "../pages/paint/top-tool-bar/tool-item/color-selector/rgba"

export class PCanvas {
    init( {wrap, cover}:  WrapInfo, workDetail: WorkDetail ){
      
    }

    setColor({r,g,b}: RGBA) {
        // const color = new RGBA(r,g,b, this.color.a)
        // this.setRGBA(color)
    }

    setRGBA(color: RGBA):void{
        // this.context.color = color.toRGBAString()
        // this.color = color
        // this.emit('colorchange', new CanvasEvent({color }))
    }

    setOpacity(opacity: number){
        // const {r,g,b} = this.color
        // const color = new RGBA(r, g, b, opacity)
        // this.setRGBA(color)
    }


    getLayers(){
        // return [...this.layerManager.layers]
    }

    addLayer(){
        // const layerDetail =  this.layerManager.addLayer(LayerDetail.create(this.layerManager.wrapInfo))
        // this.layerManager.focusLayer(layerDetail)
        // const index = this.layerManager.layers.indexOf(layerDetail)
        // this.emit('addLayer',  new CanvasEvent({ layerDetail, index }))
        // this.emit('focusLayer', new CanvasEvent({layerDetail}))

    }

    addLayerContent(index: number, canvas:HTMLCanvasElement, creator: EvnetCreator='user'): LayerDetail {
        // const {width, height} = canvas
        // const layerDetail = LayerDetail.create({width, height})
        // const ctx = layerDetail.canvas.getContext('2d')
        // ctx?.drawImage(canvas, 0,0, width, height)
        // this.layerManager.addLayer(layerDetail, index)
        // this.emit('addLayer', new CanvasEvent({layerDetail, index}, creator))
        // return layerDetail
        return null
    }

    setLayerContent(index: number, canvas: HTMLCanvasElement, creator: EvnetCreator = 'user') {
        // const layerDetail = this.layerManager.layers[index]
        // const oldCanvas = layerDetail.canvas
        // const {width, height} = oldCanvas
        // const preContent = copyCanvas(layerDetail.canvas)
        // const ctx = layerDetail.canvas.getContext('2d')
        // ctx?.clearRect(0,0, width, height)
        // ctx?.drawImage(canvas, 0,0,width, height)
        // this.emit('contentChange', new CanvasEvent({ layerDetail, index, preContent }, creator))
        return layerDetail
    }



    focusLayer(layerDetail: LayerDetail):void {
        // this.layerManager.focusLayer(layerDetail)
        // this.emit('focusLayer', new CanvasEvent({ layerDetail }))
    }

    removeLayer(layerDetail: LayerDetail, creator: EvnetCreator='user'): void{
    //     const { index, isFocus } =  this.layerManager.removeLayer(layerDetail)
    //     this.emit('removeLayer', new CanvasEvent({layerDetail, index}, creator))
    //     if(isFocus){
    //         const layerDetail = this.layerManager.layers[0]
    //         this.focusLayer(layerDetail)
    //         this.emit('focusLayer', new CanvasEvent({layerDetail}, creator))
    //   }
    }

    removeLayerByIndex(index: number, creator: EvnetCreator='user'): void {
        // const layerDetail = this.layerManager.layers[index]
        // this.removeLayer(layerDetail, creator)
    }

    setBrushWidth(width: number){
        // this.context.brushWidth = width
    }
  

    setBrush(brush: Brush){
        // if(this.context.brush){
        //     this.context.brush.destory()
        // }
        // brush.init()
        // this.context.brush = brush
    }

    onPointerDown(p: PointerEvent){
        // this.context.brush.onStart(pointEvent2BrunshStatus(p),this.context)
    }

    onPointerMove(pointerEvent: PointerEvent):void{
        // let ponterEvents: PointerEvent[];
        // if((pointerEvent as any).getCoalescedEvents){
        //     ponterEvents = (pointerEvent as any ).getCoalescedEvents()
        // }else{
        //     ponterEvents =  [pointerEvent]
        // }
        // this.context.brush.onDraw(
        //     ponterEvents.map( p => pointEvent2BrunshStatus(p) ),
        //     this.context
        // )
    }

    onPointerUp(p: PointerEvent): void{
        // this.context.brush.onEnd(pointEvent2BrunshStatus(p),this.context)
        // const curLayerDetail = this.layerManager.getFocusDetail()
        // const preContent = copyCanvas(curLayerDetail.canvas)
        // this.layerManager.applyTempCanvas()
        // const index = this.layerManager.layers.indexOf(curLayerDetail)
        // this.emit('contentChange', new CanvasEvent({ layerDetail: curLayerDetail, preContent, index})) 
    }
}