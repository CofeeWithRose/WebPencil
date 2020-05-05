
import React, {  useEffect, useState } from 'react'
import BasicLayout from '../../lauout/BasicLayout'
import style from './style.less'
import PCanvas, { usePCanvas, PCanvasInstance } from './p-canvas'
import {history} from '../../app'
import  qs from 'qs'
import { WorkInfo, WorkDetail } from '../../workStorage'
import TopToolBar from './top-tool-bar'


export default function Paint(){

	const [ workDetail, setWorkDetail ] = useState<WorkDetail>()
	const {pCanvas} = usePCanvas()

	useEffect(() => {
		const {width, height, type, workId} = qs.parse(history.location.search.substr(1)) as  (Pick<WorkInfo, 'width' | 'height'| 'workId'> & {type: 'new'|'edit'})
		if( type === 'new'){
		}else{
		}
	},[])

	return <BasicLayout 
			contentClassName={style.layout} 
			headNode={<TopToolBar 
				pCanvasInstance={pCanvas}
			/>}
		>
			<PCanvas 
				pCanvas={pCanvas}   
				workDetail={workDetail}
			/>
	</BasicLayout>
}