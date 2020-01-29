function buildWatch() {
    setInterval(() => {
        const childProcess = require('child_process')

        childProcess.exec('git pull', (_, log) => {
            console.log(`git pull : ${process.env.PWD}.\n`, log)
            if(!log.includes('Already')){
                childProcess.execSync('npm run build')
            }
        })
    }, 60 * 1000)
}
buildWatch()
