import{d as c,b as r,o as i,c as p,A as d,S as l,_ as f,s as g,e as v,a as y,y as b,u as h,a3 as o,K as u,a4 as A,h as C,l as w,a5 as x,a6 as V,a7 as E,a8 as k,a9 as P,aa as D,ab as R,ac as $,ad as S,ae as T,af as I,ag as L,H as j}from"./chunks/framework.ca20526c.js";import{_ as B,t as _}from"./chunks/theme.d9bdee06.js";const O={key:0,class:"visitor",src:"https://visitor-badge.laobi.icu/badge?page_id=hansking98.notes",onerror:"this.style.display='none'"},F=c({__name:"Visitor",setup(e){const t=l("DEV");return(a,n)=>r(t)?d("",!0):(i(),p("img",O))}});const N=f(F,[["__scopeId","data-v-dc67a6b0"]]),H={class:"copyright"},W=["src"],G=c({__name:"Copyright",setup(e){const t=l("DEV"),a=g(),n=v(()=>a.path.replace("/hans-notes",""));return(X,Y)=>(i(),p("div",H,[r(t)?d("",!0):(i(),p("img",{key:0,class:"visitor",src:`https://visitor-badge.laobi.icu/badge?page_id=hansking98.notes.${r(n)}`,title:"当前页面累计访问数",onerror:"this.style.display='none'"},null,8,W)),y(" Copyright © 2019-present hansking ")]))}});const K=f(G,[["__scopeId","data-v-10460483"]]),M=c({__name:"AsideSponsors",setup(e){const t=[];return(a,n)=>(i(),b(r(B),{data:t}))}});typeof window<"u"&&(window.navigator&&navigator.serviceWorker&&navigator.serviceWorker.getRegistrations().then(function(e){for(let t of e)t.unregister()}),"caches"in window&&caches.keys().then(function(e){return Promise.all(e.map(function(t){return caches.delete(t)}))}));const U={extends:_,Layout:()=>{var a;const e={},{frontmatter:t}=h();return(a=t.value)!=null&&a.layoutClass&&(e.class=t.value.layoutClass),o(_.Layout,e,{"nav-bar-title-after":()=>o(N),"doc-after":()=>o(K),"aside-bottom":()=>o(M)})},enhanceApp({app:e}){e.provide("DEV",!1)}};function m(e){if(e.extends){const t=m(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const s=m(U),q=c({name:"VitePressApp",setup(){const{site:e}=h();return C(()=>{w(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),x(),V(),E(),s.setup&&s.setup(),()=>o(s.Layout)}});async function z(){const e=Q(),t=J();t.provide(k,e);const a=P(e.route);return t.provide(D,a),t.component("Content",R),t.component("ClientOnly",$),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:t,router:e,siteData:S}),{app:t,router:e,data:a}}function J(){return T(q)}function Q(){let e=u,t;return I(a=>{let n=L(a);return e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),u&&(e=!1),j(()=>import(n),[])},s.NotFound)}u&&z().then(({app:e,router:t,data:a})=>{t.go().then(()=>{A(t.route,a.site),e.mount("#app")})});export{z as createApp};