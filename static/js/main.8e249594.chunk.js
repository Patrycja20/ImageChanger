(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,a){},35:function(e,t,a){e.exports=a(67)},46:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){},60:function(e,t,a){},62:function(e,t,a){},64:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(17),l=a.n(c),i=(a(40),a(11)),o=a(70),s=a(19),u=a(34),m=a(16),d="SET_DRAW_MODE",h="SET_PAINT_SIZE",f="SET_COLOR",p="SET_CANVAS_REF",b="CHANGE_FILL_MODE",g="draw",v="line",E="rectangle",w="circle",y="triangle",O="SET_SELECTED_FILTER",j="SET_IMAGE_URL",C=Object(s.b)({contacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CONTACTS_SUCCESS":return Object(u.a)(t.contacts);default:return e}},drawing:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(m.a)({},e,{drawMode:t.drawMode});case h:return Object(m.a)({},e,{paintSize:t.paintSize});case f:return Object(m.a)({},e,{color:t.color});case p:return Object(m.a)({},e,{canvasRef:t.reference});case b:return Object(m.a)({},e,{isFill:!e.isFill});default:return e}},filters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(m.a)({},e,{selectedFilter:t.selectedFilter});case j:return Object(m.a)({},e,{imageURL:t.imageURL});default:return e}}}),F={drawing:{drawMode:g,paintSize:10,color:"#6edb31",canvasRef:null,isFill:!1},filters:{selectedFilter:null,imageURL:null}},N=Object(s.c)(C,F),S=a(4),k=a(5),x=a(7),D=a(6),T=a(8),M=a(69),R=a(71);a(29);var I=function(e){function t(){return Object(S.a)(this,t),Object(x.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"HeaderFooter"},r.a.createElement("h1",null,"Image Changer"))}}]),t}(n.Component),P=a(68),U=a(3),L=(a(46),function(e){function t(){return Object(S.a)(this,t),Object(x.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"Links d-flex justify-content-around"},r.a.createElement(U.b,null,r.a.createElement(U.a,null,r.a.createElement(P.a,{to:"/ChangeParameters"},r.a.createElement("button",{className:"button1"},"Change Parameters"))),r.a.createElement(U.a,null,r.a.createElement(P.a,{to:"/Filters"},r.a.createElement("button",{className:"button2"},"Filters"))),r.a.createElement(U.a,null,r.a.createElement(P.a,{to:"/Drawing"},r.a.createElement("button",{className:"button3"},"Drawing")))))}}]),t}(n.Component)),_=function(e){function t(){return Object(S.a)(this,t),Object(x.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Container"},r.a.createElement(U.b,null,r.a.createElement(U.a,null,"The code on ",r.a.createElement("a",{href:"https://github.com/Patrycja20/ImageChanger"},"GitHub")),r.a.createElement(U.a,null," \xa9 Copyright Patrycja Madyda i Krzysztof Komar")))}}]),t}(n.Component),z=function(e){function t(){return Object(S.a)(this,t),Object(x.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(I,null),r.a.createElement("br",null),r.a.createElement(L,null),r.a.createElement(_,null))}}]),t}(n.Component),V=(a(48),function(e){function t(){return Object(S.a)(this,t),Object(x.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(k.a)(t,[{key:"changeSelectedFilter",value:function(e){this.props.setSelectedFilter(e)}},{key:"render",value:function(){var e=this,t=this.props.filters.imageURL,a=["Frame","Winter Frame","CoffeeWithMilk Frame","Spring Frame","Tea Frame","BlackWhite Frame","DirtyWindow Frame","Fairyland Frame","ViceVersa Frame"];return r.a.createElement("div",{className:"Images"},r.a.createElement(U.b,null,r.a.createElement(U.a,{className:"FilterImage"},"Original",r.a.createElement(P.a,{to:"/Filters/View"},r.a.createElement("img",{onClick:function(){return e.changeSelectedFilter(a[0])},className:a[0],src:t}))),r.a.createElement(U.a,{className:"FilterImage"},"Winter",r.a.createElement(P.a,{to:"/Filters/View"},r.a.createElement("img",{onClick:function(){return e.changeSelectedFilter(a[1])},className:a[1],src:t}))),r.a.createElement(U.a,{className:"FilterImage"},"Coffee with milk",r.a.createElement(P.a,{to:"/Filters/View"},r.a.createElement("img",{onClick:function(){return e.changeSelectedFilter(a[2])},className:a[2],src:t})))),r.a.createElement(U.b,null,r.a.createElement(U.a,{className:"FilterImage"},"Spring",r.a.createElement(P.a,{to:"/Filters/View"},r.a.createElement("img",{onClick:function(){return e.changeSelectedFilter(a[3])},className:a[3],src:t}))),r.a.createElement(U.a,{className:"FilterImage"},"Tea",r.a.createElement(P.a,{to:"/Filters/View"},r.a.createElement("img",{onClick:function(){return e.changeSelectedFilter(a[4])},className:a[4],src:t}))),r.a.createElement(U.a,{className:"FilterImage"},"Black & White",r.a.createElement(P.a,{to:"/Filters/View"},r.a.createElement("img",{onClick:function(){return e.changeSelectedFilter(a[5])},className:a[5],src:t})))),r.a.createElement(U.b,null,r.a.createElement(U.a,{className:"FilterImage"},"Dirty window",r.a.createElement(P.a,{to:"/Filters/View"},r.a.createElement("img",{onClick:function(){return e.changeSelectedFilter(a[6])},className:a[6],src:t}))),r.a.createElement(U.a,{className:"FilterImage"},"Fairyland",r.a.createElement(P.a,{to:"/Filters/View"},r.a.createElement("img",{onClick:function(){return e.changeSelectedFilter(a[7])},className:a[7],src:t}))),r.a.createElement(U.a,{className:"FilterImage"},"Vice versa",r.a.createElement(P.a,{to:"/Filters/View"},r.a.createElement("img",{onClick:function(){return e.changeSelectedFilter(a[8])},className:a[8],src:t})))))}}]),t}(n.Component));var W=Object(i.b)(function(e){return{filters:e.filters}},function(e){return{setSelectedFilter:function(t){return e(function(e){return{type:O,selectedFilter:e}}(t))}}})(V),A=(a(50),function(e){function t(){return Object(S.a)(this,t),Object(x.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(k.a)(t,[{key:"changeImageURL",value:function(e){this.props.setImageURL(e)}},{key:"_handleSubmit",value:function(e){e.preventDefault()}},{key:"_handleImageChange",value:function(e){var t=this;e.preventDefault();var a=new FileReader,n=e.target.files[0];a.onloadend=function(){t.changeImageURL(a.result)},a.readAsDataURL(n)}},{key:"render",value:function(){var e=this,t=null;return t=this.props.filters.imageURL?r.a.createElement(W,null):r.a.createElement("div",{className:"Info"},"Please select an Image"),r.a.createElement("div",null,r.a.createElement("div",{className:"Filters"},r.a.createElement("div",{className:"HeaderFilters"},r.a.createElement(U.b,null,r.a.createElement("h2",null,r.a.createElement(P.a,{className:"Back",to:"/"},"<"),"Filters"),r.a.createElement("form",{className:"Form",onSubmit:function(t){return e._handleSubmit(t)}},r.a.createElement("input",{type:"file",onChange:function(t){return e._handleImageChange(t)}}))))),r.a.createElement("div",{className:"ContentFilters"},t))}}]),t}(n.Component));var B=Object(i.b)(function(e){return{filters:e.filters}},function(e){return{setImageURL:function(t){return e(function(e){return{type:j,imageURL:e}}(t))}}})(A);function H(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1]?e.fill():e.stroke()}var q={getRealCoords:function(e,t){var a=function(e){for(var t=0,a=0,n=e;n&&"BODY"!==n.tagName;)t+=n.offsetTop-n.scrollTop,a+=n.offsetLeft-n.scrollLeft,n=n.offsetParent;return{top:t,left:a}}(e),n=a.top,r=a.left;return{x:t.pageX-r,y:t.pageY-n}},canvasDownloadPopup:function(e){if(null!==e){var t=e.toDataURL("image/jpeg").replace(/^data:image\/[^;]+/,"data:application/octet-stream"),a=document.createElement("a");a.href=t,a.download="image.jpg",document.body.appendChild(a),a.click(),document.body.removeChild(a)}},draw:function(e,t){e.lineTo(t.x,t.y),e.stroke()},drawLine:function(e,t,a){e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(a.x,a.y),e.closePath(),e.stroke()},drawRectangle:function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e.beginPath(),e.rect(t.x,t.y,a.x-t.x,a.y-t.y),e.closePath(),H(e,n)},drawCircle:function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=Math.sqrt(Math.pow(a.x-t.x,2)+Math.pow(a.y-t.y,2));e.beginPath(),e.arc(t.x,t.y,r,0,2*Math.PI),e.closePath(),H(e,n)},drawTriangle:function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(a.x,a.y),e.lineTo(t.x,a.y),e.closePath(),H(e,n)},calcCanvasSize:function(e,t){return{width:e.innerWidth<400+t.width?400:e.innerWidth-t.width,height:e.innerHeight<300+t.height?300:e.innerHeight-t.height}},setDefaultContextValues:function(e,t,a){e.strokeStyle=a,e.lineWidth=t,e.lineJoin="round",e.lineCap="round"}},G=(a(52),function(e){function t(){var e,a;Object(S.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(x.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(r)))).canvas=null,a.canvasTemp=null,a.ctx=null,a.ctxTemp=null,a.state={canvasSize:{width:400,height:300},mouseDown:!1,startPosition:{x:0,y:0}},a.paddings={width:150,height:190},a.updateWindowDimensions=function(){a.setState({canvasSize:q.calcCanvasSize(window,a.paddings)})},a.mouseDown=function(e){var t=q.getRealCoords(a.refs.canvas,e);a.setState({mouseDown:!0,startPosition:t}),a.ctx.moveTo(t.x,t.y),a.ctx.beginPath()},a.mouseMove=function(e){if(!1!==a.state.mouseDown){var t=a.props.drawing,n=t.drawMode,r=t.isFill,c=q.getRealCoords(a.refs.canvas,e),l=a.state.startPosition;switch(a.ctxTemp.clearRect(0,0,a.refs.canvasTemp.width,a.refs.canvasTemp.height),n){case g:return q.draw(a.ctx,c);case v:return q.drawLine(a.ctxTemp,l,c);case E:return q.drawRectangle(a.ctxTemp,l,c,r);case w:return q.drawCircle(a.ctxTemp,l,c,r);case y:return q.drawTriangle(a.ctxTemp,l,c,r)}}},a.mouseUp=function(){a.setState({mouseDown:!1});var e=a.props.drawing.drawMode;[v,E,w,y].includes(e)&&(a.ctx.drawImage(a.canvasTemp,0,0),a.ctxTemp.clearRect(0,0,a.canvasTemp.width,a.canvasTemp.height))},a}return Object(T.a)(t,e),Object(k.a)(t,[{key:"componentWillMount",value:function(){this.updateWindowDimensions()}},{key:"componentDidMount",value:function(){this.canvas=this.refs.canvas,this.canvasTemp=this.refs.canvasTemp,this.props.setCanvasReference(this.canvas),this.ctx=this.canvas.getContext("2d"),this.ctxTemp=this.canvasTemp.getContext("2d"),this.ctx.fillStyle="white",this.ctx.fillRect(0,0,this.refs.canvas.width,this.refs.canvas.height);var e=this.props.drawing,t=e.paintSize,a=e.color;q.setDefaultContextValues(this.ctx,t,a),q.setDefaultContextValues(this.ctxTemp,t,a)}},{key:"componentDidUpdate",value:function(){var e=this.props.drawing,t=e.paintSize,a=e.color;this.ctx.lineWidth=t,this.ctx.strokeStyle=a,this.ctx.fillStyle=a,this.ctxTemp.lineWidth=t,this.ctxTemp.strokeStyle=a,this.ctxTemp.fillStyle=a}},{key:"render",value:function(){var e=this.state.canvasSize,t=e.width,a=e.height;return r.a.createElement("div",{className:"DrawingCanvas row container-fluid "},r.a.createElement("div",{className:"col canvas-container",ref:"container"},r.a.createElement("canvas",{ref:"canvas",className:"canvas-border",width:t,height:a,onMouseDown:this.mouseDown,onMouseMove:this.mouseMove,onMouseUp:this.mouseUp}),r.a.createElement("canvas",{ref:"canvasTemp",width:t,height:a,onMouseDown:this.mouseDown,onMouseMove:this.mouseMove,onMouseUp:this.mouseUp})))}}]),t}(n.Component));var J=Object(i.b)(function(e){return{drawing:e.drawing}},function(e){return{setCanvasReference:function(t){return e({type:p,reference:t})}}})(G),K=a(12),Y=a(14),X=a(15);a(54);K.b.add(X.e),K.b.add(X.d),K.b.add(X.c),K.b.add(X.f),K.b.add(X.b),K.b.add(X.h),K.b.add(X.g);var Z=function(e){function t(){var e,a;Object(S.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(x.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(r)))).changeDrawMode=function(e){a.props.setDrawMode(e)},a.changePaintSize=function(e){a.props.setPaintSize(e.target.value)},a.changeColor=function(e){a.props.setColor(e.target.value)},a.changeFillMode=function(){a.props.changeFillMode()},a.saveAsJpg=function(){q.canvasDownloadPopup(a.props.drawing.canvasRef)},a}return Object(T.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=this,t=this.props.drawing,a=t.drawMode,n=t.paintSize,c=t.color,l=t.isFill;return r.a.createElement("div",{className:"navbar-coloring-buttons"},r.a.createElement("ul",{className:"navbar-nav mr-auto paint-bar"},r.a.createElement("li",{className:"nav-item paint-size-container"},r.a.createElement("input",{id:"paintSize",type:"range",className:"form-control-range paint-size",min:"1",max:"50",value:n,onChange:this.changePaintSize,title:"Choose color"}),r.a.createElement("span",{className:"badge badge-secondary paint-size-val"},n,"px")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("input",{type:"color",className:"btn btn-secondary paint-color",value:c,onChange:this.changeColor})),r.a.createElement("li",{className:"nav-item"},r.a.createElement("button",{className:"btn btn-secondary",type:"button",onClick:this.changeFillMode,title:"Fill or stroke mode"},l?r.a.createElement(Y.a,{icon:"square-full"}):r.a.createElement(Y.a,{icon:"vector-square"}))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("button",{"data-mode":g,className:"btn btn-secondary button-mode ".concat(a===g&&"selected"),type:"button",onClick:function(){return e.changeDrawMode(g)},title:"Draw"},r.a.createElement(Y.a,{icon:"pencil-alt"})),r.a.createElement("button",{"data-mode":v,className:"btn btn-secondary button-mode ".concat(a===v&&"selected"),type:"button",onClick:function(){return e.changeDrawMode(v)},title:"Draw line"},r.a.createElement(Y.a,{icon:"minus"})),r.a.createElement("button",{"data-mode":E,className:"btn btn-secondary button-mode button-square ".concat(a===E&&"selected"),type:"button",onClick:function(){return e.changeDrawMode(E)},title:"Draw rectangle"},r.a.createElement(Y.a,{icon:"square"})),r.a.createElement("button",{"data-mode":E,className:"btn btn-secondary button-mode button-square ".concat(a===w&&"selected"),type:"button",onClick:function(){return e.changeDrawMode(w)},title:"Draw circle"},r.a.createElement(Y.a,{icon:"circle"})),r.a.createElement("button",{"data-mode":E,className:"btn btn-secondary button-mode button-square ".concat(a===y&&"selected"),type:"button",onClick:function(){return e.changeDrawMode(y)},title:"Draw triangle"},r.a.createElement(Y.a,{className:"triangle-icon",icon:"caret-up"}))),r.a.createElement("li",{className:"nav-item button-save"},r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:this.saveAsJpg},"Save as *.jpg"))))}}]),t}(n.Component);var Q=Object(i.b)(function(e){return{drawing:e.drawing}},function(e){return{setDrawMode:function(t){return e(function(e){return{type:d,drawMode:e}}(t))},setPaintSize:function(t){return e(function(e){return{type:h,paintSize:e}}(t))},setColor:function(t){return e(function(e){return{type:f,color:e}}(t))},changeFillMode:function(){return e({type:b})}}})(Z);a(56);K.b.add(X.a);var $=function(e){function t(){return Object(S.a)(this,t),Object(x.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar-coloring navbar-expand-sm"},r.a.createElement("div",{className:"navbar-coloring-brand"},r.a.createElement(P.a,{to:"/",className:"noHover"},r.a.createElement("span",{className:"raquo-delimeter"},r.a.createElement(Y.a,{icon:"angle-left"})),r.a.createElement("span",{className:"navbar-brand"},"Drawing"))),r.a.createElement(Q,null)),r.a.createElement(J,null))}}]),t}(n.Component),ee=(a(58),function(e){function t(){return Object(S.a)(this,t),Object(x.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Header"},r.a.createElement(U.a,null,r.a.createElement("h2",null,r.a.createElement(P.a,{className:"Back",to:"/"},"<"),"Change Parameters")))}}]),t}(n.Component)),te=(a(60),function(e){function t(){return Object(S.a)(this,t),Object(x.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"InputsRange"},r.a.createElement(U.b,null,r.a.createElement("label",{for:"Brightness"},"Brightness"),r.a.createElement("input",{type:"range",class:"Range custom-range",min:"0",max:"1",step:"0.1",id:"Brightness"})),r.a.createElement(U.b,null,r.a.createElement("label",{for:"Contrast"},"Contrast"),r.a.createElement("input",{type:"range",class:"Range custom-range",min:"0",max:"1",step:"0.1",id:"Contrast"})),r.a.createElement(U.b,null,r.a.createElement("label",{for:"Saturation"},"Saturation"),r.a.createElement("input",{type:"range",class:"Range custom-range",min:"0",max:"1",step:"0.1",id:"Saturation"})),r.a.createElement(U.b,null,r.a.createElement("label",{for:"Sharpness"},"Sharpness"),r.a.createElement("input",{type:"range",class:"Range custom-range",min:"0",max:"1",step:"0.1",id:"Sharpness"})),r.a.createElement(U.b,null,r.a.createElement("label",{for:"Grey Scale"},"Grey Scale"),r.a.createElement("input",{type:"range",class:"Range custom-range",min:"0",max:"1",step:"0.1",id:"Grey Scale"})))}}]),t}(n.Component)),ae=(a(62),function(e){function t(){return Object(S.a)(this,t),Object(x.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){var e=this.refs.canvas.getContext("2d"),t=this.refs.image;t.onload=function(){e.clearRect(0,0,1910,1080),e.drawImage(t,0,0)}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("canvas",{ref:"canvas",width:1910,height:1080}),r.a.createElement("img",{ref:"image",src:this.props.name,className:"hidden"}))}}]),t}(n.Component)),ne=(a(64),function(e){function t(e){var a;return Object(S.a)(this,t),(a=Object(x.a)(this,Object(D.a)(t).call(this,e))).state={file:"",imageViewUrl:""},a}return Object(T.a)(t,e),Object(k.a)(t,[{key:"_handleSubmit",value:function(e){e.preventDefault()}},{key:"_handleImageChange",value:function(e){var t=this;e.preventDefault();var a=new FileReader,n=e.target.files[0];a.onloadend=function(){t.setState({file:n,imageViewUrl:a.result})},a.readAsDataURL(n)}},{key:"render",value:function(){var e=this,t=this.state.imageViewUrl,a=null;return a=t?r.a.createElement(ae,{name:t}):r.a.createElement("div",null,"Please select an Image",r.a.createElement("br",null),r.a.createElement("canvas",{width:1910,height:1080})),r.a.createElement("div",{className:"ChooseImage"},r.a.createElement("form",{onSubmit:function(t){return e._handleSubmit(t)}},r.a.createElement("input",{className:"fileInput",type:"file",onChange:function(t){return e._handleImageChange(t)}})," Preferowane maks. (1920 x 1080)"),r.a.createElement("div",{className:"imgView"},a))}}]),t}(n.Component)),re=function(e){function t(){return Object(S.a)(this,t),Object(x.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ee,null),r.a.createElement("div",{class:"d-flex justify-content-around"},r.a.createElement(U.b,null,r.a.createElement(U.a,null,r.a.createElement(te,null)),r.a.createElement(U.a,null,r.a.createElement(ne,null)))))}}]),t}(n.Component),ce=function(e){function t(){return Object(S.a)(this,t),Object(x.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=this.props.filters,t=e.imageURL,a=e.selectedFilter;return r.a.createElement("div",{className:"Filters"},r.a.createElement("h2",null,r.a.createElement(P.a,{className:"Back",to:"/Filters"},"<"),"Filters -> View"),r.a.createElement("div",{className:"Photo"},r.a.createElement("div",{className:"Images"},r.a.createElement("img",{className:a,src:t}))))}}]),t}(n.Component);var le=Object(i.b)(function(e){return{filters:e.filters}},function(e){return{}})(ce),ie=function(e){function t(){return Object(S.a)(this,t),Object(x.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(M.a,{path:"/",exact:!0,strict:!0,component:z}),r.a.createElement(M.a,{path:"/ChangeParameters",component:re}),r.a.createElement(M.a,{path:"/Filters",exact:!0,strict:!0,component:B}),r.a.createElement(M.a,{path:"/Drawing",component:$}),r.a.createElement(M.a,{path:"/Filters/View",component:le}))}}]),t}(n.Component),oe={contactsFetched:function(e){return{type:"FETCH_CONTACTS_SUCCESS",contacts:e}}},se=Object(R.a)(Object(i.b)(function(e){return{contacts:e.contacts}},oe)(ie)),ue=function(){return r.a.createElement(i.a,{store:N},r.a.createElement(o.a,{basename:"/ImageChanger"},r.a.createElement(se,null)))};l.a.render(r.a.createElement(ue,null),document.getElementById("root"))}},[[35,2,1]]]);
//# sourceMappingURL=main.8e249594.chunk.js.map