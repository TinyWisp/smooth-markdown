import{a8 as k,o as d,V as i,W as m,a,a9 as r,r as s,T as C,X as e,U as g,Y as u,a1 as h}from"./index-C3ahgl6Q.js";import{s as V}from"./index.esm-CbYcTp6y.js";import{b}from"./mdi-CW5TO8kT.js";const y={__name:"BoldButton",setup(_){const o=k("getContext")();function t(){o.editor.command("bold")}return(p,v)=>{const l=r;return d(),i(l,{onClick:t},{default:m(()=>[a("Bold")]),_:1})}}},W=y,O={__name:"index",setup(_){const n=s(""),o=s(null);let t=null;C(()=>{t=o.value.getContext()});const f=["undo","redo","divider",e(r,{onClick:()=>{t.editor.insertOrReplace(`Hello World
`)}},{default:()=>[a("Hello World")]}),()=>e(r,{onClick:()=>{t.editor.insertOrReplace(`lucky!
`)}},{default:()=>[a("lucky")]}),{name:"avatar",icon:b,tip:"avatar",exec(){t.editor.command("image",{url:"/img/avatar.png",title:"avatar"})}},W];return(w,c)=>{const B=g("v-divider");return d(),i(u(h),{modelValue:n.value,"onUpdate:modelValue":c[0]||(c[0]=x=>n.value=x),ref_key:"sm",ref:o},{toolbar:m(()=>[e(u(V),{color:"white",items:f}),e(B)]),_:1},8,["modelValue"])}}};export{O as default};
