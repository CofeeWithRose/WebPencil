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

if ('serviceWorker' in navigator) {
	// Use the window load event to keep the page load performant
	window.addEventListener('load', () => {
	  navigator.serviceWorker.register('./service-worker.js');
	});
  }


// if ('serviceWorker' in navigator) {
// 	window.addEventListener('load', () => {
// 		navigator.serviceWorker.register('./service-worker.js').then(registration => {
// 			console.log('SW registered: ', registration)
// 		}).catch((registrationError:Error) => {
// 			console.log('SW registration failed: ', registrationError.message, registrationError.stack)
// 		})
// 	})
// }