import React, { useState, useEffect, useRef, useMemo } from 'react'
import style from './index.less'
import { debounce} from 'lodash'
import { RGBA } from './rgba'
import { Vector2 } from '../../../../util/data/Vector2'

type CircleInfo = Vector2 & { r: number, width: number, pixX: number, pixY: number, pixR: number, pixWidth: number }

type CircleFragmentInfo = { start: number, end: number } & CircleInfo

const drawCircleFragment = (ctx: CanvasRenderingContext2D, { pixX: x,pixY: y, pixR: r, pixWidth: width, start, end }: CircleFragmentInfo, color: RGBA) => {
	
	const lR = r - width

	const point1 = {
		x: x + Math.cos(start) * lR,
		y: y + Math.sin(start) * lR,
	}
	const point2 = {
		x: x + Math.cos(start) * r,
		y: y + Math.sin(start) * r,
	}
	const point4 = {
		x: x + Math.cos(end) * lR,
		y: y + Math.sin(end) * lR,
	}
	const colorStr = color.toRGBAString()
	ctx.beginPath()
	ctx.fillStyle = colorStr
	ctx.strokeStyle = colorStr
	ctx.moveTo(point1.x, point1.y)
	ctx.lineTo(point2.x, point2.y)
	ctx.arc(x, y, r, start, end)
	ctx.lineTo(point4.x, point4.y)
	ctx.arc(x, y, lR, end, start, true)
	ctx.closePath()
	ctx.fill()
	ctx.stroke()
}

const drawCircle = (ctx: CanvasRenderingContext2D, circleInfo: CircleInfo) => {
	const standadColors = [
		new RGBA(255, 0, 0),
		new RGBA(255, 255, 0),
		new RGBA(0, 255, 0),
		new RGBA(0, 255, 255),
		new RGBA(0, 0, 255),
		new RGBA(255, 0, 255),
		new RGBA(255, 0, 0),
	]
	const lerpDegree = Math.PI * 2 / 6
	for (let i = 0; i < standadColors.length - 1; i++) {
		const colors = RGBA.Lerp(standadColors[i], standadColors[i + 1], 255)
		const start = i * lerpDegree
		const end = (i + 1) * lerpDegree
		const dtDegree = (end - start) / colors.length
		for (let j = 0; j < colors.length - 1; j++) {
			drawCircleFragment(ctx, { ...circleInfo, start: start + dtDegree * j, end: start + dtDegree * (j + 1) }, colors[j])
		}
	}
}

const drawSelectArea = (ctx: CanvasRenderingContext2D, {pixX: x,pixY: y, pixR: r, pixWidth: width}: CircleInfo, standardColor: string) => {
	const curR =  Math.sin(Math.PI * 0.25) * (r - width)
	const w = curR * 2
	ctx.clearRect(x-curR, y-curR , w, w)
	const gradient = ctx.createLinearGradient(x-curR, y+curR, x-curR, y-curR )
	gradient.addColorStop(0, standardColor)
	gradient.addColorStop(1,'white')
	ctx.fillStyle = gradient
	ctx.fillRect(x-curR, y-curR , w, w)
	const gradient2 = ctx.createLinearGradient(x-curR, y-curR, x + curR, y - curR )
	gradient2.addColorStop(0, 'black')
	gradient2.addColorStop(1,'rgba(0,0,0,0)')
	ctx.fillStyle = gradient2
	ctx.fillRect(x-curR, y-curR , w, w)
}

const isInSelectArea = (position: Vector2, {x,y,width,r}: CircleInfo) => {
	const halfW =   Math.sin(Math.PI * 0.25) * (r - width)
	const minX = x - halfW
	const maxX = x + halfW
	const minY = y - halfW
	const maxY = y + halfW
	return position.x > minX &&
    position.x < maxX &&
    position.y > minY &&
    position.y < maxY 
}

const getPointType = (position: Vector2, circleInfo: CircleInfo): 'circle'| 'round'| null => {
	const {x,y,width,r} = circleInfo
	const dis = (position.x - x ) ** 2 + (position.y - y) ** 2
	const maxDis = r **2
	const minDis = (r- width) ** 2
	const minX = x - 0.
	if(dis > minDis && dis < maxDis){
		return 'circle'
	}else if(isInSelectArea(position, circleInfo)){
		return 'round'
	}else{
		return null
	}
     
}

const getCirclePosition = (position: Vector2, {x,y,width,r}: CircleInfo) => {
	const middleR = r - 0.5 * width 
	const dx = position.x -x
	const dy = position.y -y
	const dist = Math.sqrt( dx **2 + dy **2 )
	return {
		x: x + dx * middleR/ dist,
		y: y + dy * middleR / dist
	}
}

const getSelectPoint = (position: Vector2,circleInfo: CircleInfo) => {
	const  {x,y,width,r} = circleInfo
	const minR =  Math.sin(Math.PI * 0.25) * (r - width)
	const dx = position.x -x
	const dy = position.y -y
	const dist = Math.sqrt( dx **2 + dy **2 )
	if(isInSelectArea(position, circleInfo)){
		return position
	}
}

const getStandardColor = (point: Vector2, {x,y}: Vector2) => {
	const disX = point.x - x
	const disY =  y - point.y
	const atan2 = Math.atan2(disY, disX)
	const deg = atan2 >= 0? atan2: atan2+ 2* Math.PI
	const hPercent = 1- deg /(Math.PI*2)
	const perPercent = 1/6
	const colors = [
		new RGBA(255, 0, 0),
		new RGBA(255, 255, 0),
		new RGBA(0, 255, 0),
		new RGBA(0, 255, 255),
		new RGBA(0, 0, 255),
		new RGBA(255, 0, 255),
		new RGBA(255, 0, 0),
	]
	for(let i =0; i< 6; i++){
		const minP = i *perPercent
		const maxP = (i+1)*perPercent
		if(hPercent > minP &&hPercent < maxP ){
			return RGBA.getLerpColor(colors[i], colors[i+1],1- (maxP - hPercent)/perPercent)
		}
		if(hPercent=== minP){
			return colors[i]
		}
		if(hPercent === maxP){
			return colors[i+1]
		}
	}
	return RGBA.BLACK

} 
/**
 * 
 * @param point 
 * @param x 中心坐标x
 * @param y 中心 y坐标
 * @param r 半径
 */
const getSelectColor = (point: Vector2, color: RGBA, x: number, y:number, r:number ) => {
	const startX = x - r
	const startY = y - r
	const width = r *2
	const s = Math.max(Math.min((point.y -startY)/width, 1), 0)
	const l = Math.max(Math.min((point.x - startX)/width,1), 0)
	console.log('stander: ', color, s, l)

	return  RGBA.mutipy(RGBA.add( RGBA.mutipy(color, s), RGBA.mutipy(RGBA.BLACK, 1-s)), l) 

}

export interface ColorPannelProps {
    
    value?: RGBA

    onChange?: (color: RGBA) => void 
}

const handleChange = debounce((onChange: ((color: RGBA) => void) | undefined , circlePoint:Vector2, selectPoint: Vector2, cirleInfo:CircleInfo) => {
	const standColor = getStandardColor(circlePoint,{x:cirleInfo.x, y: cirleInfo.y})
	const r = Math.cos(Math.PI *0.25) * cirleInfo.r - cirleInfo.width
	onChange && onChange( getSelectColor(selectPoint, standColor, cirleInfo.x, cirleInfo.y, r))
},200)

export default ({ value, onChange }: ColorPannelProps) => {

	const [circlePoint, setCirclePoint] = useState({x: 0, y:0})
	const [ selectPoint, setSelectPoint ] = useState({x: 0, y:0})
	const [ pointType,  setPointType ] = useState<'circle'|'round'| null>(null)
	const [cirleInfo, setCircleInfo ] = useState<CircleInfo>()
	const [ctx, setCtx] = useState<CanvasRenderingContext2D>()
	const operateInfo = useRef({ isSelecting: false })
	const canvas = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
        // TODO show position acording value.
		console.log(value)
	}, [value])

	useEffect(() => {
		if(canvas.current){
			const ctx = canvas.current.getContext('2d')
			const size = canvas.current.clientWidth * devicePixelRatio
			canvas.current.width = size
			canvas.current.height = size
			if (ctx) {
				setCtx(ctx)
				const halfWidth = canvas.current.clientWidth * 0.5
				const pixHalfWidth = canvas.current.width * 0.5
				const cirleInfo= { 
					x: halfWidth, y: halfWidth, r: halfWidth-10, width: 30, 
					pixX: pixHalfWidth, pixY: pixHalfWidth, pixR: pixHalfWidth - 10 * devicePixelRatio,
					pixWidth: 30 * devicePixelRatio  
				}
				drawSelectArea(ctx, cirleInfo, 'rgb(255,0,0)')
				drawCircle(ctx, cirleInfo)
				setCircleInfo(cirleInfo)
				setCirclePoint({x: halfWidth + cirleInfo.r, y: halfWidth})
				setSelectPoint({x: halfWidth, y: halfWidth})
			}
		}
	}, [canvas.current])

	const onPointMove = ( { nativeEvent: {offsetX: x, offsetY: y}}: React.PointerEvent) => {
		if(!operateInfo.current.isSelecting){
			return
		}
		if(cirleInfo && pointType ){
			if(pointType === 'circle'&&ctx){
				setCirclePoint(getCirclePosition({x,y}, cirleInfo))
				const sC = getStandardColor({x,y}, {x:cirleInfo.x, y:cirleInfo.y})
				drawSelectArea(ctx, cirleInfo,sC.toRGBAString())
			}
			if(pointType === 'round'){
				const p = getSelectPoint({x,y}, cirleInfo)
				if(p){
					setSelectPoint(p)
                   
				}
			}
		}
	}

	const onPointDown = ( { nativeEvent: {offsetX: x, offsetY: y}}: React.PointerEvent) => {
		console.log('down...')
		if(cirleInfo ){
			operateInfo.current.isSelecting = true;
			setPointType(getPointType({x,y}, cirleInfo))
			const positionType = getPointType({x,y}, cirleInfo)
			if(positionType === 'circle'){
				setCirclePoint({x,y})
			}
			if(positionType === 'round'){
				setSelectPoint({x,y})
			}
		}
	}

	const onPointOut = () => {
		console.log('out...')
		operateInfo.current.isSelecting = false;
		setPointType(null)
	}

	useMemo(() => cirleInfo && handleChange(onChange, circlePoint, selectPoint, cirleInfo),[circlePoint, selectPoint])

   

	return <div
		 	className={style.colorPannelWrap}
			
		 >
		<canvas 
			ref={canvas} 
			className={style.colorPannel}
		>
		</canvas>
		<div 
			className={style.circlePoint}
			style={{transform:`translate3d(${circlePoint.x -5}px, ${circlePoint.y -5}px, 0)`}}
		></div>
		<div 
			style={{transform:`translate3d(${selectPoint.x -5}px, ${selectPoint.y -5}px, 0)`}}
			className={style.selectPoint}
		>
		</div>
		<div 
			className={style.canvasCover}
			style={{height: `${ cirleInfo &&cirleInfo.x * 2}px`}}
			onPointerDown={onPointDown}
			onPointerUp={onPointOut}
			onPointerMove={onPointMove}
		></div>
	</div>
}