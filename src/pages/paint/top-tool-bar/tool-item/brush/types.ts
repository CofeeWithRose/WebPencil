import { PCanvasContext } from "@/pages/paint/pcanvas/pcanvas.context"

export class BrushStatus {
  constructor(

      public readonly x: number,

      public readonly y: number,

      public readonly pressure: number,

      public readonly tiltX: number,

      public readonly tiltY: number,
  ) { }

}

export enum BrushType {

  pen = 1,

  selector = 2,
}

export abstract class AbstractBrush {
  constructor(
    public readonly type: BrushType, 
    public readonly name: string
  ) {}

  init(): void {}

  destory(): void {}

  onStart(status: BrushStatus, context: PCanvasContext): void {}

  onDraw(brushStatus: BrushStatus[], contx: PCanvasContext): void{}

  onEnd(brushStatus: BrushStatus, contx: PCanvasContext): void {}
}