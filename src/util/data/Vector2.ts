
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

    static ZERO = new Vector2()

    static normalize(v:Vector2){
        const scale = 1 / Vector2.magnitude(v)
        return new Vector2(v.x * scale, v.y * scale)
    }

    /**
     * get normalized vertical vector2.
     * @param v 
     */
    static vertical({ x, y}:Vector2){
        return new Vector2(y, -x)
    }

    static dist(v1: Vector2, v2: Vector2){
        return Math.sqrt((v1.x - v2.x)**2 + (v1.y - v2.y)**2 )
    }

    static magnitude(v: Vector2){
        return Math.sqrt(v.x**2 + v.y**2 )
    }

    static degree(center: Vector2, v1:Vector2, v2: Vector2){
        const deg1 = normalizeAtant2(Math.atan2(v1.y-center.y, v1.x - center.x))
        const deg2 = normalizeAtant2(Math.atan2(v2.y - center.y, v2.x - center.x))
        return Math.abs(deg2 - deg1)
    }

    static add(v1: Vector2, v2: Vector2){
        return new Vector2(v1.x + v2.x, v1.y + v2.y)
    }

    /**
     * rotate as clockwise.
     * @param v 
     * @param degree 
     */
    static rotate(v:Vector2, degree: number){
        const magnitude = Vector2.magnitude(v)
        const deg  = normalizeAtant2(Math.atan2(v.y, v.x)) - ((degree%360)/180 *Math.PI)
        return new Vector2(Math.cos(deg) * magnitude, Math.sin(deg) * magnitude)
    }

    static multipy({x, y}: Vector2, scale: number){
        return new Vector2(x*scale, y*scale)
    }

    static subtract(v1: Vector2, v2: Vector2){
        return new Vector2(v1.x - v2.x, v1.y - v2.y)
    }
    static move(v: Vector2, from: Vector2, to: Vector2){
        const dx = to.x - from.x
        const dy = to.y - from.y
        return new Vector2( v.x + dx, v.y + dy)
    }

    static floor({x, y}: Vector2){
        return new Vector2(Math.floor(x), Math.floor(y))
    }

}