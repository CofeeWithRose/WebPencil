
import React, {  useEffect, useState } from 'react'
import BasicLayout from '../../lauout/BasicLayout'
import style from './style.less'
import PCanvas, { usePCanvas } from './PCanvas'
import {history} from '../../app'
import  qs from 'qs'
import { WorkInfo, WorkDetail } from '../../workStorage'
import TopToolBar from './TopToolBar'


export default function Paint(){

	const [ workDetail, setWorkDetail ] = useState<WorkDetail>()

	useEffect(() => {
		const {width, height, type, workId} = qs.parse(history.location.search.substr(1)) as  (Pick<WorkInfo, 'width' | 'height'| 'workId'> & {type: 'new'|'edit'})
		if( type === 'new'){
		}else{
		}
	},[])

	const { pCanvasRef } = usePCanvas()

	return <BasicLayout 
			contentClassName={style.layout} 
			asideNode={<TopToolBar/>}
			 
		>
			<PCanvas 
				pCanvasRef={pCanvasRef}   
				workDetail={workDetail}
			/>
	</BasicLayout>
}