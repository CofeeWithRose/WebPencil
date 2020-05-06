import { RGBA } from "../tool-item/color-selector/rgba"
import { emitterble, emitAfter } from "../../../decorators/emiterble"
import { PCanvasContext } from "./pcanvas.context"
import { Brush, BrushStatus } from "../tool-item/brush"
import { WorkDetail } from "../../../workStorage"
import { PcanvasLayers } from "./pcanvas.layer"

interface Listeners{

    colorchange: (color:RGBA) => void

} 

const pointEvent2BrunshStatus = ({x,y,tiltX,tiltY,pressure}: PointerEvent, ) => {
    console.log('event2BrunshStatus:', x,y,tiltX,tiltY,pressure)
    return new BrushStatus(x,y,tiltX, tiltY, pressure)
}

/**
 * 用于控制PCanvascontroller component 的对象.
 */
class PCanvasControllerOrg {

    protected context: PCanvasContext;

    protected layerManager:PcanvasLayers;

    @emitAfter<Listeners>('colorchange')
    setColor(color: RGBA) {
        // this.context.color = color
    }

    init(wrap: HTMLElement, workDetail: WorkDetail ){
        this.layerManager = new PcanvasLayers(wrap, workDetail.contens.layers)
    }

    setBrush(brush: Brush){
        this.context.brush = brush
    }

    onPointerDown(p: PointerEvent){
        this.context.brush.onStart(pointEvent2BrunshStatus(p),this.context)
    }

    onPointerMove(pointerEvent: PointerEvent){
        let ponterEvents: PointerEvent[];

        if('getCoalescedEvents' in pointerEvent){
            ponterEvents = (pointerEvent as any ).getCoalescedEvents()
        }else{
            ponterEvents =  [pointerEvent]
        }
        this.context.brush.onDraw(
            ponterEvents.map( p => pointEvent2BrunshStatus(p) ),
            this.context
        )
    }

    onPointerUp(p: PointerEvent){
        this.context.brush.onEnd(pointEvent2BrunshStatus(p),this.context)
    }
 }

export const PCanvasController =  emitterble<Listeners>()(PCanvasControllerOrg)
export type PCanvasController = InstanceType<typeof PCanvasController>
