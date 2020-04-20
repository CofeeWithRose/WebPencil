import { uniqueId } from 'lodash'

/**
 * 作品的描述信息.
 */
export class WorkInfo {

    constructor(
        public name: string, 
        public width: number,
        public height: number,
        public createTime: number,
        public updateTime: number,
        public thumbnail: HTMLCanvasElement,
        public readonly workId = uniqueId(`${Date.now()}_`),
    ){}
}

/**
 * 作品的全部信息.
 */
export class WorkDetail {

    constructor(
        public workInfo: WorkInfo,
        public contens: LayerDetail[], 
    ){}
}

/**
 * 作品的图层信息.
 */
export class LayerDetail {
    
    constructor(

        public index: number,

        public visible: boolean,
    
        public canvas: HTMLCanvasElement

    ){}

}

/**
 * 对作品的持久化存储操作的中间接口.
 * 
 * 
 * 方案1：fileSystem api 进行本地存储.
 * 
 * 方案2： github api 存储于 github. 
 */
export default class WorkStorage {

    /**
     * 添加作品.
     * @param workedetail 
     */
    static async addWork(workedetail: WorkDetail): Promise<void>{
        //TODO  Implement
    }

    /**
     * 删除作品.
     * @param workId 
     */
    static async removeWork(workId: string): Promise<void> {
        //TODO  Implement
    }

    /**
     * 更新作品的描述信息.
     * @param workInfo 
     */
    static async updateWorkInfo(workInfo: WorkInfo): Promise<void>{
         //TODO  Implement
    }

    /**
     * 更新作品的内容, 此时会自动更新 WorkInfo 的 updateTime.
     */
    static async batchUpdateLayerDetail(workId: string, layerdetails:LayerDetail[]): Promise<void> {
         //TODO  Implement
    }

    /**
     * 根据作品id获取指定作品的所有信息.
     * 
     * @param workId 作品ID.
     */
    static async getWorkDetail(workId: string): Promise<WorkDetail>{
        //TODO  Implement.
        const workInfo = new WorkInfo('x1', 2048, 2048, Date.now(), Date.now(), document.createElement('canvas'));
        return new WorkDetail(workInfo, [])
    }

    /**
     * 获取作品描述信息列表.
     */
    static async getWorkList(): Promise<WorkInfo[]>{
        //TODO  Implement
        return []
     }
}