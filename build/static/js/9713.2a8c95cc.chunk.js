(self.webpackChunkubold_react=self.webpackChunkubold_react||[]).push([[9713],{75184:function(e,t,a){"use strict";a(72791);var r=a(89743),o=a(2677),s=a(2461),n=a(80184);t.Z=function(e){return(0,n.jsx)(r.Z,{children:(0,n.jsx)(o.Z,{children:(0,n.jsxs)("div",{className:"page-title-box",children:[(0,n.jsx)("div",{className:"page-title-right",children:(0,n.jsxs)(s.Z,{className:"m-0",children:[(0,n.jsx)(s.Z.Item,{href:"/",children:"bhanuni"}),(e.breadCrumbItems||[]).map((function(e,t){return e.active?(0,n.jsx)(s.Z.Item,{active:!0,children:e.label},t):(0,n.jsx)(s.Z.Item,{href:e.path,children:e.label},t)}))]})}),(0,n.jsx)("h4",{className:"page-title",children:e.title})]})})})}},5894:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return y}});var r=a(72791),o=a(89743),s=a(2677),n=a(75184),i=a(13496),c=a(9140),l=a(80184),d=function(){return(0,l.jsx)(c.Z,{children:(0,l.jsxs)(c.Z.Body,{children:[(0,l.jsx)("h4",{className:"header-title mb-3",children:"Line with Data Labels"}),(0,l.jsx)(i.Z,{options:{chart:{height:380,type:"line",zoom:{enabled:!1},toolbar:{show:!1}},colors:["#727cf5","#0acf97"],dataLabels:{enabled:!0},stroke:{width:[3,3],curve:"smooth"},title:{text:"Average High & Low Temperature",align:"left",style:{fontSize:"14px"}},grid:{row:{colors:["transparent","transparent"],opacity:.2},borderColor:"#f1f3fa"},markers:{size:6},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul"],title:{text:"Month"}},yaxis:{title:{text:"Temperature"},min:5,max:40},legend:{position:"top",horizontalAlign:"right",floating:!0,offsetY:-25,offsetX:-5},responsive:[{breakpoint:600,options:{chart:{toolbar:{show:!1}},legend:{show:!1}}}]},series:[{name:"High - 2018",data:[28,29,33,36,32,32,33]},{name:"Low - 2018",data:[12,11,14,18,17,13,13]}],type:"line",className:"apex-charts"})]})})},h=function(){var e={annotations:{yaxis:[{y:8200,borderColor:"#0acf97",label:{borderColor:"#0acf97",style:{color:"#fff",background:"#0acf97"},text:"Support"}}],xaxis:[{x:new Date("23 Nov 2017").getTime(),borderColor:"#775DD0",label:{borderColor:"#775DD0",style:{color:"#fff",background:"#775DD0"},text:"Anno Test"}},{x:new Date("03 Dec 2017").getTime(),borderColor:"#ffbc00",label:{borderColor:"#ffbc00",style:{color:"#fff",background:"#ffbc00"},orientation:"horizontal",text:"New Beginning"}}],points:[{x:new Date("27 Nov 2017").getTime(),y:8506.9,marker:{size:8,fillColor:"#fff",strokeColor:"#fa5c7c",radius:2},label:{borderColor:"#fa5c7c",offsetY:0,style:{color:"#fff",background:"#fa5c7c"},text:"Point Annotation"}}]},chart:{height:380,type:"line",id:"areachart-2"},labels:["13 Nov 2017","14 Nov 2017","15 Nov 2017","16 Nov 2017","17 Nov 2017","20 Nov 2017","21 Nov 2017","22 Nov 2017","23 Nov 2017","24 Nov 2017","27 Nov 2017","28 Nov 2017","29 Nov 2017","30 Nov 2017","01 Dec 2017","04 Dec 2017","05 Dec 2017","06 Dec 2017","07 Dec 2017","08 Dec 2017"],colors:["#39afd1"],dataLabels:{enabled:!1},stroke:{width:[3],curve:"straight"},title:{text:"Line with Annotations",align:"left"},xaxis:{type:"datetime"},grid:{row:{colors:["transparent","transparent"],opacity:.2},borderColor:"#f1f3fa"},responsive:[{breakpoint:600,options:{chart:{toolbar:{show:!1}},legend:{show:!1}}}]};return(0,l.jsx)(c.Z,{children:(0,l.jsxs)(c.Z.Body,{children:[(0,l.jsx)("h4",{className:"header-title mb-3",children:"Line Chart with Annotations"}),(0,l.jsx)(i.Z,{options:e,series:[{name:"Prices",data:[8107.85,8128,8122.9,8165.5,8340.7,8423.7,8423.5,8514.3,8481.85,8487.7,8506.9,8626.2,8668.95,8602.3,8607.55,8512.9,8496.25,8600.65,8881.1,9340.85]}],type:"line",className:"apex-charts"})]})})},f=function(){return(0,l.jsx)(c.Z,{children:(0,l.jsxs)(c.Z.Body,{children:[(0,l.jsx)("h4",{className:"header-title mb-3",children:"Spline Area"}),(0,l.jsx)(i.Z,{options:{chart:{height:380,type:"area"},dataLabels:{enabled:!1},stroke:{width:3,curve:"smooth"},colors:["#727cf5","#6c757d"],legend:{offsetY:-10},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul"]},tooltip:{fixed:{enabled:!1,position:"topRight"}},grid:{row:{colors:["transparent","transparent"],opacity:.2},borderColor:"#f1f3fa"}},series:[{name:"Series 1",data:[31,40,28,51,42,109,100]},{name:"Series 2",data:[11,32,45,32,34,52,41]}],type:"area",className:"apex-charts"})]})})},p=function(){var e={chart:{height:422,type:"area",stacked:!0,events:{selection:function(e,t){console.log(new Date(t.xaxis.min))}}},colors:["#727cf5","#0acf97","#e3eaef"],dataLabels:{enabled:!1},stroke:{width:2,curve:"smooth"},fill:{gradient:{opacityFrom:.6,opacityTo:.8}},legend:{position:"top",horizontalAlign:"left"},xaxis:{type:"datetime"},grid:{row:{colors:["transparent","transparent"],opacity:.2},borderColor:"#f1f3fa"},responsive:[{breakpoint:600,options:{chart:{toolbar:{show:!1}}}}]},t=function(e,t,a){for(var r=0,o=[];r<t;){var s=e,n=Math.floor(Math.random()*(a.max-a.min+1))+a.min;o.push([s,n]),e+=864e5,r++}return o},a=[{name:"South",data:t(new Date("11 Feb 2017").getTime(),20,{min:10,max:60})},{name:"North",data:t(new Date("11 Feb 2017").getTime(),20,{min:10,max:20})},{name:"Central",data:t(new Date("11 Feb 2017").getTime(),20,{min:10,max:15})}];return(0,l.jsx)(c.Z,{children:(0,l.jsxs)(c.Z.Body,{children:[(0,l.jsx)("h4",{className:"header-title mb-3",children:"Stacked Area"}),(0,l.jsx)(i.Z,{options:e,series:a,type:"area",className:"apex-charts"})]})})},x=function(){return(0,l.jsx)(c.Z,{children:(0,l.jsxs)(c.Z.Body,{children:[(0,l.jsx)("h4",{className:"header-title mb-3",children:"Bar Chart"}),(0,l.jsx)(i.Z,{options:{chart:{height:380,type:"bar",toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,dataLabels:{position:"top"}}},dataLabels:{enabled:!0,offsetX:-6,style:{fontSize:"12px",colors:["#fff"]}},colors:["#fa5c7c","#6c757d"],stroke:{show:!0,width:1,colors:["#fff"]},xaxis:{categories:[2001,2002,2003,2004,2005,2006,2007]},legend:{offsetY:-10},states:{hover:{filter:{type:"none"}}},grid:{borderColor:"#f1f3fa"}},series:[{name:"Series 1",data:[44,55,41,64,22,43,21]},{name:"Series 2",data:[53,32,33,52,13,44,32]}],type:"bar",className:"apex-charts"})]})})},m=function(){var e={chart:{height:380,type:"bar",stacked:!0,toolbar:{show:!1}},plotOptions:{bar:{horizontal:!0}},stroke:{show:!1},xaxis:{categories:[2008,2009,2010,2011,2012,2013,2014],labels:{formatter:function(e){return e+"K"}}},yaxis:{title:{text:void 0}},colors:["#727cf5","#0acf97","#fa5c7c","#6c757d","#39afd1"],tooltip:{y:{formatter:function(e){return e+"K"}}},fill:{opacity:1},states:{hover:{filter:{type:"none"}}},legend:{position:"top",horizontalAlign:"center"},grid:{borderColor:"#f1f3fa"}};return(0,l.jsx)(c.Z,{children:(0,l.jsxs)(c.Z.Body,{children:[(0,l.jsx)("h4",{className:"header-title mb-3",children:"Stacked Bar Chart"}),(0,l.jsx)(i.Z,{options:e,series:[{name:"Marine Sprite",data:[44,55,41,37,22,43,21]},{name:"Striking Calf",data:[53,32,33,52,13,43,32]},{name:"Tank Picture",data:[12,17,11,9,15,11,20]},{name:"Bucket Slope",data:[9,7,5,8,6,9,4]},{name:"Reborn Kid",data:[25,12,19,32,25,24,10]}],type:"bar",className:"apex-charts"})]})})},u=function(){return(0,l.jsx)(c.Z,{children:(0,l.jsxs)(c.Z.Body,{children:[(0,l.jsx)("h4",{className:"header-title mb-3",children:"Donut Chart"}),(0,l.jsx)(i.Z,{options:{chart:{height:320,type:"pie"},labels:["Series 1","Series 2","Series 3","Series 4","Series 5"],colors:["#727cf5","#6c757d","#0acf97","#fa5c7c","#e3eaef"],legend:{show:!0,position:"bottom",horizontalAlign:"center",floating:!1,fontSize:"14px",offsetX:0,offsetY:-10},responsive:[{breakpoint:600,options:{chart:{height:240},legend:{show:!1}}}]},series:[44,55,41,17,15],type:"donut",height:320,className:"apex-charts"})]})})},b=function(){return(0,l.jsx)(c.Z,{children:(0,l.jsxs)(c.Z.Body,{children:[(0,l.jsx)("h4",{className:"header-title mb-3",children:"Pie Chart"}),(0,l.jsx)(i.Z,{options:{chart:{height:320,type:"pie"},labels:["Series 1","Series 2","Series 3","Series 4","Series 5"],colors:["#727cf5","#6c757d","#0acf97","#fa5c7c","#e3eaef"],legend:{show:!0,position:"bottom",horizontalAlign:"center",floating:!1,fontSize:"14px",offsetX:0,offsetY:-10},responsive:[{breakpoint:600,options:{chart:{height:240},legend:{show:!1}}}]},series:[44,55,41,17,15],type:"pie",height:320,className:"apex-charts"})]})})},g=function(){return(0,l.jsx)(c.Z,{children:(0,l.jsxs)(c.Z.Body,{children:[(0,l.jsx)("h4",{className:"header-title mb-3",children:"Line, Bar and Area (Mixed)"}),(0,l.jsx)(i.Z,{options:{chart:{height:380,type:"line",stacked:!1,toolbar:{show:!1}},stroke:{width:[0,2,4],curve:"smooth"},plotOptions:{bar:{columnWidth:"50%"}},colors:["#727cf5","#39afd1","#fa5c7c"],fill:{opacity:[.85,.25,1],gradient:{inverseColors:!1,shade:"light",type:"vertical",opacityFrom:.85,opacityTo:.55,stops:[0,100,100,100]}},labels:["01/01/2003","02/01/2003","03/01/2003","04/01/2003","05/01/2003","06/01/2003","07/01/2003","08/01/2003","09/01/2003","10/01/2003","11/01/2003"],markers:{size:0},legend:{offsetY:-10},xaxis:{type:"datetime"},yaxis:{title:{text:"Points"}},tooltip:{shared:!0,intersect:!1,y:{formatter:function(e){return"undefined"!==typeof e?e.toFixed(0)+" points":e}}},grid:{borderColor:"#f1f3fa"}},series:[{name:"Team A",type:"column",data:[23,11,22,27,13,22,37,21,44,22,30]},{name:"Team B",type:"area",data:[44,55,41,67,22,43,21,41,56,27,43]},{name:"Team C",type:"line",data:[30,25,36,30,45,35,64,52,59,36,39]}],type:"line",height:320,className:"apex-charts"})]})})},y=function(){return(0,l.jsxs)(r.Fragment,{children:[(0,l.jsx)(n.Z,{breadCrumbItems:[{label:"Charts",path:"/features/charts/apex"},{label:"Apex Charts",path:"/features/charts/apex",active:!0}],title:"Apex Charts"}),(0,l.jsxs)(o.Z,{children:[(0,l.jsx)(s.Z,{xl:6,children:(0,l.jsx)(d,{})}),(0,l.jsx)(s.Z,{xl:6,children:(0,l.jsx)(h,{})})]}),(0,l.jsxs)(o.Z,{children:[(0,l.jsx)(s.Z,{xl:6,children:(0,l.jsx)(f,{})}),(0,l.jsx)(s.Z,{xl:6,children:(0,l.jsx)(p,{})})]}),(0,l.jsxs)(o.Z,{children:[(0,l.jsx)(s.Z,{xl:6,children:(0,l.jsx)(x,{})}),(0,l.jsx)(s.Z,{xl:6,children:(0,l.jsx)(m,{})})]}),(0,l.jsxs)(o.Z,{children:[(0,l.jsx)(s.Z,{xl:6,children:(0,l.jsx)(u,{})}),(0,l.jsx)(s.Z,{xl:6,children:(0,l.jsx)(b,{})})]}),(0,l.jsx)(o.Z,{children:(0,l.jsx)(s.Z,{children:(0,l.jsx)(g,{})})})]})}},80888:function(e,t,a){"use strict";var r=a(79047);function o(){}function s(){}s.resetWarningCache=o,e.exports=function(){function e(e,t,a,o,s,n){if(n!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:o};return a.PropTypes=a,a}},52007:function(e,t,a){e.exports=a(80888)()},79047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},9140:function(e,t,a){"use strict";a.d(t,{Z:function(){return P}});var r=a(1413),o=a(45987),s=a(81694),n=a.n(s),i=a(72791),c=a(10162),l=a(66543),d=a(27472),h=a(80184),f=["bsPrefix","className","variant","as"],p=i.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,i=e.variant,l=e.as,d=void 0===l?"img":l,p=(0,o.Z)(e,f),x=(0,c.vE)(a,"card-img");return(0,h.jsx)(d,(0,r.Z)({ref:t,className:n()(i?"".concat(x,"-").concat(i):x,s)},p))}));p.displayName="CardImg";var x=p,m=a(96040),u=["bsPrefix","className","as"],b=i.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,l=e.as,d=void 0===l?"div":l,f=(0,o.Z)(e,u),p=(0,c.vE)(a,"card-header"),x=(0,i.useMemo)((function(){return{cardHeaderBsPrefix:p}}),[p]);return(0,h.jsx)(m.Z.Provider,{value:x,children:(0,h.jsx)(d,(0,r.Z)((0,r.Z)({ref:t},f),{},{className:n()(s,p)}))})}));b.displayName="CardHeader";var g=b,y=["bsPrefix","className","bg","text","border","body","children","as"],v=(0,d.Z)("h5"),j=(0,d.Z)("h6"),Z=(0,l.Z)("card-body"),N=(0,l.Z)("card-title",{Component:v}),C=(0,l.Z)("card-subtitle",{Component:j}),w=(0,l.Z)("card-link",{Component:"a"}),k=(0,l.Z)("card-text",{Component:"p"}),S=(0,l.Z)("card-footer"),T=(0,l.Z)("card-img-overlay"),D=i.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,i=e.bg,l=e.text,d=e.border,f=e.body,p=e.children,x=e.as,m=void 0===x?"div":x,u=(0,o.Z)(e,y),b=(0,c.vE)(a,"card");return(0,h.jsx)(m,(0,r.Z)((0,r.Z)({ref:t},u),{},{className:n()(s,b,i&&"bg-".concat(i),l&&"text-".concat(l),d&&"border-".concat(d)),children:f?(0,h.jsx)(Z,{children:p}):p}))}));D.displayName="Card",D.defaultProps={body:!1};var P=Object.assign(D,{Img:x,Title:N,Subtitle:C,Body:Z,Link:w,Text:k,Header:g,Footer:S,ImgOverlay:T})},96040:function(e,t,a){"use strict";var r=a(72791).createContext(null);r.displayName="CardHeaderContext",t.Z=r},66543:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var r=a(1413),o=a(45987),s=a(81694),n=a.n(s),i=/-(.)/g;var c=a(72791),l=a(10162),d=a(80184),h=["className","bsPrefix","as"],f=function(e){return e[0].toUpperCase()+(t=e,t.replace(i,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.displayName,s=void 0===a?f(e):a,i=t.Component,p=t.defaultProps,x=c.forwardRef((function(t,a){var s=t.className,c=t.bsPrefix,f=t.as,p=void 0===f?i||"div":f,x=(0,o.Z)(t,h),m=(0,l.vE)(c,e);return(0,d.jsx)(p,(0,r.Z)({ref:a,className:n()(s,m)},x))}));return x.defaultProps=p,x.displayName=s,x}},27472:function(e,t,a){"use strict";var r=a(1413),o=a(72791),s=a(81694),n=a.n(s),i=a(80184);t.Z=function(e){return o.forwardRef((function(t,a){return(0,i.jsx)("div",(0,r.Z)((0,r.Z)({},t),{},{ref:a,className:n()(t.className,e)}))}))}}}]);
//# sourceMappingURL=9713.2a8c95cc.chunk.js.map