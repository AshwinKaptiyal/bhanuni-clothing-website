"use strict";(self.webpackChunkubold_react=self.webpackChunkubold_react||[]).push([[8117],{47904:function(e,n,t){var r=t(72791);n.Z=function(e){var n=(0,r.useRef)(e);return(0,r.useEffect)((function(){n.current=e}),[e]),n}},39007:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(72791),o=t(47904);function a(e){var n=(0,o.Z)(e);return(0,r.useCallback)((function(){return n.current&&n.current.apply(n,arguments)}),[n])}},99242:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(72791);var o=t(91683),a=Math.pow(2,31)-1;function i(e,n,t){var r=t-Date.now();e.current=r<=a?setTimeout(n,r):setTimeout((function(){return i(e,n,t)}),a)}function s(){var e=function(){var e=(0,r.useRef)(!0),n=(0,r.useRef)((function(){return e.current}));return(0,r.useEffect)((function(){return function(){e.current=!1}}),[]),n.current}(),n=(0,r.useRef)();return(0,o.Z)((function(){return clearTimeout(n.current)})),(0,r.useMemo)((function(){var t=function(){return clearTimeout(n.current)};return{set:function(r,o){void 0===o&&(o=0),e()&&(t(),o<=a?n.current=setTimeout(r,o):i(n,r,Date.now()+o))},clear:t}}),[])}},91683:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(72791);function o(e){var n=function(e){var n=(0,r.useRef)(e);return n.current=e,n}(e);(0,r.useEffect)((function(){return function(){return n.current()}}),[])}},92176:function(e){e.exports=function(e,n,t,r,o,a,i,s){if(!e){var c;if(void 0===n)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[t,r,o,a,i,s],u=0;(c=new Error(n.replace(/%s/g,(function(){return l[u++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},2469:function(e,n,t){var r=t(1413),o=t(45987),a=t(81694),i=t.n(a),s=t(72791),c=t(32592),l=t(39007),u=t(56236),f=t(10162),d=t(72709),p=t(80473),m=t(27472),v=t(66543),h=t(80184),Z=["bsPrefix","show","closeLabel","closeVariant","className","children","variant","onClose","dismissible","transition"],b=(0,m.Z)("h4");b.displayName="DivStyledAsH4";var y=(0,v.Z)("alert-heading",{Component:b}),N=(0,v.Z)("alert-link",{Component:u.Z}),x={variant:"primary",show:!0,transition:d.Z,closeLabel:"Close alert"},g=s.forwardRef((function(e,n){var t=(0,c.Ch)(e,{show:"onClose"}),a=t.bsPrefix,s=t.show,u=t.closeLabel,m=t.closeVariant,v=t.className,b=t.children,y=t.variant,N=t.onClose,x=t.dismissible,g=t.transition,w=(0,o.Z)(t,Z),C=(0,f.vE)(a,"alert"),P=(0,l.Z)((function(e){N&&N(!1,e)})),E=!0===g?d.Z:g,S=(0,h.jsxs)("div",(0,r.Z)((0,r.Z)({role:"alert"},E?void 0:w),{},{ref:n,className:i()(v,C,y&&"".concat(C,"-").concat(y),x&&"".concat(C,"-dismissible")),children:[x&&(0,h.jsx)(p.Z,{onClick:P,"aria-label":u,variant:m}),b]}));return E?(0,h.jsx)(E,(0,r.Z)((0,r.Z)({unmountOnExit:!0},w),{},{ref:void 0,in:s,children:S})):s?S:null}));g.displayName="Alert",g.defaultProps=x,n.Z=Object.assign(g,{Link:N,Heading:y})},43360:function(e,n,t){var r=t(1413),o=t(29439),a=t(45987),i=t(81694),s=t.n(i),c=t(72791),l=t(15341),u=t(10162),f=t(80184),d=["as","bsPrefix","variant","size","active","className"],p=c.forwardRef((function(e,n){var t=e.as,i=e.bsPrefix,c=e.variant,p=e.size,m=e.active,v=e.className,h=(0,a.Z)(e,d),Z=(0,u.vE)(i,"btn"),b=(0,l.FT)((0,r.Z)({tagName:t},h)),y=(0,o.Z)(b,2),N=y[0],x=y[1].tagName;return(0,f.jsx)(x,(0,r.Z)((0,r.Z)((0,r.Z)({},h),N),{},{ref:n,className:s()(v,Z,m&&"active",c&&"".concat(Z,"-").concat(c),p&&"".concat(Z,"-").concat(p),h.href&&h.disabled&&"disabled")}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1},n.Z=p},9140:function(e,n,t){t.d(n,{Z:function(){return U}});var r=t(1413),o=t(45987),a=t(81694),i=t.n(a),s=t(72791),c=t(10162),l=t(66543),u=t(27472),f=t(80184),d=["bsPrefix","className","variant","as"],p=s.forwardRef((function(e,n){var t=e.bsPrefix,a=e.className,s=e.variant,l=e.as,u=void 0===l?"img":l,p=(0,o.Z)(e,d),m=(0,c.vE)(t,"card-img");return(0,f.jsx)(u,(0,r.Z)({ref:n,className:i()(s?"".concat(m,"-").concat(s):m,a)},p))}));p.displayName="CardImg";var m=p,v=t(96040),h=["bsPrefix","className","as"],Z=s.forwardRef((function(e,n){var t=e.bsPrefix,a=e.className,l=e.as,u=void 0===l?"div":l,d=(0,o.Z)(e,h),p=(0,c.vE)(t,"card-header"),m=(0,s.useMemo)((function(){return{cardHeaderBsPrefix:p}}),[p]);return(0,f.jsx)(v.Z.Provider,{value:m,children:(0,f.jsx)(u,(0,r.Z)((0,r.Z)({ref:n},d),{},{className:i()(a,p)}))})}));Z.displayName="CardHeader";var b=Z,y=["bsPrefix","className","bg","text","border","body","children","as"],N=(0,u.Z)("h5"),x=(0,u.Z)("h6"),g=(0,l.Z)("card-body"),w=(0,l.Z)("card-title",{Component:N}),C=(0,l.Z)("card-subtitle",{Component:x}),P=(0,l.Z)("card-link",{Component:"a"}),E=(0,l.Z)("card-text",{Component:"p"}),S=(0,l.Z)("card-footer"),R=(0,l.Z)("card-img-overlay"),j=s.forwardRef((function(e,n){var t=e.bsPrefix,a=e.className,s=e.bg,l=e.text,u=e.border,d=e.body,p=e.children,m=e.as,v=void 0===m?"div":m,h=(0,o.Z)(e,y),Z=(0,c.vE)(t,"card");return(0,f.jsx)(v,(0,r.Z)((0,r.Z)({ref:n},h),{},{className:i()(a,Z,s&&"bg-".concat(s),l&&"text-".concat(l),u&&"border-".concat(u)),children:d?(0,f.jsx)(g,{children:p}):p}))}));j.displayName="Card",j.defaultProps={body:!1};var U=Object.assign(j,{Img:m,Title:w,Subtitle:C,Body:g,Link:P,Text:E,Header:b,Footer:S,ImgOverlay:R})},80473:function(e,n,t){var r=t(1413),o=t(45987),a=t(52007),i=t.n(a),s=t(72791),c=t(81694),l=t.n(c),u=t(80184),f=["className","variant"],d={"aria-label":i().string,onClick:i().func,variant:i().oneOf(["white"])},p=s.forwardRef((function(e,n){var t=e.className,a=e.variant,i=(0,o.Z)(e,f);return(0,u.jsx)("button",(0,r.Z)({ref:n,type:"button",className:l()("btn-close",a&&"btn-close-".concat(a),t)},i))}));p.displayName="CloseButton",p.propTypes=d,p.defaultProps={"aria-label":"Close"},n.Z=p},72709:function(e,n,t){var r,o=t(1413),a=t(45987),i=t(4942),s=t(81694),c=t.n(s),l=t(72791),u=t(27726),f=t(71380),d=t(67202),p=t(85007),m=t(80184),v=["className","children","transitionClasses"],h=(r={},(0,i.Z)(r,u.d0,"show"),(0,i.Z)(r,u.cn,"show"),r),Z=l.forwardRef((function(e,n){var t=e.className,r=e.children,i=e.transitionClasses,s=void 0===i?{}:i,u=(0,a.Z)(e,v),Z=(0,l.useCallback)((function(e,n){(0,d.Z)(e),null==u.onEnter||u.onEnter(e,n)}),[u]);return(0,m.jsx)(p.Z,(0,o.Z)((0,o.Z)({ref:n,addEndListener:f.Z},u),{},{onEnter:Z,childRef:r.ref,children:function(e,n){return l.cloneElement(r,(0,o.Z)((0,o.Z)({},n),{},{className:c()("fade",t,r.props.className,h[e],s[e])}))}}))}));Z.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},Z.displayName="Fade",n.Z=Z},16657:function(e,n,t){t.d(n,{Z:function(){return S}});var r,o=t(1413),a=t(45987),i=t(72791),s=t(81694),c=t.n(s),l=t(99242),u=t(4942),f=t(27726),d=t(72709),p=t(80184),m=(r={},(0,u.Z)(r,f.d0,"showing"),(0,u.Z)(r,f.Ix,"showing show"),r),v=i.forwardRef((function(e,n){return(0,p.jsx)(d.Z,(0,o.Z)((0,o.Z)({},e),{},{ref:n,transitionClasses:m}))}));v.displayName="ToastFade";var h=v,Z=t(39007),b=t(10162),y=t(80473),N=i.createContext({onClose:function(){}}),x=["bsPrefix","closeLabel","closeVariant","closeButton","className","children"],g=i.forwardRef((function(e,n){var t=e.bsPrefix,r=e.closeLabel,s=e.closeVariant,l=e.closeButton,u=e.className,f=e.children,d=(0,a.Z)(e,x);t=(0,b.vE)(t,"toast-header");var m=(0,i.useContext)(N),v=(0,Z.Z)((function(e){null==m||null==m.onClose||m.onClose(e)}));return(0,p.jsxs)("div",(0,o.Z)((0,o.Z)({ref:n},d),{},{className:c()(t,u),children:[f,l&&(0,p.jsx)(y.Z,{"aria-label":r,variant:s,onClick:v,"data-dismiss":"toast"})]}))}));g.displayName="ToastHeader",g.defaultProps={closeLabel:"Close",closeButton:!0};var w=g,C=(0,t(66543).Z)("toast-body"),P=["bsPrefix","className","transition","show","animation","delay","autohide","onClose","bg"],E=i.forwardRef((function(e,n){var t=e.bsPrefix,r=e.className,s=e.transition,u=void 0===s?h:s,f=e.show,d=void 0===f||f,m=e.animation,v=void 0===m||m,Z=e.delay,y=void 0===Z?5e3:Z,x=e.autohide,g=void 0!==x&&x,w=e.onClose,C=e.bg,E=(0,a.Z)(e,P);t=(0,b.vE)(t,"toast");var S=(0,i.useRef)(y),R=(0,i.useRef)(w);(0,i.useEffect)((function(){S.current=y,R.current=w}),[y,w]);var j=(0,l.Z)(),U=!(!g||!d),_=(0,i.useCallback)((function(){U&&(null==R.current||R.current())}),[U]);(0,i.useEffect)((function(){j.set(_,S.current)}),[j,_]);var F=(0,i.useMemo)((function(){return{onClose:w}}),[w]),W=!(!u||!v),k=(0,p.jsx)("div",(0,o.Z)((0,o.Z)({},E),{},{ref:n,className:c()(t,r,C&&"bg-".concat(C),!W&&(d?"show":"hide")),role:"alert","aria-live":"assertive","aria-atomic":"true"}));return(0,p.jsx)(N.Provider,{value:F,children:W&&u?(0,p.jsx)(u,{in:d,unmountOnExit:!0,children:k}):k})}));E.displayName="Toast";var S=Object.assign(E,{Body:C,Header:w})},82431:function(e,n,t){var r=t(1413),o=t(45987),a=t(81694),i=t.n(a),s=t(72791),c=t(10162),l=t(80184),u=["bsPrefix","position","className","as"],f={"top-start":"top-0 start-0","top-center":"top-0 start-50 translate-middle-x","top-end":"top-0 end-0","middle-start":"top-50 start-0 translate-middle-y","middle-center":"top-50 start-50 translate-middle","middle-end":"top-50 end-0 translate-middle-y","bottom-start":"bottom-0 start-0","bottom-center":"bottom-0 start-50 translate-middle-x","bottom-end":"bottom-0 end-0"},d=s.forwardRef((function(e,n){var t=e.bsPrefix,a=e.position,s=e.className,d=e.as,p=void 0===d?"div":d,m=(0,o.Z)(e,u);return t=(0,c.vE)(t,"toast-container"),(0,l.jsx)(p,(0,r.Z)((0,r.Z)({ref:n},m),{},{className:i()(t,a&&"position-absolute ".concat(f[a]),s)}))}));d.displayName="ToastContainer",n.Z=d},66543:function(e,n,t){t.d(n,{Z:function(){return p}});var r=t(1413),o=t(45987),a=t(81694),i=t.n(a),s=/-(.)/g;var c=t(72791),l=t(10162),u=t(80184),f=["className","bsPrefix","as"],d=function(e){return e[0].toUpperCase()+(n=e,n.replace(s,(function(e,n){return n.toUpperCase()}))).slice(1);var n};function p(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.displayName,a=void 0===t?d(e):t,s=n.Component,p=n.defaultProps,m=c.forwardRef((function(n,t){var a=n.className,c=n.bsPrefix,d=n.as,p=void 0===d?s||"div":d,m=(0,o.Z)(n,f),v=(0,l.vE)(c,e);return(0,u.jsx)(p,(0,r.Z)({ref:t,className:i()(a,v)},m))}));return m.defaultProps=p,m.displayName=a,m}},27472:function(e,n,t){var r=t(1413),o=t(72791),a=t(81694),i=t.n(a),s=t(80184);n.Z=function(e){return o.forwardRef((function(n,t){return(0,s.jsx)("div",(0,r.Z)((0,r.Z)({},n),{},{ref:t,className:i()(n.className,e)}))}))}},23688:function(e,n,t){function r(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function o(e){this.setState(function(n){var t=this.constructor.getDerivedStateFromProps(e,n);return null!==t&&void 0!==t?t:null}.bind(this))}function a(e,n){try{var t=this.props,r=this.state;this.props=e,this.state=n,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(t,r)}finally{this.props=t,this.state=r}}function i(e){var n=e.prototype;if(!n||!n.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof e.getDerivedStateFromProps&&"function"!==typeof n.getSnapshotBeforeUpdate)return e;var t=null,i=null,s=null;if("function"===typeof n.componentWillMount?t="componentWillMount":"function"===typeof n.UNSAFE_componentWillMount&&(t="UNSAFE_componentWillMount"),"function"===typeof n.componentWillReceiveProps?i="componentWillReceiveProps":"function"===typeof n.UNSAFE_componentWillReceiveProps&&(i="UNSAFE_componentWillReceiveProps"),"function"===typeof n.componentWillUpdate?s="componentWillUpdate":"function"===typeof n.UNSAFE_componentWillUpdate&&(s="UNSAFE_componentWillUpdate"),null!==t||null!==i||null!==s){var c=e.displayName||e.name,l="function"===typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+c+" uses "+l+" but also contains the following legacy lifecycles:"+(null!==t?"\n  "+t:"")+(null!==i?"\n  "+i:"")+(null!==s?"\n  "+s:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof e.getDerivedStateFromProps&&(n.componentWillMount=r,n.componentWillReceiveProps=o),"function"===typeof n.getSnapshotBeforeUpdate){if("function"!==typeof n.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");n.componentWillUpdate=a;var u=n.componentDidUpdate;n.componentDidUpdate=function(e,n,t){var r=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:t;u.call(this,e,n,r)}}return e}t.r(n),t.d(n,{polyfill:function(){return i}}),r.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0,a.__suppressDeprecationWarning=!0},32592:function(e,n,t){t.d(n,{Ch:function(){return l},$c:function(){return c}});var r=t(87462),o=t(63366),a=t(72791);t(92176);function i(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function s(e){var n=function(e,n){if("object"!==typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"===typeof n?n:String(n)}function c(e,n,t){var r=(0,a.useRef)(void 0!==e),o=(0,a.useState)(n),i=o[0],s=o[1],c=void 0!==e,l=r.current;return r.current=c,!c&&l&&i!==n&&s(n),[c?e:i,(0,a.useCallback)((function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];t&&t.apply(void 0,[e].concat(r)),s(e)}),[t])]}function l(e,n){return Object.keys(n).reduce((function(t,a){var l,u=t,f=u[i(a)],d=u[a],p=(0,o.Z)(u,[i(a),a].map(s)),m=n[a],v=c(d,f,e[m]),h=v[0],Z=v[1];return(0,r.Z)({},p,((l={})[a]=h,l[m]=Z,l))}),e)}t(23688)}}]);
//# sourceMappingURL=8117.de6831fd.chunk.js.map