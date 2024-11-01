"use strict";(self.webpackChunkubold_react=self.webpackChunkubold_react||[]).push([[4866],{64866:function(e,n,a){a.r(n),a.d(n,{default:function(){return Z}});var s=a(29439),l=a(72791),t=a(55353),c=a(11087),i=a(99953),r=a(15803),o=a(60364),m=a(66973),u=a(93433),A=a(57689),d=a(17858),x=a(81694),k=a.n(x),f=a(74330),h=a.n(f),g=a(80184),N=function e(n){var a=n.item,t=n.linkClassName,i=n.subMenuClassNames,r=n.activeMenuItems,o=n.toggleMenu,m=(0,l.useState)(r.includes(a.key)),u=(0,s.Z)(m,2),A=u[0],x=u[1];(0,l.useEffect)((function(){x(r.includes(a.key))}),[r,a]);return(0,g.jsxs)("li",{className:k()("menu-item",{"menuitem-active":A}),children:[(0,g.jsxs)(c.rU,{to:"#",onClick:function(){var e=!A;return x(e),o&&o(a,e),!1},"data-menu-key":a.key,"aria-expanded":A,className:k()("menu-link",t,{"menuitem-active":r.includes(a.key)?"active":""}),children:[a.icon&&(0,g.jsxs)("span",{className:"menu-icon",children:[(0,g.jsx)(h(),{icon:a.icon})," "]}),(0,g.jsxs)("span",{className:"menu-text",children:[" ",a.label," "]}),a.badge?(0,g.jsx)("span",{className:"badge bg-".concat(a.badge.variant," rounded-pill ms-auto"),children:a.badge.text}):(0,g.jsx)("span",{className:"menu-arrow"})]}),(0,g.jsx)(d.Z,{in:A,children:(0,g.jsx)("div",{children:(0,g.jsx)("ul",{className:k()(i),children:(a.children||[]).map((function(n,a){return(0,g.jsx)(l.Fragment,{children:n.children?(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(e,{item:n,linkClassName:r.includes(n.key)?"active":"",activeMenuItems:r,subMenuClassNames:"sub-menu",toggleMenu:o})}):(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(j,{item:n,className:r.includes(n.key)?"menuitem-active":"",linkClassName:r.includes(n.key)?"active":""})})},a)}))})})})]})},j=function(e){var n=e.item,a=e.className,s=e.linkClassName;return(0,g.jsx)("li",{className:k()("menu-item",a),children:(0,g.jsx)(b,{item:n,className:s})})},b=function(e){var n=e.item,a=e.className;return(0,g.jsxs)(c.rU,{to:n.url,target:n.target,className:k()("side-nav-link-ref menu-link",a),"data-menu-key":n.key,children:[n.icon&&(0,g.jsxs)("span",{className:"menu-icon",children:[(0,g.jsx)(h(),{icon:n.icon})," "]}),(0,g.jsxs)("span",{className:"menu-text",children:[" ",n.label," "]}),n.badge&&(0,g.jsx)("span",{className:"badge bg-".concat(n.badge.variant," "),children:n.badge.text})]})},p=function(e){var n=e.menuItems,a=(0,A.TH)(),t=(0,l.useRef)(null),c=(0,l.useState)([]),i=(0,s.Z)(c,2),o=i[0],m=i[1],d=function(e,a){a&&m([e.key].concat((0,u.Z)((0,r.Sh)(n,e))))},x=(0,l.useCallback)((function(){var e=document.getElementById("main-side-menu"),s=null;if(e){for(var l=e.getElementsByClassName("side-nav-link-ref"),t=0;t<l.length;++t){var c,i,o;if((null===a||void 0===a||null===(c=a.pathname)||void 0===c?void 0:c.replaceAll("/admin",""))===(null===(i=l[t])||void 0===i||null===(o=i.pathname)||void 0===o?void 0:o.replaceAll("/admin",""))){s=l[t];break}}if(s){var A=s.getAttribute("data-menu-key"),d=(0,r.tD)(n,A);d&&m([d.key].concat((0,u.Z)((0,r.Sh)(n,d))))}}}),[a,n]);return(0,l.useEffect)((function(){x()}),[]),(0,g.jsx)(g.Fragment,{children:(0,g.jsx)("ul",{className:"menu",ref:t,id:"main-side-menu",children:(n||[]).map((function(e,n){return(0,g.jsx)(l.Fragment,{children:e.isTitle?(0,g.jsx)("li",{className:k()("menu-title",{"mt-2":0!==n}),children:e.label}):(0,g.jsx)(g.Fragment,{children:e.children?(0,g.jsx)(N,{item:e,toggleMenu:d,subMenuClassNames:"sub-menu",activeMenuItems:o,linkClassName:"menu-link"}):(0,g.jsx)(j,{item:e,linkClassName:"menu-link",className:o.includes(e.key)?"menuitem-active":""})})},n)}))})})},y=a(1642),v=a(87812),D=a(42874),I=a(60714),S=a(12007),Q=a(74600),Y=function(){var e=(0,l.useState)(!1),n=(0,s.Z)(e,2),a=n[0],i=n[1],r=function(){i(!a)};return(0,g.jsxs)("div",{className:"user-box text-center",children:[(0,g.jsx)("img",{src:y,alt:"",title:"Mat Helme",className:"rounded-circle avatar-md"}),(0,g.jsxs)(t.Z,{show:a,onToggle:r,children:[(0,g.jsx)(t.Z.Toggle,{id:"dropdown-notification",as:"a",onClick:r,className:"cursor-pointer text-dark h5 mt-2 mb-1 d-block",children:"Geneva Kennedy"}),(0,g.jsx)(t.Z.Menu,{className:"user-pro-dropdown",children:(0,g.jsx)("div",{onClick:r,children:([{label:"My Account",icon:"fe-user",redirectTo:"#"},{label:"Settings",icon:"fe-settings",redirectTo:"#"},{label:"Lock Screen",icon:"fe-lock",redirectTo:"/auth/lock-screen"},{label:"Logout",icon:"fe-log-out",redirectTo:"/auth/logout"}]||[]).map((function(e,n){return(0,g.jsxs)(c.rU,{to:e.redirectTo,className:"dropdown-item notify-item",children:[(0,g.jsx)("i",{className:"".concat(e.icon," me-1")}),(0,g.jsx)("span",{children:e.label})]},n+"-profile-menu")}))})})]}),(0,g.jsx)("p",{className:"text-muted",children:"Admin Head"})]})},K=function(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(Y,{}),(0,g.jsx)(p,{menuItems:(0,r.vf)()}),(0,g.jsx)("div",{className:"clearfix"})]})},R=function(e){var n=e.isCondensed,a=e.hideLogo,s=(0,l.useRef)(null),t=(0,o.v9)((function(e){return{layoutType:e.Layout.layoutType,leftSideBarType:e.Layout.leftSideBarType}})).layoutType,r=function(e){s&&s.current&&s.current.contains(e.target)||document.body&&document.body.classList.remove("sidebar-enable")};return(0,l.useEffect)((function(){return document.addEventListener("mousedown",r,!1),function(){document.removeEventListener("mousedown",r,!1)}}),[]),(0,g.jsx)(l.Fragment,{children:(0,g.jsxs)("div",{className:"app-menu",ref:s,children:[!a&&(0,g.jsxs)("div",{className:"logo-box",children:[(0,g.jsxs)(c.rU,{to:"/",className:"logo logo-dark text-center",children:[(0,g.jsx)("span",{className:"logo-sm",children:(0,g.jsx)("img",{src:v,alt:"",height:"22"})}),(0,g.jsx)("span",{className:"logo-lg",children:(0,g.jsx)("img",{src:t===m.Tj.LAYOUT_TWO_COLUMN?I:D,alt:"",height:"20"})})]}),(0,g.jsxs)(c.rU,{to:"/",className:"logo logo-light text-center",children:[(0,g.jsx)("span",{className:"logo-sm",children:(0,g.jsx)("img",{src:v,alt:"",height:"22"})}),(0,g.jsx)("span",{className:"logo-lg",children:(0,g.jsx)("img",{src:t===m.Tj.LAYOUT_TWO_COLUMN?Q:S,alt:"",height:"20"})})]})]}),!n&&(0,g.jsx)(i.Z,{className:"scrollbar show h-100",scrollbarMaxSize:320,children:(0,g.jsx)(K,{})}),n&&(0,g.jsx)(K,{})]})})};R.defaultProps={isCondensed:!1};var Z=R},1642:function(e){e.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=4866.7195b98f.chunk.js.map