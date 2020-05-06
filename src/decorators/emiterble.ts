import { EventEmitter } from 'events'


export type FunctionK<K extends keyof T, T> = T[K] extends Function? T[K]: Function
/**
 * 给对象添加addListener与removeLister接口.
 */
export const emitterble = <C>() => 
 <T extends {new(...args:any[]):{}} >(constructor: T) => {
    return class Emitterble extends constructor {
        protected eventEmitterDec = new EventEmitter()

        public addListener<K extends keyof C>(eventName: K, listener: C[K]){
            return this.eventEmitterDec.addListener(eventName as string, listener as any)
        }
        
        public removeListener<K extends keyof C>(eventName: K, listener: C[K]){
            return this.eventEmitterDec.removeListener(eventName as string, listener as any)
        }
        
    }
}

/**
 * 函数后
 */
export const emitAfter = <T>(eventName: keyof T) => {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const fun = target[propertyKey] 

        if(typeof fun !== 'function'){
            throw `the property [${propertyKey}] should be function!`
        }

        descriptor.value =  function(...params: any[]){
            const eventEmitter = this.eventEmitterDec as EventEmitter
            if(!eventEmitter){
                throw `${this} should be decorate by  emitterble!`
            }
            const res = (fun as Function).call(this, ...params)
            try{
                eventEmitter.emit(eventName as string, ...params)
            }catch(error){
                console.error(error)
            }
            return res
        }
    }
}