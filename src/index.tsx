import React from 'react'
import ReactDom from 'react-dom'
import {App} from './app/index'
import './util'

ReactDom.render( <App/>, document.querySelector('#root') )

if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker.register('./service-worker.js').then(registration => {
			console.log('SW registered: ', registration)
		}).catch((registrationError:Error) => {
			console.log('SW registration failed: ', registrationError.message, registrationError.stack)
		})
	})
}