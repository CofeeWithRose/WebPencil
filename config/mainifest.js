const path = require('path')
const theme = require('./theme')
module.exports = {
    filename: "manifest.webmanifest",
    start_url: './#/home',
    name: 'draw in everywhere',
    short_name: 'HappyDrawer',
    description: 'Pick up your pencil anywhere at any time to be a happy drawer!',
    background_color:theme['primary-color'],
    crossorigin: 'use-credentials', 
    display:'fullscreen',
    orientation: 'landscape-primary',
    icons: [
      {
        src: path.resolve('src/assets/favicon.ico'),
        sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
      },
    ]
}