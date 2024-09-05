import{d as M,r as V,w as $,s as Z,o as l,c as p,a as v,b as R,v as he,e as _,F as g,f as E,t as w,_ as S,g as L,h as z,m as H,i as N,p as A,j,k as K,n as W,K as J,M as Q,C as X,l as Y,E as ee,q as te,u as oe,x as ae,y as ne,z as le,A as be,B as i,D as ge,G as ke,H as ye,I as xe,J as we,L as Ve,N as Se,O as Ce,P as Ie,Q as $e,R as Ee,S as Ue,T as Me,U as m,V as U,W as a,X as t,Y as I,Z as D,$ as Re,a0 as Le,a1 as Pe,a2 as Te}from"./index-e1f0YLmt.js";import{s as re,a as de,i as se,m as ce,d as ue,t as ie,f as me,_ as pe}from"./index-5_xLa4tu.js";import{m as Be,a as Ne}from"./mdi-CW5TO8kT.js";import{s as Ae}from"./index.esm-CdEaoFhp.js";const je=["value"],Oe=M({__name:"SyncScrollbarsSetup",props:{modelValue:{type:Function,required:!0}},emits:["update:modelValue","update:code"],setup(r,{emit:f}){const o=["editor-to-viewer","viewer-to-editor","two-way"],u=V("editor-to-viewer"),d=f;return $(u,()=>{d("update:modelValue",()=>Z(u.value))}),(c,e)=>(l(),p(g,null,[v(' syncScrollbars(" '),R(_("select",{"onUpdate:modelValue":e[0]||(e[0]=n=>u.value=n),class:"select"},[(l(),p(g,null,E(o,(n,k)=>_("option",{key:k,value:n},w(n),9,je)),64))],512),[[he,u.value]]),v(' ") ')],64))}}),Fe=S(Oe,[["__scopeId","data-v-d06d4670"]]),_e=r=>(A("data-v-17d43467"),r=r(),j(),r),Ge=_e(()=>_("pre",null,`import sup from 'markdown-it-sup'
import sub from 'markdown-it-sub'
import ins from 'markdown-it-ins'
import br  from 'markdown-it-br'
import mark from 'markdown-it-mark'
import deflist from 'markdown-it-deflist'
import taskLists from 'markdown-it-task-lists'
import footnote from 'markdown-it-footnote'
import mialert from 'markdown-it-alert'

...
markdownItPlugins([`,-1)),qe=["onUpdate:modelValue"],De=_e(()=>_("pre",null,`  ])
...
  `,-1)),Ze=M({__name:"MarkdownItPluginsSetup",props:{modelValue:{type:Function,required:!0}},emits:["update:modelValue"],setup(r,{emit:f}){const o=L([{name:"sup",plugin:[re],enabled:!0},{name:"sub",plugin:[de],enabled:!0},{name:"ins",plugin:[se],enabled:!0},{name:"br",plugin:[z],enabled:!0},{name:"mark",plugin:[ce],enabled:!0},{name:"deflist",plugin:[ue],enabled:!0},{name:"taskLists",plugin:[ie],enabled:!0},{name:"footnote",plugin:[me],enabled:!0},{name:"mialert",plugin:[pe],enabled:!0}]),u=f;return $(o,()=>{const d=[];o.forEach(c=>{c.enabled&&d.push(c.plugin)}),u("update:modelValue",()=>H(d))},{deep:!0}),(d,c)=>(l(),p(g,null,[Ge,(l(!0),p(g,null,E(o,e=>(l(),p("div",{key:e.name,class:"item"},[v(" ["+w(e.name)+"], ",1),R(_("input",{type:"checkbox","onUpdate:modelValue":n=>e.enabled=n,class:"checkbox"},null,8,qe),[[N,e.enabled]])]))),128)),De],64))}}),ze=S(Ze,[["__scopeId","data-v-17d43467"]]),He=["onUpdate:modelValue"],Ke=M({__name:"OverlayScrollbarsSetup",props:{modelValue:{type:Function,required:!0}},emits:["update:modelValue"],setup(r,{emit:f}){const o=L({editor:!1,viewer:!1,toc:!1,codeBlock:!1}),u=f;return $(o,()=>{const d={editor:o.editor===!1?void 0:!1,viewer:o.viewer===!1?void 0:!1,toc:o.toc===!1?void 0:!1,codeBlock:o.codeBlock===!1?void 0:!1};u("update:modelValue",()=>K(d))}),(d,c)=>(l(),p("div",null,[v(" overlayScrollbars({ "),(l(!0),p(g,null,E(Object.keys(o),e=>(l(),p("div",{key:e,class:W({item:!0,checked:o[e]})},[v(w(e)+": false, ",1),R(_("input",{type:"checkbox","onUpdate:modelValue":n=>o[e]=n},null,8,He),[[N,o[e]]])],2))),128)),v(" }) ")]))}}),We=S(Ke,[["__scopeId","data-v-df9057d6"]]),ve=r=>(A("data-v-5024b658"),r=r(),j(),r),Je=ve(()=>_("pre",null,`import {
  CodeMirrorRenderer,
  MermaidRenderer,
  KatexRenderer
} from '@smooth-markdown/core/rendereres';

...
customCodeBlockRenderer({
  `,-1)),Qe=["onUpdate:modelValue"],Xe=ve(()=>_("pre",null,`})
  `,-1)),Ye=M({__name:"CustomCodeBlockRendererSetup",props:{modelValue:{type:Function,required:!0}},emits:["update:modelValue"],setup(r,{emit:f}){const o=L([{desc:"math: [KatexRenderer]",key:"math",renderer:[J],enabled:!0},{desc:"mermaid: [MermaidRenderer]",key:"mermaid",renderer:[Q],enabled:!0},{desc:"CodeMirrorRenderer: [CodeMirrorRenderer]",key:"default",renderer:[X],enabled:!0}]),u=f;return $(o,()=>{const d={};o.forEach(c=>{c.enabled&&(d[c.key]=c.renderer)}),u("update:modelValue",()=>Y(d))},{deep:!0}),(d,c)=>(l(),p(g,null,[Je,(l(!0),p(g,null,E(o,e=>(l(),p("div",{key:e.key,class:"item"},[v(w(e.desc)+", ",1),R(_("input",{type:"checkbox","onUpdate:modelValue":n=>e.enabled=n,class:"checkbox"},null,8,Qe),[[N,e.enabled]])]))),128)),Xe],64))}}),et=S(Ye,[["__scopeId","data-v-5024b658"]]),fe=r=>(A("data-v-15b23e49"),r=r(),j(),r),tt=fe(()=>_("pre",null,`import {
  EditorView,
  lineNumbers,
  highlightActiveLine,
  highlightActiveLineGutter
} from '@codemirror/view'
import { foldGutter } from '@codemirror/language'

...
codemirrorExt([`,-1)),ot=["onUpdate:modelValue"],at=fe(()=>_("pre",null,`  ])
...
  `,-1)),nt=M({__name:"CodeMirrorExtSetup",props:{modelValue:{type:Function,required:!0}},emits:["update:modelValue"],setup(r,{emit:f}){const o=L([{code:"EditorView.lineWrapping",ext:ee.lineWrapping,enabled:!0},{code:"lineNumbers()",ext:te(),enabled:!0},{code:"highlightActiveLine()",ext:oe(),enabled:!0},{code:"highlightActiveLineGutter()",ext:ae(),enabled:!0},{code:"foldGutter()",ext:ne(),enabled:!0}]),u=f;return $(o,()=>{const d=[];o.forEach(c=>{c.enabled&&d.push(c.ext)}),u("update:modelValue",()=>le(d))},{deep:!0}),(d,c)=>(l(),p(g,null,[tt,(l(!0),p(g,null,E(o,e=>(l(),p("div",{key:e.code,class:"item"},[v(w(e.code)+", ",1),R(_("input",{type:"checkbox","onUpdate:modelValue":n=>e.enabled=n,class:"checkbox"},null,8,ot),[[N,e.enabled]])]))),128)),at],64))}}),lt=S(nt,[["__scopeId","data-v-15b23e49"]]),rt={class:"code"},dt={key:0},st={key:1},ct={__name:"PluginSetup",emits:["changed"],setup(r,{expose:f,emit:o}){const u=L([{name:"langZhCN",code:"langZhCN()",val:()=>be(),desc:i("playground.langZhCN"),enabled:!0},{name:"langEn",code:"langEn()",val:()=>ge(),desc:i("playground.langEn"),enabled:!0},{name:"lang",code:"lang({...})",val:()=>ke(),desc:i("playground.lang"),enabled:!1},{name:"overlayScrollbars",code:"overlayScrollbars({...})",val:()=>K(),setup:We,desc:i("playground.overlayScrollbars"),enabled:!0,expand:!1},{name:"affixToolbar",code:"affixToolbar()",val:()=>ye(),desc:i("playground.affixToolbar"),enabled:!0},{name:"autoHeight",code:"autoHeight()",val:()=>xe(),desc:i("playground.affixToolbar"),enabled:!1},{name:"math",code:"math()",val:()=>we(),desc:i("playground.math"),enabled:!0},{name:"tocSpy",code:"tocSpy()",val:()=>Ve(),desc:i("playground.tocSpy"),enabled:!0},{name:"syncScrollbars",code:"syncScrollbars(...)",val:()=>Z(),desc:i("playground.syncScrollbars"),setup:Fe,enabled:!0,expand:!1},{name:"defaultEditorTheme",code:"defaultEditorTheme()",val:()=>Se(),desc:i("playground.defaultEditorTheme"),enabled:!0},{name:"defaultViewerTheme",code:"defaultViewerTheme()",val:()=>Ce(),desc:i("playground.defaultViewerTheme"),enabled:!0},{name:"customCodeBlockRenderer",code:"customCodeBlockRenderer()",val:()=>Y({math:[J],mermaid:[Q],javascript:[X]}),desc:i("playground.customCodeBlockRenderer"),setup:et,enabled:!0},{name:"pasteImage",code:"pasteImage(fnUpload)",val:()=>Ie(e=>URL.createObjectURL(e)),desc:i("playground.pasteImage"),enabled:!0},{name:"markdownItPlugins",code:"markdownItPlugins([...])",val:()=>H([[re],[de],[se],[z],[ce],[ue],[ie],[me],[pe]]),desc:i("playground.markdownItPlugins"),setup:ze,enabled:!0},{name:"markdownItOptions",code:"markdownItOptions({...})",val:()=>$e({}),desc:i("playground.markdownItOptions"),enabled:!0},{name:"codemirrorExt",code:"codemirrorExt({...})",val:()=>le([ee.lineWrapping,te(),oe(),ae(),ne()]),desc:i("playground.codemirrorExt"),setup:lt,enabled:!0},{name:"handleImageClick",code:"handleImageClick(...)",tip:"handleImageClick((imgs, idx) => {\n  alert(`images: [${imgs.map(item => item.src).join(',')}].\nthe index of the image you clicked: ${idx}`)\n})",val:()=>Ee((e,n)=>{alert(`images: [${e.map(k=>k.src).join(",")}].
the index of the image you clicked: ${n}`)}),desc:i("playground.handleImageClick"),enabled:!0},{name:"customLinkAttrs",code:"customLinkAttrs(...)",tip:`customLinkAttrs((attrs) => {
  attrs.target = '_blank'
  attrs.onclick = \`javascript:alert('you are jumping to \${attrs.href}')\`
  return attrs
})`,val:()=>Ue(e=>(e.target="_blank",e.onclick=`javascript:alert('you are jumping to ${e.href}')`,e)),desc:i("playground.customLinkAttrs"),enabled:!0}]);function d(){const e=[];return u.forEach(n=>{n.enabled&&typeof n.val=="function"&&e.push(n.val())}),e}const c=o;return Me(()=>{$(u,()=>{c("changed")},{immediate:!0,deep:!0})}),f({getPlugins:d}),(e,n)=>{const k=m("v-switch"),P=m("v-card-title"),O=m("v-card-subtitle"),q=m("v-spacer"),h=m("v-btn"),b=m("v-card-actions"),y=m("v-divider"),T=m("v-card-text"),B=m("v-card"),F=m("v-col"),G=m("v-row"),x=m("v-container");return l(),U(x,{style:{"max-width":"100%"}},{default:a(()=>[t(G,null,{default:a(()=>[(l(!0),p(g,null,E(u,s=>(l(),U(F,{key:s.name,cols:"4",md:"4",class:"cell"},{default:a(()=>[t(B,{hover:"",class:W({"plugin-expand":s.expand}),onMouseenter:C=>s.expand=!0,onMouseleave:C=>s.expand=!1},{default:a(()=>[t(P,null,{default:a(()=>[v(w(s.name)+" ",1),t(k,{modelValue:s.enabled,"onUpdate:modelValue":C=>s.enabled=C,color:"primary",class:"switch"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),t(O,null,{default:a(()=>[v(w(s.desc),1)]),_:2},1024),t(b,null,{default:a(()=>[_("span",rt,w(s.code),1),t(q),s.setup?(l(),U(h,{key:0,icon:s.expand?I(Be):I(Ne),onClick:C=>s.expand=!s.expand},null,8,["icon","onClick"])):D("",!0)]),_:2},1024),s.setup&&s.expand?(l(),p("div",dt,[t(y),t(T,null,{default:a(()=>[(l(),U(Re(s.setup),{modelValue:s.val,"onUpdate:modelValue":C=>s.val=C},null,8,["modelValue","onUpdate:modelValue"]))]),_:2},1024)])):s.tip&&s.expand?(l(),p("div",st,[t(y),t(T,null,{default:a(()=>[_("pre",null,w(s.tip),1)]),_:2},1024)])):D("",!0)]),_:2},1032,["class","onMouseenter","onMouseleave"])]),_:2},1024))),128))]),_:1})]),_:1})}}},ut=S(ct,[["__scopeId","data-v-44dff95b"]]),it=r=>(A("data-v-9801892d"),r=r(),j(),r),mt={class:"container"},pt={style:{border:"1px solid lightgray","border-radius":"3px",height:"800px"}},_t=it(()=>_("div",{class:"empty"},null,-1)),vt={__name:"index",setup(r){const f=["editor|viewer|toc","editor|viewer","toc|viewer","viewer|toc","viewer","editor"],o=["zh_CN","en"],u=V(null),d=V(Le),c=V("editor|viewer|toc"),e=V(!1),n=V("zh_CN");let k=[];const P=V(1);function O(){console.log("--handlePluginsChanged---"),k=u.value.getPlugins(),console.log(k),P.value+=1}return(q,h)=>{const b=m("v-col"),y=m("v-row"),T=m("v-switch"),B=m("v-select"),F=m("v-divider"),G=m("v-container");return l(),p("div",mt,[t(G,null,{default:a(()=>[t(y,null,{default:a(()=>[t(b,{cols:"12",md:"12"},{default:a(()=>[v("Props:")]),_:1})]),_:1}),t(y,null,{default:a(()=>[t(b,{cols:"4",md:"4"},{default:a(()=>[v(" readonly "),t(T,{modelValue:e.value,"onUpdate:modelValue":h[0]||(h[0]=x=>e.value=x),color:"primary"},null,8,["modelValue"])]),_:1}),t(b,{cols:"4",md:"4"},{default:a(()=>[v(" mode "),t(B,{modelValue:c.value,"onUpdate:modelValue":h[1]||(h[1]=x=>c.value=x),items:f,density:"compact",label:"mode"},null,8,["modelValue"])]),_:1}),t(b,{cols:"4",md:"4"},{default:a(()=>[v(" locale "),t(B,{modelValue:n.value,"onUpdate:modelValue":h[2]||(h[2]=x=>n.value=x),items:o,density:"compact",label:"locale"},null,8,["modelValue"])]),_:1})]),_:1}),t(y,null,{default:a(()=>[t(b,{cols:"12",md:"12"},{default:a(()=>[v("Plugins:")]),_:1})]),_:1}),t(y,null,{default:a(()=>[t(b,{cols:"12",md:"12"},{default:a(()=>[t(ut,{ref_key:"pluginSetupComp",ref:u,onChanged:O},null,512)]),_:1})]),_:1}),t(y,null,{default:a(()=>[t(b,{cols:"12",md:"12"},{default:a(()=>[_("div",pt,[(l(),U(I(Pe),{modelValue:d.value,"onUpdate:modelValue":h[3]||(h[3]=x=>d.value=x),plugins:I(k),mode:c.value,readonly:e.value,locale:n.value,key:P.value},{toolbar:a(()=>[t(I(Ae),{color:"white"}),t(F)]),toc:a(()=>[t(I(Te))]),_:1},8,["modelValue","plugins","mode","readonly","locale"]))])]),_:1})]),_:1}),t(y,null,{default:a(()=>[t(b,{cols:"12",md:"12"},{default:a(()=>[_t]),_:1})]),_:1})]),_:1})])}}},kt=S(vt,[["__scopeId","data-v-9801892d"]]);export{kt as default};