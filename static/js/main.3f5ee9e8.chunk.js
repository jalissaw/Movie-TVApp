(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{35:function(e,t,c){},36:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),i=c(26),n=c.n(i),r=(c(35),c(36),c(13)),o=c(1);function l(){return Object(o.jsx)("nav",{className:"nav-bar",children:Object(o.jsxs)("ul",{className:"links",children:[Object(o.jsx)("li",{className:"link",children:Object(o.jsx)(r.b,{to:"/",children:Object(o.jsx)("i",{className:"fas fa-home"})})}),Object(o.jsx)("li",{className:"link",children:Object(o.jsx)(r.b,{to:"/movies",children:"Movies"})}),Object(o.jsx)("li",{className:"link",children:Object(o.jsx)(r.b,{to:"/tv",children:"TV"})})]})})}var j=function(){return Object(o.jsxs)("div",{className:"home-container",children:[Object(o.jsx)("div",{className:"countdown"}),Object(o.jsx)("h1",{className:"home",children:"Spectacle"}),Object(o.jsx)("h2",{className:"promo",children:"Take Control of Your Entertainment"})]})},d=c(7),b=function(e){var t=new AbortController,c=Object(a.useState)(null),s=Object(d.a)(c,2),i=s[0],n=s[1],r=Object(a.useState)(!0),o=Object(d.a)(r,2),l=o[0],j=o[1],b=Object(a.useState)(null),h=Object(d.a)(b,2),u=h[0],m=h[1];return Object(a.useEffect)((function(){var c=e.map((function(e){return fetch(e,{signal:t.signal},{type:"GET",dataType:"json"})}));return Promise.all(c).then((function(e){if(!e.map((function(e){return e.ok})))throw Error("The resource can not be displayed at this time");return Promise.all(e.map((function(e){return e.json()})))})).then((function(e){n(e),j(!1)})).catch((function(e){"AbortError"===e.name?console.log("fetch aborted"):(j(!1),m(e.message))})),function(){return t.abort()}}),[e]),{data:i,loading:l,isErr:u,setData:n}},h=c(19),u=(c(22),c(49)),m=c(44),O=c(45),p=c(46),f=c(47),x=c(50),g=c(48),v=c(29),w=s.a.createContext();function N(e){var t=e.children,c=Object(a.useState)([]),s=Object(d.a)(c,2),i=s[0],n=s[1],r={watchList:i,setwatchList:n,handleClick:function(e){var t=i.find((function(t){return t===e}));!function(){if(i){var t=i.filter((function(t){return t!==e}));n(t)}}(),t||n([].concat(Object(v.a)(i),[e]))}};return Object(o.jsx)("div",{children:Object(o.jsx)(w.Provider,{value:r,children:t})})}var S=s.a.createContext();function k(e){var t=e.children,c=Object(a.useState)(""),s=Object(d.a)(c,2),i={searchInput:s[0],setSearchInput:s[1]};return Object(o.jsx)("div",{children:Object(o.jsx)(S.Provider,{value:i,children:t})})}var C=function(e){var t=e.data,c=e.genre,s=e.setPoster,i=e.setTitle,n=e.setDescription,r=e.getYTVideo,l=Object(a.useContext)(w),j=l.watchList,d=l.handleClick,b=Object(a.useContext)(S).searchInput;return u.a.use([m.a,O.a,p.a,f.a]),Object(o.jsxs)("section",{className:"movies",children:[Object(o.jsxs)("h2",{style:{color:"white",marginLeft:"20px"},children:[c," "]}),t&&Object(o.jsx)(x.a,{spaceBetween:5,slidesPerView:2,width:600,pagination:{clickable:!0},scrollbar:{draggable:!0},breakpoints:{480:{slidesPerView:2}},children:t&&t.items.filter((function(e){return""===b?e:e.original_title.toLowerCase().includes(b.toLowerCase())?Object(o.jsx)("div",{className:"filtered",children:e}):void 0})).map((function(e){return Object(o.jsx)(g.a,{children:Object(o.jsxs)("div",{className:"movie",children:[Object(o.jsx)("img",{onMouseOver:function(){s("".concat("https://image.tmdb.org/t/p/original"+e.poster_path)),i(e.original_title),n(e.overview)},src:"https://image.tmdb.org/t/p/original"+e.poster_path,width:"250px",height:"300px",alt:"Promotional Poster For Movie"}),Object(o.jsx)("button",{className:"watchlist-btn",onClick:function(){return d(e.original_title)},children:j.includes(e.original_title)?Object(o.jsx)("i",{className:"fas fa-minus-circle"}):Object(o.jsx)("i",{className:"fas fa-plus-circle"})}),Object(o.jsx)("button",{className:"watch-trailer-btn",onClick:function(){return r(e.original_title)},children:"Watch Trailer"})]})},e.id)}))})]})},y=function(){var e=b(["https://api.themoviedb.org/3/list/7077601?api_key=".concat("5a96fcb7e5d646eb637f9e8c274df666","&language=en-US"),"https://api.themoviedb.org/3/list/7078334?api_key=".concat("5a96fcb7e5d646eb637f9e8c274df666","&language=en-US"),"https://api.themoviedb.org/3/list/7078244?api_key=".concat("5a96fcb7e5d646eb637f9e8c274df666","&language=en-US")]),t=e.data,c=e.loading,s=e.isErr,i=Object(a.useState)("giphy (1).gif"),n=Object(d.a)(i,2),r=n[0],l=n[1],j=Object(a.useState)(""),u=Object(d.a)(j,2),m=u[0],O=u[1],p=Object(a.useState)(""),f=Object(d.a)(p,2),x=f[0],g=f[1],v=Object(a.useState)(""),w=Object(d.a)(v,2),N=w[0],S=w[1],k=Object(a.useState)(!1),y=Object(d.a)(k,2),_=y[0],P=y[1],L=Object(a.useState)(null),T=Object(d.a)(L,2),I=T[0],E=T[1],M=Object(a.useState)(null),V=Object(d.a)(M,2),A=V[0],D=V[1],F=Object(a.useState)(["Action","Comedy","Award-Winning"]),B=Object(d.a)(F,2),U=B[0],J=(B[1],function(e){fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&q=".concat(e,"%20trailer&key=").concat("AIzaSyBK6c4Jh0AQ8WMpnTQfNDJghjiWJc7739s")).then((function(e){if(!e.ok)throw Error("The resource can not be displayed at this time");return e.json()})).then((function(e){E("https://www.youtube.com/embed/".concat(e.items[0].id.videoId)),P(!0)})).catch((function(e){D(e.message)}))});Object(a.useEffect)((function(){t&&function(){var e=x.split(".");e[0].length<=15?S(e[0]+e[1]+e[2]+e[3]):S(e[0])}()}),[x]);var W={backgroundImage:"url(".concat(r,")")};return Object(o.jsxs)("div",{className:"show-container",children:[s&&Object(o.jsx)("div",{className:"error",children:s}),c&&Object(o.jsx)(h.a,{animation:"border",variant:"secondary",className:"spinner",children:Object(o.jsx)("span",{children:"Loading..."})}),Object(o.jsxs)("div",{className:"hero",children:[Object(o.jsx)("div",{className:"show-hero",style:W}),Object(o.jsxs)("div",{className:"contains-descriptions",children:[Object(o.jsx)("h2",{className:"hero-show-title show-movie",children:m}),Object(o.jsx)("p",{className:"hero-show-description show-movie",children:void 0===N?"":N})]})]}),Object(o.jsxs)("div",{className:"show-modal",children:[A&&Object(o.jsx)("div",{className:"yt-error",children:A}),_&&Object(o.jsx)("div",{className:"modal",onClick:function(){P(!1)},children:Object(o.jsx)("iframe",{className:"video",disablekb:0,controls:1,src:I})})]}),t&&Object(o.jsx)(C,{data:t[0],setPoster:l,setTitle:O,setDescription:g,genre:U[0],getYTVideo:J}),t&&Object(o.jsx)(C,{data:t[1],setPoster:l,setTitle:O,setDescription:g,genre:U[1],getYTVideo:J}),t&&Object(o.jsx)(C,{data:t[2],setPoster:l,setTitle:O,setDescription:g,genre:U[2],getYTVideo:J})]})},_=function(){var e=b(["https://api.themoviedb.org/3/list/7079309?api_key=".concat("5a96fcb7e5d646eb637f9e8c274df666","&language=en-US"),"https://api.themoviedb.org/3/list/7079316?api_key=".concat("5a96fcb7e5d646eb637f9e8c274df666","&language=en-US"),"https://api.themoviedb.org/3/list/7079317?api_key=".concat("5a96fcb7e5d646eb637f9e8c274df666","&language=en-US")]),t=e.data,c=e.loading,s=e.isErr,i=Object(a.useState)("giphy (1).gif"),n=Object(d.a)(i,2),r=n[0],l=n[1],j=Object(a.useState)(""),v=Object(d.a)(j,2),N=v[0],k=v[1],C=Object(a.useState)(""),y=Object(d.a)(C,2),_=y[0],P=y[1],L=Object(a.useContext)(w),T=L.watchList,I=L.handleClick,E=Object(a.useContext)(S).searchInput,M=Object(a.useState)(""),V=Object(d.a)(M,2),A=V[0],D=V[1],F={backgroundImage:"url(".concat(r,")")};u.a.use([m.a,O.a,p.a,f.a]);return Object(a.useEffect)((function(){t&&function(){var e=_.split(".");e[0].length<=15?D(e[0]+e[1]+e[2]+e[3]):D(e[0])}()}),[_]),Object(o.jsxs)("div",{className:"show-container",children:[s&&Object(o.jsx)("div",{className:"error",children:s}),c&&Object(o.jsx)(h.a,{animation:"border",variant:"secondary",className:"spinner",children:Object(o.jsx)("span",{children:"Loading..."})}),Object(o.jsxs)("div",{className:"hero",children:[Object(o.jsx)("div",{className:"show-hero",style:F}),Object(o.jsxs)("div",{className:"contains-descriptions",children:[Object(o.jsx)("h2",{className:"hero-show-title show-movie",children:N}),Object(o.jsx)("p",{className:"hero-show-description show-movie",children:A})]})]}),Object(o.jsxs)("section",{className:"movies",children:[Object(o.jsx)("h2",{style:{color:"white",marginLeft:"20px"},children:"Cartoons "}),t&&Object(o.jsx)(x.a,{spaceBetween:5,slidesPerView:2,width:600,pagination:{clickable:!0},scrollbar:{draggable:!0},children:t&&t[0].items.filter((function(e){return""===E?e:e.original_name.toLowerCase().includes(E.toLowerCase())?Object(o.jsx)("div",{className:"filtered",children:e}):void 0})).map((function(e){return Object(o.jsx)(g.a,{children:Object(o.jsxs)("div",{className:"movie",children:[Object(o.jsx)("img",{onMouseOver:function(){l("".concat("https://image.tmdb.org/t/p/original"+e.poster_path)),k(e.original_name),P(e.overview)},src:"https://image.tmdb.org/t/p/original"+e.poster_path,width:"250",height:"300",alt:"Promotional Poster For Movie"}),Object(o.jsx)("button",{className:"watchlist-btn",onClick:function(){return I(e.original_name)},children:T.includes(e.original_name)?Object(o.jsx)("i",{className:"fas fa-minus-circle"}):Object(o.jsx)("i",{className:"fas fa-plus-circle"})})]})},e.id)}))})]}),Object(o.jsxs)("section",{className:"movies",children:[Object(o.jsx)("h2",{style:{color:"white",marginLeft:"20px"},children:"90s Sitcoms "}),t&&Object(o.jsx)(x.a,{spaceBetween:5,slidesPerView:2,width:600,pagination:{clickable:!0},scrollbar:{draggable:!0},children:t&&t[1].items.filter((function(e){return""===E?e:e.original_name.toLowerCase().includes(E.toLowerCase())?Object(o.jsx)("div",{className:"filtered",children:e}):void 0})).map((function(e){return Object(o.jsx)(g.a,{children:Object(o.jsxs)("div",{className:"movie",children:[Object(o.jsx)("img",{onMouseOver:function(){l("".concat("https://image.tmdb.org/t/p/original"+e.poster_path)),k(e.original_name),P(e.overview)},src:"https://image.tmdb.org/t/p/original"+e.poster_path,width:"250",height:"300",alt:"Promotional Poster For Movie"}),Object(o.jsx)("button",{className:"watchlist-btn",onClick:function(){return I(e.original_name)},children:T.includes(e.original_name)?Object(o.jsx)("i",{className:"fas fa-minus-circle"}):Object(o.jsx)("i",{className:"fas fa-plus-circle"})})]})},e.id)}))})]}),Object(o.jsxs)("section",{className:"movies",children:[Object(o.jsx)("h2",{style:{color:"white",marginLeft:"20px"},children:"Popular Shows "}),t&&Object(o.jsx)(x.a,{spaceBetween:5,slidesPerView:2,width:600,pagination:{clickable:!0},scrollbar:{draggable:!0},children:t&&t[2].items.filter((function(e){return""===E?e:e.original_name.toLowerCase().includes(E.toLowerCase())?Object(o.jsx)("div",{className:"filtered",children:e}):void 0})).map((function(e){return Object(o.jsx)(g.a,{children:Object(o.jsxs)("div",{className:"movie",children:[Object(o.jsx)("img",{onMouseOver:function(){l("".concat("https://image.tmdb.org/t/p/original"+e.poster_path)),k(e.original_name),P(e.overview)},src:"https://image.tmdb.org/t/p/original"+e.poster_path,width:"250",height:"300",alt:"Promotional Poster For Movie"}),Object(o.jsx)("button",{className:"watchlist-btn",onClick:function(){return I(e.original_name)},children:T.includes(e.original_name)?Object(o.jsx)("i",{className:"fas fa-minus-circle"}):Object(o.jsx)("i",{className:"fas fa-plus-circle"})})]})},e.id)}))})]})]})};var P=function(){var e=Object(a.useContext)(w).watchList;return Object(o.jsx)("div",{className:"watchlist-container",children:Object(o.jsxs)("div",{className:"watchlist",children:[e.length>=1?Object(o.jsx)("strong",{style:{fontSize:"1.4rem"},children:" WATCHLIST:"}):"",e.map((function(e){return Object(o.jsxs)("span",{className:"watchlist-item",children:[" ",e]},e)}))]})})},L=c(8),T=function(){var e=Object(L.f)(),t=Object(a.useContext)(S),c=t.searchInput,s=t.setSearchInput,i=Object(a.useState)(!1),n=Object(d.a)(i,2),r=n[0],l=n[1];return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(o.jsx)("i",{className:"fas fa-search",style:{display:"/"===e.pathname?"none":"block"},onClick:function(){return l((function(e){return!e}))}}),Object(o.jsx)("input",{type:"text",className:"search-input",name:"search-movies",value:c,placeholder:"Search...",style:{width:r?"175px":"0px"},onChange:function(e){return s(e.target.value)}})]})})};var I=function(){return Object(o.jsx)(r.a,{children:Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(N,{children:[Object(o.jsx)(l,{}),Object(o.jsxs)(k,{children:[Object(o.jsx)(T,{}),Object(o.jsxs)(L.c,{children:[Object(o.jsx)(L.a,{exact:!0,path:"/",children:Object(o.jsx)(j,{})}),Object(o.jsx)(L.a,{exact:!0,path:"/movies",children:Object(o.jsx)(y,{})}),Object(o.jsx)(L.a,{exact:!0,path:"/tv",children:Object(o.jsx)(_,{})})]})]}),Object(o.jsx)(P,{})]})})})},E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,51)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,n=t.getTTFB;c(e),a(e),s(e),i(e),n(e)}))};n.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(I,{})}),document.getElementById("root")),E()}},[[43,1,2]]]);
//# sourceMappingURL=main.3f5ee9e8.chunk.js.map