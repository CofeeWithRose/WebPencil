// const getProcessEnv= () => {
//     const processDefineds = {}
//     for(key in process.env){
//         processDefineds[key] = JSON.stringify(process.env[key])
//     }
//     console.log('processDefineds:', JSON.stringify(processDefineds))
//     return processDefineds
// }

module.exports ={

    'process.env.BUILD_ENV': JSON.stringify(process.env.BUILD_ENV),
    
    'process.env.PUBLIC_PATH': JSON.stringify(process.env.PUBLIC_PATH),

    'process.env.VERSION': JSON.stringify(new Date().toLocaleString()),
    // ...getProcessEnv()
}