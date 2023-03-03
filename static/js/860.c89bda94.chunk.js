"use strict";(self.webpackChunkalter_ego_tt=self.webpackChunkalter_ego_tt||[]).push([[860],{5860:function(e,t,r){r.r(t),r.d(t,{default:function(){return C}});var n=r(9439),a=r(2791),o=r(1614),i=r(7621),s=r(890),u=r(3767),d=r(2169),l=r(9258),c=r(6151),m=r(9434),f=r(9230),p=r(9201),x=r(184),g=(0,p.Z)((0,x.jsx)("path",{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"}),"Logout"),h=r(9195),v=r(9339),Z={container:{textAlign:"center",marginTop:"15px"},card:{display:"flex",flexDirection:"column",justifyContent:"center"},welcome:{margin:"25px auto"},stack:{minHeight:"200px",marginBottom:"20px"},cardMedia:{width:"200px",borderRadius:"3px",margin:"0 auto"},buttonOpen:{margin:"10px auto"},buttonForm:{marginTop:"15px"},buttonUnAuth:{margin:"25px auto"}},b=function(){var e=(0,m.I0)(),t=(0,h.cI)(),r=t.handleSubmit,p=t.reset,b=t.control,C=(0,a.useState)(!1),S=(0,n.Z)(C,2),j=S[0],w=S[1],k=(0,a.useState)(!1),M=(0,n.Z)(k,2),y=M[0],R=M[1],W=(0,f.$G)().t,I=null!==localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):{username:"admin",password:"12345"},N=null!==localStorage.getItem("avatar")?JSON.parse(localStorage.getItem("avatar")):{userimage:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"};return(0,x.jsx)(o.Z,{sx:Z.container,children:(0,x.jsxs)(i.Z,{sx:Z.card,children:[(0,x.jsxs)(s.Z,{variant:"h4",sx:Z.welcome,children:[W("profile.welcome")," ",I.username]}),(0,x.jsx)(u.Z,{sx:Z.stack,children:(0,x.jsx)(d.Z,{sx:Z.cardMedia,component:"img",alt:"photo",image:N.userimage})}),y?(0,x.jsxs)(u.Z,{children:[(0,x.jsx)(s.Z,{variant:"h6",children:W("profile.corect")}),(0,x.jsxs)("form",{style:{display:"flex",width:"300px",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"25px auto",borderRadius:"5px",background:"#fafafad"},onSubmit:r((function(e){localStorage.setItem("avatar",JSON.stringify(e)),p(),R(!1)})),children:[(0,x.jsx)(h.Qr,{name:"userimage",control:b,defaultValue:"",render:function(e){var t=e.field,r=t.onChange,n=t.value,a=e.fieldState.error;return(0,x.jsx)(l.Z,{label:W("profile.img_link"),variant:"filled",value:n,onChange:r,error:!!a,helperText:a?a.message:null})},rules:{required:"This field is required!"}}),(0,x.jsx)(c.Z,{sx:Z.buttonForm,color:"success",type:"submit",children:W("login.submit")}),(0,x.jsx)(c.Z,{sx:Z.buttonForm,color:"warning",onClick:function(){return R(!1)},children:W("profile.cancel")})]})]}):(0,x.jsx)(c.Z,{onClick:function(){return R(!0)},sx:Z.buttonOpen,variant:"contained",children:W("profile.avatar")}),!j&&(0,x.jsx)(c.Z,{onClick:function(){return w(!0)},sx:Z.buttonOpen,variant:"contained",children:W("profile.edit_data")}),j&&(0,x.jsxs)(u.Z,{children:[(0,x.jsx)(s.Z,{sx:{marginTop:"15px"},variant:"h6",children:W("profile.change_data")}),(0,x.jsxs)("form",{style:{display:"flex",width:"300px",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"25px auto",borderRadius:"5px",background:"#fafafad"},onSubmit:r((function(e){localStorage.setItem("user",JSON.stringify(e)),p(),w(!1)})),children:[(0,x.jsx)(h.Qr,{name:"username",control:b,defaultValue:"",render:function(e){var t=e.field,r=t.onChange,n=t.value,a=e.fieldState.error;return(0,x.jsx)(l.Z,{label:W("profile.new_name"),variant:"filled",value:n,onChange:r,error:!!a,helperText:a?a.message:null})},rules:{required:"This field is required!"}}),(0,x.jsx)(h.Qr,{name:"password",control:b,defaultValue:"",render:function(e){var t=e.field,r=t.onChange,n=t.value,a=e.fieldState.error;return(0,x.jsx)(l.Z,{label:W("profile.new_password"),variant:"filled",value:n,onChange:r,error:!!a,helperText:a?a.message:null,type:"password"})},rules:{required:"Password is required!"}}),(0,x.jsx)(c.Z,{sx:Z.buttonForm,color:"success",type:"submit",children:W("login.submit")}),(0,x.jsx)(c.Z,{sx:Z.buttonForm,color:"warning",onClick:function(){return w(!1)},children:W("profile.cancel")})]})]}),(0,x.jsx)(c.Z,{sx:Z.buttonUnAuth,endIcon:(0,x.jsx)(g,{}),variant:"contained",color:"warning",onClick:function(){return e((0,v.QV)())},children:W("profile.logout")})]})})},C=a.memo(b)},2169:function(e,t,r){r.d(t,{Z:function(){return v}});var n=r(3366),a=r(7462),o=r(2791),i=r(8182),s=r(4419),u=r(1402),d=r(6934),l=r(5878),c=r(1217);function m(e){return(0,c.Z)("MuiCardMedia",e)}(0,l.Z)("MuiCardMedia",["root","media","img"]);var f=r(184),p=["children","className","component","image","src","style"],x=(0,d.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState,n=r.isMediaComponent,a=r.isImageComponent;return[t.root,n&&t.media,a&&t.img]}})((function(e){var t=e.ownerState;return(0,a.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"})})),g=["video","audio","picture","iframe","img"],h=["picture","img"],v=o.forwardRef((function(e,t){var r=(0,u.Z)({props:e,name:"MuiCardMedia"}),o=r.children,d=r.className,l=r.component,c=void 0===l?"div":l,v=r.image,Z=r.src,b=r.style,C=(0,n.Z)(r,p),S=-1!==g.indexOf(c),j=!S&&v?(0,a.Z)({backgroundImage:'url("'.concat(v,'")')},b):b,w=(0,a.Z)({},r,{component:c,isMediaComponent:S,isImageComponent:-1!==h.indexOf(c)}),k=function(e){var t=e.classes,r={root:["root",e.isMediaComponent&&"media",e.isImageComponent&&"img"]};return(0,s.Z)(r,m,t)}(w);return(0,f.jsx)(x,(0,a.Z)({className:(0,i.Z)(k.root,d),as:c,role:!S&&v?"img":void 0,ref:t,style:j,ownerState:w,src:S?v||Z:void 0},C,{children:o}))}))},7621:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(7462),a=r(3366),o=r(2791),i=r(8182),s=r(4419),u=r(6934),d=r(1402),l=r(5527),c=r(5878),m=r(1217);function f(e){return(0,m.Z)("MuiCard",e)}(0,c.Z)("MuiCard",["root"]);var p=r(184),x=["className","raised"],g=(0,u.ZP)(l.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),h=o.forwardRef((function(e,t){var r=(0,d.Z)({props:e,name:"MuiCard"}),o=r.className,u=r.raised,l=void 0!==u&&u,c=(0,a.Z)(r,x),m=(0,n.Z)({},r,{raised:l}),h=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},f,t)}(m);return(0,p.jsx)(g,(0,n.Z)({className:(0,i.Z)(h.root,o),elevation:l?8:void 0,ref:t,ownerState:m},c))}))},1614:function(e,t,r){r.d(t,{Z:function(){return w}});var n=r(4942),a=r(3366),o=r(7462),i=r(2791),s=r(8182),u=r(7312),d=r(1217),l=r(4419),c=r(7078),m=(0,r(4046).ZP)(),f=r(5080),p=r(184),x=["className","component","disableGutters","fixed","maxWidth","classes"],g=(0,f.Z)(),h=m("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t["maxWidth".concat((0,u.Z)(String(r.maxWidth)))],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),v=function(e){return(0,c.Z)({props:e,name:"MuiContainer",defaultTheme:g})},Z=function(e,t){var r=e.classes,n=e.fixed,a=e.disableGutters,o=e.maxWidth,i={root:["root",o&&"maxWidth".concat((0,u.Z)(String(o))),n&&"fixed",a&&"disableGutters"]};return(0,l.Z)(i,(function(e){return(0,d.Z)(t,e)}),r)};var b=r(4036),C=r(6934),S=r(1402),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,r=void 0===t?h:t,u=e.useThemeProps,d=void 0===u?v:u,l=e.componentName,c=void 0===l?"MuiContainer":l,m=r((function(e){var t=e.theme,r=e.ownerState;return(0,o.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!r.disableGutters&&(0,n.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,r){var n=r,a=t.breakpoints.values[n];return 0!==a&&(e[t.breakpoints.up(n)]={maxWidth:"".concat(a).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,r=e.ownerState;return(0,o.Z)({},"xs"===r.maxWidth&&(0,n.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),r.maxWidth&&"xs"!==r.maxWidth&&(0,n.Z)({},t.breakpoints.up(r.maxWidth),{maxWidth:"".concat(t.breakpoints.values[r.maxWidth]).concat(t.breakpoints.unit)}))}));return i.forwardRef((function(e,t){var r=d(e),n=r.className,i=r.component,u=void 0===i?"div":i,l=r.disableGutters,f=void 0!==l&&l,g=r.fixed,h=void 0!==g&&g,v=r.maxWidth,b=void 0===v?"lg":v,C=(0,a.Z)(r,x),S=(0,o.Z)({},r,{component:u,disableGutters:f,fixed:h,maxWidth:b}),j=Z(S,c);return(0,p.jsx)(m,(0,o.Z)({as:u,ownerState:S,className:(0,s.Z)(j.root,n),ref:t},C))}))}({createStyledComponent:(0,C.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t["maxWidth".concat((0,b.Z)(String(r.maxWidth)))],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),useThemeProps:function(e){return(0,S.Z)({props:e,name:"MuiContainer"})}}),w=j}}]);
//# sourceMappingURL=860.c89bda94.chunk.js.map