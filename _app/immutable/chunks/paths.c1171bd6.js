import{n as f,s as g}from"./scheduler.b0a04719.js";const e=[];function d(i,a=f){let o;const n=new Set;function r(t){if(g(i,t)&&(i=t,o)){const b=!e.length;for(const s of n)s[1](),e.push(s,i);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function c(t){r(t(i))}function _(t,b=f){const s=[t,b];return n.add(s),n.size===1&&(o=a(r,c)||f),t(i),()=>{n.delete(s),n.size===0&&o&&(o(),o=null)}}return{set:r,update:c,subscribe:_}}var u;const p=((u=globalThis.__sveltekit_ib6fvg)==null?void 0:u.base)??"/portfolio-svelte";var l;const q=((l=globalThis.__sveltekit_ib6fvg)==null?void 0:l.assets)??p;export{q as a,p as b,d as w};
