const r={};function O(e){r.context=e}function Z(){return{...r.context,id:`${r.context.id}${r.context.count++}-`,count:0}}let z=R;const S={},N=1,E=2,K={owned:null,cleanups:null,context:null,owner:null};var h=null;let p=null,y=null,A=null,d=null,g=null,H=0;function v(e,t){const n=y,s=h,i=e.length===0?K:{owned:null,cleanups:null,context:null,owner:t||s};h=i,y=null;try{return P(()=>e(()=>k(i)),!0)}finally{y=n,h=s}}function x(e,t,n){const s=ne(e,t,!1,N);Y(s)}function ee(e){if(A)return e();let t;const n=A=[];try{t=e()}finally{A=null}return P(()=>{for(let s=0;s<n.length;s+=1){const i=n[s];if(i.pending!==S){const o=i.pending;i.pending=S,V(i,o)}}},!1),t}function T(e){let t,n=y;return y=null,t=e(),y=n,t}function V(e,t,n){if(A)return e.pending===S&&A.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let s=!1;return e.value=t,e.observers&&e.observers.length&&P(()=>{for(let i=0;i<e.observers.length;i+=1){const o=e.observers[i];s&&p.disposed.has(o),(s&&!o.tState||!s&&!o.state)&&(o.pure?d.push(o):g.push(o),o.observers&&W(o)),s||(o.state=N)}if(d.length>1e6)throw d=[],new Error},!1),t}function Y(e){if(!e.fn)return;k(e);const t=h,n=y,s=H;y=h=e,te(e,e.value,s),y=n,h=t}function te(e,t,n){let s;try{s=e.fn(t)}catch(i){X(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?V(e,s):e.value=s,e.updatedAt=n)}function ne(e,t,n,s=N,i){const o={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:h,context:null,pure:n};return h===null||h!==K&&(h.owned?h.owned.push(o):h.owned=[o]),o}function F(e){const t=p;if(e.state===0||t)return;if(e.state===E||t)return $(e);if(e.suspense&&T(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<H);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===N||t)Y(e);else if(e.state===E||t){const i=d;d=null,$(e,n[0]),d=i}}function P(e,t){if(d)return e();let n=!1;t||(d=[]),g?n=!0:g=[],H++;try{const s=e();return se(n),s}catch(s){X(s)}finally{d=null,n||(g=null)}}function se(e){d&&(R(d),d=null),!e&&(g.length?ee(()=>{z(g),g=null}):g=null)}function R(e){for(let t=0;t<e.length;t++)F(e[t])}function $(e,t){const n=p;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===N||n?i!==t&&F(i):(i.state===E||n)&&$(i,t))}}function W(e){const t=p;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=E,s.pure?d.push(s):g.push(s),s.observers&&W(s))}}function k(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const o=i.pop(),l=n.observerSlots.pop();s<i.length&&(o.sourceSlots[l]=s,i[s]=o,n.observerSlots[s]=l)}}if(e.owned){for(t=0;t<e.owned.length;t++)k(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function X(e){throw e}let G=!1;function ie(){G=!0}function Se(e,t){if(G&&r.context){const n=r.context;O(Z());const s=T(()=>e(t||{}));return O(n),s}return T(()=>e(t||{}))}const le=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],oe=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...le]),fe=new Set(["innerHTML","textContent","innerText","children"]),re={className:"class",htmlFor:"for"},D={class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"},ce=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),ue={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function ae(e,t,n){let s=n.length,i=t.length,o=s,l=0,f=0,c=t[i-1].nextSibling,u=null;for(;l<i||f<o;){if(t[l]===n[f]){l++,f++;continue}for(;t[i-1]===n[o-1];)i--,o--;if(i===l){const a=o<s?f?n[f-1].nextSibling:n[o-f]:c;for(;f<o;)e.insertBefore(n[f++],a)}else if(o===f)for(;l<i;)(!u||!u.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[o-1]&&n[f]===t[i-1]){const a=t[--i].nextSibling;e.insertBefore(n[f++],t[l++].nextSibling),e.insertBefore(n[--o],a),t[i]=n[o]}else{if(!u){u=new Map;let w=f;for(;w<o;)u.set(n[w],w++)}const a=u.get(t[l]);if(a!=null)if(f<a&&a<o){let w=l,C=1,M;for(;++w<i&&w<o&&!((M=u.get(t[w]))==null||M!==a+C);)C++;if(C>a-f){const J=t[l];for(;f<a;)e.insertBefore(n[f++],J)}else e.replaceChild(n[f++],t[l++])}else l++;else t[l++].remove()}}}const q="_$DX_DELEGATE";function de(e,t,n){let s;return v(i=>{s=i,t===document?e():Ae(t,e(),t.firstChild?null:void 0,n)}),()=>{s(),t.textContent=""}}function Te(e,t,n){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function he(e,t=window.document){const n=t[q]||(t[q]=new Set);for(let s=0,i=e.length;s<i;s++){const o=e[s];n.has(o)||(n.add(o),t.addEventListener(o,Q))}}function ge(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function ye(e,t,n,s){s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s)}function we(e,t){t==null?e.removeAttribute("class"):e.className=t}function me(e,t,n,s){s?Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n:Array.isArray(n)?e.addEventListener(t,i=>n[0](n[1],i)):e.addEventListener(t,n)}function xe(e,t,n={}){const s=Object.keys(t||{}),i=Object.keys(n);let o,l;for(o=0,l=i.length;o<l;o++){const f=i[o];!f||f==="undefined"||t[f]||(B(e,f,!1),delete n[f])}for(o=0,l=s.length;o<l;o++){const f=s[o],c=!!t[f];!f||f==="undefined"||n[f]===c||!c||(B(e,f,!0),n[f]=c)}return n}function be(e,t,n={}){const s=e.style,i=typeof n=="string";if(t==null&&i||typeof t=="string")return s.cssText=t;i&&(s.cssText=void 0,n={}),t||(t={});let o,l;for(l in n)t[l]==null&&s.removeProperty(l),delete n[l];for(l in t)o=t[l],o!==n[l]&&(s.setProperty(l,o),n[l]=o);return n}function $e(e,t,n,s){typeof t=="function"?x(i=>U(e,t(),i,n,s)):U(e,t,void 0,n,s)}function Ae(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return b(e,t,s,n);x(i=>b(e,t(),i,n),s)}function Ne(e,t,n,s,i={},o=!1){t||(t={});for(const l in i)if(!(l in t)){if(l==="children")continue;I(e,l,null,i[l],n,o)}for(const l in t){if(l==="children"){s||b(e,t.children);continue}const f=t[l];i[l]=I(e,l,f,i[l],n,o)}}function Ee(e,t,n={}){r.completed=globalThis._$HY.completed,r.events=globalThis._$HY.events,r.load=globalThis._$HY.load,r.gather=i=>j(t,i),r.registry=new Map,r.context={id:n.renderId||"",count:0},j(t,n.renderId);const s=de(e,t,[...t.childNodes]);return r.context=null,s}function Le(e){let t,n;return!r.context||!(t=r.registry.get(n=Ce()))?e.cloneNode(!0):(r.completed&&r.completed.add(t),r.registry.delete(n),t)}function He(){r.events&&!r.events.queued&&(queueMicrotask(()=>{const{completed:e,events:t}=r;for(t.queued=!1;t.length;){const[n,s]=t[0];if(!e.has(n))return;Q(s),t.shift()}}),r.events.queued=!0)}function pe(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function B(e,t,n){const s=t.trim().split(/\s+/);for(let i=0,o=s.length;i<o;i++)e.classList.toggle(s[i],n)}function I(e,t,n,s,i,o){let l,f,c;if(t==="style")return be(e,n,s);if(t==="classList")return xe(e,n,s);if(n===s)return s;if(t==="ref")o||n(e);else if(t.slice(0,3)==="on:")e.addEventListener(t.slice(3),n);else if(t.slice(0,10)==="oncapture:")e.addEventListener(t.slice(10),n,!0);else if(t.slice(0,2)==="on"){const u=t.slice(2).toLowerCase(),a=ce.has(u);me(e,u,n,a),a&&he([u])}else if((c=fe.has(t))||!i&&(D[t]||(f=oe.has(t)))||(l=e.nodeName.includes("-")))t==="class"||t==="className"?we(e,n):l&&!f&&!c?e[pe(t)]=n:e[D[t]||t]=n;else{const u=i&&t.indexOf(":")>-1&&ue[t.split(":")[0]];u?ye(e,u,t,n):ge(e,re[t]||t,n)}return n}function Q(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),r.registry&&!r.done&&(r.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>s.remove()));n!==null;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s(i,e):s(e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function U(e,t,n={},s,i){return t||(t={}),!i&&"children"in t&&x(()=>n.children=b(e,t.children,n.children)),t.ref&&t.ref(e),x(()=>Ne(e,t,s,!0,n,!0)),n}function b(e,t,n,s,i){for(r.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,l=s!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(r.context)return n;if(o==="number"&&(t=t.toString()),l){let f=n[0];f&&f.nodeType===3?f.data=t:f=document.createTextNode(t),n=m(e,n,s,f)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(r.context)return n;n=m(e,n,s)}else{if(o==="function")return x(()=>{let f=t();for(;typeof f=="function";)f=f();n=b(e,f,n,s)}),()=>n;if(Array.isArray(t)){const f=[];if(L(f,t,i))return x(()=>n=b(e,f,n,s,!0)),()=>n;if(r.context){for(let c=0;c<f.length;c++)if(f[c].parentNode)return n=f}if(f.length===0){if(n=m(e,n,s),l)return n}else Array.isArray(n)?n.length===0?_(e,f,s):ae(e,n,f):(n&&m(e),_(e,f));n=f}else if(t instanceof Node){if(r.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=m(e,n,s,t);m(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function L(e,t,n){let s=!1;for(let i=0,o=t.length;i<o;i++){let l=t[i],f;if(l instanceof Node)e.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))s=L(e,l)||s;else if((f=typeof l)=="string")e.push(document.createTextNode(l));else if(f==="function")if(n){for(;typeof l=="function";)l=l();s=L(e,Array.isArray(l)?l:[l])||s}else e.push(l),s=!0;else e.push(document.createTextNode(l.toString()))}return s}function _(e,t,n){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function m(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let o=!1;for(let l=t.length-1;l>=0;l--){const f=t[l];if(i!==f){const c=f.parentNode===e;!o&&!l?c?e.replaceChild(i,f):e.insertBefore(i,n):c&&f.remove()}else o=!0}}else e.insertBefore(i,n);return[i]}function j(e,t){const n=e.querySelectorAll("*[data-hk]");for(let s=0;s<n.length;s++){const i=n[s],o=i.getAttribute("data-hk");(!t||o.startsWith(t))&&!r.registry.has(o)&&r.registry.set(o,i)}}function Ce(){const e=r.context;return`${e.id}${e.count++}`}const Pe=(...e)=>(ie(),Ee(...e));export{xe as a,de as b,x as c,Se as d,r as e,Le as g,Pe as h,Ae as i,He as r,$e as s,Te as t};