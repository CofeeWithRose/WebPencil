import { RGBA } from "../top-tool-bar/tool-item/color-selector/rgba"
import { emitterble, emitAfter } from "../../../decorators/emiterble"
import { PCanvasContext } from "./pcanvas.context"
import { Brush, BrushStatus } from "../top-tool-bar/tool-item/brush"
import { WorkDetail, LayerDetail } from "../../../workStorage"
import { PcanvasLayers } from "./pcanvas.layer"
import PEventEmiter, { AbstractEventMap } from "../../../util/event"

interface Listeners {

    colorchange: (color:RGBA) => void

    init: () => void

    addLayer: ( layerDetail: LayerDetail, index: number ) => void

    contentChange: ( layerDetail: LayerDetail ) => void

    focusLayer: ( layerDetail: LayerDetail ) => void

    removeLayer: ( layerDetail: LayerDetail, index: number ) => void
} 

const pointEvent2BrunshStatus = ({offsetX: x, offsetY: y,tiltX,tiltY, pressure}: PointerEvent) => {
    console.log('pressure...', pressure)
    pressure = pressure>1? pressure * 0.01 : 
                pressure === 0? 1: pressure;
    return new BrushStatus(x, y,  pressure, tiltX, tiltY)
}
export type WrapInfo = { wrap: HTMLElement, cover: HTMLElement }
/**
 * 用于控制PCanvascontroller component 的对象.
 */
export class PCanvasController extends PEventEmiter<Listeners> {

    protected context: PCanvasContext;

    protected layerManager:PcanvasLayers;

    protected color = RGBA.BLACK;


    init( {wrap, cover}:  WrapInfo, workDetail: WorkDetail ){
        const { width, height } = workDetail.workInfo
        wrap.style.width = `${width}px`
        wrap.style.height = `${height}px`
        this.layerManager = new PcanvasLayers({cover, wrap, width, height}, workDetail.contens.layers)
        this.context = new PCanvasContext(
            this.layerManager.getCanvas(),
            this.layerManager.getContext(),
            width,
            height,
        )
        this.emit('init')
    }

    setColor({r,g,b}: RGBA) {
        const color = new RGBA(r,g,b, this.color.a)
        this.setRGBA(color)
    }

    setRGBA(color: RGBA):void{
        this.context.color = color.toRGBAString()
        this.color = color
        this.emit('colorchange', color)
    }

    setOpacity(opacity: number){
        const {r,g,b} = this.color
        const color = new RGBA(r, g, b, opacity)
        this.setRGBA(color)
    }


    getLayers(){
        return [...this.layerManager.layers]
    }

    addLayer(){
        const layerDetail =  this.layerManager.addLayer()
        this.layerManager.focusLayer(layerDetail)
        this.emit('addLayer', layerDetail, this.layerManager.layers.indexOf(layerDetail))
        this.emit('focusLayer', layerDetail)
    }

    focusLayer(layerDetail: LayerDetail):void {
        this.layerManager.focusLayer(layerDetail)
        this.emit('focusLayer', layerDetail)
    }

    removeLayer(layerDetail: LayerDetail): void{
        const { index, isFocus } =  this.layerManager.removeLayer(layerDetail)
        if(isFocus){
              this.focusLayer(this.layerManager.layers[0])
        }
        this.emit('removeLayer', layerDetail, index)
    }

    setBrushWidth(width: number){
        this.context.brushWidth = width
    }

  

    setBrush(brush: Brush){
        if(this.context.brush){
            this.context.brush.destory()
        }
        brush.init()
        this.context.brush = brush
    }

    onPointerDown(p: PointerEvent){
        
        this.context.brush.onStart(pointEvent2BrunshStatus(p),this.context)
    }

    onPointerMove(pointerEvent: PointerEvent):void{
        let ponterEvents: PointerEvent[];
        if((pointerEvent as any).getCoalescedEvents){
            ponterEvents = (pointerEvent as any ).getCoalescedEvents()
        }else{
            ponterEvents =  [pointerEvent]
        }
        this.context.brush.onDraw(
            ponterEvents.map( p => pointEvent2BrunshStatus(p) ),
            this.context
        )
    }

    onPointerUp(p: PointerEvent): void{
        this.context.brush.onEnd(pointEvent2BrunshStatus(p),this.context)
        this.layerManager.applyTempCanvas()
        this.emit('contentChange', this.layerManager.getFocusDetail()) 
    }
 }
