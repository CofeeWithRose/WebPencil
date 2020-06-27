import { useRef, useEffect, RefObject } from "react"
import Hammer from 'hammerjs'
import { Vector2 } from "../util/data/Vector2"
import { throttle } from 'lodash'

export interface UseTransformProps {
    
    maxScale?: number,

    minScale? :number,

    // scaleEnable?: boolean

    // rotateEnable?: boolean
    scaleRef?: RefObject<HTMLElement>,

    transRef?: RefObject<HTMLElement>,

    // rotateEle?: HTMLElement,

    viewRef: RefObject<HTMLElement>,

}

const getValueFromRange = (val: number, min: number, max: number) => Math.min( Math.max(min, val), max )

const getTargetValue = ( val: number, targetVal: number, dt: number ) => Math.abs(val - targetVal) < dt? targetVal:val

const scaleFun = (val: Vector2, center: Vector2,  scale: number) => {
    const valVec = Vector2.subtract(val, center)
    return Vector2.add(Vector2.multipy(valVec, scale), center)
}

const rotateFun = (val: Vector2, center: Vector2,  rotate: number) => {
    const valVec = Vector2.subtract(val, center)
    return Vector2.add(Vector2.rotate(valVec, rotate), center)
}

const translateFun = (val: Vector2, center: Vector2, translate: Vector2, scale: number, rotate: number ): Vector2 => {
    return Vector2.add(rotateFun(scaleFun(val,center, scale), center,rotate), translate)
}

const zero = new Vector2()
// console.log('translateFun: ', translateFun(new Vector2(0,1), zero, zero, 2, 90))

/**
 * 当transform-origin的改变（用户旋转操作时会发生）,此时scale或rotate有值会导致图像抖动，该方法可以获取修正后的transform。
 */
const getNewTranslate = (preCenter: Vector2, newCenter: Vector2, translate: Vector2, scale: number, rotate: number): Vector2 => {
    const preVec = translateFun(new Vector2, preCenter, translate, scale, rotate)
    const newVec = translateFun(new Vector2, newCenter, translate, scale, rotate)
    return Vector2.add(Vector2.subtract(newVec, preVec), translate)
}

const TRANSACTION = 'transform 0.1s'

export default function useTransform(userTransformProps?: UseTransformProps){
    const {
        
        maxScale = 2,

        minScale = 0.5,

        transRef,

        viewRef,

    } = userTransformProps||{}

    // const wrapRef = useRef<WrapElement>(null)
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
        scale: minScale,

        gestrueStartTranslate:new Vector2(),

        eleStartTanslate:new Vector2(),

        translate: new Vector2(),

        /**
         * 旋转中心点.
         */
        center: new Vector2(),
    })

    useEffect(()=> {
      if(!viewRef?.current) return
        if( transRef&&transRef.current ){
         
            const computedStyle = getComputedStyle(transRef.current)

            /**
             * 默认的transform中心点.
             */
            transformInfoRef.current.center = new Vector2(parseFloat(computedStyle.width) * 0.5, parseFloat(computedStyle.height) * 0.5)

            /**
             * 添加操作时的动画，增强体验流畅度.
             */
            // transRef.current.style.transition = TRANSACTION
            const mainManager = new Hammer.Manager(viewRef.current)
            mainManager.add(new Hammer.Pan( { threshold: 0, pointers: 2, 
              enable: (_, data) => {
                if(data&&data.pointers.length >1){
                  const { pointers: [ p1, p2 ] } = data
                  console.log( Vector2.dist(p1,p2))
                  return Vector2.dist(p1,p2)<200
                 
                }
                return false
              }
            }))
            // mainManager.add(new Hammer.Rotate()).recognizeWith(mainManager.get('pan'))
            mainManager.add(new Hammer.Pinch({
              enable: (_, data) => {
                if(data&&data.pointers.length >1){
                  const { pointers: [ p1, p2 ] } = data
                  console.log( Vector2.dist(p1,p2))
                  return Vector2.dist(p1,p2)> 200
                 
                }
                return false
              }
            })).recognizeWith([mainManager.get('pan') ])


            const requestUpdate =  throttle(() => 
                 new Promise(resolve => {
                    requestAnimationFrame(()=> {
                      if(!transRef.current) return
                        const { rotate, scale, translate:{ x:transformX, y: transformY}, center } = transformInfoRef.current;
                        transRef.current.style.transform = `translate3d( ${transformX}px, ${transformY}px, 0)  scale(${scale}) rotate(${rotate}deg)`;
                        // transRef.current.style.transformOrigin = `${center.x}px ${center.y}px`
                        resolve()
                        // console.log('translate: ', transformInfoRef.current.translate)
                        // console.log('center: ', transformInfoRef.current.center)
                    })
                }), 10)

            const onPanStart = ({deltaX, deltaY }: HammerInput) => {
                const { translate } = transformInfoRef.current
                transformInfoRef.current.gestrueStartTranslate = new Vector2(deltaX, deltaY)
                transformInfoRef.current.eleStartTanslate = translate;
                // if(transRef.current){
                //   transRef.current.style.transition = ''
                //     requestAnimationFrame(() => {
                //         if(transRef.current){
                //           transRef.current.style.transition = TRANSACTION
                //         }
                //     } )
                // }
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
          
            // const onRotateStart = async ({rotation, center}: HammerInput) => {
            //     const { rotate, translate, center: preCenter, scale } = transformInfoRef.current
            //     transformInfoRef.current.eleStartRotate = rotate
            //     transformInfoRef.current.gestrueStartRotate = rotation
            //     const newCenter = Vector2.subtract(center, translate)
            //     transformInfoRef.current.translate = getNewTranslate(preCenter, newCenter, translate, scale, rotate)
            //     transformInfoRef.current.center = newCenter
            //     await requestUpdate()
            //     if(wrapRef.current){
            //         wrapRef.current.style.transition = ''
            //         requestAnimationFrame(() => {
            //             if(wrapRef.current){
            //                 wrapRef.current.style.transition = TRANSACTION
            //             }
            //         } )
            //     }
                
            // }
            // const onRotate = ({rotation}: HammerInput) => { 
            //     const { gestrueStartRotate, eleStartRotate, translate } =  transformInfoRef.current
            //     const deltaRotateion = rotation - gestrueStartRotate
            //     const rotateVal = eleStartRotate +  deltaRotateion
            //     transformInfoRef.current.rotate = getTargetValue(rotateVal, 0, 10 )
            //     requestUpdate()
              
            // }

            const onPinchStart = async ({ scale, center }: HammerInput) =>{
                const { translate, scale: slScale, center:preCenter, rotate } = transformInfoRef.current
                transformInfoRef.current.gestrueStartscale = scale
                transformInfoRef.current.eleStartScale = slScale
                const newCenter = Vector2.subtract(center, translate)
                transformInfoRef.current.translate = getNewTranslate(preCenter, newCenter, translate, scale, rotate)
                transformInfoRef.current.center = newCenter
                await requestUpdate()
                // if(transRef.current){
                //   transRef.current.style.transition = ''
                //     requestAnimationFrame(() => {
                //         if(transRef.current){
                //           transRef.current.style.transition = TRANSACTION
                //         }
                //     } )
                // }
            }

            const onPinchinMove = ({ scale, center }: HammerInput) => { 
                const { eleStartScale, gestrueStartscale, translate } = transformInfoRef.current
                const deltaScale = scale - gestrueStartscale
                const scaleVal = getValueFromRange(eleStartScale + deltaScale, minScale, maxScale)
                transformInfoRef.current.scale = getTargetValue(scaleVal, 1, 0.2)
                requestUpdate()
               
            }

            mainManager.on('panstart', onPanStart)
            mainManager.on('panmove', onPan)


            // mainManager.on('rotatestart', onRotateStart)
            // mainManager.on('rotate', onRotate)

            mainManager.on('pinchstart', onPinchStart)
            mainManager.on('pinchmove', onPinchinMove)
            
            requestUpdate()
            return () => {
                mainManager.off('panstart', onPanStart)
                mainManager.off('panmove', onPan)
    
    
                // mainManager.off('rotatestart', onRotateStart)
                // mainManager.off('rotate', onRotate)
    
                mainManager.off('pinchstart', onPinchStart)
                mainManager.off('pinchmove', onPinchinMove)
                mainManager.destroy()
            }
        }
    }, [...Object.values(userTransformProps||{})])

}