var app=function(){"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function s(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}function u(t,n,e){t.$$.on_destroy.push(i(n,e))}function a(t,n,e,o){if(t){const r=l(t,n,e,o);return t[0](r)}}function l(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function f(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}function p(t,n,e,o,r,s){if(r){const c=l(n,e,o,s);t.p(c,r)}}function d(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}function $(t){const n={};for(const e in t)"$"!==e[0]&&(n[e]=t[e]);return n}function h(t,n){t.appendChild(n)}function m(t,n,e){t.insertBefore(n,e||null)}function g(t){t.parentNode.removeChild(t)}function v(t){return document.createElement(t)}function x(t){return document.createTextNode(t)}function y(){return x(" ")}function _(){return x("")}function b(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function w(t,n,e,o){null===e?t.style.removeProperty(n):t.style.setProperty(n,e,o?"important":"")}let k;function S(t){k=t}function j(){if(!k)throw new Error("Function called outside component initialization");return k}function C(t,n){return j().$$.context.set(t,n),n}function E(t){return j().$$.context.get(t)}const A=[],B=[],L=[],M=[],R=Promise.resolve();let q=!1;function H(t){L.push(t)}const N=new Set;let O=0;function P(){const t=k;do{for(;O<A.length;){const t=A[O];O++,S(t),T(t.$$)}for(S(null),A.length=0,O=0;B.length;)B.pop()();for(let t=0;t<L.length;t+=1){const n=L[t];N.has(n)||(N.add(n),n())}L.length=0}while(A.length);for(;M.length;)M.pop()();q=!1,N.clear(),S(t)}function T(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(H)}}const z=new Set;let I;function U(){I={r:0,c:[],p:I}}function D(){I.r||r(I.c),I=I.p}function F(t,n){t&&t.i&&(z.delete(t),t.i(n))}function V(t,n,e,o){if(t&&t.o){if(z.has(t))return;z.add(t),I.c.push((()=>{z.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}else o&&o()}function G(t){return"object"==typeof t&&null!==t?t:{}}function J(t){t&&t.c()}function K(t,n,o,c){const{fragment:i,on_mount:u,on_destroy:a,after_update:l}=t.$$;i&&i.m(n,o),c||H((()=>{const n=u.map(e).filter(s);a?a.push(...n):r(n),t.$$.on_mount=[]})),l.forEach(H)}function Q(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function W(t,n){-1===t.$$.dirty[0]&&(A.push(t),q||(q=!0,R.then(P)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function X(n,e,s,c,i,u,a,l=[-1]){const f=k;S(n);const p=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:o(),dirty:l,skip_bound:!1,root:e.target||f.$$.root};a&&a(p.root);let d=!1;if(p.ctx=s?s(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return p.ctx&&i(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),d&&W(n,t)),e})):[],p.update(),d=!0,r(p.before_update),p.fragment=!!c&&c(p.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);p.fragment&&p.fragment.l(t),t.forEach(g)}else p.fragment&&p.fragment.c();e.intro&&F(n.$$.fragment),K(n,e.target,e.anchor,e.customElement),P()}S(f)}class Y{$destroy(){Q(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Z=[];function tt(n,e=t){let o;const r=new Set;function s(t){if(c(n,t)&&(n=t,o)){const t=!Z.length;for(const t of r)t[1](),Z.push(t,n);if(t){for(let t=0;t<Z.length;t+=2)Z[t][0](Z[t+1]);Z.length=0}}}return{set:s,update:function(t){s(t(n))},subscribe:function(c,i=t){const u=[c,i];return r.add(u),1===r.size&&(o=e(s)||t),c(n),()=>{r.delete(u),0===r.size&&(o(),o=null)}}}}function nt(n,e,o){const c=!Array.isArray(n),u=c?[n]:n,a=e.length<2;return l=n=>{let o=!1;const l=[];let f=0,p=t;const d=()=>{if(f)return;p();const o=e(c?l[0]:l,n);a?n(o):p=s(o)?o:t},$=u.map(((t,n)=>i(t,(t=>{l[n]=t,f&=~(1<<n),o&&d()}),(()=>{f|=1<<n}))));return o=!0,d(),function(){r($),p()}},{subscribe:tt(o,l).subscribe};var l}const et={},ot={};function rt(t){return{...t.location,state:t.history.state,key:t.history.state&&t.history.state.key||"initial"}}const st=function(t,n){const e=[];let o=rt(t);return{get location(){return o},listen(n){e.push(n);const r=()=>{o=rt(t),n({location:o,action:"POP"})};return t.addEventListener("popstate",r),()=>{t.removeEventListener("popstate",r);const o=e.indexOf(n);e.splice(o,1)}},navigate(n,{state:r,replace:s=!1}={}){r={...r,key:Date.now()+""};try{s?t.history.replaceState(r,null,n):t.history.pushState(r,null,n)}catch(e){t.location[s?"replace":"assign"](n)}o=rt(t),e.forEach((t=>t({location:o,action:"PUSH"})))}}}(Boolean("undefined"!=typeof window&&window.document&&window.document.createElement)?window:function(t="/"){let n=0;const e=[{pathname:t,search:""}],o=[];return{get location(){return e[n]},addEventListener(t,n){},removeEventListener(t,n){},history:{get entries(){return e},get index(){return n},get state(){return o[n]},pushState(t,r,s){const[c,i=""]=s.split("?");n++,e.push({pathname:c,search:i}),o.push(t)},replaceState(t,r,s){const[c,i=""]=s.split("?");e[n]={pathname:c,search:i},o[n]=t}}}}()),ct=/^:(.+)/;function it(t){return"*"===t[0]}function ut(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function at(t){return t.replace(/(^\/+|\/+$)/g,"")}function lt(t,n){return{route:t,score:t.default?0:ut(t.path).reduce(((t,n)=>(t+=4,!function(t){return""===t}(n)?!function(t){return ct.test(t)}(n)?it(n)?t-=5:t+=3:t+=2:t+=1,t)),0),index:n}}function ft(t,n){let e,o;const[r]=n.split("?"),s=ut(r),c=""===s[0],i=function(t){return t.map(lt).sort(((t,n)=>t.score<n.score?1:t.score>n.score?-1:t.index-n.index))}(t);for(let t=0,r=i.length;t<r;t++){const r=i[t].route;let u=!1;if(r.default){o={route:r,params:{},uri:n};continue}const a=ut(r.path),l={},f=Math.max(s.length,a.length);let p=0;for(;p<f;p++){const t=a[p],n=s[p];if(void 0!==t&&it(t)){l["*"===t?"*":t.slice(1)]=s.slice(p).map(decodeURIComponent).join("/");break}if(void 0===n){u=!0;break}let e=ct.exec(t);if(e&&!c){const t=decodeURIComponent(n);l[e[1]]=t}else if(t!==n){u=!0;break}}if(!u){e={route:r,params:l,uri:"/"+s.slice(0,p).join("/")};break}}return e||o||null}function pt(t,n){return`${at("/"===n?t:`${at(t)}/${at(n)}`)}/`}function dt(t){let n;const e=t[9].default,o=a(e,t,t[8],null);return{c(){o&&o.c()},m(t,e){o&&o.m(t,e),n=!0},p(t,[r]){o&&o.p&&(!n||256&r)&&p(o,e,t,t[8],n?f(e,t[8],r,null):d(t[8]),null)},i(t){n||(F(o,t),n=!0)},o(t){V(o,t),n=!1},d(t){o&&o.d(t)}}}function $t(t,n,e){let o,r,s,{$$slots:c={},$$scope:i}=n,{basepath:a="/"}=n,{url:l=null}=n;const f=E(et),p=E(ot),d=tt([]);u(t,d,(t=>e(6,r=t)));const $=tt(null);let h=!1;const m=f||tt(l?{pathname:l}:st.location);u(t,m,(t=>e(5,o=t)));const g=p?p.routerBase:tt({path:a,uri:a});u(t,g,(t=>e(7,s=t)));const v=nt([g,$],(([t,n])=>{if(null===n)return t;const{path:e}=t,{route:o,uri:r}=n;return{path:o.default?e:o.path.replace(/\*.*$/,""),uri:r}}));var x;return f||(x=()=>st.listen((t=>{m.set(t.location)})),j().$$.on_mount.push(x),C(et,m)),C(ot,{activeRoute:$,base:g,routerBase:v,registerRoute:function(t){const{path:n}=s;let{path:e}=t;if(t._path=e,t.path=pt(n,e),"undefined"==typeof window){if(h)return;const n=function(t,n){return ft([t],n)}(t,o.pathname);n&&($.set(n),h=!0)}else d.update((n=>(n.push(t),n)))},unregisterRoute:function(t){d.update((n=>{const e=n.indexOf(t);return n.splice(e,1),n}))}}),t.$$set=t=>{"basepath"in t&&e(3,a=t.basepath),"url"in t&&e(4,l=t.url),"$$scope"in t&&e(8,i=t.$$scope)},t.$$.update=()=>{if(128&t.$$.dirty){const{path:t}=s;d.update((n=>(n.forEach((n=>n.path=pt(t,n._path))),n)))}if(96&t.$$.dirty){const t=ft(r,o.pathname);$.set(t)}},[d,m,g,a,l,o,r,s,i,c]}class ht extends Y{constructor(t){super(),X(this,t,$t,dt,c,{basepath:3,url:4})}}const mt=t=>({params:4&t,location:16&t}),gt=t=>({params:t[2],location:t[4]});function vt(t){let n,e,o,r;const s=[yt,xt],c=[];function i(t,n){return null!==t[0]?0:1}return n=i(t),e=c[n]=s[n](t),{c(){e.c(),o=_()},m(t,e){c[n].m(t,e),m(t,o,e),r=!0},p(t,r){let u=n;n=i(t),n===u?c[n].p(t,r):(U(),V(c[u],1,1,(()=>{c[u]=null})),D(),e=c[n],e?e.p(t,r):(e=c[n]=s[n](t),e.c()),F(e,1),e.m(o.parentNode,o))},i(t){r||(F(e),r=!0)},o(t){V(e),r=!1},d(t){c[n].d(t),t&&g(o)}}}function xt(t){let n;const e=t[10].default,o=a(e,t,t[9],gt);return{c(){o&&o.c()},m(t,e){o&&o.m(t,e),n=!0},p(t,r){o&&o.p&&(!n||532&r)&&p(o,e,t,t[9],n?f(e,t[9],r,mt):d(t[9]),gt)},i(t){n||(F(o,t),n=!0)},o(t){V(o,t),n=!1},d(t){o&&o.d(t)}}}function yt(t){let e,o,r;const s=[{location:t[4]},t[2],t[3]];var c=t[0];function i(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}return c&&(e=new c(i())),{c(){e&&J(e.$$.fragment),o=_()},m(t,n){e&&K(e,t,n),m(t,o,n),r=!0},p(t,n){const r=28&n?function(t,n){const e={},o={},r={$$scope:1};let s=t.length;for(;s--;){const c=t[s],i=n[s];if(i){for(const t in c)t in i||(o[t]=1);for(const t in i)r[t]||(e[t]=i[t],r[t]=1);t[s]=i}else for(const t in c)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}(s,[16&n&&{location:t[4]},4&n&&G(t[2]),8&n&&G(t[3])]):{};if(c!==(c=t[0])){if(e){U();const t=e;V(t.$$.fragment,1,0,(()=>{Q(t,1)})),D()}c?(e=new c(i()),J(e.$$.fragment),F(e.$$.fragment,1),K(e,o.parentNode,o)):e=null}else c&&e.$set(r)},i(t){r||(e&&F(e.$$.fragment,t),r=!0)},o(t){e&&V(e.$$.fragment,t),r=!1},d(t){t&&g(o),e&&Q(e,t)}}}function _t(t){let n,e,o=null!==t[1]&&t[1].route===t[7]&&vt(t);return{c(){o&&o.c(),n=_()},m(t,r){o&&o.m(t,r),m(t,n,r),e=!0},p(t,[e]){null!==t[1]&&t[1].route===t[7]?o?(o.p(t,e),2&e&&F(o,1)):(o=vt(t),o.c(),F(o,1),o.m(n.parentNode,n)):o&&(U(),V(o,1,1,(()=>{o=null})),D())},i(t){e||(F(o),e=!0)},o(t){V(o),e=!1},d(t){o&&o.d(t),t&&g(n)}}}function bt(t,e,o){let r,s,{$$slots:c={},$$scope:i}=e,{path:a=""}=e,{component:l=null}=e;const{registerRoute:f,unregisterRoute:p,activeRoute:d}=E(ot);u(t,d,(t=>o(1,r=t)));const h=E(et);u(t,h,(t=>o(4,s=t)));const m={path:a,default:""===a};let g={},v={};var x;return f(m),"undefined"!=typeof window&&(x=()=>{p(m)},j().$$.on_destroy.push(x)),t.$$set=t=>{o(13,e=n(n({},e),$(t))),"path"in t&&o(8,a=t.path),"component"in t&&o(0,l=t.component),"$$scope"in t&&o(9,i=t.$$scope)},t.$$.update=()=>{2&t.$$.dirty&&r&&r.route===m&&o(2,g=r.params);{const{path:t,component:n,...r}=e;o(3,v=r)}},e=$(e),[l,r,g,v,s,d,h,m,a,i,c]}class wt extends Y{constructor(t){super(),X(this,t,bt,_t,c,{path:8,component:0})}}function kt(n){let e;return{c(){e=v("div"),e.innerHTML='<div class="Camera__shadow svelte-18gq7ii"></div> \n  <div class="Camera__border svelte-18gq7ii"></div> \n  <div class="Camera__section svelte-18gq7ii"></div> \n  <div class="Camera__details svelte-18gq7ii"><div class="Camera__details-title svelte-18gq7ii"><h3>StreamingLotus</h3></div></div>',b(e,"class","Camera__camera")},m(t,n){m(t,e,n)},p:t,i:t,o:t,d(t){t&&g(e)}}}class St extends Y{constructor(t){super(),X(this,t,null,kt,c,{})}}function jt(n){let e;return{c(){e=v("div"),e.innerHTML='<div class="Chat__title svelte-k2nvk6">Chat</div>',b(e,"class","Chat svelte-k2nvk6"),b(e,"style","")},m(t,n){m(t,e,n)},p:t,i:t,o:t,d(t){t&&g(e)}}}class Ct extends Y{constructor(t){super(),X(this,t,null,jt,c,{})}}function Et(n){let e;return{c(){e=v("div"),e.innerHTML='<div class="Socials__links svelte-1mhxuj8"><div class="Socials__link svelte-1mhxuj8"><div class="Socials__link-icon svelte-1mhxuj8"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></div> \n      <span class="Socials__link-text svelte-1mhxuj8">/helloitsian</span></div> \n    <div class="Socials__link svelte-1mhxuj8"><div class="Socials__link-icon svelte-1mhxuj8"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></div> \n      <span class="Socials__link-text svelte-1mhxuj8">@lotsofcoding</span></div></div>',b(e,"class","Socials svelte-1mhxuj8")},m(t,n){m(t,e,n)},p:t,i:t,o:t,d(t){t&&g(e)}}}class At extends Y{constructor(t){super(),X(this,t,null,Et,c,{})}}function Bt(n){let e,o,r,s,c,i,u,a,l;return o=new St({}),c=new Ct({}),a=new At({}),{c(){e=v("main"),r=v("div"),J(o.$$.fragment),s=y(),i=v("div"),J(c.$$.fragment),u=y(),J(a.$$.fragment),w(r,"display","contents"),w(r,"--top","20px"),w(r,"--right","20px"),w(r,"--width","569px"),w(r,"--height","330px"),w(i,"display","contents"),w(i,"--width","566px"),w(i,"--height","650px"),w(i,"--bottom","20px"),w(i,"--right","20px"),b(e,"class","Home")},m(t,n){m(t,e,n),h(e,r),K(o,r,null),h(e,s),h(e,i),K(c,i,null),h(e,u),K(a,e,null),l=!0},p:t,i(t){l||(F(o.$$.fragment,t),F(c.$$.fragment,t),F(a.$$.fragment,t),l=!0)},o(t){V(o.$$.fragment,t),V(c.$$.fragment,t),V(a.$$.fragment,t),l=!1},d(t){t&&g(e),Q(o),Q(c),Q(a)}}}class Lt extends Y{constructor(t){super(),X(this,t,null,Bt,c,{})}}function Mt(n){let e,o,r,s,c;return s=new At({}),{c(){e=v("main"),o=v("div"),o.innerHTML='<span class="Brb__title gradient-text svelte-1in5ak5">Brb...</span>',r=y(),J(s.$$.fragment),b(o,"class","Brb-wrapper"),b(e,"class","Brb svelte-1in5ak5")},m(t,n){m(t,e,n),h(e,o),h(e,r),K(s,e,null),c=!0},p:t,i(t){c||(F(s.$$.fragment,t),c=!0)},o(t){V(s.$$.fragment,t),c=!1},d(t){t&&g(e),Q(s)}}}class Rt extends Y{constructor(t){super(),X(this,t,null,Mt,c,{})}}function qt(t){let n,e;return n=new Rt({}),{c(){J(n.$$.fragment)},m(t,o){K(n,t,o),e=!0},i(t){e||(F(n.$$.fragment,t),e=!0)},o(t){V(n.$$.fragment,t),e=!1},d(t){Q(n,t)}}}function Ht(t){let n,e;return n=new Lt({}),{c(){J(n.$$.fragment)},m(t,o){K(n,t,o),e=!0},i(t){e||(F(n.$$.fragment,t),e=!0)},o(t){V(n.$$.fragment,t),e=!1},d(t){Q(n,t)}}}function Nt(t){let n,e,o,r;return n=new wt({props:{path:"/brb",$$slots:{default:[qt]},$$scope:{ctx:t}}}),o=new wt({props:{path:"/",$$slots:{default:[Ht]},$$scope:{ctx:t}}}),{c(){J(n.$$.fragment),e=y(),J(o.$$.fragment)},m(t,s){K(n,t,s),m(t,e,s),K(o,t,s),r=!0},p(t,e){const r={};2&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r);const s={};2&e&&(s.$$scope={dirty:e,ctx:t}),o.$set(s)},i(t){r||(F(n.$$.fragment,t),F(o.$$.fragment,t),r=!0)},o(t){V(n.$$.fragment,t),V(o.$$.fragment,t),r=!1},d(t){Q(n,t),t&&g(e),Q(o,t)}}}function Ot(t){let n,e,o;return e=new ht({props:{url:t[0],$$slots:{default:[Nt]},$$scope:{ctx:t}}}),{c(){n=v("main"),J(e.$$.fragment),b(n,"class","App")},m(t,r){m(t,n,r),K(e,n,null),o=!0},p(t,[n]){const o={};1&n&&(o.url=t[0]),2&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){o||(F(e.$$.fragment,t),o=!0)},o(t){V(e.$$.fragment,t),o=!1},d(t){t&&g(n),Q(e)}}}function Pt(t,n,e){let{url:o=""}=n;return t.$$set=t=>{"url"in t&&e(0,o=t.url)},[o]}return new class extends Y{constructor(t){super(),X(this,t,Pt,Ot,c,{url:0})}}({target:document.body,props:{name:"Ian"}})}();
//# sourceMappingURL=bundle.js.map
