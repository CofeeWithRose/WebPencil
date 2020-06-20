(window.webpackJsonp=window.webpackJsonp||[]).push([[19,22],{21:function(t,s,i){"use strict";i.r(s),i.d(s,"BrushStatus",(function(){return a})),i.d(s,"BrushType",(function(){return n})),i.d(s,"AbstractBrush",(function(){return r}));class a{constructor(t,s,i,a,n){this.x=t,this.y=s,this.pressure=i,this.tiltX=a,this.tiltY=n}}let n;!function(t){t[t.pen=1]="pen",t[t.selector=2]="selector"}(n||(n={}));class r{constructor(t,s){this.type=t,this.name=s}init(){}destory(){}onStart(t,s){}onDraw(t,s){}onEnd(t,s){}}},29:function(t,s,i){"use strict";i.r(s),i.d(s,"Brush",(function(){return r}));var a=i(78),n=i(21);class r{constructor(){this.type=n.BrushType.pen,this.name="default",this.isPainting=!1,this.lastBrush=void 0,this.lastNormalizedDirection=void 0,this.pathList=[[],[]],this.getVerticalPath=(t,s)=>[a.a.add(t,s),a.a.subtract(t,s)]}init(){}destory(){}onStart(t,s){const{curCanvasContext2D:i,color:a}=s;this.lastBrush=t,this.isPainting=!0,i.fillStyle=a}onDraw(t,s){if(this.isPainting){const{curCanvasContext2D:i,brushWidth:n}=s;t.forEach(t=>{const{x:s,y:i,pressure:r}=t;let e;const h=new a.a(s-this.lastBrush.x,i-this.lastBrush.y),c=a.a.normalize(h),o=a.a.vertical(c);e=r*n*.5;const u=a.a.multipy(o,e),[l,y]=this.getVerticalPath(t,u);this.lastNormalizedDirection&&a.a.degree(a.a.ZERO,this.lastNormalizedDirection,c)>180?(this.pathList[1].push(l),this.pathList[0].push(y)):(this.pathList[0].push(l),this.pathList[1].push(y)),this.lastBrush=t,this.lastNormalizedDirection=c}),this.fillPathList(i)}}fillPathList(t){const s=this.pathList[0],i=this.pathList[1],a=s.concat([...i].reverse());t.clearRect(0,0,t.canvas.width,t.canvas.height),t.beginPath();const n=a.length-1;t.moveTo(a[n].x,a[n].y),a.forEach(({x:s,y:i})=>{t.lineTo(s,i)}),t.closePath(),t.fill()}onEnd(t,s){this.isPainting=!1,this.pathList=[[],[]]}}},78:function(t,s,i){"use strict";i.d(s,"a",(function(){return n}));const a=t=>t<0?2*Math.PI+t:t;class n{constructor(t=0,s=0){this.x=t,this.y=s}static normalize(t){const s=1/n.magnitude(t);return new n(t.x*s,t.y*s)}static vertical({x:t,y:s}){return new n(s,-t)}static dist(t,s){return Math.sqrt((t.x-s.x)**2+(t.y-s.y)**2)}static magnitude(t){return Math.sqrt(t.x**2+t.y**2)}static degree(t,s,i){const n=a(Math.atan2(s.y-t.y,s.x-t.x)),r=a(Math.atan2(i.y-t.y,i.x-t.x));return Math.abs(r-n)}static add(t,s){return new n(t.x+s.x,t.y+s.y)}static rotate(t,s){const i=n.magnitude(t),r=a(Math.atan2(t.y,t.x))-s%360/180*Math.PI;return new n(Math.cos(r)*i,Math.sin(r)*i)}static multipy({x:t,y:s},i){return new n(t*i,s*i)}static subtract(t,s){return new n(t.x-s.x,t.y-s.y)}static move(t,s,i){const a=i.x-s.x,r=i.y-s.y;return new n(t.x+a,t.y+r)}static floor({x:t,y:s}){return new n(Math.floor(t),Math.floor(s))}}n.ZERO=new n}}]);