import { useRef, useEffect } from "react"
import Hammer from 'hammerjs'
import { Vector2 } from "../util/data/Vector2"

export default function useTransform<WrapElement extends HTMLElement>(){
    const wrapRef = useRef<WrapElement>(null)
    // const contentRef = useRef<ContentElement>(null)
    const transformInfo = useRef({
        rotate: 0,
        scale: 1,
        translate: new Vector2(),
        center: new Vector2(),
    })

    useEffect(()=> {
        if(
            null !== wrapRef.current
        ){

            const mainManager = new Hammer.Manager(wrapRef.current, { mutiuser: true })
            mainManager.add(new Hammer.Pinch({ threshold: 0.5 })).set({enable: true})
            mainManager.add(new Hammer.Rotate({ threshold:20}))


            const updateTransform = () => {
                const { rotate, scale, translate:{ x:transformX, y: transformY} } = transformInfo.current;
                (<WrapElement>wrapRef.current).style.transform = `translate3d( ${transformX}px, ${transformY}px, 0) translate3d( ${transformX}px, ${transformY}px, 0) scale3d(${scale}, ${scale},1) rotate(${rotate}deg)`
            }

            const onRotateStart = ({rotation, center: {x, y}}: HammerInput) => {
                 
            }
            const onRotate = ({rotation, center:{x, y}}: HammerInput) => { 
                transformInfo.current.rotate = rotation
                updateTransform()
            }
            const onRotateEnd = ({rotation}: HammerInput) => { console.log('onRotateEnd:', rotation) }

            const onPinchin = ({ }: HammerInput) => { 
                console.log('pinch') 
            }

            mainManager.on('rotatestart', onRotateStart)
            mainManager.on('rotate', onRotate)
            mainManager.on('rotateEnd', onRotateEnd)
            mainManager.on('pinchin', onPinchin)
            
            updateTransform()
            return () => {
                mainManager.off('rotatestart', onRotateStart)
                mainManager.off('rotate', onRotate)
                mainManager.off('rotate', onRotateEnd)
                mainManager.off('pinchin', onPinchin)
            }
        }
    }, [wrapRef.current])

    return {
        wrapRef,
    }
}