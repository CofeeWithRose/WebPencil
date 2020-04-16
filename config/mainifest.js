const path = require('path')
module.exports = {
    start_url: '/',
    name: 'My Progressive Web App',
    short_name: 'MyPWA',
    description: 'My awesome Progressive Web App!',
    background_color: '#ffffff',
    crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
    display:'fullscreen',
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