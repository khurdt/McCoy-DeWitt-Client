"use strict";(self.webpackChunkmccoy_dewitt_client=self.webpackChunkmccoy_dewitt_client||[]).push([[379],{379:function(e,i,t){t.r(i),t.d(i,{default:function(){return U}});var n=t(1413),s=t(885),r=t(2791),l=t(2576),a=t(9140),c=t(8322),o=t(5736),d=t(9743),x=t(2677),u=t(7798),p=t(3360),m=t(8213),h=t(7689),j=t(2428),y=t(2398),f=t(9907),Z=t(7702),g=t(1961),v=t(4543),C=t(2109),N=t(6973),b=t(4401),S=t(5443),T=t(9083),w=t(3600),k=t(8227),I=t(9762),z=t(5671),W=t(3144),L=t(136),_=t(4104),F=t(9053),O=t(6666),D=t.n(O),E=t(184),B=function(e){(0,L.Z)(t,e);var i=(0,_.Z)(t);function t(){return(0,z.Z)(this,t),i.apply(this,arguments)}return(0,W.Z)(t,[{key:"myWidget",value:function(){var e=this,i=D()(),t=window.cloudinary.createUploadWidget({prepareUploadParams:function(e,t){e({public_id:i})},cloudName:"dcrbfhcxx",uploadPreset:"xeyoxyah",sources:["local","url"],folder:this.props.project_id,maxImageWidth:2e3},(function(i,t){!i&&t&&"success"===t.event&&(console.log("Done! Here is the image info: ",t.info),e.props.updateFiles(t.info.public_id,e.props.setProject,e.props.setEditing,e.props.projectId),console.log(t),document.getElementById("uploadedimage").setAttribute("src",t.info.secure_url))}));t.open()}},{key:"render",value:function(){var e=this;return(0,E.jsx)(u.Z,{placement:"right",delay:{show:250,hide:400},overlay:this.props.renderTooltip("Add Images"),children:(0,E.jsx)(F.Z,{onClick:function(){return e.myWidget()},style:{color:"green",cursor:"pointer",marginLeft:"20px"}})})}}]),t}(r.Component),P=B,G=t(9136),A=t(8035);function U(e){var i=(0,h.TH)(),t=e.primaryColor,z=e.secondaryColor,W=e.admin,L=(0,r.useState)(i.state.selectedProject),_=(0,s.Z)(L,2),F=_[0],O=_[1],D=(0,r.useState)(i.state.selectedService),B=(0,s.Z)(D,2),U=B[0],q=(B[1],(0,r.useState)(!1)),H=(0,s.Z)(q,2),K=H[0],R=H[1],Y=(0,r.useState)(!1),J=(0,s.Z)(Y,2),M=J[0],Q=J[1],V=(0,r.useState)(!1),X=(0,s.Z)(V,2),$=X[0],ee=X[1],ie=(0,r.useState)(!1),te=(0,s.Z)(ie,2),ne=te[0],se=te[1],re=(0,r.useState)({}),le=(0,s.Z)(re,2),ae=le[0],ce=le[1],oe=(0,r.useState)({}),de=(0,s.Z)(oe,2),xe=de[0],ue=de[1],pe={description:F.description,location:F.location,insuranceClaim:F.insuranceClaim,status:F.status,users:F.users},me=function(){return""!==F.insuranceClaim.dateOfDamage?F.insuranceClaim.dateOfDamage.slice(0,10):""},he=function(){return""!==F.insuranceClaim.dateOfInspection?F.insuranceClaim.dateOfInspection.slice(0,10):""};(0,r.useEffect)((function(){window.scrollTo(0,0),(0,A.e5)(O,R,F._id)}),[]);var je=function(){var e=F.description,i=F.location,t=!0,n={};return e&&""!==e&&" "!==e||(n.description="*required",t=!1),i||(n.location="*required",t=!1),ue(n),t},ye=function(e){return(0,E.jsx)(l.Z,{id:"button-tooltip",children:e})};return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)("div",{style:{position:"relative"},children:[(0,E.jsx)("div",{className:"project-background"}),(0,E.jsx)(a.Z,{className:"projectTitleCard projectTitleCard m-auto",style:{borderColor:t},children:(0,E.jsx)("div",{className:"projectTitleCard-body",children:(0,E.jsxs)(a.Z.Title,{className:"m-auto",style:{color:"white"},children:[F.service," Project"]})})}),(0,E.jsx)(m.Ee,{publicId:U.image,className:"projectImage projectImage"})]}),(0,E.jsxs)("div",{className:"mt-4 mb-5",children:[(0,E.jsxs)(a.Z,{className:"projectIntro projectIntro ml-auto",children:[K?(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(f.Z,{onClick:function(){return(0,A.ty)(je,pe,O,R,F._id)},className:"projectEditButton",style:{color:"green"}}),(0,E.jsx)(Z.Z,{className:"projectCancelButton",onClick:function(){(0,A.e5)(O,R,F._id)}})]}):(0,E.jsx)("div",{className:"projectEditButton",children:(0,E.jsx)(j.Z,{as:y.Z,onClick:function(){return R(!0)},style:{cursor:"pointer",width:"25px",height:"25px",color:z},id:"dropdown-basic"})}),(0,E.jsxs)("div",{style:{marginRight:"45px"},children:[(0,E.jsxs)(a.Z.Title,{className:"project-overview",style:{fontSize:"21px",padding:"10px"},children:["Overview:",K?(0,E.jsx)(c.Z,{style:{width:"auto",maxWidth:"350px"},children:(0,E.jsx)(c.Z.Group,{className:"m-1",children:(0,E.jsxs)("div",{style:{position:"relative"},children:[(0,E.jsx)(c.Z.Control,{type:"text",placeholder:"Overview",value:F.description,onChange:function(e){O((0,n.Z)((0,n.Z)({},F),{},{description:e.target.value})),xe.description&&je()}}),xe.description&&(0,E.jsx)(I.Z,{message:xe.description,type:"error",profile:!0})]})})}):(0,E.jsx)("div",{style:{fontSize:"15px",marginLeft:"30px",paddingTop:"5px"},children:F.description})]}),(0,E.jsxs)("div",{style:{width:"fit-content",padding:"10px"},children:[(0,E.jsxs)(a.Z.Title,{className:"status",children:["Status: ",(0,E.jsx)(o.Z,{className:"p-2",children:F.status.title})]}),(0,E.jsx)(a.Z.Title,{style:{fontSize:"15px",fontWeight:"200",marginLeft:"30px"},children:F.status.description})]})]})]}),(0,E.jsx)(a.Z,{style:(window.innerWidth,{border:"none"}),children:(0,E.jsxs)(d.Z,{className:"justify-content-center m-auto align-items-center",style:{maxWidth:"1000px"},children:[(0,E.jsxs)(x.Z,{className:"secondaryInfo-item",children:[(0,E.jsx)("label",{className:"secondaryInfo-label",children:(0,E.jsxs)(a.Z.Title,{style:{fontSize:"20px"},children:[(0,E.jsx)(g.Z,{className:"icons"}),"Project Key:"]})}),(0,E.jsxs)(a.Z.Title,{style:{fontSize:"17px",marginLeft:"50px",WebkitTextSecurity:"disc"},children:[F._id,(0,E.jsx)(u.Z,{placement:"bottom",delay:{show:250,hide:400},overlay:ye(M?"Copied":"Copy"),children:(0,E.jsx)(v.Z,{style:{marginLeft:"10px",marginBottom:"5px",width:"16px",height:"16px",cursor:"pointer"},onClick:function(){var e;e=F._id,navigator.clipboard.writeText(e),Q(!0)}})})]})]}),(0,E.jsxs)(x.Z,{className:"secondaryInfo-item",children:[(0,E.jsx)("label",{className:"secondaryInfo-label",children:(0,E.jsxs)(a.Z.Title,{style:{fontSize:"20px"},children:[(0,E.jsx)(C.Z,{className:"icons"}),"Location:"]})}),K?(0,E.jsx)(c.Z,{style:{width:"auto",maxWidth:"350px"},children:(0,E.jsx)(c.Z.Group,{className:"m-1",children:(0,E.jsx)("div",{style:{position:"relative"},children:(0,E.jsx)(c.Z.Control,{type:"text",placeholder:"Overview",value:F.location,onChange:function(e){O((0,n.Z)((0,n.Z)({},F),{},{location:e.target.value}))}})})})}):(0,E.jsx)(a.Z.Title,{style:{fontSize:"17px",marginLeft:"50px"},children:F.location})]}),(0,E.jsxs)(x.Z,{className:"secondaryInfo-item",children:[(0,E.jsx)("label",{className:"secondaryInfo-label",children:(0,E.jsxs)(a.Z.Title,{style:{fontSize:"20px"},children:[(0,E.jsx)(N.Z,{className:"icons"}),"Users Involved:"]})}),(0,E.jsx)(d.Z,{className:"justify-content-center align-items-center",style:{fontSize:"17px",marginLeft:"50px"},children:F.users.map((function(e,i,t){return e===W?(0,E.jsx)("div",{}):(0,E.jsx)(E.Fragment,{children:(0,E.jsx)(x.Z,{className:"m-1",children:(0,E.jsx)(a.Z.Title,{children:(0,E.jsx)(o.Z,{className:"p-2",bg:"secondary",children:e})})})})}))})]}),(0,E.jsxs)("div",{className:"secondaryInfo-item",children:[(0,E.jsx)("label",{className:"secondaryInfo-label",style:{display:"flex"},children:(0,E.jsxs)(a.Z.Title,{style:{fontSize:"20px"},children:[(0,E.jsx)(b.Z,{className:"icons"}),"Insurance Claim:"]})}),K&&(0,E.jsxs)("div",{style:{display:"flex",margin:"5px"},children:[(0,E.jsx)("div",{style:{fontSize:"15px",margin:"auto",textAlign:"center"},children:"Still using?"}),(0,E.jsx)(G.Z,{primaryColor:t,onClickFunction:function(){O((0,n.Z)((0,n.Z)({},F),{},{insuranceClaim:(0,n.Z)((0,n.Z)({},F.insuranceClaim),{},{using:!0})}))},currentChoice:ae,setCurrentChoice:ce,text:"Yes",small:!0}),(0,E.jsx)(G.Z,{primaryColor:t,onClickFunction:function(){O((0,n.Z)((0,n.Z)({},F),{},{insuranceClaim:(0,n.Z)((0,n.Z)({},F.insuranceClaim),{},{using:!1})}))},currentChoice:ae,setCurrentChoice:ce,text:"No",small:!0})]}),!0===F.insuranceClaim.using?(0,E.jsx)(E.Fragment,{children:(0,E.jsxs)("ul",{children:[(0,E.jsx)("li",{children:(0,E.jsx)(a.Z.Title,{style:{fontSize:"16px",marginLeft:"20px"},children:"Claim Number:"})}),(0,E.jsx)("div",{children:K?(0,E.jsx)(c.Z,{style:{width:"auto",maxWidth:"350px"},children:(0,E.jsx)(c.Z.Group,{className:"m-1",children:(0,E.jsxs)("div",{style:{position:"relative"},children:[(0,E.jsx)(c.Z.Control,{type:"text",placeholder:"Claim Number",value:F.insuranceClaim.claimNumber,style:ne?{WebkitTextSecurity:"none"}:{WebkitTextSecurity:"disc"},onChange:function(e){O((0,n.Z)((0,n.Z)({},F),{},{insuranceClaim:(0,n.Z)((0,n.Z)({},F.insuranceClaim),{},{claimNumber:e.target.value})}))}}),(0,E.jsx)("div",{style:{position:"absolute",top:"10px",right:"20px"},children:ne?(0,E.jsx)(S.Z,{className:"icons",style:{cursor:"pointer"},onClick:function(){return se(!1)}}):(0,E.jsx)(T.Z,{className:"icons",style:{cursor:"pointer"},onClick:function(){return se(!0)}})})]})})}):(0,E.jsxs)("div",{style:{display:"flex"},children:[(0,E.jsx)(a.Z.Title,{className:"claimNumber",style:ne?{WebkitTextSecurity:"none",fontSize:"16px"}:{WebkitTextSecurity:"disc"},children:F.insuranceClaim.claimNumber}),ne?(0,E.jsx)(S.Z,{className:"icons",style:{cursor:"pointer"},onClick:function(){return se(!1)}}):(0,E.jsx)(T.Z,{className:"icons",style:{cursor:"pointer"},onClick:function(){return se(!0)}})]})}),(0,E.jsx)("li",{children:(0,E.jsx)(a.Z.Title,{style:{fontSize:"16px",marginLeft:"20px"},children:"Date of damage done:"})}),K?(0,E.jsx)(c.Z,{style:{width:"auto",maxWidth:"350px"},children:(0,E.jsx)(c.Z.Group,{className:"m-1",children:(0,E.jsx)("div",{style:{position:"relative"},children:(0,E.jsx)(c.Z.Control,{type:"date",value:me(),onChange:function(e){O((0,n.Z)((0,n.Z)({},F),{},{insuranceClaim:(0,n.Z)((0,n.Z)({},F.insuranceClaim),{},{dateOfDamage:e.target.value})}))}})})})}):(0,E.jsx)(a.Z.Title,{style:{fontSize:"16px",marginLeft:"50px"},children:me()}),(0,E.jsx)("li",{children:(0,E.jsx)(a.Z.Title,{style:{fontSize:"16px",marginLeft:"20px"},children:"Date of inspection:"})}),K?(0,E.jsx)(c.Z,{style:{width:"auto",maxWidth:"350px"},children:(0,E.jsx)(c.Z.Group,{className:"m-1",children:(0,E.jsx)("div",{style:{position:"relative"},children:(0,E.jsx)(c.Z.Control,{type:"date",value:he(),onChange:function(e){O((0,n.Z)((0,n.Z)({},F),{},{insuranceClaim:(0,n.Z)((0,n.Z)({},F.insuranceClaim),{},{dateOfInspection:e.target.value})}))}})})})}):(0,E.jsx)(a.Z.Title,{style:{fontSize:"16px",marginLeft:"50px"},children:he()})]})}):(0,E.jsx)(a.Z.Title,{style:{fontSize:"17px",marginLeft:"50px"},children:"None"})]}),(0,E.jsx)("div",{style:{margin:"10px"},children:(0,E.jsxs)("label",{style:{display:"flex",justifyContent:"center",borderBottom:"1px solid ".concat(t),maxWidth:"350px",margin:"auto"},children:[(0,E.jsxs)(a.Z.Title,{style:{fontSize:"20px"},children:[(0,E.jsx)(w.Z,{className:"icons"}),"Images:"]}),$?(0,E.jsx)(E.Fragment,{children:(0,E.jsx)(f.Z,{onClick:function(){ee(!1)},style:{color:"green",cursor:"pointer",marginLeft:"17px",marginTop:"3px"}})}):(0,E.jsxs)("div",{style:{display:"flex",paddingTop:"2px"},children:[(0,E.jsx)(P,{renderTooltip:ye,updateFiles:A.Ot,setProject:O,setEditing:R,projectId:F._id}),(0,E.jsx)(u.Z,{placement:"right",delay:{show:250,hide:400},overlay:ye("Delete Images"),children:(0,E.jsx)(k.Z,{onClick:function(){return ee(!0)},style:{color:"red",cursor:"pointer",marginLeft:"80px"}})})]})]})})]})}),(0,E.jsx)(d.Z,{className:"justify-content-center",children:F.files.map((function(e){return(0,E.jsxs)(x.Z,{style:{display:"flex",flexDirection:"column",marginBottom:"10px"},children:[(0,E.jsx)(m.Ee,{publicId:e.name,style:{width:"200px",height:"200px",objectFit:"cover",margin:"auto"}}),$&&(0,E.jsx)(p.Z,{variant:"danger",style:{width:"200px",margin:"auto"},onClick:function(){(0,A.cG)(e.name,O,R,F._id)},children:"delete"})]})}))})]})]})}}}]);
//# sourceMappingURL=379.5ff2a7d3.chunk.js.map