(window.webpackJsonp=window.webpackJsonp||[]).push([[19,14,23,24],{21:function(t,n,s){"use strict";s.r(n),s.d(n,"RGBA",(function(){return i}));class i{static Lerp(t,n,s){const r=[],e=(n.r-t.r)/s,a=(n.g-t.g)/s,h=(n.b-t.b)/s,o=(n.a-t.a)/s;for(let n=0;n<s;n++)r.push(new i(t.r+e*n,t.g+a*n,t.b+h*n,t.a+o*n));return r}static mutipy({r:t,g:n,b:s},r){return new i(t*r,n*r,s*r)}static add({r:t,g:n,b:s},r){return new i(t+r.r,n+r.g,s+r.b)}static mix(t,n,s){return new i(t.r+(n.r-t.r)*s,t.g+(n.g-t.g)*s,t.b+(n.b-t.b)*s)}static getLerpColor(t,n,s){const{r:r,g:e,b:a,a:h}=t;return new i((n.r-r)*s+r,(n.g-e)*s+e,(n.b-a)*s+a,(n.a-h)*s+h)}constructor(t,n,s,i=1){this.r=t,this.g=n,this.b=s,this.a=i}toRGBAString(){return`rgba(${this.r},${this.g},${this.b},${this.a})`}}i.BLACK=new i(0,0,0),i.WHITE=new i(255,255,255)},22:function(t,n,s){"use strict";s.r(n),s.d(n,"BrushStatus",(function(){return i})),s.d(n,"BrushType",(function(){return r})),s.d(n,"AbstractBrush",(function(){return e}));class i{constructor(t,n,s,i,r){this.x=t,this.y=n,this.pressure=s,this.tiltX=i,this.tiltY=r}}let r;!function(t){t[t.pen=1]="pen",t[t.selector=2]="selector"}(r||(r={}));class e{constructor(t,n){this.type=t,this.name=n}init(){}destory(){}onStart(t,n){}onDraw(t,n){}onEnd(t,n){}}},26:function(t,n,s){"use strict";s.r(n),s.d(n,"PCanvasContext",(function(){return e}));var i=s(21),r=s(3);class e{constructor(t,n,s,e,a,h=new r.Brush,o=i.RGBA.BLACK.toRGBAString(),u=100){this.curCanvas=t,this.curCanvasContext2D=n,this.width=s,this.height=e,this.onBrushEnd=a,this.brush=h,this.color=o,this.brushWidth=u}}},3:function(t,n,s){"use strict";s.r(n),s.d(n,"Brush",(function(){return r}));var i=s(22);class r{constructor(){this.type=i.BrushType.pen,this.name="default",this.isPainting=!1,this.pathList=[],this.animeHandle=void 0,this.paintPath=t=>{t.clearRect(0,0,t.canvas.width,t.canvas.height),t.beginPath();const n=this.pathList[0];t.moveTo(n.x,n.y);for(let n=1;n<this.pathList.length;n++){const{x:s,y:i}=this.pathList[n];t.lineTo(s,i)}t.stroke()}}init(){}destory(){}onStart(t,n){requestAnimationFrame(()=>{const{curCanvasContext2D:s,color:i,brushWidth:r}=n;this.isPainting=!0,this.pathList.push(t),s.strokeStyle=i,s.lineWidth=r,s.lineCap="round",s.lineJoin="round"})}onDraw(t,n){if(this.isPainting){const{curCanvasContext2D:s}=n;for(let n=0;n<t.length;n++)this.pathList.push(t[n]);cancelAnimationFrame(this.animeHandle),this.animeHandle=requestAnimationFrame(()=>{this.paintPath(s)})}}onEnd(t,{onBrushEnd:n}){requestAnimationFrame(()=>{this.isPainting=!1,this.pathList=[],n()})}}}}]);