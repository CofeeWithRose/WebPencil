import { painterOptions, Vector2, OnSelectTool, ToolTypes, ToolValues, PaintPointInfo, PaintContex, PainterDrawer, OffsetPosition, PainterEventMap, PainterPen, PannelInfo } from './interface'
import styles from './style.less'
import Pencil from '../pens/pen.pencil'
import CanvasRecoder from '../recorder'
import { OperateRecord, OPERATE_TYPE } from '../recorder/inerface'
import { EventEmitter } from 'events'
import { RGBA } from '../rgba'
import PEventEmiter from '../../../../../util/event'

export class Painter {


	static createPainter(container: HTMLElement, option: painterOptions) {
		const canvas = document.createElement('canvas')
		const { width, height } = option
		canvas.width = width * devicePixelRatio
		canvas.height = height * devicePixelRatio	
		canvas.classList.add(styles.paintCanvas)
		container.appendChild(canvas)
		return new Painter(canvas)
	}
	public context: CanvasRenderingContext2D

	public pannelInfo: PannelInfo

	protected lineWidthState = 5

	protected isPaintting = false

	protected lastPoint: PaintPointInfo | null = null

	protected painter: PainterPen = new Pencil()

	protected offsetPosition: OffsetPosition

	protected color: string = '#000000'

	protected recorder: CanvasRecoder

	protected eventEmmiter = new PEventEmiter<PainterEventMap>()


	protected constructor(
		public canvas: HTMLCanvasElement
	) {
		this.recorder = new CanvasRecoder([canvas])
		this.recorder.addEventListener('stateChange', (...p) => this.eventEmmiter.emit('stateChange', ...p))
		const ctx = canvas.getContext('2d')
		if (ctx) {
			this.pannelInfo = new PannelInfo(canvas.width, canvas.height)
			this.painter.init(this)
			this.context = ctx
			ctx.fillStyle= 'white'
			ctx.fillRect(0,0, canvas.width, canvas.height)
			canvas.addEventListener('pointermove', this.onPointermove)
			canvas.addEventListener('pointerdown', this.onPointerdown)
			canvas.addEventListener('pointerup', this.onPointerup)
			canvas.addEventListener('pointerout', this.onPointerup)
			canvas.addEventListener('touchmove', this.onTouchmove)
			this.offsetPosition = {
				x: this.canvas.width / canvas.clientWidth,
				y: this.canvas.height / canvas.clientHeight,
				offsetX: canvas.offsetLeft * devicePixelRatio,
				offsetY: canvas.offsetTop * devicePixelRatio,
			}
		} else {
			throw 'failed create canvas'
		}
	};

	protected onTouchmove = (e: TouchEvent) => {
		e.preventDefault()
	}

	protected onPointermove = (e: PointerEvent & { getCoalescedEvents: () => PointerEvent[] }) => {
		e.preventDefault()
		if (!this.isPaintting) {
			return
		}

		if (e.getCoalescedEvents) {
			const events = e.getCoalescedEvents()
			events.forEach(e => {
				this.handlePointMove(e)
			})
		} else {
			this.handlePointMove(e)
		}
	};

	public undo = () => {
		const [c] = this.recorder.undo()
		this.context.clearRect(0, 0, c.width, c.height)
		this.context.drawImage(c, 0, 0)
	}

	public redo = () => {
		const [c] = this.recorder.redo()
		this.context.clearRect(0, 0, c.width, c.height)
		this.context.drawImage(c, 0, 0)
	}

	protected handlePointMove = (e: PointerEvent) => {
		const { pressure, x: x1, y: y1 } = e
		const { x, y } = this.getCanvasePosition({ x: x1, y: y1 })
		const pointInfo: PaintPointInfo = { x, y, pressure }
		const pintContext: PaintContex = {
			lastPoint: this.lastPoint,
			// lineWidthState: this.lineWidthState,
			minWidth: 1,
			maxWidth: this.lineWidthState,
			color: this.color
		}
		this.painter.draw(this.context, pointInfo, pintContext)
		this.lastPoint = { x, y, pressure }
	}

	protected onPointerdown = (e: PointerEvent) => {
		e.preventDefault()
		if (e.pointerType === 'touch') {
			return
		}
		const { x, y, pressure } = e
		this.lastPoint = { ...this.getCanvasePosition({ x, y }), pressure }
		this.painter.onStart({ x, y, pressure })
		this.isPaintting = true
	}

	protected onPointerup = (e: PointerEvent) => {
		e.preventDefault()
		this.lastPoint = null
		if (this.isPaintting) {
			const {x, y} = this.getCanvasePosition(e)
			const sholdRecordCanvas = this.painter.onEnd({x,y, pressure: e.pressure})

			sholdRecordCanvas && this.recorder.record([new OperateRecord(OPERATE_TYPE.MODIFY_CANVAS, { layer: 0, to: this.canvas })])
		}
		this.isPaintting = false

	}


	setPaintDrawer: OnSelectTool = async (type, value) => {
		if (type === ToolTypes.ERASER || type === ToolTypes.PENCIL|| type === ToolTypes.SELECTOR) {
			this.painter = <ToolValues[ToolTypes.ERASER | ToolTypes.PENCIL]>value
			return
		}
		if (type === ToolTypes.COLOR) {
			const val = <ToolValues[ToolTypes.COLOR]>value
			this.eventEmmiter.emit('colorchange',val, this.color)
			this.color = val.toColorString()
			return
		}
		if (type === ToolTypes.WIDTH) {
			this.lineWidthState = <ToolValues[ToolTypes.WIDTH]>value
			return
		}
		this.onError(`not inmpement ${type}`)
	}

	addEventListener<T extends keyof PainterEventMap>(type: T, fun: PainterEventMap[T]) {
		this.eventEmmiter.addListener(type, fun)
	}

	removeEventListener<T extends keyof PainterEventMap>(type: T, fun: PainterEventMap[T]) {
		this.eventEmmiter.removeListener(type, fun)
	}

	getPointColor = ({x,y}: Vector2) => {
		const {data} = this.context.getImageData(x,y,1,1)
		return new RGBA(data[0], data[1], data[2], data[3])
	}


	onError = (message: string) => {
		console.error(message)
	}

	protected getCanvasePosition = ({ x, y }: Vector2) => {
		return {
			x: x * this.offsetPosition.x - this.offsetPosition.offsetX,
			y: y * this.offsetPosition.y - this.offsetPosition.offsetY,
		}
	}
}