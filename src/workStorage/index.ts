import { WorkDetail, WorkInfo, LayerDetail, WorkLayers } from "./work-data"
import { FileApi } from "./file-system"
import { createCanvas, copyCanvas, createCanvasByFile, toBlob } from "../util/canvas"
export type WorkDetailFile = Omit<LayerDetail, 'canvas'> & { filePath: string }
export class WorkLayerFile {

    public workLayersId: string

    public workDetailFiles: WorkDetailFile[] = []

    constructor({ workLayersId, layers }: WorkLayers) {
        this.workLayersId = workLayersId
        layers.forEach(({ canvas, layerId, ...rest }) => {
            this.workDetailFiles.push({ ...rest, layerId, filePath: `layers/${workLayersId}/${layerId}.png` })
        })
    }

}

export class WorkDetailDesFile {

    public workInfo: WorkInfo

    public content: WorkLayerFile

    constructor(workedetail: WorkDetail) {
        const { workInfo, contens } = workedetail
        const { thumbnail, ...restWorkInfo } = workInfo
        this.workInfo = { ...restWorkInfo, thumbnail: `thumbnail/${workedetail.workInfo.workId}.png` }
        this.content = new WorkLayerFile(contens)
    }
}


/**
 * 对作品的持久化存储操作的中间接口.
 * des: workinfo:
 *      content:  
 */
export default class WorkStorage {

    /**
     * 添加作品.
     * @param workedetail 
     */
    static async saveWork(workedetail: WorkDetail): Promise<void> {
        if(!workedetail) return
        console.time('saveWork')
        const desFileDate = new WorkDetailDesFile(workedetail)
        await FileApi.save({
            type: 'text',
            path: `${workedetail.workInfo.workId}.json`,
            data: JSON.stringify(desFileDate)
        })
        const canvasFileList = this.getCanvasFileList(workedetail, desFileDate)
        for (let i = 0; i < canvasFileList.length; i++) {
            const { path, canvas } = canvasFileList[i]
            const data = await toBlob(canvas)
            if (data) {
                await FileApi.save({
                    type: 'blob',
                    path,
                    data,
                })
            }
        }
        console.timeEnd('saveWork')
    }

    protected static getCanvasFileList(workedetail: WorkDetail, desFileDate: WorkDetailDesFile) {
        const { contens: { layers } } = workedetail
        const { content: { workDetailFiles } } = desFileDate
        const thumbnail = {
            path: desFileDate.workInfo.thumbnail,
            canvas: this.combimeCanvas(100, 100, workedetail.contens.layers.map(({ canvas }) => canvas))
        }
        const canvasFileList: { path: string, canvas: HTMLCanvasElement }[] = [thumbnail]
        layers.forEach(({ canvas }, index) => {
            canvasFileList.push({
                canvas,
                path: workDetailFiles[index].filePath
            })
        })
        return canvasFileList
    }

  

    protected static combimeCanvas(width: number, height: number, canvasList: HTMLCanvasElement[]) {
        const canvas = createCanvas(width, height)
        const ctx = canvas.getContext('2d')
        if (ctx) {
            for(let i = canvasList.length-1; i> -1; i--){
                const canvas = canvasList[i]
                ctx.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, width, height)
            }
        }
        return canvas
    }

    /**
     * 删除作品.
     * @param workId 
     */
    static async removeWork(workId: string): Promise<void> {
        //TODO  Implement.
    }

    /**
     * 更新作品的描述信息.
     * @param workInfo 
     */
    static async updateWorkInfo(workInfo: WorkInfo): Promise<void> {
        //TODO  Implement.
    }

    /**
     * 更新作品的内容, 此时会自动更新 WorkInfo 的 updateTime.
     */
    static async updateLayerDetail(workId: string, layerdetails: LayerDetail[]): Promise<void> {
        //TODO  Implement.

    }

    /**
     * 根据作品id获取指定作品的所有信息.
     * 
     * @param workId 作品ID.
     */
    static async getWorkDetail(workId: string): Promise<WorkDetail> {
        console.time('getWorkDetail')
        const [file] = await FileApi.get(`${workId}.json`,{isDir: false})
        const text = await file.text()
        const { workInfo, content: { workLayersId, workDetailFiles } }: WorkDetailDesFile = JSON.parse(text)
        const workLayers: WorkLayers = new WorkLayers(workLayersId)
        const canvasFileMap: {[index: string]: File} = (await FileApi.get(`layers/${workLayersId}`, { isDir: true}))
                .reduce((map, file) => ({...map, [file.name]:file}), {})
        const infoList = []
        for (let i = 0; i < workDetailFiles.length; i++) {
            const { layerId, visible, name } = workDetailFiles[i]
            const canvasFile = canvasFileMap[`${layerId}.png`]
            if(canvasFile){
                const canvasPromise = createCanvasByFile(canvasFile)
                infoList.push({canvasPromise, name, visible, layerId})
                
            }else{
                console.error('no match file' + layerId)
            }
        }
        const canvasList = await Promise.all( infoList.map(({canvasPromise}) => canvasPromise) )
        infoList.forEach( ({canvasPromise, name, visible, layerId }, index) => {
           const layerDetail = new  LayerDetail( canvasList[index] , name, visible, layerId)
           workLayers.layers.push(layerDetail)
        })
        console.timeEnd('getWorkDetail')
        return new WorkDetail(workInfo, workLayers)
    }

    /**
     * 获取作品描述信息列表.
     */
    static async getWorkList(): Promise<WorkInfo[]> {
        console.time('getWorkList')
        let workInfoList: WorkInfo[];
        const [textFileList, imgFileList] =await Promise.all([FileApi.get('', {isDir: true}), FileApi.get('thumbnail', {isDir:true})])
        const textList = await Promise.all( textFileList.map( textFile =>textFile.text() ) )
        workInfoList =  textList.map( text => {
            const { workInfo: { thumbnail, workId,...rest } }: WorkDetailDesFile = JSON.parse(text)
           return {
                ...rest,
                workId,
                thumbnail: URL.createObjectURL(imgFileList.find( ({name}) => name === `${workId}.png` ))
            }
        } )
        console.timeEnd('getWorkList')
        return workInfoList
    }

}

export {
    WorkInfo,
    WorkDetail,
    LayerDetail
}