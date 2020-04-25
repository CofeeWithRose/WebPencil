import { useRef, useEffect } from "react"
import Hammer from 'hammerjs'
import { Vector2 } from "../util/data/Vector2"
import { throttle } from 'lodash'

export interface UseTransformProps {
    
    maxScale?: number,

    minScale? :number,

}

const getValueFromRange = (val: number, min: number, max: number) => Math.min( Math.max(min, val), max )

const getTargetValue = ( val: number, targetVal: number, dt: number ) => Math.abs(val - targetVal) < dt? targetVal:val

export default function useTransform<WrapElement extends HTMLElement>(userTransformProps?: UseTransformProps){
    const {
        
        maxScale = 2,

        minScale = 0.5,

    } = userTransformProps||{}

    const wrapRef = useRef<WrapElement>(null)
    // const contentRef = useRef<ContentElement>(null)
    const transformInfoRef = useRef({
        /**
         * 旋转开始时手势的rotate, 用于计算手势的rotate差值.
         */
        gestrueStartRotate: 0,
        
        /**
         * 旋转开始时元素的rotate，用于计算元素旋转的差值.
         */
        eleStartRotate: 0,

        /**
         *即将渲染的rotate.
         */
        rotate: 0,

        /**
         * 缩放开始时的手势识别的缩放值.
         */
        gestrueStartscale: 1,

        /**
         * 缩放开始时元素的缩放值.
         */
        eleStartScale: 1,
        
        /**
         * 渲染的缩放值.
         */
        scale: 1,

        gestrueStartTranslate:new Vector2(),

        eleStartTanslate:new Vector2(),

        translate: new Vector2(),

        center: new Vector2(),
    })

    useEffect(()=> {
        if(
            null !== wrapRef.current
        ){

            const computedStyle = getComputedStyle(wrapRef.current)

            /**
             * 默认的transform中心点.
             */
            transformInfoRef.current.center = new Vector2(parseFloat(computedStyle.width) * 0.5, parseFloat(computedStyle.height) * 0.5)

            const mainManager = new Hammer.Manager(wrapRef.current)
            mainManager.add(new Hammer.Pan( { threshold: 0, pointers: 2}))
            mainManager.add(new Hammer.Swipe()).recognizeWith(mainManager.get('pan'))
            mainManager.add(new Hammer.Rotate()).recognizeWith(mainManager.get('pan'))
            mainManager.add(new Hammer.Pinch()).recognizeWith([mainManager.get('pan'), mainManager.get('rotate')])


            const updateTransform =  throttle(() => {
                const { rotate, scale, translate:{ x:transformX, y: transformY}, center } = transformInfoRef.current;
                (<WrapElement>wrapRef.current).style.transform = `translate3d( ${transformX}px, ${transformY}px, 0) translate3d( ${transformX}px, ${transformY}px, 0) scale3d(${scale}, ${scale},1) rotate(${rotate}deg)`;
                (<WrapElement>wrapRef.current).style.transformOrigin = `${center.x}px ${center.y}px`
                console.log('center: ', center)
            }, 10)

            const onPanStart = ({deltaX, deltaY, center }: HammerInput) => {
                const { translate } = transformInfoRef.current
                transformInfoRef.current.gestrueStartTranslate = new Vector2(deltaX, deltaY)
                transformInfoRef.current.eleStartTanslate = translate
                transformInfoRef.current.center = center
            }

            const onPan = ({deltaX, deltaY }: HammerInput) =>{
                const { scale, gestrueStartTranslate, eleStartTanslate } = transformInfoRef.current
                const valX = eleStartTanslate.x + (deltaX - gestrueStartTranslate.x) * scale
                const valY = eleStartTanslate.y + (deltaY - gestrueStartTranslate.y) * scale
                transformInfoRef.current.translate = new Vector2( getTargetValue(valX, 0, 20 *scale),  getTargetValue(valY, 0, 20 *scale))
                updateTransform()
            }
          
            const onRotateStart = ({rotation, center}: HammerInput) => {
                const { rotate } = transformInfoRef.current
                transformInfoRef.current.eleStartRotate = rotate
                transformInfoRef.current.gestrueStartRotate = rotation
                transformInfoRef.current.center = center
            }
            const onRotate = ({rotation, center}: HammerInput) => { 
                const { gestrueStartRotate, eleStartRotate } =  transformInfoRef.current
                const rotateVal = eleStartRotate +  (rotation - gestrueStartRotate)
                transformInfoRef.current.rotate = getTargetValue(rotateVal, 0, 10 )
                transformInfoRef.current.center = center
                updateTransform()
            }
            const onRotateEnd = ({rotation}: HammerInput) => { console.log('onRotateEnd:', rotation) }

            const onPinchStart = ({ scale, center }: HammerInput) =>{
                transformInfoRef.current.gestrueStartscale = scale
                transformInfoRef.current.eleStartScale = transformInfoRef.current.scale
                transformInfoRef.current.center = center
            }

            const onPinchinMove = ({ scale, center }: HammerInput) => { 
                const { eleStartScale, gestrueStartscale } = transformInfoRef.current
                const scaleVal = getValueFromRange(eleStartScale + (scale - gestrueStartscale), minScale, maxScale)
                transformInfoRef.current.scale = getTargetValue(scaleVal, 1, 0.2)
                transformInfoRef.current.center = center

                updateTransform()
            }

            mainManager.on('panstart', onPanStart)
            mainManager.on('pan', onPan)


            mainManager.on('rotatestart', onRotateStart)
            mainManager.on('rotate', onRotate)
            mainManager.on('rotateend', onRotateEnd)

            mainManager.on('pinchstart', onPinchStart)
            mainManager.on('pinchmove', onPinchinMove)
            
            updateTransform()
            return () => {
                mainManager.off('panstart', onPanStart)
                mainManager.off('pan', onPan)
    
    
                mainManager.off('rotatestart', onRotateStart)
                mainManager.off('rotate', onRotate)
                mainManager.off('rotateend', onRotateEnd)
    
                mainManager.off('pinchstart', onPinchStart)
                mainManager.off('pinchmove', onPinchinMove)
            }
        }
    }, [wrapRef.current])

    return {
        wrapRef,
    }
}