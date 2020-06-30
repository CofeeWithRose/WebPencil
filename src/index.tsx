
import SConsole from './util/console'
new SConsole()
import React from 'react'
import ReactDom from 'react-dom'
import {App} from './app/index'
import zhCN from 'antd/es/locale/zh_CN'
import { ConfigProvider, Modal, message } from 'antd'
import { Workbox } from 'workbox-window'
import { FileApi } from './workStorage/file-system'

import 'antd/dist/antd.dark.less'

import './style.less'

FileApi.init({
	permissionTip: (callback) => {
		return new Promise<void>(resolve => {
			const handleClick = async () => {
				try {
					await callback()
				} catch (e) {
					console.error(e)
				}
				message.destroy()
				resolve()
			}
			message.info(<span onClick={handleClick}>获取文件读取权限</span>, 0)
		}) as any

	}
})

ReactDom.render(
	<ConfigProvider locale={zhCN}>
		<App/>
	</ConfigProvider>, 
	document.querySelector('#root') 
)

if('serviceWorker' in navigator && process.env.BUILD_ENV !== 'development'){
	// if('serviceWorker' in navigator){
	const regist = () => {
		console.log('try resgist')
		const workBox = new Workbox(`${process.env.PUBLIC_PATH||'./'}service-worker.js`)
		workBox.addEventListener('activated', ({isUpdate}) => {
			isUpdate && message.info(<span onPointerUp={() => window.location.reload()}>应用已更新，点击加载.</span>, 0)
		})
		workBox.register()
	}

	regist()
	document.addEventListener('visibilitychange', (e) => {
		if(document.visibilityState){
			console.log('focusin', document.visibilityState)
			regist()
		}
	})
	let deferredPrompt: any
	window.addEventListener('beforeinstallprompt', (e) => {
		// Prevent the mini-infobar from appearing on mobile
		e.preventDefault()
		// Stash the event so it can be triggered later.
		deferredPrompt = e
		const installAction = () => {
			deferredPrompt.prompt()
			deferredPrompt.userChoice.then((choiceResult: any) => {
				if (choiceResult.outcome === 'accepted') {
				  console.log('User accepted the install prompt')
				} else {
				  console.log('User dismissed the install prompt')
				}
			  })
		}
		// Update UI notify the user they can install the PWA
		message.info(<span onPointerUp={installAction}>将网站显示在桌面</span>)
	  })

}
window.addEventListener('load', () => {
	/**
	 * 禁用safari拖拽.
	 */
	document.addEventListener('touchmove', (e) => {
		e.preventDefault()
	})
	document.addEventListener('touchstart', (e) => {
		e.preventDefault()
	})
	document.addEventListener('gesturestart', function (event) {
		event.preventDefault()
	})
	document.addEventListener('pointermove', (e) => {
		e.preventDefault()
	})
})
