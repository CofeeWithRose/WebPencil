import { useRef, useEffect } from "react"
import Hammer from 'hammerjs'
import { Vector2 } from "../util/data/Vector2"

export default function useTransform<WrapElement extends Element, ContentElement extends HTMLElement>(){
    const wrapRef = useRef<WrapElement>(null)
    const contentRef = useRef<ContentElement>(null)
    const transformInfo = useRef({
        rotate: 0,
        scale: 1,
        translate: new Vector2(),
    })

    useEffect(()=> {
        if(
            null !== wrapRef.current && 
            null != contentRef.current
        ){

            const mainManager = new Hammer.Manager(wrapRef.current)
            mainManager.add(new Hammer.Rotate())
            mainManager.add(new Hammer.Pinch())

            const updateTransform = () => {
                const { rotate, scale, translate:{ x:transformX, y: transformY} } = transformInfo.current;
                (<ContentElement>contentRef.current).style.transform = `translate3d( ${transformX}px, ${transformY}px, 0) translate3d( ${transformX}px, ${transformY}px, 0) scale3d(${scale}, ${scale},1) rotate(${rotate}deg)`
            }

            const onRotateStart = ({rotation}: HammerInput) => { console.log('onRotateStart:', rotation) }
            const onRotate = ({rotation}: HammerInput) => { 
                transformInfo.current.rotate = rotation
                updateTransform()
            }
            const onRotateEnd = ({rotation}: HammerInput) => { console.log('onRotateEnd:', rotation) }

            const onPinch = ({ }: HammerInput) => { console.log('pinch') }

            mainManager.on('rotatestart', onRotateStart)
            mainManager.on('rotate', onRotate)
            mainManager.on('rotateEnd', onRotateEnd)
            mainManager.on('pinch', onPinch)
            
            updateTransform()
            return () => {
                mainManager.off('rotatestart', onRotateStart)
                mainManager.off('rotate', onRotate)
                mainManager.off('rotate', onRotateEnd)
                mainManager.off('pinch', onPinch)
            }
        }
    }, [wrapRef.current, contentRef.current])

    return {
        wrapRef,
        contentRef,
    }
}