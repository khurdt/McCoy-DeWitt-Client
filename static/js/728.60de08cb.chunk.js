"use strict";(self.webpackChunkmccoy_dewitt_client=self.webpackChunkmccoy_dewitt_client||[]).push([[728],{2728:function(e,s,t){t.r(s),t.d(s,{default:function(){return j}});var n=t(885),r=t(2791),i=t(8035),c=t(8213),l=t(9743),a=t(2677),o=t(9140),d=t(5736),x=t(3360),m=t(9348),u=t(9136),h=t(184);function j(e){var s=e.adminClients,t=e.adminProjects,j=e.primaryColor,y=e.secondaryColor,p=e.navigate,f=(0,r.useState)(!1),Z=(0,n.Z)(f,2),C=Z[0],g=Z[1],v=(0,r.useState)(!0),N=(0,n.Z)(v,2),b=N[0],k=N[1],w=(0,r.useState)({}),P=(0,n.Z)(w,2),T=P[0],F=P[1];return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l.Z,{className:"m-auto",style:{justifyContent:"center"},children:C?(0,h.jsx)(a.Z,{className:"m-2",style:b?{}:{backgroundColor:j},children:(0,h.jsx)(u.Z,{submitButton:!0,primaryColor:j,onClickFunction:function(){g(!1)},text:"Done"})}):(0,h.jsxs)(a.Z,{className:"m-auto justify-content-center",children:[(0,h.jsx)("div",{className:"m-2",children:(0,h.jsx)(u.Z,{primaryColor:j,onClickFunction:function(){k(!0)},currentChoice:T,setCurrentChoice:F,text:"Your Projects"})}),(0,h.jsx)("div",{className:"m-2",children:(0,h.jsx)(u.Z,{primaryColor:j,currentChoice:T,setCurrentChoice:F,onClickFunction:function(){k(!1)},text:"Your Clients"})})]})}),b?(0,h.jsxs)(l.Z,{className:"m-auto",style:{justifyContent:"center"},children:[0===t.length&&(0,h.jsx)("div",{style:{height:"80vh"},className:"text-center",children:"You Don't Have Any Projects"}),t.length>0&&t.map((function(e,s){var t=i.uZ.find((function(s){return e.service.toLowerCase().includes(s.image)}));return(0,h.jsx)(m.df,{triggerOnce:!0,children:function(n){var r=n.inView,a=n.ref;n.entry;return(0,h.jsxs)(o.Z,{ref:a,className:"m-3",style:{width:"18rem",margin:"0",padding:"0"},children:[(0,h.jsxs)("div",{style:{position:"relative"},children:[r&&(0,h.jsx)(o.Z.Img,{style:{height:"190px"},as:c.Ee,publicId:t?t.image:"custom"}),(0,h.jsx)("div",{className:"service-title",children:e.service})]}),(0,h.jsxs)(o.Z.Body,{children:[(0,h.jsxs)(o.Z.Text,{children:["Status: ",(0,h.jsx)(d.Z,{className:"p-2",children:e.status.title})]}),(0,h.jsx)(o.Z.Text,{className:"text-center",children:e.description}),(0,h.jsx)(o.Z.Footer,{children:(0,h.jsx)(l.Z,{className:"justify-content-center",children:C?(0,h.jsx)(x.Z,{variant:"danger",onClick:function(){(0,i.ob)(e._id)},children:"remove"}):(0,h.jsx)(u.Z,{primaryColor:j,onClickFunction:function(){p("project",{state:{selectedProject:e,selectedService:t}})},text:"See Project",login:!0,submitButton:!0})})})]})]},s)}})}))]}):(0,h.jsx)(l.Z,{className:"m-auto",style:{justifyContent:"center"},children:s.map((function(e,s){var t=e.firstName.slice(0,1)+e.lastName.slice(0,1);return(0,h.jsxs)(o.Z,{className:"m-3",style:{width:"18rem",margin:"0",padding:"0"},children:[(0,h.jsxs)("div",{style:{display:"flex"},children:[(0,h.jsx)("div",{style:{backgroundColor:e.color},className:"client-badge",children:t}),(0,h.jsxs)(o.Z.Text,{className:"m-auto text-center",style:{fontSize:"20px"},children:[e.firstName," ",e.lastName]})]}),(0,h.jsxs)(o.Z.Body,{children:[(0,h.jsxs)(o.Z.Text,{children:[(0,h.jsx)("span",{children:"Username: "}),(0,h.jsx)(d.Z,{bg:"secondary",className:"p-2",children:e.username})]}),(0,h.jsxs)(o.Z.Text,{children:[(0,h.jsx)("span",{style:{color:y},children:"Company: "}),e.company]}),(0,h.jsxs)(o.Z.Text,{children:[(0,h.jsx)("span",{style:{color:y},children:"Address: "}),e.address]}),(0,h.jsxs)(o.Z.Footer,{children:[(0,h.jsxs)(o.Z.Text,{children:[(0,h.jsx)("span",{style:{color:y},children:"Email: "}),e.email]}),(0,h.jsxs)(o.Z.Text,{children:[(0,h.jsx)("span",{style:{color:y},children:"Phone: "}),e.phone]})]})]})]},s)}))})]})}},5736:function(e,s,t){var n=t(1413),r=t(5987),i=t(1694),c=t.n(i),l=t(2791),a=t(162),o=t(184),d=["bsPrefix","bg","pill","text","className","as"],x=l.forwardRef((function(e,s){var t=e.bsPrefix,i=e.bg,l=e.pill,x=e.text,m=e.className,u=e.as,h=void 0===u?"span":u,j=(0,r.Z)(e,d),y=(0,a.vE)(t,"badge");return(0,o.jsx)(h,(0,n.Z)((0,n.Z)({ref:s},j),{},{className:c()(m,y,l&&"rounded-pill",x&&"text-".concat(x),i&&"bg-".concat(i))}))}));x.displayName="Badge",x.defaultProps={bg:"primary",pill:!1},s.Z=x}}]);
//# sourceMappingURL=728.60de08cb.chunk.js.map