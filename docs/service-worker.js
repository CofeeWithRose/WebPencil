if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return a[e]||(c=new Promise(async c=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=c}else importScripts(e),c()})),c.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},c=(c,a)=>{Promise.all(c.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(c)};self.define=(c,d,f)=>{a[c]||(a[c]=Promise.resolve().then(()=>{let a={};const s={uri:location.origin+c.slice(1)};return Promise.all(d.map(c=>{switch(c){case"exports":return a;case"module":return s;default:return e(c)}})).then(e=>{const c=f(...e);return a.default||(a.default=c),a})}))}}define("./service-worker.js",["./workbox-24aa846e"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute(["https://cdn.bootcss.com/vConsole/3.3.4/vconsole.min.js","https://cdn.bootcss.com/hammer.js/2.0.8/hammer.min.js","https://cdn.bootcss.com/react/16.13.1/umd/react.production.min.js","https://cdn.bootcss.com/react-dom/16.13.1/umd/react-dom.production.min.js","https://cdn.bootcss.com/antd/4.1.3/antd-with-locales.min.js",{url:"./0-ff9b2320ad1d617fd9d3.js",revision:"6cf7195b15abc375c05ad4673b1b5e20"},{url:"./0-ff9b2320ad1d617fd9d3.js.LICENSE.txt",revision:"81896c98bac7b5b16ab1d3790da5b937"},{url:"./1-6f48c6d7f3826d1841ae.js",revision:"321715489ddabcd4b68d6fd53b3f67bd"},{url:"./10-1a66ada2717c6ac894c6.css",revision:"0fad24c661a4054b21405191f8b8f804"},{url:"./10-453d420ca2ea4893706b.js",revision:"ce97b434dd606be3adc1b941d42f4b8d"},{url:"./2-272b16897f458775c439.js",revision:"1612d65e9b9a40a09f7229190c10c4e7"},{url:"./2-f742a71d4786fbe6e2fe.css",revision:"24ca9cd1ec487ab23a705d6d1cf81797"},{url:"./3-71cee2998cef3e640c68.js",revision:"e697d374d651acd24ea14611318ea24a"},{url:"./3-cc1e540af13116a31bc6.css",revision:"f35541e340e98048a01ff4b2ad257b5b"},{url:"./4-8e4603fd7bca4afd37c2.css",revision:"fc70c468785a0954464f09639bde482a"},{url:"./4-df1a0115a00897f12760.js",revision:"6eceff4ac94127c2464d527aa3441208"},{url:"./5-1a66ada2717c6ac894c6.css",revision:"0fad24c661a4054b21405191f8b8f804"},{url:"./5-4d116a94631c00eda792.js",revision:"3c73b6de239b23a1620b09a5ac07c2a6"},{url:"./6-dd9cad190cc50b0eb114.js",revision:"5fd9f65a7c2c3aba3111058394ee3c76"},{url:"./8-7596fd63054139ea05b7.js",revision:"80b30e095130e97d4b5a723d5dc83506"},{url:"./8-8e4603fd7bca4afd37c2.css",revision:"fc70c468785a0954464f09639bde482a"},{url:"./9-750fed08ed98f7f4911b.css",revision:"c7657bf32241f1f22c12e18fc4bf4ae4"},{url:"./9-ee216cbc440ca74ecf41.js",revision:"b544cd234c67a615a3df5db5348178a3"},{url:"./favicon.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./icon_128x128.c5bef8e83342a07a4b3bae9df2a54dc4.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./icon_192x192.c5bef8e83342a07a4b3bae9df2a54dc4.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./icon_256x256.c5bef8e83342a07a4b3bae9df2a54dc4.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./icon_384x384.c5bef8e83342a07a4b3bae9df2a54dc4.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./icon_512x512.c5bef8e83342a07a4b3bae9df2a54dc4.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./icon_96x96.c5bef8e83342a07a4b3bae9df2a54dc4.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./index.html",revision:"771a06e83eee0e18f10bf7797f26d45f"},{url:"./main-22a7df47d80ade2f0794.js",revision:"fc1c6d493193315d201876ceab2d40d5"},{url:"./main-22a7df47d80ade2f0794.js.LICENSE.txt",revision:"153c199157247fdeb311b54e338493ac"},{url:"./main-8f0db14dfa14aba1e86f.css",revision:"f43f93e4621c2d85202ce143fe2513d9"},{url:"./manifest.f95dda5faea47c3776d1e1b87f30191c.json",revision:"f95dda5faea47c3776d1e1b87f30191c"}],{})}));
