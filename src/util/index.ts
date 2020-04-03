import { debounce } from 'lodash'
const logWrap = document.createElement('div')
const tittle = document.createElement('p')
tittle.innerHTML = 'logger'
tittle.style.backgroundColor = '#f0f0f0'
logWrap.appendChild(tittle)
logWrap.style.position = 'fixed'
logWrap.style.top= `${document.body.clientHeight - 30}px`
logWrap.style.left = '0'
logWrap.style.height = '100vh'
logWrap.style.overflow = 'auto'
logWrap.style.padding='10px'
const showTransform =  `translate3d( 0,${30 - document.body.clientHeight}px,0 )`
logWrap.style.background = 'black'
logWrap.style.transitionProperty = 'transform'
logWrap.style.transitionDuration = '0.5s'
logWrap.style.width = '100%'
logWrap.style.height = '100%'
logWrap.style.opacity = '0.5'
let show = false
tittle.addEventListener('click', ()=> {
	show = !show
	logWrap.style.transform = show? showTransform :''
	if(show){
		printLog()
	}
})
document.body.appendChild(logWrap)

let tempLogs: object[][] = []
const printLog = debounce (async ()=>{
	tittle.innerHTML = '....'
	while(true){
		const msgs = tempLogs.shift()
		if(!msgs){
			break
		}
		await new Promise(resolve => {
			setTimeout(() => {
				msgs.forEach( msg => {
					const p = document.createElement('pre')
					p.style.margin = '0'
					if(typeof msg === 'string'||typeof msg === 'number'){
						p.innerHTML = msg as string
					}
					
					if(msg instanceof Object){
						try{
							p.innerHTML = JSON.stringify( msg as Object)
						}catch(e){
							console.error(e)
						}
					}
					logWrap.appendChild(p)
				}) 

				resolve()
			},50)
		})
	}
	tittle.innerHTML = 'logger'
}, 300)
const log = console.log
console.log = (...msgs: object[]) => {
	tempLogs.push(msgs)
	log(msgs)
}