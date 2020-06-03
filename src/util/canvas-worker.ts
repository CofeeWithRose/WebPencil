const ctx: Worker = self as any;

const handles = {
    file2Image: ({canvasFile, postId}: {canvasFile: File,  postId: string}) =>  {
        const img = new Image()
            img.onload = () => {
                img.onload = null
                ctx.postMessage({postId, img})
            }
            img.src = URL.createObjectURL(canvasFile)
       }
}

ctx.addEventListener("message", ({data}) => {
    const {method, params} = data
    const fun = handles[method]
    if(fun){
        fun(...params)
    }
});


