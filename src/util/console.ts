import VConcole, { VConsolePluginInstance } from 'vconsole'
export default class SConsole {
    logCache: any[][] = [] 

    constructor(){
      const vconsole = new VConcole()
      // const plugin: VConsolePluginInstance = new (VConcole.VConsolePlugin as any)('sync_confole','vsync_log')
      // plugin.on('showConsole', async () => {
      //    let logs = this.logCache.shift()
      //    while(logs){
      //        await this.outputLog(...logs)
      //        logs = this.logCache.shift()
      //    }
      // })
      // vconsole.addPlugin(plugin)
      // this.log = console.log
      // console.log = (...logs: any[]) => setTimeout(this.log, 30, ...logs)
    }

    log = (...logs:any[]) => {}

    cacheLog = (...logs:any[]) => {
        this.logCache.push(logs)
    }

    outputLog =  (...logs: any[]) => {
        return new Promise((resolve) => {
             setTimeout(() => {
                this.log(...logs)
                resolve()
             }, 30)   
        })
    }

}