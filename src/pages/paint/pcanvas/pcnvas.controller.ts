import { RGBA } from '../top-tool-bar/tool-item/color-selector/rgba'
import { PCanvasContext } from './pcanvas.context'
import { Brush } from '../top-tool-bar/tool-item/brush'
import { WorkDetail, LayerDetail } from '../../../workStorage'
import { PcanvasLayers } from './pcanvas.layer'
import PEventEmiter from '../../../util/event'
import { copyCanvas } from '../../../util/canvas'
import { BrushStatus } from '../top-tool-bar/tool-item/brush/types'

export type EvnetCreator = 'user' | 'history'

export class CanvasEvent<T = null> {

	constructor(
        public data: T,
        public tag: EvnetCreator = 'user',
	) { }

}

export interface CanvasEventData {

    init: CanvasEvent

    colorchange: CanvasEvent<{ color: RGBA }>

    addLayer: CanvasEvent<{ workId: string, layerDetail: LayerDetail, index: number }>

    contentChange: CanvasEvent<{ workId: string, layerDetail: LayerDetail, preContent: HTMLCanvasElement, index: number }>

    focusLayer: CanvasEvent<{ layerDetail: LayerDetail }>

    removeLayer: CanvasEvent<{ workId: string, layerDetail: LayerDetail, index: number }>
}


const pointEvent2BrunshStatus = ({ offsetX: x, offsetY: y, tiltX, tiltY, pressure }: PointerEvent) => {
	// console.log('pressure...', pressure)
	pressure = pressure > 1 ? pressure * 0.01 :
		pressure === 0 ? 1 : pressure
	return new BrushStatus(x, y, pressure, tiltX, tiltY)
}
export type WrapInfo = { wrap: HTMLElement, cover: HTMLElement }
/**
 * 用于控制PCanvascontroller component 的对象.
 * 
 * // TODO
 * 对的操作放入组件中.
 */
export class PCanvasController extends PEventEmiter<CanvasEventData> {

    protected context: PCanvasContext;

    protected layerManager: PcanvasLayers;

    protected color = RGBA.BLACK;

    protected tracePointerId: number;

    protected workId: string

    async init({ wrap, cover }: WrapInfo, workDetail: WorkDetail) {
    	const { width, height, workId } = workDetail.workInfo
    	wrap.style.width = `${width}px`
    	wrap.style.height = `${height}px`
    	this.workId = workId
    	this.layerManager = new PcanvasLayers({ cover, wrap, width, height })
    	this.layerManager.init(workDetail.layers)
    	this.context = new PCanvasContext(
    		this.layerManager.getCanvas(),
    		this.layerManager.getContext(),
    		width,
    		height,
    		this.onBrushEnd,
    	)
    	this.emit('init', new CanvasEvent(null))
    	this.emit('focusLayer', new CanvasEvent({ layerDetail: this.layerManager.getFocusDetail() }))
    	// logCanvasData('init: ', this.layerManager.layers[0].canvas)
    }

    setColor({ r, g, b }: RGBA) {
    	const color = new RGBA(r, g, b, this.color.a)
    	this.setRGBA(color)
    }

    setRGBA(color: RGBA): void {
    	this.context.color = color.toRGBAString()
    	this.color = color
    	this.emit('colorchange', new CanvasEvent({ color }))
    }

    setOpacity(opacity: number) {
    	const { r, g, b } = this.color
    	const color = new RGBA(r, g, b, opacity)
    	this.setRGBA(color)
    }


    async getLayers() {
    	return [...this.layerManager.layers]
    }

    addLayer() {
    	const layerDetail = this.layerManager.addLayer(LayerDetail.create(this.layerManager.wrapInfo))
    	this.layerManager.focusLayer(layerDetail)
    	const index = this.layerManager.layers.indexOf(layerDetail)
    	this.emit('addLayer', new CanvasEvent({ workId: this.workId, layerDetail, index }))
    	this.emit('focusLayer', new CanvasEvent({ layerDetail }))

    }

    addLayerContent(index: number, canvas: HTMLCanvasElement | HTMLImageElement, creator: EvnetCreator = 'user'): LayerDetail {
    	const { width, height } = canvas
    	const layerDetail = LayerDetail.create({ width, height })
    	const ctx = layerDetail.canvas.getContext('2d')
        ctx?.drawImage(canvas, 0, 0, width, height)
        this.layerManager.addLayer(layerDetail, index)
        this.emit('addLayer', new CanvasEvent({ workId: this.workId, layerDetail, index }, creator))
        return layerDetail

    }

    setLayerContent(index: number, canvas: HTMLCanvasElement | HTMLImageElement, creator: EvnetCreator = 'user') {
    	const layerDetail = this.layerManager.layers[index]
    	const oldCanvas = layerDetail.canvas
    	const { width, height } = oldCanvas
    	const preContent = copyCanvas(layerDetail.canvas)
    	const ctx = layerDetail.canvas.getContext('2d')
        ctx?.clearRect(0, 0, width, height)
        ctx?.drawImage(canvas, 0, 0, width, height)
        this.emit('contentChange', new CanvasEvent({ workId: this.workId, layerDetail, index, preContent, }, creator))
        return layerDetail
    }



    focusLayer(layerDetail: LayerDetail): void {
    	this.layerManager.focusLayer(layerDetail)
    	this.emit('focusLayer', new CanvasEvent({ layerDetail }))
    }

    removeLayer(layerDetail: LayerDetail, creator: EvnetCreator = 'user'): void {
    	const { index, isFocus } = this.layerManager.removeLayer(layerDetail)
    	this.emit('removeLayer', new CanvasEvent({ workId: this.workId, layerDetail, index }, creator))
    	if (isFocus) {
    		const layerDetail = this.layerManager.layers[0]
    		this.focusLayer(layerDetail)
    		this.emit('focusLayer', new CanvasEvent({ layerDetail }, creator))
    	}
    }

    removeLayerByIndex(index: number, creator: EvnetCreator = 'user'): void {
    	const layerDetail = this.layerManager.layers[index]
    	this.removeLayer(layerDetail, creator)
    }

    setBrushWidth(width: number) {
    	this.context.brushWidth = width
    }


    setBrush(brush: Brush) {
    	if (this.context.brush) {
    		this.context.brush.destory()
    	}
    	brush.init()
    	this.context.brush = brush
    }

    onPointerDown(p: PointerEvent) {
    	if(this.tracePointerId) {
    		this.tracePointerId = -1
    		return
    	}
    		this.tracePointerId = p.pointerId
    	const s = pointEvent2BrunshStatus(p)
    	// console.log('f', s)
    	this.context.brush.onStart(s, this.context)
    }

    onPointerMove(pointerEvent: PointerEvent): void {
    	if(this.tracePointerId !== pointerEvent.pointerId) return
    	let ponterEvents: PointerEvent[]
    	if ((pointerEvent as any).getCoalescedEvents) {
    		// console.log('getCoalescedEvents')
    		ponterEvents = (pointerEvent as any).getCoalescedEvents()
    	} else {
    		// console.log('not getCoalescedEvents')
    		ponterEvents = [pointerEvent]
    	}
    	this.context.brush.onDraw(
    		ponterEvents.map(p => pointEvent2BrunshStatus(p)),
    		this.context
    	)
    }

    onPointerUp(p: PointerEvent): void {
    	this.tracePointerId = 0
    	this.context.brush.onEnd(pointEvent2BrunshStatus(p), this.context)
    }

    protected onBrushEnd = () => {
    	const curLayerDetail = this.layerManager.getFocusDetail()
    	const preContent = copyCanvas(curLayerDetail.canvas)
    	this.layerManager.applyTempCanvas()
    	const index = this.layerManager.layers.indexOf(curLayerDetail)
    	this.emit('contentChange', new CanvasEvent({ workId: this.workId, layerDetail: curLayerDetail, preContent, index }))
    }


}
function logCanvasData(rep = '', canvas: HTMLCanvasElement) {
	const ctx = canvas.getContext('2d')
	console.log(rep, ctx?.getImageData(0, 0, 1, 1).data)
}
