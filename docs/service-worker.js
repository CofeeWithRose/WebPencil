if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return a[e]||(c=new Promise(async c=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=c}else importScripts(e),c()})),c.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},c=(c,a)=>{Promise.all(c.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(c)};self.define=(c,b,d)=>{a[c]||(a[c]=Promise.resolve().then(()=>{let a={};const f={uri:location.origin+c.slice(1)};return Promise.all(b.map(c=>{switch(c){case"exports":return a;case"module":return f;default:return e(c)}})).then(e=>{const c=d(...e);return a.default||(a.default=c),a})}))}}define("./service-worker.js",["./workbox-24aa846e"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./0-b90d8fd93f9a79c927d4.js",revision:"860c784b4150a00f1beb4dc468a5eee4"},{url:"./1-211eb45695a3bc1d1ef1.css",revision:"9d0b4067460ac486ff7ae1e23c4db462"},{url:"./1-f828bbe346e66670b260.js",revision:"b45aecc9dc5c1617ee18eaebb4590898"},{url:"./10-6e0204eb71dd23e11e72.css",revision:"636bf56e8b4f77f3ba2d73a78333d282"},{url:"./10-d8c3131eef1e1bc5b8f8.js",revision:"9d4612ad143c00c44d3df090aad4e41e"},{url:"./11-4fb57734322259feee67.js",revision:"783fc5542901e0aa9492da6c1282076e"},{url:"./12-4f22c91ae2749d3dbed3.js",revision:"fea258a5ee5ad3fdd42ef8b9185d88b5"},{url:"./13-096b3e265ae22883f9ed.js",revision:"642294c0e7902930e112a8c19dc06f37"},{url:"./13-80c566022a833364bfd8.css",revision:"44dd3e63e976117dc966988492be420b"},{url:"./14-cfa5f14fa646e098fd02.js",revision:"a0b66e1de6baacb38aa3bf6332c336e2"},{url:"./15-48af1dc2ac6585d548d1.js",revision:"57a693994f7623d8c603bec794a61550"},{url:"./16-85941ec28c2eb5a0b36c.js",revision:"d9e5b5fa048ad62c663d14aa53e445e3"},{url:"./17-414705f55490ccc57d34.js",revision:"a9ef809e464cce76af38dc3550a4b350"},{url:"./19-10b081dff2870b012b9a.js",revision:"f9912e46a72c8f7b35564b957bd09fcf"},{url:"./19-8e4603fd7bca4afd37c2.css",revision:"fc70c468785a0954464f09639bde482a"},{url:"./2-257f708c83ac56bab528.js",revision:"e3c36108dbaf56338a7957e12a3a76eb"},{url:"./2-257f708c83ac56bab528.js.LICENSE.txt",revision:"81896c98bac7b5b16ab1d3790da5b937"},{url:"./20-750fed08ed98f7f4911b.css",revision:"c7657bf32241f1f22c12e18fc4bf4ae4"},{url:"./20-f66edffd1fac77a75f8b.js",revision:"beaf76f2b4e9ef1dd50403b17dbc21f1"},{url:"./21-016ff95c665137884ca1.js",revision:"56d7b5e93206cfe0b72a7caa30380b9d"},{url:"./21-6e0204eb71dd23e11e72.css",revision:"636bf56e8b4f77f3ba2d73a78333d282"},{url:"./22-0cb8f083c8ef4a3d82ce.js",revision:"fed8d8fe61356c477f9834a6c97c7c57"},{url:"./22-a4c74a4b7ab8356b277c.css",revision:"aa72cfa579cf043af804a32d80df47be"},{url:"./23-741206d5e7a336304a6b.css",revision:"76ed61afd23e7675949e5540b389ba53"},{url:"./23-ec61bbaafb7a5fad3414.js",revision:"6c6b9c3ad1dd00d51d86593c356b9f28"},{url:"./24-1989b42e1b66da636a37.css",revision:"b418d6ce31e9fe556189bd9359146d98"},{url:"./24-9460d6b8dabe4c8b6dcb.js",revision:"38277c71d372925089a7adfe97632ee1"},{url:"./25-80c566022a833364bfd8.css",revision:"44dd3e63e976117dc966988492be420b"},{url:"./25-9f69cb14d368375ca223.js",revision:"06f21b1a972aa386cf3479df550af7d6"},{url:"./26-2d00720f63afb7d8619f.js",revision:"be81d4279233be1f96324b88ce166dd5"},{url:"./26-4f1c09ebd3bada6bf094.css",revision:"a5378275e3fbde1c016c535639e275f9"},{url:"./3-0b030c7342a7c95629bf.js",revision:"f802bbc0f482dd19043319e1ec2c7bbe"},{url:"./3-4f1c09ebd3bada6bf094.css",revision:"a5378275e3fbde1c016c535639e275f9"},{url:"./4-2cd964c34e4994c8f217.js",revision:"e7112fb74f469dc40fd1a448f80ffc64"},{url:"./4-addba1419c772f1f1f9a.css",revision:"f25c0918781755c23e204aafd7a8aaa3"},{url:"./5-64ef29c6259787edcee7.js",revision:"7ff2518b435911685964d410e26054f0"},{url:"./5-a4c74a4b7ab8356b277c.css",revision:"aa72cfa579cf043af804a32d80df47be"},{url:"./6-c54a071be8b1a3a91050.js",revision:"7b63f63d69040754520cff865a617ba2"},{url:"./7-49302c51eb1fc191ef6c.css",revision:"c7922055e0359b0d08ae39b378c20990"},{url:"./7-e994528a6e92b792b591.js",revision:"0956dadf7b5eca61d3a4cc17d5449f3b"},{url:"./8-80c566022a833364bfd8.css",revision:"44dd3e63e976117dc966988492be420b"},{url:"./8-ce584c13966fc884b953.js",revision:"29ae8ab6ffad9b4712585d23db760ad7"},{url:"./9-02178de5ff41b09c02b7.js",revision:"04c4164b1c1acbb080fc79f57b2844dc"},{url:"./9-8e4603fd7bca4afd37c2.css",revision:"fc70c468785a0954464f09639bde482a"},{url:"./favicon.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./icon_128x128.c5bef8e83342a07a4b3bae9df2a54dc4.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./icon_192x192.c5bef8e83342a07a4b3bae9df2a54dc4.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./icon_256x256.c5bef8e83342a07a4b3bae9df2a54dc4.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./icon_384x384.c5bef8e83342a07a4b3bae9df2a54dc4.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./icon_512x512.c5bef8e83342a07a4b3bae9df2a54dc4.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./icon_96x96.c5bef8e83342a07a4b3bae9df2a54dc4.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./index.html",revision:"e4b614ed81091b5512155512cf7ca3d5"},{url:"./main-52cd48676e5e985e7b84.css",revision:"76198687f4706d43c7efd2218a25b96e"},{url:"./main-840f9947118a0b5f7fe6.js",revision:"20082d0cdc32e69f452cda616a984105"},{url:"./manifest.webmanifest",revision:"484da6097f62659da025858e49ccd715"},{url:"https://cdn.bootcss.com/antd/4.1.3/antd-with-locales.min.js",revision:null},{url:"https://cdn.bootcss.com/hammer.js/2.0.8/hammer.min.js",revision:null},{url:"https://cdn.bootcss.com/react-dom/16.13.1/umd/react-dom.production.min.js",revision:null},{url:"https://cdn.bootcss.com/react-router-dom/5.1.2/react-router-dom.min.js",revision:null},{url:"https://cdn.bootcss.com/react-router/5.1.2/react-router.min.js",revision:null},{url:"https://cdn.bootcss.com/react/16.13.1/umd/react.production.min.js",revision:null},{url:"https://cdn.bootcss.com/vConsole/3.3.4/vconsole.min.js",revision:null}],{})}));
