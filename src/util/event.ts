// export interface AbsEventMap{
//   [index: string]: (...p: any[])=> void
// }
export class EventEmiter< EventMap> {

  protected listeners = new Map()

  addEventLister<T extends keyof EventMap>(type: T, fun: EventMap[T]){
  	let arr = this.listeners.get(type)
  	if(!arr){
  		arr = []
  		this,this.listeners.set(type, arr)
  	}
  	arr.push(fun)
  }
  
  removeEventLister<T extends keyof EventMap>(type: T, fun: EventMap[T]){
  	let arr = this.listeners.get(type)
  	if(arr){
  		const ind = (arr as any[]).findIndex( f => f === fun );
  		(arr as Array<(...params: any[]) => void>).splice(ind,1)
  	}
  }
  
 	emit<T extends keyof EventMap>(type: T, ...messages: any[]){
  	const listeners = <Array<(...params: any[]) => void>>this.listeners.get(type)
  	if(listeners&&listeners.length){
  		listeners.forEach(lisener => {
  			try{
  				lisener(...messages)
  			}catch(e){
  				console.log(e)
  			}
  		})
  		
  	}
  }
}