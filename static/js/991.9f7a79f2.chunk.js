"use strict";(self.webpackChunkmccoy_dewitt_client=self.webpackChunkmccoy_dewitt_client||[]).push([[991],{4991:function(e,t,r){r.r(t),r.d(t,{default:function(){return E}});var i=r(2791),n=r(8213),o=[{_id:1,title:"Storm Restoration",image:"storm",description:""},{_id:2,title:"Insurance Negotiation",image:"insurance",description:""},{_id:3,title:"Roofing",image:"roof",description:""},{_id:4,title:"Flooring",image:"flooring",description:""},{_id:5,title:"Siding",image:"siding",description:""},{_id:6,title:"Soffit",image:"soffit",description:""},{_id:7,title:"Fascia",image:"fascia",description:""},{_id:8,title:"Paint",image:"paint",description:""}],s=r(5671),a=r(3144),c=r(136),l=r(4876);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},d.apply(this,arguments)}var u=new Map,h=new WeakMap,p=0,f=void 0;function v(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return"".concat(t,"_").concat("root"===t?(r=e.root)?(h.has(r)||(p+=1,h.set(r,p.toString())),h.get(r)):"0":e[t]);var r})).toString()}function m(e){var t=v(e),r=u.get(t);if(!r){var i,n=new Map,o=new IntersectionObserver((function(t){t.forEach((function(t){var r,o=t.isIntersecting&&i.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=o),null==(r=n.get(t.target))||r.forEach((function(e){e(o,t)}))}))}),e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:o,elements:n},u.set(t,r)}return r}function g(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:f;if("undefined"===typeof window.IntersectionObserver&&void 0!==i){var n=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:"number"===typeof r.threshold?r.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),function(){}}var o=m(r),s=o.id,a=o.observer,c=o.elements,l=c.get(e)||[];return c.has(e)||c.set(e,l),l.push(t),a.observe(e),function(){l.splice(l.indexOf(t),1),0===l.length&&(c.delete(e),a.unobserve(e)),0===c.size&&(a.disconnect(),u.delete(s))}}var b=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function y(e){return"function"!==typeof e.children}var x=function(e){(0,c.Z)(r,e);var t=(0,l.Z)(r);function r(e){var i;return(0,s.Z)(this,r),(i=t.call(this,e)).node=null,i._unobserveCb=null,i.handleNode=function(e){i.node&&(i.unobserve(),e||i.props.triggerOnce||i.props.skip||i.setState({inView:!!i.props.initialInView,entry:void 0})),i.node=e||null,i.observeNode()},i.handleChange=function(e,t){e&&i.props.triggerOnce&&i.unobserve(),y(i.props)||i.setState({inView:e,entry:t}),i.props.onChange&&i.props.onChange(e,t)},i.state={inView:!!e.initialInView,entry:void 0},i}return(0,a.Z)(r,[{key:"componentDidUpdate",value:function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())}},{key:"componentWillUnmount",value:function(){this.unobserve(),this.node=null}},{key:"observeNode",value:function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,r=e.root,i=e.rootMargin,n=e.trackVisibility,o=e.delay,s=e.fallbackInView;this._unobserveCb=g(this.node,this.handleChange,{threshold:t,root:r,rootMargin:i,trackVisibility:n,delay:o},s)}}},{key:"unobserve",value:function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}},{key:"render",value:function(){if(!y(this.props)){var e=this.state,t=e.inView,r=e.entry;return this.props.children({inView:t,entry:r,ref:this.handleNode})}var n=this.props,o=n.children,s=n.as,a=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(n,b);return i.createElement(s||"div",d({ref:this.handleNode},a),o)}}]),r}(i.Component);var j=r(3504),w=r(7022),N=r(2144),k=r(6157),Z=r(9743),C=r(2677),O=r(2007),I=r.n(O);function _(){return _=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},_.apply(this,arguments)}function V(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var P=(0,i.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,o=e.size,s=void 0===o?24:o,a=V(e,["color","size"]);return i.createElement("svg",_({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),i.createElement("polyline",{points:"13 17 18 12 13 7"}),i.createElement("polyline",{points:"6 17 11 12 6 7"}))}));P.propTypes={color:I().string,size:I().oneOfType([I().string,I().number])},P.displayName="ChevronsRight";var R=P,S=r(184);function E(e){var t=e.setPageActive;return(0,S.jsx)(S.Fragment,{children:(0,S.jsxs)(w.Z,{fluid:!0,style:{margin:"0",padding:"0"},className:"intro intro mb-5",children:[(0,S.jsxs)("div",{style:{position:"relative"},children:[(0,S.jsx)("div",{className:"topfront-background"}),(0,S.jsx)(n.Ee,{publicId:"frontpage_omrxle",className:"coverImage coverImage"}),(0,S.jsxs)(N.Z,{className:"cover-card cover-card mr-auto",children:[(0,S.jsxs)(N.Z.Title,{className:"mb-3 firstTitle",children:["Restoring Buildings in the South Plains ",(0,S.jsx)("span",{children:(0,S.jsx)(R,{width:20,height:20,style:{marginBottom:"4px"},color:"#3cff01"})})]}),(0,S.jsx)(N.Z.Title,{className:"mb-3 secondTitle",style:{fontSize:"30px"},children:"We Preserve What You Love"}),(0,S.jsx)(N.Z.Title,{style:{color:"white"},children:"With Honesty And Integrity"}),(0,S.jsx)("hr",{className:"hr"}),(0,S.jsx)(k.Z,{className:"Intro-button",onClick:function(){return t("contact")},style:{width:"200px"},as:j.rU,to:"contact",variant:"light",children:"Contact Us"})]})]}),(0,S.jsx)("h3",{className:"m-4",style:{textAlign:"center"},children:"Services"}),(0,S.jsx)("hr",{style:{marginRight:"20px",marginLeft:"20px"}}),(0,S.jsx)(Z.Z,{className:"m-auto",children:o.map((function(e){return(0,S.jsx)(x,{triggerOnce:!0,children:function(t){var r=t.inView,i=t.ref;t.entry;return(0,S.jsx)(C.Z,{ref:i,xs:12,sm:9,md:5,lg:4,className:"m-auto",style:{minWidth:"300px",minHeight:"300px"},children:(0,S.jsxs)(N.Z,{className:"m-auto mb-4 mt-4 service-card service-card ".concat(r?"visible":""),children:[(0,S.jsx)(n.Ee,{publicId:e.image,className:"m-auto service-picture service-picture"}),(0,S.jsx)("div",{className:"service-title",children:e.title})]})},e._id)}})}))})]})})}},2144:function(e,t,r){r.d(t,{Z:function(){return P}});var i=r(1413),n=r(5987),o=r(1694),s=r.n(o),a=r(2791),c=r(162),l=r(6543),d=r(7472),u=r(184),h=["bsPrefix","className","variant","as"],p=a.forwardRef((function(e,t){var r=e.bsPrefix,o=e.className,a=e.variant,l=e.as,d=void 0===l?"img":l,p=(0,n.Z)(e,h),f=(0,c.vE)(r,"card-img");return(0,u.jsx)(d,(0,i.Z)({ref:t,className:s()(a?"".concat(f,"-").concat(a):f,o)},p))}));p.displayName="CardImg";var f=p,v=a.createContext(null);v.displayName="CardHeaderContext";var m=v,g=["bsPrefix","className","as"],b=a.forwardRef((function(e,t){var r=e.bsPrefix,o=e.className,l=e.as,d=void 0===l?"div":l,h=(0,n.Z)(e,g),p=(0,c.vE)(r,"card-header"),f=(0,a.useMemo)((function(){return{cardHeaderBsPrefix:p}}),[p]);return(0,u.jsx)(m.Provider,{value:f,children:(0,u.jsx)(d,(0,i.Z)((0,i.Z)({ref:t},h),{},{className:s()(o,p)}))})}));b.displayName="CardHeader";var y=b,x=["bsPrefix","className","bg","text","border","body","children","as"],j=(0,d.Z)("h5"),w=(0,d.Z)("h6"),N=(0,l.Z)("card-body"),k=(0,l.Z)("card-title",{Component:j}),Z=(0,l.Z)("card-subtitle",{Component:w}),C=(0,l.Z)("card-link",{Component:"a"}),O=(0,l.Z)("card-text",{Component:"p"}),I=(0,l.Z)("card-footer"),_=(0,l.Z)("card-img-overlay"),V=a.forwardRef((function(e,t){var r=e.bsPrefix,o=e.className,a=e.bg,l=e.text,d=e.border,h=e.body,p=e.children,f=e.as,v=void 0===f?"div":f,m=(0,n.Z)(e,x),g=(0,c.vE)(r,"card");return(0,u.jsx)(v,(0,i.Z)((0,i.Z)({ref:t},m),{},{className:s()(o,g,a&&"bg-".concat(a),l&&"text-".concat(l),d&&"border-".concat(d)),children:h?(0,u.jsx)(N,{children:p}):p}))}));V.displayName="Card",V.defaultProps={body:!1};var P=Object.assign(V,{Img:f,Title:k,Subtitle:Z,Body:N,Link:C,Text:O,Header:y,Footer:I,ImgOverlay:_})}}]);
//# sourceMappingURL=991.9f7a79f2.chunk.js.map