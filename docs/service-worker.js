if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return a[e]||(c=new Promise(async c=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=c}else importScripts(e),c()})),c.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},c=(c,a)=>{Promise.all(c.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(c)};self.define=(c,f,d)=>{a[c]||(a[c]=Promise.resolve().then(()=>{let a={};const b={uri:location.origin+c.slice(1)};return Promise.all(f.map(c=>{switch(c){case"exports":return a;case"module":return b;default:return e(c)}})).then(e=>{const c=d(...e);return a.default||(a.default=c),a})}))}}define("./service-worker.js",["./workbox-24aa846e"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./0-005aadad36342a6b161e.js",revision:"bc504f79c572144bd48f081466782b22"},{url:"./1-c28f554a66af396fb593.js",revision:"3d278d98cd9480c8199b86a8353fed8d"},{url:"./10-919d8721a3cd51db3513.js",revision:"743ca9c8fab55d69a8bd5739d2ed9ff3"},{url:"./11-09a48efe5712657cb57a.js",revision:"436b8e3643465b015198b139ac3141e9"},{url:"./11-4326f1e920d38908d0ce.css",revision:"5449237caf2a7c9d4f659ffee40898c5"},{url:"./12-0e0cb99694f710c723aa.js",revision:"ba6871bb9bd0370f80e6460a586cb367"},{url:"./12-e69d1002b92bababbbda.css",revision:"63991ff5f2ec1d518f83e0f5270b86c7"},{url:"./13-3343a644796b8e237ce1.css",revision:"dd4d263502cadf2ad10917c6cd863ecc"},{url:"./13-f2874cf355c1b0ca2a26.js",revision:"2ce9c82e5ee9eb3eebdbbd087c78ab9b"},{url:"./14-c6540350f0ee30177c6a.js",revision:"382b77d2a646f041885804c24406f279"},{url:"./15-2188c65ad41f22171c72.js",revision:"45e013b191e5d0a9d1f46315276a3c48"},{url:"./16-19b374e423ea232b6a0e.js",revision:"cceb797e3ae3937b21be120537232050"},{url:"./17-a62207e712ee3be9bb4d.js",revision:"f5fbcb38891a596c1491db1d2b363056"},{url:"./18-4326f1e920d38908d0ce.css",revision:"5449237caf2a7c9d4f659ffee40898c5"},{url:"./18-a7937a4a48a07e204103.js",revision:"9fc11aac0a2c68eca005c0af0619bdca"},{url:"./19-26d927cdcf05f4ce84e2.js",revision:"62b1f7fa7e8ccee91d51dee00b89cdf2"},{url:"./2-21203a74721fcb8b5c45.js",revision:"19f80069ededc5b8e5abdbff797211b5"},{url:"./20-a50d6e50aa621861a859.js",revision:"846781a93d31b0259159356a4c790691"},{url:"./21-3c0afae590ab8d332610.js",revision:"b47dd6a4d634c69e99e895d3c75d7567"},{url:"./23-3343a644796b8e237ce1.css",revision:"dd4d263502cadf2ad10917c6cd863ecc"},{url:"./23-b4d2264180d4859d24eb.js",revision:"d8888b811b19adfbaf9b5fdf59fcccc2"},{url:"./24-5562136fc928e69bb140.css",revision:"bf5a2fbe32561185e0ebaae32082f9f1"},{url:"./24-e1f113c2e6eb19b9f076.js",revision:"2dff64cc4754e36cfab01a8bf99244b9"},{url:"./25-43e8ff5735f0a3e71ecf.js",revision:"8c4e62e2bd98a0482b8c5834799e491d"},{url:"./25-6e0204eb71dd23e11e72.css",revision:"636bf56e8b4f77f3ba2d73a78333d282"},{url:"./26-83e46e0fea5b8e90b78a.js",revision:"d5bb44786dac746f5ebce07e5705b329"},{url:"./26-86d16d4b9ff83846bff2.css",revision:"864a845582f915f0e1f57f59809df93f"},{url:"./27-14f1a848a7f6afdec80f.js",revision:"7df780dd93cd717fe7d9ad6ebf0f9b0d"},{url:"./27-a45a15dd3cd07a22ed7a.css",revision:"ac80485753aecb34787285a2bc686c88"},{url:"./28-741206d5e7a336304a6b.css",revision:"76ed61afd23e7675949e5540b389ba53"},{url:"./28-c828ae163ca65ca7ad3a.js",revision:"850e80f2bbbca915486f25af22fd7910"},{url:"./29-165ace2d54cf45f48635.js",revision:"ba86c56710c38c917a93fae2b269cf56"},{url:"./29-1989b42e1b66da636a37.css",revision:"b418d6ce31e9fe556189bd9359146d98"},{url:"./3-b73512c2e4a50f383acf.css",revision:"5eae18f34d6ad7cb8f59a135ba82fd1b"},{url:"./3-f6ce76d2a43e430e096e.js",revision:"c3543df358f59d18e3b04086eb2f09df"},{url:"./30-4326f1e920d38908d0ce.css",revision:"5449237caf2a7c9d4f659ffee40898c5"},{url:"./30-fd1cb753003ad305f047.js",revision:"27cf41f4c13427f525f8e62d61e51a49"},{url:"./31-167fce283159caade3c7.js",revision:"61ec281189105b6a1c70a594aca06d0b"},{url:"./31-f10495f2a1dfa4a44e51.css",revision:"35e5ea1b54eb5395d044a09c4c0e309d"},{url:"./4-799c4b9d4c7b254f839a.js",revision:"87e859c9dfae553feecb0970941a414b"},{url:"./4-96bb556f53aa4bc123a3.css",revision:"fc14f84c2528489a39517313993243c6"},{url:"./5-0329071195aab6a26d8e.js",revision:"8c8e2a39ee6f8c1151ec9b98bdb18056"},{url:"./5-a45a15dd3cd07a22ed7a.css",revision:"ac80485753aecb34787285a2bc686c88"},{url:"./6-78f74dd66ba79d2f01eb.css",revision:"db7498a42ffc0198fa1c19cb58b63334"},{url:"./6-d6cb125230df15c089d6.js",revision:"98a15d3fc955284346449b5871bc72e7"},{url:"./7-a78002b5e1a9feb80d07.js",revision:"91158a5044713be7e473541c534caafd"},{url:"./8-f10495f2a1dfa4a44e51.css",revision:"35e5ea1b54eb5395d044a09c4c0e309d"},{url:"./8-fe6c322fb87c18bb816c.js",revision:"fbbcdc9ca1c22b10d84855aff88d69db"},{url:"./9-86d16d4b9ff83846bff2.css",revision:"864a845582f915f0e1f57f59809df93f"},{url:"./9-d68f7fedaf6a8d5b7bb7.js",revision:"a2ccc8306123059482f08413c15edf1c"},{url:"./favicon.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./icon_128x128.c5bef8e83342a07a4b3bae9df2a54dc4.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./icon_192x192.c5bef8e83342a07a4b3bae9df2a54dc4.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./icon_256x256.c5bef8e83342a07a4b3bae9df2a54dc4.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./icon_384x384.c5bef8e83342a07a4b3bae9df2a54dc4.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./icon_512x512.c5bef8e83342a07a4b3bae9df2a54dc4.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./icon_96x96.c5bef8e83342a07a4b3bae9df2a54dc4.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./index.html",revision:"8066983d372f05380c5aa3f9f88e3ba4"},{url:"./main-f114e6d9d869a4e3ab79.css",revision:"175695b1d467af830eb750066478818f"},{url:"./main-f49068bf80ee00e8db90.js",revision:"1496e2ccac61dbc91e02ba6ed51f6f80"},{url:"./manifest.webmanifest",revision:"86f488964fc4f9c382d8a7bb99e1df78"},{url:"https://cdn.bootcss.com/antd/4.1.3/antd-with-locales.min.js",revision:null},{url:"https://cdn.bootcss.com/hammer.js/2.0.8/hammer.min.js",revision:null},{url:"https://cdn.bootcss.com/react-dom/16.13.1/umd/react-dom.production.min.js",revision:null},{url:"https://cdn.bootcss.com/react-router-dom/5.1.2/react-router-dom.min.js",revision:null},{url:"https://cdn.bootcss.com/react-router/5.1.2/react-router.min.js",revision:null},{url:"https://cdn.bootcss.com/react/16.13.1/umd/react.production.min.js",revision:null},{url:"https://cdn.bootcss.com/vConsole/3.3.4/vconsole.min.js",revision:null}],{})}));
//# sourceMappingURL=service-worker.js.map
