import { painterOptions, Vector2, OnSelectTool, ToolTypes, ToolValues, PaintInfo, PaintContex, PainterDrawer, OffsetPosition, PainterEventMap, PainterPen } from './interface'
import styles from './style.less'
import Pencil from '../pens/pen.pencil'
import CanvasRecoder from '../recorder'
import { OperateRecord, OPERATE_TYPE } from '../recorder/inerface'
import { EventEmitter } from 'events'

export class Painter {


	static createPainter(container: HTMLElement, option: painterOptions) {
		const canvas = document.createElement('canvas')
		const { width, height } = option
		canvas.width = width
		canvas.height = height
		canvas.classList.add(styles.paintCanvas)
		container.appendChild(canvas)
		return new Painter(canvas)
	}

	public context: CanvasRenderingContext2D

	protected lineWidthState = 5

	protected isPaintting = false

	protected lastPoint: Vector2 | null = null

	protected painter: PainterPen = new Pencil()

	protected offsetPosition: OffsetPosition

	protected color: string = '#000000'

	protected recorder: CanvasRecoder

	protected eventEmmiter = new EventEmitter()



	protected constructor(
		protected canvas: HTMLCanvasElement
	) {
		this.recorder = new CanvasRecoder([canvas])
		this.recorder.addEventListener('stateChange', (...p) => this.eventEmmiter.emit('stateChange', ...p))
		const ctx = canvas.getContext('2d')
		if (ctx) {
			this.painter.init(ctx)
			this.context = ctx
			canvas.addEventListener('pointermove', this.onPointermove)
			canvas.addEventListener('pointerdown', this.onPointerdown)
			canvas.addEventListener('pointerup', this.onPointerup)
			canvas.addEventListener('pointerout', this.onPointerup)
			canvas.addEventListener('touchmove', this.onTouchmove)
			this.offsetPosition = {
				x: this.canvas.width / canvas.clientWidth,
				y: this.canvas.height / canvas.clientHeight,
				offsetX: canvas.offsetLeft,
				offsetY: canvas.offsetTop
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
		this.context.clearRect(0,0, c.width, c.height)
		this.context.drawImage(c, 0, 0)
	}

	public redo = () =>  {
		const [c] = this.recorder.redo()
		this.context.clearRect(0,0, c.width, c.height)
		this.context.drawImage(c, 0, 0)
	}

	protected handlePointMove = (e: PointerEvent) => {
		const { pressure, x: x1, y: y1 } = e
		const { x, y } = this.getCanvasePosition({ x: x1, y: y1 })
		const pointInfo: PaintInfo = { x, y, pressure }
		const pintContext: PaintContex = {
			lastPoint: this.lastPoint,
			lineWidthState: this.lineWidthState,
			color: this.color
		}
		this.painter.draw(this.context, pointInfo, pintContext)
		this.lastPoint = { x, y }
	}

	protected onPointerdown = (e: PointerEvent) => {
		e.preventDefault()
		if (e.pointerType === 'touch') {
			return
		}
		const { x, y } = e
		this.lastPoint = this.getCanvasePosition({ x, y })
		this.isPaintting = true
	}

	protected onPointerup = (e: PointerEvent) => {
		e.preventDefault()
		this.lastPoint = null
		if (this.isPaintting) {
			this.recorder.record([new OperateRecord(OPERATE_TYPE.MODIFY_CANVAS, { layer: 0, to: this.canvas })])
		}
		this.isPaintting = false
	}


	setPaintDrawer: OnSelectTool = async (type, value) => {
		if (type === ToolTypes.ERASER || type === ToolTypes.PENCIL) {
			this.painter = <ToolValues[ToolTypes.ERASER | ToolTypes.PENCIL]>value
			return
		}
		if (type === ToolTypes.COLOR) {
			this.color = <ToolValues[ToolTypes.COLOR]>value
			return
		}
		if (type === ToolTypes.WIDTH) {
			this.lineWidthState = <ToolValues[ToolTypes.WIDTH]>value
			return
		}
		this.onError(`not inmpement ${type}`)
	}

	addEventListener<T extends keyof PainterEventMap>(type: T, fun: PainterEventMap[T]) {
		this.eventEmmiter.addListener(type,fun)
		console.log('add e...')
	}

	removeEventListener<T extends keyof PainterEventMap>(type: T, fun: PainterEventMap[T]) {
		this.eventEmmiter.removeListener(type,fun)
		console.log('remove e')
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