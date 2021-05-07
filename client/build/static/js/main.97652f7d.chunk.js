(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{132:function(e,t,n){},133:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(9),c=n.n(r),i=n(19),s=n(48),o=n(76),l=n(92),u="CREATE",d="UPDATE",p="DELETE",j="FETCH_ALL",b="LIKE",m="AUTH",h="LOGOUT",f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return t.payload;case b:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case u:return[].concat(Object(l.a)(e),[t.payload]);case d:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case p:return e.filter((function(e){return e._id!==t.payload}));default:return e}},g=n(13),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authData:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return localStorage.setItem("profile",JSON.stringify(Object(g.a)({},null===t||void 0===t?void 0:t.data))),Object(g.a)(Object(g.a)({},e),{},{authData:null===t||void 0===t?void 0:t.data});case h:return localStorage.clear(),Object(g.a)(Object(g.a)({},e),{},{authData:null});default:return e}},O=Object(s.b)({posts:f,auth:x}),v=n(178),y=n(41),w=n(14),C=n(27),k=n(168),S=n(135),N=n(170),I=n(183),T=n(171),D=n(77),F=n(164),L=n(167),_=Object(F.a)((function(e){return{appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none"},image:{marginLeft:"15px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px"},profile:{display:"flex",justifyContent:"space-between",width:"400px"},userName:{display:"flex",alignItems:"center"},brandContainer:{display:"flex",alignItems:"center"},purple:{color:e.palette.getContrastText(L.a[500]),backgroundColor:L.a[500]}}})),A=n.p+"static/media/memories.9cfa8a46.png",E=n(2),z=function(){var e=_(),t=Object(a.useState)(JSON.parse(localStorage.getItem("profile"))),n=Object(C.a)(t,2),r=n[0],c=n[1],s=Object(i.b)(),o=Object(w.f)(),l=Object(w.g)(),u=function(){s({type:"LOGOUT"}),o.push("/"),c(null)};return Object(a.useEffect)((function(){var e=null===r||void 0===r?void 0:r.token;e&&(1e3*Object(D.a)(e).exp<(new Date).getTime()&&u());c(JSON.parse(localStorage.getItem("profile")))}),[l]),Object(E.jsxs)(k.a,{className:e.appBar,position:"static",color:"inherit",children:[Object(E.jsxs)("div",{className:e.brandContainer,children:[Object(E.jsx)(S.a,{component:y.b,to:"/",className:e.heading,variant:"h2",align:"center",children:"Memories"}),Object(E.jsx)("img",{className:e.image,src:A,alt:"icon",height:"60"})]}),Object(E.jsx)(N.a,{className:e.toolbar,children:r?Object(E.jsxs)("div",{className:e.profile,children:[Object(E.jsx)(I.a,{className:e.purple,alt:r.result.name,src:r.result.imageUrl,children:r.result.name.charAt(0)}),Object(E.jsx)(S.a,{className:e.userName,variant:"h6",children:r.result.name}),Object(E.jsx)(T.a,{variant:"contained",className:e.logout,color:"secondary",onClick:u,children:"Logout"})]}):Object(E.jsx)(T.a,{component:y.b,to:"/auth",variant:"contained",color:"primary",children:"Sign In"})})]})},B=n(182),P=n(177),W=n(12),U=n.n(W),J=n(21),M=n(82),H=n.n(M).a.create({baseURL:"https://memories-project-ayuj.herokuapp.com"});H.interceptors.request.use((function(e){return localStorage.getItem("profile")&&(e.headers.Authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token)),e}));var G=function(e){return H.patch("/posts/".concat(e,"/likePost"))},R=function(e,t){return H.patch("/posts/".concat(e),t)},q=function(e){return H.delete("/posts/".concat(e))},V=function(e){return H.post("/user/signin",e)},K=function(e){return H.post("/user/signup",e)},Y=function(e){return function(){var t=Object(J.a)(U.a.mark((function t(n){var a,r;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,H.post("/posts",c);case 3:a=t.sent,r=a.data,n({type:u,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},Z=function(e,t){return function(){var n=Object(J.a)(U.a.mark((function n(a){var r,c;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,R(e,t);case 3:r=n.sent,c=r.data,a({type:d,payload:c}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},Q=n(176),X=n(172),$=n(173),ee=n(174),te=n(175),ne=n(84),ae=n.n(ne),re=n(86),ce=n.n(re),ie=n(85),se=n.n(ie),oe=n(83),le=n.n(oe),ue=n(64),de=n.n(ue),pe=Object(F.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),je=function(e){var t,n,a,r,c=e.post,s=e.setCurrentId,o=Object(i.b)(),l=pe(),u=JSON.parse(localStorage.getItem("profile")),d=function(){return c.likes.length>0?c.likes.find((function(e){var t,n;return e===((null===u||void 0===u||null===(t=u.result)||void 0===t?void 0:t.googleId)||(null===u||void 0===u||null===(n=u.result)||void 0===n?void 0:n._id))}))?Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(ae.a,{fontSize:"small"}),"\xa0",c.likes.length>2?"You and ".concat(c.likes.length-1," others"):"".concat(c.likes.length," like").concat(c.likes.length>1?"s":"")]}):Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(de.a,{fontSize:"small"}),"\xa0",c.likes.length," ",1===c.likes.length?"Like":"Likes"]}):Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(de.a,{fontSize:"small"}),"\xa0Like"]})};return Object(E.jsxs)(X.a,{className:l.card,children:[Object(E.jsx)($.a,{className:l.media,image:c.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",title:c.title}),Object(E.jsxs)("div",{className:l.overlay,children:[Object(E.jsx)(S.a,{variant:"h6",children:c.name}),Object(E.jsx)(S.a,{variant:"body2",children:le()(c.createdAt).fromNow()})]}),((null===u||void 0===u||null===(t=u.result)||void 0===t?void 0:t.googleId)===(null===c||void 0===c?void 0:c.creator)||(null===u||void 0===u||null===(n=u.result)||void 0===n?void 0:n._id)===(null===c||void 0===c?void 0:c.creator))&&Object(E.jsx)("div",{className:l.overlay2,children:Object(E.jsx)(T.a,{style:{color:"white"},size:"small",onClick:function(){return s(c._id)},children:Object(E.jsx)(se.a,{fontSize:"default"})})}),Object(E.jsx)("div",{className:l.details,children:Object(E.jsx)(S.a,{variant:"body2",color:"textSecondary",component:"h2",children:c.tags.map((function(e){return"#".concat(e," ")}))})}),Object(E.jsx)(S.a,{className:l.title,gutterBottom:!0,variant:"h5",component:"h2",children:c.title}),Object(E.jsx)(ee.a,{children:Object(E.jsx)(S.a,{variant:"body2",color:"textSecondary",component:"p",children:c.message})}),Object(E.jsxs)(te.a,{className:l.cardActions,children:[Object(E.jsx)(T.a,{size:"small",color:"primary",disabled:!(null===u||void 0===u?void 0:u.result),onClick:function(){return o((e=c._id,function(){var t=Object(J.a)(U.a.mark((function t(n){var a,r;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,G(e);case 3:a=t.sent,r=a.data,n({type:b,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:Object(E.jsx)(d,{})}),((null===u||void 0===u||null===(a=u.result)||void 0===a?void 0:a.googleId)===(null===c||void 0===c?void 0:c.creator)||(null===u||void 0===u||null===(r=u.result)||void 0===r?void 0:r._id)===(null===c||void 0===c?void 0:c.creator))&&Object(E.jsxs)(T.a,{size:"small",color:"primary",onClick:function(){return o((e=c._id,function(){var t=Object(J.a)(U.a.mark((function t(n){return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,q(e);case 3:n({type:p,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(E.jsx)(ce.a,{fontSize:"small"})," Delete"]})]})]})},be=Object(F.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),me=function(e){var t=e.setCurrentId,n=Object(i.c)((function(e){return e.posts})),a=be();return n.length?Object(E.jsx)(P.a,{className:a.container,container:!0,alignItems:"stretch",spacing:3,children:n.map((function(e){return Object(E.jsx)(P.a,{item:!0,xs:12,sm:6,md:6,children:Object(E.jsx)(je,{post:e,setCurrentId:t})},e._id)}))}):Object(E.jsx)(Q.a,{})},he=n(94),fe=n(181),ge=n(87),xe=n.n(ge),Oe=Object(F.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),ve=function(e){var t,n=e.currentId,r=e.setCurrentId,c=Object(a.useState)({title:"",message:"",tags:"",selectedFile:""}),s=Object(C.a)(c,2),o=s[0],l=s[1],u=Object(i.c)((function(e){return n?e.posts.find((function(e){return e._id===n})):null})),d=Object(i.b)(),p=Oe(),j=JSON.parse(localStorage.getItem("profile"));Object(a.useEffect)((function(){u&&l(u)}),[u]);var b=function(){r(0),l({title:"",message:"",tags:"",selectedFile:""})},m=function(){var e=Object(J.a)(U.a.mark((function e(t){var a,r;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),0===n?(d(Y(Object(g.a)(Object(g.a)({},o),{},{name:null===j||void 0===j||null===(a=j.result)||void 0===a?void 0:a.name}))),b()):(d(Z(n,Object(g.a)(Object(g.a)({},o),{},{name:null===j||void 0===j||null===(r=j.result)||void 0===r?void 0:r.name}))),b());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(null===j||void 0===j||null===(t=j.result)||void 0===t?void 0:t.name)?Object(E.jsx)(he.a,{className:p.paper,children:Object(E.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(p.root," ").concat(p.form),onSubmit:m,children:[Object(E.jsx)(S.a,{variant:"h6",children:n?'Editing "'.concat(u.title,'"'):"Creating a Memory"}),Object(E.jsx)(fe.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:o.title,onChange:function(e){return l(Object(g.a)(Object(g.a)({},o),{},{title:e.target.value}))}}),Object(E.jsx)(fe.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,multiline:!0,rows:4,value:o.message,onChange:function(e){return l(Object(g.a)(Object(g.a)({},o),{},{message:e.target.value}))}}),Object(E.jsx)(fe.a,{name:"tags",variant:"outlined",label:"Tags (coma separated)",fullWidth:!0,value:o.tags,onChange:function(e){return l(Object(g.a)(Object(g.a)({},o),{},{tags:e.target.value.split(",")}))}}),Object(E.jsx)("div",{className:p.fileInput,children:Object(E.jsx)(xe.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return l(Object(g.a)(Object(g.a)({},o),{},{selectedFile:t}))}})}),Object(E.jsx)(T.a,{className:p.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0,children:"Submit"}),Object(E.jsx)(T.a,{variant:"contained",color:"secondary",size:"small",onClick:b,fullWidth:!0,children:"Clear"})]})}):Object(E.jsx)(he.a,{className:p.paper,children:Object(E.jsx)(S.a,{variant:"h6",align:"center",children:"Please Sign In to create your own memories and like other's memories."})})},ye=function(){var e=Object(a.useState)(0),t=Object(C.a)(e,2),n=t[0],r=t[1],c=Object(i.b)();return Object(a.useEffect)((function(){c(function(){var e=Object(J.a)(U.a.mark((function e(t){var n,a;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.get("/posts");case 3:n=e.sent,a=n.data,t({type:j,payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[n,c]),Object(E.jsx)(B.a,{in:!0,children:Object(E.jsx)(v.a,{children:Object(E.jsxs)(P.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:3,children:[Object(E.jsx)(P.a,{item:!0,xs:12,sm:7,children:Object(E.jsx)(me,{setCurrentId:r})}),Object(E.jsx)(P.a,{item:!0,xs:12,sm:4,children:Object(E.jsx)(ve,{currentId:n,setCurrentId:r})})]})})})},we=n(57),Ce=n(88),ke=n(91),Se=n.n(ke),Ne=Object(F.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},googleButton:{marginBottom:e.spacing(2)}}})),Ie=function(){return Object(E.jsx)("svg",{style:{width:"20px",height:"20px"},viewBox:"0 0 24 24",children:Object(E.jsx)("path",{fill:"currentColor",d:"M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"})})},Te=n(179),De=n(180),Fe=n(89),Le=n.n(Fe),_e=n(90),Ae=n.n(_e),Ee=function(e){var t=e.name,n=e.handleChange,a=e.label,r=e.half,c=e.autoFocus,i=e.type,s=e.handleShowPassword;return Object(E.jsx)(P.a,{item:!0,xs:12,sm:r?6:12,children:Object(E.jsx)(fe.a,{name:t,onChange:n,variant:"outlined",required:!0,fullWidth:!0,label:a,autoFocus:c,type:i,InputProps:"password"===t?{endAdornment:Object(E.jsx)(Te.a,{position:"end",children:Object(E.jsx)(De.a,{onClick:s,children:"password"===i?Object(E.jsx)(Le.a,{}):Object(E.jsx)(Ae.a,{})})})}:null})})},ze={firstName:"",lastName:"",email:"",password:"",confirmPassword:""},Be=function(){var e=Ne(),t=Object(a.useState)(!1),n=Object(C.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(!1),o=Object(C.a)(s,2),l=o[0],u=o[1],d=Object(a.useState)(ze),p=Object(C.a)(d,2),j=p[0],b=p[1],h=Object(i.b)(),f=Object(w.f)(),x=function(e){b(Object(g.a)(Object(g.a)({},j),{},Object(we.a)({},e.target.name,e.target.value)))},O=function(){var e=Object(J.a)(U.a.mark((function e(t){var n,a;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=null===t||void 0===t?void 0:t.profileObj,a=null===t||void 0===t?void 0:t.tokenId;try{h({type:"AUTH",data:{result:n,token:a}}),f.push("/")}catch(r){console.log(r)}case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(E.jsx)(v.a,{component:"main",maxWidth:"xs",children:Object(E.jsxs)(he.a,{className:e.paper,elevation:3,children:[Object(E.jsx)(I.a,{className:e.avatar,children:Object(E.jsx)(Se.a,{})}),Object(E.jsx)(S.a,{variant:"h5",children:l?"Sign Up":"Sign In"}),Object(E.jsxs)("form",{className:e.form,onSubmit:function(e){e.preventDefault(),h(l?function(e,t){return function(){var n=Object(J.a)(U.a.mark((function n(a){var r,c;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,K(e);case 3:r=n.sent,c=r.data,a({type:m,data:c}),t.push("/"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}(j,f):function(e,t){return function(){var n=Object(J.a)(U.a.mark((function n(a){var r,c;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,V(e);case 3:r=n.sent,c=r.data,a({type:m,data:c}),t.push("/"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}(j,f))},children:[Object(E.jsxs)(P.a,{container:!0,spacing:2,children:[l&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(Ee,{name:"firstName",label:"First Name",handleChange:x,autoFocus:!0,half:!0}),Object(E.jsx)(Ee,{name:"lastName",label:"Last Name",handleChange:x,half:!0})]}),Object(E.jsx)(Ee,{name:"email",label:"Email Address",handleChange:x,type:"email"}),Object(E.jsx)(Ee,{name:"password",label:"Password",handleChange:x,type:r?"text":"password",handleShowPassword:function(){return c((function(e){return!e}))}}),l&&Object(E.jsx)(Ee,{name:"confirmPassword",label:"Repeat Password",handleChange:x,type:"password"})]}),Object(E.jsx)(T.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:l?"Sign Up":"Sign In"}),Object(E.jsx)(Ce.GoogleLogin,{clientId:"327324891815-1r4h719e67c2j1ood5ac0oo0ik9qg3fi.apps.googleusercontent.com",render:function(t){return Object(E.jsx)(T.a,{className:e.googleButton,color:"primary",fullWidth:!0,onClick:t.onClick,disabled:t.disabled,startIcon:Object(E.jsx)(Ie,{}),variant:"contained",children:"Google Sign In"})},onSuccess:O,onFailure:function(e){console.log(e),console.log("Google Sign In was unsuccessful. Try Again Later")},cookiePolicy:"single_host_origin"}),Object(E.jsx)(P.a,{container:!0,justify:"flex-end",children:Object(E.jsx)(P.a,{item:!0,children:Object(E.jsx)(T.a,{onClick:function(){u((function(e){return!e})),c(!1)},children:l?"Already have an account? Sign In":"Don't have an account? Sign Up"})})})]})]})})},Pe=function(){return Object(E.jsx)(y.a,{children:Object(E.jsxs)(v.a,{maxWidth:"lg",children:[Object(E.jsx)(z,{}),Object(E.jsxs)(w.c,{children:[Object(E.jsx)(w.a,{path:"/",exact:!0,component:ye}),Object(E.jsx)(w.a,{path:"/auth",exact:!0,component:Be})]})]})})},We=(n(132),Object(s.d)(O,Object(s.c)(Object(s.a)(o.a))));c.a.render(Object(E.jsx)(i.a,{store:We,children:Object(E.jsx)(Pe,{})}),document.getElementById("root"))}},[[133,1,2]]]);
//# sourceMappingURL=main.97652f7d.chunk.js.map