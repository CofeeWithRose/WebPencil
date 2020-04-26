import { useRef, useEffect } from "react"
import Hammer from 'hammerjs'
import { Vector2 } from "../util/data/Vector2"
import { throttle } from 'lodash'

export interface UseTransformProps {
    
    maxScale?: number,

    minScale? :number,

    scaleEnable?: boolean

    rotateEnable?: boolean

}

const getValueFromRange = (val: number, min: number, max: number) => Math.min( Math.max(min, val), max )

const getTargetValue = ( val: number, targetVal: number, dt: number ) => Math.abs(val - targetVal) < dt? targetVal:val

export default function useTransform<WrapElement extends HTMLElement>(userTransformProps?: UseTransformProps){
    const {
        
        maxScale = 2,

        minScale = 0.5,

        scaleEnable = true,

        rotateEnable = true,

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

        /**
         * 旋转中心点.
         */
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

            /**
             * 添加操作时的动画，增强体验流畅度.
             */
            wrapRef.current.style.transition = 'transform 0.15s'

            const mainManager = new Hammer.Manager(wrapRef.current)
            mainManager.add(new Hammer.Pan( { threshold: 0, pointers: 2}))
            rotateEnable && mainManager.add(new Hammer.Rotate()).recognizeWith(mainManager.get('pan'))
            scaleEnable && mainManager.add(new Hammer.Pinch({threshold: 0.1})).recognizeWith([mainManager.get('pan'), mainManager.get('rotate')])


            const requestUpdate =  throttle(() => {
                requestAnimationFrame(()=> {
                    const { rotate, scale, translate:{ x:transformX, y: transformY}, center } = transformInfoRef.current;
                    (<WrapElement>wrapRef.current).style.transform = `translate3d( ${transformX}px, ${transformY}px, 0)  scale(${scale}) rotate(${rotate}deg)`;
                    (<WrapElement>wrapRef.current).style.transformOrigin = `${center.x}px ${center.y}px`
                    // console.log('translate: ', transformInfoRef.current.translate)
                    // console.log('center: ', transformInfoRef.current.center)
                })
            }, 10)

            const onPanStart = ({deltaX, deltaY }: HammerInput) => {
                const { translate } = transformInfoRef.current
                transformInfoRef.current.gestrueStartTranslate = new Vector2(deltaX, deltaY)
                transformInfoRef.current.eleStartTanslate = translate
            }

            const onPan = ({deltaX, deltaY, center }: HammerInput) =>{
                const { scale, gestrueStartTranslate, eleStartTanslate } = transformInfoRef.current
                const valX = eleStartTanslate.x + (deltaX - gestrueStartTranslate.x)
                const valY = eleStartTanslate.y + (deltaY - gestrueStartTranslate.y)
                const translate = scale ==1? 
                new Vector2( getTargetValue(valX, 0, 10 ),  getTargetValue(valY, 0, 10)):
                new Vector2(valX, valY)
                transformInfoRef.current.translate = translate
                
                requestUpdate()
            }
          
            const onRotateStart = ({rotation, center}: HammerInput) => {
                const { rotate, translate } = transformInfoRef.current
                transformInfoRef.current.eleStartRotate = rotate
                transformInfoRef.current.gestrueStartRotate = rotation
                
            }
            const onRotate = ({rotation, center}: HammerInput) => { 
                const { gestrueStartRotate, eleStartRotate, translate } =  transformInfoRef.current
                const deltaRotateion = rotation - gestrueStartRotate
                if( Math.abs(deltaRotateion) > 5){
                    console.log('rotating')
                    const rotateVal = eleStartRotate +  deltaRotateion
                    transformInfoRef.current.rotate = getTargetValue(rotateVal, 0, 10 )
                    transformInfoRef.current.center = Vector2.subtract(center, translate)
                    requestUpdate()
                }
              
            }

            const onPinchStart = ({ scale, center }: HammerInput) =>{
                const { translate, scale: slScale } = transformInfoRef.current
                transformInfoRef.current.gestrueStartscale = scale
                transformInfoRef.current.eleStartScale = slScale
            }

            const onPinchinMove = ({ scale, center }: HammerInput) => { 
                const { eleStartScale, gestrueStartscale, translate } = transformInfoRef.current
                const deltaScale = scale - gestrueStartscale
                if(Math.abs(deltaScale) > 0.1 ){
                    console.log('scaling...')
                    const scaleVal = getValueFromRange(eleStartScale + deltaScale, minScale, maxScale)
                    transformInfoRef.current.scale = getTargetValue(scaleVal, 1, 0.2)
                    transformInfoRef.current.center = Vector2.subtract(center, translate)
    
                    requestUpdate()
                }
               
            }

            mainManager.on('panstart', onPanStart)
            mainManager.on('panmove', onPan)


            mainManager.on('rotatestart', onRotateStart)
            mainManager.on('rotate', onRotate)

            mainManager.on('pinchstart', onPinchStart)
            mainManager.on('pinchmove', onPinchinMove)
            
            requestUpdate()
            return () => {
                mainManager.off('panstart', onPanStart)
                mainManager.off('panmove', onPan)
    
    
                mainManager.off('rotatestart', onRotateStart)
                mainManager.off('rotate', onRotate)
    
                mainManager.off('pinchstart', onPinchStart)
                mainManager.off('pinchmove', onPinchinMove)
            }
        }
    }, [wrapRef.current])

    return {
        wrapRef,
    }
}