"use strict";(self.webpackChunkmccoy_dewitt_client=self.webpackChunkmccoy_dewitt_client||[]).push([[683],{1222:function(e,t,s){s.r(t),s.d(t,{default:function(){return k}});var n=s(4942),r=s(3433),i=s(9439),o=s(2791),c=s(8213),l=s(2677),a=s(9743),d=s(3360),u=s(9140),x=s(5736),h=s(2155),j=s(9348),m=s(9136),f=s(8035),p=s(5187),y=s(9907),Z=s(2109),C=s(6973),w=s(7048),v=s(8322),g=s(184);function N(e){var t=e.projectsInView,s=e.filter,n=e.setFilter,r=e.primaryColor,i=t?"search projects":"search clients";return(0,g.jsx)(v.Z.Control,{className:"m-auto",style:{border:"1px solid ".concat(r),color:"black",maxWidth:"300px",textAlign:"center"},onChange:function(e){return n(e.target.value)},value:s,placeholder:i})}var b=s(7810);function k(e){var t,s=e.adminClients,v=e.adminProjects,k=e.primaryColor,S=e.secondaryColor,L=e.navigate,P=e.setSnackBarInfo,T=e.username,F=e.setAdminProjects,I=e.setCreateProjectButton,B=e.createProjectButton,A=e.admin,_=(0,o.useState)(!1),E=(0,i.Z)(_,2),z=E[0],R=E[1],V=(0,o.useState)(!0),D=(0,i.Z)(V,2),H=D[0],W=D[1],M=(0,o.useState)({}),O=(0,i.Z)(M,2),U=O[0],q=O[1],G=(0,o.useState)(!1),J=(0,i.Z)(G,2),K=J[0],Q=J[1],X=(0,o.useState)(!1),Y=(0,i.Z)(X,2),$=Y[0],ee=Y[1],te=(0,o.useState)({title:null,action:null,_id:null}),se=(0,i.Z)(te,2),ne=se[0],re=se[1],ie=(0,o.useState)(""),oe=(0,i.Z)(ie,2),ce=oe[0],le=oe[1],ae=window.innerWidth<700,de=s,ue=v;if(""!==ce&&!H){var xe=s.filter((function(e){return e.firstName.toLowerCase().includes(ce.toLowerCase())})),he=s.filter((function(e){return e.lastName.toLowerCase().includes(ce.toLowerCase())})),je=s.filter((function(e){return e.username.toLowerCase().includes(ce.toLowerCase())})),me=s.filter((function(e){return e.compnay&&e.company.toLowerCase().includes(ce.toLowerCase())})),fe=xe.concat(he).concat(je).concat(me);de=(0,r.Z)(new Set(fe))}if(""!==ce&&H){var pe=v.filter((function(e){return e.service.toLowerCase().includes(ce.toLowerCase())})),ye=v.filter((function(e){return e.location.toLowerCase().includes(ce.toLowerCase())})),Ze=v.filter((function(e){return e.status.title.toLowerCase().includes(ce.toLowerCase())})),Ce=v.filter((function(e){return e.users.some((function(e,t,s){return e.toLowerCase().includes(ce.toLowerCase())}))})),we=pe.concat(ye).concat(Ze).concat(Ce);ue=(0,r.Z)(new Set(we))}(0,o.useEffect)((function(){B&&(Q(!0),I(!1),window.scrollTo({top:0,left:0,behavior:"instant"}))}),[v]);var ve=function(e){(0,f.ob)(e,P,F)};return(0,g.jsxs)(g.Fragment,{children:[$&&(0,g.jsx)(b.Z,{setShowConfirmation:ee,showConfirmation:$,confirmationInfo:ne,primaryColor:k}),K&&(0,g.jsx)(w.Z,{setShowCreateProject:Q,username:T,primaryColor:k,setSnackBarInfo:P,setAdminProjects:F}),(0,g.jsxs)("div",{style:{position:"relative",minHeight:"60vh",paddingTop:"10px"},children:[(0,g.jsx)("div",{style:(t={position:"-webkit-sticky"},(0,n.Z)(t,"position","sticky"),(0,n.Z)(t,"top","10px"),(0,n.Z)(t,"zIndex","1000"),t),children:z?(0,g.jsx)("div",{className:"adminEditPosition",style:{right:"6%"},children:(0,g.jsx)(d.Z,{style:{backgroundColor:"green",width:"50px"},onClick:function(){return R(!1)},className:"projectEditButton",children:(0,g.jsx)(y.Z,{color:"white"})})}):(0,g.jsx)("div",{className:"adminEditPosition",children:(0,g.jsxs)(h.Z,{children:[(0,g.jsx)(h.Z.Toggle,{as:p.Z,id:"dropdown-basic",style:{width:"30px",height:"30px",cursor:"pointer",border:"3px solid ".concat(k),borderRadius:"50%"},alt:"options icon"}),(0,g.jsxs)(h.Z.Menu,{children:[(0,g.jsx)(h.Z.Item,{onClick:function(){Q(!0),window.scrollTo(0,0)},children:(0,g.jsx)("div",{className:"text-center p-3",style:{color:"green"},children:"Add Project"})}),(0,g.jsx)(h.Z.Item,{onClick:function(){R(!0)},children:(0,g.jsx)("div",{className:"text-center p-3",style:{color:"red"},children:"Remove Project"})})]})]})})}),(0,g.jsxs)(a.Z,{className:"justify-content-center m-auto p-4",children:[(0,g.jsx)(l.Z,{style:{display:"flex",justifyContent:"center"},children:(0,g.jsx)(m.Z,{primaryColor:k,onClickFunction:function(){W(!0)},currentChoice:U,setCurrentChoice:q,text:"Projects",submitButton:H,small:ae})}),(0,g.jsx)(l.Z,{style:{display:"flex",justifyContent:"center"},children:(0,g.jsx)(m.Z,{primaryColor:k,currentChoice:U,setCurrentChoice:q,onClickFunction:function(){W(!1)},text:"Clients",small:ae})})]}),(0,g.jsx)(a.Z,{children:(0,g.jsx)(N,{projectsInView:H,filter:ce,setFilter:le,primaryColor:k})}),(0,g.jsx)("div",{className:K?"hideProjects":"",children:H?(0,g.jsxs)(a.Z,{className:"m-auto",style:{justifyContent:"center",position:"relative"},children:[0===ue.length&&(0,g.jsx)("div",{style:{height:"80vh"},className:"text-center p-5",children:"Didn't Find Any Projects"}),ue.length>0&&ue.map((function(e,t){var s=f.uZ.find((function(t){return e.service.toLowerCase().includes(t.image)}));return(0,g.jsx)(j.df,{triggerOnce:!0,children:function(n){var r=n.inView,i=n.ref;n.entry;return(0,g.jsxs)(u.Z,{ref:i,className:"project-card",children:[(0,g.jsxs)("div",{style:{position:"relative"},children:[r&&(0,g.jsx)(u.Z.Img,{className:"project-image",as:c.Ee,publicId:s?s.image:"custom"}),(0,g.jsx)("div",{className:"project-title",children:e.service})]}),(0,g.jsxs)(u.Z.Body,{children:[(0,g.jsxs)("div",{style:{minHeight:"120px"},children:[(0,g.jsxs)(u.Z.Text,{className:"project-status",children:["Status: ",(0,g.jsx)(x.Z,{bg:e.status.color,className:"p-2",children:e.status.title})]}),(0,g.jsxs)(u.Z.Text,{children:[(0,g.jsx)(Z.Z,{width:20,height:20,className:"mb-1"})," ",e.location]}),(0,g.jsxs)(a.Z,{style:{display:"flex"},children:[(0,g.jsx)(l.Z,{xs:2,sm:2,md:2,children:(0,g.jsx)(C.Z,{width:20,height:20})}),e.users.map((function(e,t,s){return A.includes(e)?(0,g.jsx)(g.Fragment,{}):(0,g.jsx)(l.Z,{xs:3,sm:3,md:3,style:{display:"flex",justifyContent:"left"},children:(0,g.jsx)(u.Z.Title,{style:{fontSize:"14px"},children:(0,g.jsx)(x.Z,{className:"p-2",bg:"secondary",children:e})})})}))]})]}),(0,g.jsx)(u.Z.Footer,{children:(0,g.jsx)(a.Z,{className:"justify-content-center",children:z?(0,g.jsx)(d.Z,{variant:"danger",onClick:function(){ee(!0),re({title:"Remove this project?",action:ve,_id:e._id})},children:"remove"}):(0,g.jsx)(d.Z,{className:"project-button",style:{backgroundColor:k,color:"black"},onClick:function(){L("project",{state:{selectedProject:e,selectedService:s}})},children:"See Project"})})})]})]},t)}})}))]}):(0,g.jsxs)(a.Z,{className:"m-auto",style:{justifyContent:"center"},children:[0===de.length&&(0,g.jsx)("div",{style:{height:"80vh"},className:"text-center p-5",children:"Didn't Find Any Clients"}),de.map((function(e,t){var s=e.firstName.slice(0,1)+e.lastName.slice(0,1);return(0,g.jsxs)(u.Z,{className:"m-3",style:{width:"18rem",margin:"0",padding:"0"},children:[(0,g.jsxs)("div",{style:{display:"flex"},children:[(0,g.jsx)("div",{style:{backgroundColor:e.color},className:"client-badge",children:s}),(0,g.jsxs)(u.Z.Text,{className:"m-auto text-center",style:{fontSize:"20px"},children:[e.firstName," ",e.lastName]})]}),(0,g.jsxs)(u.Z.Body,{children:[(0,g.jsxs)(u.Z.Text,{children:[(0,g.jsx)("span",{children:"Username: "}),(0,g.jsx)(x.Z,{bg:"secondary",className:"p-2",children:e.username})]}),(0,g.jsxs)(u.Z.Text,{children:[(0,g.jsx)("span",{style:{color:S},children:"Company: "}),e.company]}),(0,g.jsxs)(u.Z.Text,{children:[(0,g.jsx)("span",{style:{color:S},children:"Address: "}),e.address]}),(0,g.jsxs)(u.Z.Footer,{children:[(0,g.jsxs)(u.Z.Text,{children:[(0,g.jsx)("span",{style:{color:S},children:"Email: "}),e.email]}),(0,g.jsxs)(u.Z.Text,{children:[(0,g.jsx)("span",{style:{color:S},children:"Phone: "}),e.phone]})]})]})]},t)}))]})})]})]})}}}]);
//# sourceMappingURL=683.a7ae68cc.chunk.js.map