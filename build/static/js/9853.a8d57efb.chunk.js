"use strict";(self.webpackChunkubold_react=self.webpackChunkubold_react||[]).push([[9853],{75184:function(e,a,s){s(72791);var r=s(89743),c=s(2677),t=s(2461),i=s(80184);a.Z=function(e){return(0,i.jsx)(r.Z,{children:(0,i.jsx)(c.Z,{children:(0,i.jsxs)("div",{className:"page-title-box",children:[(0,i.jsx)("div",{className:"page-title-right",children:(0,i.jsxs)(t.Z,{className:"m-0",children:[(0,i.jsx)(t.Z.Item,{href:"/",children:"bhanuni"}),(e.breadCrumbItems||[]).map((function(e,a){return e.active?(0,i.jsx)(t.Z.Item,{active:!0,children:e.label},a):(0,i.jsx)(t.Z.Item,{href:e.path,children:e.label},a)}))]})}),(0,i.jsx)("h4",{className:"page-title",children:e.title})]})})})}},29853:function(e,a,s){s.r(a);var r=s(1413),c=s(15861),t=s(29439),i=s(64687),l=s.n(i),n=s(72791),d=s(11087),o=s(89743),m=s(2677),u=s(9140),x=s(43360),h=s(75184),f=s(80184);a.default=function(){var e=(0,n.useState)([]),a=(0,t.Z)(e,2),s=a[0],i=a[1];(0,n.useEffect)((function(){var e=function(){var e=(0,c.Z)(l().mark((function e(){var a,s,c;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,fetch("http://localhost:8080/ecommerce/user/all",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"bearer "+localStorage.getItem("authToken")}});case 4:return a=e.sent,e.next=7,a.json();case 7:s=e.sent,c=s.map((function(e){return(0,r.Z)((0,r.Z)({},e),{},{color:JSON.parse(e.color)})})),i(c),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.error("Error fetching products:",e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);return(0,f.jsxs)(n.Fragment,{children:[(0,f.jsx)(h.Z,{breadCrumbItems:[{label:"Ecommerce",path:"/apps/ecommerce/products"},{label:"Products",path:"/apps/ecommerce",active:!0}],title:"Products"}),(0,f.jsx)(o.Z,{children:(0,f.jsx)(m.Z,{children:(0,f.jsx)(u.Z,{children:(0,f.jsx)(u.Z.Body,{children:(0,f.jsxs)(o.Z,{className:"justify-content-between",children:[(0,f.jsx)(m.Z,{className:"col-auto",children:(0,f.jsxs)("form",{className:"d-flex flex-wrap align-items-center",children:[(0,f.jsx)("label",{htmlFor:"inputPassword2",className:"visually-hidden",children:"Search"}),(0,f.jsx)("div",{className:"me-3",children:(0,f.jsx)("input",{type:"search",className:"form-control my-1 my-lg-0",id:"inputPassword2",placeholder:"Search...",onChange:function(e){return function(e){if(""===e)i(s);else{var a=s.filter((function(a){return a.title.toLowerCase().includes(e.toLowerCase())}));i(a)}}(e.target.value)}})}),(0,f.jsx)("label",{htmlFor:"status-select",className:"me-2",children:"Sort By"}),(0,f.jsx)("div",{className:"me-sm-3",children:(0,f.jsxs)("select",{className:"form-select my-1 my-lg-0",id:"status-select",children:[(0,f.jsx)("option",{defaultValue:"all",children:"All"}),(0,f.jsx)("option",{value:"popular",children:"Popular"}),(0,f.jsx)("option",{value:"pricelow",children:"Price Low"}),(0,f.jsx)("option",{value:"pricehigh",children:"Price High"}),(0,f.jsx)("option",{value:"soldout",children:"Sold Out"})]})})]})}),(0,f.jsx)(m.Z,{className:"col-auto",children:(0,f.jsxs)("div",{className:"text-lg-end my-1 my-lg-0",children:[(0,f.jsx)(x.Z,{className:"btn btn-success waves-effect waves-light me-1",children:(0,f.jsx)("i",{className:"mdi mdi-cog"})}),(0,f.jsxs)(d.rU,{to:"#",className:"btn btn-danger waves-effect waves-light",children:[(0,f.jsx)("i",{className:"mdi mdi-plus-circle me-1"})," Add New"]})]})})]})})})})}),(0,f.jsx)(o.Z,{children:(s||[]).map((function(e,a){return(0,f.jsx)(m.Z,{md:6,xl:3,children:(0,f.jsx)(u.Z,{className:"product-box",children:(0,f.jsxs)(u.Z.Body,{children:[(0,f.jsxs)("div",{className:"product-action",children:[(0,f.jsx)(d.rU,{to:"#",className:"btn btn-success btn-xs waves-effect waves-light me-1",children:(0,f.jsx)("i",{className:"mdi mdi-pencil"})}),(0,f.jsx)(d.rU,{to:"#",className:"btn btn-danger btn-xs waves-effect waves-light",children:(0,f.jsx)("i",{className:"mdi mdi-close"})})]}),(0,f.jsx)("div",{className:"bg-light",children:(0,f.jsx)("img",{src:e.color[0].imgSrc,alt:"",className:"img-fluid"})}),(0,f.jsx)("div",{className:"product-info",children:(0,f.jsxs)("div",{className:"row align-items-center",children:[(0,f.jsxs)("div",{className:"col",children:[(0,f.jsx)("h5",{className:"font-16 mt-0 sp-line-1",children:(0,f.jsx)(d.rU,{to:"/apps/ecommerce/product-details",className:"text-dark",children:e.title})}),(0,f.jsxs)("div",{className:"text-warning mb-2 font-13",children:[(0,f.jsx)("i",{className:"fa fa-star me-1"}),(0,f.jsx)("i",{className:"fa fa-star me-1"}),(0,f.jsx)("i",{className:"fa fa-star me-1"}),(0,f.jsx)("i",{className:"fa fa-star me-1"}),(0,f.jsx)("i",{className:"fa fa-star"})]}),(0,f.jsx)("h5",{className:"m-0",children:(0,f.jsxs)("span",{className:"text-muted",children:["Stocks: ",e.quantity," pcs"]})})]}),(0,f.jsx)("div",{className:"col-auto",children:(0,f.jsxs)("div",{className:"product-price-tag",children:["\u20b9",e.discount_price," ",(0,f.jsx)("small",{className:"text-muted",children:(0,f.jsxs)("del",{children:["\u20b9",e.price]})})]})})]})})]})})},a)}))}),(0,f.jsx)(o.Z,{children:(0,f.jsx)(m.Z,{children:(0,f.jsxs)("ul",{className:"pagination pagination-rounded justify-content-end mb-3",children:[(0,f.jsx)("li",{className:"page-item",children:(0,f.jsxs)(d.rU,{className:"page-link",to:"#","aria-label":"Previous",children:[(0,f.jsx)("span",{"aria-hidden":"true",children:"\xab"}),(0,f.jsx)("span",{className:"visually-hidden",children:"Previous"})]})}),(0,f.jsx)("li",{className:"page-item active",children:(0,f.jsx)(d.rU,{className:"page-link",to:"#",children:"1"})}),(0,f.jsx)("li",{className:"page-item",children:(0,f.jsx)(d.rU,{className:"page-link",to:"#",children:"2"})}),(0,f.jsx)("li",{className:"page-item",children:(0,f.jsx)(d.rU,{className:"page-link",to:"#",children:"3"})}),(0,f.jsx)("li",{className:"page-item",children:(0,f.jsx)(d.rU,{className:"page-link",to:"#",children:"4"})}),(0,f.jsx)("li",{className:"page-item",children:(0,f.jsx)(d.rU,{className:"page-link",to:"#",children:"5"})}),(0,f.jsx)("li",{className:"page-item",children:(0,f.jsxs)(d.rU,{className:"page-link",to:"#","aria-label":"Next",children:[(0,f.jsx)("span",{"aria-hidden":"true",children:"\xbb"}),(0,f.jsx)("span",{className:"visually-hidden",children:"Next"})]})})]})})})]})}},43360:function(e,a,s){var r=s(1413),c=s(29439),t=s(45987),i=s(81694),l=s.n(i),n=s(72791),d=s(15341),o=s(10162),m=s(80184),u=["as","bsPrefix","variant","size","active","className"],x=n.forwardRef((function(e,a){var s=e.as,i=e.bsPrefix,n=e.variant,x=e.size,h=e.active,f=e.className,p=(0,t.Z)(e,u),j=(0,o.vE)(i,"btn"),N=(0,d.FT)((0,r.Z)({tagName:s},p)),v=(0,c.Z)(N,2),b=v[0],g=v[1].tagName;return(0,m.jsx)(g,(0,r.Z)((0,r.Z)((0,r.Z)({},p),b),{},{ref:a,className:l()(f,j,h&&"active",n&&"".concat(j,"-").concat(n),x&&"".concat(j,"-").concat(x),p.href&&p.disabled&&"disabled")}))}));x.displayName="Button",x.defaultProps={variant:"primary",active:!1,disabled:!1},a.Z=x},9140:function(e,a,s){s.d(a,{Z:function(){return E}});var r=s(1413),c=s(45987),t=s(81694),i=s.n(t),l=s(72791),n=s(10162),d=s(66543),o=s(27472),m=s(80184),u=["bsPrefix","className","variant","as"],x=l.forwardRef((function(e,a){var s=e.bsPrefix,t=e.className,l=e.variant,d=e.as,o=void 0===d?"img":d,x=(0,c.Z)(e,u),h=(0,n.vE)(s,"card-img");return(0,m.jsx)(o,(0,r.Z)({ref:a,className:i()(l?"".concat(h,"-").concat(l):h,t)},x))}));x.displayName="CardImg";var h=x,f=s(96040),p=["bsPrefix","className","as"],j=l.forwardRef((function(e,a){var s=e.bsPrefix,t=e.className,d=e.as,o=void 0===d?"div":d,u=(0,c.Z)(e,p),x=(0,n.vE)(s,"card-header"),h=(0,l.useMemo)((function(){return{cardHeaderBsPrefix:x}}),[x]);return(0,m.jsx)(f.Z.Provider,{value:h,children:(0,m.jsx)(o,(0,r.Z)((0,r.Z)({ref:a},u),{},{className:i()(t,x)}))})}));j.displayName="CardHeader";var N=j,v=["bsPrefix","className","bg","text","border","body","children","as"],b=(0,o.Z)("h5"),g=(0,o.Z)("h6"),Z=(0,d.Z)("card-body"),y=(0,d.Z)("card-title",{Component:b}),w=(0,d.Z)("card-subtitle",{Component:g}),P=(0,d.Z)("card-link",{Component:"a"}),C=(0,d.Z)("card-text",{Component:"p"}),k=(0,d.Z)("card-footer"),U=(0,d.Z)("card-img-overlay"),S=l.forwardRef((function(e,a){var s=e.bsPrefix,t=e.className,l=e.bg,d=e.text,o=e.border,u=e.body,x=e.children,h=e.as,f=void 0===h?"div":h,p=(0,c.Z)(e,v),j=(0,n.vE)(s,"card");return(0,m.jsx)(f,(0,r.Z)((0,r.Z)({ref:a},p),{},{className:i()(t,j,l&&"bg-".concat(l),d&&"text-".concat(d),o&&"border-".concat(o)),children:u?(0,m.jsx)(Z,{children:x}):x}))}));S.displayName="Card",S.defaultProps={body:!1};var E=Object.assign(S,{Img:h,Title:y,Subtitle:w,Body:Z,Link:P,Text:C,Header:N,Footer:k,ImgOverlay:U})},96040:function(e,a,s){var r=s(72791).createContext(null);r.displayName="CardHeaderContext",a.Z=r},66543:function(e,a,s){s.d(a,{Z:function(){return x}});var r=s(1413),c=s(45987),t=s(81694),i=s.n(t),l=/-(.)/g;var n=s(72791),d=s(10162),o=s(80184),m=["className","bsPrefix","as"],u=function(e){return e[0].toUpperCase()+(a=e,a.replace(l,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function x(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=a.displayName,t=void 0===s?u(e):s,l=a.Component,x=a.defaultProps,h=n.forwardRef((function(a,s){var t=a.className,n=a.bsPrefix,u=a.as,x=void 0===u?l||"div":u,h=(0,c.Z)(a,m),f=(0,d.vE)(n,e);return(0,o.jsx)(x,(0,r.Z)({ref:s,className:i()(t,f)},h))}));return h.defaultProps=x,h.displayName=t,h}},27472:function(e,a,s){var r=s(1413),c=s(72791),t=s(81694),i=s.n(t),l=s(80184);a.Z=function(e){return c.forwardRef((function(a,s){return(0,l.jsx)("div",(0,r.Z)((0,r.Z)({},a),{},{ref:s,className:i()(a.className,e)}))}))}}}]);
//# sourceMappingURL=9853.a8d57efb.chunk.js.map