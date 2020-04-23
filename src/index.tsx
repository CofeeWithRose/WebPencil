import VConcole from 'vconsole'
new VConcole()

import React from 'react'
import ReactDom from 'react-dom'
import {App} from './app/index'
import zhCN from 'antd/es/locale/zh_CN'
import { ConfigProvider, Modal, message } from 'antd'
import 'antd/dist/antd.dark.less';

import './style.less'

ReactDom.render(
	<ConfigProvider locale={zhCN}>
		<App/>
	</ConfigProvider>, 
	document.querySelector('#root') 
)

if ( 'serviceWorker' in navigator) {
	navigator.serviceWorker.addEventListener('controllerchange', async () => {
		message.info(<span onClick={() => window.location.reload()}>点击更新应用</span>,0)

	})
	// Use the window load event to keep the page load performant
	window.addEventListener('load', async () => {
		console.log('try to regist service worker')
		const reg= await navigator.serviceWorker.register(`${process.env.PUBLIC_PATH||'./'}service-worker.js`)
		console.log(' registed service worker')
		reg.update()
	});

	
}
