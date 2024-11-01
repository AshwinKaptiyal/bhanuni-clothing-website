"use strict";(self.webpackChunkubold_react=self.webpackChunkubold_react||[]).push([[1e3],{9907:function(e,t,a){a.r(t),a.d(t,{default:function(){return M}});var s=a(1413),i=a(93433),l=a(29439),n=a(72791),o=a(89743),d=a(2677),r=a(9140),c=a(55353),m=a(11087),u=a(75184),h=a(39135),x=a(12576),p=a(17858),j=a(81694),f=a.n(j),g=a(41532),v=a(80184),y=function(e){var t=e.task,a=e.selectTask,s=(0,n.useState)("Done"===t.stage),i=(0,l.Z)(s,2),r=i[0],c=i[1];return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(o.Z,{className:"justify-content-sm-between",children:[(0,v.jsx)("span",{className:"task-item"}),(0,v.jsx)(d.Z,{lg:6,className:"mb-2 ps-3",children:(0,v.jsxs)("div",{className:"form-check",children:[(0,v.jsx)("input",{type:"checkbox",className:"form-check-input",id:"task-".concat(t.id),checked:r,onChange:function(e){c(e.target.checked),a(t)}}),(0,v.jsx)("label",{className:"form-check-label",htmlFor:"task-".concat(t.id),onClick:function(){return a(t)},children:t.title})]})}),(0,v.jsx)(d.Z,{lg:6,children:(0,v.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,v.jsx)("div",{children:(0,v.jsx)(h.Z,{placement:"right",overlay:(0,v.jsxs)(x.Z,{id:t.assigned_to,children:["Assigned to ",t.assigned_to]}),children:(0,v.jsx)("img",{src:t.assignee_avatar,alt:"",className:"avatar-xs rounded-circle me-1",id:"task-avatar-".concat(t.id)})})}),(0,v.jsx)("div",{className:"mt-3 mt-sm-0",children:(0,v.jsxs)("ul",{className:"list-inline font-13 text-end",children:[(0,v.jsxs)("li",{className:"list-inline-item pe-1",children:[(0,v.jsx)("i",{className:"mdi mdi-calendar-month-outline font-16 me-1"})," ",t.due_date]}),(0,v.jsxs)("li",{className:"list-inline-item pe-1",children:[(0,v.jsx)("i",{className:"mdi mdi-tune font-16 me-1"})," ",t.checklists.filter((function(e){return e.completed})).length," /"," ",t.checklists.length]}),(0,v.jsxs)("li",{className:"list-inline-item pe-2",children:[(0,v.jsx)("i",{className:"mdi mdi-comment-text-multiple-outline font-16 me-1"})," ",t.comments.length]}),(0,v.jsx)("li",{className:"list-inline-item",children:(0,v.jsx)("span",{className:f()("badge",{"badge-soft-danger":"High"===t.priority,"badge-soft-info":"Medium"===t.priority,"badge-soft-success":"Low"===t.priority},"p-1"),children:t.priority})})]})})]})})]})})},A=function(e){var t=e.title,a=e.tasks,s=e.selectTask,i=(0,n.useState)(!0),o=(0,l.Z)(i,2),d=o[0],c=o[1],u=(0,n.useState)(a),h=(0,l.Z)(u,2),x=h[0],j=h[1];return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(m.rU,{className:"text-dark",to:"#",onClick:function(){return c(!d)},children:(0,v.jsxs)("h5",{className:"m-0",children:[(0,v.jsx)("i",{className:f()("mdi",{"mdi-chevron-down":d,"mdi-chevron-right":!d},"font-18")}),t," ",(0,v.jsxs)("span",{className:"text-muted font-14",children:["(",x.length,")"]})]})}),(0,v.jsx)(p.Z,{in:d,children:(0,v.jsx)(r.Z,{className:"mb-0 shadow-none",children:(0,v.jsx)(r.Z.Body,{className:"pb-0",children:(0,v.jsx)(g._O,{group:"taskList1",handle:".task-item",list:x,setList:j,children:(x||[]).map((function(e,t){return(0,v.jsx)(y,{selectTask:s,task:e},t)}))})})})})]})},k=a(72010),N=a(1701),w=a.n(N),Z=a(51802),S=(a(25646),function(e){var t=(0,n.useState)("Done"===e.stage),a=(0,l.Z)(t,2),s=a[0],i=a[1],u=(0,n.useState)(),p=(0,l.Z)(u,2),j=p[0],g=p[1];(0,n.useEffect)((function(){var e=w()('<p class="m-0">This is a task description with markup support</p> <ul> <li>Select a text to reveal the toolbar.</li> <li>Edit rich document on-the-fly, so elastic!</li> </ul> <p>End of air-mode area</p>');if(e){var t=k.ContentState.createFromBlockArray(e.contentBlocks);g(k.EditorState.createWithContent(t))}}),[]);return(0,v.jsx)(n.Fragment,{children:(0,v.jsx)(r.Z,{children:(0,v.jsxs)(r.Z.Body,{children:[(0,v.jsx)(o.Z,{children:(0,v.jsxs)(d.Z,{children:[(0,v.jsxs)(c.Z,{className:"float-end",align:"end",children:[(0,v.jsx)(c.Z.Toggle,{as:"a",className:"cursor-pointer text-muted",children:(0,v.jsx)("i",{className:"mdi mdi-dots-horizontal font-18"})}),(0,v.jsxs)(c.Z.Menu,{children:[(0,v.jsxs)(c.Z.Item,{children:[(0,v.jsx)("i",{className:"mdi mdi-attachment me-1"}),"Attachment"]}),(0,v.jsxs)(c.Z.Item,{children:[(0,v.jsx)("i",{className:"mdi mdi-pencil-outline me-1"}),"Edit"]}),(0,v.jsxs)(c.Z.Item,{children:[(0,v.jsx)("i",{className:"mdi mdi-content-copy me-1"}),"Mark as Duplicate"]}),(0,v.jsx)(c.Z.Divider,{}),(0,v.jsxs)(c.Z.Item,{className:"text-danger",children:[(0,v.jsx)("i",{className:"mdi mdi-delete-outline me-1"}),"Delete"]})]})]}),(0,v.jsxs)("div",{className:"form-check float-start",children:[(0,v.jsx)("input",{type:"checkbox",className:"form-check-input",id:"completedCheck",checked:s,onChange:function(e){return i(e.target.checked)}}),(0,v.jsx)("label",{className:"form-check-label",htmlFor:"completedCheck",children:"Mark as completed"})]}),(0,v.jsx)("div",{className:"clearfix"}),(0,v.jsx)("hr",{className:"my-2"})]})}),(0,v.jsx)(o.Z,{children:(0,v.jsxs)(d.Z,{children:[(0,v.jsx)("h4",{children:e.title}),(0,v.jsxs)(o.Z,{children:[(0,v.jsxs)(d.Z,{children:[(0,v.jsx)("p",{className:"mt-2 mb-1 text-muted",children:"Assigned To"}),(0,v.jsxs)("div",{className:"d-flex align-items-start",children:[(0,v.jsx)("img",{src:e.assignee_avatar,alt:e.assigned_to,className:"rounded-circle me-2",height:"24"}),(0,v.jsx)("div",{className:"w-100",children:(0,v.jsx)("h5",{className:"mt-1 font-size-14",children:e.assigned_to})})]})]}),(0,v.jsxs)(d.Z,{children:[(0,v.jsx)("p",{className:"mt-2 mb-1 text-muted",children:"Due Date"}),(0,v.jsxs)("div",{className:"d-flex align-items-start",children:[(0,v.jsx)("i",{className:"mdi mdi-calendar-month-outline font-18 text-success me-1"}),(0,v.jsx)("div",{className:"w-100",children:(0,v.jsx)("h5",{className:"mt-1 font-size-14",children:e.due_date})})]})]})]}),(0,v.jsx)(o.Z,{className:"mt-3",children:(0,v.jsx)(d.Z,{children:(0,v.jsx)(Z.Editor,{toolbarHidden:!0,toolbarClassName:"draft-toolbar",wrapperClassName:"react-draft-wrapper",editorStyle:{minHeight:"150px"},editorState:j,onEditorStateChange:function(e){g(e)}})})}),(0,v.jsx)("h5",{className:"mt-4 mb-2 font-size-16",children:"Checklists/Sub-tasks"}),(e.checklists||[]).map((function(e,t){return(0,v.jsxs)("div",{className:"form-check mt-1",children:[(0,v.jsx)("input",{type:"checkbox",className:"form-check-input",id:"checklist-".concat(e.id),defaultChecked:e.completed}),(0,v.jsx)("label",{className:f()("form-check-label",{strikethrough:e.completed}),htmlFor:"checklist-".concat(e.id),children:e.title})]},t)})),(0,v.jsx)("h5",{className:"mt-4 mb-2 font-size-16",children:"Attachments"}),(e.attachments||[]).map((function(e,t){var a=e.filename.substr(e.filename.lastIndexOf(".")+1);return(0,v.jsx)(r.Z,{className:"mb-1 shadow-none border",children:(0,v.jsx)("div",{className:"p-2",children:(0,v.jsxs)(o.Z,{className:"align-items-center",children:[(0,v.jsx)(d.Z,{className:"col-auto",children:(0,v.jsx)("div",{className:"avatar-sm",children:(0,v.jsxs)("span",{className:"avatar-title badge-soft-primary text-primary rounded",children:[".",a]})})}),(0,v.jsxs)(d.Z,{className:"ps-0",children:[(0,v.jsx)(m.rU,{to:"#",className:"text-muted fw-bold",children:e.filename}),(0,v.jsx)("p",{className:"mb-0 font-12",children:e.size})]}),(0,v.jsx)(d.Z,{className:"col-auto",children:(0,v.jsx)(h.Z,{placement:"left",overlay:(0,v.jsx)(x.Z,{id:"download",children:"Download"}),children:(0,v.jsx)(m.rU,{to:"#",id:"btn-download",className:"btn btn-link font-16 text-muted",children:(0,v.jsx)("i",{className:"dripicons-download"})})})})]})})},t)})),(0,v.jsx)("div",{className:"row mt-3",children:(0,v.jsxs)("div",{className:"col",children:[(0,v.jsx)("h5",{className:"mb-2 font-size-16",children:"Comments"}),(e.comments||[]).map((function(e,t){return(0,v.jsxs)(n.Fragment,{children:[(0,v.jsxs)("div",{className:"d-flex align-items-start mt-3 p-1",children:[(0,v.jsx)("img",{src:e.author_avatar,className:"me-2 rounded-circle",height:"36",alt:e.author}),(0,v.jsxs)("div",{className:"w-100",children:[(0,v.jsxs)("h5",{className:"mt-0 mb-0 font-size-14",children:[(0,v.jsx)("span",{className:"float-end text-muted font-12",children:e.posted_on}),e.author]}),(0,v.jsx)("p",{className:"mt-1 mb-0 text-muted",children:e.text})]})]},t),(0,v.jsx)("hr",{})]},t)}))]})}),(0,v.jsx)(o.Z,{className:"mt-2",children:(0,v.jsx)(d.Z,{children:(0,v.jsx)("div",{className:"border rounded",children:(0,v.jsxs)("form",{action:"#",children:[(0,v.jsx)("textarea",{rows:3,className:"form-control border-0 resize-none",placeholder:"Your comment..."}),(0,v.jsxs)("div",{className:"p-2 bg-light d-flex justify-content-between align-items-center",children:[(0,v.jsxs)("div",{children:[(0,v.jsx)(m.rU,{to:"#",className:"btn btn-sm px-2 font-16 btn-light",children:(0,v.jsx)("i",{className:"mdi mdi-cloud-upload-outline"})}),(0,v.jsx)(m.rU,{to:"#",className:"btn btn-sm px-2 font-16 btn-light",children:(0,v.jsx)("i",{className:"mdi mdi-at"})})]}),(0,v.jsxs)("button",{type:"submit",className:"btn btn-sm btn-success",children:[(0,v.jsx)("i",{className:"mdi mdi-send me-1"}),"Submit"]})]})]})})})})]})})]})})})}),b=a(35826),I=a(96952),E=a(84915),z=a(312),U=a(72508),H=[{id:1,title:"Draft the new contract document for sales team",assigned_to:"Arya Stark",assignee_avatar:b,due_date:"Today 10am",completed:!1,priority:"High",stage:"Todo",checklists:[{id:1,title:"Find out the old contract documents",completed:!0},{id:2,title:"Organize meeting sales associates to understand need in detail",completed:!1},{id:3,title:"Make sure to cover every small details",completed:!1}],description:"<p>This is a task description with markup support</p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p>End of air-mode area</p>",attachments:[{id:1,filename:"sales-assets.zip",size:"2.3 MB"},{id:2,filename:"new-contarcts.docx",size:"1.3 MB"}],comments:[{id:1,author:"Arya Stark",text:"Should I review the last 3 years legal documents as well?",posted_on:"4:30am",author_avatar:b},{id:2,author:"Gary Somya",text:"@Arya FYI..I have created some general guidelines last year.",posted_on:"3:30am",author_avatar:I}]},{id:2,title:"iOS App home page",assigned_to:"James B",assignee_avatar:I,due_date:"Today 4pm",completed:!1,stage:"In-progress",priority:"High",checklists:[{id:1,title:"Find out the old contract documents",completed:!1},{id:2,title:"Organize meeting sales associates to understand need in detail",completed:!1},{id:3,title:"Make sure to cover every small details",completed:!1}],description:"<p>This is a task description with markup support</p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p>End of air-mode area</p>",attachments:[{id:1,filename:"sales-assets.zip",size:"2.3 MB"},{id:2,filename:"new-contarcts.docx",size:"1.3 MB"}],comments:[{id:1,author:"Arya Stark",text:"Should I review the last 3 years legal documents as well?",posted_on:"4:30am",author_avatar:b},{id:2,author:"Gary Somya",text:"@Arya FYI..I have created some general guidelines last year.",posted_on:"3:30am",author_avatar:I}]},{id:3,title:"Write a release note",assigned_to:"Kevin C",assignee_avatar:E,due_date:"Today 4pm",completed:!1,stage:"In-progress",priority:"Medium",checklists:[{id:1,title:"Find out the old contract documents",completed:!1},{id:2,title:"Organize meeting sales associates to understand need in detail",completed:!1},{id:3,title:"Make sure to cover every small details",completed:!1}],description:"<p>This is a task description with markup support</p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p>End of air-mode area</p>",attachments:[{id:1,filename:"sales-assets.zip",size:"2.3 MB"},{id:2,filename:"new-contarcts.docx",size:"1.3 MB"}],comments:[{id:1,author:"Arya Stark",text:"Should I review the last 3 years legal documents as well?",posted_on:"4:30am",author_avatar:b},{id:2,author:"Gary Somya",text:"@Arya FYI..I have created some general guidelines last year.",posted_on:"3:30am",author_avatar:I}]}],B=[{id:4,title:"Invite user to a project",assigned_to:"Arya Stark",assignee_avatar:b,due_date:"Tomorrow 10am",stage:"Todo",completed:!1,priority:"Low",checklists:[{id:1,title:"Find out the old contract documents",completed:!1},{id:2,title:"Organize meeting sales associates to understand need in detail",completed:!1},{id:3,title:"Make sure to cover every small details",completed:!1}],description:"<p>This is a task description with markup support</p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p>End of air-mode area</p>",attachments:[{id:1,filename:"sales-assets.zip",size:"2.3 MB"},{id:2,filename:"new-contarcts.docx",size:"1.3 MB"}],comments:[{id:1,author:"Arya Stark",text:"Should I review the last 3 years legal documents as well?",posted_on:"4:30am",author_avatar:b},{id:2,author:"Gary Somya",text:"@Arya FYI..I have created some general guidelines last year.",posted_on:"3:30am",author_avatar:I}]},{id:5,title:"Enable analytics tracking",assigned_to:"James B",assignee_avatar:z,due_date:"27 Aug 10am",completed:!1,stage:"Review",priority:"Low",checklists:[{id:1,title:"Find out the old contract documents",completed:!1},{id:2,title:"Organize meeting sales associates to understand need in detail",completed:!1},{id:3,title:"Make sure to cover every small details",completed:!1}],description:"<p>This is a task description with markup support</p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p>End of air-mode area</p>",attachments:[{id:1,filename:"sales-assets.zip",size:"2.3 MB"},{id:2,filename:"new-contarcts.docx",size:"1.3 MB"}],comments:[{id:1,author:"Arya Stark",text:"Should I review the last 3 years legal documents as well?",posted_on:"4:30am",author_avatar:b},{id:2,author:"Gary Somya",text:"@Arya FYI..I have created some general guidelines last year.",posted_on:"3:30am",author_avatar:I}]},{id:6,title:"Code HTML email template",assigned_to:"Kevin C",assignee_avatar:U,due_date:"No Due Date",completed:!1,stage:"Review",priority:"Medium",checklists:[{id:1,title:"Find out the old contract documents",completed:!1},{id:2,title:"Organize meeting sales associates to understand need in detail",completed:!1},{id:3,title:"Make sure to cover every small details",completed:!1}],description:"<p>This is a task description with markup support</p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p>End of air-mode area</p>",attachments:[{id:1,filename:"sales-assets.zip",size:"2.3 MB"},{id:2,filename:"new-contarcts.docx",size:"1.3 MB"}],comments:[{id:1,author:"Arya Stark",text:"Should I review the last 3 years legal documents as well?",posted_on:"4:30am",author_avatar:b},{id:2,author:"Gary Somya",text:"@Arya FYI..I have created some general guidelines last year.",posted_on:"3:30am",author_avatar:I}]}],T=[{id:7,title:"Coordinate with business development",assigned_to:"Arya Stark",assignee_avatar:b,due_date:"No Due Date",stage:"Todo",completed:!1,priority:"High",checklists:[{id:1,title:"Find out the old contract documents",completed:!1},{id:2,title:"Organize meeting sales associates to understand need in detail",completed:!1},{id:3,title:"Make sure to cover every small details",completed:!1}],description:"<p>This is a task description with markup support</p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p>End of air-mode area</p>",attachments:[{id:1,filename:"sales-assets.zip",size:"2.3 MB"},{id:2,filename:"new-contarcts.docx",size:"1.3 MB"}],comments:[{id:1,author:"Arya Stark",text:"Should I review the last 3 years legal documents as well?",posted_on:"4:30am",author_avatar:b},{id:2,author:"Gary Somya",text:"@Arya FYI..I have created some general guidelines last year.",posted_on:"3:30am",author_avatar:I}]},{id:8,title:"Kanban board design",assigned_to:"James B",assignee_avatar:z,stage:"Review",due_date:"30 Aug 10am",completed:!1,priority:"Low",checklists:[{id:1,title:"Find out the old contract documents",completed:!1},{id:2,title:"Organize meeting sales associates to understand need in detail",completed:!1},{id:3,title:"Make sure to cover every small details",completed:!1}],description:"<p>This is a task description with markup support</p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p>End of air-mode area</p>",attachments:[{id:1,filename:"sales-assets.zip",size:"2.3 MB"},{id:2,filename:"new-contarcts.docx",size:"1.3 MB"}],comments:[{id:1,author:"Arya Stark",text:"Should I review the last 3 years legal documents as well?",posted_on:"4:30am",author_avatar:b},{id:2,author:"Gary Somya",text:"@Arya FYI..I have created some general guidelines last year.",posted_on:"3:30am",author_avatar:I}]},{id:9,title:"Draft the new contract document for sales team",assigned_to:"Kevin C",assignee_avatar:U,due_date:"No Due Date",stage:"Done",completed:!1,priority:"Medium",checklists:[{id:1,title:"Find out the old contract documents",completed:!1},{id:2,title:"Organize meeting sales associates to understand need in detail",completed:!1},{id:3,title:"Make sure to cover every small details",completed:!1}],description:"<p>This is a task description with markup support</p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p>End of air-mode area</p>",attachments:[{id:1,filename:"sales-assets.zip",size:"2.3 MB"},{id:2,filename:"new-contarcts.docx",size:"1.3 MB"}],comments:[{id:1,author:"Arya Stark",text:"Should I review the last 3 years legal documents as well?",posted_on:"4:30am",author_avatar:b},{id:2,author:"Gary Somya",text:"@Arya FYI..I have created some general guidelines last year.",posted_on:"3:30am",author_avatar:I}]},{id:10,title:"Draft the new contract document for vendor Abc",assigned_to:"Kevin C",assignee_avatar:U,due_date:"2 Sep 10am",completed:!1,stage:"Done",priority:"Medium",checklists:[{id:1,title:"Find out the old contract documents",completed:!1},{id:2,title:"Organize meeting sales associates to understand need in detail",completed:!1},{id:3,title:"Make sure to cover every small details",completed:!1}],description:"<p>This is a task description with markup support</p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p>End of air-mode area</p>",attachments:[{id:1,filename:"sales-assets.zip",size:"2.3 MB"},{id:2,filename:"new-contarcts.docx",size:"1.3 MB"}],comments:[{id:1,author:"Arya Stark",text:"Should I review the last 3 years legal documents as well?",posted_on:"4:30am",author_avatar:b},{id:2,author:"Gary Somya",text:"@Arya FYI..I have created some general guidelines last year.",posted_on:"3:30am",author_avatar:I}]}],M=([].concat(H,B,T),function(){var e=(0,n.useState)((0,i.Z)(H)),t=(0,l.Z)(e,1)[0],a=(0,n.useState)((0,i.Z)(B)),h=(0,l.Z)(a,1)[0],x=(0,n.useState)((0,i.Z)(T)),p=(0,l.Z)(x,1)[0],j=(0,n.useState)(H[0]),f=(0,l.Z)(j,2),g=f[0],y=f[1],k=function(e){y(e)};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(u.Z,{breadCrumbItems:[{label:"Tasks",path:"/apps/tasks/list"},{label:"Tasks List",path:"/apps/tasks/list",active:!0}],title:"Tasks List"}),(0,v.jsxs)(o.Z,{children:[(0,v.jsx)(d.Z,{xl:8,children:(0,v.jsx)(o.Z,{children:(0,v.jsx)(d.Z,{children:(0,v.jsx)(r.Z,{children:(0,v.jsxs)(r.Z.Body,{children:[(0,v.jsxs)(o.Z,{children:[(0,v.jsx)(d.Z,{sm:3,children:(0,v.jsxs)(m.rU,{to:"#",className:"btn btn-primary waves-effect waves-light",children:[(0,v.jsx)("i",{className:"fe-plus me-1"}),"Add New"]})}),(0,v.jsx)(d.Z,{sm:9,children:(0,v.jsxs)("div",{className:"float-sm-end mt-3 mt-sm-0",children:[(0,v.jsx)("div",{className:"d-inline-block mb-3 mb-sm-0 me-sm-2",children:(0,v.jsx)("form",{className:"search-bar form-inline",children:(0,v.jsxs)("div",{className:"position-relative",children:[(0,v.jsx)("input",{type:"text",className:"form-control",placeholder:"Search..."}),(0,v.jsx)("span",{className:"mdi mdi-magnify"})]})})}),(0,v.jsxs)(c.Z,{className:"d-inline-block",align:"end",children:[(0,v.jsx)(c.Z.Toggle,{variant:"light",children:(0,v.jsx)("i",{className:"mdi mdi-filter-variant"})}),(0,v.jsxs)(c.Z.Menu,{children:[(0,v.jsx)(c.Z.Item,{children:"Due Date"}),(0,v.jsx)(c.Z.Item,{children:"Added Date"}),(0,v.jsx)(c.Z.Item,{children:"Assignee"})]})]})]})})]}),(0,v.jsx)(o.Z,{className:"mt-4",children:(0,v.jsxs)(d.Z,{children:[(0,v.jsx)("div",{children:(0,v.jsx)(A,{title:"Today",tasks:t,selectTask:k})}),(0,v.jsx)("div",{className:"mt-4",children:(0,v.jsx)(A,{title:"Upcoming",tasks:h,selectTask:k})}),(0,v.jsx)("div",{className:"mt-4 mb-4",children:(0,v.jsx)(A,{title:"Other",tasks:p,selectTask:k})})]})}),(0,v.jsx)("div",{className:"row mt-4",children:(0,v.jsx)("div",{className:"col-12",children:(0,v.jsx)("div",{className:"text-center",children:(0,v.jsxs)(m.rU,{to:"#",className:"btn btn-sm btn-white",children:[(0,v.jsx)("i",{className:"mdi mdi-spin mdi-loading me-2"}),"Load more"]})})})})]})})})})}),(0,v.jsx)(d.Z,{xl:4,children:(0,v.jsx)(S,(0,s.Z)({},g))})]})]})})},17858:function(e,t,a){a.d(t,{Z:function(){return N}});var s=a(1413),i=a(45987),l=a(4942),n=a(81694),o=a.n(n),d=a(75427),r=a(72791),c=a(27726),m=a(71380);var u,h=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];e.apply(this,s),t.apply(this,s)}}),null)},x=a(67202),p=a(85007),j=a(80184),f=["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"],g={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function v(e,t){var a=t["offset".concat(e[0].toUpperCase()).concat(e.slice(1))],s=g[e];return a+parseInt((0,d.Z)(t,s[0]),10)+parseInt((0,d.Z)(t,s[1]),10)}var y=(u={},(0,l.Z)(u,c.Wj,"collapse"),(0,l.Z)(u,c.Ix,"collapsing"),(0,l.Z)(u,c.d0,"collapsing"),(0,l.Z)(u,c.cn,"collapse show"),u),A={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:v},k=r.forwardRef((function(e,t){var a=e.onEnter,l=e.onEntering,n=e.onEntered,d=e.onExit,c=e.onExiting,u=e.className,g=e.children,A=e.dimension,k=void 0===A?"height":A,N=e.getDimensionValue,w=void 0===N?v:N,Z=(0,i.Z)(e,f),S="function"===typeof k?k():k,b=(0,r.useMemo)((function(){return h((function(e){e.style[S]="0"}),a)}),[S,a]),I=(0,r.useMemo)((function(){return h((function(e){var t="scroll".concat(S[0].toUpperCase()).concat(S.slice(1));e.style[S]="".concat(e[t],"px")}),l)}),[S,l]),E=(0,r.useMemo)((function(){return h((function(e){e.style[S]=null}),n)}),[S,n]),z=(0,r.useMemo)((function(){return h((function(e){e.style[S]="".concat(w(S,e),"px"),(0,x.Z)(e)}),d)}),[d,w,S]),U=(0,r.useMemo)((function(){return h((function(e){e.style[S]=null}),c)}),[S,c]);return(0,j.jsx)(p.Z,(0,s.Z)((0,s.Z)({ref:t,addEndListener:m.Z},Z),{},{"aria-expanded":Z.role?Z.in:null,onEnter:b,onEntering:I,onEntered:E,onExit:z,onExiting:U,childRef:g.ref,children:function(e,t){return r.cloneElement(g,(0,s.Z)((0,s.Z)({},t),{},{className:o()(u,g.props.className,y[e],"width"===S&&"collapse-horizontal")}))}}))}));k.defaultProps=A;var N=k},91991:function(e,t,a){var s=a(72791).createContext(null);s.displayName="InputGroupContext",t.Z=s},42391:function(e){var t=function(){};e.exports=t},35826:function(e){e.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=1000.a44fad45.chunk.js.map