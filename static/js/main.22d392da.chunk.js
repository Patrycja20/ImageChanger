(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){},34:function(e,t,a){},40:function(e,t,a){e.exports=a(75)},51:function(e,t,a){},53:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){},60:function(e,t,a){},62:function(e,t,a){},64:function(e,t,a){},66:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){},72:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(18),i=a.n(c),s=(a(45),a(11)),o=a(78),l=a(22),u=a(39),m=a(9),h="SET_DRAW_MODE",d="SET_PAINT_SIZE",p="SET_COLOR",g="SET_CANVAS_REF",f="CHANGE_FILL_MODE",b="draw",v="line",E="rectangle",C="circle",y="triangle",w="SET_SELECTED_FILTER",O="SET_IMAGE_URL",j="SET_IMAGE_DIMENSIONS",N="SET_BRIGHTNESS",k="SET_CONTRAST",S="SET_SATURATION",x="SET_VIGNETTING",T="SET_NUMBER_OF_SHADES",D="SET_BLACK_AND_WHITE",R="SET_INVERTED_COLOR",I="SET_RED",M="SET_GREEN",A="SET_BLUE",F="RESET_PARAMETERS",_="SET_IS_LOADED",L="SET_ABLE_TO_CHANGE",U=Object(l.b)({contacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CONTACTS_SUCCESS":return Object(u.a)(t.contacts);default:return e}},drawing:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(m.a)({},e,{drawMode:t.drawMode});case d:return Object(m.a)({},e,{paintSize:t.paintSize});case p:return Object(m.a)({},e,{color:t.color});case g:return Object(m.a)({},e,{canvasRef:t.reference});case f:return Object(m.a)({},e,{isFill:!e.isFill});default:return e}},filters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(m.a)({},e,{selectedFilter:t.selectedFilter});case O:return Object(m.a)({},e,{imageURL:t.imageURL});case j:return Object(m.a)({},e,{width:t.width,height:t.height});default:return e}},parameters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(m.a)({},e,{brightness:t.brightness});case k:return Object(m.a)({},e,{contrast:t.contrast});case S:return Object(m.a)({},e,{saturation:t.saturation});case x:return Object(m.a)({},e,{vignetting:t.vignetting});case T:return Object(m.a)({},e,{numberOfShades:t.numberOfShades});case D:return Object(m.a)({},e,{blackAndWhite:t.blackAndWhite});case R:return Object(m.a)({},e,{invertedColor:t.invertedColor});case I:return Object(m.a)({},e,{red:t.red});case M:return Object(m.a)({},e,{green:t.green});case A:return Object(m.a)({},e,{blue:t.blue});case F:return Object(m.a)({},e,{brightness:0,contrast:0,saturation:1,vignetting:0,numberOfShades:0,red:!0,green:!0,blue:!0,blackAndWhite:!1,invertedColor:!1});case _:return Object(m.a)({},e,{isLoaded:t.isLoaded});case L:return Object(m.a)({},e,{ableToChange:t.ableToChange});case"SET_CANVAS_REF":return Object(m.a)({},e,{canvasRef:t.reference});default:return e}}}),P={drawing:{drawMode:b,paintSize:10,color:"#6edb31",canvasRef:null,isFill:!1},filters:{selectedFilter:null,imageURL:null,width:null,height:null},parameters:{brightness:0,contrast:0,saturation:1,vignetting:0,numberOfShades:0,blackAndWhite:!1,invertedColor:!1,red:!0,green:!0,blue:!0,isLoaded:!1,ableToChange:!0,canvasRef:!0}},B=Object(l.c)(U,P),W=a(4),z=a(5),V=a(7),G=a(6),H=a(8),J=a(77),q=a(79);function K(e){return{type:g,reference:e}}function Y(){return{type:F}}var X=a(3),Z=(a(33),function(e){function t(){return Object(W.a)(this,t),Object(V.a)(this,Object(G.a)(t).apply(this,arguments))}return Object(H.a)(t,e),Object(z.a)(t,[{key:"render",value:function(){return r.a.createElement(X.c,{className:"header"},r.a.createElement(X.a,null,r.a.createElement("h1",null,"Image Changer")))}}]),t}(n.Component)),Q=a(76),$=(a(51),function(e){function t(){return Object(W.a)(this,t),Object(V.a)(this,Object(G.a)(t).apply(this,arguments))}return Object(H.a)(t,e),Object(z.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Links"},r.a.createElement(X.c,null,r.a.createElement(X.a,{md:6,lg:4},r.a.createElement(Q.a,{to:"/ChangeParameters"},r.a.createElement("button",{className:"changeParameters"},"Change Parameters"))),r.a.createElement(X.a,{md:6,lg:4},r.a.createElement(Q.a,{to:"/Filters"},r.a.createElement("button",{className:"filters"},"Filters"))),r.a.createElement(X.a,{md:6,lg:4},r.a.createElement(Q.a,{to:"/Drawing"},r.a.createElement("button",{className:"drawing"},"Drawing")))))}}]),t}(n.Component)),ee=function(e){function t(){return Object(W.a)(this,t),Object(V.a)(this,Object(G.a)(t).apply(this,arguments))}return Object(H.a)(t,e),Object(z.a)(t,[{key:"render",value:function(){return r.a.createElement(X.c,{className:"footer"},r.a.createElement(X.a,null,"Code on ",r.a.createElement("a",{href:"https://github.com/Patrycja20/ImageChanger"},"GitHub")),r.a.createElement(X.a,{className:"text-right"},"\xa9 Patrycja Madyda & Krzysztof Komar"))}}]),t}(n.Component),te=function(e){function t(){return Object(W.a)(this,t),Object(V.a)(this,Object(G.a)(t).apply(this,arguments))}return Object(H.a)(t,e),Object(z.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"MainPage"},r.a.createElement(X.b,{fluid:!0},r.a.createElement(Z,null)),r.a.createElement(X.b,null,r.a.createElement($,null),r.a.createElement(ee,null)))}}]),t}(n.Component),ae=(a(53),[{name:"Original",specification:""},{name:"Winter",specification:"brightness(0.7) grayscale(0.4) hue-rotate(200deg)"},{name:"Coffee With Milk",specification:"brightness(1.1) contrast(2.1) sepia(0.9)"},{name:"Spring",specification:"brightness(1) hue-rotate(60deg)"},{name:"Tea",specification:"contrast(0.8) sepia(0.8)"},{name:"Black & White",specification:"grayscale(1)"},{name:"Dirty window",specification:"blur(2px) brightness(1.5)"},{name:"Fairyland",specification:"contrast(1.9) saturate(1.5)"},{name:"Vice versa",specification:"brightness(1.8) grayscale(0.2) hue-rotate(180deg) invert(0.9) sepia(0.4)"}]),ne=function(e){function t(){var e,a;Object(W.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(V.a)(this,(e=Object(G.a)(t)).call.apply(e,[this].concat(c)))).imageTileRenderer=function(e){var t=a.props.filters.imageURL;return e.map(function(e){return r.a.createElement(X.a,{md:4,xs:6,className:"FilterImage",key:e.name},e.name,r.a.createElement(Q.a,{to:"/Filters/View"},r.a.createElement("img",{onClick:function(){return a.props.setSelectedFilter(e)},className:"Frame",style:{filter:e.specification},src:t,alt:e.name})))})},a}return Object(H.a)(t,e),Object(z.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"FilterImages"},r.a.createElement(X.c,null,this.imageTileRenderer(ae)))}}]),t}(n.Component);var re=Object(s.b)(function(e){return{filters:e.filters}},function(e){return{setSelectedFilter:function(t){return e(function(e){return{type:w,selectedFilter:e}}(t))}}})(ne),ce=(a(34),a(10)),ie=a(12),se=a(14);ce.b.add(se.a);var oe=function(e){function t(){var e,a;Object(W.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(V.a)(this,(e=Object(G.a)(t)).call.apply(e,[this].concat(r)))).handleImageChange=function(e){e.preventDefault();var t=new FileReader,n=e.target.files[0];a.getImageSize(n),t.onloadend=function(){a.props.setImageURL(t.result)},t.readAsDataURL(n)},a.getImageSize=function(e){var t=URL.createObjectURL(e),n=new Image;n.onload=function(){a.props.setImageDimensions(n.width,n.height)},n.src=t},a}return Object(H.a)(t,e),Object(z.a)(t,[{key:"render",value:function(){var e=this.props.filters.imageURL?r.a.createElement(re,null):r.a.createElement("div",{className:"alert alert-dark"},"Please select an image");return r.a.createElement("div",{className:"Filters"},r.a.createElement("nav",{className:"navbar navbar-expand-sm"},r.a.createElement("div",{className:"Brand"},r.a.createElement(Q.a,{className:"Back",to:"/"},r.a.createElement("span",{className:"back-icon"},r.a.createElement(ie.a,{icon:"angle-left",className:"scale2x"})),r.a.createElement("span",{className:"navbar-brand"},"Filters"))),r.a.createElement("div",{className:"HeaderFilters"},r.a.createElement("form",null,r.a.createElement("input",{type:"file",onChange:this.handleImageChange})))),r.a.createElement(X.b,{fluid:!0},r.a.createElement(X.c,null,r.a.createElement(X.a,null,r.a.createElement("div",{className:"ContentFilters"},e)))))}}]),t}(n.Component);var le=Object(s.b)(function(e){return{filters:e.filters}},function(e){return{setImageURL:function(t){return e(function(e){return{type:O,imageURL:e}}(t))},setImageDimensions:function(t,a){return e(function(e,t){return{type:j,width:e,height:t}}(t,a))}}})(oe);function ue(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1]?e.fill():e.stroke()}var me={getRealCoords:function(e,t){var a=function(e){for(var t=0,a=0,n=e;n&&"BODY"!==n.tagName;)t+=n.offsetTop-n.scrollTop,a+=n.offsetLeft-n.scrollLeft,n=n.offsetParent;return{top:t,left:a}}(e),n=a.top,r=a.left;return{x:t.pageX-r,y:t.pageY-n}},draw:function(e,t){e.lineTo(t.x,t.y),e.stroke()},drawLine:function(e,t,a){e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(a.x,a.y),e.closePath(),e.stroke()},drawRectangle:function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e.beginPath(),e.rect(t.x,t.y,a.x-t.x,a.y-t.y),e.closePath(),ue(e,n)},drawCircle:function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=Math.sqrt(Math.pow(a.x-t.x,2)+Math.pow(a.y-t.y,2));e.beginPath(),e.arc(t.x,t.y,r,0,2*Math.PI),e.closePath(),ue(e,n)},drawTriangle:function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(a.x,a.y),e.lineTo(t.x,a.y),e.closePath(),ue(e,n)},calcCanvasSize:function(e,t){return{width:e.innerWidth<400+t.width?400:e.innerWidth-t.width,height:e.innerHeight<300+t.height?300:e.innerHeight-t.height}},setDefaultContextValues:function(e,t,a){e.strokeStyle=a,e.lineWidth=t,e.lineJoin="round",e.lineCap="round"},clearCanvas:function(e){var t=e.getContext("2d");t.clearRect(0,0,e.width,e.height),t.fillStyle="white",t.fillRect(0,0,e.width,e.height)}},he=(a(56),function(e){function t(){var e,a;Object(W.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(V.a)(this,(e=Object(G.a)(t)).call.apply(e,[this].concat(r)))).canvas=null,a.canvasTemp=null,a.ctx=null,a.ctxTemp=null,a.state={canvasSize:{width:1e3,height:300},mouseDown:!1,startPosition:{x:0,y:0}},a.paddings={width:150,height:190},a.updateWindowDimensions=function(){a.setState({canvasSize:me.calcCanvasSize(window,a.paddings)})},a.mouseDown=function(e){var t=me.getRealCoords(a.refs.canvas,e);a.setState({mouseDown:!0,startPosition:t}),a.ctx.moveTo(t.x,t.y),a.ctx.beginPath()},a.mouseMove=function(e){if(!1!==a.state.mouseDown){var t=a.props.drawing,n=t.drawMode,r=t.isFill,c=me.getRealCoords(a.refs.canvas,e),i=a.state.startPosition;switch(a.ctxTemp.clearRect(0,0,a.refs.canvasTemp.width,a.refs.canvasTemp.height),n){case b:return me.draw(a.ctx,c);case v:return me.drawLine(a.ctxTemp,i,c);case E:return me.drawRectangle(a.ctxTemp,i,c,r);case C:return me.drawCircle(a.ctxTemp,i,c,r);case y:return me.drawTriangle(a.ctxTemp,i,c,r)}}},a.mouseUp=function(){a.setState({mouseDown:!1});var e=a.props.drawing.drawMode;[v,E,C,y].includes(e)&&(a.ctx.drawImage(a.canvasTemp,0,0),a.ctxTemp.clearRect(0,0,a.canvasTemp.width,a.canvasTemp.height))},a}return Object(H.a)(t,e),Object(z.a)(t,[{key:"componentWillMount",value:function(){this.updateWindowDimensions()}},{key:"componentDidMount",value:function(){this.canvas=this.refs.canvas,this.canvasTemp=this.refs.canvasTemp,this.props.setCanvasReference(this.canvas),this.ctx=this.canvas.getContext("2d"),this.ctxTemp=this.canvasTemp.getContext("2d"),me.clearCanvas(this.canvas);var e=this.props.drawing,t=e.paintSize,a=e.color;me.setDefaultContextValues(this.ctx,t,a),me.setDefaultContextValues(this.ctxTemp,t,a)}},{key:"componentDidUpdate",value:function(){var e=this.props.drawing,t=e.paintSize,a=e.color;this.ctx.lineWidth=t,this.ctx.strokeStyle=a,this.ctx.fillStyle=a,this.ctxTemp.lineWidth=t,this.ctxTemp.strokeStyle=a,this.ctxTemp.fillStyle=a}},{key:"render",value:function(){var e=this.state.canvasSize,t=e.width,a=e.height;return r.a.createElement("div",{className:"DrawingCanvas row container-fluid "},r.a.createElement("div",{className:"col canvas-container",ref:"container"},r.a.createElement("canvas",{ref:"canvas",className:"canvas-border",width:t,height:a,onMouseDown:this.mouseDown,onMouseMove:this.mouseMove,onMouseUp:this.mouseUp}),r.a.createElement("canvas",{ref:"canvasTemp",width:t,height:a,onMouseDown:this.mouseDown,onMouseMove:this.mouseMove,onMouseUp:this.mouseUp})))}}]),t}(n.Component));var de=Object(s.b)(function(e){return{drawing:e.drawing}},function(e){return{setCanvasReference:function(t){return e(K(t))}}})(he);a(58);function pe(e){if(null!==e){var t=e.toDataURL("image/jpeg").replace(/^data:image\/[^;]+/,"data:application/octet-stream"),a=document.createElement("a");a.href=t,a.download="image.jpg",document.body.appendChild(a),a.click(),document.body.removeChild(a)}}ce.b.add(se.f),ce.b.add(se.e),ce.b.add(se.c),ce.b.add(se.g),ce.b.add(se.b),ce.b.add(se.j),ce.b.add(se.h),ce.b.add(se.i);var ge=function(e){function t(){var e,a;Object(W.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(V.a)(this,(e=Object(G.a)(t)).call.apply(e,[this].concat(r)))).changeDrawMode=function(e){a.props.setDrawMode(e)},a.changePaintSize=function(e){a.props.setPaintSize(e.target.value)},a.changeColor=function(e){a.props.setColor(e.target.value)},a.changeFillMode=function(){a.props.changeFillMode()},a.clearCanvas=function(){me.clearCanvas(a.props.drawing.canvasRef)},a.saveAsJpg=function(){pe(a.props.drawing.canvasRef)},a}return Object(H.a)(t,e),Object(z.a)(t,[{key:"render",value:function(){var e=this,t=this.props.drawing,a=t.drawMode,n=t.paintSize,c=t.color,i=t.isFill;return r.a.createElement("div",{className:"DrawingButtons navbar-coloring-buttons"},r.a.createElement("ul",{className:"navbar-nav mr-auto paint-bar"},r.a.createElement("li",{className:"nav-item paint-size-container"},r.a.createElement("input",{id:"paintSize",type:"range",className:"form-control-range paint-size",min:"1",max:"50",value:n,onChange:this.changePaintSize,title:"Choose color"}),r.a.createElement("span",{className:"badge badge-secondary paint-size-val"},n,"px")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("input",{type:"color",className:"btn btn-secondary paint-color",value:c,onChange:this.changeColor})),r.a.createElement("li",{className:"nav-item"},r.a.createElement("button",{className:"btn btn-secondary",type:"button",onClick:this.changeFillMode,title:"Fill or stroke mode"},i?r.a.createElement(ie.a,{icon:"square-full"}):r.a.createElement(ie.a,{icon:"vector-square"})),r.a.createElement("button",{className:"btn btn-secondary mx-2",type:"button",onClick:this.clearCanvas,title:"Clear canvas"},r.a.createElement(ie.a,{icon:"trash-alt"}))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("button",{"data-mode":b,className:"btn btn-secondary button-mode ".concat(a===b&&"selected"),type:"button",onClick:function(){return e.changeDrawMode(b)},title:"Draw"},r.a.createElement(ie.a,{icon:"pencil-alt"})),r.a.createElement("button",{"data-mode":v,className:"btn btn-secondary button-mode ".concat(a===v&&"selected"),type:"button",onClick:function(){return e.changeDrawMode(v)},title:"Draw line"},r.a.createElement(ie.a,{icon:"minus"})),r.a.createElement("button",{"data-mode":E,className:"btn btn-secondary button-mode button-square ".concat(a===E&&"selected"),type:"button",onClick:function(){return e.changeDrawMode(E)},title:"Draw rectangle"},r.a.createElement(ie.a,{icon:"square"})),r.a.createElement("button",{"data-mode":E,className:"btn btn-secondary button-mode button-square ".concat(a===C&&"selected"),type:"button",onClick:function(){return e.changeDrawMode(C)},title:"Draw circle"},r.a.createElement(ie.a,{icon:"circle"})),r.a.createElement("button",{"data-mode":E,className:"btn btn-secondary button-mode button-square ".concat(a===y&&"selected"),type:"button",onClick:function(){return e.changeDrawMode(y)},title:"Draw triangle"},r.a.createElement(ie.a,{className:"triangle-icon",icon:"caret-up"}))),r.a.createElement("li",{className:"nav-item button-save"},r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:this.saveAsJpg},"Save as *.jpg"))))}}]),t}(n.Component);var fe=Object(s.b)(function(e){return{drawing:e.drawing}},function(e){return{setDrawMode:function(t){return e(function(e){return{type:h,drawMode:e}}(t))},setPaintSize:function(t){return e(function(e){return{type:d,paintSize:e}}(t))},setColor:function(t){return e(function(e){return{type:p,color:e}}(t))},changeFillMode:function(){return e({type:f})}}})(ge);a(60);ce.b.add(se.a);var be=function(e){function t(){return Object(W.a)(this,t),Object(V.a)(this,Object(G.a)(t).apply(this,arguments))}return Object(H.a)(t,e),Object(z.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Drawing"},r.a.createElement("nav",{className:"navbar-coloring navbar-expand-sm"},r.a.createElement("div",{className:"navbar-coloring-brand"},r.a.createElement(Q.a,{to:"/",className:"noHover"},r.a.createElement("span",{className:"back-icon"},r.a.createElement(ie.a,{icon:"angle-left",className:"scale2x"})),r.a.createElement("span",{className:"navbar-brand"},"Drawing"))),r.a.createElement(fe,null)),r.a.createElement(de,null))}}]),t}(n.Component),ve=(a(62),function(e){function t(){var e,a;Object(W.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(V.a)(this,(e=Object(G.a)(t)).call.apply(e,[this].concat(r)))).saveAsJpg=function(){pe(a.props.canvasRef)},a}return Object(H.a)(t,e),Object(z.a)(t,[{key:"render",value:function(){var e=this.props.isLoaded;return r.a.createElement("nav",{className:"Header navbar navbar-expand-sm"},r.a.createElement("div",{className:"Brand"},r.a.createElement(Q.a,{className:"Back",to:"/"},r.a.createElement("span",{className:"back-icon"},r.a.createElement(ie.a,{icon:"angle-left",className:"scale2x"})),r.a.createElement("span",{className:"navbar-brand"},"Change Parameters"))),r.a.createElement("div",{className:"nav-item button-save",style:{display:e?"inline":"none"}},r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:this.saveAsJpg},"Save as *.jpg")))}}]),t}(n.Component)),Ee=Object(s.b)(function(e){return{isLoaded:e.parameters.isLoaded,canvasRef:e.parameters.canvasRef}})(ve),Ce=(a(64),function(e){function t(){var e,a;Object(W.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(V.a)(this,(e=Object(G.a)(t)).call.apply(e,[this].concat(r)))).changeBrightness=function(e){a.props.setBrightness(e.target.value)},a.changeContrast=function(e){a.props.setContrast(e.target.value)},a.changeSaturation=function(e){a.props.setSaturation(e.target.value)},a.changeVignetting=function(e){a.props.setVignetting(e.target.value)},a.changeNumberOfShades=function(e){a.props.setNumberOfShades(e.target.value)},a.changeBlackAndWhite=function(e){a.props.setBlackAndWhite(e.target.checked)},a.changeInvertedColor=function(e){a.props.setInvertedColor(e.target.checked)},a.changeRed=function(e){a.props.setRed(e.target.checked)},a.changeGreen=function(e){a.props.setGreen(e.target.checked)},a.changeBlue=function(e){a.props.setBlue(e.target.checked)},a.mouseDown=function(){a.props.setAbleToChange(!1)},a.mouseUp=function(){a.props.setAbleToChange(!0)},a}return Object(H.a)(t,e),Object(z.a)(t,[{key:"render",value:function(){var e=this,t=this.props.parameters,a=t.brightness,n=t.contrast,c=t.saturation,i=t.vignetting,s=t.numberOfShades,o=t.blackAndWhite,l=t.invertedColor,u=t.red,m=t.green,h=t.blue,d=t.isLoaded;return r.a.createElement("div",{className:"InputsRange"},r.a.createElement(X.c,null,r.a.createElement(X.a,{md:4,xl:4},r.a.createElement("label",{className:"CheckBox",onDoubleClick:function(){return e.props.setRed(!0)}},"r",r.a.createElement("input",{type:"checkbox",id:"red",disabled:!d,onChange:this.changeRed,checked:u}),r.a.createElement("span",{className:"checkmark"}))),r.a.createElement(X.a,{md:4,xl:4},r.a.createElement("label",{className:"CheckBox",onDoubleClick:function(){return e.props.setGreen(!0)}},"g",r.a.createElement("input",{type:"checkbox",id:"blue",disabled:!d,onChange:this.changeGreen,checked:m}),r.a.createElement("span",{className:"checkmark"}))),r.a.createElement(X.a,{md:4,xl:4},r.a.createElement("label",{className:"CheckBox",onDoubleClick:function(){return e.props.setBlue(!0)}},"b",r.a.createElement("input",{type:"checkbox",id:"green",disabled:!d,onChange:this.changeBlue,checked:h}),r.a.createElement("span",{className:"checkmark"})))),r.a.createElement("hr",null),r.a.createElement(X.c,null,r.a.createElement(X.a,null,r.a.createElement("label",{for:"Brightness",onDoubleClick:function(){return e.props.setBrightness(0)}},"Brightness: ",a),r.a.createElement("input",{type:"range",class:"Range custom-range",min:"-255",max:"255",step:"1",id:"brightness",value:a,disabled:!d,onInput:this.changeBrightness,onMouseDown:this.mouseDown,onMouseUp:this.mouseUp}))),r.a.createElement(X.c,null,r.a.createElement(X.a,null,r.a.createElement("label",{for:"Contrast",onDoubleClick:function(){return e.props.setContrast(0)}},"Contrast: ",n),r.a.createElement("input",{type:"range",class:"Range custom-range",min:"-255",max:"255",step:"1",id:"contrast",value:n,disabled:!d,onChange:this.changeContrast,onMouseDown:this.mouseDown,onMouseUp:this.mouseUp}))),r.a.createElement(X.c,null,r.a.createElement(X.a,null,r.a.createElement("label",{for:"Saturation",onDoubleClick:function(){return e.props.setSaturation(1)}},"Saturation: ",c),r.a.createElement("input",{type:"range",class:"Range custom-range",min:"0",max:"2",step:"0.01",id:"saturation",value:c,disabled:!d,onChange:this.changeSaturation,onMouseDown:this.mouseDown,onMouseUp:this.mouseUp}))),r.a.createElement(X.c,null,r.a.createElement(X.a,null,r.a.createElement("label",{for:"Vignetting",onDoubleClick:function(){return e.props.setVignetting(0)}},"Vignetting: ",i),r.a.createElement("input",{type:"range",class:"Range custom-range",min:"0",max:"1",step:"0.01",id:"vignetting",value:i,disabled:!d,onChange:this.changeVignetting,onMouseDown:this.mouseDown,onMouseUp:this.mouseUp}))),r.a.createElement(X.c,null,r.a.createElement(X.a,null,r.a.createElement("label",{for:"Number Of Shades",onDoubleClick:function(){return e.props.setNumberOfShades(0)}},"Number Of Shades: ",s),r.a.createElement("input",{type:"range",class:"Range custom-range",min:"0",max:"16",step:"1",id:"numberOfShades",value:s,disabled:!d,onChange:this.changeNumberOfShades,onMouseDown:this.mouseDown,onMouseUp:this.mouseUp}))),r.a.createElement("hr",null),r.a.createElement(X.c,null,r.a.createElement(X.a,null,r.a.createElement("label",{className:"CheckBox",onDoubleClick:function(){return e.props.setBlackAndWhite(!1)}},"Black and White",r.a.createElement("input",{type:"checkbox",id:"blackAndWhite",disabled:!d,checked:o,onChange:this.changeBlackAndWhite}),r.a.createElement("span",{className:"checkmark"})))),r.a.createElement(X.c,null,r.a.createElement(X.a,null,r.a.createElement("label",{className:"CheckBox",onDoubleClick:function(){return e.props.setInvertedColor(!1)}},"Inverted Color",r.a.createElement("input",{type:"checkbox",id:"invertedColor",disabled:!d,checked:l,onChange:this.changeInvertedColor}),r.a.createElement("span",{className:"checkmark"})))),r.a.createElement("hr",null),r.a.createElement(X.c,null,r.a.createElement(X.a,{md:4,xl:9},"Pixel's color",r.a.createElement("div",{id:"PixelColor",style:{width:"15px",height:"15px",border:"1px solid #471d69"}})),r.a.createElement(X.a,{md:4,xl:3},r.a.createElement("button",{className:"btn btn-info btn-lg ClearParameters",type:"reset",onClick:this.props.resetParameters}," Reset"))))}}]),t}(n.Component));var ye=Object(s.b)(function(e){return{parameters:e.parameters}},function(e){return{setBrightness:function(t){return e(function(e){return{type:N,brightness:parseInt(e)}}(t))},setContrast:function(t){return e(function(e){return{type:k,contrast:parseInt(e)}}(t))},setSaturation:function(t){return e(function(e){return{type:S,saturation:parseFloat(e)}}(t))},setVignetting:function(t){return e(function(e){return{type:x,vignetting:parseFloat(e)}}(t))},setNumberOfShades:function(t){return e(function(e){return{type:T,numberOfShades:parseFloat(e)}}(t))},setBlackAndWhite:function(t){return e(function(e){return{type:D,blackAndWhite:e}}(t))},setInvertedColor:function(t){return e(function(e){return{type:R,invertedColor:e}}(t))},setRed:function(t){return e(function(e){return{type:I,red:e}}(t))},setGreen:function(t){return e(function(e){return{type:M,green:e}}(t))},setBlue:function(t){return e(function(e){return{type:A,blue:e}}(t))},resetParameters:function(){return e(Y())},setAbleToChange:function(t){return e(function(e){return{type:L,ableToChange:e}}(t))}}})(Ce);a(66);function we(e){return e<0?0:e>255?255:e}function Oe(e,t,a,n){return{r:e=we(e+n),g:t=we(t+n),b:a=we(a+n)}}function je(e,t,a,n){var r=259*(n+255)/(255*(259-n));return{r:e=we(r*(e-128)+128),g:t=we(r*(t-128)+128),b:a=we(r*(a-128)+128)}}function Ne(e,t,a,n){var r=Math.sqrt(e*e*.299+t*t*.587+a*a*.114);return{r:e=we(r+(e-r)*n),g:t=we(r+(t-r)*n),b:a=we(r+(a-r)*n)}}function ke(e,t,a,n){if(0===n)return{r:e,g:t,b:a};var r=255/n,c=parseInt((e+t+a)/3/r+.5)*r;return{r:e=we(c),g:t=we(c),b:a=we(c)}}function Se(e,t,a,n){if(!1===n)return{r:e,g:t,b:a};var r=.2126*e+.7152*t+.0722*a;return{r:e=we(r),g:t=we(r),b:a=we(r)}}function xe(e,t,a,n){return!1===n?{r:e,g:t,b:a}:{r:e=255-e,g:t=255-t,b:a=255-a}}var Te=a(17),De=function(e){function t(){return Object(W.a)(this,t),Object(V.a)(this,Object(G.a)(t).apply(this,arguments))}return Object(H.a)(t,e),Object(z.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.refs.canvas;this.props.setCanvasReference(this.refs.canvas),this.ctx=t.getContext("2d");var a=this.refs.image;a.onload=function(){e.ctx.clearRect(0,0,e.props.width,e.props.height),e.ctx.drawImage(a,0,0)}}},{key:"componentDidUpdate",value:function(){if(!1!==this.props.parameters.ableToChange){this.ctx.clearRect(0,0,this.props.width,this.props.height),this.ctx.drawImage(this.refs.image,0,0),0!==this.props.parameters.vignetting&&(this.ctx.fillStyle=function(e,t,a,n){if(0!==n){var r=a.createRadialGradient(e/2,t/2,e/8,e/2,t/2,1/n*e/4);return r.addColorStop(0,"rgba(0,0,0,0)"),r.addColorStop(1,"rgba(0,0,0,0.8)"),r}}(this.props.width,this.props.height,this.ctx,this.props.parameters.vignetting),this.ctx.fillRect(0,0,this.props.width,this.props.height));var e=this.ctx.getImageData(0,0,this.props.width,this.props.height);!function(e,t){for(var a=0;a<t.length;a+=4){var n=xe(t[a],t[a+1],t[a+2],e.invertedColor);n=ke((n=Ne((n=je((n=Oe((n=Se(n.r,n.g,n.b,e.blackAndWhite)).r,n.g,n.b,e.brightness)).r,n.g,n.b,e.contrast)).r,n.g,n.b,e.saturation)).r,n.g,n.b,e.numberOfShades),!1===e.red&&(n.r=0),!1===e.green&&(n.g=0),!1===e.blue&&(n.b=0),t[a]=n.r,t[a+1]=n.g,t[a+2]=n.b}}(this.props.parameters,e.data),this.ctx.putImageData(e,0,0)}}},{key:"render",value:function(){return r.a.createElement("div",{className:"CpCanvas",style:{maxWidth:this.props.width+18}},r.a.createElement("canvas",{ref:"canvas",width:this.props.width,height:this.props.height}),r.a.createElement("img",{ref:"image",src:this.props.name,className:"hidden"}))}}]),t}(n.Component);var Re=Object(Te.a)(function(e){return{parameters:e.parameters}},function(e){return{setCanvasReference:function(t){return e(K(t))}}})(De),Ie=(a(68),function(e){function t(e){var a;return Object(W.a)(this,t),(a=Object(V.a)(this,Object(G.a)(t).call(this,e))).getImageSize=function(e){a.setState({width:null,height:null});var t=URL.createObjectURL(e),n=new Image;n.onload=function(){var e=n.width,t=n.height;a.setState({width:e,height:t})},n.src=t},a.state={file:"",imageViewUrl:"",height:null,width:null},a}return Object(H.a)(t,e),Object(z.a)(t,[{key:"_handleSubmit",value:function(e){e.preventDefault()}},{key:"_handleImageChange",value:function(e){var t=this;e.preventDefault(),this.props.setIsLoaded(!1),this.props.resetParameters();var a=new FileReader,n=e.target.files[0];this.getImageSize(n),a.onloadend=function(){t.props.setIsLoaded(!0),t.setState({file:n,imageViewUrl:a.result})},a.readAsDataURL(n)}},{key:"render",value:function(){var e=this,t=this.state.imageViewUrl,a=null;return a=t&&this.state.width>0&&this.state.height>0?r.a.createElement(Re,{width:this.state.width,height:this.state.height,name:t}):r.a.createElement("div",{className:"canvasHolder"},"Please select an Image",r.a.createElement("br",null),r.a.createElement("canvas",{width:1920,height:1080})),r.a.createElement("div",{className:"ChooseImage"},r.a.createElement("form",{onSubmit:function(t){return e._handleSubmit(t)}},r.a.createElement("input",{className:"fileInput",type:"file",onChange:function(t){return e._handleImageChange(t)}})," Preferred max. (1920 x 1080)"),a)}}]),t}(n.Component));var Me=Object(Te.a)(function(e){return{parameters:e.parameters}},function(e){return{resetParameters:function(){return e(Y())},setIsLoaded:function(t){return e(function(e){return{type:_,isLoaded:e}}(t))}}})(Ie),Ae=function(e){function t(){return Object(W.a)(this,t),Object(V.a)(this,Object(G.a)(t).apply(this,arguments))}return Object(H.a)(t,e),Object(z.a)(t,[{key:"render",value:function(){var e=this.props.parameters.isLoaded?"":"grayscale(0.9) opacity(0.4)";return r.a.createElement("div",null,r.a.createElement(Ee,null),r.a.createElement(X.b,{fluid:!0},r.a.createElement(X.c,null,r.a.createElement(X.a,{md:4,xl:3,style:{filter:e}},r.a.createElement(ye,null)),r.a.createElement(X.a,{md:8,xl:9},r.a.createElement(Me,null)))))}}]),t}(n.Component);var Fe=Object(Te.a)(function(e){return{parameters:e.parameters}})(Ae);a(70);ce.b.add(se.a),ce.b.add(se.d);var _e=function(e){function t(){var e,a;Object(W.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(V.a)(this,(e=Object(G.a)(t)).call.apply(e,[this].concat(r)))).saveAsJpg=function(){pe(a.refs.canvas)},a}return Object(H.a)(t,e),Object(z.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.refs.image,a=this.props.filters.imageURL;t&&a?t.onload=function(){var a=e.refs.canvas.getContext("2d");a.clearRect(0,0,e.props.filters.width,e.props.filters.height),a.filter=e.props.filters.selectedFilter.specification,a.drawImage(t,0,0)}:this.props.history.push("/Filters")}},{key:"render",value:function(){var e=this.props.filters,t=e.imageURL,a=e.selectedFilter,n=e.width,c=e.height;return t?r.a.createElement("div",{className:"Filters"},r.a.createElement("nav",{className:"navbar navbar-expand-sm"},r.a.createElement("div",{className:"Brand"},r.a.createElement(Q.a,{className:"Back",to:"/Filters"},r.a.createElement("span",{className:"back-icon"},r.a.createElement(ie.a,{icon:"angle-left",className:"scale2x"})),r.a.createElement("span",{className:"navbar-brand"},"Filters",r.a.createElement(ie.a,{icon:"long-arrow-alt-right",className:"mx-3"}),a.name))),r.a.createElement("div",{className:"mx-4"},r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:this.saveAsJpg},"Save as *.jpg"))),r.a.createElement("div",{className:"Photo justify-content-center"},r.a.createElement("div",{className:"full-view"},r.a.createElement("img",{ref:"image",className:"max-foto-size",style:{filter:a.specification},src:t,alt:a.name}),r.a.createElement("canvas",{ref:"canvas",width:n,height:c,className:"hidden"})))):r.a.createElement("div",null,"Go back and select image first.")}}]),t}(n.Component);var Le=Object(s.b)(function(e){return{filters:e.filters}},function(e){return{}})(_e),Ue=(a(72),function(e){function t(){return Object(W.a)(this,t),Object(V.a)(this,Object(G.a)(t).apply(this,arguments))}return Object(H.a)(t,e),Object(z.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(J.a,{path:"/",exact:!0,strict:!0,component:te}),r.a.createElement(J.a,{path:"/ChangeParameters",component:Fe}),r.a.createElement(J.a,{path:"/Filters",exact:!0,strict:!0,component:le}),r.a.createElement(J.a,{path:"/Filters/View",component:Le}),r.a.createElement(J.a,{path:"/Drawing",component:be}))}}]),t}(n.Component)),Pe={contactsFetched:function(e){return{type:"FETCH_CONTACTS_SUCCESS",contacts:e}}},Be=Object(q.a)(Object(s.b)(function(e){return{contacts:e.contacts}},Pe)(Ue)),We=function(){return r.a.createElement(s.a,{store:B},r.a.createElement(o.a,{basename:"/ImageChanger"},r.a.createElement(Be,null)))};i.a.render(r.a.createElement(We,null),document.getElementById("root"))}},[[40,2,1]]]);
//# sourceMappingURL=main.22d392da.chunk.js.map