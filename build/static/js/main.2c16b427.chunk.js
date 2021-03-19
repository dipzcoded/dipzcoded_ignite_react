(this["webpackJsonpignite-react"]=this["webpackJsonpignite-react"]||[]).push([[0],{79:function(e,n,t){"use strict";t.r(n);var c=t(1),a=t(0),r=t.n(a),i=t(23),o=t.n(i),s=t(12),u=t(16),d=t(42),l=t(43),b=t(13),m="FETCH_GAMES",j="GET_DETAIL",g="CLEAR_DETAIL",p="FILTERED_GAMES",f="CLEAR_FILTERED",h={popular:[],newGames:[],upcoming:[],filtered:null,details:null,gameScreenshot:null},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,n=arguments.length>1?arguments[1]:void 0,t=n.type,c=n.payload;switch(t){case m:return Object(b.a)(Object(b.a)({},e),{},{popular:c.popular,newGames:c.newGames,upcoming:c.upcoming});case j:return Object(b.a)(Object(b.a)({},e),{},{details:c.details,gameScreenshot:c.gameScreenshot});case p:return Object(b.a)(Object(b.a)({},e),{},{filtered:c.filtered});case g:return Object(b.a)(Object(b.a)({},e),{},{details:null,gameScreenshot:null});case f:return Object(b.a)(Object(b.a)({},e),{},{filtered:null});default:return e}},x=Object(u.combineReducers)({games:O}),v=[l.a],y=Object(u.createStore)(x,{},Object(d.composeWithDevTools)(u.applyMiddleware.apply(void 0,v))),w=t(20),k=t(4),_=t(5),S=t(24),E=t(14),I=t.n(E),G=t(21),z=t(19),C=t.n(z),R="https://api.rawg.io/api/",A=(new Date).getFullYear(),Y=function(){var e=(new Date).getMonth()+1;return e<10?"0".concat(e):e}(),T=function(){var e=(new Date).getDate();return e<10?"0".concat(e):e}(),D="".concat(A-1,"-").concat(Y,"-").concat(T),F="".concat(A+1,"-").concat(Y,"-").concat(T),P="".concat(A,"-").concat(Y,"-").concat(T),L="games?key=YOUR_API_KEY&dates=".concat(D,",").concat(P,"&ordering-rating&page_size=10"),M="games?key=YOUR_API_KEY&dates=".concat(P,",").concat(F,"&ordering=-added&page_size=10"),U="games?key=YOUR_API_KEY&dates=".concat(D,",").concat(P,"&ordering=-released&page_size=10"),K=function(e){return"".concat(R).concat(L.replace("YOUR_API_KEY",e))},N=function(e){return"".concat(R).concat(M.replace("YOUR_API_KEY",e))},J=function(e){return"".concat(R).concat(U.replace("YOUR_API_KEY",e))},B=function(e,n){return"".concat(R,"games?key=").concat(n,"&search=").concat(e,"&page_size=9 ")},H=function(e,n){return"".concat(R,"games/").concat(e,"?key=").concat(n)},W=function(e,n){return"".concat(R,"games/").concat(e,"/screenshots?key=").concat(n)},X=function(){return function(){var e=Object(G.a)(I.a.mark((function e(n){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n({type:g});case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},q=t(6),Q=t(3),V=function(e,n){return e.includes("media/screenshots")?e.replace("/media/screenshots","/media/resize/".concat(n,"/-/screenshots")):e.replace("/media/games","/media/resize/".concat(n,"/-/games"))},Z={hidden:{opacity:0},show:{opacity:1,transition:{duration:.75}},exit:{opacity:0,transition:{duration:.5}}},$={hidden:{opacity:0,scale:.5},show:{opacity:1,scale:1,transition:{duration:.75}}};function ee(){var e=Object(_.a)(["\n  min-height: 30vh;\n  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);\n  text-align: center;\n  border-radius: 1rem;\n  overflow: hidden;\n  cursor: pointer;\n  img {\n    width: 100%;\n    height: 40vh;\n    object-fit: cover;\n  }\n"]);return ee=function(){return e},e}var ne=Object(q.b)(Q.c.div)(ee()),te=function(e){var n=e.name,t=e.id,a=e.released,r=e.image,i=e.type,o=e.onChangeGameType,u=Object(s.b)(),d=t.toString();return Object(c.jsx)(ne,{variants:$,initial:"hidden",animate:"show",layoutId:"".concat(d,"-").concat(i),onClick:function(){u(function(e,n){return function(){var t=Object(G.a)(I.a.mark((function t(c){var a,r;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c(X()),t.next=4,C.a.get(H(e,n));case 4:return a=t.sent,t.next=7,C.a.get(W(e,n));case 7:r=t.sent,c({type:j,payload:{details:a.data,gameScreenshot:r.data.results}}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}(t,"fb9e55efd46d4e0d987b6e0c05de44b2")),document.body.style.overflow="hidden",o(i)},children:Object(c.jsxs)(w.b,{to:"/game/".concat(t),children:[Object(c.jsx)(Q.c.h3,{layoutId:"title ".concat(d,"-").concat(i),children:n}),Object(c.jsx)("p",{children:a}),r&&Object(c.jsx)(Q.c.img,{layoutId:"image ".concat(d,"-").concat(i),src:V(r,640),alt:n})]})})},ce=t.p+"static/media/playstation.18cc4b9c.svg",ae=t.p+"static/media/steam.d7b8819f.svg",re=t.p+"static/media/nintendo.f579be04.svg",ie=t.p+"static/media/xbox.3e7db735.svg",oe=t.p+"static/media/apple.5757c37e.svg",se=t.p+"static/media/gamepad.c9269ef5.svg",ue=t(47),de=t.n(ue);function le(){var e=Object(_.a)(["\n  img {\n    margin-top: -0.4rem;\n  }\n"]);return le=function(){return e},e}function be(){var e=Object(_.a)(["\n  margin: 5rem 0rem;\n"]);return be=function(){return e},e}function me(){var e=Object(_.a)(["\n  margin-top: 5rem;\n  img {\n    width: 100%;\n  }\n"]);return me=function(){return e},e}function je(){var e=Object(_.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  img {\n    margin-left: 3rem;\n  }\n"]);return je=function(){return e},e}function ge(){var e=Object(_.a)(["\n  text-align: center;\n"]);return ge=function(){return e},e}function pe(){var e=Object(_.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return pe=function(){return e},e}function fe(){var e=Object(_.a)(["\n  width: 80%;\n  border-radius: 1rem;\n  padding: 2rem 5rem;\n  background: white;\n  position: absolute;\n  left: 10%;\n  color: black;\n  z-index: 10;\n  img {\n    width: 100%;\n  }\n"]);return fe=function(){return e},e}function he(){var e=Object(_.a)(["\n  width: 100%;\n  min-height: 100vh;\n  overflow-y: overlay;\n  background: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 5;\n  &::-webkit-scrollbar {\n    width: 0.5rem;\n  }\n  &::-webkit-scrollbar-thumb {\n    background-color: #ff7676;\n  }\n\n  &::-webkit-scrollbar-track {\n    background: #fff;\n  }\n"]);return he=function(){return e},e}var Oe=Object(q.b)(Q.c.div)(he()),xe=Object(q.b)(Q.c.div)(fe()),ve=Object(q.b)(Q.c.div)(pe()),ye=Object(q.b)(Q.c.div)(ge()),we=Object(q.b)(Q.c.div)(je()),ke=Object(q.b)(Q.c.div)(me()),_e=Object(q.b)(Q.c.div)(be()),Se=Object(q.b)(Q.c.div)(le()),Ee=function(e){var n=e.pathId,t=Object(k.f)().push,r=Object(s.c)((function(e){return e.games})),i=r.details,o=r.gameScreenshot,u=function(e){switch(e){case"PlayStation 4":return ce;case"Xbox One":return ie;case"PC":return ae;case"Nintendo Switch":return re;case"iOS":return oe;default:return se}};return Object(c.jsx)(Oe,{className:"shadow",onClick:function(e){e.target.classList.contains("shadow")&&(document.body.style.overflow="auto",t("/"))},children:Object(c.jsxs)(xe,{layoutId:n,children:[Object(c.jsxs)(ve,{children:[Object(c.jsxs)("div",{className:"rating",children:[null!==i&&i.name&&Object(c.jsx)(Q.c.h3,{layoutId:"title ".concat(n),children:i.name}),null!==i&&i.rating>-1&&Object(c.jsxs)("p",{children:["Rating :"," ",Object(c.jsx)(de.a,{rating:i.rating,starRatedColor:"yellow",numberOfStars:5,name:"rating",starDimension:"28px",starSpacing:"5px"})]})]}),Object(c.jsx)(ye,{children:null!==i&&i.platforms&&Object(c.jsxs)(a.Fragment,{children:[Object(c.jsx)("h3",{children:"Platforms"}),Object(c.jsx)(we,{children:i.platforms.map((function(e){var n=e.platform;return Object(c.jsx)("img",{src:u(n.name),alt:n.name},n.id)}))})]})})]}),Object(c.jsx)(ke,{children:null!==i&&i.background_image&&Object(c.jsx)(Q.c.img,{layoutId:"image ".concat(n),src:V(i.background_image,1280),alt:i.background_image})}),Object(c.jsx)(_e,{children:null!==i&&i.description_raw&&Object(c.jsx)("p",{children:i.description_raw})}),Object(c.jsx)(Se,{children:null!==o&&o.map((function(e){var n=e.image,t=e.id;return Object(c.jsx)("img",{src:V(n,1280),alt:"".concat(n,"-").concat(t)},t)}))})]})})};function Ie(){var e=Object(_.a)(["\n  min-height: 80vh;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));\n  grid-column-gap: 3rem;\n  grid-row-gap: 5rem;\n"]);return Ie=function(){return e},e}function Ge(){var e=Object(_.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 0rem 5rem;\n  h2 {\n    padding: 5rem 0rem;\n  }\n"]);return Ge=function(){return e},e}var ze=Object(q.b)(Q.c.div)(Ge()),Ce=Object(q.b)(Q.c.div)(Ie()),Re=function(){var e=Object(s.b)(),n=Object(a.useState)(""),t=Object(S.a)(n,2),r=t[0],i=t[1],o=Object(k.g)().pathname.split("/")[2];Object(a.useEffect)((function(){var n;e((n="fb9e55efd46d4e0d987b6e0c05de44b2",function(){var e=Object(G.a)(I.a.mark((function e(t){var c,a,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(X()),e.next=4,C.a.get(K(n));case 4:return c=e.sent,e.next=7,C.a.get(J(n));case 7:return a=e.sent,e.next=10,C.a.get(N(n));case 10:r=e.sent,t({type:m,payload:{popular:c.data.results,newGames:a.data.results,upcoming:r.data.results}}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(n){return e.apply(this,arguments)}}()))}),[e]);var u=Object(s.c)((function(e){return e.games})),d=u.upcoming,l=u.newGames,b=u.popular,j=u.details,g=u.gameScreenshot,p=u.filtered,f=function(e){i(e)},h="".concat(o,"-").concat(r),O=d.map((function(e){return Object(c.jsx)(te,{name:e.name,released:e.released,id:e.id,image:e.background_image,type:"upcoming",onChangeGameType:f},e.id)})),x=b.map((function(e){return Object(c.jsx)(te,{name:e.name,released:e.released,id:e.id,image:e.background_image,type:"popular",onChangeGameType:f},e.id)})),v=l.map((function(e){return Object(c.jsx)(te,{name:e.name,released:e.released,id:e.id,image:e.background_image,type:"newGames",onChangeGameType:f},e.id)}));return Object(c.jsx)(ze,{variants:Z,initial:"hidden",animate:"show",children:Object(c.jsxs)(Q.b,{type:"crossfade",children:[Object(c.jsx)(Q.a,{children:o&&null!==j&&null!==g&&Object(c.jsx)(Ee,{pathId:h})}),null!==p&&p.length>0?Object(c.jsxs)(a.Fragment,{children:[Object(c.jsx)("h2",{children:"Filtered Games"}),Object(c.jsx)(Ce,{children:p.map((function(e){return Object(c.jsx)(te,{name:e.name,released:e.released,id:e.id,image:e.background_image,type:"filtered",onChangeGameType:f},e.id)}))})]}):Object(c.jsxs)(a.Fragment,{children:[Object(c.jsx)("h2",{children:"Upcoming Games"}),Object(c.jsx)(Ce,{children:d.length>0?O:Object(c.jsx)("h1",{children:"fetching data...."})}),Object(c.jsx)("h2",{children:"Popular Games"}),Object(c.jsx)(Ce,{children:b.length>0?x:Object(c.jsx)("h1",{children:"fetching data...."})}),Object(c.jsx)("h2",{children:"new Games"}),Object(c.jsx)(Ce,{children:l.length>0?v:Object(c.jsx)("h1",{children:"fetching data...."})})]})]})})},Ae=function(){return Object(c.jsx)(w.a,{children:Object(c.jsx)(k.c,{children:Object(c.jsx)(k.a,{path:["/game/:id","/"],component:Re})})})},Ye=t.p+"static/media/logo.9b6b8655.svg";function Te(){var e=Object(_.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 1rem;\n  cursor: pointer;\n  img {\n    width: 2rem;\n    height: 2rem;\n    object-fit: contain;\n  }\n"]);return Te=function(){return e},e}function De(){var e=Object(_.a)(["\n  padding: 3rem 5rem;\n  text-align: center;\n  input {\n    width: 30%;\n    font-size: 1.5rem;\n    padding: 0.5rem;\n    border: none;\n    margin-top: 1rem;\n    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);\n    outline: none;\n  }\n  button {\n    font-size: 1.5rem;\n    border: none;\n    padding: 0.5rem 2rem;\n    cursor: pointer;\n    background: #ff7676;\n    color: #fff;\n    outline: none;\n  }\n"]);return De=function(){return e},e}var Fe=Object(q.b)(Q.c.nav)(De()),Pe=Object(q.b)(Q.c.div)(Te()),Le=function(){var e=Object(s.b)(),n=Object(a.useState)(""),t=Object(S.a)(n,2),r=t[0],i=t[1],o=Object(a.useRef)(null);return Object(c.jsxs)(Fe,{variants:Z,initial:"hidden",animate:"show",children:[Object(c.jsxs)(Pe,{onClick:function(){return e({type:f})},children:[Object(c.jsx)("img",{src:Ye,alt:"logo "}),Object(c.jsx)("h1",{children:"Ignite"})]}),Object(c.jsxs)("form",{onSubmit:function(n){var t,c;n.preventDefault(),e((t=r,c="fb9e55efd46d4e0d987b6e0c05de44b2",function(){var e=Object(G.a)(I.a.mark((function e(n){var a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get(B(t,c));case 3:a=e.sent,n({type:p,payload:{filtered:a.data.results}}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}())),o.current.value="",i("")},className:"search",children:[Object(c.jsx)("input",{ref:o,type:"text",onChange:function(e){i(e.target.value)},value:r}),Object(c.jsx)("button",{children:"Search"})]})]})};function Me(){var e=Object(_.a)(['\n* {\n    margin : 0;\n    padding : 0;\n    box-sizing : border-box;\n}\n\nhtml {\n    &::-webkit-scrollbar {\n        width: 0.4rem;\n      };\n    &::-webkit-scrollbar-thumb {\n        background-color : darkgrey;\n    };\n    &::-webkit-scrollbar-track {\n        background: #fff;\n      };\n}\nbody {\n    font-family : "Montserrat", sans-serif;\n    width : 100%;\n}\nh2 {\n    font-size : 3rem;\n    font-family : "Abril Fatface", cursive;\n    font-weight : lighter;\n    color : #333;\n}\nh3 {\n    font-size : 1.3rem;\n    color : #333;\n    padding : 1.5rem 0rem;\n}\np {\n    font-size : 1.2rem;\n    line-height : 200%;\n    color : #696969;\n}\n\na {\n    text-decoration : none;\n    color : #333;\n}\nimg {\n    display : block;\n   \n}\n\ninput {\n    font-weight: bold;\n    font-family: "Montserrat", sans-serif;\n}\n']);return Me=function(){return e},e}var Ue=Object(q.a)(Me()),Ke=function(){return Object(c.jsxs)(a.Fragment,{children:[Object(c.jsx)(Ue,{}),Object(c.jsx)(Le,{}),Object(c.jsx)(Ae,{})]})};o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(s.a,{store:y,children:Object(c.jsx)(Ke,{})})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.2c16b427.chunk.js.map