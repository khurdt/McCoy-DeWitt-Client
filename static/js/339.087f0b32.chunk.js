"use strict";(self.webpackChunkmccoy_dewitt_client=self.webpackChunkmccoy_dewitt_client||[]).push([[339],{3106:function(e,t,s){s.r(t),s.d(t,{default:function(){return R}});var r=s(4942),i=s(885),n=s(2791),o=s(2677),l=s(9743),a=s(3360),c=s(8932),d=s(8322),m=s(9140),x=s(5736),h=s(8213),p=s(5187),u=s(9907),j=s(7702),f=s(6973),y=s(1619),v=s(2007),Z=s.n(v);function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e},g.apply(this,arguments)}function N(e,t){if(null==e)return{};var s,r,i=function(e,t){if(null==e)return{};var s,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)s=n[r],t.indexOf(s)>=0||(i[s]=e[s]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)s=n[r],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(i[s]=e[s])}return i}var C=(0,n.forwardRef)((function(e,t){var s=e.color,r=void 0===s?"currentColor":s,i=e.size,o=void 0===i?24:i,l=N(e,["color","size"]);return n.createElement("svg",g({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),n.createElement("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}))}));C.propTypes={color:Z().string,size:Z().oneOfType([Z().string,Z().number])},C.displayName="Phone";var w=C,S=s(2109),b=s(9762),k=s(8035),I=s(7048),P=s(9136),T=s(7810),O=s(184);function R(e){var t,s=e.projects,v=e.userData,Z=e.primaryColor,g=(e.secondaryColor,e.createProjectButton),N=e.setCreateProjectButton,C=e.navigate,R=e.setSnackBarInfo,_=e.setUserData,z=e.setProjects,E=e.setShowLogin,B=e.setForgotPassword,L=(0,n.useState)(""),F=(0,i.Z)(L,2),G=F[0],A=F[1],W=(0,n.useState)(""),q=(0,i.Z)(W,2),D=q[0],M=q[1],U=(0,n.useState)(""),H=(0,i.Z)(U,2),Y=H[0],J=H[1],K=(0,n.useState)(""),Q=(0,i.Z)(K,2),V=Q[0],X=Q[1],$=(0,n.useState)(""),ee=(0,i.Z)($,2),te=ee[0],se=ee[1],re=(0,n.useState)(""),ie=(0,i.Z)(re,2),ne=ie[0],oe=ie[1],le=(0,n.useState)(""),ae=(0,i.Z)(le,2),ce=ae[0],de=ae[1],me=(0,n.useState)(!1),xe=(0,i.Z)(me,2),he=xe[0],pe=xe[1],ue=(0,n.useState)(!1),je=(0,i.Z)(ue,2),fe=je[0],ye=je[1],ve=(0,n.useState)(""),Ze=(0,i.Z)(ve,2),ge=Ze[0],Ne=Ze[1],Ce=(0,n.useState)(!1),we=(0,i.Z)(Ce,2),Se=we[0],be=we[1],ke=(0,n.useState)(!1),Ie=(0,i.Z)(ke,2),Pe=Ie[0],Te=Ie[1],Oe=(0,n.useState)({title:null,action:null,_id:null}),Re=(0,i.Z)(Oe,2),_e=Re[0],ze=Re[1],Ee=(0,n.useState)({}),Be=(0,i.Z)(Ee,2),Le=Be[0],Fe=Be[1];(0,n.useEffect)((function(){g&&(be(!0),N(!1),window.scrollTo({top:0,left:0,behavior:"instant"})),A(v.username),se(v.email),M(v.firstName),J(v.lastName),v.company?de(v.company):de("Individual Client"),v.phone&&X(v.phone),v.address&&oe(v.address),v.color&&Ne(v.color)}),[s,v]);var Ge={username:G,email:te,firstName:D,lastName:Y,company:ce,phone:V,address:ne,color:ge},Ae=function(){var e={},t=!0;if(D?e.firstName="":(e.firstName="*required",t=!1),Y?e.lastName="":(e.lastName="*required",t=!1),G?e.username="":(e.username="*required",t=!1),te?-1===te.indexOf("@")?(e.email="*invalid",t=!1):e.email="":(e.email="*required",t=!1),void 0!==V){var s=V.replace(/[^\d]/g,"").length;s>0&&s<10&&(e.phone="*invalid",t=!1)}else e.phone="";return Fe(e),t},We=function(e){(0,k.rR)(e,be,R,z),(0,k.mW)()},qe=function(e){(0,k.zj)(R,C)},De=D.slice(0,1)+Y.slice(0,1);return(0,O.jsxs)("div",{children:[Se&&(0,O.jsx)(I.Z,{setShowCreateProject:be,username:G,primaryColor:Z,setSnackBarInfo:R,setProjects:z}),Pe&&(0,O.jsx)(T.Z,{setShowConfirmation:Te,showConfirmation:Pe,confirmationInfo:_e,primaryColor:Z}),(0,O.jsxs)("div",{style:{position:"relative"},children:[(0,O.jsx)("div",{className:"profile-background"}),(0,O.jsx)(h.Ee,{publicId:"cld-sample-2",className:"profileImage profileImage"}),(0,O.jsx)("div",{style:{position:"relative"},children:(0,O.jsxs)("div",{style:{backgroundColor:ge},className:"profile-badge",children:[De,he&&(0,O.jsx)("input",{className:"colorInput",type:"color",value:ge,onChange:function(e){return Ne(e.target.value)}})]})})]}),(0,O.jsxs)("div",{className:Se?"hideProfile":"mt-4 mb-5",style:{position:"relative"},children:[(0,O.jsx)("div",{style:(t={position:"-webkit-sticky"},(0,r.Z)(t,"position","sticky"),(0,r.Z)(t,"top","10px"),(0,r.Z)(t,"zIndex","1000"),t),children:he?(0,O.jsxs)("div",{className:"editPosition",children:[(0,O.jsx)(a.Z,{style:{backgroundColor:"green",width:"50px",marginRight:"10px"},onClick:function(){(0,k.Nq)(Ae,Ge,pe,R,_)},className:"profileEditButton",children:(0,O.jsx)(u.Z,{color:"white"})}),(0,O.jsx)(a.Z,{style:{backgroundColor:"red",color:"white",width:"50px"},onClick:function(){pe(!1),(0,k.is)(_)},className:"profileCancelButton",children:(0,O.jsx)(j.Z,{color:"white"})})]}):(0,O.jsx)("div",{className:"editPosition",children:(0,O.jsxs)(c.Z,{className:"profileEditButton",children:[(0,O.jsx)(c.Z.Toggle,{as:p.Z,id:"dropdown-basic",style:{width:"30px",height:"30px",cursor:"pointer",border:"3px solid ".concat(ge),borderRadius:"50%"},alt:"options icon"}),(0,O.jsxs)(c.Z.Menu,{children:[(0,O.jsx)(c.Z.Item,{onClick:function(){pe(!0)},children:(0,O.jsx)("div",{className:"text-center p-3",children:"Edit Profile"})}),(0,O.jsx)(c.Z.Item,{onClick:function(){E(!0),B(!0)},children:(0,O.jsx)("div",{className:"text-center p-3",children:"Reset Password"})}),(0,O.jsx)(c.Z.Item,{onClick:function(){Te(!0),ze({title:"Remove your account?",action:qe,_id:G})},children:(0,O.jsx)("div",{className:"text-center p-3",style:{color:"red"},children:"Delete Account"})})]})]})})}),(0,O.jsx)(m.Z,{className:"profileIntro profileIntro ml-auto",children:he?(0,O.jsxs)("div",{className:"mt-5",children:[(0,O.jsxs)(d.Z,{style:{display:"flex",maxWidth:"200px"},children:[(0,O.jsx)(d.Z.Group,{className:"m-1",children:(0,O.jsxs)("div",{style:{position:"relative"},children:[(0,O.jsx)(d.Z.Control,{type:"text",placeholder:"First Name",value:D,onChange:function(e){M(e.target.value),Le.firstName&&Ae()}}),Le.firstName&&(0,O.jsx)(b.Z,{message:Le.firstName,type:"error",profile:!0})]})}),(0,O.jsx)(d.Z.Group,{className:"m-1",children:(0,O.jsxs)("div",{style:{position:"relative"},children:[(0,O.jsx)(d.Z.Control,{type:"text",placeholder:"Last Name",value:Y,onChange:function(e){J(e.target.value),Le.lastName&&Ae()}}),Le.lastName&&(0,O.jsx)(b.Z,{message:Le.lastName,type:"error",profile:!0})]})})]}),(0,O.jsx)(d.Z,{style:{maxWidth:"200px"},children:(0,O.jsx)(d.Z.Group,{className:"m-1",children:(0,O.jsxs)("div",{style:{position:"relative"},children:[(0,O.jsx)(d.Z.Control,{type:"text",placeholder:"Company",value:ce,onChange:function(e){de(e.target.value),Le.company&&Ae()}}),Le.company&&(0,O.jsx)(b.Z,{message:Le.company,type:"error",profile:!0})]})})})]}):(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(m.Z.Title,{className:"profile-name",children:[D," ",Y]}),(0,O.jsx)(m.Z.Title,{className:"company-name",children:ce})]})}),(0,O.jsx)(m.Z,{className:"secondaryInfo",children:(0,O.jsx)(l.Z,{className:"justify-content-md-center mt-3",children:he?(0,O.jsx)(d.Z,{children:(0,O.jsx)(l.Z,{className:"justify-content-md-center",children:(0,O.jsxs)(o.Z,{className:"formSecondaryInfo",children:[(0,O.jsx)(d.Z.Group,{className:"m-1 form_item",children:(0,O.jsxs)("div",{style:{position:"relative"},children:[(0,O.jsx)(d.Z.Control,{type:"text",placeholder:"Username",value:G,onChange:function(e){A(e.target.value),Le.username&&Ae()}}),Le.username&&(0,O.jsx)(b.Z,{message:Le.username,type:"error",profile:!0})]})}),(0,O.jsx)(d.Z.Group,{className:"m-1 form_item",children:(0,O.jsxs)("div",{style:{position:"relative"},children:[(0,O.jsx)(d.Z.Control,{type:"text",placeholder:"Email",value:te,onChange:function(e){se(e.target.value),Le.email&&Ae()}}),Le.email&&(0,O.jsx)(b.Z,{message:Le.email,type:"error",profile:!0})]})}),(0,O.jsx)(d.Z.Group,{className:"m-1 form_item",children:(0,O.jsxs)("div",{style:{position:"relative"},children:[(0,O.jsx)(d.Z.Control,{type:"text",placeholder:"Phone",value:V,onChange:function(e){X(function(e){if(!e)return e;var t=e.replace(/[^\d]/g,""),s=t.length;return s<4?t:s<7?"(".concat(t.slice(0,3),") ").concat(t.slice(3)):"(".concat(t.slice(0,3),") ").concat(t.slice(3,6),"-").concat(t.slice(6,10))}(e.target.value)),Le.phone&&Ae()}}),Le.phone&&(0,O.jsx)(b.Z,{message:Le.phone,type:"error",profile:!0})]})}),(0,O.jsx)(d.Z.Group,{className:"m-1 form_item",children:(0,O.jsxs)("div",{style:{position:"relative"},children:[(0,O.jsx)(d.Z.Control,{type:"text",placeholder:"Address",value:ne,onChange:function(e){oe(e.target.value),Le.address&&Ae()}}),Le.address&&(0,O.jsx)(b.Z,{message:Le.address,type:"error",profile:!0})]})})]})})}):(0,O.jsx)(O.Fragment,{children:(0,O.jsxs)(o.Z,{className:"m-2 notEditingSecondaryInfo",children:[(0,O.jsxs)(m.Z.Title,{style:{fontSize:"17px"},children:[(0,O.jsx)(f.Z,{style:{width:"17px",height:"17px",color:ge,marginRight:"10px"}}),G]}),(0,O.jsxs)(m.Z.Title,{style:{fontSize:"17px"},children:[(0,O.jsx)(y.Z,{style:{width:"17px",height:"17px",color:ge,marginRight:"10px"}}),te]}),(0,O.jsxs)(m.Z.Title,{style:{fontSize:"17px"},children:[(0,O.jsx)(w,{style:{width:"17px",height:"17px",color:ge,marginRight:"10px"}}),V||"none"]}),(0,O.jsxs)(m.Z.Title,{style:{fontSize:"17px"},children:[(0,O.jsx)(S.Z,{style:{width:"17px",height:"17px",color:ge,marginRight:"10px"}}),ne||"no address"]})]})})})}),(0,O.jsx)(l.Z,{style:{maxWidth:"1200px"},className:"justify-content-center m-auto",children:(0,O.jsx)(o.Z,{className:"m-4",children:(0,O.jsxs)(m.Z,{style:{color:"black",border:"none"},children:[(0,O.jsxs)("div",{style:{display:"flex"},children:[(0,O.jsx)(m.Z.Title,{children:"Projects"}),(0,O.jsx)("div",{children:fe?(0,O.jsx)(O.Fragment,{children:(0,O.jsx)(u.Z,{onClick:function(){ye(!1),(0,k.mW)()},style:{color:"green",cursor:"pointer",marginLeft:"10px"}})}):(0,O.jsxs)(c.Z,{style:{marginLeft:"10px"},children:[(0,O.jsx)(c.Z.Toggle,{as:p.Z,style:{cursor:"pointer",width:"25px",height:"25px"},id:"dropdown-basic"}),(0,O.jsxs)(c.Z.Menu,{children:[(0,O.jsx)(c.Z.Item,{onClick:function(){be(!0),window.scrollTo(0,0)},children:(0,O.jsx)("div",{className:"text-center p-3",style:{color:"green"},children:"Add Project"})}),(0,O.jsx)(c.Z.Item,{onClick:function(){ye(!0)},children:(0,O.jsx)("div",{className:"text-center p-3",style:{color:"red"},children:"Remove Project"})})]})]})})]}),(0,O.jsx)("hr",{}),(0,O.jsxs)(l.Z,{className:"m-auto",style:{justifyContent:"center"},children:[0===s.length&&(0,O.jsx)("div",{style:{height:"50vh"},className:"text-center",children:"You Don't Have Any Projects"}),s.length>0&&s.map((function(e,t){var s=k.uZ.find((function(t){return e.service.toLowerCase().includes(t.image)}));return(0,O.jsxs)(m.Z,{className:"m-3",style:{width:"18rem",margin:"0",padding:"0"},children:[(0,O.jsxs)("div",{style:{position:"relative"},children:[(0,O.jsx)(m.Z.Img,{style:{height:"190px"},as:h.Ee,publicId:s?s.image:"custom"}),(0,O.jsx)("div",{className:"service-title",children:e.service})]}),(0,O.jsxs)(m.Z.Body,{children:[(0,O.jsxs)(m.Z.Text,{children:["Status: ",(0,O.jsx)(x.Z,{className:"p-2",children:e.status.title})]}),(0,O.jsx)(m.Z.Text,{className:"text-center",style:{fontSize:"14px"},children:e.description}),(0,O.jsx)(m.Z.Footer,{children:(0,O.jsx)(l.Z,{className:"justify-content-center",children:fe?(0,O.jsx)(a.Z,{variant:"danger",onClick:function(){Te(!0),ze({title:"Remove this project?",action:We,_id:e._id})},children:"remove"}):(0,O.jsx)(P.Z,{primaryColor:Z,onClickFunction:function(){C("project",{state:{selectedProject:e,selectedService:s}})},text:"See Project",login:!0,submitButton:!0})})})]})]},t)}))]})]})})})]})]})}}}]);
//# sourceMappingURL=339.087f0b32.chunk.js.map