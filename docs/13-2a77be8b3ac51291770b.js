(window.webpackJsonp=window.webpackJsonp||[]).push([[13,22],{21:function(t,n,i){"use strict";i.r(n),i.d(n,"BrushStatus",(function(){return s})),i.d(n,"BrushType",(function(){return e})),i.d(n,"AbstractBrush",(function(){return a}));class s{constructor(t,n,i,s,e){this.x=t,this.y=n,this.pressure=i,this.tiltX=s,this.tiltY=e}}let e;!function(t){t[t.pen=1]="pen",t[t.selector=2]="selector"}(e||(e={}));class a{constructor(t,n){this.type=t,this.name=n}init(){}destory(){}onStart(t,n){}onDraw(t,n){}onEnd(t,n){}}},3:function(t,n,i){"use strict";i.r(n),i.d(n,"Brush",(function(){return e}));var s=i(21);class e{constructor(){this.type=s.BrushType.pen,this.name="default",this.isPainting=!1,this.pathList=[],this.animeHandle=void 0,this.paintPath=t=>{t.clearRect(0,0,t.canvas.width,t.canvas.height),t.beginPath();const n=this.pathList[0];t.moveTo(n.x,n.y);for(let n=1;n<this.pathList.length;n++){const{x:i,y:s}=this.pathList[n];t.lineTo(i,s)}t.stroke()}}init(){}destory(){}onStart(t,n){const{curCanvasContext2D:i,color:s,brushWidth:e}=n;this.isPainting=!0,this.pathList.push(t),i.strokeStyle=s,i.lineWidth=e,i.lineCap="round",i.lineJoin="round"}onDraw(t,n){if(this.isPainting){const{curCanvasContext2D:i}=n;for(let n=0;n<t.length;n++)this.pathList.push(t[n]);cancelAnimationFrame(this.animeHandle),this.animeHandle=requestAnimationFrame(()=>{this.paintPath(i)})}}onEnd(t,{onBrushEnd:n}){requestAnimationFrame(()=>{this.isPainting=!1,this.pathList=[],n()})}}}}]);