"use strict";(self.webpackChunkmccoy_dewitt_client=self.webpackChunkmccoy_dewitt_client||[]).push([[379],{379:function(e,t,i){i.r(t),i.d(t,{default:function(){return A}});var s=i(1413),n=i(4942),l=i(885),r=i(2791),a=i(2576),o=i(9140),c=i(3360),d=i(8322),x=i(9743),u=i(2677),p=i(5736),m=i(7798),h=i(8213),j=i(7689),Z=i(2428),y=i(2398),f=i(9907),g=i(7702),v=i(1961),C=i(4543),N=i(2109),b=i(6973),S=i(4401),T=i(5443),w=i(9083),k=i(3600),I=i(8227),z=i(9762),W=i(5671),L=i(3144),_=i(136),D=i(4104),F=i(9053),O=i(6666),B=i.n(O),G=i(184),P=function(e){(0,_.Z)(i,e);var t=(0,D.Z)(i);function i(){return(0,W.Z)(this,i),t.apply(this,arguments)}return(0,L.Z)(i,[{key:"myWidget",value:function(){var e=this,t=B()(),i=window.cloudinary.createUploadWidget({prepareUploadParams:function(e,i){e({public_id:t})},cloudName:"dcrbfhcxx",uploadPreset:"xeyoxyah",sources:["local","url"],folder:this.props.project_id,maxImageWidth:2e3},(function(t,i){!t&&i&&"success"===i.event&&(console.log("Done! Here is the image info: ",i.info),e.props.handleUpdateFiles(i.info.public_id),console.log(i),document.getElementById("uploadedimage").setAttribute("src",i.info.secure_url))}));i.open()}},{key:"render",value:function(){var e=this;return(0,G.jsx)(m.Z,{placement:"right",delay:{show:250,hide:400},overlay:this.props.renderTooltip("Add Images"),children:(0,G.jsx)(F.Z,{onClick:function(){return e.myWidget()},style:{color:"green",cursor:"pointer",marginLeft:"20px"}})})}}]),i}(r.Component),E=P,U=i(9136),R=i(8035);function A(e){var t,i=(0,j.TH)(),W=e.primaryColor,L=e.secondaryColor,_=e.admin,D=e.setSnackBarInfo,F=(0,r.useState)(i.state.selectedProject),O=(0,l.Z)(F,2),B=O[0],P=O[1],A=(0,r.useState)(i.state.selectedService),q=(0,l.Z)(A,2),H=q[0],K=(q[1],(0,r.useState)(!1)),Y=(0,l.Z)(K,2),J=Y[0],M=Y[1],Q=(0,r.useState)(!1),V=(0,l.Z)(Q,2),X=V[0],$=V[1],ee=(0,r.useState)(!1),te=(0,l.Z)(ee,2),ie=te[0],se=te[1],ne=(0,r.useState)(!1),le=(0,l.Z)(ne,2),re=le[0],ae=le[1],oe=(0,r.useState)({}),ce=(0,l.Z)(oe,2),de=ce[0],xe=ce[1],ue=(0,r.useState)({}),pe=(0,l.Z)(ue,2),me=pe[0],he=pe[1],je={description:B.description,location:B.location,insuranceClaim:B.insuranceClaim,status:B.status,users:B.users},Ze=function(){return null!==B.insuranceClaim.dateOfDamage?B.insuranceClaim.dateOfDamage.slice(0,10):"none"},ye=function(){return null!==B.insuranceClaim.dateOfInspection?B.insuranceClaim.dateOfInspection.slice(0,10):"none"};(0,r.useEffect)((function(){window.scrollTo(0,0),(0,R.e5)(P,M,B._id)}),[]);var fe=function(){var e=B.description,t=B.location,i=!0,s={};return e&&""!==e&&" "!==e||(s.description="*required",i=!1),t||(s.location="*required",i=!1),he(s),i},ge=function(e){return(0,G.jsx)(a.Z,{id:"button-tooltip",children:e})};return(0,G.jsxs)("div",{children:[(0,G.jsxs)("div",{style:{position:"relative"},children:[(0,G.jsx)("div",{className:"project-background"}),(0,G.jsx)(o.Z,{className:"projectTitleCard projectTitleCard m-auto",style:{borderColor:W},children:(0,G.jsx)("div",{className:"projectTitleCard-body",children:(0,G.jsxs)(o.Z.Title,{className:"m-auto",style:{color:"white"},children:[B.service," Project"]})})}),(0,G.jsx)(h.Ee,{publicId:H.image,className:"projectImage projectImage"})]}),(0,G.jsxs)("div",{className:"mt-4 mb-5",style:{position:"relative"},children:[(0,G.jsx)("div",{style:(t={position:"-webkit-sticky"},(0,n.Z)(t,"position","sticky"),(0,n.Z)(t,"top","10px"),(0,n.Z)(t,"zIndex","1000"),t),children:J?(0,G.jsxs)("div",{className:"editPosition",children:[(0,G.jsx)(c.Z,{style:{backgroundColor:"green",width:"50px",marginRight:"10px"},onClick:function(){(0,R.ty)(fe,je,P,M,B._id,D)},className:"projectEditButton",children:(0,G.jsx)(f.Z,{color:"white"})}),(0,G.jsx)(c.Z,{style:{backgroundColor:"red",color:"white",width:"50px"},onClick:function(){(0,R.e5)(P,M,B._id)},className:"projectCancelButton",children:(0,G.jsx)(g.Z,{color:"white"})})]}):(0,G.jsx)("div",{className:"editPosition",children:(0,G.jsx)("div",{className:"projectEditButton",children:(0,G.jsx)(Z.Z,{as:y.Z,onClick:function(){return M(!0)},style:{cursor:"pointer",width:"25px",height:"25px",color:L},id:"dropdown-basic"})})})}),(0,G.jsx)(o.Z,{className:"projectIntro projectIntro ml-auto",children:(0,G.jsxs)("div",{style:{marginRight:"45px"},children:[(0,G.jsxs)(o.Z.Title,{className:"project-overview",style:{fontSize:"21px",padding:"10px"},children:["Overview:",J?(0,G.jsx)(d.Z,{style:{width:"auto",maxWidth:"350px"},children:(0,G.jsx)(d.Z.Group,{className:"m-1",children:(0,G.jsxs)("div",{style:{position:"relative"},children:[(0,G.jsx)(d.Z.Control,{type:"text",placeholder:"Overview",value:B.description,onChange:function(e){P((0,s.Z)((0,s.Z)({},B),{},{description:e.target.value})),me.description&&fe()}}),me.description&&(0,G.jsx)(z.Z,{message:me.description,type:"error",profile:!0})]})})}):(0,G.jsx)("div",{style:{fontSize:"15px",marginLeft:"30px",paddingTop:"5px"},children:B.description})]}),(0,G.jsx)("div",{style:{width:"fit-content",padding:"10px"},children:J&&_===localStorage.getItem("user")?(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(d.Z,{style:{width:"auto",maxWidth:"350px"},children:[(0,G.jsx)(d.Z.Group,{className:"m-1",children:(0,G.jsxs)("div",{style:{position:"relative"},children:[(0,G.jsx)(o.Z.Title,{children:"Status"}),(0,G.jsx)(d.Z.Control,{type:"text",placeholder:"Current Status",value:B.status.title,onChange:function(e){P((0,s.Z)((0,s.Z)({},B),{},{status:(0,s.Z)((0,s.Z)({},B.status),{},{title:e.target.value})}))}})]})}),(0,G.jsx)(o.Z.Title,{children:"Status Description"}),(0,G.jsx)(d.Z.Group,{className:"m-1",children:(0,G.jsx)("div",{style:{position:"relative"},children:(0,G.jsx)(d.Z.Control,{type:"text",placeholder:"Description",value:B.status.description,onChange:function(e){P((0,s.Z)((0,s.Z)({},B),{},{status:(0,s.Z)((0,s.Z)({},B.status),{},{description:e.target.value})}))}})})})]}),(0,G.jsx)(x.Z,{className:"justify-content-center",children:["primary","secondary","success","danger","warning","info","dark"].map((function(e){return(0,G.jsx)(u.Z,{className:"m-2",style:{cursor:"pointer"},children:(0,G.jsx)(o.Z.Title,{style:e===B.status.color?{border:"2px solid black",borderRadius:"5px",padding:"5px"}:{},onClick:function(){P((0,s.Z)((0,s.Z)({},B),{},{status:(0,s.Z)((0,s.Z)({},B.status),{},{color:e})}))},children:(0,G.jsx)(p.Z,{style:{width:"100px",height:"35px"},bg:e,children:(0,G.jsx)("span",{children:e})})})})}))})]}):(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(o.Z.Title,{className:"status",children:[(0,G.jsx)("span",{style:{marginRight:"5px"},children:"Status:"}),(0,G.jsx)(p.Z,{bg:B.status.color?B.status.color:"primary",className:"p-2",children:B.status.title})]}),(0,G.jsx)(o.Z.Title,{style:{fontSize:"15px",fontWeight:"200",marginLeft:"30px"},children:B.status.description})]})})]})}),(0,G.jsx)(o.Z,{style:{border:"none"},children:(0,G.jsxs)(x.Z,{className:"justify-content-center m-auto align-items-center",style:{maxWidth:"1000px"},children:[(0,G.jsxs)(u.Z,{className:"secondaryInfo-item",children:[(0,G.jsx)("label",{className:"secondaryInfo-label",children:(0,G.jsxs)(o.Z.Title,{style:{fontSize:"20px"},children:[(0,G.jsx)(v.Z,{className:"icons"}),"Project Key:"]})}),(0,G.jsxs)(o.Z.Title,{style:{fontSize:"17px",marginLeft:"50px",WebkitTextSecurity:"disc"},children:[B._id,(0,G.jsx)(m.Z,{placement:"bottom",delay:{show:250,hide:400},overlay:ge(X?"Copied":"Copy"),children:(0,G.jsx)(C.Z,{style:{marginLeft:"10px",marginBottom:"5px",width:"16px",height:"16px",cursor:"pointer"},onClick:function(){var e;e=B._id,navigator.clipboard.writeText(e),$(!0)}})})]})]}),(0,G.jsxs)(u.Z,{className:"secondaryInfo-item",children:[(0,G.jsx)("label",{className:"secondaryInfo-label",children:(0,G.jsxs)(o.Z.Title,{style:{fontSize:"20px"},children:[(0,G.jsx)(N.Z,{className:"icons"}),"Location:"]})}),J?(0,G.jsx)(d.Z,{style:{width:"auto",maxWidth:"350px"},children:(0,G.jsx)(d.Z.Group,{className:"m-1",children:(0,G.jsx)("div",{style:{position:"relative"},children:(0,G.jsx)(d.Z.Control,{type:"text",placeholder:"Overview",value:B.location,onChange:function(e){P((0,s.Z)((0,s.Z)({},B),{},{location:e.target.value}))}})})})}):(0,G.jsx)(o.Z.Title,{style:{fontSize:"17px",marginLeft:"50px"},children:B.location})]}),(0,G.jsxs)(u.Z,{className:"secondaryInfo-item",children:[(0,G.jsx)("label",{className:"secondaryInfo-label",children:(0,G.jsxs)(o.Z.Title,{style:{fontSize:"20px"},children:[(0,G.jsx)(b.Z,{className:"icons"}),"Users Involved:"]})}),(0,G.jsx)(x.Z,{className:"justify-content-center align-items-center",style:{fontSize:"17px",marginLeft:"50px"},children:B.users.map((function(e,t,i){return e===_?(0,G.jsx)("div",{}):(0,G.jsx)(G.Fragment,{children:(0,G.jsx)(u.Z,{className:"m-1",children:(0,G.jsx)(o.Z.Title,{children:(0,G.jsx)(p.Z,{className:"p-2",bg:"secondary",children:e})})})})}))})]}),(0,G.jsxs)("div",{className:"secondaryInfo-item",children:[(0,G.jsx)("label",{className:"secondaryInfo-label",style:{display:"flex"},children:(0,G.jsxs)(o.Z.Title,{style:{fontSize:"20px"},children:[(0,G.jsx)(S.Z,{className:"icons"}),"Insurance Claim:"]})}),J&&(0,G.jsxs)("div",{style:{display:"flex",margin:"5px"},children:[(0,G.jsx)("div",{style:{fontSize:"15px",margin:"auto",textAlign:"center"},children:"Still using?"}),(0,G.jsx)(U.Z,{primaryColor:W,onClickFunction:function(){P((0,s.Z)((0,s.Z)({},B),{},{insuranceClaim:(0,s.Z)((0,s.Z)({},B.insuranceClaim),{},{using:!0})}))},currentChoice:de,setCurrentChoice:xe,text:"Yes",small:!0}),(0,G.jsx)(U.Z,{primaryColor:W,onClickFunction:function(){P((0,s.Z)((0,s.Z)({},B),{},{insuranceClaim:(0,s.Z)((0,s.Z)({},B.insuranceClaim),{},{using:!1})}))},currentChoice:de,setCurrentChoice:xe,text:"No",small:!0})]}),!0===B.insuranceClaim.using?(0,G.jsx)(G.Fragment,{children:(0,G.jsxs)("ul",{children:[(0,G.jsx)("li",{children:(0,G.jsx)(o.Z.Title,{style:{fontSize:"16px",marginLeft:"20px"},children:"Claim Number:"})}),(0,G.jsx)("div",{children:J?(0,G.jsx)(d.Z,{style:{width:"auto",maxWidth:"350px"},children:(0,G.jsx)(d.Z.Group,{className:"m-1",children:(0,G.jsxs)("div",{style:{position:"relative"},children:[(0,G.jsx)(d.Z.Control,{type:"text",placeholder:"Claim Number",value:B.insuranceClaim.claimNumber,style:re?{WebkitTextSecurity:"none"}:{WebkitTextSecurity:"disc"},onChange:function(e){P((0,s.Z)((0,s.Z)({},B),{},{insuranceClaim:(0,s.Z)((0,s.Z)({},B.insuranceClaim),{},{claimNumber:e.target.value})}))}}),(0,G.jsx)("div",{style:{position:"absolute",top:"10px",right:"20px"},children:re?(0,G.jsx)(T.Z,{className:"icons",style:{cursor:"pointer"},onClick:function(){return ae(!1)}}):(0,G.jsx)(w.Z,{className:"icons",style:{cursor:"pointer"},onClick:function(){return ae(!0)}})})]})})}):(0,G.jsxs)("div",{style:{display:"flex"},children:[(0,G.jsx)(o.Z.Title,{className:"claimNumber",style:re?{WebkitTextSecurity:"none",fontSize:"16px"}:{WebkitTextSecurity:"disc"},children:B.insuranceClaim.claimNumber}),re?(0,G.jsx)(T.Z,{className:"icons",style:{cursor:"pointer"},onClick:function(){return ae(!1)}}):(0,G.jsx)(w.Z,{className:"icons",style:{cursor:"pointer"},onClick:function(){return ae(!0)}})]})}),(0,G.jsx)("li",{children:(0,G.jsx)(o.Z.Title,{style:{fontSize:"16px",marginLeft:"20px"},children:"Date of damage done:"})}),J?(0,G.jsx)(d.Z,{style:{width:"auto",maxWidth:"350px"},children:(0,G.jsx)(d.Z.Group,{className:"m-1",children:(0,G.jsx)("div",{style:{position:"relative"},children:(0,G.jsx)(d.Z.Control,{type:"date",value:Ze(),onChange:function(e){P((0,s.Z)((0,s.Z)({},B),{},{insuranceClaim:(0,s.Z)((0,s.Z)({},B.insuranceClaim),{},{dateOfDamage:e.target.value})}))}})})})}):(0,G.jsx)(o.Z.Title,{style:{fontSize:"16px",marginLeft:"50px"},children:Ze()}),(0,G.jsx)("li",{children:(0,G.jsx)(o.Z.Title,{style:{fontSize:"16px",marginLeft:"20px"},children:"Date of inspection:"})}),J?(0,G.jsx)(d.Z,{style:{width:"auto",maxWidth:"350px"},children:(0,G.jsx)(d.Z.Group,{className:"m-1",children:(0,G.jsx)("div",{style:{position:"relative"},children:(0,G.jsx)(d.Z.Control,{type:"date",value:ye(),onChange:function(e){P((0,s.Z)((0,s.Z)({},B),{},{insuranceClaim:(0,s.Z)((0,s.Z)({},B.insuranceClaim),{},{dateOfInspection:e.target.value})}))}})})})}):(0,G.jsx)(o.Z.Title,{style:{fontSize:"16px",marginLeft:"50px"},children:ye()})]})}):(0,G.jsx)(o.Z.Title,{style:{fontSize:"17px",marginLeft:"50px"},children:"None"})]}),(0,G.jsx)("div",{style:{margin:"10px"},children:(0,G.jsxs)("label",{style:{display:"flex",justifyContent:"center",borderBottom:"1px solid ".concat(W),maxWidth:"350px",margin:"auto"},children:[(0,G.jsxs)(o.Z.Title,{style:{fontSize:"20px"},children:[(0,G.jsx)(k.Z,{className:"icons"}),"Images:"]}),ie?(0,G.jsx)(G.Fragment,{children:(0,G.jsx)(f.Z,{onClick:function(){se(!1)},style:{color:"green",cursor:"pointer",marginLeft:"17px",marginTop:"3px"}})}):(0,G.jsxs)("div",{style:{display:"flex",paddingTop:"2px"},children:[(0,G.jsx)(E,{renderTooltip:ge,handleUpdateFiles:function(e){(0,R.Ot)(e,P,M,B._id,D)}}),(0,G.jsx)(m.Z,{placement:"right",delay:{show:250,hide:400},overlay:ge("Delete Images"),children:(0,G.jsx)(I.Z,{onClick:function(){return se(!0)},style:{color:"red",cursor:"pointer",marginLeft:"80px"}})})]})]})})]})}),(0,G.jsx)(x.Z,{className:"justify-content-center",children:B.files.map((function(e){return(0,G.jsxs)(u.Z,{style:{display:"flex",flexDirection:"column",marginBottom:"10px"},children:[(0,G.jsx)(h.Ee,{publicId:e.name,style:{width:"200px",height:"200px",objectFit:"cover",margin:"auto"}}),ie&&(0,G.jsx)(c.Z,{variant:"danger",style:{width:"200px",margin:"auto"},onClick:function(){!function(e){(0,R.cG)(e,P,M,B._id,D)}(e.name)},children:"delete"})]})}))})]})]})}}}]);
//# sourceMappingURL=379.b2526f2d.chunk.js.map