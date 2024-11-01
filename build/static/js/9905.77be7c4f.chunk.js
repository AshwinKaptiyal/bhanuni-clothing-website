"use strict";(self.webpackChunkubold_react=self.webpackChunkubold_react||[]).push([[9905],{75184:function(e,s,l){l(72791);var a=l(89743),n=l(2677),r=l(2461),i=l(80184);s.Z=function(e){return(0,i.jsx)(a.Z,{children:(0,i.jsx)(n.Z,{children:(0,i.jsxs)("div",{className:"page-title-box",children:[(0,i.jsx)("div",{className:"page-title-right",children:(0,i.jsxs)(r.Z,{className:"m-0",children:[(0,i.jsx)(r.Z.Item,{href:"/",children:"bhanuni"}),(e.breadCrumbItems||[]).map((function(e,s){return e.active?(0,i.jsx)(r.Z.Item,{active:!0,children:e.label},s):(0,i.jsx)(r.Z.Item,{href:e.path,children:e.label},s)}))]})}),(0,i.jsx)("h4",{className:"page-title",children:e.title})]})})})}},38459:function(e,s,l){l.d(s,{y:function(){return p},J:function(){return t}});var a=l(1413),n=l(72791),r=l(87705),i=l(80184),t=function(e){var s=e.defaultValues,l=e.resolver,t=e.children,c=e.onSubmit,d=e.formClass,m=(0,r.cI)({defaultValues:s,resolver:l}),o=m.handleSubmit,h=m.register,x=m.control,u=m.formState.errors;return(0,i.jsx)("form",{onSubmit:o(c),className:d,noValidate:!0,children:Array.isArray(t)?t.map((function(e){return e.props&&e.props.name?n.createElement(e.type,(0,a.Z)({},(0,a.Z)((0,a.Z)({},e.props),{},{register:h,key:e.props.name,errors:u,control:x}))):e})):t})},c=l(45987),d=l(29439),m=l(99410),o=l(21827),h=l(81694),x=l.n(h),u=["label","type","name","placeholder","register","errors","control","className","labelClassName","containerClass","refCallback","children","rows"],j=function(e){var s=e.name,l=e.placeholder,r=e.refCallback,t=e.errors,c=(e.control,e.register),h=e.className,u=(0,n.useState)(!1),j=(0,d.Z)(u,2),p=j[0],Z=j[1];return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(m.Z,{className:"mb-0",children:[(0,i.jsx)(o.Z.Control,(0,a.Z)((0,a.Z)({type:p?"text":"password",placeholder:l,name:s,id:s,as:"input",ref:function(e){r&&r(e)},className:h,isInvalid:!(!t||!t[s])},c?c(s):{}),{},{autoComplete:s})),(0,i.jsx)("div",{className:x()("input-group-text","input-group-password",{"show-password":p}),"data-password":p?"true":"false",children:(0,i.jsx)("span",{className:"password-eye",onClick:function(){Z(!p)}})})]})})},p=function(e){var s=e.label,l=e.type,n=e.name,r=e.placeholder,t=e.register,d=e.errors,m=(e.control,e.className),h=e.labelClassName,x=e.containerClass,p=e.refCallback,Z=e.children,b=e.rows,N=(0,c.Z)(e,u),f="textarea"===l?"textarea":"select"===l?"select":"input";return(0,i.jsx)(i.Fragment,{children:"hidden"===l?(0,i.jsx)("input",(0,a.Z)((0,a.Z)({type:l,name:n},t?t(n):{}),N)):(0,i.jsx)(i.Fragment,{children:"password"===l?(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(o.Z.Group,{className:x,children:[s?(0,i.jsxs)(i.Fragment,{children:[" ",(0,i.jsx)(o.Z.Label,{className:h,children:s})," ",Z," "]}):null,(0,i.jsx)(j,{name:n,placeholder:r,refCallback:p,errors:d,register:t,className:m}),d&&d[n]?(0,i.jsx)(o.Z.Control.Feedback,{type:"invalid",className:"d-block",children:d[n].message}):null]})}):(0,i.jsx)(i.Fragment,{children:"checkbox"===l||"radio"===l?(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(o.Z.Group,{className:x,children:[(0,i.jsx)(o.Z.Check,(0,a.Z)((0,a.Z)({type:l,label:s,name:n,id:n,ref:function(e){p&&p(e)},className:m,isInvalid:!(!d||!d[n])},t?t(n):{}),N)),d&&d[n]?(0,i.jsx)(o.Z.Control.Feedback,{type:"invalid",children:d[n].message}):null]})}):(0,i.jsxs)(o.Z.Group,{className:x,children:[s?(0,i.jsx)(o.Z.Label,{className:h,children:s}):null,(0,i.jsx)(o.Z.Control,(0,a.Z)((0,a.Z)((0,a.Z)({type:l,placeholder:r,name:n,id:n,as:f,ref:function(e){p&&p(e)},className:m,isInvalid:!(!d||!d[n])},t?t(n):{}),{},{rows:b},N),{},{autoComplete:n,children:Z||null})),d&&d[n]?(0,i.jsx)(o.Z.Control.Feedback,{type:"invalid",children:d[n].message}):null]})})})})}},79905:function(e,s,l){l.r(s);var a=l(72791),n=l(9140),r=l(21827),i=l(89743),t=l(2677),c=l(43360),d=l(3593),m=l(42555),o=l(81724),h=l(61265),x=l(75184),u=l(38459),j=l(80184),p=function(){return(0,j.jsx)(n.Z,{children:(0,j.jsxs)(n.Z.Body,{children:[(0,j.jsx)("h4",{className:"header-title mb-3",children:" Basic Wizard"}),(0,j.jsx)(m.en,{children:(0,j.jsxs)(m.Rg,{children:[(0,j.jsx)(m.h8,{id:"login",render:function(e){var s=e.next;return(0,j.jsxs)(r.Z,{children:[(0,j.jsxs)(r.Z.Group,{as:i.Z,className:"mb-3",children:[(0,j.jsx)(r.Z.Label,{htmlFor:"exampleEmail",column:!0,md:3,children:"Email"}),(0,j.jsx)(t.Z,{md:9,children:(0,j.jsx)(r.Z.Control,{type:"email",name:"exampleEmail",id:"exampleEmail",placeholder:"Enter email"})})]}),(0,j.jsxs)(r.Z.Group,{as:i.Z,className:"mb-3",children:[(0,j.jsx)(r.Z.Label,{htmlFor:"examplePassword",column:!0,md:3,children:"Password"}),(0,j.jsx)(t.Z,{md:9,children:(0,j.jsx)(r.Z.Control,{type:"password",name:"examplePassword",id:"examplePassword",placeholder:"password placeholder",defaultValue:"12345"})})]}),(0,j.jsxs)(r.Z.Group,{as:i.Z,className:"mb-3",children:[(0,j.jsx)(r.Z.Label,{htmlFor:"examplerePassword",column:!0,md:3,children:"Re-Password"}),(0,j.jsx)(t.Z,{md:9,children:(0,j.jsx)(r.Z.Control,{type:"password",name:"exampleRepassword",id:"examplerePassword",placeholder:"password",defaultValue:"12345"})})]}),(0,j.jsx)("ul",{className:"list-inline wizard mb-0",children:(0,j.jsx)("li",{className:"next list-inline-item float-end",children:(0,j.jsx)(c.Z,{onClick:s,variant:"success",children:"Next"})})})]})}}),(0,j.jsx)(m.h8,{id:"gandalf",render:function(e){var s=e.next,l=e.previous;return(0,j.jsxs)(r.Z,{children:[(0,j.jsxs)(r.Z.Group,{as:i.Z,className:"mb-3",children:[(0,j.jsx)(r.Z.Label,{htmlFor:"fname",column:!0,md:3,children:"First Name"}),(0,j.jsx)(t.Z,{md:9,children:(0,j.jsx)(r.Z.Control,{type:"text",name:"fname",id:"fname",placeholder:"Enter first name"})})]}),(0,j.jsxs)(r.Z.Group,{as:i.Z,className:"mb-3",children:[(0,j.jsx)(r.Z.Label,{htmlFor:"lname",column:!0,md:3,children:"Last Name"}),(0,j.jsx)(t.Z,{md:9,children:(0,j.jsx)(r.Z.Control,{type:"text",name:"lname",id:"lname",placeholder:"enter last name"})})]}),(0,j.jsxs)(r.Z.Group,{as:i.Z,className:"mb-3",children:[(0,j.jsx)(r.Z.Label,{htmlFor:"phone",column:!0,md:3,children:"Phone Number"}),(0,j.jsx)(t.Z,{md:9,children:(0,j.jsx)(r.Z.Control,{type:"text",name:"phone",id:"phone",placeholder:"enter phone number"})})]}),(0,j.jsxs)("ul",{className:"list-inline wizard mb-0",children:[(0,j.jsx)("li",{className:"previous list-inline-item",children:(0,j.jsx)(c.Z,{onClick:l,variant:"info",children:"Previous"})}),(0,j.jsx)("li",{className:"next list-inline-item float-end",children:(0,j.jsx)(c.Z,{onClick:s,variant:"success",children:"Next"})})]})]})}}),(0,j.jsx)(m.h8,{id:"dumbledore",render:function(e){var s=e.previous;return(0,j.jsxs)(i.Z,{children:[(0,j.jsx)(t.Z,{sm:12,children:(0,j.jsxs)("div",{className:"text-center",children:[(0,j.jsx)("h2",{className:"mt-0",children:(0,j.jsx)("i",{className:"mdi mdi-check-all"})}),(0,j.jsx)("h3",{className:"mt-0",children:"Thank you !"}),(0,j.jsx)("p",{className:"w-75 mb-2 mx-auto",children:"Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet."}),(0,j.jsx)("div",{className:"mb-3",children:(0,j.jsxs)(r.Z.Check,{type:"checkbox",children:[(0,j.jsx)(r.Z.Check.Input,{type:"checkbox"})," ",(0,j.jsx)(r.Z.Check.Label,{children:"I agree with the Terms and Conditions"})]})})]})}),(0,j.jsx)(t.Z,{sm:12,children:(0,j.jsxs)("ul",{className:"list-inline wizard mb-0",children:[(0,j.jsx)("li",{className:"previous list-inline-item",children:(0,j.jsx)(c.Z,{onClick:s,variant:"info",children:"Previous"})}),(0,j.jsx)("li",{className:"next list-inline-item float-end",children:(0,j.jsx)(c.Z,{variant:"success",children:"Submit"})})]})})]})}})]})})]})})},Z=function(){return(0,j.jsx)(n.Z,{children:(0,j.jsxs)(n.Z.Body,{children:[(0,j.jsx)("h4",{className:"header-title mb-3",children:"Wizard with Progress bar"}),(0,j.jsx)(m.en,{render:function(e){var s=e.step,l=e.steps;return(0,j.jsxs)(a.Fragment,{children:[(0,j.jsx)(d.Z,{animated:!0,striped:!0,variant:"success",now:(l.indexOf(s)+1)/l.length*100,className:"mb-3 progress-sm"}),(0,j.jsxs)(m.Rg,{children:[(0,j.jsx)(m.h8,{id:"login",render:function(e){var s=e.next;return(0,j.jsxs)(r.Z,{children:[(0,j.jsxs)(r.Z.Group,{as:i.Z,className:"mb-3",children:[(0,j.jsx)(r.Z.Label,{htmlFor:"exampleEmail",column:!0,md:3,children:"Email"}),(0,j.jsx)(t.Z,{md:9,children:(0,j.jsx)(r.Z.Control,{type:"email",name:"exampleEmail",id:"exampleEmail2",placeholder:"Enter email"})})]}),(0,j.jsxs)(r.Z.Group,{as:i.Z,className:"mb-3",children:[(0,j.jsx)(r.Z.Label,{htmlFor:"examplePassword",column:!0,md:3,children:"Password"}),(0,j.jsx)(t.Z,{md:9,children:(0,j.jsx)(r.Z.Control,{type:"password",name:"password",id:"examplePassword2",placeholder:"password placeholder",defaultValue:"12345"})})]}),(0,j.jsxs)(r.Z.Group,{as:i.Z,className:"mb-3",children:[(0,j.jsx)(r.Z.Label,{htmlFor:"examplerePassword",column:!0,md:3,children:"Re-Password"}),(0,j.jsx)(t.Z,{md:9,children:(0,j.jsx)(r.Z.Control,{type:"password",name:"repassword",id:"examplerePassword2",placeholder:"password",defaultValue:"12345"})})]}),(0,j.jsx)("ul",{className:"list-inline wizard mb-0",children:(0,j.jsx)("li",{className:"next list-inline-item float-end",children:(0,j.jsx)(c.Z,{onClick:s,variant:"success",children:"Next"})})})]})}}),(0,j.jsx)(m.h8,{id:"gandalf",render:function(e){var s=e.next,l=e.previous;return(0,j.jsxs)(r.Z,{children:[(0,j.jsxs)(r.Z.Group,{as:i.Z,className:"mb-3",children:[(0,j.jsx)(r.Z.Label,{htmlFor:"fname",column:!0,md:3,children:"First Name"}),(0,j.jsx)(t.Z,{md:9,children:(0,j.jsx)(r.Z.Control,{type:"text",name:"fname",id:"fname",placeholder:"Enter first name"})})]}),(0,j.jsxs)(r.Z.Group,{as:i.Z,className:"mb-3",children:[(0,j.jsx)(r.Z.Label,{htmlFor:"lname",column:!0,md:3,children:"Last Name"}),(0,j.jsx)(t.Z,{md:9,children:(0,j.jsx)(r.Z.Control,{type:"text",name:"lname",id:"lname",placeholder:"enter last name"})})]}),(0,j.jsxs)(r.Z.Group,{as:i.Z,className:"mb-3",children:[(0,j.jsx)(r.Z.Label,{htmlFor:"phone",column:!0,md:3,children:"Phone Number"}),(0,j.jsx)(t.Z,{md:9,children:(0,j.jsx)(r.Z.Control,{type:"text",name:"phone",id:"phone",placeholder:"enter phone number"})})]}),(0,j.jsxs)("ul",{className:"list-inline wizard mb-0",children:[(0,j.jsx)("li",{className:"previous list-inline-item",children:(0,j.jsx)(c.Z,{onClick:l,variant:"info",children:"Previous"})}),(0,j.jsx)("li",{className:"next list-inline-item float-end",children:(0,j.jsx)(c.Z,{onClick:s,variant:"success",children:"Next"})})]})]})}}),(0,j.jsx)(m.h8,{id:"dumbledore",render:function(e){var s=e.previous;return(0,j.jsxs)(i.Z,{children:[(0,j.jsx)(t.Z,{sm:12,children:(0,j.jsxs)("div",{className:"text-center",children:[(0,j.jsx)("h2",{className:"mt-0",children:(0,j.jsx)("i",{className:"mdi mdi-check-all"})}),(0,j.jsx)("h3",{className:"mt-0",children:"Thank you !"}),(0,j.jsx)("p",{className:"w-75 mb-2 mx-auto",children:"Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet."}),(0,j.jsx)("div",{className:"mb-3",children:(0,j.jsxs)(r.Z.Check,{type:"checkbox",children:[(0,j.jsx)(r.Z.Check.Input,{type:"checkbox"})," ",(0,j.jsx)(r.Z.Check.Label,{children:"I agree with the Terms and Conditions"})]})})]})}),(0,j.jsx)(t.Z,{sm:12,children:(0,j.jsxs)("ul",{className:"list-inline wizard mb-0",children:[(0,j.jsx)("li",{className:"previous list-inline-item",children:(0,j.jsx)(c.Z,{onClick:s,variant:"info",children:"Previous"})}),(0,j.jsx)("li",{className:"next list-inline-item float-end",children:(0,j.jsx)(c.Z,{variant:"success",children:"Submit"})})]})})]})}})]})]})}})]})})},b=function(){var e=(0,h.X)(o.Ry().shape({email:o.Z_().required("Please enter Email address"),password:o.Z_().required("Please enter Password"),checkbox:o.Xg().oneOf([!0])})),s=(0,h.X)(o.Ry().shape({firstname:o.Z_().required("Please enter First Name"),lastname:o.Z_().required("Please enter Last Name"),checkbox:o.Xg().oneOf([!0])}));return(0,j.jsx)(n.Z,{children:(0,j.jsxs)(n.Z.Body,{children:[(0,j.jsx)("h4",{className:"header-title mb-3",children:"Wizard with Validation"}),(0,j.jsx)(m.en,{render:function(l){var n=l.step,o=l.steps;return(0,j.jsxs)(a.Fragment,{children:[(0,j.jsx)(d.Z,{animated:!0,striped:!0,variant:"success",now:(o.indexOf(n)+1)/o.length*100,className:"mb-3 progress-sm"}),(0,j.jsxs)(m.Rg,{children:[(0,j.jsx)(m.h8,{id:"login",render:function(s){var l=s.next;return(0,j.jsxs)(u.J,{onSubmit:function(e,s){return l()},resolver:e,children:[(0,j.jsx)(u.y,{label:"Username/Email",type:"email",name:"email",containerClass:"mb-3"}),(0,j.jsx)(u.y,{label:"Password",type:"password",name:"password",containerClass:"mb-3"}),(0,j.jsx)(u.y,{label:"Remember me",type:"checkbox",name:"checkbox"}),(0,j.jsx)("ul",{className:"list-inline wizard mb-0",children:(0,j.jsx)("li",{className:"next list-inline-item float-end",children:(0,j.jsx)(c.Z,{variant:"success",type:"submit",children:"Next"})})})]})}}),(0,j.jsx)(m.h8,{id:"gandalf",render:function(e){var l=e.next,a=e.previous;return(0,j.jsxs)(u.J,{onSubmit:function(e,s){return l()},resolver:s,children:[(0,j.jsx)(u.y,{label:"First Name",type:"text",name:"firstname",containerClass:"mb-3"}),(0,j.jsx)(u.y,{label:"Last Name",type:"text",name:"lastname",containerClass:"mb-3"}),(0,j.jsx)(u.y,{label:"Agree to terms and conditions",type:"checkbox",name:"checkbox",containerClass:"mb-3"}),(0,j.jsxs)("ul",{className:"list-inline wizard mb-0",children:[(0,j.jsx)("li",{className:"previous list-inline-item",children:(0,j.jsx)(c.Z,{onClick:a,variant:"info",children:"Previous"})}),(0,j.jsx)("li",{className:"next list-inline-item float-end",children:(0,j.jsx)(c.Z,{variant:"success",type:"submit",children:"Next"})})]})]})}}),(0,j.jsx)(m.h8,{id:"dumbledore",render:function(e){var s=e.previous;return(0,j.jsxs)(i.Z,{children:[(0,j.jsx)(t.Z,{sm:12,children:(0,j.jsxs)("div",{className:"text-center",children:[(0,j.jsx)("h2",{className:"mt-0",children:(0,j.jsx)("i",{className:"mdi mdi-check-all"})}),(0,j.jsx)("h3",{className:"mt-0",children:"Thank you !"}),(0,j.jsx)("p",{className:"w-75 mb-2 mx-auto",children:"Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet."}),(0,j.jsx)("div",{className:"mb-3",children:(0,j.jsxs)(r.Z.Check,{type:"checkbox",children:[(0,j.jsx)(r.Z.Check.Input,{type:"checkbox"})," ",(0,j.jsx)(r.Z.Check.Label,{children:"I agree with the Terms and Conditions"})]})})]})}),(0,j.jsx)(t.Z,{sm:12,children:(0,j.jsxs)("ul",{className:"list-inline wizard mb-0",children:[(0,j.jsx)("li",{className:"previous list-inline-item",children:(0,j.jsx)(c.Z,{onClick:s,variant:"info",children:"Previous"})}),(0,j.jsx)("li",{className:"next list-inline-item float-end",children:(0,j.jsx)(c.Z,{variant:"success",children:"Submit"})})]})})]})}})]})]})}})]})})};s.default=function(){return(0,j.jsxs)(a.Fragment,{children:[(0,j.jsx)(x.Z,{breadCrumbItems:[{label:"Forms",path:"/ui/forms/wizard"},{label:"Form Wizard",path:"/ui/forms/wizard",active:!0}],title:"Form Wizard"}),(0,j.jsxs)(i.Z,{children:[(0,j.jsx)(t.Z,{xl:6,children:(0,j.jsx)(p,{})}),(0,j.jsx)(t.Z,{xl:6,children:(0,j.jsx)(Z,{})})]}),(0,j.jsx)(i.Z,{children:(0,j.jsx)(t.Z,{lg:6,children:(0,j.jsx)(b,{})})})]})}}}]);
//# sourceMappingURL=9905.77be7c4f.chunk.js.map