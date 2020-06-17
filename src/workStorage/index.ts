import { WorkDetail, WorkInfo, LayerDetail } from "./work-data"
import { FileApi } from "./file-system"
import { createCanvas, createImageByFile, toBlob, copyCanvas } from "../util/canvas"
import { isNumber } from "lodash"
export type WorkDetailFile = Omit<LayerDetail, 'canvas'> & { filePath: string }

const getLayerPath = (workId: string, layerId?:string) =>  layerId? `layers/${workId}/${layerId}.png`: `layers/${workId}`

const getThumbnailPath = (workId: string) => `thumbnail/${workId}.png`

// export class WorkLayerFile {

//     public workLayersId: string

//     public workDetailFiles: WorkDetailFile[] = []

//     constructor({ workLayersId, layers }: WorkLayers) {
//         this.workLayersId = workLayersId
//         layers.forEach(({ canvas, layerId, ...rest }) => {
//             this.workDetailFiles.push({ ...rest, layerId, filePath:  getLayerPath(workLayersId, layerId)})
//         })
//     }
// }

export class WorkDetailDesFile {

    public workInfo: WorkInfo

    public layers: LayerDetail<string>[]

    constructor(workDetail: WorkDetail) {
        const { workInfo, layers } = workDetail
        const { thumbnail, workId, ...restWorkInfo } = workInfo
        this.workInfo = { workId, ...restWorkInfo, thumbnail: getThumbnailPath(workId) }
        this.layers = layers.map(({canvas, layerId, ...rest })=>({ layerId, ...rest, canvas: getLayerPath(workId, layerId) })  )
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
        await this.saveWorkInfo(desFileDate)
        const canvasFileList = this.getCanvasFileList(workedetail, desFileDate)
        for (let i = 0; i < canvasFileList.length; i++) {
            const { path, canvas } = canvasFileList[i]
            const data = await toBlob(canvas)
            if (data) {
                await FileApi.save({
                    type: 'image/png',
                    path,
                    data,
                })
            }
        }
        console.timeEnd('saveWork')
    }

    static async saveWorkInfo(desFileDate: WorkDetailDesFile){
      await FileApi.save({
          type: 'application/json',
          path: `${desFileDate.workInfo.workId}.json`,
          data: JSON.stringify(desFileDate)
      })
    }

    protected static getCanvasFileList(workedetail: WorkDetail, desFileDate: WorkDetailDesFile) {
        const {  layers  } = workedetail
        const { layers: desLayers } = desFileDate
        const thumbnail = {
            path: desFileDate.workInfo.thumbnail,
            canvas: this.combimeCanvas(100, 100, layers.map(({ canvas }) => canvas))
        }
        const canvasFileList: { path: string, canvas: HTMLCanvasElement }[] = [thumbnail]
        layers.forEach(({ canvas }, index) => {
            canvasFileList.push({
                canvas,
                path: desLayers[index].canvas
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
    static async saveLayerDetail(workId: string, layer: LayerDetail, index?: number): Promise<void> {
      const {canvas, layerId, ...rest} = layer
      const img = await toBlob(canvas)
        if(!img) return
        FileApi.save({ 
          type:'image/png',
          path: getLayerPath(workId, layerId),
          data: img,
        })
        const [file] = await FileApi.get(`${workId}.json`, {isDir: false})
        const workDetailDesFile: WorkDetailDesFile = JSON.parse( await file.text() )
        const layertDetail = workDetailDesFile.layers.find(({layerId: id}) => id === layerId)
        if(!layertDetail&& isNumber(index)){
          workDetailDesFile.layers.splice(index, 0, { canvas: getLayerPath(workId, layerId), layerId, ...rest } )
          await this.saveWorkInfo(workDetailDesFile)
        }
        if(layertDetail&&isNumber(index)){
          throw 'add layer fail: ' + layerId
        }

        // TODO update workInfo
    }

  
    static async removeWork(layerDetail: LayerDetail): Promise<void> {
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
        const { workInfo, layers }: WorkDetailDesFile = JSON.parse(text)
        const workLayers: LayerDetail[] = []
        const canvasFileMap: {[index: string]: File} = (await FileApi.get(getLayerPath(workId), { isDir: true}))
                .reduce((map, file) => ({...map, [file.name]:file}), {})
        const infoList = []
        for (let i = 0; i < layers.length; i++) {
            const { layerId, visible, name } = layers[i]
            const canvasFile = canvasFileMap[`${layerId}.png`]
            if(canvasFile){
                try{
                  const img = await createImageByFile(canvasFile)
                  const canvas = copyCanvas(img)
                  infoList.push({canvas, name, visible, layerId})
                }catch(e){
                  console.error(layerId, 'decode failed')
                }
            }else{
                console.error('no match file' + layerId)
            }
        }
        infoList.forEach( ({canvas, name, visible, layerId }, index) => {
           const layerDetail = new LayerDetail( canvas , name, visible, layerId)
           workLayers.push(layerDetail)
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