import { RefObject, useEffect } from "react"

export type PointerEventHandle = (e: PointerEvent) => void
export type ManagerOptions = {
  onPointStart?: PointerEventHandle
  onPointerMove?: PointerEventHandle
  onPointerEnd?: PointerEventHandle
  viewEle: RefObject<HTMLElement>
  translateEle?: RefObject<HTMLElement>
  scaleEle?: RefObject<HTMLElement>
}


export default ({

}: ManagerOptions) => {

  useEffect(() => {
    
  },[])

}