import { ToolBarProps } from "../../toolbar";
import React, { useCallback, useState, useEffect, useRef } from 'react'
import style from './index.less'
import { Vector2 } from "../../pannel/interface";
import { RGBA } from "../../pannel/consts";

type CircleInfo = Vector2 & { r: number, width: number }

type CircleFragmentInfo = { start: number, end: number } & CircleInfo

const drawCircleFragment = (ctx: CanvasRenderingContext2D, { x, y, r, width, start, end }: CircleFragmentInfo, color: RGBA) => {
    const lR = r - width;

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
    const colorStr = color.toColorString()
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

const drawRound = (ctx: CanvasRenderingContext2D, {x, y, r, width}: CircleInfo, standardColor: RGBA) => {
    const curR =  Math.sin(Math.PI * 0.25) * (r - width)
    const w = curR * 2
    ctx.clearRect(x-curR, y-curR , w, w)

}

const getPointType = (position: Vector2, {x,y,width,r}: CircleInfo): 'circle'| 'round'| null => {
    const dis = (position.x - x ) ** 2 + (position.y - y) ** 2
    const maxDis = r **2
    const minDis = (r- width) ** 2
    console.log('dis: ', minDis, maxDis, dis, r , position.x - x)
    if(dis > minDis && dis < maxDis){
        return "circle"
    }else if(dis < minDis){
        return "round"
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

const getRoundPosition = (position: Vector2, {x,y,width,r}: CircleInfo) => {
    const minR =  Math.sin(Math.PI * 0.25) * (r - width)
    const dx = position.x -x
    const dy = position.y -y
    const dist = Math.sqrt( dx **2 + dy **2 )
    if(dist < minR){
        return position
    }
    return {
        x: x + dx * minR/ dist,
        y: y + dy * minR / dist
    }
}



export default ({ onSelectTool }: ToolBarProps) => {

    const [circlePoint, setCirclePoint] = useState({x: 0, y:0})
    const [ roundPoint, setRoundPoint ] = useState({x: 0, y:0})
    const [ pointType,  setPointType ] = useState<'circle'|'round'| null>(null)
    const [cirleInfo, setCircleInfo ] = useState<CircleInfo>()
    const canvas = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        if(canvas.current){
            const ctx = canvas.current.getContext('2d')
            canvas.current.width = canvas.current.clientWidth;
            canvas.current.height = canvas.current.clientWidth;
            if (ctx) {
                const halfWidth = canvas.current.width * 0.5
                const cirleInfo= { x: halfWidth, y: halfWidth, r: halfWidth-10, width: 30 }
                drawCircle(ctx, cirleInfo)
                setCircleInfo(cirleInfo)
                setCirclePoint({x: halfWidth + cirleInfo.r, y: halfWidth})
                setRoundPoint({x: halfWidth, y: halfWidth})
            }
        }
    }, [])

    const onPointMove = ( { nativeEvent: {offsetX: x, offsetY: y}}: React.PointerEvent) => {
        if(cirleInfo && pointType ){
            if(pointType === 'circle'){
                setCirclePoint(getCirclePosition({x,y}, cirleInfo))
            }
            if(pointType === 'round'){
                setRoundPoint(getRoundPosition({x,y}, cirleInfo))
            }
        }
    }

    const onPointDown = ( { nativeEvent: {offsetX: x, offsetY: y}}: React.PointerEvent) => {
        if(cirleInfo ){
            setPointType(getPointType({x,y}, cirleInfo))
            const positionType = getPointType({x,y}, cirleInfo)
            if(positionType === 'circle'){
                setCirclePoint({x,y})
            }
            if(positionType === 'round'){
                setRoundPoint({x,y})
            }
        }
    }

    const onPointOut = () => setPointType(null)

   

    return <div className={style.colorPannelWrap}>
        <canvas 
            ref={canvas} 
            className={style.colorPannel}
            onPointerDown={onPointDown}
            onPointerOut={onPointOut}
            onPointerUp={onPointOut}
            onPointerMove={onPointMove}
            onPointerLeave={onPointOut}
        >
        </canvas>
        <div 
            className={style.circlePoint}
            style={{transform:`translate3d(${circlePoint.x}px, ${circlePoint.y}px, 0)`}}
        ></div>
        <div 
        style={{transform:`translate3d(${roundPoint.x}px, ${roundPoint.y}px, 0)`}}
            className={style.roundPoint}
        >
        </div>
    </div>
}