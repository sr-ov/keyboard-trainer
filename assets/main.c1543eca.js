const y=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}};y();const k=`I live in a house near the mountains. I have two brothers and one sister, and I was born last. My father teaches mathematics, and my mother is a nurse at a big hospital. My brothers are very smart and work hard in school. My sister is a nervous girl, but she is very kind. My grandmother also lives with us. She came from Italy when I was two years old. She has grown old, but she is still very strong. She cooks the best food!
My family is very important to me. We do lots of things together. My brothers and I like to go on long walks in the mountains. My sister likes to cook with my grandmother. On the weekends we all play board games together. We laugh and always have a good time. I love my family very much.`,x=24,h=`
`;var d=(t=>(t.ENTER="Enter",t))(d||{});const u=t=>t.slice(0,-1),v=t=>{const e=/\s|\n/g,s=t.split(e);let o=1,r="";return s.forEach(c=>{r+=c+" ",r.length>=110*o&&(r=u(r)+`
`,o+=1)}),u(r)},z=t=>t.reduce((e,a)=>({...e,[a.dataset.key]:a}),{}),L=t=>/^[A-Z]/.test(t),E=[...document.querySelectorAll("[data-key]")],m=document.querySelector("#input"),p=document.querySelector("#text"),n=v(k),w=z(E),i={step:0,currentRow:0},T=(t,e)=>`<span class="checked">${t.slice(0,e)}</span>${t.slice(e)}`,S=t=>{p.innerHTML="",p.insertAdjacentHTML("afterbegin",t)},b=()=>{S(T(n,i.step))};b();const I=()=>{m.value=""},M=()=>{i.currentRow+=1,p.style.transform=`translateY(-${x*i.currentRow}px)`},N=()=>{I(),M(),b()},f=t=>{var e;return(e=w[t.toUpperCase()])!=null?e:w[t]},g=(t,e)=>{var o;const a=t==="active"?"add":"remove";(o=f(e===h?d.ENTER:e))==null||o.classList[a]("active"),L(e)&&(w.ShiftLeft.classList[a]("active"),w.ShiftRight.classList[a]("active"))},l={active(t){g("active",t)},inactive(t){g("inactive",t)},error(t){const e=f(t);if(!e)return;e.classList.add("error");const a=setTimeout(()=>{e.classList.remove("error"),clearTimeout(a)},300)}};l.active(n[0]);const R=t=>{if(n[i.step]===h?t.key!==d.ENTER:t.key!==n[i.step]){l.error(t.key),t.preventDefault();return}l.inactive(n[i.step]),i.step+=1,l.active(n[i.step]),t.key===d.ENTER?N():b()};m.addEventListener("keydown",R);