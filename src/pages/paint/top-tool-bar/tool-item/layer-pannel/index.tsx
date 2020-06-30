import React, { useEffect, useState, useMemo, useRef, MutableRefObject, RefObject } from 'react'
import { Tooltip, List, Drawer, Tag, Divider } from 'antd'
import { PCanvasController, CanvasEventData } from '../../../pcanvas/pcnvas.controller'
import { LayerDetail } from '../../../../../workStorage'
import styles from './index.less'
import useCopyLayer from '../../../../../hooks/use-copy-layer'
import LayerList from './LayerList'
import LayerItem from './LayerItem'

export interface  LayerProps{
    pCanvasController: PCanvasController
}


export default ({ pCanvasController }: LayerProps) => {

	const [layers, setLayers] = useState<LayerDetail[]>([])

	const canvasesRef = useRef<{[layerId: string]:HTMLCanvasElement}>({})

	const needUpdateRef = useRef<LayerDetail[]>([])

	const { copyCanvas } =  useCopyLayer(layers, needUpdateRef, canvasesRef)

	const [ activeLayerId, setActiveLayerId ] = useState('')

	const [ showLayerDraw, setShowLayerDraw ] = useState(false)

   
	const showLayerPannel = () => {
		setShowLayerDraw( show => {
			if(!show){
				setTimeout(copyCanvas)
			}
			return !show
		})
	}
   

	useEffect(() => {
		const init = async () => {
			const allLayers = await pCanvasController.getLayers() 
			let layers: LayerDetail[] =[...allLayers]
			needUpdateRef.current.push(...allLayers)
			setLayers(pre => [...pre,...layers])
		}
		pCanvasController.on('init', init)
		return () => pCanvasController.off('init', init)
	},[])
   

	useEffect(() => {

		const onFocusLayer = ( {data: {layerDetail}}: CanvasEventData['focusLayer']) => {
			console.log('onFocusLayer...')
			setActiveLayerId(layerDetail.layerId)
		}
		const onAddLayer = ( {data: {layerDetail}}: CanvasEventData['addLayer']) => {
			console.log('onAddLayer')
			needUpdateRef.current.push(layerDetail)
			setLayers( preLayers =>  [layerDetail, ...preLayers])
		}
		const onRemoveLayer = ( { data:{layerDetail}}:CanvasEventData['removeLayer']) => {
			setLayers( preLayers => {
				const index = preLayers.indexOf(layerDetail)
				if(index > -1){
					preLayers.splice(index, 1)
				}
				return [...preLayers]
			})
		}
		const onContentChange = ({ data:{ layerDetail}, tag: creator}:CanvasEventData['contentChange']) => {
			if(layerDetail){
				needUpdateRef.current.push(layerDetail)
				setTimeout(copyCanvas)
				if(creator === 'user'){
					setShowLayerDraw( false)
				}
			}
		}
		pCanvasController.on('addLayer', onAddLayer)
		pCanvasController.on('contentChange', onContentChange)
		pCanvasController.on('focusLayer', onFocusLayer)
		pCanvasController.on('removeLayer', onRemoveLayer)
		return () => {
			pCanvasController.off('contentChange', onContentChange)
			pCanvasController.off('addLayer', onAddLayer)
			pCanvasController.off('focusLayer', onFocusLayer)
			pCanvasController.off('removeLayer', onRemoveLayer)
		}
	}, [])
   

	const addLayer =() => {
		pCanvasController.addLayer()
	}

	const focusLayer = (layerDetail: LayerDetail) => {
		pCanvasController.focusLayer(layerDetail)
	}

	const onRemove = (layerDetail: LayerDetail) => {
		pCanvasController.removeLayer(layerDetail)
	}

	const listItemLRender = ( layer: LayerDetail, index: number ) => {
		const { visible, layerId, name } = layer
		return <List.Item
			className={layerId === activeLayerId? styles.active : ''}
		>
			<List.Item.Meta
				avatar={
					<canvas 
						onPointerUp={() => focusLayer(layer)}
						key={layerId}
						id={layerId}
						ref={(ref:HTMLCanvasElement)=> {
							canvasesRef.current[layerId] = ref
						}} 
						className={styles.canvases}
						width="45" 
						height="45"
					>
					</canvas>}
				title={<span>{`layer ${layers.length - index}`}</span>}
				description={ 
					<div>
						<span>{visible? 'visible': 'unvisible'}</span>
						<span onPointerUp={ () => onRemove(layer)} >remove</span> 
					</div>
				}
			/>
		</List.Item>
	}

	return <div>
		<Tag onPointerUp={showLayerPannel}>111</Tag>
		<Drawer
			title={null}
			width={200}
			visible={showLayerDraw}
			onClose={showLayerPannel}
			mask={false}
			className={styles.layerDrawer}
		>
			<LayerList
				title={<span onPointerUp={addLayer}>addlayer +</span>}
			>
				{
					layers.map(({layerId}) => 
						<LayerItem  
							key={layerId}
							canvasRef={(ref:HTMLCanvasElement)=> {
								canvasesRef.current[layerId] = ref
							}}
						/>
					)
				}
			</LayerList>
			{/* <List
				header={<span onPointerUp={addLayer}>addlayer +</span>}
				className={styles.pannelWrap}
				itemLayout="horizontal"
				dataSource={layers}
				rowKey="layerId"
				renderItem={listItemLRender}
			/> */}
		</Drawer>
	</div>
}