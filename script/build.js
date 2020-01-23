const webpack = require('webpack')
const config = require('../config/webpack.config')
function build(){
    const compiler = webpack({...config, mode: 'production'})
    compiler.run((err, stat) => {
        console.log(err)
    })
}
build()