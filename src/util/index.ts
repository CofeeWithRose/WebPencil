import { debounce } from 'lodash'
const div = document.createElement('div')
const p = document.createElement('p')
p.innerHTML = 'logger'
p.style.backgroundColor = '#f0f0f0'
div.appendChild(p)
div.style.position = 'fixed'
div.style.top= `${document.body.clientHeight - 30}px`
div.style.left = '0'
const showTransform =  `translate3d( 0,${30 - document.body.clientHeight}px,0 )`
// div.style.transform = showTransform
div.style.background = 'lightgray'
div.style.transitionProperty = 'transform'
div.style.transitionDuration = '0.5s'
div.style.width = '100%'
div.style.height = '100%'
div.style.opacity = '0.5'
let show = false
p.addEventListener('click', ()=> {
    show = !show
    div.style.transform = show? showTransform :''
    if(show){
        printLog()
    }
})
document.body.appendChild(div)

let tempLogs: object[][] = []
const printLog = debounce (async ()=>{
    while(1){
        const msgs = tempLogs.shift()
        if(!msgs){
            return
        }
        await new Promise(resolve => {
            setTimeout(() => {
                msgs.forEach( o => {
                    const p = document.createElement('pre')
                    if(o instanceof String){
                        p.innerHTML = o as string
                    }
                    if(o instanceof Object){
                        try{
                            p.innerHTML = JSON.stringify( o as Object )
                        }catch(e){
                            console.error(e)
                        }
                    }
                    div.appendChild(p)
                }) 
                resolve()
            },200)
        })
    }
}, 300)
// console.log = (...msgs: object[]) => {
//     tempLogs.push(msgs)
// }