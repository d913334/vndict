(this.webpackJsonpvndict=this.webpackJsonpvndict||[]).push([[0],{81:function(e,a,t){e.exports=t(99)},98:function(e,a,t){},99:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(10),l=t.n(c),o=t(73),i=t(135),u=t(134),s=Object(o.a)(),m=function(e){var a=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null),r.a.createElement(i.a,{theme:s},a))},p=t(136),d=t(138),E=t(139),f=t(36),g=t(58),h=t.n(g),v=function(){return r.a.createElement(p.a,{position:"static"},r.a.createElement(d.a,null,r.a.createElement(E.a,{edge:"start",color:"inherit","aria-label":"menu"},r.a.createElement(h.a,null)),r.a.createElement(f.a,{variant:"h6"},"Vietnamese - English open dictionary")))},b=t(25),k=t.n(b),w=t(35),y=t(31),O=t(56),j=t(154),C=t(141),x=t(156),L=t(142),N=t(143),S=t(61),_=t.n(S),B=t(150),R=t(140),T=function(e){var a=e.suggests,t=e.setKeyword,n=e.search,c=U({successtionBox:{paddingTop:"25px"}});return a&&a.length>0&&r.a.createElement(B.a,{className:c.suggestList},r.a.createElement(R.a,null),r.a.createElement(f.a,{variant:"h3",component:"h5",style:{marginTop:"25px"}},"T\u1eeb li\xean quan:"),r.a.createElement(C.a,{component:"nav","aria-label":"contacts"},a.map((function(e){return r.a.createElement(x.a,{key:e.word,button:!0,onClick:function(){t(e.word),n(e.word)}},r.a.createElement(L.a,null,r.a.createElement(_.a,null)),r.a.createElement(N.a,{primary:e.word,color:"primary"}))}))))},U=Object(O.a)((function(e){return{suggestList:{backgroundColor:e.palette.background.paper,marginTop:e.spacing(5)}}})),A=t(146),V=t(75),W=t(152),D=t(153),I=t(148),P=t(64),q=t.n(P),F=t(65),K=t.n(F),J=t(66),M=t.n(J),$=t(147),H=t(155),X=t(67),z=t.n(X),G=t(68),Q=t.n(G),Y=t(69),Z=t.n(Y),ee=t(70),ae=t.n(ee),te=t(71),ne=t.n(te),re=t(45),ce=t.n(re);function le(e){var a=e.html,t=e.onLinkClick,c=e.onWordClick,l=Object(n.useRef)(null),o=Object(n.useRef)([]),i=Object(n.useCallback)((function(){var e="",a=document;window.getSelection?e=window.getSelection().toString():a.selection&&"Control"!==a.selection.type&&(e=a.selection.createRange().text),e&&c&&c(e)}),[c]);return Object(n.useEffect)((function(){return o.current.push(l.current),l.current.addEventListener("dblclick",i),Array.from(l.current.querySelectorAll("a")).forEach((function(e){e.addEventListener("click",t),o.current.push(e)})),function(){o.current.forEach((function(e){e.removeEventListener("click",t),e.removeEventListener("dblclick",i)})),o.current=[]}}),[a,t,c,i]),r.a.createElement(f.a,{ref:l,variant:"body1",component:"article",dangerouslySetInnerHTML:{__html:a}})}var oe,ie=t(20),ue=t(144),se=t(151),me=t(145),pe=Object(O.a)((function(e){return Object(j.a)({appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1},innerBox:{padding:e.spacing(2)}})})),de=function(e){var a=e.word,t=e.onClose,n=pe({}),c=r.a.forwardRef((function(e,a){return r.a.createElement(ue.a,Object.assign({direction:"up",ref:a},e))})),l=function(){return t()};return a?r.a.createElement(se.a,{fullScreen:window.innerWidth<667,open:null!=a,onClose:function(){},TransitionComponent:c},r.a.createElement(p.a,{className:n.appBar},r.a.createElement(d.a,null,r.a.createElement(E.a,{edge:"start",color:"inherit",onClick:l,"aria-label":"close"},r.a.createElement(ce.a,null)),r.a.createElement(f.a,{variant:"h6",className:n.title},a.word),r.a.createElement(me.a,{autoFocus:!0,color:"inherit",onClick:l},"Back"))),r.a.createElement(B.a,{className:n.innerBox},r.a.createElement(le,{html:a.content,onLinkClick:function(e){e.preventDefault();var a=e.currentTarget.href.split("/"),t=a[a.length-1];console.log("word",t)}}))):null};!function(e){e.Success="success",e.Error="error"}(oe||(oe={}));var Ee={RESOURCE_URL:Object({NODE_ENV:"production",PUBLIC_URL:"/vndict"}).REACT_APP_RESOURCE_URL||"https://samuraitruong.github.io/open-vn-en-dict"};function fe(e){return ge.apply(this,arguments)}function ge(){return(ge=Object(w.a)(k.a.mark((function e(a){var t,n,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={resultType:oe.Success},e.prev=1,a=a.toLocaleLowerCase().trim(),e.next=5,fetch("".concat(Ee.RESOURCE_URL,"/data/").concat(a,".json"));case 5:return n=e.sent,e.next=8,n.json();case 8:r=e.sent,t.data=r,e.next=17;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0),t.resultType=oe.Error,t.errorMessage="failed to fetch word";case 17:return e.abrupt("return",t);case 18:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}var he=Object(O.a)((function(e){return Object(j.a)({root:{padding:"2px 4px",display:"flex",alignItems:"center",width:"100%"},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10},divider:{height:1,marginTop:e.spacing(1)},container:{margin:e.spacing(1,0)},speakButton:{marginLeft:e.spacing(3)},snackbar:{backgroundColor:e.palette.error.dark}})})),ve=function(){var e=Object(ie.f)(),a=he({}),t=Object(n.useState)({}),c=Object(y.a)(t,2),l=c[0],o=c[1],i=Object(n.useState)(null),u=Object(y.a)(i,2),s=u[0],m=u[1],p=Object(n.useState)(""),d=Object(y.a)(p,2),g=d[0],h=d[1],v=Object(n.useState)("en_vn"),b=Object(y.a)(v,2),O=b[0],j=b[1],C=Object(n.useState)(null),x=Object(y.a)(C,2),L=x[0],N=x[1],S=Object(ie.g)().word,_=Object(n.useCallback)(function(){var a=Object(w.a)(k.a.mark((function a(t){var n,r;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fe(t);case 2:n=a.sent,(r=n.data)?(j("en_vn"),o(r),N(null),e.push(t)):(o({}),N("Xin l\u1ed7i, t\u1eeb b\u1ea1n t\xecm ki\u1ebfm kh\xf4ng t\u1ed3n t\u1ea1i ho\u1eb7c ch\u01b0a \u0111\u01b0\u1ee3c c\u1eadp nh\u1eadt"));case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),[e]),U=function(){var e=Object(w.a)(k.a.mark((function e(a){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fe(a);case 2:(t=e.sent).data&&t.data.en_vn&&t.data.en_vn.data&&m(t.data.en_vn.data);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){h(S),_(S)}),[S,_]);var P=l[O],F=function(e,a){var t="https://samuraitruong.github.io/open-vn-en-dict/voice/".concat(e.toLocaleLowerCase(),"_").concat(a,".mp3");new Audio(t).play()};return P&&P.data&&P.data.content&&(P.data.content=P.data.content.replace(/find\?type=(\d+)&amp;query=(.*)/gi,"$2")),r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,{container:!0,className:a.container},r.a.createElement(A.a,{item:!0,sm:6,xs:12},r.a.createElement("form",{onSubmit:function(e){return e.preventDefault(),console.log("aa"),_(g),!1}},r.a.createElement(V.a,{className:a.root},r.a.createElement(E.a,{className:a.iconButton,"aria-label":"menu"},r.a.createElement(q.a,null)),r.a.createElement(W.a,{value:g,onChange:function(e){return h(e.target.value)},className:a.input,placeholder:"English -> Vietnamese",inputProps:{"aria-label":"English -> Vietnamese"}}),r.a.createElement(E.a,{type:"submit",className:a.iconButton,"aria-label":"search"},r.a.createElement(K.a,null)),r.a.createElement(R.a,{className:a.divider,orientation:"vertical"}),r.a.createElement(E.a,{color:"primary",className:a.iconButton,"aria-label":"directions"},r.a.createElement(M.a,null))))),r.a.createElement(A.a,{item:!0,sm:6,xs:12},r.a.createElement(H.a,{value:O,exclusive:!0,onChange:function(e,a){j(a)},style:{float:"right"},"aria-label":"text alignment"},r.a.createElement($.a,{value:"en_vn","aria-label":"left aligned"},r.a.createElement(z.a,null)," Eng -> Vi \xa0"),r.a.createElement($.a,{value:"en_en","aria-label":"centered"},r.a.createElement(Q.a,null)," Eng -> Eng \xa0"),r.a.createElement($.a,{value:"synonyms","aria-label":"right aligned"},r.a.createElement(Z.a,null)," \u0110\u1ed3ng Thanh")))),P&&r.a.createElement(A.a,null,r.a.createElement(A.a,{xs:12,item:!0},r.a.createElement(f.a,{variant:"h3",component:"span"},P.data?P.data.word:""),r.a.createElement(f.a,{variant:"h4",component:"span"},r.a.createElement(B.a,{color:"grey",component:"span"},P.data?"(".concat(P.data.pronounce,")"):"")),r.a.createElement(B.a,{component:"span",className:"float-right"},r.a.createElement(D.a,{className:a.speakButton,clickable:!0,color:"primary",onClick:function(){return F(P.data.word,"us")},icon:r.a.createElement(ae.a,null),label:"US"}),r.a.createElement(D.a,{className:a.speakButton,clickable:!0,color:"secondary",onClick:function(){return F(P.data.word,"uk")},icon:r.a.createElement(ne.a,null),label:"UK"})),r.a.createElement(R.a,{className:a.divider}),r.a.createElement(le,{html:P.data&&P.data.content,onWordClick:U,onLinkClick:function(e){e.preventDefault();var a=e.currentTarget.href.split("/"),t=a[a.length-1];h(t),_(t)}}),s&&r.a.createElement(de,{word:s,onClose:function(){return m(null)}}),P.suggests&&r.a.createElement(A.a,null,r.a.createElement(T,{suggests:P.suggests,setKeyword:h,search:_})))),L&&r.a.createElement(I.a,{className:a.snackbar,message:L,action:r.a.createElement(E.a,{key:"close","aria-label":"close",color:"inherit",onClick:function(){return N(null)}},r.a.createElement(ce.a,null))}))},be=t(149),ke=t(72),we=function(){return r.a.createElement(ke.a,{basename:"/vndict"},r.a.createElement(m,null,r.a.createElement(be.a,{fixed:!0,className:"container-wrapper"},r.a.createElement(v,null),r.a.createElement(be.a,null,r.a.createElement(ie.c,null,r.a.createElement(ie.a,{path:"/:word"},r.a.createElement(ve,null)),r.a.createElement(ie.a,{path:""},r.a.createElement(ve,null)))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(98);l.a.render(r.a.createElement(we,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[81,1,2]]]);
//# sourceMappingURL=main.a28e76dd.chunk.js.map