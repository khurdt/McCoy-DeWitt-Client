"use strict";(self.webpackChunkmccoy_dewitt_client=self.webpackChunkmccoy_dewitt_client||[]).push([[349],{1222:function(e,t,s){s.r(t),s.d(t,{default:function(){return k}});var n=s(4942),r=s(3433),i=s(9439),o=s(2791),c=s(8213),l=s(2677),a=s(9743),d=s(3360),u=s(9140),h=s(5736),x=s(1370),m=s(9348),j=s(9136),p=s(8035),f=s(5187),y=s(9907),C=s(2109),Z=s(6973),v=s(7048),g=s(8322),w=s(184);function N(e){var t=e.projectsInView,s=e.filter,n=e.setFilter,r=e.primaryColor,i=t?"search projects":"search clients";return(0,w.jsx)(g.Z.Control,{className:"m-auto",style:{border:"1px solid ".concat(r),color:"black",maxWidth:"300px",textAlign:"center"},onChange:function(e){return n(e.target.value)},value:s,placeholder:i})}var b=s(7810);function k(e){var t,s=e.adminClients,g=e.adminProjects,k=e.primaryColor,S=e.secondaryColor,L=e.setPrimaryColor,P=e.setSecondaryColor,T=e.navigate,I=e.setSnackBarInfo,F=e.username,B=e.setAdminProjects,A=e.setCreateProjectButton,_=e.createProjectButton,E=e.admin,z=(0,o.useState)(!1),H=(0,i.Z)(z,2),R=H[0],V=H[1],D=(0,o.useState)(!0),W=(0,i.Z)(D,2),M=W[0],O=W[1],U=(0,o.useState)({}),q=(0,i.Z)(U,2),G=q[0],J=q[1],K=(0,o.useState)(!1),Q=(0,i.Z)(K,2),X=Q[0],Y=Q[1],$=(0,o.useState)(!1),ee=(0,i.Z)($,2),te=ee[0],se=ee[1],ne=(0,o.useState)({title:null,action:null,_id:null}),re=(0,i.Z)(ne,2),ie=re[0],oe=re[1],ce=(0,o.useState)(""),le=(0,i.Z)(ce,2),ae=le[0],de=le[1],ue=window.innerWidth<700,he=s,xe=g;if(""!==ae&&!M){var me=s.filter((function(e){return e.firstName.toLowerCase().includes(ae.toLowerCase())})),je=s.filter((function(e){return e.lastName.toLowerCase().includes(ae.toLowerCase())})),pe=s.filter((function(e){return e.username.toLowerCase().includes(ae.toLowerCase())})),fe=s.filter((function(e){return e.compnay&&e.company.toLowerCase().includes(ae.toLowerCase())})),ye=me.concat(je).concat(pe).concat(fe);he=(0,r.Z)(new Set(ye))}if(""!==ae&&M){var Ce=g.filter((function(e){return e.service.toLowerCase().includes(ae.toLowerCase())})),Ze=g.filter((function(e){return e.location.toLowerCase().includes(ae.toLowerCase())})),ve=g.filter((function(e){return e.status.title.toLowerCase().includes(ae.toLowerCase())})),ge=g.filter((function(e){return e.users.some((function(e,t,s){return e.toLowerCase().includes(ae.toLowerCase())}))})),we=Ce.concat(Ze).concat(ve).concat(ge);xe=(0,r.Z)(new Set(we))}(0,o.useEffect)((function(){_&&(Y(!0),A(!1),window.scrollTo({top:0,left:0,behavior:"instant"}))}),[g]);var Ne=function(e){(0,p.ob)(e,I,B)};return(0,w.jsxs)(w.Fragment,{children:[te&&(0,w.jsx)(b.Z,{setShowConfirmation:se,showConfirmation:te,confirmationInfo:ie,primaryColor:k}),X&&(0,w.jsx)(v.Z,{setShowCreateProject:Y,username:F,primaryColor:k,setSnackBarInfo:I,setAdminProjects:B}),(0,w.jsx)("input",{className:"colorInput m-2",style:{position:"relative"},type:"color",value:k,onChange:function(e){return L(e.target.value)}}),(0,w.jsx)("input",{className:"colorInput m-2",style:{position:"relative"},type:"color",value:S,onChange:function(e){return P(e.target.value)}}),(0,w.jsxs)("div",{style:X?{minHeight:"20vh"}:{position:"relative",minHeight:"100vh",paddingTop:"10px"},children:[(0,w.jsx)("div",{style:(t={position:"-webkit-sticky"},(0,n.Z)(t,"position","sticky"),(0,n.Z)(t,"top","10px"),(0,n.Z)(t,"zIndex","1000"),t),children:R?(0,w.jsx)("div",{className:"adminEditPosition",style:{right:"6%"},children:(0,w.jsx)(d.Z,{style:{backgroundColor:"green",width:"50px"},onClick:function(){return V(!1)},className:"projectEditButton",children:(0,w.jsx)(y.Z,{color:"white"})})}):(0,w.jsx)("div",{className:"adminEditPosition",children:(0,w.jsxs)(x.Z,{children:[(0,w.jsx)(x.Z.Toggle,{as:f.Z,id:"dropdown-basic",style:{width:"30px",height:"30px",cursor:"pointer",border:"3px solid ".concat(k),borderRadius:"50%"},alt:"options icon"}),(0,w.jsxs)(x.Z.Menu,{children:[(0,w.jsx)(x.Z.Item,{onClick:function(){Y(!0),window.scrollTo(0,0)},children:(0,w.jsx)("div",{className:"text-center p-3",style:{color:"green"},children:"Add Project"})}),(0,w.jsx)(x.Z.Item,{onClick:function(){V(!0)},children:(0,w.jsx)("div",{className:"text-center p-3",style:{color:"red"},children:"Remove Project"})})]})]})})}),(0,w.jsxs)(a.Z,{className:"justify-content-center m-auto p-4",children:[(0,w.jsx)(l.Z,{style:{display:"flex",justifyContent:"center"},children:(0,w.jsx)(j.Z,{primaryColor:k,onClickFunction:function(){O(!0)},currentChoice:G,setCurrentChoice:J,text:"Projects",submitButton:M,small:ue})}),(0,w.jsx)(l.Z,{style:{display:"flex",justifyContent:"center"},children:(0,w.jsx)(j.Z,{primaryColor:k,currentChoice:G,setCurrentChoice:J,onClickFunction:function(){O(!1)},text:"Clients",small:ue})})]}),(0,w.jsx)(a.Z,{children:(0,w.jsx)(N,{projectsInView:M,filter:ae,setFilter:de,primaryColor:k})}),(0,w.jsx)("div",{className:X?"hideProjects":"",children:M?(0,w.jsxs)(a.Z,{className:"m-auto pt-4",style:{justifyContent:"center",position:"relative"},children:[0===xe.length&&(0,w.jsx)("div",{style:{height:"80vh"},className:"text-center p-5",children:"Didn't Find Any Projects"}),xe.length>0&&xe.map((function(e,t){var s=p.uZ.find((function(t){return e.service.toLowerCase().includes(t.image)}));return(0,w.jsx)(m.df,{triggerOnce:!0,children:function(n){var r=n.inView,i=n.ref;n.entry;return(0,w.jsxs)(u.Z,{ref:i,className:"project-card",children:[(0,w.jsxs)("div",{style:{position:"relative"},children:[r&&(0,w.jsx)(u.Z.Img,{className:"project-image",as:c.Ee,publicId:s?s.image:"custom"}),(0,w.jsx)("div",{className:"project-title",children:e.service})]}),(0,w.jsxs)(u.Z.Body,{children:[(0,w.jsxs)("div",{style:{minHeight:"120px"},children:[(0,w.jsxs)(u.Z.Text,{className:"project-status",children:["Status: ",(0,w.jsx)(h.Z,{bg:e.status.color,className:"p-2",children:e.status.title})]}),(0,w.jsxs)(u.Z.Text,{children:[(0,w.jsx)(C.Z,{width:20,height:20,className:"mb-1"})," ",e.location]}),(0,w.jsxs)(a.Z,{style:{display:"flex"},children:[(0,w.jsx)(l.Z,{xs:2,sm:2,md:2,children:(0,w.jsx)(Z.Z,{width:20,height:20})}),e.users.map((function(e,t,s){return E.includes(e)?(0,w.jsx)(w.Fragment,{}):(0,w.jsx)(l.Z,{xs:3,sm:3,md:3,style:{display:"flex",justifyContent:"left"},children:(0,w.jsx)(u.Z.Title,{style:{fontSize:"14px"},children:(0,w.jsx)(h.Z,{className:"p-2",bg:"secondary",children:e})})})}))]})]}),(0,w.jsx)(u.Z.Footer,{children:(0,w.jsx)(a.Z,{className:"justify-content-center",children:R?(0,w.jsx)(d.Z,{variant:"danger",onClick:function(){se(!0),oe({title:"Remove this project?",action:Ne,_id:e._id})},children:"remove"}):(0,w.jsx)(d.Z,{className:"project-button",style:{backgroundColor:k,color:"black"},onClick:function(){T("project",{state:{selectedProject:e,selectedService:s}})},children:"See Project"})})})]})]},t)}})}))]}):(0,w.jsxs)(a.Z,{className:"m-auto pt-4",style:{justifyContent:"center"},children:[0===he.length&&(0,w.jsx)("div",{style:{height:"80vh"},className:"text-center p-5",children:"Didn't Find Any Clients"}),he.map((function(e,t){var s=e.firstName.slice(0,1)+e.lastName.slice(0,1);return(0,w.jsxs)(u.Z,{className:"m-3",style:{width:"18rem",margin:"0",padding:"0"},children:[(0,w.jsxs)("div",{style:{display:"flex"},children:[(0,w.jsx)("div",{style:{backgroundColor:e.color},className:"client-badge",children:s}),(0,w.jsxs)(u.Z.Text,{className:"m-auto text-center",style:{fontSize:"20px"},children:[e.firstName," ",e.lastName]})]}),(0,w.jsxs)(u.Z.Body,{children:[(0,w.jsxs)(u.Z.Text,{children:[(0,w.jsx)("span",{children:"Username: "}),(0,w.jsx)(h.Z,{bg:"secondary",className:"p-2",children:e.username})]}),(0,w.jsxs)(u.Z.Text,{children:[(0,w.jsx)("span",{style:{color:S},children:"Company: "}),e.company]}),(0,w.jsxs)(u.Z.Text,{children:[(0,w.jsx)("span",{style:{color:S},children:"Address: "}),e.address]}),(0,w.jsxs)(u.Z.Footer,{children:[(0,w.jsxs)(u.Z.Text,{children:[(0,w.jsx)("span",{style:{color:S},children:"Email: "}),e.email]}),(0,w.jsxs)(u.Z.Text,{children:[(0,w.jsx)("span",{style:{color:S},children:"Phone: "}),e.phone]})]})]})]},t)}))]})})]})]})}}}]);
//# sourceMappingURL=349.485860c9.chunk.js.map