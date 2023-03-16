"use strict";(self.webpackChunkmccoy_dewitt_client=self.webpackChunkmccoy_dewitt_client||[]).push([[89],{7810:function(e,t,r){r.d(t,{Z:function(){return u}});r(2791);var n=r(3360),i=r(5316),o=r(9743),s=r(2677),c=r(2609),l=r(6426),a=r(184);function u(e){var t=e.confirmationInfo,r=e.setShowConfirmation,u=e.showConfirmation,d=e.primaryColor,p=t.title,h=t.action,x=t._id,f=function(){return r(!1)};return(0,a.jsxs)(i.Z,{show:u,onHide:f,children:[(0,a.jsx)(i.Z.Header,{closeButton:!0,children:(0,a.jsx)(i.Z.Title,{children:p})}),(0,a.jsx)(i.Z.Body,{style:{display:"flex",margin:"auto",justifyContent:"center"},children:(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(s.Z,{className:"m-3",children:(0,a.jsxs)(n.Z,{style:{width:"120px",borderColor:d},variant:"light",onClick:f,children:[(0,a.jsx)("span",{className:"m-3",children:"No"}),(0,a.jsx)(c.Z,{width:15,height:15})]})}),(0,a.jsx)(s.Z,{className:"m-3",children:(0,a.jsxs)(n.Z,{style:{width:"120px"},variant:"danger",onClick:function(){h(x),f()},children:[(0,a.jsx)("span",{className:"m-3",children:"Yes"}),(0,a.jsx)(l.Z,{width:15,height:15})]})})]})}),(0,a.jsx)(i.Z.Footer,{children:(0,a.jsx)(n.Z,{variant:"secondary",onClick:f,children:"Close"})})]})}},7048:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(1413),i=r(885),o=r(2791),s=r(7702),c=r(1587),l=r(8035),a=r(9140),u=r(9743),d=r(8322),p=r(3053),h=r(9136),x=r(9762),f=r(184);function m(e){var t=e.setShowCreateProject,r=e.username,m=e.primaryColor,j=e.setSnackBarInfo,y=e.setAdminProjects,g=e.setProjects,v=(0,o.useState)(!1),Z=(0,i.Z)(v,2),b=Z[0],w=Z[1],C=(0,o.useState)({}),O=(0,i.Z)(C,2),k=O[0],N=O[1],P=(0,o.useState)(!1),T=(0,i.Z)(P,2),S=T[0],E=T[1],L=(0,o.useState)(0),I=(0,i.Z)(L,2),z=I[0],W=I[1],B=(0,o.useState)({}),R=(0,i.Z)(B,2),F=R[0],D=R[1],A=window.innerWidth<700,Y=(0,o.useState)(""),G=(0,i.Z)(Y,2),H=G[0],_=G[1],q=(0,o.useState)(""),M=(0,i.Z)(q,2),K=M[0],V=M[1],X=(0,o.useState)(""),$=(0,i.Z)(X,2),J=$[0],Q=$[1],U=(0,o.useState)(""),ee=(0,i.Z)(U,2),te=ee[0],re=ee[1],ne=(0,o.useState)({using:!1,claimNumber:"",dateOfDamage:"",dateOfInspection:""}),ie=(0,i.Z)(ne,2),oe=ie[0],se=ie[1],ce={service:H,description:J,location:te,insuranceClaim:oe,users:[r],status:{title:"pending review",description:"we have not yet reviewed your submitted project, thank you for waiting"}};(0,o.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"instant"})}),[]);var le=function(){var e=!0,t={};return H||(t.serviceType="*required",e=!1),J||(t.description="*required",e=!1),te||(t.location="*required",e=!1),t.serviceType?W(1):t.description?W(2):t.location&&W(3),D(t),e},ae=function(){return K?(D((0,n.Z)((0,n.Z)({},F),{},{projectId:""})),!0):(D((0,n.Z)((0,n.Z)({},F),{},{projectId:"*required"})),!1)};return(0,f.jsx)("div",{className:"createProjectContainer",style:{position:"absolute",minHeight:"500px"},children:(0,f.jsxs)("div",{className:"createProjectContent",style:{position:"absolute",minHeight:"500px"},children:[(0,f.jsx)(u.Z,{className:"justify-content-end",style:{width:"100%"},children:(0,f.jsx)(s.Z,{className:"createProject-closeButton",onClick:function(){return t(!1)}})}),(0,f.jsxs)(u.Z,{className:"justify-content-center text-center mb-3",style:{height:1===z&&!b&&A&&"900px"},children:[z>0&&(0,f.jsxs)("div",{style:{display:"flex",justifyContent:"center",marginRight:"60px"},children:[(0,f.jsx)("div",{style:{width:"50px"},children:oe.using&&4===z?(0,f.jsx)(c.Z,{style:{cursor:"pointer"},width:17,height:17,onClick:function(){return se((0,n.Z)((0,n.Z)({},oe),{},{using:!1}))}}):(0,f.jsx)(c.Z,{style:{cursor:"pointer"},width:17,height:17,onClick:function(){return W(z-1)}})}),(0,f.jsxs)("div",{style:{width:"20px"},children:[z," -"]})]}),0===z&&(0,f.jsx)("div",{children:(0,f.jsx)(a.Z,{style:{border:"none"},children:S?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a.Z.Title,{className:"m-4",children:"Add Your Project ID"}),(0,f.jsxs)(u.Z,{className:"justify-content-center",children:[(0,f.jsx)(d.Z,{style:{maxWidth:"500px",paddingRight:"15px",paddingLeft:"15px"},children:(0,f.jsx)(d.Z.Group,{children:(0,f.jsxs)(p.Z,{label:"Project ID",className:"mb-3",children:[(0,f.jsx)(d.Z.Control,{value:K,placeholder:"Project ID",type:"text",onChange:function(e){V(e.target.value),F.projectId&&ae()}}),F.projectId&&(0,f.jsx)(x.Z,{message:F.projectId,type:"error"})]})})}),(0,f.jsx)(c.Z,{style:{cursor:"pointer"},className:"mt-3",width:30,height:30,onClick:function(){return E(!1)}})]})]}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a.Z.Title,{className:"m-4",children:"Would You Like To Create A Project Or Add An Existing Project?"}),(0,f.jsxs)(u.Z,{className:"m-auto justify-content-center",style:{width:"70%"},children:[(0,f.jsx)("div",{style:{width:"200px",margin:"10px"},children:(0,f.jsx)(h.Z,{primaryColor:m,onClickFunction:function(){W(z+1)},currentChoice:k,setCurrentChoice:N,text:"Create Project"})}),(0,f.jsx)("div",{style:{width:"200px",margin:"10px"},children:(0,f.jsx)(h.Z,{primaryColor:m,onClickFunction:function(){E(!0)},currentChoice:k,setCurrentChoice:N,text:"Add Existing Project"})})]})]})})}),1===z&&(0,f.jsx)("div",{children:(0,f.jsxs)(a.Z,{style:{border:"none"},children:[(0,f.jsx)(a.Z.Title,{className:"m-4",children:"What Type Of Service Would You Like To Employ?"}),b?(0,f.jsxs)(u.Z,{className:"justify-content-center",children:[(0,f.jsx)(d.Z,{style:{maxWidth:"500px",paddingRight:"15px",paddingLeft:"15px"},children:(0,f.jsx)(d.Z.Group,{children:(0,f.jsxs)(p.Z,{label:"Custom Service Type",className:"mb-3",children:[(0,f.jsx)(d.Z.Control,{value:H,placeholder:"Custom Service Type",type:"text",onChange:function(e){_(e.target.value)}}),F.serviceType&&(0,f.jsx)(x.Z,{message:F.serviceType,type:"error"})]})})}),(0,f.jsx)(c.Z,{style:{cursor:"pointer"},className:"mt-3",width:30,height:30,onClick:function(){return w(!1)}})]}):(0,f.jsxs)(u.Z,{className:"m-auto justify-content-center",style:{width:"70%"},children:[l.uZ.map((function(e,t){return(0,f.jsx)("div",{style:{width:"200px",margin:"10px"},children:(0,f.jsx)(h.Z,{primaryColor:m,onClickFunction:function(){_(e.title)},currentChoice:k,setCurrentChoice:N,text:e.title})},e._id)})),(0,f.jsx)("div",{style:{width:"200px",margin:"10px"},children:(0,f.jsx)(h.Z,{primaryColor:m,onClickFunction:function(){w(!0)},currentChoice:k,setCurrentChoice:N,text:"Custom"})})]})]})}),2===z&&(0,f.jsx)("div",{children:(0,f.jsxs)(a.Z,{style:{border:"none"},children:[(0,f.jsx)(a.Z.Title,{className:"m-4",children:"Write A Brief Description Of You Want Done"}),(0,f.jsx)(u.Z,{className:"justify-content-center",children:(0,f.jsx)(d.Z,{style:{maxWidth:"700px",paddingRight:"15px",paddingLeft:"15px"},children:(0,f.jsx)(d.Z.Group,{className:"mb-3",children:(0,f.jsxs)("div",{style:{position:"relative"},children:[(0,f.jsx)(d.Z.Control,{style:{padding:"20px"},value:J,as:"textarea",rows:4,placeholder:"Description",onChange:function(e){Q(e.target.value)}}),F.description&&(0,f.jsx)(x.Z,{message:F.description,type:"error"})]})})})})]})}),3===z&&(0,f.jsx)("div",{children:(0,f.jsxs)(a.Z,{style:{border:"none"},children:[(0,f.jsx)(a.Z.Title,{className:"m-4",children:"Where Is The Location Of This Project?"}),(0,f.jsx)(u.Z,{className:"justify-content-center",children:(0,f.jsx)(d.Z,{style:{maxWidth:"700px",paddingRight:"15px",paddingLeft:"15px"},children:(0,f.jsx)(d.Z.Group,{children:(0,f.jsxs)(p.Z,{label:"Location",className:"mb-3",children:[(0,f.jsx)(d.Z.Control,{value:te,placeholder:"Location",type:"text",onChange:function(e){re(e.target.value)}}),F.location&&(0,f.jsx)(x.Z,{message:F.location,type:"error"})]})})})})]})}),4===z&&(0,f.jsx)(a.Z,{style:{border:"none"},children:oe.using?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a.Z.Title,{className:"m-4",children:"Please Provide Your Insurance Claim Information"}),(0,f.jsxs)(u.Z,{className:"justify-content-center",children:[(0,f.jsxs)(d.Z,{style:{maxWidth:"700px",paddingRight:"15px",paddingLeft:"15px"},children:[(0,f.jsx)(d.Z.Group,{children:(0,f.jsx)(p.Z,{label:"Claim Number",className:"mb-3",children:(0,f.jsx)(d.Z.Control,{placeholder:"Claim Number",type:"text",onChange:function(e){se((0,n.Z)((0,n.Z)({},oe),{},{claimNumber:e.target.value}))}})})}),(0,f.jsx)(d.Z.Group,{children:(0,f.jsx)(p.Z,{label:"Date of when the damage occured",className:"mb-3",children:(0,f.jsx)(d.Z.Control,{placeholder:"Date of when the damage occured",type:"date",onChange:function(e){se((0,n.Z)((0,n.Z)({},oe),{},{dateOfDamage:e.target.value}))}})})}),(0,f.jsx)(d.Z.Group,{children:(0,f.jsx)(p.Z,{label:"Date of the inspection",className:"mb-3",children:(0,f.jsx)(d.Z.Control,{placeholder:"Date of the inspection",type:"date",onChange:function(e){se((0,n.Z)((0,n.Z)({},oe),{},{dateOfInspection:e.target.value}))}})})})]}),(0,f.jsx)("div",{children:(0,f.jsx)(h.Z,{primaryColor:m,onClickFunction:function(){W(z+1)},submitButton:!0,currentChoice:k,setCurrentChoice:N,text:"OK"})})]})]}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a.Z.Title,{className:"m-4",children:"Would You Like To Add A Insurance Claim Right Now?"}),(0,f.jsxs)(u.Z,{className:"m-auto justify-content-center",style:{width:"70%"},children:[(0,f.jsx)("div",{style:{width:"200px",margin:"10px"},children:(0,f.jsx)(h.Z,{primaryColor:m,onClickFunction:function(){W(z+1),se((0,n.Z)((0,n.Z)({},oe),{},{using:!1}))},currentChoice:k,setCurrentChoice:N,text:"No"})}),(0,f.jsx)("div",{style:{width:"200px",margin:"10px"},children:(0,f.jsx)(h.Z,{primaryColor:m,onClickFunction:function(){se((0,n.Z)((0,n.Z)({},oe),{},{using:!0}))},currentChoice:k,setCurrentChoice:N,text:"Yes"})})]})]})}),5===z&&(0,f.jsx)(a.Z,{style:{border:"none"},children:(0,f.jsx)(a.Z.Title,{className:"m-5",children:"Ready To Submit?"})}),(0,f.jsx)(u.Z,{className:"justify-content-end",style:{width:"100%"},children:(0,f.jsx)("div",{style:{width:"200px",marginTop:"30px",marginLeft:"auto",marginRight:"auto"},children:S?(0,f.jsx)(h.Z,{primaryColor:m,onClickFunction:function(e){1===e.detail&&(0,l.B)(ae,K,t,j,y,g)},submitButton:!0,currentChoice:k,setCurrentChoice:N,text:"Add Project"}):5===z?(0,f.jsx)(h.Z,{primaryColor:m,onClickFunction:function(e){1===e.detail&&(0,l.$L)(le,ce,t,j,y,g)},submitButton:!0,currentChoice:k,setCurrentChoice:N,text:"Create Project"}):0!==z&&4!==z&&(0,f.jsx)(h.Z,{primaryColor:m,onClickFunction:function(){W(z+1)},submitButton:!0,currentChoice:k,setCurrentChoice:N,text:"OK"})})})]})]})})}},5736:function(e,t,r){var n=r(1413),i=r(5987),o=r(1694),s=r.n(o),c=r(2791),l=r(162),a=r(184),u=["bsPrefix","bg","pill","text","className","as"],d=c.forwardRef((function(e,t){var r=e.bsPrefix,o=e.bg,c=e.pill,d=e.text,p=e.className,h=e.as,x=void 0===h?"span":h,f=(0,i.Z)(e,u),m=(0,l.vE)(r,"badge");return(0,a.jsx)(x,(0,n.Z)((0,n.Z)({ref:t},f),{},{className:s()(p,m,c&&"rounded-pill",d&&"text-".concat(d),o&&"bg-".concat(o))}))}));d.displayName="Badge",d.defaultProps={bg:"primary",pill:!1},t.Z=d},9907:function(e,t,r){var n=r(2791),i=r(2007),o=r.n(i);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=(0,n.forwardRef)((function(e,t){var r=e.color,i=void 0===r?"currentColor":r,o=e.size,l=void 0===o?24:o,a=c(e,["color","size"]);return n.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),n.createElement("polyline",{points:"20 6 9 17 4 12"}))}));l.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},l.displayName="Check",t.Z=l},2109:function(e,t,r){var n=r(2791),i=r(2007),o=r.n(i);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=(0,n.forwardRef)((function(e,t){var r=e.color,i=void 0===r?"currentColor":r,o=e.size,l=void 0===o?24:o,a=c(e,["color","size"]);return n.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),n.createElement("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),n.createElement("circle",{cx:"12",cy:"10",r:"3"}))}));l.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},l.displayName="MapPin",t.Z=l},5187:function(e,t,r){var n=r(2791),i=r(2007),o=r.n(i);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=(0,n.forwardRef)((function(e,t){var r=e.color,i=void 0===r?"currentColor":r,o=e.size,l=void 0===o?24:o,a=c(e,["color","size"]);return n.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),n.createElement("circle",{cx:"12",cy:"12",r:"1"}),n.createElement("circle",{cx:"19",cy:"12",r:"1"}),n.createElement("circle",{cx:"5",cy:"12",r:"1"}))}));l.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},l.displayName="MoreHorizontal",t.Z=l},2609:function(e,t,r){var n=r(2791),i=r(2007),o=r.n(i);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=(0,n.forwardRef)((function(e,t){var r=e.color,i=void 0===r?"currentColor":r,o=e.size,l=void 0===o?24:o,a=c(e,["color","size"]);return n.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),n.createElement("circle",{cx:"12",cy:"12",r:"10"}),n.createElement("line",{x1:"4.93",y1:"4.93",x2:"19.07",y2:"19.07"}))}));l.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},l.displayName="Slash",t.Z=l},6426:function(e,t,r){var n=r(2791),i=r(2007),o=r.n(i);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=(0,n.forwardRef)((function(e,t){var r=e.color,i=void 0===r?"currentColor":r,o=e.size,l=void 0===o?24:o,a=c(e,["color","size"]);return n.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),n.createElement("polyline",{points:"3 6 5 6 21 6"}),n.createElement("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}))}));l.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},l.displayName="Trash",t.Z=l},7702:function(e,t,r){var n=r(2791),i=r(2007),o=r.n(i);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=(0,n.forwardRef)((function(e,t){var r=e.color,i=void 0===r?"currentColor":r,o=e.size,l=void 0===o?24:o,a=c(e,["color","size"]);return n.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),n.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),n.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))}));l.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},l.displayName="X",t.Z=l}}]);
//# sourceMappingURL=89.c6e10416.chunk.js.map