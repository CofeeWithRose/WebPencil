import { Vector2 } from "./Vector2";

export class Vector3 extends Vector2 {
    constructor(x=0 , y=0, public z = 0){
        super(x,y)
    }
}