(self.webpackChunkubold_react=self.webpackChunkubold_react||[]).push([[4941],{80888:function(e,a,i){"use strict";var s=i(79047);function r(){}function t(){}t.resetWarningCache=r,e.exports=function(){function e(e,a,i,r,t,o){if(o!==s){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function a(){return e}e.isRequired=e;var i={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:t,resetWarningCache:r};return i.PropTypes=i,i}},52007:function(e,a,i){e.exports=i(80888)()},79047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},96040:function(e,a,i){"use strict";var s=i(72791).createContext(null);s.displayName="CardHeaderContext",a.Z=s},73053:function(e,a,i){"use strict";var s=i(1413),r=i(45987),t=i(81694),o=i.n(t),l=i(72791),n=i(323),c=i(10162),d=i(80184),f=["bsPrefix","className","children","controlId","label"],u=l.forwardRef((function(e,a){var i=e.bsPrefix,t=e.className,l=e.children,u=e.controlId,m=e.label,v=(0,r.Z)(e,f);return i=(0,c.vE)(i,"form-floating"),(0,d.jsxs)(n.Z,(0,s.Z)((0,s.Z)({ref:a,className:o()(t,i),controlId:u},v),{},{children:[l,(0,d.jsx)("label",{htmlFor:u,children:m})]}))}));u.displayName="FloatingLabel",a.Z=u},21827:function(e,a,i){"use strict";i.d(a,{Z:function(){return J}});var s=i(1413),r=i(45987),t=i(81694),o=i.n(t),l=i(52007),n=i.n(l),c=i(72791),d=i(80184),f=["as","className","type","tooltip"],u={type:n().string,tooltip:n().bool,as:n().elementType},m=c.forwardRef((function(e,a){var i=e.as,t=void 0===i?"div":i,l=e.className,n=e.type,c=void 0===n?"valid":n,u=e.tooltip,m=void 0!==u&&u,v=(0,r.Z)(e,f);return(0,d.jsx)(t,(0,s.Z)((0,s.Z)({},v),{},{ref:a,className:o()(l,"".concat(c,"-").concat(m?"tooltip":"feedback"))}))}));m.displayName="Feedback",m.propTypes=u;var v=m,p=i(96882),b=i(84934),x=i(10162),Z=["bsPrefix","className","htmlFor"],y=c.forwardRef((function(e,a){var i=e.bsPrefix,t=e.className,l=e.htmlFor,n=(0,r.Z)(e,Z),f=(0,c.useContext)(b.Z).controlId;return i=(0,x.vE)(i,"form-check-label"),(0,d.jsx)("label",(0,s.Z)((0,s.Z)({},n),{},{ref:a,htmlFor:l||f,className:o()(t,i)}))}));y.displayName="FormCheckLabel";var h=y,N=["id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],I=c.forwardRef((function(e,a){var i=e.id,t=e.bsPrefix,l=e.bsSwitchPrefix,n=e.inline,f=void 0!==n&&n,u=e.disabled,m=void 0!==u&&u,Z=e.isValid,y=void 0!==Z&&Z,I=e.isInvalid,P=void 0!==I&&I,j=e.feedbackTooltip,k=void 0!==j&&j,w=e.feedback,F=e.feedbackType,C=e.className,g=e.style,R=e.title,T=void 0===R?"":R,O=e.type,E=void 0===O?"checkbox":O,S=e.label,_=e.children,z=e.as,L=void 0===z?"input":z,V=(0,r.Z)(e,N);t=(0,x.vE)(t,"form-check"),l=(0,x.vE)(l,"form-switch");var H=(0,c.useContext)(b.Z).controlId,W=(0,c.useMemo)((function(){return{controlId:i||H}}),[H,i]),D=null!=S&&!1!==S&&!_,G=(0,d.jsx)(p.Z,(0,s.Z)((0,s.Z)({},V),{},{type:"switch"===E?"checkbox":E,ref:a,isValid:y,isInvalid:P,disabled:m,as:L}));return(0,d.jsx)(b.Z.Provider,{value:W,children:(0,d.jsx)("div",{style:g,className:o()(C,S&&t,f&&"".concat(t,"-inline"),"switch"===E&&l),children:_||(0,d.jsxs)(d.Fragment,{children:[G,D&&(0,d.jsx)(h,{title:T,children:S}),w&&(0,d.jsx)(v,{type:F,tooltip:k,children:w})]})})})}));I.displayName="FormCheck";var P=Object.assign(I,{Input:p.Z,Label:h}),j=i(4942),k=(i(42391),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),w=c.forwardRef((function(e,a){var i,t,l=e.bsPrefix,n=e.type,f=e.size,u=e.htmlSize,m=e.id,v=e.className,p=e.isValid,Z=void 0!==p&&p,y=e.isInvalid,h=void 0!==y&&y,N=e.plaintext,I=e.readOnly,P=e.as,w=void 0===P?"input":P,F=(0,r.Z)(e,k),C=(0,c.useContext)(b.Z).controlId;(l=(0,x.vE)(l,"form-control"),N)?i=(0,j.Z)({},"".concat(l,"-plaintext"),!0):(t={},(0,j.Z)(t,l,!0),(0,j.Z)(t,"".concat(l,"-").concat(f),f),i=t);return(0,d.jsx)(w,(0,s.Z)((0,s.Z)({},F),{},{type:n,size:u,ref:a,readOnly:I,id:m||C,className:o()(v,i,Z&&"is-valid",h&&"is-invalid","color"===n&&"".concat(l,"-color"))}))}));w.displayName="FormControl";var F=Object.assign(w,{Feedback:v}),C=(0,i(66543).Z)("form-floating"),g=i(323),R=i(2677),T=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],O=c.forwardRef((function(e,a){var i=e.as,t=void 0===i?"label":i,l=e.bsPrefix,n=e.column,f=e.visuallyHidden,u=e.className,m=e.htmlFor,v=(0,r.Z)(e,T),p=(0,c.useContext)(b.Z).controlId;l=(0,x.vE)(l,"form-label");var Z="col-form-label";"string"===typeof n&&(Z="".concat(Z," ").concat(Z,"-").concat(n));var y=o()(u,l,f&&"visually-hidden",n&&Z);return m=m||p,n?(0,d.jsx)(R.Z,(0,s.Z)({ref:a,as:"label",className:y,htmlFor:m},v)):(0,d.jsx)(t,(0,s.Z)({ref:a,className:y,htmlFor:m},v))}));O.displayName="FormLabel",O.defaultProps={column:!1,visuallyHidden:!1};var E=O,S=["bsPrefix","className","id"],_=c.forwardRef((function(e,a){var i=e.bsPrefix,t=e.className,l=e.id,n=(0,r.Z)(e,S),f=(0,c.useContext)(b.Z).controlId;return i=(0,x.vE)(i,"form-range"),(0,d.jsx)("input",(0,s.Z)((0,s.Z)({},n),{},{type:"range",ref:a,className:o()(t,i),id:l||f}))}));_.displayName="FormRange";var z=_,L=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],V=c.forwardRef((function(e,a){var i=e.bsPrefix,t=e.size,l=e.htmlSize,n=e.className,f=e.isValid,u=void 0!==f&&f,m=e.isInvalid,v=void 0!==m&&m,p=e.id,Z=(0,r.Z)(e,L),y=(0,c.useContext)(b.Z).controlId;return i=(0,x.vE)(i,"form-select"),(0,d.jsx)("select",(0,s.Z)((0,s.Z)({},Z),{},{size:l,ref:a,className:o()(n,i,t&&"".concat(i,"-").concat(t),u&&"is-valid",v&&"is-invalid"),id:p||y}))}));V.displayName="FormSelect";var H=V,W=["bsPrefix","className","as","muted"],D=c.forwardRef((function(e,a){var i=e.bsPrefix,t=e.className,l=e.as,n=void 0===l?"small":l,c=e.muted,f=(0,r.Z)(e,W);return i=(0,x.vE)(i,"form-text"),(0,d.jsx)(n,(0,s.Z)((0,s.Z)({},f),{},{ref:a,className:o()(t,i,c&&"text-muted")}))}));D.displayName="FormText";var G=D,M=c.forwardRef((function(e,a){return(0,d.jsx)(P,(0,s.Z)((0,s.Z)({},e),{},{ref:a,type:"switch"}))}));M.displayName="Switch";var U=Object.assign(M,{Input:P.Input,Label:P.Label}),q=i(73053),A=["className","validated","as"],B={_ref:n().any,validated:n().bool,as:n().elementType},Y=c.forwardRef((function(e,a){var i=e.className,t=e.validated,l=e.as,n=void 0===l?"form":l,c=(0,r.Z)(e,A);return(0,d.jsx)(n,(0,s.Z)((0,s.Z)({},c),{},{ref:a,className:o()(i,t&&"was-validated")}))}));Y.displayName="Form",Y.propTypes=B;var J=Object.assign(Y,{Group:g.Z,Control:F,Floating:C,Check:P,Switch:U,Label:E,Text:G,Range:z,Select:H,FloatingLabel:q.Z})},96882:function(e,a,i){"use strict";var s=i(1413),r=i(45987),t=i(81694),o=i.n(t),l=i(72791),n=i(84934),c=i(10162),d=i(80184),f=["id","bsPrefix","className","type","isValid","isInvalid","as"],u=l.forwardRef((function(e,a){var i=e.id,t=e.bsPrefix,u=e.className,m=e.type,v=void 0===m?"checkbox":m,p=e.isValid,b=void 0!==p&&p,x=e.isInvalid,Z=void 0!==x&&x,y=e.as,h=void 0===y?"input":y,N=(0,r.Z)(e,f),I=(0,l.useContext)(n.Z).controlId;return t=(0,c.vE)(t,"form-check-input"),(0,d.jsx)(h,(0,s.Z)((0,s.Z)({},N),{},{ref:a,type:v,id:i||I,className:o()(u,t,b&&"is-valid",Z&&"is-invalid")}))}));u.displayName="FormCheckInput",a.Z=u},84934:function(e,a,i){"use strict";var s=i(72791).createContext({});a.Z=s},323:function(e,a,i){"use strict";var s=i(1413),r=i(45987),t=i(72791),o=i(84934),l=i(80184),n=["controlId","as"],c=t.forwardRef((function(e,a){var i=e.controlId,c=e.as,d=void 0===c?"div":c,f=(0,r.Z)(e,n),u=(0,t.useMemo)((function(){return{controlId:i}}),[i]);return(0,l.jsx)(o.Z.Provider,{value:u,children:(0,l.jsx)(d,(0,s.Z)((0,s.Z)({},f),{},{ref:a}))})}));c.displayName="FormGroup",a.Z=c},42391:function(e){"use strict";var a=function(){};e.exports=a}}]);
//# sourceMappingURL=4941.0dd867b4.chunk.js.map