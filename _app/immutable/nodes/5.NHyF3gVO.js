const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/consumer-producer.C-vnEX8u.js","../chunks/scheduler.Bnrw85MU.js","../chunks/index.B98wcXj2.js","../chunks/PostLayout.22MeB5ub.js","../chunks/Content.CaNLRxtE.js","../assets/PostLayout.TI3rtALh.css","../chunks/initial_commit.D9jHp827.js","../chunks/ode-to-penguin-lover.oJ6JSa2e.js"])))=>i.map(i=>d[i]);
import{_ as m}from"../chunks/preload-helper.D6kgxu3v.js";import{e as g}from"../chunks/index.g5YcAAdQ.js";import{s as y}from"../chunks/scheduler.Bnrw85MU.js";import{S as $,i as b,C as u,c as _,y as p,a as h,m as l,j as w,b as f,z as P,t as d,k as x,d as v,B as E}from"../chunks/index.B98wcXj2.js";const O=(a,t,n)=>{const o=a[t];return o?typeof o=="function"?o():Promise.resolve(o):new Promise((r,s)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+t+(t.split("/").length!==n?". Note that variables only represent file names one level deep.":""))))})};async function k({params:a}){let t;try{t=await O(Object.assign({"../../../posts/consumer-producer.svx":()=>m(()=>import("../chunks/consumer-producer.C-vnEX8u.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),"../../../posts/initial_commit.svx":()=>m(()=>import("../chunks/initial_commit.D9jHp827.js"),__vite__mapDeps([6,1,2,3,4,5]),import.meta.url),"../../../posts/ode-to-penguin-lover.svx":()=>m(()=>import("../chunks/ode-to-penguin-lover.oJ6JSa2e.js"),__vite__mapDeps([7,1,2,3,4,5]),import.meta.url)}),`../../../posts/${a.slug}.svx`,5)}catch{g(404,{message:"Not found"})}return{component:t.default,metadata:t.metadata}}const T=!0,j=!1,L=Object.freeze(Object.defineProperty({__proto__:null,load:k,prerender:T,ssr:j},Symbol.toStringTag,{value:"Module"}));function D(a){let t,n,o;var r=a[0];function s(e,i){return{}}return r&&(t=u(r,s())),{c(){t&&_(t.$$.fragment),n=p()},l(e){t&&h(t.$$.fragment,e),n=p()},m(e,i){t&&l(t,e,i),w(e,n,i),o=!0},p(e,[i]){if(i&1&&r!==(r=e[0])){if(t){E();const c=t;f(c.$$.fragment,1,0,()=>{v(c,1)}),P()}r?(t=u(r,s()),_(t.$$.fragment),d(t.$$.fragment,1),l(t,n.parentNode,n)):t=null}},i(e){o||(t&&d(t.$$.fragment,e),o=!0)},o(e){t&&f(t.$$.fragment,e),o=!1},d(e){e&&x(n),t&&v(t,e)}}}function I(a,t,n){let o,{data:r}=t;return a.$$set=s=>{"data"in s&&n(1,r=s.data)},a.$$.update=()=>{a.$$.dirty&2&&n(0,o=r.component)},[o,r]}class M extends ${constructor(t){super(),b(this,t,I,D,y,{data:1})}}export{M as component,L as universal};