if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return a[e]||(c=new Promise(async c=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=c}else importScripts(e),c()})),c.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},c=(c,a)=>{Promise.all(c.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(c)};self.define=(c,d,f)=>{a[c]||(a[c]=Promise.resolve().then(()=>{let a={};const b={uri:location.origin+c.slice(1)};return Promise.all(d.map(c=>{switch(c){case"exports":return a;case"module":return b;default:return e(c)}})).then(e=>{const c=f(...e);return a.default||(a.default=c),a})}))}}define("./service-worker.js",["./workbox-24aa846e"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./0-15512d26d4b42471ca31.js",revision:"eb81e539eb924ffed47e968b0b05ef8c"},{url:"./1-37fa05d31d4370a73b37.js",revision:"2ca78634b9fb1f30aaf6d78167d74223"},{url:"./1-37fa05d31d4370a73b37.js.LICENSE.txt",revision:"81896c98bac7b5b16ab1d3790da5b937"},{url:"./10-c1c34f856d2eef7c1bad.css",revision:"ddb774a3b57f73bbf2703a282d697ba8"},{url:"./10-ce6a7b3b517172308c44.js",revision:"447d0aeda282015dba77fca2e60c4a3c"},{url:"./11-16966d810b7d8c885de8.js",revision:"47285d1a4e18a441ef9dedfb70f0f2dd"},{url:"./12-6b52fde3086f9cb049da.js",revision:"ad35819c5a9fffd1f01cdb7aeb2f4fca"},{url:"./13-59d4d04af67c1cf005f1.js",revision:"66708d053a298072b057926f22ff4452"},{url:"./14-d294dac30d5e53846934.js",revision:"c15807598ae892a88a51ac7a98d7621d"},{url:"./16-7412b2f406a757cc4f55.js",revision:"f12700095b60a70d35699f5b81b1d8da"},{url:"./16-8e4603fd7bca4afd37c2.css",revision:"fc70c468785a0954464f09639bde482a"},{url:"./17-750fed08ed98f7f4911b.css",revision:"c7657bf32241f1f22c12e18fc4bf4ae4"},{url:"./17-b4f0e980f68fbd7b4d3f.js",revision:"50198b39eb5e09c08b435c7ea04d51e0"},{url:"./18-b3ec33f5cf3d5cad70c1.js",revision:"8bbd8c0f3e304cda6a17ad2fc4487021"},{url:"./18-c0c9978e913dc50daef3.css",revision:"dcd7237bba800e664fe14642f1f94df7"},{url:"./19-59954c17175186f85a3a.js",revision:"37ada875050096cdc044e9650ba2d65b"},{url:"./19-741206d5e7a336304a6b.css",revision:"76ed61afd23e7675949e5540b389ba53"},{url:"./2-39efe848f0ef6d0a5222.js",revision:"6c87ff3f1de1d17e273ca5b6e9b20661"},{url:"./2-aee63ad62f01d7a17da0.css",revision:"f0ffaa55e1e439fb0788d81ee73231dd"},{url:"./20-c1c34f856d2eef7c1bad.css",revision:"ddb774a3b57f73bbf2703a282d697ba8"},{url:"./20-eae9fb6b48455953d51b.js",revision:"a0b429c6ee6904cb68c6db7f83c80faa"},{url:"./21-1989b42e1b66da636a37.css",revision:"b418d6ce31e9fe556189bd9359146d98"},{url:"./21-25c9c73b93119d2ab057.js",revision:"0ba5f0718a5bde86ec77cd7d46bc533c"},{url:"./3-6636468ee31cd291f027.js",revision:"339d97380cac530bdea54772bfbd8545"},{url:"./3-b5c3035d3129fd3bc782.css",revision:"8b02dc40cc6f27ba7cc1825d3872aa29"},{url:"./4-b38be8386fa61b18f159.css",revision:"24ca9cd1ec487ab23a705d6d1cf81797"},{url:"./4-c134bfa562fcdcbacaff.js",revision:"1f1e12036684ac9438aec13ebf6edcea"},{url:"./5-a2d7e03b59b344e17204.js",revision:"3ea3dc885b3b15109f6080c861278d82"},{url:"./5-c0c9978e913dc50daef3.css",revision:"dcd7237bba800e664fe14642f1f94df7"},{url:"./6-56999659a46dec28a79a.js",revision:"faecdfdc239ce48fe43ddd69bd880b27"},{url:"./6-c1c34f856d2eef7c1bad.css",revision:"ddb774a3b57f73bbf2703a282d697ba8"},{url:"./7-8e4603fd7bca4afd37c2.css",revision:"fc70c468785a0954464f09639bde482a"},{url:"./7-f654f7e44502f78a1e95.js",revision:"26ffbf8d1d76a6140709fb46ac19908e"},{url:"./8-91a6f04eebb6aee2f20f.js",revision:"a75783eb311f520c33985b654c60313d"},{url:"./9-3a66596785588c7af670.js",revision:"312552e242d71feecfdd6adb893c7f83"},{url:"./favicon.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./icon_128x128.c5bef8e83342a07a4b3bae9df2a54dc4.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./icon_192x192.c5bef8e83342a07a4b3bae9df2a54dc4.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./icon_256x256.c5bef8e83342a07a4b3bae9df2a54dc4.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./icon_384x384.c5bef8e83342a07a4b3bae9df2a54dc4.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./icon_512x512.c5bef8e83342a07a4b3bae9df2a54dc4.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./icon_96x96.c5bef8e83342a07a4b3bae9df2a54dc4.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./index.html",revision:"0870fe2321ea8791526c6405143bdc56"},{url:"./main-3feb75a67c7711e4ce8d.js",revision:"49a62897bc59b74e95ded15c22cde6ff"},{url:"./main-ab17465cf01ce7ddf93a.css",revision:"3a6c25ecc6c8e368801523be4477f802"},{url:"./manifest.f95dda5faea47c3776d1e1b87f30191c.json",revision:"f95dda5faea47c3776d1e1b87f30191c"},{url:"https://cdn.bootcss.com/antd/4.1.3/antd-with-locales.min.js",revision:null},{url:"https://cdn.bootcss.com/hammer.js/2.0.8/hammer.min.js",revision:null},{url:"https://cdn.bootcss.com/react-dom/16.13.1/umd/react-dom.production.min.js",revision:null},{url:"https://cdn.bootcss.com/react-router-dom/5.1.2/react-router-dom.min.js",revision:null},{url:"https://cdn.bootcss.com/react-router/5.1.2/react-router.min.js",revision:null},{url:"https://cdn.bootcss.com/react/16.13.1/umd/react.production.min.js",revision:null},{url:"https://cdn.bootcss.com/vConsole/3.3.4/vconsole.min.js",revision:null}],{})}));
