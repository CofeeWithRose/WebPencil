import { EventEmitter } from 'events'


export default class PEventEmiter <EventData> {
  
    protected eventEmitter = new EventEmitter()

    on<T extends keyof EventData>(event: T, listener: (event: EventData[T]) => void){
    	const fun: (...p: any[]) => void = listener as any 
    	this.eventEmitter.addListener(event as string, fun )
    }

    off<T extends keyof EventData>(event: T, listener: (event: EventData[T]) => void){
    	const fun: (...p: any[]) => void = listener as any 
    	this.eventEmitter.removeListener(event as string, fun )
    }

    emit<T extends keyof EventData>(event: T, params: EventData[T]){
        setTimeout(() => {
            this.eventEmitter.emit(event as string, params)
        },1)
    }

}