if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return a[e]||(c=new Promise(async c=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=c}else importScripts(e),c()})),c.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},c=(c,a)=>{Promise.all(c.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(c)};self.define=(c,f,d)=>{a[c]||(a[c]=Promise.resolve().then(()=>{let a={};const b={uri:location.origin+c.slice(1)};return Promise.all(f.map(c=>{switch(c){case"exports":return a;case"module":return b;default:return e(c)}})).then(e=>{const c=d(...e);return a.default||(a.default=c),a})}))}}define("./service-worker.js",["./workbox-24aa846e"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./0-8816cd52d519dedb5b30.js",revision:"8d68ec6f312107f9ce6fb900f4392309"},{url:"./1-e1f7f814613a78bcf3f0.js",revision:"48bcd6a7dbdc30943f8d727d0a4a3d11"},{url:"./10-4326f1e920d38908d0ce.css",revision:"5449237caf2a7c9d4f659ffee40898c5"},{url:"./10-78d57032cdffe80efc08.js",revision:"93717e6898bafd353de8a21e1b32771a"},{url:"./11-b59e57be43c38b1664ae.css",revision:"63991ff5f2ec1d518f83e0f5270b86c7"},{url:"./11-dcb86ad1e9d6f86b7a88.js",revision:"b88892c7aaa425f7e7a890ca30051db1"},{url:"./12-3343a644796b8e237ce1.css",revision:"dd4d263502cadf2ad10917c6cd863ecc"},{url:"./12-f294fd00f9966213cfc1.js",revision:"991e920db8173caf6ab093401936e2bc"},{url:"./13-4d7e4fc2fec3d6e0e5e3.js",revision:"53f9439ec3c34372a85f3ab4edb2aff4"},{url:"./14-b98a01212f8def338a79.js",revision:"c3cb37fbef1e01bd54864df1f613d72e"},{url:"./15-3332d04ce2c808d3f107.js",revision:"1d13850a7add6fcfc6db649589dfcb98"},{url:"./15-4326f1e920d38908d0ce.css",revision:"5449237caf2a7c9d4f659ffee40898c5"},{url:"./16-7fa0ea8f59474eaee765.js",revision:"b922d08549318d6c24768fa083c4a16e"},{url:"./17-c1e1c389e6a9fec4fb91.js",revision:"02160cd5bd34ef2bebeeb1af201e6d43"},{url:"./18-0ea904b40466919e24bf.js",revision:"ca9d683ae2cfac8dc3ca1786a6d02201"},{url:"./19-6ac06ba813200fb7b671.js",revision:"2dfce0f5432b2fb99131b784d92bf533"},{url:"./2-28b39da6a2b3dd925bc9.js",revision:"5fb64097ce9260663cc11a1a5cf23287"},{url:"./20-9f1c8d94e9054a2d4585.js",revision:"46feac3e65d448dc55df8a099f11ac0f"},{url:"./22-3343a644796b8e237ce1.css",revision:"dd4d263502cadf2ad10917c6cd863ecc"},{url:"./22-f4c42c6cbf561bd38a10.js",revision:"06394397d6948b0a91b98507f0d360b8"},{url:"./23-5562136fc928e69bb140.css",revision:"bf5a2fbe32561185e0ebaae32082f9f1"},{url:"./23-def10d7ed6f423f3cef8.js",revision:"732a19867d38381c37aadbc654080d95"},{url:"./24-62869972592d62e7f37f.js",revision:"a2970214056511ecf1efa5880dc32c39"},{url:"./24-6e0204eb71dd23e11e72.css",revision:"636bf56e8b4f77f3ba2d73a78333d282"},{url:"./25-5ead368c27875c0876a5.js",revision:"5224b25009b90bc1e0f46c0b34e2660a"},{url:"./25-86d16d4b9ff83846bff2.css",revision:"864a845582f915f0e1f57f59809df93f"},{url:"./26-a45a15dd3cd07a22ed7a.css",revision:"ac80485753aecb34787285a2bc686c88"},{url:"./26-b1deea757c43c3448170.js",revision:"dc2c45a5a165b2099f629813276d7276"},{url:"./27-722ae764073fdf67196c.js",revision:"de4e32c4fb593c3f917f5b1a9a251f31"},{url:"./27-741206d5e7a336304a6b.css",revision:"76ed61afd23e7675949e5540b389ba53"},{url:"./28-1989b42e1b66da636a37.css",revision:"b418d6ce31e9fe556189bd9359146d98"},{url:"./28-8c0cb6a8a452f8687074.js",revision:"f912182cf7268d96e80e84954d84ac3c"},{url:"./29-4326f1e920d38908d0ce.css",revision:"5449237caf2a7c9d4f659ffee40898c5"},{url:"./29-8045951f1a5701ed80d2.js",revision:"15a0c7a609bd75fafab9110cf02f6e7f"},{url:"./3-b085fc8c5e9d05c5da67.js",revision:"ce4a6124226a7e582b6cbb7afad51061"},{url:"./3-b73512c2e4a50f383acf.css",revision:"5eae18f34d6ad7cb8f59a135ba82fd1b"},{url:"./30-487d09e9bc9ffa90293d.js",revision:"6fefa92acfa565fd47b84707bac26c07"},{url:"./30-f10495f2a1dfa4a44e51.css",revision:"35e5ea1b54eb5395d044a09c4c0e309d"},{url:"./4-96bb556f53aa4bc123a3.css",revision:"fc14f84c2528489a39517313993243c6"},{url:"./4-fe1a2e20c35e509c6928.js",revision:"539f6bd917f3c8f0b8200bdb4c6059ab"},{url:"./5-0c0ab5211360c1fb2c91.js",revision:"166c2a6ebbe56b5102c0c335b44efc9b"},{url:"./5-a45a15dd3cd07a22ed7a.css",revision:"ac80485753aecb34787285a2bc686c88"},{url:"./6-78f74dd66ba79d2f01eb.css",revision:"db7498a42ffc0198fa1c19cb58b63334"},{url:"./6-e1763b914e8dd058528d.js",revision:"dfb9b4e9706fe1f101a0eafd1e9b82fc"},{url:"./7-3ae6aac93394894ff1a9.js",revision:"2beac4a3d68f5c89eca94bf3b8b861fd"},{url:"./8-95d3d32be6b4b614d918.js",revision:"8ebd13ceb7d223587154e73d5a03b50e"},{url:"./8-f10495f2a1dfa4a44e51.css",revision:"35e5ea1b54eb5395d044a09c4c0e309d"},{url:"./9-86d16d4b9ff83846bff2.css",revision:"864a845582f915f0e1f57f59809df93f"},{url:"./9-d8b632fd34ae0cebf56d.js",revision:"c5ec44ab85bd2f763bc9e2b9735c1893"},{url:"./favicon.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./icon_128x128.c5bef8e83342a07a4b3bae9df2a54dc4.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./icon_192x192.c5bef8e83342a07a4b3bae9df2a54dc4.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./icon_256x256.c5bef8e83342a07a4b3bae9df2a54dc4.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./icon_384x384.c5bef8e83342a07a4b3bae9df2a54dc4.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./icon_512x512.c5bef8e83342a07a4b3bae9df2a54dc4.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./icon_96x96.c5bef8e83342a07a4b3bae9df2a54dc4.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./index.html",revision:"0620cf39aa8951cea5c2508332704b09"},{url:"./main-d62d9105878b98a3dd2e.js",revision:"5daf862d5965e106870fb6900a1d6c1b"},{url:"./main-f114e6d9d869a4e3ab79.css",revision:"175695b1d467af830eb750066478818f"},{url:"./manifest.webmanifest",revision:"86f488964fc4f9c382d8a7bb99e1df78"},{url:"https://cdn.bootcss.com/antd/4.1.3/antd-with-locales.min.js",revision:null},{url:"https://cdn.bootcss.com/hammer.js/2.0.8/hammer.min.js",revision:null},{url:"https://cdn.bootcss.com/react-dom/16.13.1/umd/react-dom.production.min.js",revision:null},{url:"https://cdn.bootcss.com/react-router-dom/5.1.2/react-router-dom.min.js",revision:null},{url:"https://cdn.bootcss.com/react-router/5.1.2/react-router.min.js",revision:null},{url:"https://cdn.bootcss.com/react/16.13.1/umd/react.production.min.js",revision:null},{url:"https://cdn.bootcss.com/vConsole/3.3.4/vconsole.min.js",revision:null}],{})}));
//# sourceMappingURL=service-worker.js.map
