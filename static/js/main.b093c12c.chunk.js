(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){},34:function(e,t,a){},40:function(e,t,a){e.exports=a(75)},51:function(e,t,a){},53:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){},60:function(e,t,a){},62:function(e,t,a){},64:function(e,t,a){},66:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){},72:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(17),s=a.n(c),l=(a(45),a(12)),i=a(78),o=a(21),u=a(39),m=a(14),h="SET_DRAW_MODE",p="SET_PAINT_SIZE",d="SET_COLOR",g="SET_CANVAS_REF",f="CHANGE_FILL_MODE",b="draw",v="line",E="rectangle",w="circle",y="triangle",C="SET_SELECTED_FILTER",O="SET_IMAGE_URL",j="SET_BRIGHTNESS",N="SET_CONTRAST",S="SET_SATURATION",F="SET_SHARPNESS",x="SET_GREYSCALE",T="SET_ABLE_TO_CHANGE",D=Object(o.b)({contacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CONTACTS_SUCCESS":return Object(u.a)(t.contacts);default:return e}},drawing:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(m.a)({},e,{drawMode:t.drawMode});case p:return Object(m.a)({},e,{paintSize:t.paintSize});case d:return Object(m.a)({},e,{color:t.color});case g:return Object(m.a)({},e,{canvasRef:t.reference});case f:return Object(m.a)({},e,{isFill:!e.isFill});default:return e}},filters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(m.a)({},e,{selectedFilter:t.selectedFilter});case O:return Object(m.a)({},e,{imageURL:t.imageURL});default:return e}},parameters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(m.a)({},e,{brightness:t.brightness});case N:return Object(m.a)({},e,{contrast:t.contrast});case S:return Object(m.a)({},e,{saturation:t.saturation});case F:return Object(m.a)({},e,{sharpness:t.sharpness});case x:return Object(m.a)({},e,{greyscale:t.greyscale});case T:return Object(m.a)({},e,{ableToChange:t.ableToChange});default:return e}}}),k={drawing:{drawMode:b,paintSize:10,color:"#6edb31",canvasRef:null,isFill:!1},filters:{selectedFilter:null,imageURL:null},parameters:{brightness:0,contrast:0,saturation:1,sharpness:0,greyscale:0,ableToChange:!0}},M=Object(o.c)(D,k),R=a(4),I=a(5),U=a(7),P=a(6),_=a(8),A=a(77),L=a(79);var z=a(3),V=(a(33),function(e){function t(){return Object(R.a)(this,t),Object(U.a)(this,Object(P.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){return r.a.createElement(z.c,{className:"header"},r.a.createElement(z.a,null,r.a.createElement("h1",null,"Image Changer")))}}]),t}(n.Component)),B=a(76),W=(a(51),function(e){function t(){return Object(R.a)(this,t),Object(U.a)(this,Object(P.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Links"},r.a.createElement(z.c,null,r.a.createElement(z.a,{md:6,lg:4},r.a.createElement(B.a,{to:"/ChangeParameters"},r.a.createElement("button",{className:"changeParameters"},"Change Parameters"))),r.a.createElement(z.a,{md:6,lg:4},r.a.createElement(B.a,{to:"/Filters"},r.a.createElement("button",{className:"filters"},"Filters"))),r.a.createElement(z.a,{md:6,lg:4},r.a.createElement(B.a,{to:"/Drawing"},r.a.createElement("button",{className:"drawing"},"Drawing")))))}}]),t}(n.Component)),H=function(e){function t(){return Object(R.a)(this,t),Object(U.a)(this,Object(P.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){return r.a.createElement(z.c,{className:"footer"},r.a.createElement(z.a,null,"Code on ",r.a.createElement("a",{href:"https://github.com/Patrycja20/ImageChanger"},"GitHub")),r.a.createElement(z.a,{className:"text-right"},"\xa9 Patrycja Madyda & Krzysztof Komar"))}}]),t}(n.Component),G=function(e){function t(){return Object(R.a)(this,t),Object(U.a)(this,Object(P.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"MainPage"},r.a.createElement(z.b,{fluid:!0},r.a.createElement(V,null)),r.a.createElement(z.b,null,r.a.createElement(W,null),r.a.createElement(H,null)))}}]),t}(n.Component),q=(a(53),function(e){function t(){return Object(R.a)(this,t),Object(U.a)(this,Object(P.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(I.a)(t,[{key:"changeSelectedFilter",value:function(e){this.props.setSelectedFilter(e)}},{key:"render",value:function(){var e=this,t=this.props.filters.imageURL,a=["Frame","Winter Frame","CoffeeWithMilk Frame","Spring Frame","Tea Frame","BlackWhite Frame","DirtyWindow Frame","Fairyland Frame","ViceVersa Frame"],n=["Original","Winter","Coffee with milk","Spring","Tea","Black & White","Dirty window","Fairyland","Vice versa"];return r.a.createElement("div",{className:"FilterImages"},r.a.createElement(z.c,null,r.a.createElement(z.a,{className:"FilterImage"},n[0],r.a.createElement(B.a,{to:"/Filters/View"},r.a.createElement("img",{onClick:function(){return e.changeSelectedFilter(a[0])},className:a[0],src:t}))),r.a.createElement(z.a,{className:"FilterImage"},n[1],r.a.createElement(B.a,{to:"/Filters/View"},r.a.createElement("img",{onClick:function(){return e.changeSelectedFilter(a[1])},className:a[1],src:t}))),r.a.createElement(z.a,{className:"FilterImage"},n[2],r.a.createElement(B.a,{to:"/Filters/View"},r.a.createElement("img",{onClick:function(){return e.changeSelectedFilter(a[2])},className:a[2],src:t})))),r.a.createElement(z.c,null,r.a.createElement(z.a,{className:"FilterImage"},n[3],r.a.createElement(B.a,{to:"/Filters/View"},r.a.createElement("img",{onClick:function(){return e.changeSelectedFilter(a[3])},className:a[3],src:t}))),r.a.createElement(z.a,{className:"FilterImage"},n[4],r.a.createElement(B.a,{to:"/Filters/View"},r.a.createElement("img",{onClick:function(){return e.changeSelectedFilter(a[4])},className:a[4],src:t}))),r.a.createElement(z.a,{className:"FilterImage"},n[5],r.a.createElement(B.a,{to:"/Filters/View"},r.a.createElement("img",{onClick:function(){return e.changeSelectedFilter(a[5])},className:a[5],src:t})))),r.a.createElement(z.c,null,r.a.createElement(z.a,{className:"FilterImage"},n[6],r.a.createElement(B.a,{to:"/Filters/View"},r.a.createElement("img",{onClick:function(){return e.changeSelectedFilter(a[6])},className:a[6],src:t}))),r.a.createElement(z.a,{className:"FilterImage"},n[7],r.a.createElement(B.a,{to:"/Filters/View"},r.a.createElement("img",{onClick:function(){return e.changeSelectedFilter(a[7])},className:a[7],src:t}))),r.a.createElement(z.a,{className:"FilterImage"},n[8],r.a.createElement(B.a,{to:"/Filters/View"},r.a.createElement("img",{onClick:function(){return e.changeSelectedFilter(a[8])},className:a[8],src:t})))))}}]),t}(n.Component));var J=Object(l.b)(function(e){return{filters:e.filters}},function(e){return{setSelectedFilter:function(t){return e(function(e){return{type:C,selectedFilter:e}}(t))}}})(q),Y=(a(34),a(9)),K=a(10),X=a(13);Y.b.add(X.a);var Z=function(e){function t(){var e,a;Object(R.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(U.a)(this,(e=Object(P.a)(t)).call.apply(e,[this].concat(r)))).handleImageChange=function(e){e.preventDefault();var t=new FileReader,n=e.target.files[0];t.onloadend=function(){a.props.setImageURL(t.result)},t.readAsDataURL(n)},a}return Object(_.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){var e=this.props.filters.imageURL?r.a.createElement(J,null):r.a.createElement("div",{className:"alert alert-dark"},"Please select an image");return r.a.createElement("div",{className:"Filters"},r.a.createElement("nav",{className:"navbar navbar-expand-sm"},r.a.createElement("div",{className:"Brand"},r.a.createElement(B.a,{className:"Back",to:"/"},r.a.createElement("span",{className:"back-icon"},r.a.createElement(K.a,{icon:"angle-left",className:"scale2x"})),r.a.createElement("span",{className:"navbar-brand"},"Filters"))),r.a.createElement("div",{className:"HeaderFilters"},r.a.createElement("form",null,r.a.createElement("input",{type:"file",onChange:this.handleImageChange})))),r.a.createElement(z.b,{fluid:!0},r.a.createElement(z.c,null,r.a.createElement(z.a,null,r.a.createElement("div",{className:"ContentFilters"},e)))))}}]),t}(n.Component);var Q=Object(l.b)(function(e){return{filters:e.filters}},function(e){return{setImageURL:function(t){return e(function(e){return{type:O,imageURL:e}}(t))}}})(Z);function $(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1]?e.fill():e.stroke()}var ee={getRealCoords:function(e,t){var a=function(e){for(var t=0,a=0,n=e;n&&"BODY"!==n.tagName;)t+=n.offsetTop-n.scrollTop,a+=n.offsetLeft-n.scrollLeft,n=n.offsetParent;return{top:t,left:a}}(e),n=a.top,r=a.left;return{x:t.pageX-r,y:t.pageY-n}},canvasDownloadPopup:function(e){if(null!==e){var t=e.toDataURL("image/jpeg").replace(/^data:image\/[^;]+/,"data:application/octet-stream"),a=document.createElement("a");a.href=t,a.download="image.jpg",document.body.appendChild(a),a.click(),document.body.removeChild(a)}},draw:function(e,t){e.lineTo(t.x,t.y),e.stroke()},drawLine:function(e,t,a){e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(a.x,a.y),e.closePath(),e.stroke()},drawRectangle:function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e.beginPath(),e.rect(t.x,t.y,a.x-t.x,a.y-t.y),e.closePath(),$(e,n)},drawCircle:function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=Math.sqrt(Math.pow(a.x-t.x,2)+Math.pow(a.y-t.y,2));e.beginPath(),e.arc(t.x,t.y,r,0,2*Math.PI),e.closePath(),$(e,n)},drawTriangle:function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(a.x,a.y),e.lineTo(t.x,a.y),e.closePath(),$(e,n)},calcCanvasSize:function(e,t){return{width:e.innerWidth<400+t.width?400:e.innerWidth-t.width,height:e.innerHeight<300+t.height?300:e.innerHeight-t.height}},setDefaultContextValues:function(e,t,a){e.strokeStyle=a,e.lineWidth=t,e.lineJoin="round",e.lineCap="round"},clearCanvas:function(e){var t=e.getContext("2d");t.clearRect(0,0,e.width,e.height),t.fillStyle="white",t.fillRect(0,0,e.width,e.height)}},te=(a(56),function(e){function t(){var e,a;Object(R.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(U.a)(this,(e=Object(P.a)(t)).call.apply(e,[this].concat(r)))).canvas=null,a.canvasTemp=null,a.ctx=null,a.ctxTemp=null,a.state={canvasSize:{width:1e3,height:300},mouseDown:!1,startPosition:{x:0,y:0}},a.paddings={width:150,height:190},a.updateWindowDimensions=function(){a.setState({canvasSize:ee.calcCanvasSize(window,a.paddings)})},a.mouseDown=function(e){var t=ee.getRealCoords(a.refs.canvas,e);a.setState({mouseDown:!0,startPosition:t}),a.ctx.moveTo(t.x,t.y),a.ctx.beginPath()},a.mouseMove=function(e){if(!1!==a.state.mouseDown){var t=a.props.drawing,n=t.drawMode,r=t.isFill,c=ee.getRealCoords(a.refs.canvas,e),s=a.state.startPosition;switch(a.ctxTemp.clearRect(0,0,a.refs.canvasTemp.width,a.refs.canvasTemp.height),n){case b:return ee.draw(a.ctx,c);case v:return ee.drawLine(a.ctxTemp,s,c);case E:return ee.drawRectangle(a.ctxTemp,s,c,r);case w:return ee.drawCircle(a.ctxTemp,s,c,r);case y:return ee.drawTriangle(a.ctxTemp,s,c,r)}}},a.mouseUp=function(){a.setState({mouseDown:!1});var e=a.props.drawing.drawMode;[v,E,w,y].includes(e)&&(a.ctx.drawImage(a.canvasTemp,0,0),a.ctxTemp.clearRect(0,0,a.canvasTemp.width,a.canvasTemp.height))},a}return Object(_.a)(t,e),Object(I.a)(t,[{key:"componentWillMount",value:function(){this.updateWindowDimensions()}},{key:"componentDidMount",value:function(){this.canvas=this.refs.canvas,this.canvasTemp=this.refs.canvasTemp,this.props.setCanvasReference(this.canvas),this.ctx=this.canvas.getContext("2d"),this.ctxTemp=this.canvasTemp.getContext("2d"),ee.clearCanvas(this.canvas);var e=this.props.drawing,t=e.paintSize,a=e.color;ee.setDefaultContextValues(this.ctx,t,a),ee.setDefaultContextValues(this.ctxTemp,t,a)}},{key:"componentDidUpdate",value:function(){var e=this.props.drawing,t=e.paintSize,a=e.color;this.ctx.lineWidth=t,this.ctx.strokeStyle=a,this.ctx.fillStyle=a,this.ctxTemp.lineWidth=t,this.ctxTemp.strokeStyle=a,this.ctxTemp.fillStyle=a}},{key:"render",value:function(){var e=this.state.canvasSize,t=e.width,a=e.height;return r.a.createElement("div",{className:"DrawingCanvas row container-fluid "},r.a.createElement("div",{className:"col canvas-container",ref:"container"},r.a.createElement("canvas",{ref:"canvas",className:"canvas-border",width:t,height:a,onMouseDown:this.mouseDown,onMouseMove:this.mouseMove,onMouseUp:this.mouseUp}),r.a.createElement("canvas",{ref:"canvasTemp",width:t,height:a,onMouseDown:this.mouseDown,onMouseMove:this.mouseMove,onMouseUp:this.mouseUp})))}}]),t}(n.Component));var ae=Object(l.b)(function(e){return{drawing:e.drawing}},function(e){return{setCanvasReference:function(t){return e({type:g,reference:t})}}})(te);a(58);Y.b.add(X.f),Y.b.add(X.e),Y.b.add(X.c),Y.b.add(X.g),Y.b.add(X.b),Y.b.add(X.j),Y.b.add(X.h),Y.b.add(X.i);var ne=function(e){function t(){var e,a;Object(R.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(U.a)(this,(e=Object(P.a)(t)).call.apply(e,[this].concat(r)))).changeDrawMode=function(e){a.props.setDrawMode(e)},a.changePaintSize=function(e){a.props.setPaintSize(e.target.value)},a.changeColor=function(e){a.props.setColor(e.target.value)},a.changeFillMode=function(){a.props.changeFillMode()},a.clearCanvas=function(){ee.clearCanvas(a.props.drawing.canvasRef)},a.saveAsJpg=function(){ee.canvasDownloadPopup(a.props.drawing.canvasRef)},a}return Object(_.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){var e=this,t=this.props.drawing,a=t.drawMode,n=t.paintSize,c=t.color,s=t.isFill;return r.a.createElement("div",{className:"DrawingButtons navbar-coloring-buttons"},r.a.createElement("ul",{className:"navbar-nav mr-auto paint-bar"},r.a.createElement("li",{className:"nav-item paint-size-container"},r.a.createElement("input",{id:"paintSize",type:"range",className:"form-control-range paint-size",min:"1",max:"50",value:n,onChange:this.changePaintSize,title:"Choose color"}),r.a.createElement("span",{className:"badge badge-secondary paint-size-val"},n,"px")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("input",{type:"color",className:"btn btn-secondary paint-color",value:c,onChange:this.changeColor})),r.a.createElement("li",{className:"nav-item"},r.a.createElement("button",{className:"btn btn-secondary",type:"button",onClick:this.changeFillMode,title:"Fill or stroke mode"},s?r.a.createElement(K.a,{icon:"square-full"}):r.a.createElement(K.a,{icon:"vector-square"})),r.a.createElement("button",{className:"btn btn-secondary mx-2",type:"button",onClick:this.clearCanvas,title:"Clear canvas"},r.a.createElement(K.a,{icon:"trash-alt"}))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("button",{"data-mode":b,className:"btn btn-secondary button-mode ".concat(a===b&&"selected"),type:"button",onClick:function(){return e.changeDrawMode(b)},title:"Draw"},r.a.createElement(K.a,{icon:"pencil-alt"})),r.a.createElement("button",{"data-mode":v,className:"btn btn-secondary button-mode ".concat(a===v&&"selected"),type:"button",onClick:function(){return e.changeDrawMode(v)},title:"Draw line"},r.a.createElement(K.a,{icon:"minus"})),r.a.createElement("button",{"data-mode":E,className:"btn btn-secondary button-mode button-square ".concat(a===E&&"selected"),type:"button",onClick:function(){return e.changeDrawMode(E)},title:"Draw rectangle"},r.a.createElement(K.a,{icon:"square"})),r.a.createElement("button",{"data-mode":E,className:"btn btn-secondary button-mode button-square ".concat(a===w&&"selected"),type:"button",onClick:function(){return e.changeDrawMode(w)},title:"Draw circle"},r.a.createElement(K.a,{icon:"circle"})),r.a.createElement("button",{"data-mode":E,className:"btn btn-secondary button-mode button-square ".concat(a===y&&"selected"),type:"button",onClick:function(){return e.changeDrawMode(y)},title:"Draw triangle"},r.a.createElement(K.a,{className:"triangle-icon",icon:"caret-up"}))),r.a.createElement("li",{className:"nav-item button-save"},r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:this.saveAsJpg},"Save as *.jpg"))))}}]),t}(n.Component);var re=Object(l.b)(function(e){return{drawing:e.drawing}},function(e){return{setDrawMode:function(t){return e(function(e){return{type:h,drawMode:e}}(t))},setPaintSize:function(t){return e(function(e){return{type:p,paintSize:e}}(t))},setColor:function(t){return e(function(e){return{type:d,color:e}}(t))},changeFillMode:function(){return e({type:f})}}})(ne);a(60);Y.b.add(X.a);var ce=function(e){function t(){return Object(R.a)(this,t),Object(U.a)(this,Object(P.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Drawing"},r.a.createElement("nav",{className:"navbar-coloring navbar-expand-sm"},r.a.createElement("div",{className:"navbar-coloring-brand"},r.a.createElement(B.a,{to:"/",className:"noHover"},r.a.createElement("span",{className:"raquo-delimeter"},r.a.createElement(K.a,{icon:"angle-left",className:"scale2x"})),r.a.createElement("span",{className:"navbar-brand"},"Drawing"))),r.a.createElement(re,null)),r.a.createElement(ae,null))}}]),t}(n.Component),se=(a(62),function(e){function t(){return Object(R.a)(this,t),Object(U.a)(this,Object(P.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"Header navbar navbar-expand-sm"},r.a.createElement("div",{className:"Brand"},r.a.createElement(B.a,{className:"Back",to:"/"},r.a.createElement("span",{className:"back-icon"},r.a.createElement(K.a,{icon:"angle-left",className:"scale2x"})),r.a.createElement("span",{className:"navbar-brand"},"Change Parameters"))))}}]),t}(n.Component)),le=(a(64),function(e){function t(){var e,a;Object(R.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(U.a)(this,(e=Object(P.a)(t)).call.apply(e,[this].concat(r)))).changeBrightness=function(e){a.props.setBrightness(e.target.value)},a.changeContrast=function(e){a.props.setContrast(e.target.value)},a.changeSaturation=function(e){a.props.setSaturation(e.target.value)},a.changeSharpness=function(e){a.props.setSharpness(e.target.value)},a.changeGreyscale=function(e){a.props.setGreyscale(e.target.value)},a.mouseDown=function(){a.props.setAbleToChange(!1)},a.mouseUp=function(){a.props.setAbleToChange(!0)},a}return Object(_.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){var e=this.props.parameters,t=e.brightness,a=e.contrast,n=e.saturation,c=e.sharpness,s=e.greyscale;return r.a.createElement("div",{className:"InputsRange"},r.a.createElement(z.c,null,r.a.createElement(z.a,null,r.a.createElement("label",{for:"Brightness"},"Brightness: ",t),r.a.createElement("input",{type:"range",class:"Range custom-range",min:"-255",max:"255",step:"1",id:"brightness",value:t,onInput:this.changeBrightness,onMouseDown:this.mouseDown,onMouseUp:this.mouseUp}))),r.a.createElement(z.c,null,r.a.createElement(z.a,null,r.a.createElement("label",{for:"Contrast"},"Contrast: ",a),r.a.createElement("input",{type:"range",class:"Range custom-range",min:"-255",max:"255",step:"1",id:"contrast",value:a,onChange:this.changeContrast,onMouseDown:this.mouseDown,onMouseUp:this.mouseUp}))),r.a.createElement(z.c,null,r.a.createElement(z.a,null,r.a.createElement("label",{for:"Saturation"},"Saturation: ",n),r.a.createElement("input",{type:"range",class:"Range custom-range",min:"0",max:"2",step:"0.1",id:"saturation",value:n,onChange:this.changeSaturation,onMouseDown:this.mouseDown,onMouseUp:this.mouseUp}))),r.a.createElement(z.c,null,r.a.createElement(z.a,null,r.a.createElement("label",{for:"Sharpness"},"Sharpness: ",c),r.a.createElement("input",{type:"range",class:"Range custom-range",min:"0",max:"255",step:"1",id:"sharpness",value:c,onChange:this.changeSharpness,onMouseDown:this.mouseDown,onMouseUp:this.mouseUp}))),r.a.createElement(z.c,null,r.a.createElement(z.a,null,r.a.createElement("label",{for:"Grey Scale"},"Grey Scale: ",s),r.a.createElement("input",{type:"range",class:"Range custom-range",min:"0",max:"1",step:"0.2",id:"greyscale",value:s,onChange:this.changeGreyscale,onMouseDown:this.mouseDown,onMouseUp:this.mouseUp}))),r.a.createElement(z.c,null,r.a.createElement("button",{type:"reset"},"Reset")))}}]),t}(n.Component));var ie=Object(l.b)(function(e){return{parameters:e.parameters}},function(e){return{setBrightness:function(t){return e(function(e){return{type:j,brightness:parseInt(e)}}(t))},setContrast:function(t){return e(function(e){return{type:N,contrast:parseInt(e)}}(t))},setSaturation:function(t){return e(function(e){return{type:S,saturation:parseFloat(e)}}(t))},setSharpness:function(t){return e(function(e){return{type:F,sharpness:parseInt(e)}}(t))},setGreyscale:function(t){return e(function(e){return{type:x,greyscale:parseFloat(e)}}(t))},setAbleToChange:function(t){return e(function(e){return{type:T,ableToChange:e}}(t))}}})(le);a(66);function oe(e){return e<0?0:e>255?255:e}function ue(e,t,a){for(var n=0;n<t.length;n+=4){var r=a(t[n],t[n+1],t[n+2],e);t[n]=r.r,t[n+1]=r.g,t[n+2]=r.b}}function me(e,t,a,n){return{r:e=oe(e+n),g:t=oe(t+n),b:a=oe(a+n)}}function he(e,t,a,n){var r=259*(n+255)/(255*(259-n));return{r:e=oe(r*(e-128)+128),g:t=oe(r*(t-128)+128),b:a=oe(r*(a-128)+128)}}function pe(e,t,a,n){var r=Math.sqrt(e*e*.299+t*t*.587+a*a*.114);return{r:e=oe(r+(e-r)*n),g:t=oe(r+(t-r)*n),b:a=oe(r+(a-r)*n)}}function de(e,t,a,n){return{r:e=oe(e+n),g:t=oe(t+n),b:a=oe(a+n)}}function ge(e,t,a,n){return{r:e=oe(e+n),g:t=oe(t+n),b:a=oe(a+n)}}var fe=a(23),be=function(e){function t(){return Object(R.a)(this,t),Object(U.a)(this,Object(P.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(I.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.refs.canvas;this.ctx=t.getContext("2d");var a=this.refs.image;a.onload=function(){e.ctx.clearRect(0,0,1910,1080),e.ctx.drawImage(a,0,0)}}},{key:"componentDidUpdate",value:function(){if(!1!==this.props.parameters.ableToChange){this.ctx.clearRect(0,0,1910,1080),this.ctx.drawImage(this.refs.image,0,0);var e=this.ctx.getImageData(0,0,1910,1080);ue(this.props.parameters.brightness,e.data,me),ue(this.props.parameters.contrast,e.data,he),ue(this.props.parameters.saturation,e.data,pe),ue(this.props.parameters.sharpness,e.data,de),ue(this.props.parameters.greyscale,e.data,ge),this.ctx.putImageData(e,0,0)}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("canvas",{ref:"canvas",width:1910,height:1080}),r.a.createElement("img",{ref:"image",src:this.props.name,className:"hidden"}))}}]),t}(n.Component);var ve=Object(fe.a)(function(e){return{parameters:e.parameters}})(be),Ee=(a(68),function(e){function t(e){var a;return Object(R.a)(this,t),(a=Object(U.a)(this,Object(P.a)(t).call(this,e))).state={file:"",imageViewUrl:""},a}return Object(_.a)(t,e),Object(I.a)(t,[{key:"_handleSubmit",value:function(e){e.preventDefault()}},{key:"_handleImageChange",value:function(e){var t=this;e.preventDefault();var a=new FileReader,n=e.target.files[0];a.onloadend=function(){t.setState({file:n,imageViewUrl:a.result})},a.readAsDataURL(n)}},{key:"render",value:function(){var e=this,t=this.state.imageViewUrl,a=null;return a=t?r.a.createElement(ve,{name:t}):r.a.createElement("div",null,"Please select an Image",r.a.createElement("br",null),r.a.createElement("canvas",{width:1910,height:1080})),r.a.createElement("div",{className:"ChooseImage"},r.a.createElement("form",{onSubmit:function(t){return e._handleSubmit(t)}},r.a.createElement("input",{className:"fileInput",type:"file",onChange:function(t){return e._handleImageChange(t)}})," Preferowane maks. (1920 x 1080)"),r.a.createElement("div",{className:"imgView"},a))}}]),t}(n.Component)),we=function(e){function t(){return Object(R.a)(this,t),Object(U.a)(this,Object(P.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(se,null),r.a.createElement(z.b,{fluid:!0},r.a.createElement(z.c,null,r.a.createElement(z.a,{md:4,xl:3},r.a.createElement(ie,null)),r.a.createElement(z.a,{md:8,xl:9},r.a.createElement(Ee,null)))))}}]),t}(n.Component);a(70);Y.b.add(X.a),Y.b.add(X.d);var ye=function(e){function t(){return Object(R.a)(this,t),Object(U.a)(this,Object(P.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){var e=this.props.filters,t=e.imageURL,a=e.selectedFilter;return r.a.createElement("div",{className:"Filters"},r.a.createElement("nav",{className:"navbar navbar-expand-sm"},r.a.createElement("div",{className:"Brand"},r.a.createElement(B.a,{className:"Back",to:"/Filters"},r.a.createElement("span",{className:"back-icon"},r.a.createElement(K.a,{icon:"angle-left",className:"scale2x"})),r.a.createElement("span",{className:"navbar-brand"},"Filters ",r.a.createElement(K.a,{icon:"long-arrow-alt-right"})," View")))),r.a.createElement("div",{className:"Photo justify-content-center"},r.a.createElement("div",{className:"full-view"},r.a.createElement("img",{className:a,style:{maxHeight:"100%",maxWidth:"100%"},src:t}))))}}]),t}(n.Component);var Ce=Object(l.b)(function(e){return{filters:e.filters}},function(e){return{}})(ye),Oe=(a(72),function(e){function t(){return Object(R.a)(this,t),Object(U.a)(this,Object(P.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(A.a,{path:"/",exact:!0,strict:!0,component:G}),r.a.createElement(A.a,{path:"/ChangeParameters",component:we}),r.a.createElement(A.a,{path:"/Filters",exact:!0,strict:!0,component:Q}),r.a.createElement(A.a,{path:"/Filters/View",component:Ce}),r.a.createElement(A.a,{path:"/Drawing",component:ce}))}}]),t}(n.Component)),je={contactsFetched:function(e){return{type:"FETCH_CONTACTS_SUCCESS",contacts:e}}},Ne=Object(L.a)(Object(l.b)(function(e){return{contacts:e.contacts}},je)(Oe)),Se=function(){return r.a.createElement(l.a,{store:M},r.a.createElement(i.a,{basename:"/ImageChanger"},r.a.createElement(Ne,null)))};s.a.render(r.a.createElement(Se,null),document.getElementById("root"))}},[[40,2,1]]]);
//# sourceMappingURL=main.b093c12c.chunk.js.map