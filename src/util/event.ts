import { EventEmitter } from 'events'

export interface AbstractEventMap {
    [key: string]: (...params: any[]) => void
}

export default class PEventEmiter <EventMap> {
  
    protected eventEmitter = new EventEmitter()

    on<T extends keyof EventMap>(event: T, listener: EventMap[T]){
    	const fun: (...p: any[]) => void = listener as any 
    	this.eventEmitter.addListener(event as string, fun )
    }

    off<T extends keyof EventMap>(event: T, listener: EventMap[T]){
    	const fun: (...p: any[]) => void = listener as any 
    	this.eventEmitter.removeListener(event as string, fun )
    }

    emit<T extends keyof EventMap>(event: T, ...params: any[]){
    	this.eventEmitter.emit(event as string, ...params)
    }

}