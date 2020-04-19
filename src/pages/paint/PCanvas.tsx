import React, { useRef, useEffect } from 'react'
import Hammer from 'hammerjs'
import styles from './style.less'

export interface PCanvasProps {
    type: 'new'| 'store',
        
}

export default () =>{

    const mainRef = useRef<HTMLElement>(null)

    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if(mainRef.current){
            const mainManager = new Hammer.Manager(mainRef.current)
            mainManager.add(new Hammer.Rotate())
            mainManager.add(new Hammer.Pinch())
            const onRotate = ({rotation}: HammerInput) => { console.log(rotation)}
            const onPinch = ({ }: HammerInput) => { console.log('pinch') }
            mainManager.on('rotate', onRotate)
            mainManager.on('pinch', onPinch)
            return () => {
                mainManager.off('rotate', onRotate)
                mainManager.off('pinch', onPinch)
            }
        }
    }, [mainRef.current])

    return <main 
        ref={mainRef}
        className={styles.PCanvas}
    >
      <div
        ref={containerRef}
      >
      </div>
    </main>
}