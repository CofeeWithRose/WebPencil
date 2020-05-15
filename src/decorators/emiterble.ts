import { EventEmitter } from 'events'


export type FunctionK<K extends keyof T, T> = T[K] extends Function? T[K]: Function
/**
 * 给对象添加addListener与removeLister接口.
 */
export const emitterble = <C>() => 
 <T extends {new(...args:any[]):{}} >(constructor: T) => {
    return class Emitterble extends constructor {
        protected eventEmitterDec = new EventEmitter()

        public on<K extends keyof C>(eventName: K, listener: C[K]): void{
            this.eventEmitterDec.addListener(eventName as string, listener as any)
        }
        
        public off<K extends keyof C>(eventName: K, listener: C[K]): void {
            this.eventEmitterDec.removeListener(eventName as string, listener as any)
        }
        
    }
}

export type EmitAfterOptions = {

    shouldEmitParams?: boolean,

    paramsSource?: 'return'| 'params',
}

const defaultOptions:EmitAfterOptions = {

    shouldEmitParams: true,

    paramsSource: 'params',

}
/**
 * 函数后
 */
export const emitAfter = <T>(eventName: keyof T, options?: EmitAfterOptions) => {
    options={ ...defaultOptions, ...options }
    const {shouldEmitParams, paramsSource} = options
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
                const p = shouldEmitParams?  
                    paramsSource === 'params'? params: [res]
                        : []
                eventEmitter.emit(eventName as string, ...p)
            }catch(error){
                console.error(error)
            }
            return res
        }
    }
}