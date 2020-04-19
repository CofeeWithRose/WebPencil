import VConcole from 'vconsole'
new VConcole()

import React from 'react'
import ReactDom from 'react-dom'
import {App} from './app/index'
import zhCN from 'antd/es/locale/zh_CN'
import { ConfigProvider } from 'antd'
import './style.less'

ReactDom.render(
	<ConfigProvider locale={zhCN}>
		<App/>
	</ConfigProvider>, 
	document.querySelector('#root') 
)

if ( 'serviceWorker' in navigator) {
	// Use the window load event to keep the page load performant
	window.addEventListener('load', async () => {
	  const reg= await navigator.serviceWorker.register('./service-worker.js')
	  reg.update()
	});
	navigator.serviceWorker.addEventListener('controllerchange', () => {
		window.location.reload()
		console.log('service worker change..')
	})
}
console.log((window as any).webkitRequestFileSystem)