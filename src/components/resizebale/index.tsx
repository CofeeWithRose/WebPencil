import React, { PointerEvent, ReactElement, useState, useRef } from 'react'
import { Vector2 } from '../../util/data/Vector2'

export interface ResizableProps {

    children?: ReactElement

    defaultSize?: Vector2

    maxSize?: Vector2
}

export default function({children, defaultSize= {x: 100, y: 200}, maxSize={ x:defaultSize.x *10, y: defaultSize.y * 10}}: ResizableProps){

    const [rotation, setRotation] = useState(0)

    const [scale, setScale] = useState(1)

    
    const gestrueRef = useRef({ 
        state: null, // rotate\scale 
        initPoint: new Map<number, Vector2>(),
        currentPoint: new Map<number, Vector2>(),
    })

    const onPointerDown = (event: PointerEvent<HTMLDivElement> ) => {
        const {pointerId, clientX, clientY} = event
        gestrueRef.current.initPoint.set(pointerId, new Vector2(clientX, clientY))
    }

    const onPointerMove = ( event: PointerEvent ) => {
        const {pointerId, clientX, clientY} = event
        const { currentPoint, initPoint } = gestrueRef.current
        currentPoint.set(pointerId, new Vector2(clientX, clientY))

        const ACTION_DIST = 5; // 10 px.

        const ACTION_DEGREE = Math.PI /12. // 15deg.

        if(initPoint.size <2 ){
            console.log('need more point')
            return
        }

        const initPoints: Vector2[] = []
        const curPoints: Vector2[] = []
        initPoint.forEach( (v, k) =>{
            curPoints.push(currentPoint.get(k)|| v)
            initPoints.push(v)
        })

        // console.log('p: ', initPoints, curPoints)   

        // judge is scale by dist;
        const initDist = Vector2.dist(initPoints[0], initPoints[1])
        const curDist = Vector2.dist(curPoints[0], curPoints[1])
        if( Math.abs(curDist - initDist) > ACTION_DIST){
            // enlarge.
            const maxScale  =  Math.min(maxSize.x/defaultSize.x, maxSize.y/defaultSize.y) 
            setScale(scale => Math.max(Math.min(scale+(curDist - initDist)/initDist, maxScale), 1) )
            console.log('enlarge', Math.min(curDist/initDist, maxScale))
            // reset state after response gestrue.
            // gestrueRef.current = { state: null, initPoint: new Map(), currentPoint: new Map() }
            return
        }

        // if( initDist - curDist > ACTION_DIST ){
        //     // narrow.
        //      const maxScale  =  Math.min(maxSize.x/defaultSize.x, maxSize.y/defaultSize.y) 
        //     setScale( Math.min(curDist/initDist, maxScale) )
        //     console.log('narrow')
        //     // reset state after response gestrue.
        //     gestrueRef.current = { state: null, initPoint: currentPoint, currentPoint: new Map() }
        //     return
        // }

        // judge is rotate by degree.
        const moveDeg = Vector2.degree(initPoints[0], initPoints[1], Vector2.move(curPoints[1], curPoints[0], initPoints[0]))
        if(moveDeg > ACTION_DEGREE){
            // clockwise rotation.
            console.log('clockwise rotation')
            gestrueRef.current = { state: null, initPoint: currentPoint, currentPoint: new Map() }
            return
        }
        if(-moveDeg >ACTION_DEGREE){
            // anticlockwise rotation.
            console.log('anticlockwise rotation')
            gestrueRef.current = { state: null, initPoint: currentPoint, currentPoint: new Map() }
            return
        }

    }

    const onPointerUp = ( event: PointerEvent ) => {
        const { pointerId } = event
        const { initPoint, currentPoint } = gestrueRef.current
        initPoint.delete(pointerId)
        currentPoint.delete(pointerId)
        if(initPoint.size ===0 || currentPoint.size === 0){
            gestrueRef.current = { state: null, initPoint, currentPoint }
        }
    }



 

    const { x, y } = defaultSize
    const style = {
        background: 'red',
        width: `${x}px`,
        height: `${y}px`,
        transform: `scale3d( ${scale}, ${scale}, 1) rotate(${rotation}deg)`
    }

   

    return <div 
        style={style}
        onPointerEnter={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerMove={onPointerMove}
    >
        {children}
    </div>
}