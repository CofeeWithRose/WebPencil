import React, { useState } from 'react'
import BasicLayout from '../../lauout/BasicLayout'
import style from './style.less'
import WorkItem from './component/WorkItem'
import { PlusOutlined } from '@ant-design/icons';
import { history } from '../../app'
import { FileMenu, SizeInfo } from './FileMenu';
import qs from 'qs'

export default () => {
    
    const [ isShowSetting , setIsShowSetting ] = useState(false)
    const addWork = () => {
        setIsShowSetting(true)
    }

    const newWork = (sizeInfo: SizeInfo) => {
        history.push({pathname: '/paint', search:qs.stringify({...sizeInfo, type: 'new'}) })
    }


    return <BasicLayout
        asideClass={style.asideClass}
    >
        <main className={style.listWrap}>
            <WorkItem 
                id='add' 
                name="新建"
                content={ <PlusOutlined style={{ fontSize: '30px' }} />}  
                onClick={addWork}
            />

        </main>
        <FileMenu isVisibale={isShowSetting} onComplete={newWork}/>
     
    </BasicLayout>
}