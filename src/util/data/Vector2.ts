
/**
 * The result of Math.atan2 is range from -Math.PI to Math.PI, 
 * the function is used to transform the result to range from 0 to 2*Math*PI.
 * 
 * @param atan2 The result of Math.atan2.
 * 
 * @returns degree range from 0 to 2*Math*PI. 
 */
const normalizeAtant2 = (atan2: number) => atan2<0? Math.PI *2 + atan2 : atan2

export class Vector2 {

    constructor(
        public readonly x = 0,

        public readonly y = 0,
    ){}

    static dist(v1: Vector2, v2: Vector2){
        return Math.sqrt((v1.x - v2.x)**2 + (v1.y - v2.y)**2 )
    }

    static degree(center: Vector2, v1:Vector2, v2: Vector2){
        const deg1 = normalizeAtant2(Math.atan2(v1.y-center.y, v1.x - center.x))
        const deg2 = normalizeAtant2(Math.atan2(v2.y - center.y, v2.x - center.x))
        return Math.abs(deg2 - deg1)
    }

    static move(v: Vector2, from: Vector2, to: Vector2){
        const dx = to.x - from.x
        const dy = to.y - from.y
        return new Vector2( v.x + dx, v.y + dy)
    }
}