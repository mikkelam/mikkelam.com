var nt=Object.defineProperty,at=Object.defineProperties;var ot=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var W=(i,t,e)=>t in i?nt(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,R=(i,t)=>{for(var e in t||(t={}))z.call(t,e)&&W(i,e,t[e]);if(V)for(var e of V(t))G.call(t,e)&&W(i,e,t[e]);return i},H=(i,t)=>at(i,ot(t));var X=(i,t)=>{var e={};for(var s in i)z.call(i,s)&&t.indexOf(s)<0&&(e[s]=i[s]);if(i!=null&&V)for(var s of V(i))t.indexOf(s)<0&&G.call(i,s)&&(e[s]=i[s]);return e};import{S as lt,i as ct,s as ut,e as ft,c as ht,a as dt,d as E,b as C,f as $,t as _t,g as pt,h as gt,j as q,k as mt,l as b,m as D,n as wt,o as U,p as B,q as K,r as T,u as y,v as A,w as I,x as m,y as bt,z as yt,A as vt,B as J,C as M}from"./chunks/vendor-664ad166.js";import{_ as L}from"./chunks/preload-helper-ec9aa979.js";import{i as Et}from"./chunks/singletons-12a22614.js";function F(i){let t,e,s;const r=[i[2]||{}];var a=i[0][1];function n(o){let l={$$slots:{default:[kt]},$$scope:{ctx:o}};for(let c=0;c<r.length;c+=1)l=J(l,r[c]);return{props:l}}return a&&(t=new a(n(i))),{c(){t&&q(t.$$.fragment),e=b()},l(o){t&&D(t.$$.fragment,o),e=b()},m(o,l){t&&U(t,o,l),$(o,e,l),s=!0},p(o,l){const c=l&4?B(r,[K(o[2]||{})]):{};if(l&521&&(c.$$scope={dirty:l,ctx:o}),a!==(a=o[0][1])){if(t){T();const u=t;y(u.$$.fragment,1,0,()=>{A(u,1)}),I()}a?(t=new a(n(o)),q(t.$$.fragment),m(t.$$.fragment,1),U(t,e.parentNode,e)):t=null}else a&&t.$set(c)},i(o){s||(t&&m(t.$$.fragment,o),s=!0)},o(o){t&&y(t.$$.fragment,o),s=!1},d(o){o&&E(e),t&&A(t,o)}}}function Q(i){let t,e,s;const r=[i[3]||{}];var a=i[0][2];function n(o){let l={};for(let c=0;c<r.length;c+=1)l=J(l,r[c]);return{props:l}}return a&&(t=new a(n())),{c(){t&&q(t.$$.fragment),e=b()},l(o){t&&D(t.$$.fragment,o),e=b()},m(o,l){t&&U(t,o,l),$(o,e,l),s=!0},p(o,l){const c=l&8?B(r,[K(o[3]||{})]):{};if(a!==(a=o[0][2])){if(t){T();const u=t;y(u.$$.fragment,1,0,()=>{A(u,1)}),I()}a?(t=new a(n()),q(t.$$.fragment),m(t.$$.fragment,1),U(t,e.parentNode,e)):t=null}else a&&t.$set(c)},i(o){s||(t&&m(t.$$.fragment,o),s=!0)},o(o){t&&y(t.$$.fragment,o),s=!1},d(o){o&&E(e),t&&A(t,o)}}}function kt(i){let t,e,s=i[0][2]&&Q(i);return{c(){s&&s.c(),t=b()},l(r){s&&s.l(r),t=b()},m(r,a){s&&s.m(r,a),$(r,t,a),e=!0},p(r,a){r[0][2]?s?(s.p(r,a),a&1&&m(s,1)):(s=Q(r),s.c(),m(s,1),s.m(t.parentNode,t)):s&&(T(),y(s,1,1,()=>{s=null}),I())},i(r){e||(m(s),e=!0)},o(r){y(s),e=!1},d(r){s&&s.d(r),r&&E(t)}}}function Rt(i){let t,e,s=i[0][1]&&F(i);return{c(){s&&s.c(),t=b()},l(r){s&&s.l(r),t=b()},m(r,a){s&&s.m(r,a),$(r,t,a),e=!0},p(r,a){r[0][1]?s?(s.p(r,a),a&1&&m(s,1)):(s=F(r),s.c(),m(s,1),s.m(t.parentNode,t)):s&&(T(),y(s,1,1,()=>{s=null}),I())},i(r){e||(m(s),e=!0)},o(r){y(s),e=!1},d(r){s&&s.d(r),r&&E(t)}}}function Z(i){let t,e=i[5]&&tt(i);return{c(){t=ft("div"),e&&e.c(),this.h()},l(s){t=ht(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,class:!0});var r=dt(t);e&&e.l(r),r.forEach(E),this.h()},h(){C(t,"id","svelte-announcer"),C(t,"aria-live","assertive"),C(t,"aria-atomic","true"),C(t,"class","svelte-u7bl1d")},m(s,r){$(s,t,r),e&&e.m(t,null)},p(s,r){s[5]?e?e.p(s,r):(e=tt(s),e.c(),e.m(t,null)):e&&(e.d(1),e=null)},d(s){s&&E(t),e&&e.d()}}}function tt(i){let t;return{c(){t=_t(i[6])},l(e){t=pt(e,i[6])},m(e,s){$(e,t,s)},p(e,s){s&64&&gt(t,e[6])},d(e){e&&E(t)}}}function $t(i){let t,e,s,r;const a=[i[1]||{}];var n=i[0][0];function o(c){let u={$$slots:{default:[Rt]},$$scope:{ctx:c}};for(let h=0;h<a.length;h+=1)u=J(u,a[h]);return{props:u}}n&&(t=new n(o(i)));let l=i[4]&&Z(i);return{c(){t&&q(t.$$.fragment),e=mt(),l&&l.c(),s=b()},l(c){t&&D(t.$$.fragment,c),e=wt(c),l&&l.l(c),s=b()},m(c,u){t&&U(t,c,u),$(c,e,u),l&&l.m(c,u),$(c,s,u),r=!0},p(c,[u]){const h=u&2?B(a,[K(c[1]||{})]):{};if(u&525&&(h.$$scope={dirty:u,ctx:c}),n!==(n=c[0][0])){if(t){T();const f=t;y(f.$$.fragment,1,0,()=>{A(f,1)}),I()}n?(t=new n(o(c)),q(t.$$.fragment),m(t.$$.fragment,1),U(t,e.parentNode,e)):t=null}else n&&t.$set(h);c[4]?l?l.p(c,u):(l=Z(c),l.c(),l.m(s.parentNode,s)):l&&(l.d(1),l=null)},i(c){r||(t&&m(t.$$.fragment,c),r=!0)},o(c){t&&y(t.$$.fragment,c),r=!1},d(c){t&&A(t,c),c&&E(e),l&&l.d(c),c&&E(s)}}}function Lt(i,t,e){let{stores:s}=t,{page:r}=t,{components:a}=t,{props_0:n=null}=t,{props_1:o=null}=t,{props_2:l=null}=t;bt("__svelte__",s),yt(s.page.notify);let c=!1,u=!1,h=null;return vt(()=>{const f=s.page.subscribe(()=>{c&&(e(5,u=!0),e(6,h=document.title||"untitled page"))});return e(4,c=!0),f}),i.$$set=f=>{"stores"in f&&e(7,s=f.stores),"page"in f&&e(8,r=f.page),"components"in f&&e(0,a=f.components),"props_0"in f&&e(1,n=f.props_0),"props_1"in f&&e(2,o=f.props_1),"props_2"in f&&e(3,l=f.props_2)},i.$$.update=()=>{i.$$.dirty&384&&s.page.set(r)},[a,n,o,l,c,u,h,s,r]}class St extends lt{constructor(t){super();ct(this,t,Lt,$t,ut,{stores:7,page:8,components:0,props_0:1,props_1:2,props_2:3})}}const _=[()=>L(()=>import("./pages/__layout.svelte-8a6b20c5.js"),["pages/__layout.svelte-8a6b20c5.js","assets/pages/__layout.svelte-1492c422.css","chunks/preload-helper-ec9aa979.js","chunks/vendor-664ad166.js","chunks/Content-81cbfc59.js"]),()=>L(()=>import("./error.svelte-618c8317.js"),["error.svelte-618c8317.js","chunks/vendor-664ad166.js"]),()=>L(()=>import("./pages/index.svelte-8c72c96a.js"),["pages/index.svelte-8c72c96a.js","chunks/vendor-664ad166.js","chunks/singletons-12a22614.js"]),()=>L(()=>import("./pages/about/index.svelte-4a44a4ed.js"),["pages/about/index.svelte-4a44a4ed.js","chunks/vendor-664ad166.js","chunks/Content-81cbfc59.js"]),()=>L(()=>import("./pages/blog/index.svelte-cde978fb.js"),["pages/blog/index.svelte-cde978fb.js","assets/pages/blog/index.svelte-c15c8459.css","chunks/vendor-664ad166.js","chunks/Content-81cbfc59.js"]),()=>L(()=>import("./pages/blog/posts/consumer-producer.svx-47e1de54.js"),["pages/blog/posts/consumer-producer.svx-47e1de54.js","chunks/vendor-664ad166.js","chunks/PostLayout-e6903358.js","assets/PostLayout-ad81e4bd.css","chunks/Content-81cbfc59.js"]),()=>L(()=>import("./pages/blog/posts/initial_commit.svx-c0a262cc.js"),["pages/blog/posts/initial_commit.svx-c0a262cc.js","chunks/vendor-664ad166.js","chunks/PostLayout-e6903358.js","assets/PostLayout-ad81e4bd.css","chunks/Content-81cbfc59.js"])],qt=[[/^\/$/,[_[0],_[2]],[_[1]]],[/^\/about\/?$/,[_[0],_[3]],[_[1]]],[/^\/blog\/?$/,[_[0],_[4]],[_[1]]],,[/^\/blog\/posts\/consumer-producer\/?$/,[_[0],_[5]],[_[1]]],[/^\/blog\/posts\/initial_commit\/?$/,[_[0],_[6]],[_[1]]]],Ut=[_[0](),_[1]()];function At(i){let t=i.baseURI;if(!t){const e=i.getElementsByTagName("base");t=e.length?e[0].href:i.URL}return t}let et="";function jt(i){et=i.base,i.assets}function Y(){return{x:pageXOffset,y:pageYOffset}}function st(i){for(;i&&i.nodeName.toUpperCase()!=="A";)i=i.parentNode;return i}function rt(i){return i instanceof SVGAElement?new URL(i.href.baseVal,document.baseURI):new URL(i.href)}class Ot{constructor({base:t,routes:e,trailing_slash:s,renderer:r}){this.base=t,this.routes=e,this.trailing_slash=s,this.navigating=0,this.renderer=r,r.router=this,this.enabled=!0,document.body.setAttribute("tabindex","-1"),history.replaceState(history.state||{},"",location.href)}init_listeners(){"scrollRestoration"in history&&(history.scrollRestoration="manual"),addEventListener("beforeunload",()=>{history.scrollRestoration="auto"}),addEventListener("load",()=>{history.scrollRestoration="manual"});let t;addEventListener("scroll",()=>{clearTimeout(t),t=setTimeout(()=>{const a=H(R({},history.state||{}),{"sveltekit:scroll":Y()});history.replaceState(a,document.title,window.location.href)},50)});const e=a=>{const n=st(a.target);n&&n.href&&n.hasAttribute("sveltekit:prefetch")&&this.prefetch(rt(n))};let s;const r=a=>{clearTimeout(s),s=setTimeout(()=>{e(a)},20)};addEventListener("touchstart",e),addEventListener("mousemove",r),addEventListener("click",a=>{if(!this.enabled||a.button||a.which!==1||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||a.defaultPrevented)return;const n=st(a.target);if(!n||!n.href)return;const o=rt(n),l=o.toString();if(l===location.href){location.hash||a.preventDefault();return}const c=(n.getAttribute("rel")||"").split(/\s+/);if(n.hasAttribute("download")||c&&c.includes("external")||(n instanceof SVGAElement?n.target.baseVal:n.target)||!this.owns(o))return;const u=n.hasAttribute("sveltekit:noscroll"),h=l.indexOf("#"),f=location.href.indexOf("#"),k=h>=0?l.substring(0,h):l,v=f>=0?location.href.substring(0,f):location.href;history.pushState({},"",o.href),k===v&&window.dispatchEvent(new HashChangeEvent("hashchange")),this._navigate(o,u?Y():null,!1,[],o.hash),a.preventDefault()}),addEventListener("popstate",a=>{if(a.state&&this.enabled){const n=new URL(location.href);this._navigate(n,a.state["sveltekit:scroll"],!1,[])}})}owns(t){return t.origin===location.origin&&t.pathname.startsWith(this.base)}parse(t){if(this.owns(t)){const e=t.pathname.slice(this.base.length)||"/",s=decodeURI(e),r=this.routes.filter(([o])=>o.test(s)),a=new URLSearchParams(t.search);return{id:`${e}?${a}`,routes:r,path:e,decoded_path:s,query:a}}}async goto(t,{noscroll:e=!1,replaceState:s=!1,keepfocus:r=!1,state:a={}}={},n){const o=new URL(t,At(document));return this.enabled&&this.owns(o)?(history[s?"replaceState":"pushState"](a,"",t),this._navigate(o,e?Y():null,r,n,o.hash)):(location.href=o.href,new Promise(()=>{}))}enable(){this.enabled=!0}disable(){this.enabled=!1}async prefetch(t){const e=this.parse(t);if(!e)throw new Error("Attempted to prefetch a URL that does not belong to this app");return this.renderer.load(e)}async _navigate(t,e,s,r,a){const n=this.parse(t);if(!n)throw new Error("Attempted to navigate to a URL that does not belong to this app");if(this.navigating||dispatchEvent(new CustomEvent("sveltekit:navigation-start")),this.navigating++,n.path!=="/"){const o=n.path.endsWith("/");(o&&this.trailing_slash==="never"||!o&&this.trailing_slash==="always"&&!(n.path.split("/").pop()||"").includes("."))&&(n.path=o?n.path.slice(0,-1):n.path+"/",history.replaceState({},"",`${this.base}${n.path}${location.search}`))}await this.renderer.handle_navigation(n,r,!1,{hash:a,scroll:e,keepfocus:s}),this.navigating--,this.navigating||dispatchEvent(new CustomEvent("sveltekit:navigation-end"))}}function it(i){return i instanceof Error||i&&i.name&&i.message?i:new Error(JSON.stringify(i))}function Tt(i){let t=5381,e=i.length;if(typeof i=="string")for(;e;)t=t*33^i.charCodeAt(--e);else for(;e;)t=t*33^i[--e];return(t>>>0).toString(36)}function It(i){const t=i.status&&i.status>=400&&i.status<=599&&!i.redirect;if(i.error||t){const e=i.status;if(!i.error&&t)return{status:e||500,error:new Error};const s=typeof i.error=="string"?new Error(i.error):i.error;return s instanceof Error?!e||e<400||e>599?(console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500'),{status:500,error:s}):{status:e,error:s}:{status:500,error:new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof s}"`)}}if(i.redirect){if(!i.status||Math.floor(i.status/100)!==3)return{status:500,error:new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')};if(typeof i.redirect!="string")return{status:500,error:new Error('"redirect" property returned from load() must be a string')}}if(i.context)throw new Error('You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.');return i}function Pt(i){const t=M(i);let e=!0;function s(){e=!0,t.update(n=>n)}function r(n){e=!1,t.set(n)}function a(n){let o;return t.subscribe(l=>{(o===void 0||e&&l!==o)&&n(o=l)})}return{notify:s,set:r,subscribe:a}}function Nt(i,t){const e=typeof i=="string"?i:i.url;let s=`script[data-type="svelte-data"][data-url=${JSON.stringify(e)}]`;t&&typeof t.body=="string"&&(s+=`[data-body="${Tt(t.body)}"]`);const r=document.querySelector(s);if(r&&r.textContent){const a=JSON.parse(r.textContent),{body:n}=a,o=X(a,["body"]);return Promise.resolve(new Response(n,o))}return fetch(i,t)}class Vt{constructor({Root:t,fallback:e,target:s,session:r,host:a}){this.Root=t,this.fallback=e,this.host=a,this.router,this.target=s,this.started=!1,this.session_id=1,this.invalid=new Set,this.invalidating=null,this.current={page:null,session_id:0,branch:[]},this.cache=new Map,this.loading={id:null,promise:null},this.stores={page:Pt({}),navigating:M(null),session:M(r)},this.$session=null,this.root=null;let n=!1;this.stores.session.subscribe(async o=>{if(this.$session=o,!n||!this.router)return;this.session_id+=1;const l=this.router.parse(new URL(location.href));l&&this.update(l,[],!0)}),n=!0}async start({status:t,error:e,nodes:s,page:r}){const a=[];let n={},o,l;try{for(let c=0;c<s.length;c+=1){const u=c===s.length-1,h=await this._load_node({module:await s[c],page:r,stuff:n,status:u?t:void 0,error:u?e:void 0});if(a.push(h),h&&h.loaded)if(h.loaded.error){if(e)throw h.loaded.error;l={status:h.loaded.status,error:h.loaded.error,path:r.path,query:r.query}}else h.loaded.stuff&&(n=R(R({},n),h.loaded.stuff))}o=l?await this._load_error(l):await this._get_navigation_result_from_branch({page:r,branch:a})}catch(c){if(e)throw c;o=await this._load_error({status:500,error:it(c),path:r.path,query:r.query})}if(o.redirect){location.href=new URL(o.redirect,location.href).href;return}this._init(o)}async handle_navigation(t,e,s,r){this.started&&this.stores.navigating.set({from:{path:this.current.page.path,query:this.current.page.query},to:{path:t.path,query:t.query}}),await this.update(t,e,s,r)}async update(t,e,s,r){const a=this.token={};let n=await this._get_navigation_result(t,s);if(a!==this.token)return;if(this.invalid.clear(),n.redirect)if(e.length>10||e.includes(t.path))n=await this._load_error({status:500,error:new Error("Redirect loop"),path:t.path,query:t.query});else{this.router?this.router.goto(n.redirect,{replaceState:!0},[...e,t.path]):location.href=new URL(n.redirect,location.href).href;return}if(n.reload?location.reload():this.started?(this.current=n.state,this.root.$set(n.props),this.stores.navigating.set(null)):this._init(n),(r==null?void 0:r.keepfocus)||document.body.focus(),await 0,pageYOffset===0&&r){const{hash:l,scroll:c}=r,u=l&&document.getElementById(l.slice(1));c?scrollTo(c.x,c.y):u?u.scrollIntoView():scrollTo(0,0)}if(this.loading.promise=null,this.loading.id=null,!this.router)return;const o=n.state.branch[n.state.branch.length-1];o&&o.module.router===!1?this.router.disable():this.router.enable()}load(t){return this.loading.promise=this._get_navigation_result(t,!1),this.loading.id=t.id,this.loading.promise}invalidate(t){return this.invalid.add(t),this.invalidating||(this.invalidating=Promise.resolve().then(async()=>{const e=this.router&&this.router.parse(new URL(location.href));e&&await this.update(e,[],!0),this.invalidating=null})),this.invalidating}_init(t){this.current=t.state;const e=document.querySelector("style[data-svelte]");e&&e.remove(),this.root=new this.Root({target:this.target,props:R({stores:this.stores},t.props),hydrate:!0}),this.started=!0}async _get_navigation_result(t,e){if(this.loading.id===t.id&&this.loading.promise)return this.loading.promise;for(let s=0;s<t.routes.length;s+=1){const r=t.routes[s];let a=s+1;for(;a<t.routes.length;){const o=t.routes[a];if(o[0].toString()===r[0].toString())o[1].forEach(l=>l()),a+=1;else break}const n=await this._load({route:r,info:t},e);if(n)return n}return await this._load_error({status:404,error:new Error(`Not found: ${t.path}`),path:t.path,query:t.query})}async _get_navigation_result_from_branch({page:t,branch:e}){const s=e.filter(Boolean),r=s.find(l=>l.loaded&&l.loaded.redirect),a={redirect:r&&r.loaded?r.loaded.redirect:void 0,state:{page:t,branch:e,session_id:this.session_id},props:{components:s.map(l=>l.module.default)}};for(let l=0;l<s.length;l+=1){const c=s[l].loaded;a.props[`props_${l}`]=c?await c.props:null}(!this.current.page||t.path!==this.current.page.path||t.query.toString()!==this.current.page.query.toString())&&(a.props.page=t);const n=s[s.length-1],o=n.loaded&&n.loaded.maxage;if(o){const l=`${t.path}?${t.query}`;let c=!1;const u=()=>{this.cache.get(l)===a&&this.cache.delete(l),f(),clearTimeout(h)},h=setTimeout(u,o*1e3),f=this.stores.session.subscribe(()=>{c&&u()});c=!0,this.cache.set(l,a)}return a}async _load_node({status:t,error:e,module:s,page:r,stuff:a}){const n={module:s,uses:{params:new Set,path:!1,query:!1,session:!1,stuff:!1,dependencies:[]},loaded:null,stuff:a},o={};for(const c in r.params)Object.defineProperty(o,c,{get(){return n.uses.params.add(c),r.params[c]},enumerable:!0});const l=this.$session;if(s.load){const{started:c}=this,u={page:{host:r.host,params:o,get path(){return n.uses.path=!0,r.path},get query(){return n.uses.query=!0,r.query}},get session(){return n.uses.session=!0,l},get stuff(){return n.uses.stuff=!0,R({},a)},fetch(f,k){const v=typeof f=="string"?f:f.url,{href:j}=new URL(v,new URL(r.path,document.baseURI));return n.uses.dependencies.push(j),c?fetch(f,k):Nt(f,k)}};e&&(u.status=t,u.error=e);const h=await s.load.call(null,u);if(!h)return;n.loaded=It(h),n.loaded.stuff&&(n.stuff=n.loaded.stuff)}return n}async _load({route:t,info:{path:e,decoded_path:s,query:r}},a){const n=`${s}?${r}`;if(!a){const d=this.cache.get(n);if(d)return d}const[o,l,c,u]=t,h=u?u(o.exec(s)):{},f=this.current.page&&{path:e!==this.current.page.path,params:Object.keys(h).filter(d=>this.current.page.params[d]!==h[d]),query:r.toString()!==this.current.page.query.toString(),session:this.session_id!==this.current.session_id},k={host:this.host,path:e,query:r,params:h};let v=[],j={},x=!1,P=200,O;l.forEach(d=>d());t:for(let d=0;d<l.length;d+=1){let p;try{if(!l[d])continue;const w=await l[d](),g=this.current.branch[d];if(!g||w!==g.module||f.path&&g.uses.path||f.params.some(S=>g.uses.params.has(S))||f.query&&g.uses.query||f.session&&g.uses.session||g.uses.dependencies.some(S=>this.invalid.has(S))||x&&g.uses.stuff){p=await this._load_node({module:w,page:k,stuff:j});const S=d===l.length-1;if(p&&p.loaded){if(p.loaded.error&&(P=p.loaded.status,O=p.loaded.error),p.loaded.redirect)return{redirect:p.loaded.redirect,props:{},state:this.current};p.loaded.stuff&&(x=!0)}else if(S&&w.load)return}else p=g}catch(w){P=500,O=it(w)}if(O){for(;d--;)if(c[d]){let w,g,N=d;for(;!(g=v[N]);)N-=1;try{if(w=await this._load_node({status:P,error:O,module:await c[d](),page:k,stuff:g.stuff}),w&&w.loaded&&w.loaded.error)continue;v=v.slice(0,N+1).concat(w);break t}catch{continue}}return await this._load_error({status:P,error:O,path:e,query:r})}else p&&p.loaded&&p.loaded.stuff&&(j=R(R({},j),p.loaded.stuff)),v.push(p)}return await this._get_navigation_result_from_branch({page:k,branch:v})}async _load_error({status:t,error:e,path:s,query:r}){const a={host:this.host,path:s,query:r,params:{}},n=await this._load_node({module:await this.fallback[0],page:a,stuff:{}}),o=[n,await this._load_node({status:t,error:e,module:await this.fallback[1],page:a,stuff:n&&n.loaded&&n.loaded.stuff||{}})];return await this._get_navigation_result_from_branch({page:a,branch:o})}}async function Jt({paths:i,target:t,session:e,host:s,route:r,spa:a,trailing_slash:n,hydrate:o}){const l=new Vt({Root:St,fallback:Ut,target:t,session:e,host:s}),c=r?new Ot({base:i.base,routes:qt,trailing_slash:n,renderer:l}):null;Et(c),jt(i),o&&await l.start(o),c&&(a&&c.goto(location.href,{replaceState:!0},[]),c.init_listeners()),dispatchEvent(new CustomEvent("sveltekit:start"))}export{Jt as start};
