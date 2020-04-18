const getProcessEnv= () => {
    const processDefineds = {}
    for(key in process.env){
        processDefineds[key] = JSON.stringify(process.env[key])
    }
    return processDefineds
}
module.exports ={
    ...getProcessEnv()
}