"use strict";(self.webpackChunkmccoy_dewitt_client=self.webpackChunkmccoy_dewitt_client||[]).push([[379],{7810:function(e,t,i){i.d(t,{Z:function(){return d}});i(2791);var s=i(3360),n=i(5316),l=i(9743),r=i(2677),o=i(2609),a=i(6426),c=i(184);function d(e){var t=e.confirmationInfo,i=e.setShowConfirmation,d=e.showConfirmation,x=e.primaryColor,u=t.title,p=t.action,m=t._id,h=function(){return i(!1)};return(0,c.jsxs)(n.Z,{show:d,onHide:h,children:[(0,c.jsx)(n.Z.Header,{closeButton:!0,children:(0,c.jsx)(n.Z.Title,{children:u})}),(0,c.jsx)(n.Z.Body,{style:{display:"flex",margin:"auto",justifyContent:"center"},children:(0,c.jsxs)(l.Z,{children:[(0,c.jsx)(r.Z,{className:"m-3",children:(0,c.jsxs)(s.Z,{style:{width:"120px",borderColor:x},variant:"light",onClick:h,children:[(0,c.jsx)("span",{className:"m-3",children:"No"}),(0,c.jsx)(o.Z,{width:15,height:15})]})}),(0,c.jsx)(r.Z,{className:"m-3",children:(0,c.jsxs)(s.Z,{style:{width:"120px"},variant:"danger",onClick:function(){p(m),h()},children:[(0,c.jsx)("span",{className:"m-3",children:"Yes"}),(0,c.jsx)(a.Z,{width:15,height:15})]})})]})}),(0,c.jsx)(n.Z.Footer,{children:(0,c.jsx)(s.Z,{variant:"secondary",onClick:h,children:"Close"})})]})}},379:function(e,t,i){i.r(t),i.d(t,{default:function(){return U}});var s=i(1413),n=i(4942),l=i(885),r=i(2791),o=i(2677),a=i(9743),c=i(3360),d=i(8322),x=i(9140),u=i(5736),p=i(7798),m=i(2576),h=i(8932),j=i(8213),Z=i(7689),f=i(2428),y=i(5187),g=i(9907),C=i(7702),v=i(1961),N=i(4543),b=i(2109),w=i(6973),S=i(4401),k=i(5443),T=i(9083),I=i(6020),z=i(9762),_=i(5671),W=i(3144),L=i(136),D=i(4104),F=i(6666),O=i.n(F),B=i(184),G=function(e){(0,L.Z)(i,e);var t=(0,D.Z)(i);function i(){var e;return(0,_.Z)(this,i),(e=t.call(this)).state={widgetOpen:!1},e}return(0,W.Z)(i,[{key:"componentDidMount",value:function(){!1===this.state.widgetOpen&&(this.setState({widgetOpen:!0}),this.myWidget())}},{key:"myWidget",value:function(){var e=this,t=O()(),i=window.cloudinary.createUploadWidget({prepareUploadParams:function(e,i){e({public_id:t}),"document"===this.props.add&&(e({resource_type:"raw"}),e({raw_convert:"aspose"}))},cloudName:"dcrbfhcxx",uploadPreset:"xeyoxyah",sources:["local","url"],folder:this.props.project_id,maxImageWidth:2e3},(function(t,i){!t&&i&&"success"===i.event&&(console.log("Done! Here is the image info: ",i.info),e.props.handleUpdateFiles(i.info.public_id),document.getElementById("uploadedimage").setAttribute("src",i.info.secure_url))}));i.open()}},{key:"render",value:function(){return(0,B.jsx)(B.Fragment,{})}}]),i}(r.Component),P=i(9136),E=i(7810),R=i(8035);function U(e){var t,i=(0,Z.TH)(),_=e.primaryColor,W=e.secondaryColor,L=e.admin,D=e.setSnackBarInfo,F=(0,r.useState)(i.state.selectedProject),O=(0,l.Z)(F,2),U=O[0],q=O[1],A=(0,r.useState)(i.state.selectedService),H=(0,l.Z)(A,2),M=H[0],Y=(H[1],(0,r.useState)(!1)),K=(0,l.Z)(Y,2),J=K[0],Q=K[1],V=(0,r.useState)(!1),X=(0,l.Z)(V,2),$=X[0],ee=X[1],te=(0,r.useState)(!1),ie=(0,l.Z)(te,2),se=ie[0],ne=ie[1],le=(0,r.useState)(!1),re=(0,l.Z)(le,2),oe=re[0],ae=re[1],ce=(0,r.useState)({}),de=(0,l.Z)(ce,2),xe=de[0],ue=de[1],pe=(0,r.useState)({}),me=(0,l.Z)(pe,2),he=me[0],je=me[1],Ze=(0,r.useState)(!1),fe=(0,l.Z)(Ze,2),ye=fe[0],ge=fe[1],Ce=(0,r.useState)(""),ve=(0,l.Z)(Ce,2),Ne=ve[0],be=ve[1],we=(0,r.useState)(!1),Se=(0,l.Z)(we,2),ke=Se[0],Te=Se[1],Ie=(0,r.useState)({title:null,action:null,_id:null}),ze=(0,l.Z)(Ie,2),_e=ze[0],We=ze[1],Le={description:U.description,location:U.location,insuranceClaim:U.insuranceClaim,status:U.status,users:U.users},De=function(){return null!==U.insuranceClaim.dateOfDamage?U.insuranceClaim.dateOfDamage.slice(0,10):"none"},Fe=function(){return null!==U.insuranceClaim.dateOfInspection?U.insuranceClaim.dateOfInspection.slice(0,10):"none"};(0,r.useEffect)((function(){window.scrollTo(0,0),(0,R.e5)(q,Q,U._id)}),[]);var Oe=function(){var e=U.description,t=U.location,i=U.status,s=!0,n={};return e&&""!==e&&" "!==e||(n.description="*required",s=!1),t||(n.location="*required",s=!1),i.title||(n.statusTitle="*required",s=!1),i.title||(n.statusDescription="*required",s=!1),je(n),s},Be=function(e){(0,R.cG)(e,q,Q,U._id,D)},Ge=function e(){if(!0===ye)for(ge(!1);!1===ye;)e();else ge(!0)},Pe=function(e){return(0,B.jsx)(m.Z,{id:"button-tooltip",children:e})};return(0,B.jsxs)("div",{children:[ke&&(0,B.jsx)(E.Z,{setShowConfirmation:Te,showConfirmation:ke,confirmationInfo:_e,primaryColor:_}),(0,B.jsxs)("div",{style:{position:"relative"},children:[(0,B.jsx)("div",{className:"project-background"}),(0,B.jsx)(x.Z,{className:"projectTitleCard projectTitleCard m-auto",style:{borderColor:_},children:(0,B.jsx)("div",{className:"projectTitleCard-body",children:(0,B.jsxs)(x.Z.Title,{className:"m-auto text-center",style:{color:"white"},children:[U.service," Project"]})})}),(0,B.jsx)(j.Ee,{publicId:M?M.image:"custom",className:"projectImage projectImage"})]}),(0,B.jsxs)("div",{className:"mt-4 mb-5",style:{position:"relative"},children:[(0,B.jsx)("div",{style:(t={position:"-webkit-sticky"},(0,n.Z)(t,"position","sticky"),(0,n.Z)(t,"top","10px"),(0,n.Z)(t,"zIndex","1000"),t),children:J?(0,B.jsxs)("div",{className:"editPosition",children:[(0,B.jsx)(c.Z,{style:{backgroundColor:"green",width:"50px",marginRight:"10px"},onClick:function(){(0,R.ty)(Oe,Le,q,Q,U._id,D)},className:"projectEditButton",children:(0,B.jsx)(g.Z,{color:"white"})}),(0,B.jsx)(c.Z,{style:{backgroundColor:"red",color:"white",width:"50px"},onClick:function(){(0,R.e5)(q,Q,U._id)},className:"projectCancelButton",children:(0,B.jsx)(C.Z,{color:"white"})})]}):(0,B.jsx)(c.Z,{className:"editPosition",children:(0,B.jsx)("div",{className:"projectEditButton",children:(0,B.jsx)(f.Z,{color:"black",as:y.Z,onClick:function(){return Q(!0)},style:{cursor:"pointer",width:"25px",height:"25px",color:W},id:"dropdown-basic"})})})}),(0,B.jsx)(x.Z,{className:"projectIntro projectIntro ml-auto",children:(0,B.jsxs)("div",{style:{marginRight:"45px"},children:[(0,B.jsxs)(x.Z.Title,{className:"project-overview",style:{fontSize:"21px",padding:"10px"},children:["Overview:",J?(0,B.jsx)(d.Z,{style:{width:"auto",maxWidth:"350px"},children:(0,B.jsx)(d.Z.Group,{className:"m-1",children:(0,B.jsxs)("div",{style:{position:"relative"},children:[(0,B.jsx)(d.Z.Control,{type:"text",placeholder:"Overview",value:U.description,onChange:function(e){q((0,s.Z)((0,s.Z)({},U),{},{description:e.target.value})),he.description&&Oe()}}),he.description&&(0,B.jsx)(z.Z,{message:he.description,type:"error",profile:!0})]})})}):(0,B.jsx)("div",{style:{fontSize:"15px",marginLeft:"30px",paddingTop:"5px"},children:U.description})]}),(0,B.jsx)("div",{style:{width:"fit-content",padding:"10px"},children:J&&L===localStorage.getItem("user")?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(d.Z,{style:{width:"auto",maxWidth:"350px"},children:[(0,B.jsx)(d.Z.Group,{className:"m-1",children:(0,B.jsxs)("div",{style:{position:"relative"},children:[(0,B.jsx)(x.Z.Title,{children:"Status"}),(0,B.jsx)(d.Z.Control,{type:"text",placeholder:"Current Status",value:U.status.title,onChange:function(e){q((0,s.Z)((0,s.Z)({},U),{},{status:(0,s.Z)((0,s.Z)({},U.status),{},{title:e.target.value})}))}}),he.statusTitle&&(0,B.jsx)(z.Z,{message:he.statusTitle,type:"error",profile:!0})]})}),(0,B.jsx)(x.Z.Title,{children:"Status Description"}),(0,B.jsx)(d.Z.Group,{className:"m-1",children:(0,B.jsxs)("div",{style:{position:"relative"},children:[(0,B.jsx)(d.Z.Control,{type:"text",placeholder:"Description",value:U.status.description,onChange:function(e){q((0,s.Z)((0,s.Z)({},U),{},{status:(0,s.Z)((0,s.Z)({},U.status),{},{description:e.target.value})}))}}),he.statusDescription&&(0,B.jsx)(z.Z,{message:he.statusDescription,type:"error",profile:!0})]})})]}),(0,B.jsx)(a.Z,{className:"justify-content-center",children:["primary","secondary","success","danger","warning","info","dark"].map((function(e){return(0,B.jsx)(o.Z,{className:"m-2",style:{cursor:"pointer"},children:(0,B.jsx)(x.Z.Title,{style:e===U.status.color?{border:"2px solid black",borderRadius:"5px",padding:"5px"}:{border:"2px solid white",padding:"5px"},onClick:function(){q((0,s.Z)((0,s.Z)({},U),{},{status:(0,s.Z)((0,s.Z)({},U.status),{},{color:e})}))},children:(0,B.jsx)(u.Z,{style:{width:"100px",height:"30px",margin:"auto"},bg:e,children:(0,B.jsx)("span",{children:e})})})})}))})]}):(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(x.Z.Title,{className:"status",children:[(0,B.jsx)("span",{style:{marginRight:"5px"},children:"Status:"}),(0,B.jsx)(u.Z,{bg:U.status.color?U.status.color:"primary",className:"p-2",children:U.status.title})]}),(0,B.jsx)(x.Z.Title,{style:{fontSize:"15px",fontWeight:"200",marginLeft:"30px"},children:U.status.description})]})})]})}),(0,B.jsx)(x.Z,{style:{border:"none"},children:(0,B.jsxs)(a.Z,{className:"justify-content-center m-auto align-items-center",style:{maxWidth:"1000px"},children:[(0,B.jsxs)(o.Z,{className:"secondaryInfo-item",children:[(0,B.jsx)("label",{className:"secondaryInfo-label",children:(0,B.jsxs)(x.Z.Title,{style:{fontSize:"20px"},children:[(0,B.jsx)(v.Z,{className:"icons"}),"Project Key:"]})}),(0,B.jsxs)(x.Z.Title,{style:{fontSize:"17px",marginLeft:"50px",WebkitTextSecurity:"disc"},children:[U._id,(0,B.jsx)(p.Z,{placement:"bottom",delay:{show:250,hide:400},overlay:Pe($?"Copied":"Copy"),children:(0,B.jsx)(N.Z,{style:{marginLeft:"10px",marginBottom:"5px",width:"16px",height:"16px",cursor:"pointer"},onClick:function(){var e;e=U._id,navigator.clipboard.writeText(e),ee(!0)}})})]})]}),(0,B.jsxs)(o.Z,{className:"secondaryInfo-item",children:[(0,B.jsx)("label",{className:"secondaryInfo-label",children:(0,B.jsxs)(x.Z.Title,{style:{fontSize:"20px"},children:[(0,B.jsx)(b.Z,{className:"icons"}),"Location:"]})}),J?(0,B.jsx)(d.Z,{style:{width:"auto",maxWidth:"350px"},children:(0,B.jsx)(d.Z.Group,{className:"m-1",children:(0,B.jsx)("div",{style:{position:"relative"},children:(0,B.jsx)(d.Z.Control,{type:"text",placeholder:"Overview",value:U.location,onChange:function(e){q((0,s.Z)((0,s.Z)({},U),{},{location:e.target.value}))}})})})}):(0,B.jsx)(x.Z.Title,{style:{fontSize:"17px",marginLeft:"50px"},children:U.location})]}),(0,B.jsxs)(o.Z,{className:"secondaryInfo-item",children:[(0,B.jsx)("label",{className:"secondaryInfo-label",children:(0,B.jsxs)(x.Z.Title,{style:{fontSize:"20px"},children:[(0,B.jsx)(w.Z,{className:"icons"}),"Users Involved:"]})}),(0,B.jsx)(a.Z,{className:"justify-content-center align-items-center",style:{fontSize:"17px",marginLeft:"50px"},children:U.users.map((function(e,t,i){return e===L?(0,B.jsx)("div",{}):(0,B.jsx)(B.Fragment,{children:(0,B.jsx)(o.Z,{className:"m-1",children:(0,B.jsx)(x.Z.Title,{children:(0,B.jsx)(u.Z,{className:"p-2",bg:"secondary",children:e})})})})}))})]}),(0,B.jsxs)("div",{className:"secondaryInfo-item",children:[(0,B.jsx)("label",{className:"secondaryInfo-label",style:{display:"flex"},children:(0,B.jsxs)(x.Z.Title,{style:{fontSize:"20px"},children:[(0,B.jsx)(S.Z,{className:"icons"}),"Insurance Claim:"]})}),J&&(0,B.jsxs)("div",{style:{display:"flex",margin:"5px"},children:[(0,B.jsx)("div",{style:{fontSize:"15px",margin:"auto",textAlign:"center"},children:"Still using?"}),(0,B.jsx)(P.Z,{primaryColor:_,onClickFunction:function(){q((0,s.Z)((0,s.Z)({},U),{},{insuranceClaim:(0,s.Z)((0,s.Z)({},U.insuranceClaim),{},{using:!0})}))},currentChoice:xe,setCurrentChoice:ue,text:"Yes",small:!0}),(0,B.jsx)(P.Z,{primaryColor:_,onClickFunction:function(){q((0,s.Z)((0,s.Z)({},U),{},{insuranceClaim:(0,s.Z)((0,s.Z)({},U.insuranceClaim),{},{using:!1})}))},currentChoice:xe,setCurrentChoice:ue,text:"No",small:!0})]}),!0===U.insuranceClaim.using?(0,B.jsx)(B.Fragment,{children:(0,B.jsxs)("ul",{children:[(0,B.jsx)("li",{children:(0,B.jsx)(x.Z.Title,{style:{fontSize:"16px",marginLeft:"20px"},children:"Claim Number:"})}),(0,B.jsx)("div",{children:J?(0,B.jsx)(d.Z,{style:{width:"auto",maxWidth:"350px"},children:(0,B.jsx)(d.Z.Group,{className:"m-1",children:(0,B.jsxs)("div",{style:{position:"relative"},children:[(0,B.jsx)(d.Z.Control,{type:"text",placeholder:"Claim Number",value:U.insuranceClaim.claimNumber,style:oe?{WebkitTextSecurity:"none"}:{WebkitTextSecurity:"disc"},onChange:function(e){q((0,s.Z)((0,s.Z)({},U),{},{insuranceClaim:(0,s.Z)((0,s.Z)({},U.insuranceClaim),{},{claimNumber:e.target.value})}))}}),(0,B.jsx)("div",{style:{position:"absolute",top:"10px",right:"20px"},children:oe?(0,B.jsx)(k.Z,{className:"icons",style:{cursor:"pointer"},onClick:function(){return ae(!1)}}):(0,B.jsx)(T.Z,{className:"icons",style:{cursor:"pointer"},onClick:function(){return ae(!0)}})})]})})}):(0,B.jsxs)("div",{style:{display:"flex"},children:[(0,B.jsx)(x.Z.Title,{className:"claimNumber",style:oe?{WebkitTextSecurity:"none",fontSize:"16px"}:{WebkitTextSecurity:"disc"},children:U.insuranceClaim.claimNumber}),oe?(0,B.jsx)(k.Z,{className:"icons",style:{cursor:"pointer"},onClick:function(){return ae(!1)}}):(0,B.jsx)(T.Z,{className:"icons",style:{cursor:"pointer"},onClick:function(){return ae(!0)}})]})}),(0,B.jsx)("li",{children:(0,B.jsx)(x.Z.Title,{style:{fontSize:"16px",marginLeft:"20px"},children:"Date of damage done:"})}),J?(0,B.jsx)(d.Z,{style:{width:"auto",maxWidth:"350px"},children:(0,B.jsx)(d.Z.Group,{className:"m-1",children:(0,B.jsx)("div",{style:{position:"relative"},children:(0,B.jsx)(d.Z.Control,{type:"date",value:De(),onChange:function(e){q((0,s.Z)((0,s.Z)({},U),{},{insuranceClaim:(0,s.Z)((0,s.Z)({},U.insuranceClaim),{},{dateOfDamage:e.target.value})}))}})})})}):(0,B.jsx)(x.Z.Title,{style:{fontSize:"16px",marginLeft:"50px"},children:De()}),(0,B.jsx)("li",{children:(0,B.jsx)(x.Z.Title,{style:{fontSize:"16px",marginLeft:"20px"},children:"Date of inspection:"})}),J?(0,B.jsx)(d.Z,{style:{width:"auto",maxWidth:"350px"},children:(0,B.jsx)(d.Z.Group,{className:"m-1",children:(0,B.jsx)("div",{style:{position:"relative"},children:(0,B.jsx)(d.Z.Control,{type:"date",value:Fe(),onChange:function(e){q((0,s.Z)((0,s.Z)({},U),{},{insuranceClaim:(0,s.Z)((0,s.Z)({},U.insuranceClaim),{},{dateOfInspection:e.target.value})}))}})})})}):(0,B.jsx)(x.Z.Title,{style:{fontSize:"16px",marginLeft:"50px"},children:Fe()})]})}):(0,B.jsx)(x.Z.Title,{style:{fontSize:"17px",marginLeft:"50px"},children:"None"})]}),(0,B.jsx)("div",{style:{margin:"10px"},children:(0,B.jsxs)("label",{style:{display:"flex",justifyContent:"center",borderBottom:"1px solid ".concat(_),maxWidth:"350px",margin:"auto"},children:[(0,B.jsxs)(x.Z.Title,{style:{fontSize:"20px"},children:[(0,B.jsx)(I.Z,{className:"icons"}),"Files:"]}),ye&&(0,B.jsx)(G,{renderTooltip:Pe,handleUpdateFiles:function(e){(0,R.Ot)(e,q,Q,U._id,D)},add:Ne,setShowCloudinaryWidget:ge}),se?(0,B.jsx)(B.Fragment,{children:(0,B.jsx)(g.Z,{onClick:function(){ne(!1)},style:{color:"green",cursor:"pointer",marginLeft:"10px"}})}):(0,B.jsxs)(h.Z,{style:{marginLeft:"10px"},children:[(0,B.jsx)(h.Z.Toggle,{as:y.Z,style:{cursor:"pointer",width:"25px",height:"25px"},id:"dropdown-basic"}),(0,B.jsxs)(h.Z.Menu,{children:[(0,B.jsx)(h.Z.Item,{onClick:function(){Ge(),be("image")},children:(0,B.jsx)("div",{className:"text-center p-3",style:{color:"green"},children:"Add Image"})}),(0,B.jsx)(h.Z.Item,{onClick:function(){Ge(),be("document")},children:(0,B.jsx)("div",{className:"text-center p-3",style:{color:"green"},children:"Add Document"})}),(0,B.jsx)(h.Z.Item,{onClick:function(){ne(!0)},children:(0,B.jsx)("div",{className:"text-center p-3",style:{color:"red"},children:"Remove File"})})]})]})]})})]})}),(0,B.jsx)(a.Z,{className:"justify-content-center",children:U.files.map((function(e){return(0,B.jsxs)(o.Z,{style:{display:"flex",flexDirection:"column",marginBottom:"10px"},children:[(0,B.jsx)(j.Ee,{publicId:e.name,style:{width:"200px",height:"200px",objectFit:"cover",margin:"auto"}}),se&&(0,B.jsx)(c.Z,{variant:"danger",style:{width:"200px",margin:"auto"},onClick:function(){Te(!0),We({title:"Remove this file?",action:Be,_id:e.name})},children:"delete"})]})}))})]})]})}}}]);
//# sourceMappingURL=379.55bbbd18.chunk.js.map