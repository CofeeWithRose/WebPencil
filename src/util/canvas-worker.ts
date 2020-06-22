const ctx: Worker = self as any;

const handles = {
    file2Image: ({canvasFile, postId}: {canvasFile: ArrayBuffer,  postId: string}) =>  {
          const unit8 =  new Uint8Array(4 * 2048 *2048 )
          unit8.fill(255,0)
          const data = unit8.buffer
          ctx.postMessage({postId, width:2048, height: 2048, data},[data])
       }
}

ctx.addEventListener("message", ({data}) => {
    const {method, params} = data
    console.log('method: ', method)
    const fun = (handles as any)[method]
    if(fun){
        fun(params)
    }
});


