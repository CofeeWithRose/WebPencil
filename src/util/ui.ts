import { LegacyRef, useEffect, MutableRefObject, useRef, RefObject } from 'react'

export type BehaviewNames = 'short_up'| 'long_up'

const defaultOptions = {
	// 单位 s.
	shorUpThreshold: 0.5
}
export const usePointerUp = ( 
  
	target: RefObject<HTMLElement>,
	{
		onShortUp,
		onLongUp,
	}:{
    onShortUp?: (e: PointerEvent) => void
    onLongUp?: (e: PointerEvent) => void
  },
	options=defaultOptions 
) => {

	useEffect(() => {
		if(!target.current) return
		let latsDownTime = 0
		const onPointerDown = ({timeStamp}: PointerEvent) => {
			latsDownTime = timeStamp
		}

		const onPointerUp = (e: PointerEvent) => {
			const  {timeStamp} = e
			console.log(timeStamp, latsDownTime, timeStamp  - latsDownTime)
			if((timeStamp  - latsDownTime) * 0.001 > options.shorUpThreshold){
				onLongUp && onLongUp(e)
			}else{
				onShortUp && onShortUp(e)
			}
		}
		target.current.addEventListener('pointerdown',onPointerDown )
		target.current.addEventListener('pointerup', onPointerUp)
		return () => {
			if(!target.current) return
			target.current.removeEventListener('pointerdown',onPointerDown )
			target.current.removeEventListener('pointerup', onPointerUp)
		}
	},[
		target.current
	])

}