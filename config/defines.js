// const getProcessEnv= () => {
//     const processDefineds = {}
//     for(key in process.env){
//         processDefineds[key] = JSON.stringify(process.env[key])
//     }
//     console.log('processDefineds:', JSON.stringify(processDefineds))
//     return processDefineds
// }

module.exports ={
    'process.env.BUILD_ENV': JSON.stringify(process.env.BUILD_ENV)
    // ...getProcessEnv()
}