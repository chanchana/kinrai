(this["webpackJsonpdata-collector"]=this["webpackJsonpdata-collector"]||[]).push([[0],{118:function(e,a,t){e.exports=t(146)},123:function(e,a,t){},146:function(e,a,t){"use strict";t.r(a);var n,l=t(0),r=t.n(l),c=t(11),o=t.n(c),i=(t(123),t(12)),u=t(176),m=t(196),s=t(180),d=t(189),E=t(182),p=t(96),f=t(172),v=t(194),g=t(192),h=t(179),b=t(198),O=t(193),j=t(200),S=t(181),y=t(15),k=t(190),_=t(94),x=t(83);t.n(x).a.config();var C={appServerUrl:null!==(n=Object({NODE_ENV:"production",PUBLIC_URL:"/kinrai",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).APP_SERVER_URL)&&void 0!==n?n:"https://restaurant-recommender-system.et.r.appspot.com"},P=t(29),w=t.n(P),U=t(39),T=t.n(U),W=function(){var e=Object(l.useState)(!1),a=Object(i.a)(e,2),t=a[0],n=a[1],c=Object(l.useState)(!1),o=Object(i.a)(c,2),d=o[0],x=o[1],P=Object(l.useState)(""),U=Object(i.a)(P,2),W=U[0],R=U[1],z=Object(l.useState)(""),B=Object(i.a)(z,2),I=B[0],G=B[1],L=Object(l.useState)(""),D=Object(i.a)(L,2),F=D[0],M=D[1],K=Object(l.useState)(null),N=Object(i.a)(K,2),A=N[0],H=N[1],V=Object(l.useState)(""),J=Object(i.a)(V,2),$=J[0],Z=J[1],q=Object(l.useState)(!1),Q=Object(i.a)(q,2),X=Q[0],Y=Q[1],ee=Object(l.useState)([]),ae=Object(i.a)(ee,2),te=ae[0],ne=ae[1],le=Object(l.useState)([]),re=Object(i.a)(le,2),ce=re[0],oe=re[1];Object(l.useEffect)((function(){w.a.get("".concat(C.appServerUrl,"/api/categories/search?is_visible=1")).then((function(e){var a=[];e.data.slice(0,10).forEach((function(e){console.log(e),a.push({value:e._id,label:e.name_en})})),oe(a),n(!0)})).catch((function(e){alert(e.response)}))}),[]);var ie=ce.map((function(e){var a=e.value,t=e.label;return r.a.createElement(f.a,{control:r.a.createElement(v.a,{checked:te.includes(a),onChange:function(){return function(e){var a=(null===te||void 0===te?void 0:te.includes(e))?null===te||void 0===te?void 0:te.filter((function(a){return a!==e})):[].concat(Object(p.a)(null!==te&&void 0!==te?te:[]),[e]);return ne(a),console.log(a),a}(a)},name:a}),key:a,label:t})}));return r.a.createElement("div",null,r.a.createElement("h3",null,"Registration"),t?r.a.createElement("div",null,r.a.createElement(u.a,{fullWidth:!0},r.a.createElement(g.a,{display:"flex",alignItems:"center"},r.a.createElement(g.a,{width:"100%",mr:1},r.a.createElement(m.a,{fullWidth:!0,error:""!==W,helperText:W,value:I,onChange:function(e){var a=e.target.value,t="";a.match(/^[0-9a-zA-Z]+$/)||(t="Cannot contain special charecters."),""===a&&(t="Username cannot be blank."),""===t&&(x(!0),w.a.get("".concat(C.appServerUrl,"/api/users/has/").concat(a)).then((function(e){x(!1),t=e.data?"This name is already existed":"",R(t)}))),R(t),G(a)},variant:"outlined",label:"Username"})),d&&r.a.createElement(g.a,{minWidth:35},r.a.createElement(h.a,{color:"secondary"}))),r.a.createElement("p",null),r.a.createElement(u.a,{variant:"outlined"},r.a.createElement(b.a,null,"Gender"),r.a.createElement(O.a,{variant:"outlined",value:F,onChange:function(e){M(e.target.value)},label:"Gender"},r.a.createElement(j.a,{value:"none"},r.a.createElement("em",null,"Select gender...")),r.a.createElement(j.a,{value:"male"},"Male"),r.a.createElement(j.a,{value:"female"},"Female"))),r.a.createElement(y.a,{utils:_.a},r.a.createElement(k.a,{margin:"normal",inputVariant:"outlined",id:"date-picker-dialog",label:"Birth Date",format:"dd/MM/yyyy",value:A,onChange:function(e){H(e)},KeyboardButtonProps:{"aria-label":"change date"}})),r.a.createElement("h4",null,"Profile"),r.a.createElement(u.a,{variant:"outlined"},r.a.createElement(b.a,{id:"demo-simple-select-filled-label"},"Price Preference"),r.a.createElement(O.a,{labelId:"demo-simple-select-filled-label",variant:"outlined",value:$,onChange:function(e){Z(e.target.value)},label:"Price Preference"},r.a.createElement(j.a,{value:"none"},r.a.createElement("em",null,"Select prefer price...")),r.a.createElement(j.a,{value:1},"\u0e3f"),r.a.createElement(j.a,{value:2},"\u0e3f\u0e3f"),r.a.createElement(j.a,{value:3},"\u0e3f\u0e3f\u0e3f"),r.a.createElement(j.a,{value:4},"\u0e3f\u0e3f\u0e3f\u0e3f"),r.a.createElement(j.a,{value:-1},"No Preference"))),r.a.createElement("p",null),r.a.createElement(f.a,{control:r.a.createElement(v.a,{checked:X,onChange:function(e){Y(e.target.checked)}}),label:"Prefer nearby"}),r.a.createElement("p",null),r.a.createElement("h4",null,"Favorite Categories"),r.a.createElement(u.a,{component:"fieldset"},r.a.createElement(S.a,null,ie))),r.a.createElement("p",null),r.a.createElement(s.a,{onClick:function(){if(""!==W)alert(W);else{var e=[];if(""===I&&e.push("Username"),""===F&&e.push("Gender"),A||e.push("Birthdate"),""===$&&e.push("Prefer Price"),e.length>0)alert("Please fill in theres fields: ".concat(e.join(", ")));else{n(!1);var a={username:I,profile:{gender:F,birthdate:A,preference:{categories:te,price_range:$,prefer_nearby:X}}};w.a.post("".concat(C.appServerUrl,"/api/users"),a).then((function(e){"username"in e.data?(T.a.set("username",e.data.username),window.location.reload()):(alert("Error creating new user"),n(!0))})).catch((function(e){alert(e.response),n(!0)}))}}},variant:"contained",color:"primary"},"Register"),r.a.createElement("p",null)):r.a.createElement(E.a,null))},R=t(147),z=t(183),B=t(184),I=t(185),G=t(186),L=t(201),D=t(187),F=t(91),M=t.n(F),K=t(90),N=t.n(K),A=t(87),H=t.n(A),V=t(88),J=t.n(V),$=t(89),Z=t.n($),q=t(92),Q=t.n(q),X=t(93),Y=t.n(X),ee=function(e){return r.a.createElement(g.a,{display:"flex",alignItems:"center"},r.a.createElement(g.a,{width:"100%",mr:1},r.a.createElement(E.a,Object.assign({variant:"determinate"},e))),r.a.createElement(g.a,{minWidth:35},r.a.createElement(R.a,{variant:"body2",color:"textSecondary"},e.label)))},ae=function(e){var a,t,n,c=Object(l.useState)("Getting start."),o=Object(i.a)(c,2),u=o[0],m=o[1],d=Object(l.useState)(null),p=Object(i.a)(d,2),f=p[0],v=p[1],g=Object(l.useState)(null),h=Object(i.a)(g,2),b=h[0],O=h[1],j=Object(l.useState)(null),S=Object(i.a)(j,2),y=S[0],k=S[1],_=Object(l.useState)([]),x=Object(i.a)(_,2),P=x[0],U=x[1],W=Object(l.useState)(0),R=Object(i.a)(W,2),F=R[0],K=R[1];Object(l.useEffect)((function(){m("Getting current location"),"geolocation"in navigator?navigator.geolocation.getCurrentPosition((function(a){O([a.coords.longitude,a.coords.latitude]),console.log(a.coords),m("Getting recommendations"),w.a.post("".concat(C.appServerUrl,"/api/recommendations"),{users:[e.user._id],location:{type:"Point",coordinates:[a.coords.longitude,a.coords.latitude]}}).then((function(e){console.log(e.data),v(e.data.recommendations),k(e.data.token),m("")}))})):alert("Geolocation is disabled")}),[e.user._id]);var A=function(e,a){var t={restaurant:e,is_love:a,timestamp:Date.now()};P.push(t),U(P);var n=F+1;K(n),n>=f.length&&(console.log("finish!"),console.log(P),w.a.post("".concat(C.appServerUrl,"/api/recommendations"),{token:y,histories:P}).then((function(e){v(e.data.recommendations)})))},V=r.a.createElement(z.a,{container:!0,direction:"column",alignItems:"center"},r.a.createElement(H.a,{style:{fontSize:100},color:"secondary"}),r.a.createElement("h3",null,"Thank you."),r.a.createElement(s.a,{onClick:function(){K(0)},variant:"contained",color:"primary"},"More")),$=r.a.createElement("div",null,f&&F<f.length&&r.a.createElement("div",null,r.a.createElement(ee,{variant:"determinate",value:(F+1)/f.length*100,label:"".concat(F+1,"/").concat(f.length)}),r.a.createElement("p",null),r.a.createElement(B.a,null,f[F].cover_url&&r.a.createElement(I.a,{component:"img",image:f[F].cover_url,title:"Contemplative Reptile",height:"160"}),r.a.createElement(G.a,null,r.a.createElement("h2",{style:{marginBottom:"0px",marginTop:"5px"}},null!==(a=f[F].name)&&void 0!==a?a:""),r.a.createElement("p",{style:{fontSize:"10px",color:"gray",marginBottom:"30px"}},f[F].address),r.a.createElement("div",null,f[F].profile.categories.map((function(e){var a=e._id,t=e.name_en;return r.a.createElement(L.a,{key:a,style:{marginBottom:"5px",marginRight:"10px"},label:t})}))),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",null,null!==(t="".concat((f[F].dist.calculated/1e3).toFixed(2)," km"))&&void 0!==t?t:"","\xa0\xa0\xa0\xa0\xa0"),-1!==f[F].profile.price_range&&r.a.createElement("span",null,"\u0e3f".repeat(f[F].profile.price_range),"\xa0\xa0\xa0\xa0\xa0"),f[F].profile.rating&&r.a.createElement("span",null,r.a.createElement(J.a,{style:{fontSize:14}})," ",f[F].profile.rating,"\xa0\xa0\xa0\xa0\xa0"),f[F].profile.likes&&r.a.createElement("span",null,r.a.createElement(Z.a,{style:{fontSize:14}})," ",f[F].profile.likes)))),r.a.createElement(D.a,null,r.a.createElement(z.a,{container:!0},r.a.createElement(z.a,{item:!0,xs:6},r.a.createElement(s.a,{fullWidth:!0,onClick:function(){return A(f[F]._id,!1)},size:"large",color:"secondary",startIcon:r.a.createElement(N.a,null)},r.a.createElement("strong",null,"Nah"))),r.a.createElement(z.a,{item:!0,xs:6},r.a.createElement(s.a,{fullWidth:!0,onClick:function(){return A(f[F]._id,!0)},size:"large",color:"primary",startIcon:r.a.createElement(M.a,null)},r.a.createElement("strong",null,"Love"))))))),f&&F>=f.length&&r.a.createElement("div",null,V));return r.a.createElement("div",null,r.a.createElement(z.a,{container:!0,direction:"row",justify:"space-between"},r.a.createElement("h3",null,"Hi, ",null!==(n=e.user.username)&&void 0!==n?n:""),r.a.createElement(s.a,{onClick:function(){T.a.remove("username"),window.location.reload()},size:"small",color:"secondary"},"Logout")),b?r.a.createElement("div",{style:{color:"gray"}},r.a.createElement(Q.a,{style:{fontSize:"14px"}})," ",b[1].toFixed(6),", ",b[0].toFixed(6)):r.a.createElement(Y.a,{style:{fontSize:"14px"}}),r.a.createElement("p",null),u?r.a.createElement("div",null,r.a.createElement("p",null,u),r.a.createElement(E.a,null)):r.a.createElement("div",null,$),r.a.createElement("p",null))},te=t(95),ne=t(188),le=Object(te.a)({palette:{primary:{light:"#ffa040",main:"#ff6f00",dark:"#c43e00",contrastText:"#fff"},secondary:{light:"#63a4ff",main:"#1976d2",dark:"#004ba0",contrastText:"#fff"}}}),re=function(){var e=Object(l.useState)(!1),a=Object(i.a)(e,2),t=a[0],n=a[1],c=Object(l.useState)(null),o=Object(i.a)(c,2),p=o[0],f=o[1],v=Object(l.useState)(""),g=Object(i.a)(v,2),h=g[0],b=g[1],O=Object(l.useState)(!1),j=Object(i.a)(O,2),S=j[0],y=j[1];Object(l.useEffect)((function(){var e=T.a.get("username");e?k(e):n(!0)}),[]);var k=function(e){w.a.post("".concat(C.appServerUrl,"/api/auth"),{username:e}).then((function(e){var a=e.data;a.status?(T.a.set("username",a.data.username),f(a.data),n(!0)):(alert(a.error),n(!0))})).catch((function(e){alert(e)}))},_=r.a.createElement("div",null,r.a.createElement("h3",null,"Please login"),r.a.createElement(u.a,{fullWidth:!0},r.a.createElement(m.a,{onChange:function(e){b(e.target.value)},variant:"outlined",label:"Username"})),r.a.createElement(s.a,{onClick:function(){n(!1),console.log(C),k(h)},style:{marginTop:"10px"},variant:"contained",color:"primary"},"Login"),r.a.createElement("h4",null,"or"),r.a.createElement(s.a,{onClick:function(){return y(!0)},variant:"contained",color:"primary"},"Register"));return r.a.createElement("div",null,r.a.createElement(ne.a,{theme:le},r.a.createElement(d.a,{component:"main",maxWidth:"xs"},r.a.createElement("h1",null,"Resteraunt Recommender"),t?r.a.createElement("div",null,!S&&!p&&_,S&&r.a.createElement("div",null,r.a.createElement(s.a,{onClick:function(){return y(!1)},color:"primary"},"Login"),r.a.createElement(W,null)),p&&r.a.createElement(ae,{user:p,name:p.username})):r.a.createElement(E.a,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[118,1,2]]]);
//# sourceMappingURL=main.065de63b.chunk.js.map