const path = require('path')
const theme = require('./theme')
module.exports = {
    start_url: './',
    name: 'draw in everywhere',
    short_name: 'HappyDrawer',
    description: 'Pick up your pencil anywhere at any time to be a happy drawer!',
    background_color:theme['primary-color'],
    crossorigin: 'use-credentials', 
    display:'fullscreen',
    orientation: 'landscape-primary',
    icons: [
      {
        src: path.resolve('src/assets/icon.png'),
        sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
      },
      // {
      //   src: path.resolve('src/assets/large-icon.png'),
      //   size: '1024x1024' // you can also use the specifications pattern
      // },
      // {
      //   src: path.resolve('src/assets/maskable-icon.png'),
      //   size: '1024x1024',
      //   purpose: 'maskable'
      // }
    ]
}