import VConcole from 'vconsole'
new VConcole()

import React from 'react'
import ReactDom from 'react-dom'
import {App} from './app/index'
import zhCN from 'antd/es/locale/zh_CN'
import { ConfigProvider, Modal, message } from 'antd'
import { Workbox } from 'workbox-window'

import 'antd/dist/antd.dark.less';

import './style.less'
ReactDom.render(
	<ConfigProvider locale={zhCN}>
		<App/>
	</ConfigProvider>, 
	document.querySelector('#root') 
);

if('serviceWorker' in navigator && process.env.BUILD_ENV !== 'development'){
	const workBox = new Workbox(`${process.env.PUBLIC_PATH||'./'}service-worker.js`);
	workBox.addEventListener('activated', ({isUpdate}) => {
		isUpdate && message.info(<span onClick={() => window.location.reload()}>应用已更新，点击加载.</span>, 0)
	})
	workBox.register()
}

