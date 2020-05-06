import { RGBA } from "../tool-item/color-selector/rgba";
import { Brush } from "../tool-item/brush";

export class PCanvasContext {
    constructor(

        /**
         * 当前选中图层的context.
         */
        public curCanvasContext2D: CanvasRenderingContext2D,

        public tempCanvasContext2D: CanvasRenderingContext2D,

        public tempCanvas: HTMLCanvasElement,

        public brush: Brush = new Brush(),

        public color: RGBA = RGBA.BLACK,

        public brushWidth: number = 10,

    ){}
}