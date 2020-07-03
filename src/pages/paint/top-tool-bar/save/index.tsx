import { TopToolBarProps } from '../..'
import { useEffect } from 'react'
import WorkStorage, { LayerDetail } from '@/workStorage'
import { CanvasEvent, CanvasEventData } from '@/pages/paint/pcanvas'

export interface SaveToolProps extends TopToolBarProps{

}

export default function SaveTool({pCanvasController}: SaveToolProps){
	useEffect(() => {
		if(pCanvasController){
     
			const updateLayer = ( {data: { workId, layerDetail }} : CanvasEventData['contentChange'] ) => {
				WorkStorage.saveLayerDetail(workId, layerDetail)
			}
			const addLayer = ( { data: { workId, layerDetail, index } }: CanvasEventData['addLayer']) => {
				WorkStorage.saveLayerDetail(workId, layerDetail, index)
			}
  
			pCanvasController.on('contentChange', updateLayer)
			pCanvasController.on('addLayer', addLayer)
			return () => {
				pCanvasController.off('contentChange', updateLayer)
				pCanvasController.off('addLayer', addLayer)
			}
		}
	}, [pCanvasController])
	return null
}