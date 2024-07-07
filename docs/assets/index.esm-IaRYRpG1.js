import{ad as R,ae as Bi,X as s,af as K,r as $,aa as h,ag as nn,ah as Z,w as D,ai as Hi,aj as _e,ak as ze,al as je,g as Nn,a8 as X,am as be,d as Te,Y as ke,an as $i,ao as Ti,ap as Dn,aq as Ga,ar as Je,as as fe,T as jn,at as Za,au as Ka,av as _t,$ as Oi,b as Se,aw as bn,F as ee,ax as wt,ay as Ya,az as yn,aA as Xa,aB as Ja,o as Q,V as Pe,W as F,a as ge,t as he,U as kt,Z as Ie,e as Mi,c as xe,f as dt,ab as Qa,aC as Ct,n as er,ac as nr,aD as we}from"./index-C3ahgl6Q.js";var St=Te({setup(){const n=X("getContext")(),{t}=n.lang;return{t}},data:function(){return{isVisible:!1,form:{url:"",title:""},rules:{urlRequired:e=>!!e||this.t("insertNetworkImageDialog.urlFieldIsEmptyErr"),urlValid:e=>/^(http|https):\/\//.test(e)||this.t("insertNetworkImageDialog.urlFieldIsInvalidErr")}}},methods:{hide(){this.isVisible=!1},open(){this.form.url="",this.form.title="",this.isVisible=!0},async ok(){const{valid:e}=await this.$refs.form.validate();e&&(this.$emit("ok",this.form.url,this.form.title),this.hide())}}});function q(e,n){n===void 0&&(n={});var t=n.insertAt;if(!(!e||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",t==="top"&&i.firstChild?i.insertBefore(a,i.firstChild):i.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}var tr=`.v-btn {
  align-items: center;
  border-radius: 4px;
  display: inline-grid;
  grid-template-areas: "prepend content append";
  grid-template-columns: max-content auto max-content;
  font-weight: 500;
  justify-content: center;
  letter-spacing: 0.0892857143em;
  line-height: normal;
  max-width: 100%;
  outline: none;
  position: relative;
  text-decoration: none;
  text-indent: 0.0892857143em;
  text-transform: uppercase;
  transition-property: box-shadow, transform, opacity, background;
  transition-duration: 0.28s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  vertical-align: middle;
  flex-shrink: 0;
  border-color: rgba(var(--v-border-color), var(--v-border-opacity));
  border-style: solid;
  border-width: 0;
}
.v-btn--size-x-small {
  --v-btn-size: 0.625rem;
  --v-btn-height: 20px;
  font-size: var(--v-btn-size);
  min-width: 36px;
  padding: 0 8px;
}

.v-btn--size-small {
  --v-btn-size: 0.75rem;
  --v-btn-height: 28px;
  font-size: var(--v-btn-size);
  min-width: 50px;
  padding: 0 12px;
}

.v-btn--size-default {
  --v-btn-size: 0.875rem;
  --v-btn-height: 36px;
  font-size: var(--v-btn-size);
  min-width: 64px;
  padding: 0 16px;
}

.v-btn--size-large {
  --v-btn-size: 1rem;
  --v-btn-height: 44px;
  font-size: var(--v-btn-size);
  min-width: 78px;
  padding: 0 20px;
}

.v-btn--size-x-large {
  --v-btn-size: 1.125rem;
  --v-btn-height: 52px;
  font-size: var(--v-btn-size);
  min-width: 92px;
  padding: 0 24px;
}

.v-btn.v-btn--density-default {
  height: calc(var(--v-btn-height) + 0px);
}

.v-btn.v-btn--density-comfortable {
  height: calc(var(--v-btn-height) + -8px);
}

.v-btn.v-btn--density-compact {
  height: calc(var(--v-btn-height) + -12px);
}

.v-btn--border {
  border-width: thin;
  box-shadow: none;
}
.v-btn--absolute {
  position: absolute;
}
.v-btn--fixed {
  position: fixed;
}
.v-btn:hover > .v-btn__overlay {
  opacity: calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier));
}
.v-btn:focus-visible > .v-btn__overlay {
  opacity: calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier));
}
@supports not selector(:focus-visible) {
  .v-btn:focus > .v-btn__overlay {
    opacity: calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier));
  }
}
.v-btn--active > .v-btn__overlay, .v-btn[aria-haspopup=menu][aria-expanded=true] > .v-btn__overlay {
  opacity: calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier));
}
.v-btn--active:hover > .v-btn__overlay, .v-btn[aria-haspopup=menu][aria-expanded=true]:hover > .v-btn__overlay {
  opacity: calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier));
}
.v-btn--active:focus-visible > .v-btn__overlay, .v-btn[aria-haspopup=menu][aria-expanded=true]:focus-visible > .v-btn__overlay {
  opacity: calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier));
}
@supports not selector(:focus-visible) {
  .v-btn--active:focus > .v-btn__overlay, .v-btn[aria-haspopup=menu][aria-expanded=true]:focus > .v-btn__overlay {
    opacity: calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier));
  }
}
.v-btn--variant-plain, .v-btn--variant-outlined, .v-btn--variant-text, .v-btn--variant-tonal {
  background: transparent;
  color: inherit;
}
.v-btn--variant-plain {
  opacity: 0.62;
}
.v-btn--variant-plain:focus, .v-btn--variant-plain:hover {
  opacity: 1;
}
.v-btn--variant-plain .v-btn__overlay {
  display: none;
}
.v-btn--variant-elevated, .v-btn--variant-flat {
  background: rgb(var(--v-theme-surface));
  color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
}
.v-btn--variant-elevated {
  box-shadow: 0px 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 2px 2px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 5px 0px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12));
}
.v-btn--variant-flat {
  box-shadow: 0px 0px 0px 0px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 0px 0px 0px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12));
}
.v-btn--variant-outlined {
  border: thin solid currentColor;
}
.v-btn--variant-text .v-btn__overlay {
  background: currentColor;
}
.v-btn--variant-tonal .v-btn__underlay {
  background: currentColor;
  opacity: var(--v-activated-opacity);
  border-radius: inherit;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.v-btn .v-btn__underlay {
  position: absolute;
}
@supports selector(:focus-visible) {
  .v-btn::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    border: 2px solid currentColor;
    border-radius: inherit;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }
  .v-btn:focus-visible::after {
    opacity: calc(0.25 * var(--v-theme-overlay-multiplier));
  }
}
.v-btn--icon {
  border-radius: 50%;
  min-width: 0;
  padding: 0;
}
.v-btn--icon.v-btn--size-default {
  --v-btn-size: 1rem;
}
.v-btn--icon.v-btn--density-default {
  width: calc(var(--v-btn-height) + 12px);
  height: calc(var(--v-btn-height) + 12px);
}
.v-btn--icon.v-btn--density-comfortable {
  width: calc(var(--v-btn-height) + 0px);
  height: calc(var(--v-btn-height) + 0px);
}
.v-btn--icon.v-btn--density-compact {
  width: calc(var(--v-btn-height) + -8px);
  height: calc(var(--v-btn-height) + -8px);
}

.v-btn--elevated:hover, .v-btn--elevated:focus {
  box-shadow: 0px 2px 4px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 4px 5px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 10px 0px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12));
}
.v-btn--elevated:active {
  box-shadow: 0px 5px 5px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 8px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 3px 14px 2px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12));
}
.v-btn--flat {
  box-shadow: none;
}
.v-btn--block {
  display: flex;
  flex: 1 0 auto;
  min-width: 100%;
}
.v-btn--disabled {
  pointer-events: none;
  opacity: 0.26;
}
.v-btn--disabled:hover {
  opacity: 0.26;
}
.v-btn--disabled.v-btn--variant-elevated, .v-btn--disabled.v-btn--variant-flat {
  box-shadow: none;
  opacity: 1;
  color: rgba(var(--v-theme-on-surface), 0.26);
  background: rgb(var(--v-theme-surface));
}
.v-btn--disabled.v-btn--variant-elevated .v-btn__overlay, .v-btn--disabled.v-btn--variant-flat .v-btn__overlay {
  opacity: 0.4615384615;
}
.v-btn--loading {
  pointer-events: none;
}
.v-btn--loading .v-btn__content,
.v-btn--loading .v-btn__prepend,
.v-btn--loading .v-btn__append {
  opacity: 0;
}
.v-btn--stacked {
  grid-template-areas: "prepend" "content" "append";
  grid-template-columns: auto;
  grid-template-rows: max-content max-content max-content;
  justify-items: center;
  align-content: center;
}
.v-btn--stacked .v-btn__content {
  flex-direction: column;
  line-height: 1.25;
}
.v-btn--stacked .v-btn__prepend,
.v-btn--stacked .v-btn__append,
.v-btn--stacked .v-btn__content > .v-icon--start,
.v-btn--stacked .v-btn__content > .v-icon--end {
  margin-inline: 0;
}
.v-btn--stacked .v-btn__prepend,
.v-btn--stacked .v-btn__content > .v-icon--start {
  margin-bottom: 4px;
}
.v-btn--stacked .v-btn__append,
.v-btn--stacked .v-btn__content > .v-icon--end {
  margin-top: 4px;
}
.v-btn--stacked.v-btn--size-x-small {
  --v-btn-size: 0.625rem;
  --v-btn-height: 56px;
  font-size: var(--v-btn-size);
  min-width: 56px;
  padding: 0 12px;
}

.v-btn--stacked.v-btn--size-small {
  --v-btn-size: 0.75rem;
  --v-btn-height: 64px;
  font-size: var(--v-btn-size);
  min-width: 64px;
  padding: 0 14px;
}

.v-btn--stacked.v-btn--size-default {
  --v-btn-size: 0.875rem;
  --v-btn-height: 72px;
  font-size: var(--v-btn-size);
  min-width: 72px;
  padding: 0 16px;
}

.v-btn--stacked.v-btn--size-large {
  --v-btn-size: 1rem;
  --v-btn-height: 80px;
  font-size: var(--v-btn-size);
  min-width: 80px;
  padding: 0 18px;
}

.v-btn--stacked.v-btn--size-x-large {
  --v-btn-size: 1.125rem;
  --v-btn-height: 88px;
  font-size: var(--v-btn-size);
  min-width: 88px;
  padding: 0 20px;
}

.v-btn--stacked.v-btn--density-default {
  height: calc(var(--v-btn-height) + 0px);
}

.v-btn--stacked.v-btn--density-comfortable {
  height: calc(var(--v-btn-height) + -16px);
}

.v-btn--stacked.v-btn--density-compact {
  height: calc(var(--v-btn-height) + -24px);
}

.v-btn--slim {
  padding: 0 8px;
}
.v-btn--readonly {
  pointer-events: none;
}
.v-btn--rounded {
  border-radius: 24px;
}
.v-btn--rounded.v-btn--icon {
  border-radius: 4px;
}
.v-btn .v-icon {
  --v-icon-size-multiplier: 0.8571428571;
}
.v-btn--icon .v-icon {
  --v-icon-size-multiplier: 1;
}
.v-btn--stacked .v-icon {
  --v-icon-size-multiplier: 1.1428571429;
}

.v-btn__loader {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
.v-btn__loader > .v-progress-circular {
  width: 1.5em;
  height: 1.5em;
}

.v-btn__content,
.v-btn__prepend,
.v-btn__append {
  align-items: center;
  display: flex;
  transition: transform, opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.v-btn__prepend {
  grid-area: prepend;
  margin-inline: calc(var(--v-btn-height) / -9) calc(var(--v-btn-height) / 4.5);
}
.v-btn--slim .v-btn__prepend {
  margin-inline-start: 0;
}

.v-btn__append {
  grid-area: append;
  margin-inline: calc(var(--v-btn-height) / 4.5) calc(var(--v-btn-height) / -9);
}
.v-btn--slim .v-btn__append {
  margin-inline-end: 0;
}

.v-btn__content {
  grid-area: content;
  justify-content: center;
  white-space: nowrap;
}
.v-btn__content > .v-icon--start {
  margin-inline: calc(var(--v-btn-height) / -9) calc(var(--v-btn-height) / 4.5);
}
.v-btn__content > .v-icon--end {
  margin-inline: calc(var(--v-btn-height) / 4.5) calc(var(--v-btn-height) / -9);
}
.v-btn--stacked .v-btn__content {
  white-space: normal;
}

.v-btn__overlay {
  background-color: currentColor;
  border-radius: inherit;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}

.v-btn__overlay,
.v-btn__underlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.v-card-actions .v-btn ~ .v-btn:not(.v-btn-toggle .v-btn) {
  margin-inline-start: 0.5rem;
}

.v-pagination .v-btn {
  border-radius: 4px;
}
.v-pagination .v-btn--rounded {
  border-radius: 50%;
}
.v-btn__overlay {
  transition: none;
}
.v-pagination__item--is-active .v-btn__overlay {
  opacity: var(--v-border-opacity);
}`;q(tr);var ir=`.v-btn-toggle > .v-btn.v-btn--active:not(.v-btn--disabled) > .v-btn__overlay {
  opacity: calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier));
}
.v-btn-toggle > .v-btn.v-btn--active:not(.v-btn--disabled):hover > .v-btn__overlay {
  opacity: calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier));
}
.v-btn-toggle > .v-btn.v-btn--active:not(.v-btn--disabled):focus-visible > .v-btn__overlay {
  opacity: calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier));
}
@supports not selector(:focus-visible) {
  .v-btn-toggle > .v-btn.v-btn--active:not(.v-btn--disabled):focus > .v-btn__overlay {
    opacity: calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier));
  }
}`;q(ir);var ar=`.v-btn-group {
  display: inline-flex;
  flex-wrap: nowrap;
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
  vertical-align: middle;
  border-color: rgba(var(--v-border-color), var(--v-border-opacity));
  border-style: solid;
  border-width: 0;
  box-shadow: 0px 0px 0px 0px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 0px 0px 0px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12));
  border-radius: 4px;
  background: transparent;
  color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
}
.v-btn-group--border {
  border-width: thin;
  box-shadow: none;
}
.v-btn-group--density-default.v-btn-group {
  height: 48px;
}

.v-btn-group--density-comfortable.v-btn-group {
  height: 40px;
}

.v-btn-group--density-compact.v-btn-group {
  height: 36px;
}

.v-btn-group .v-btn {
  border-radius: 0;
  border-color: inherit;
}
.v-btn-group .v-btn:not(:last-child) {
  border-inline-end: none;
}
.v-btn-group .v-btn:not(:first-child) {
  border-inline-start: none;
}
.v-btn-group .v-btn:first-child {
  border-start-start-radius: inherit;
  border-end-start-radius: inherit;
}
.v-btn-group .v-btn:last-child {
  border-start-end-radius: inherit;
  border-end-end-radius: inherit;
}
.v-btn-group--divided .v-btn:not(:last-child) {
  border-inline-end-width: thin;
  border-inline-end-style: solid;
  border-inline-end-color: rgba(var(--v-border-color), var(--v-border-opacity));
}
.v-btn-group--tile {
  border-radius: 0;
}`;q(ar);const me=typeof window<"u",Vt=me&&"IntersectionObserver"in window;function Fi(e,n,t){const i=n.length-1;if(i<0)return e===void 0?t:e;for(let a=0;a<i;a++){if(e==null)return t;e=e[n[a]]}return e==null||e[n[i]]===void 0?t:e[n[i]]}function Wn(e,n){if(e===n)return!0;if(e instanceof Date&&n instanceof Date&&e.getTime()!==n.getTime()||e!==Object(e)||n!==Object(n))return!1;const t=Object.keys(e);return t.length!==Object.keys(n).length?!1:t.every(i=>Wn(e[i],n[i]))}function rr(e,n,t){return e==null||!n||typeof n!="string"?t:e[n]!==void 0?e[n]:(n=n.replace(/\[(\w+)\]/g,".$1"),n=n.replace(/^\./,""),Fi(e,n.split("."),t))}function dn(e,n,t){if(n===!0)return e===void 0?t:e;if(n==null||typeof n=="boolean")return t;if(e!==Object(e)){if(typeof n!="function")return t;const a=n(e,t);return typeof a>"u"?t:a}if(typeof n=="string")return rr(e,n,t);if(Array.isArray(n))return Fi(e,n,t);if(typeof n!="function")return t;const i=n(e,t);return typeof i>"u"?t:i}function H(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(e==null||e===""))return isNaN(+e)?String(e):isFinite(+e)?`${Number(e)}${n}`:void 0}function ct(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function lr(e){if(e&&"$el"in e){const n=e.$el;return(n==null?void 0:n.nodeType)===Node.TEXT_NODE?n.nextElementSibling:n}return e}const Qt=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function nt(e,n){return n.every(t=>e.hasOwnProperty(t))}function Ri(e,n){const t={},i=new Set(Object.keys(e));for(const a of n)i.has(a)&&(t[a]=e[a]);return t}function ei(e,n,t){const i=Object.create(null),a=Object.create(null);for(const r in e)n.some(l=>l instanceof RegExp?l.test(r):l===r)&&!(t!=null&&t.some(l=>l===r))?i[r]=e[r]:a[r]=e[r];return[i,a]}function Un(e,n){const t={...e};return n.forEach(i=>delete t[i]),t}function or(e,n){const t={};return n.forEach(i=>t[i]=e[i]),t}const Ni=/^on[^a-z]/,Lt=e=>Ni.test(e),sr=["onAfterscriptexecute","onAnimationcancel","onAnimationend","onAnimationiteration","onAnimationstart","onAuxclick","onBeforeinput","onBeforescriptexecute","onChange","onClick","onCompositionend","onCompositionstart","onCompositionupdate","onContextmenu","onCopy","onCut","onDblclick","onFocusin","onFocusout","onFullscreenchange","onFullscreenerror","onGesturechange","onGestureend","onGesturestart","onGotpointercapture","onInput","onKeydown","onKeypress","onKeyup","onLostpointercapture","onMousedown","onMousemove","onMouseout","onMouseover","onMouseup","onMousewheel","onPaste","onPointercancel","onPointerdown","onPointerenter","onPointerleave","onPointermove","onPointerout","onPointerover","onPointerup","onReset","onSelect","onSubmit","onTouchcancel","onTouchend","onTouchmove","onTouchstart","onTransitioncancel","onTransitionend","onTransitionrun","onTransitionstart","onWheel"];function dr(e){const[n,t]=ei(e,[Ni]),i=Un(n,sr),[a,r]=ei(t,["class","style","id",/^data-/]);return Object.assign(a,n),Object.assign(r,i),[a,r]}function Re(e){return e==null?[]:Array.isArray(e)?e:[e]}function In(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(n,Math.min(t,e))}function ni(e,n){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return e+t.repeat(Math.max(0,n-e.length))}function cr(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const t=[];let i=0;for(;i<e.length;)t.push(e.substr(i,n)),i+=n;return t}function Ye(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0;const i={};for(const a in e)i[a]=e[a];for(const a in n){const r=e[a],l=n[a];if(ct(r)&&ct(l)){i[a]=Ye(r,l,t);continue}if(Array.isArray(r)&&Array.isArray(l)&&t){i[a]=t(r,l);continue}i[a]=l}return i}function Di(e){return e.map(n=>n.type===ee?Di(n.children):n).flat()}function Ne(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(Ne.cache.has(e))return Ne.cache.get(e);const n=e.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return Ne.cache.set(e,n),n}Ne.cache=new Map;function un(e,n){if(!n||typeof n!="object")return[];if(Array.isArray(n))return n.map(t=>un(e,t)).flat(1);if(n.suspense)return un(e,n.ssContent);if(Array.isArray(n.children))return n.children.map(t=>un(e,t)).flat(1);if(n.component){if(Object.getOwnPropertySymbols(n.component.provides).includes(e))return[n.component];if(n.component.subTree)return un(e,n.component.subTree).flat(1)}return[]}function At(e){const n=Nn({}),t=h(e);return nn(()=>{for(const i in t.value)n[i]=t.value[i]},{flush:"sync"}),Bi(n)}function Pn(e,n){return e.includes(n)}function ji(e){return e[2].toLowerCase()+e.slice(3)}const Ee=()=>[Function,Array];function ti(e,n){return n="on"+$i(n),!!(e[n]||e[`${n}Once`]||e[`${n}Capture`]||e[`${n}OnceCapture`]||e[`${n}CaptureOnce`])}function ur(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),i=1;i<n;i++)t[i-1]=arguments[i];if(Array.isArray(e))for(const a of e)a(...t);else typeof e=="function"&&e(...t)}function En(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const t=["button","[href]",'input:not([type="hidden"])',"select","textarea","[tabindex]"].map(i=>`${i}${n?':not([tabindex="-1"])':""}:not([disabled])`).join(", ");return[...e.querySelectorAll(t)]}function Wi(e,n,t){let i,a=e.indexOf(document.activeElement);const r=n==="next"?1:-1;do a+=r,i=e[a];while((!i||i.offsetParent==null||!((t==null?void 0:t(i))??!0))&&a<e.length&&a>=0);return i}function zn(e,n){var i,a,r,l;const t=En(e);if(!n)(e===document.activeElement||!e.contains(document.activeElement))&&((i=t[0])==null||i.focus());else if(n==="first")(a=t[0])==null||a.focus();else if(n==="last")(r=t.at(-1))==null||r.focus();else if(typeof n=="number")(l=t[n])==null||l.focus();else{const o=Wi(t,n);o?o.focus():zn(e,n==="next"?"first":"last")}}function vr(e,n){if(!(me&&typeof CSS<"u"&&typeof CSS.supports<"u"&&CSS.supports(`selector(${n})`)))return null;try{return!!e&&e.matches(n)}catch{return null}}function fr(e,n){if(!me||e===0)return n(),()=>{};const t=window.setTimeout(n,e);return()=>window.clearTimeout(t)}function mr(e,n){const t=e.clientX,i=e.clientY,a=n.getBoundingClientRect(),r=a.left,l=a.top,o=a.right,c=a.bottom;return t>=r&&t<=o&&i>=l&&i<=c}function ut(){const e=Z(),n=t=>{e.value=t};return Object.defineProperty(n,"value",{enumerable:!0,get:()=>e.value,set:t=>e.value=t}),Object.defineProperty(n,"el",{enumerable:!0,get:()=>lr(e.value)}),n}const Ui=["top","bottom"],pr=["start","end","left","right"];function vt(e,n){let[t,i]=e.split(" ");return i||(i=Pn(Ui,t)?"start":Pn(pr,t)?"top":"center"),{side:ii(t,n),align:ii(i,n)}}function ii(e,n){return e==="start"?n?"right":"left":e==="end"?n?"left":"right":e}function tt(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function it(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function ai(e){return{side:e.align,align:e.side}}function ri(e){return Pn(Ui,e.side)?"y":"x"}class De{constructor(n){let{x:t,y:i,width:a,height:r}=n;this.x=t,this.y=i,this.width=a,this.height=r}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function li(e,n){return{x:{before:Math.max(0,n.left-e.left),after:Math.max(0,e.right-n.right)},y:{before:Math.max(0,n.top-e.top),after:Math.max(0,e.bottom-n.bottom)}}}function qi(e){return Array.isArray(e)?new De({x:e[0],y:e[1],width:0,height:0}):e.getBoundingClientRect()}function It(e){const n=e.getBoundingClientRect(),t=getComputedStyle(e),i=t.transform;if(i){let a,r,l,o,c;if(i.startsWith("matrix3d("))a=i.slice(9,-1).split(/, /),r=+a[0],l=+a[5],o=+a[12],c=+a[13];else if(i.startsWith("matrix("))a=i.slice(7,-1).split(/, /),r=+a[0],l=+a[3],o=+a[4],c=+a[5];else return new De(n);const u=t.transformOrigin,f=n.x-o-(1-r)*parseFloat(u),m=n.y-c-(1-l)*parseFloat(u.slice(u.indexOf(" ")+1)),p=r?n.width/r:e.offsetWidth+1,d=l?n.height/l:e.offsetHeight+1;return new De({x:f,y:m,width:p,height:d})}else return new De(n)}function Xe(e,n,t){if(typeof e.animate>"u")return{finished:Promise.resolve()};let i;try{i=e.animate(n,t)}catch{return{finished:Promise.resolve()}}return typeof i.finished>"u"&&(i.finished=new Promise(a=>{i.onfinish=()=>{a(i)}})),i}const Vn=new WeakMap;function gr(e,n){Object.keys(n).forEach(t=>{if(Lt(t)){const i=ji(t),a=Vn.get(e);if(n[t]==null)a==null||a.forEach(r=>{const[l,o]=r;l===i&&(e.removeEventListener(i,o),a.delete(r))});else if(!a||![...a].some(r=>r[0]===i&&r[1]===n[t])){e.addEventListener(i,n[t]);const r=a||new Set;r.add([i,n[t]]),Vn.has(e)||Vn.set(e,r)}}else n[t]==null?e.removeAttribute(t):e.setAttribute(t,n[t])})}function hr(e,n){Object.keys(n).forEach(t=>{if(Lt(t)){const i=ji(t),a=Vn.get(e);a==null||a.forEach(r=>{const[l,o]=r;l===i&&(e.removeEventListener(i,o),a.delete(r))})}else e.removeAttribute(t)})}const Ke=2.4,oi=.2126729,si=.7151522,di=.072175,br=.55,yr=.58,xr=.57,_r=.62,kn=.03,ci=1.45,wr=5e-4,kr=1.25,Cr=1.25,ui=.078,vi=12.82051282051282,Cn=.06,fi=.001;function mi(e,n){const t=(e.r/255)**Ke,i=(e.g/255)**Ke,a=(e.b/255)**Ke,r=(n.r/255)**Ke,l=(n.g/255)**Ke,o=(n.b/255)**Ke;let c=t*oi+i*si+a*di,u=r*oi+l*si+o*di;if(c<=kn&&(c+=(kn-c)**ci),u<=kn&&(u+=(kn-u)**ci),Math.abs(u-c)<wr)return 0;let f;if(u>c){const m=(u**br-c**yr)*kr;f=m<fi?0:m<ui?m-m*vi*Cn:m-Cn}else{const m=(u**_r-c**xr)*Cr;f=m>-fi?0:m>-ui?m-m*vi*Cn:m+Cn}return f*100}function Sr(e,n){n=Array.isArray(n)?n.slice(0,-1).map(t=>`'${t}'`).join(", ")+` or '${n.at(-1)}'`:`'${n}'`}function ft(e){return!!e&&/^(#|var\(--|(rgb|hsl)a?\()/.test(e)}function Vr(e){return ft(e)&&!/^((rgb|hsl)a?\()?var\(--/.test(e)}const pi=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,Lr={rgb:(e,n,t,i)=>({r:e,g:n,b:t,a:i}),rgba:(e,n,t,i)=>({r:e,g:n,b:t,a:i}),hsl:(e,n,t,i)=>gi({h:e,s:n,l:t,a:i}),hsla:(e,n,t,i)=>gi({h:e,s:n,l:t,a:i}),hsv:(e,n,t,i)=>fn({h:e,s:n,v:t,a:i}),hsva:(e,n,t,i)=>fn({h:e,s:n,v:t,a:i})};function vn(e){if(typeof e=="number")return{r:(e&16711680)>>16,g:(e&65280)>>8,b:e&255};if(typeof e=="string"&&pi.test(e)){const{groups:n}=e.match(pi),{fn:t,values:i}=n,a=i.split(/,\s*/).map(r=>r.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(t)?parseFloat(r)/100:parseFloat(r));return Lr[t](...a)}else if(typeof e=="string"){let n=e.startsWith("#")?e.slice(1):e;return[3,4].includes(n.length)?n=n.split("").map(t=>t+t).join(""):[6,8].includes(n.length),Ar(n)}else if(typeof e=="object"){if(nt(e,["r","g","b"]))return e;if(nt(e,["h","s","l"]))return fn(Gi(e));if(nt(e,["h","s","v"]))return fn(e)}throw new TypeError(`Invalid color: ${e==null?e:String(e)||e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function fn(e){const{h:n,s:t,v:i,a}=e,r=o=>{const c=(o+n/60)%6;return i-i*t*Math.max(Math.min(c,4-c,1),0)},l=[r(5),r(3),r(1)].map(o=>Math.round(o*255));return{r:l[0],g:l[1],b:l[2],a}}function gi(e){return fn(Gi(e))}function Gi(e){const{h:n,s:t,l:i,a}=e,r=i+t*Math.min(i,1-i),l=r===0?0:2-2*i/r;return{h:n,s:l,v:r,a}}function Ar(e){e=Ir(e);let[n,t,i,a]=cr(e,2).map(r=>parseInt(r,16));return a=a===void 0?a:a/255,{r:n,g:t,b:i,a}}function Ir(e){return e.startsWith("#")&&(e=e.slice(1)),e=e.replace(/([^0-9a-f])/gi,"F"),(e.length===3||e.length===4)&&(e=e.split("").map(n=>n+n).join("")),e.length!==6&&(e=ni(ni(e,6),8,"F")),e}function Pr(e){const n=Math.abs(mi(vn(0),vn(e)));return Math.abs(mi(vn(16777215),vn(e)))>Math.min(n,50)?"#fff":"#000"}function V(e,n){return t=>Object.keys(e).reduce((i,a)=>{const l=typeof e[a]=="object"&&e[a]!=null&&!Array.isArray(e[a])?e[a]:{type:e[a]};return t&&a in t?i[a]={...l,default:t[a]}:i[a]=l,n&&!i[a].source&&(i[a].source=n),i},{})}const U=V({class:[String,Array,Object],style:{type:[String,Array,Object],default:null}},"component"),Bn=Symbol.for("vuetify:defaults");function Pt(){const e=X(Bn);if(!e)throw new Error("[Vuetify] Could not find defaults instance");return e}function xn(e,n){const t=Pt(),i=$(e),a=h(()=>{if(ke(n==null?void 0:n.disabled))return t.value;const l=ke(n==null?void 0:n.scoped),o=ke(n==null?void 0:n.reset),c=ke(n==null?void 0:n.root);if(i.value==null&&!(l||o||c))return t.value;let u=Ye(i.value,{prev:t.value});if(l)return u;if(o||c){const f=Number(o||1/0);for(let m=0;m<=f&&!(!u||!("prev"in u));m++)u=u.prev;return u&&typeof c=="string"&&c in u&&(u=Ye(Ye(u,{prev:u}),u[c])),u}return u.prev?Ye(u.prev,u):u});return be(Bn,a),a}function Er(e,n){var t,i;return typeof((t=e.props)==null?void 0:t[n])<"u"||typeof((i=e.props)==null?void 0:i[Ne(n)])<"u"}function zr(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Pt();const i=ie("useDefaults");if(n=n??i.type.name??i.type.__name,!n)throw new Error("[Vuetify] Could not determine component name");const a=h(()=>{var c;return(c=t.value)==null?void 0:c[e._as??n]}),r=new Proxy(e,{get(c,u){var m,p,d,g,v,b,y;const f=Reflect.get(c,u);return u==="class"||u==="style"?[(m=a.value)==null?void 0:m[u],f].filter(C=>C!=null):typeof u=="string"&&!Er(i.vnode,u)?((p=a.value)==null?void 0:p[u])!==void 0?(d=a.value)==null?void 0:d[u]:((v=(g=t.value)==null?void 0:g.global)==null?void 0:v[u])!==void 0?(y=(b=t.value)==null?void 0:b.global)==null?void 0:y[u]:f:f}}),l=Z();nn(()=>{if(a.value){const c=Object.entries(a.value).filter(u=>{let[f]=u;return f.startsWith(f[0].toUpperCase())});l.value=c.length?Object.fromEntries(c):void 0}else l.value=void 0});function o(){const c=Or(Bn,i);be(Bn,h(()=>l.value?Ye((c==null?void 0:c.value)??{},l.value):c==null?void 0:c.value))}return{props:r,provideSubDefaults:o}}function _n(e){if(e._setup=e._setup??e.setup,!e.name)return e;if(e._setup){e.props=V(e.props??{},e.name)();const n=Object.keys(e.props).filter(t=>t!=="class"&&t!=="style");e.filterProps=function(i){return Ri(i,n)},e.props._as=String,e.setup=function(i,a){const r=Pt();if(!r.value)return e._setup(i,a);const{props:l,provideSubDefaults:o}=zr(i,i._as??e.name,r),c=e._setup(l,a);return o(),c}}return e}function z(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return n=>(e?_n:Te)(n)}function Et(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return z()({name:t??$i(Ti(e.replace(/__/g,"-"))),props:{tag:{type:String,default:n},...U()},setup(i,a){let{slots:r}=a;return()=>{var l;return Dn(i.tag,{class:[e,i.class],style:i.style},(l=r.default)==null?void 0:l.call(r))}}})}function Zi(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}const Hn="cubic-bezier(0.4, 0, 0.2, 1)",Br="cubic-bezier(0.0, 0, 0.2, 1)",Hr="cubic-bezier(0.4, 0, 1, 1)";function ie(e,n){const t=Ga();if(!t)throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);return t}function Ve(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const n=ie(e).type;return Ne((n==null?void 0:n.aliasName)||(n==null?void 0:n.name))}let Ki=0,Ln=new WeakMap;function Oe(){const e=ie("getUid");if(Ln.has(e))return Ln.get(e);{const n=Ki++;return Ln.set(e,n),n}}Oe.reset=()=>{Ki=0,Ln=new WeakMap};function $r(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(n?Tr(e):zt(e))return e;e=e.parentElement}return document.scrollingElement}function $n(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(zt(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function zt(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function Tr(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return["scroll","auto"].includes(n.overflowY)}function Or(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ie("injectSelf");const{provides:t}=n;if(t&&e in t)return t[e]}function Mr(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}function N(e){const n=ie("useRender");n.render=e}const tn=V({border:[Boolean,Number,String]},"border");function an(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ve();return{borderClasses:h(()=>{const i=Je(e)?e.value:e.border,a=[];if(i===!0||i==="")a.push(`${n}--border`);else if(typeof i=="string"||i===0)for(const r of String(i).split(" "))a.push(`border-${r}`);return a})}}const Fr=[null,"default","comfortable","compact"],Me=V({density:{type:String,default:"default",validator:e=>Fr.includes(e)}},"density");function We(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ve();return{densityClasses:h(()=>`${n}--density-${e.density}`)}}const rn=V({elevation:{type:[Number,String],validator(e){const n=parseInt(e);return!isNaN(n)&&n>=0&&n<=24}}},"elevation");function ln(e){return{elevationClasses:h(()=>{const t=Je(e)?e.value:e.elevation,i=[];return t==null||i.push(`elevation-${t}`),i})}}const Le=V({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function Ae(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ve();return{roundedClasses:h(()=>{const i=Je(e)?e.value:e.rounded,a=Je(e)?e.value:e.tile,r=[];if(i===!0||i==="")r.push(`${n}--rounded`);else if(typeof i=="string"||i===0)for(const l of String(i).split(" "))r.push(`rounded-${l}`);else(a||i===!1)&&r.push("rounded-0");return r})}}const re=V({tag:{type:String,default:"div"}},"tag"),hi=Symbol.for("vuetify:theme"),se=V({theme:String},"theme");function ce(e){ie("provideTheme");const n=X(hi,null);if(!n)throw new Error("Could not find Vuetify theme injection");const t=h(()=>e.theme??n.name.value),i=h(()=>n.themes.value[t.value]),a=h(()=>n.isDisabled?void 0:`v-theme--${t.value}`),r={...n,name:t,current:i,themeClasses:a};return be(hi,r),r}function Bt(e){return At(()=>{const n=[],t={};if(e.value.background)if(ft(e.value.background)){if(t.backgroundColor=e.value.background,!e.value.text&&Vr(e.value.background)){const i=vn(e.value.background);if(i.a==null||i.a===1){const a=Pr(i);t.color=a,t.caretColor=a}}}else n.push(`bg-${e.value.background}`);return e.value.text&&(ft(e.value.text)?(t.color=e.value.text,t.caretColor=e.value.text):n.push(`text-${e.value.text}`)),{colorClasses:n,colorStyles:t}})}function $e(e,n){const t=h(()=>({text:Je(e)?e.value:n?e[n]:null})),{colorClasses:i,colorStyles:a}=Bt(t);return{textColorClasses:i,textColorStyles:a}}function He(e,n){const t=h(()=>({background:Je(e)?e.value:n?e[n]:null})),{colorClasses:i,colorStyles:a}=Bt(t);return{backgroundColorClasses:i,backgroundColorStyles:a}}const Rr=["elevated","flat","tonal","outlined","text","plain"];function qn(e,n){return s(ee,null,[e&&s("span",{key:"overlay",class:`${n}__overlay`},null),s("span",{key:"underlay",class:`${n}__underlay`},null)])}const on=V({color:String,variant:{type:String,default:"elevated",validator:e=>Rr.includes(e)}},"variant");function Gn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ve();const t=h(()=>{const{variant:r}=ke(e);return`${n}--variant-${r}`}),{colorClasses:i,colorStyles:a}=Bt(h(()=>{const{variant:r,color:l}=ke(e);return{[["elevated","flat"].includes(r)?"background":"text"]:l}}));return{colorClasses:i,colorStyles:a,variantClasses:t}}const Yi=V({baseColor:String,divided:Boolean,...tn(),...U(),...Me(),...rn(),...Le(),...re(),...se(),...on()},"VBtnGroup"),bi=z()({name:"VBtnGroup",props:Yi(),setup(e,n){let{slots:t}=n;const{themeClasses:i}=ce(e),{densityClasses:a}=We(e),{borderClasses:r}=an(e),{elevationClasses:l}=ln(e),{roundedClasses:o}=Ae(e);xn({VBtn:{height:"auto",baseColor:R(e,"baseColor"),color:R(e,"color"),density:R(e,"density"),flat:!0,variant:R(e,"variant")}}),N(()=>s(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},i.value,r.value,a.value,l.value,o.value,e.class],style:e.style},t))}});function Qe(e,n){let t;function i(){t=Ct(),t.run(()=>n.length?n(()=>{t==null||t.stop(),i()}):n())}D(e,a=>{a&&!t?i():a||(t==null||t.stop(),t=void 0)},{immediate:!0}),we(()=>{t==null||t.stop()})}function ve(e,n,t){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:m=>m,a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:m=>m;const r=ie("useProxiedModel"),l=$(e[n]!==void 0?e[n]:t),o=Ne(n),u=o!==n?h(()=>{var m,p,d,g;return e[n],!!(((m=r.vnode.props)!=null&&m.hasOwnProperty(n)||(p=r.vnode.props)!=null&&p.hasOwnProperty(o))&&((d=r.vnode.props)!=null&&d.hasOwnProperty(`onUpdate:${n}`)||(g=r.vnode.props)!=null&&g.hasOwnProperty(`onUpdate:${o}`)))}):h(()=>{var m,p;return e[n],!!((m=r.vnode.props)!=null&&m.hasOwnProperty(n)&&((p=r.vnode.props)!=null&&p.hasOwnProperty(`onUpdate:${n}`)))});Qe(()=>!u.value,()=>{D(()=>e[n],m=>{l.value=m})});const f=h({get(){const m=e[n];return i(u.value?m:l.value)},set(m){const p=a(m),d=fe(u.value?e[n]:l.value);d===p||i(d)===m||(l.value=p,r==null||r.emit(`update:${n}`,p))}});return Object.defineProperty(f,"externalValue",{get:()=>u.value?e[n]:l.value}),f}const Nr=V({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Dr=V({value:null,disabled:Boolean,selectedClass:String},"group-item");function jr(e,n){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const i=ie("useGroupItem");if(!i)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const a=Oe();be(Symbol.for(`${n.description}:id`),a);const r=X(n,null);if(!r){if(!t)return r;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${n.description}`)}const l=R(e,"value"),o=h(()=>!!(r.disabled.value||e.disabled));r.register({id:a,value:l,disabled:o},i),ze(()=>{r.unregister(a)});const c=h(()=>r.isSelected(a)),u=h(()=>r.items.value[0].id===a),f=h(()=>r.items.value[r.items.value.length-1].id===a),m=h(()=>c.value&&[r.selectedClass.value,e.selectedClass]);return D(c,p=>{i.emit("group:selected",{value:p})},{flush:"sync"}),{id:a,isSelected:c,isFirst:u,isLast:f,toggle:()=>r.select(a,!c.value),select:p=>r.select(a,p),selectedClass:m,value:l,disabled:o,group:r}}function Wr(e,n){let t=!1;const i=Nn([]),a=ve(e,"modelValue",[],p=>p==null?[]:Xi(i,Re(p)),p=>{const d=qr(i,p);return e.multiple?d:d[0]}),r=ie("useGroup");function l(p,d){const g=p,v=Symbol.for(`${n.description}:id`),y=un(v,r==null?void 0:r.vnode).indexOf(d);ke(g.value)==null&&(g.value=y,g.useIndexAsValue=!0),y>-1?i.splice(y,0,g):i.push(g)}function o(p){if(t)return;c();const d=i.findIndex(g=>g.id===p);i.splice(d,1)}function c(){const p=i.find(d=>!d.disabled);p&&e.mandatory==="force"&&!a.value.length&&(a.value=[p.id])}jn(()=>{c()}),ze(()=>{t=!0}),Za(()=>{for(let p=0;p<i.length;p++)i[p].useIndexAsValue&&(i[p].value=p)});function u(p,d){const g=i.find(v=>v.id===p);if(!(d&&(g!=null&&g.disabled)))if(e.multiple){const v=a.value.slice(),b=v.findIndex(C=>C===p),y=~b;if(d=d??!y,y&&e.mandatory&&v.length<=1||!y&&e.max!=null&&v.length+1>e.max)return;b<0&&d?v.push(p):b>=0&&!d&&v.splice(b,1),a.value=v}else{const v=a.value.includes(p);if(e.mandatory&&v)return;a.value=d??!v?[p]:[]}}function f(p){if(e.multiple,a.value.length){const d=a.value[0],g=i.findIndex(y=>y.id===d);let v=(g+p)%i.length,b=i[v];for(;b.disabled&&v!==g;)v=(v+p)%i.length,b=i[v];if(b.disabled)return;a.value=[i[v].id]}else{const d=i.find(g=>!g.disabled);d&&(a.value=[d.id])}}const m={register:l,unregister:o,selected:a,select:u,disabled:R(e,"disabled"),prev:()=>f(i.length-1),next:()=>f(1),isSelected:p=>a.value.includes(p),selectedClass:h(()=>e.selectedClass),items:h(()=>i),getItemIndex:p=>Ur(i,p)};return be(n,m),m}function Ur(e,n){const t=Xi(e,[n]);return t.length?e.findIndex(i=>i.id===t[0]):-1}function Xi(e,n){const t=[];return n.forEach(i=>{const a=e.find(l=>Wn(i,l.value)),r=e[i];(a==null?void 0:a.value)!=null?t.push(a.id):r!=null&&t.push(r.id)}),t}function qr(e,n){const t=[];return n.forEach(i=>{const a=e.findIndex(r=>r.id===i);if(~a){const r=e[a];t.push(r.value!=null?r.value:a)}}),t}const Ji=Symbol.for("vuetify:v-btn-toggle"),Gr=V({...Yi(),...Nr()},"VBtnToggle");z()({name:"VBtnToggle",props:Gr(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const{isSelected:i,next:a,prev:r,select:l,selected:o}=Wr(e,Ji);return N(()=>{const c=bi.filterProps(e);return s(bi,K({class:["v-btn-toggle",e.class]},c,{style:e.style}),{default:()=>{var u;return[(u=t.default)==null?void 0:u.call(t,{isSelected:i,next:a,prev:r,select:l,selected:o})]}})}),{next:a,prev:r,select:l}}});const Zr=V({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),ae=z(!1)({name:"VDefaultsProvider",props:Zr(),setup(e,n){let{slots:t}=n;const{defaults:i,disabled:a,reset:r,root:l,scoped:o}=Bi(e);return xn(i,{reset:r,root:l,scoped:o,disabled:a}),()=>{var c;return(c=t.default)==null?void 0:c.call(t)}}});var Kr=`.v-icon {
  --v-icon-size-multiplier: 1;
  align-items: center;
  display: inline-flex;
  font-feature-settings: "liga";
  height: 1em;
  justify-content: center;
  letter-spacing: normal;
  line-height: 1;
  position: relative;
  text-indent: 0;
  text-align: center;
  user-select: none;
  vertical-align: middle;
  width: 1em;
  min-width: 1em;
}
.v-icon--clickable {
  cursor: pointer;
}
.v-icon--disabled {
  pointer-events: none;
  opacity: 0.38;
}
.v-icon--size-x-small {
  font-size: calc(var(--v-icon-size-multiplier) * 1em);
}
.v-icon--size-small {
  font-size: calc(var(--v-icon-size-multiplier) * 1.25em);
}
.v-icon--size-default {
  font-size: calc(var(--v-icon-size-multiplier) * 1.5em);
}
.v-icon--size-large {
  font-size: calc(var(--v-icon-size-multiplier) * 1.75em);
}
.v-icon--size-x-large {
  font-size: calc(var(--v-icon-size-multiplier) * 2em);
}

.v-icon__svg {
  fill: currentColor;
  width: 100%;
  height: 100%;
}

.v-icon--start {
  margin-inline-end: 8px;
}

.v-icon--end {
  margin-inline-start: 8px;
}`;q(Kr);const ne=[String,Function,Object,Array],Yr=Symbol.for("vuetify:icons"),Zn=V({icon:{type:ne},tag:{type:String,required:!0}},"icon"),yi=z()({name:"VComponentIcon",props:Zn(),setup(e,n){let{slots:t}=n;return()=>{const i=e.icon;return s(e.tag,null,{default:()=>{var a;return[e.icon?s(i,null,null):(a=t.default)==null?void 0:a.call(t)]}})}}}),Xr=_n({name:"VSvgIcon",inheritAttrs:!1,props:Zn(),setup(e,n){let{attrs:t}=n;return()=>s(e.tag,K(t,{style:null}),{default:()=>[s("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(e.icon)?e.icon.map(i=>Array.isArray(i)?s("path",{d:i[0],"fill-opacity":i[1]},null):s("path",{d:i},null)):s("path",{d:e.icon},null)])]})}});_n({name:"VLigatureIcon",props:Zn(),setup(e){return()=>s(e.tag,null,{default:()=>[e.icon]})}});_n({name:"VClassIcon",props:Zn(),setup(e){return()=>s(e.tag,{class:e.icon},null)}});const Jr=e=>{const n=X(Yr);if(!n)throw new Error("Missing Vuetify Icons provide!");return{iconData:h(()=>{var c;const i=ke(e);if(!i)return{component:yi};let a=i;if(typeof a=="string"&&(a=a.trim(),a.startsWith("$")&&(a=(c=n.aliases)==null?void 0:c[a.slice(1)])),Array.isArray(a))return{component:Xr,icon:a};if(typeof a!="string")return{component:yi,icon:a};const r=Object.keys(n.sets).find(u=>typeof a=="string"&&a.startsWith(`${u}:`)),l=r?a.slice(r.length+1):a;return{component:n.sets[r??n.defaultSet].component,icon:l}})}},Qr=["x-small","small","default","large","x-large"],Kn=V({size:{type:[String,Number],default:"default"}},"size");function Yn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ve();return At(()=>{let t,i;return Pn(Qr,e.size)?t=`${n}--size-${e.size}`:e.size&&(i={width:H(e.size),height:H(e.size)}),{sizeClasses:t,sizeStyles:i}})}const el=V({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:ne,...U(),...Kn(),...re({tag:"i"}),...se()},"VIcon"),oe=z()({name:"VIcon",props:el(),setup(e,n){let{attrs:t,slots:i}=n;const a=$(),{themeClasses:r}=ce(e),{iconData:l}=Jr(h(()=>a.value||e.icon)),{sizeClasses:o}=Yn(e),{textColorClasses:c,textColorStyles:u}=$e(R(e,"color"));return N(()=>{var p,d;const f=(p=i.default)==null?void 0:p.call(i);f&&(a.value=(d=Di(f).filter(g=>g.type===Ka&&g.children&&typeof g.children=="string")[0])==null?void 0:d.children);const m=!!(t.onClick||t.onClickOnce);return s(l.value.component,{tag:e.tag,icon:l.value.icon,class:["v-icon","notranslate",r.value,o.value,c.value,{"v-icon--clickable":m,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[o.value?void 0:{fontSize:H(e.size),height:H(e.size),width:H(e.size)},u.value,e.style],role:m?"button":void 0,"aria-hidden":!m,tabindex:m?e.disabled?-1:0:void 0},{default:()=>[f]})}),{}}});var nl=`.v-progress-circular {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  position: relative;
  vertical-align: middle;
}
.v-progress-circular > svg {
  width: 100%;
  height: 100%;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
}

.v-progress-circular__content {
  align-items: center;
  display: flex;
  justify-content: center;
}

.v-progress-circular__underlay {
  color: rgba(var(--v-border-color), var(--v-border-opacity));
  stroke: currentColor;
  z-index: 1;
}

.v-progress-circular__overlay {
  stroke: currentColor;
  transition: all 0.2s ease-in-out, stroke-width 0s;
  z-index: 2;
}

.v-progress-circular--size-x-small {
  height: 16px;
  width: 16px;
}
.v-progress-circular--size-small {
  height: 24px;
  width: 24px;
}
.v-progress-circular--size-default {
  height: 32px;
  width: 32px;
}
.v-progress-circular--size-large {
  height: 48px;
  width: 48px;
}
.v-progress-circular--size-x-large {
  height: 64px;
  width: 64px;
}

.v-progress-circular--indeterminate > svg {
  animation: progress-circular-rotate 1.4s linear infinite;
  transform-origin: center center;
  transition: all 0.2s ease-in-out;
}
.v-progress-circular--indeterminate .v-progress-circular__overlay {
  animation: progress-circular-dash 1.4s ease-in-out infinite, progress-circular-rotate 1.4s linear infinite;
  stroke-dasharray: 25, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  transform-origin: center center;
  transform: rotate(-90deg);
}

.v-progress-circular--disable-shrink > svg {
  animation-duration: 0.7s;
}
.v-progress-circular--disable-shrink .v-progress-circular__overlay {
  animation: none;
}

.v-progress-circular--indeterminate:not(.v-progress-circular--visible) > svg,
.v-progress-circular--indeterminate:not(.v-progress-circular--visible) .v-progress-circular__overlay {
  animation-play-state: paused !important;
}

@keyframes progress-circular-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0px;
  }
  50% {
    stroke-dasharray: 100, 200;
    stroke-dashoffset: -15px;
  }
  100% {
    stroke-dasharray: 100, 200;
    stroke-dashoffset: -124px;
  }
}
@keyframes progress-circular-rotate {
  100% {
    transform: rotate(270deg);
  }
}`;q(nl);function Qi(e,n){const t=$(),i=Z(!1);if(Vt){const a=new IntersectionObserver(r=>{i.value=!!r.find(l=>l.isIntersecting)},n);ze(()=>{a.disconnect()}),D(t,(r,l)=>{l&&(a.unobserve(l),i.value=!1),r&&a.observe(r)},{flush:"post"})}return{intersectionRef:t,isIntersecting:i}}function tl(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const t=ut(),i=$();if(me){const a=new ResizeObserver(r=>{r.length&&(n==="content"?i.value=r[0].contentRect:i.value=r[0].target.getBoundingClientRect())});ze(()=>{a.disconnect()}),D(()=>t.el,(r,l)=>{l&&(a.unobserve(l),i.value=void 0),r&&a.observe(r)},{flush:"post"})}return{resizeRef:t,contentRect:_t(i)}}const il=V({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...U(),...Kn(),...re({tag:"div"}),...se()},"VProgressCircular"),al=z()({name:"VProgressCircular",props:il(),setup(e,n){let{slots:t}=n;const i=20,a=2*Math.PI*i,r=$(),{themeClasses:l}=ce(e),{sizeClasses:o,sizeStyles:c}=Yn(e),{textColorClasses:u,textColorStyles:f}=$e(R(e,"color")),{textColorClasses:m,textColorStyles:p}=$e(R(e,"bgColor")),{intersectionRef:d,isIntersecting:g}=Qi(),{resizeRef:v,contentRect:b}=tl(),y=h(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),C=h(()=>Number(e.width)),S=h(()=>c.value?Number(e.size):b.value?b.value.width:Math.max(C.value,32)),A=h(()=>i/(1-C.value/S.value)*2),I=h(()=>C.value/S.value*A.value),k=h(()=>H((100-y.value)/100*a));return nn(()=>{d.value=r.value,v.value=r.value}),N(()=>s(e.tag,{ref:r,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":g.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},l.value,o.value,u.value,e.class],style:[c.value,f.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:y.value},{default:()=>[s("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${A.value} ${A.value}`},[s("circle",{class:["v-progress-circular__underlay",m.value],style:p.value,fill:"transparent",cx:"50%",cy:"50%",r:i,"stroke-width":I.value,"stroke-dasharray":a,"stroke-dashoffset":0},null),s("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:i,"stroke-width":I.value,"stroke-dasharray":a,"stroke-dashoffset":k.value},null)]),t.default&&s("div",{class:"v-progress-circular__content"},[t.default({value:y.value})])]})),{}}}),Ue=V({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function qe(e){return{dimensionStyles:h(()=>{const t={},i=H(e.height),a=H(e.maxHeight),r=H(e.maxWidth),l=H(e.minHeight),o=H(e.minWidth),c=H(e.width);return i!=null&&(t.height=i),a!=null&&(t.maxHeight=a),r!=null&&(t.maxWidth=r),l!=null&&(t.minHeight=l),o!=null&&(t.minWidth=o),c!=null&&(t.width=c),t})}}var rl=`.v-progress-linear {
  background: transparent;
  overflow: hidden;
  position: relative;
  transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
}
.v-progress-linear--rounded {
  border-radius: 9999px;
}

.v-progress-linear__background,
.v-progress-linear__buffer {
  background: currentColor;
  bottom: 0;
  left: 0;
  opacity: var(--v-border-opacity);
  position: absolute;
  top: 0;
  width: 100%;
  transition-property: width, left, right;
  transition: inherit;
}

.v-progress-linear__content {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 100%;
}

.v-progress-linear__determinate,
.v-progress-linear__indeterminate {
  background: currentColor;
}

.v-progress-linear__determinate {
  height: inherit;
  left: 0;
  position: absolute;
  transition: inherit;
  transition-property: width, left, right;
}

.v-progress-linear__indeterminate .long, .v-progress-linear__indeterminate .short {
  animation-play-state: paused;
  animation-duration: 2.2s;
  animation-iteration-count: infinite;
  bottom: 0;
  height: inherit;
  left: 0;
  position: absolute;
  right: auto;
  top: 0;
  width: auto;
}
.v-progress-linear__indeterminate .long {
  animation-name: indeterminate-ltr;
}
.v-progress-linear__indeterminate .short {
  animation-name: indeterminate-short-ltr;
}

.v-progress-linear__stream {
  animation: stream 0.25s infinite linear;
  animation-play-state: paused;
  bottom: 0;
  left: auto;
  opacity: 0.3;
  pointer-events: none;
  position: absolute;
  transition: inherit;
  transition-property: width, left, right;
}

.v-progress-linear--reverse .v-progress-linear__background,
.v-progress-linear--reverse .v-progress-linear__determinate,
.v-progress-linear--reverse .v-progress-linear__content {
  left: auto;
  right: 0;
}
.v-progress-linear--reverse .v-progress-linear__indeterminate .long, .v-progress-linear--reverse .v-progress-linear__indeterminate .short {
  left: auto;
  right: 0;
}
.v-progress-linear--reverse .v-progress-linear__indeterminate .long {
  animation-name: indeterminate-rtl;
}
.v-progress-linear--reverse .v-progress-linear__indeterminate .short {
  animation-name: indeterminate-short-rtl;
}
.v-progress-linear--reverse .v-progress-linear__stream {
  right: auto;
}

.v-progress-linear--absolute,
.v-progress-linear--fixed {
  left: 0;
  z-index: 1;
}

.v-progress-linear--absolute {
  position: absolute;
}

.v-progress-linear--fixed {
  position: fixed;
}

.v-progress-linear--rounded {
  border-radius: 9999px;
}
.v-progress-linear--rounded.v-progress-linear--rounded-bar .v-progress-linear__determinate,
.v-progress-linear--rounded.v-progress-linear--rounded-bar .v-progress-linear__indeterminate {
  border-radius: inherit;
}

.v-progress-linear--striped .v-progress-linear__determinate {
  animation: progress-linear-stripes 1s infinite linear;
  background-image: linear-gradient(135deg, hsla(0, 0%, 100%, 0.25) 25%, transparent 0, transparent 50%, hsla(0, 0%, 100%, 0.25) 0, hsla(0, 0%, 100%, 0.25) 75%, transparent 0, transparent);
  background-repeat: repeat;
  background-size: var(--v-progress-linear-height);
}

.v-progress-linear--active .v-progress-linear__indeterminate .long, .v-progress-linear--active .v-progress-linear__indeterminate .short {
  animation-play-state: running;
}
.v-progress-linear--active .v-progress-linear__stream {
  animation-play-state: running;
}

.v-progress-linear--rounded-bar .v-progress-linear__determinate,
.v-progress-linear--rounded-bar .v-progress-linear__indeterminate,
.v-progress-linear--rounded-bar .v-progress-linear__stream + .v-progress-linear__background {
  border-radius: 9999px;
}
.v-progress-linear--rounded-bar .v-progress-linear__determinate {
  border-start-start-radius: 0;
  border-end-start-radius: 0;
}

@keyframes indeterminate-ltr {
  0% {
    left: -90%;
    right: 100%;
  }
  60% {
    left: -90%;
    right: 100%;
  }
  100% {
    left: 100%;
    right: -35%;
  }
}
@keyframes indeterminate-rtl {
  0% {
    left: 100%;
    right: -90%;
  }
  60% {
    left: 100%;
    right: -90%;
  }
  100% {
    left: -35%;
    right: 100%;
  }
}
@keyframes indeterminate-short-ltr {
  0% {
    left: -200%;
    right: 100%;
  }
  60% {
    left: 107%;
    right: -8%;
  }
  100% {
    left: 107%;
    right: -8%;
  }
}
@keyframes indeterminate-short-rtl {
  0% {
    left: 100%;
    right: -200%;
  }
  60% {
    left: -8%;
    right: 107%;
  }
  100% {
    left: -8%;
    right: 107%;
  }
}
@keyframes stream {
  to {
    transform: translateX(var(--v-progress-linear-stream-to));
  }
}
@keyframes progress-linear-stripes {
  0% {
    background-position-x: var(--v-progress-linear-height);
  }
}`;q(rl);const ea=Symbol.for("vuetify:locale");function ll(){const e=X(ea);if(!e)throw new Error("[Vuetify] Could not find injected locale instance");return e}function sn(){const e=X(ea);if(!e)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:e.isRtl,rtlClasses:e.rtlClasses}}const xi={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Ht=V({location:String},"location");function $t(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=arguments.length>2?arguments[2]:void 0;const{isRtl:i}=sn();return{locationStyles:h(()=>{if(!e.location)return{};const{side:r,align:l}=vt(e.location.split(" ").length>1?e.location:`${e.location} center`,i.value);function o(u){return t?t(u):0}const c={};return r!=="center"&&(n?c[xi[r]]=`calc(100% - ${o(r)}px)`:c[r]=0),l!=="center"?n?c[xi[l]]=`calc(100% - ${o(l)}px)`:c[l]=0:(r==="center"?c.top=c.left="50%":c[{top:"left",bottom:"left",left:"top",right:"top"}[r]]="50%",c.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[r]),c})}}const ol=V({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},bufferColor:String,bufferOpacity:[Number,String],clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},opacity:[Number,String],reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...U(),...Ht({location:"top"}),...Le(),...re(),...se()},"VProgressLinear"),sl=z()({name:"VProgressLinear",props:ol(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const i=ve(e,"modelValue"),{isRtl:a,rtlClasses:r}=sn(),{themeClasses:l}=ce(e),{locationStyles:o}=$t(e),{textColorClasses:c,textColorStyles:u}=$e(e,"color"),{backgroundColorClasses:f,backgroundColorStyles:m}=He(h(()=>e.bgColor||e.color)),{backgroundColorClasses:p,backgroundColorStyles:d}=He(h(()=>e.bufferColor||e.bgColor||e.color)),{backgroundColorClasses:g,backgroundColorStyles:v}=He(e,"color"),{roundedClasses:b}=Ae(e),{intersectionRef:y,isIntersecting:C}=Qi(),S=h(()=>parseFloat(e.max)),A=h(()=>parseFloat(e.height)),I=h(()=>In(parseFloat(e.bufferValue)/S.value*100,0,100)),k=h(()=>In(parseFloat(i.value)/S.value*100,0,100)),x=h(()=>a.value!==e.reverse),E=h(()=>e.indeterminate?"fade-transition":"slide-x-transition");function O(B){if(!y.value)return;const{left:P,right:_,width:w}=y.value.getBoundingClientRect(),L=x.value?w-B.clientX+(_-w):B.clientX-P;i.value=Math.round(L/w*S.value)}return N(()=>s(e.tag,{ref:y,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&C.value,"v-progress-linear--reverse":x.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},b.value,l.value,r.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?H(A.value):0,"--v-progress-linear-height":H(A.value),...e.absolute?o.value:{}},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:k.value,onClick:e.clickable&&O},{default:()=>[e.stream&&s("div",{key:"stream",class:["v-progress-linear__stream",c.value],style:{...u.value,[x.value?"left":"right"]:H(-A.value),borderTop:`${H(A.value/2)} dotted`,opacity:parseFloat(e.bufferOpacity),top:`calc(50% - ${H(A.value/4)})`,width:H(100-I.value,"%"),"--v-progress-linear-stream-to":H(A.value*(x.value?1:-1))}},null),s("div",{class:["v-progress-linear__background",f.value],style:[m.value,{opacity:parseFloat(e.bgOpacity),width:e.stream?0:void 0}]},null),s("div",{class:["v-progress-linear__buffer",p.value],style:[d.value,{opacity:parseFloat(e.bufferOpacity),width:H(I.value,"%")}]},null),s(je,{name:E.value},{default:()=>[e.indeterminate?s("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(B=>s("div",{key:B,class:["v-progress-linear__indeterminate",B,g.value],style:v.value},null))]):s("div",{class:["v-progress-linear__determinate",g.value],style:[v.value,{width:H(k.value,"%")}]},null)]}),t.default&&s("div",{class:"v-progress-linear__content"},[t.default({value:k.value,buffer:I.value})])]})),{}}}),Tt=V({loading:[Boolean,String]},"loader");function Ot(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ve();return{loaderClasses:h(()=>({[`${n}--loading`]:e.loading}))}}function na(e,n){var i;let{slots:t}=n;return s("div",{class:`${e.name}__loader`},[((i=t.default)==null?void 0:i.call(t,{color:e.color,isActive:e.active}))||s(sl,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const dl=["static","relative","fixed","absolute","sticky"],ta=V({position:{type:String,validator:e=>dl.includes(e)}},"position");function ia(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ve();return{positionClasses:h(()=>e.position?`${n}--${e.position}`:void 0)}}function cl(){const e=ie("useRoute");return h(()=>{var n;return(n=e==null?void 0:e.proxy)==null?void 0:n.$route})}function ul(){var e,n;return(n=(e=ie("useRouter"))==null?void 0:e.proxy)==null?void 0:n.$router}function Mt(e,n){var u,f;const t=Oi("RouterLink"),i=h(()=>!!(e.href||e.to)),a=h(()=>(i==null?void 0:i.value)||ti(n,"click")||ti(e,"click"));if(typeof t=="string"||!("useLink"in t))return{isLink:i,isClickable:a,href:R(e,"href")};const r=h(()=>({...e,to:R(()=>e.to||"")})),l=t.useLink(r.value),o=h(()=>e.to?l:void 0),c=cl();return{isLink:i,isClickable:a,route:(u=o.value)==null?void 0:u.route,navigate:(f=o.value)==null?void 0:f.navigate,isActive:h(()=>{var m,p,d;return o.value?e.exact?c.value?((d=o.value.isExactActive)==null?void 0:d.value)&&Wn(o.value.route.value.query,c.value.query):((p=o.value.isExactActive)==null?void 0:p.value)??!1:((m=o.value.isActive)==null?void 0:m.value)??!1:!1}),href:h(()=>{var m;return e.to?(m=o.value)==null?void 0:m.route.value.href:e.href})}}const Ft=V({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let at=!1;function vl(e,n){let t=!1,i,a;me&&(_e(()=>{window.addEventListener("popstate",r),i=e==null?void 0:e.beforeEach((l,o,c)=>{at?t?n(c):c():setTimeout(()=>t?n(c):c()),at=!0}),a=e==null?void 0:e.afterEach(()=>{at=!1})}),we(()=>{window.removeEventListener("popstate",r),i==null||i(),a==null||a()}));function r(l){var o;(o=l.state)!=null&&o.replaced||(t=!0,setTimeout(()=>t=!1))}}function fl(e,n){D(()=>{var t;return(t=e.isActive)==null?void 0:t.value},t=>{e.isLink.value&&t&&n&&_e(()=>{n(!0)})},{immediate:!0})}var ml=`.v-ripple__container {
  color: inherit;
  border-radius: inherit;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
  contain: strict;
}
.v-ripple__animation {
  color: inherit;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  background: currentColor;
  opacity: 0;
  pointer-events: none;
  overflow: hidden;
  will-change: transform, opacity;
}
.v-ripple__animation--enter {
  transition: none;
  opacity: 0;
}
.v-ripple__animation--in {
  transition: transform 0.25s cubic-bezier(0, 0, 0.2, 1), opacity 0.1s cubic-bezier(0, 0, 0.2, 1);
  opacity: calc(0.25 * var(--v-theme-overlay-multiplier));
}
.v-ripple__animation--out {
  transition: opacity 0.3s cubic-bezier(0, 0, 0.2, 1);
  opacity: 0;
}`;q(ml);const mt=Symbol("rippleStop"),pl=80;function _i(e,n){e.style.transform=n,e.style.webkitTransform=n}function pt(e){return e.constructor.name==="TouchEvent"}function aa(e){return e.constructor.name==="KeyboardEvent"}const gl=function(e,n){var m;let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=0,a=0;if(!aa(e)){const p=n.getBoundingClientRect(),d=pt(e)?e.touches[e.touches.length-1]:e;i=d.clientX-p.left,a=d.clientY-p.top}let r=0,l=.3;(m=n._ripple)!=null&&m.circle?(l=.15,r=n.clientWidth/2,r=t.center?r:r+Math.sqrt((i-r)**2+(a-r)**2)/4):r=Math.sqrt(n.clientWidth**2+n.clientHeight**2)/2;const o=`${(n.clientWidth-r*2)/2}px`,c=`${(n.clientHeight-r*2)/2}px`,u=t.center?o:`${i-r}px`,f=t.center?c:`${a-r}px`;return{radius:r,scale:l,x:u,y:f,centerX:o,centerY:c}},Tn={show(e,n){var d;let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((d=n==null?void 0:n._ripple)!=null&&d.enabled))return;const i=document.createElement("span"),a=document.createElement("span");i.appendChild(a),i.className="v-ripple__container",t.class&&(i.className+=` ${t.class}`);const{radius:r,scale:l,x:o,y:c,centerX:u,centerY:f}=gl(e,n,t),m=`${r*2}px`;a.className="v-ripple__animation",a.style.width=m,a.style.height=m,n.appendChild(i);const p=window.getComputedStyle(n);p&&p.position==="static"&&(n.style.position="relative",n.dataset.previousPosition="static"),a.classList.add("v-ripple__animation--enter"),a.classList.add("v-ripple__animation--visible"),_i(a,`translate(${o}, ${c}) scale3d(${l},${l},${l})`),a.dataset.activated=String(performance.now()),setTimeout(()=>{a.classList.remove("v-ripple__animation--enter"),a.classList.add("v-ripple__animation--in"),_i(a,`translate(${u}, ${f}) scale3d(1,1,1)`)},0)},hide(e){var r;if(!((r=e==null?void 0:e._ripple)!=null&&r.enabled))return;const n=e.getElementsByClassName("v-ripple__animation");if(n.length===0)return;const t=n[n.length-1];if(t.dataset.isHiding)return;t.dataset.isHiding="true";const i=performance.now()-Number(t.dataset.activated),a=Math.max(250-i,0);setTimeout(()=>{t.classList.remove("v-ripple__animation--in"),t.classList.add("v-ripple__animation--out"),setTimeout(()=>{var o;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((o=t.parentNode)==null?void 0:o.parentNode)===e&&e.removeChild(t.parentNode)},300)},a)}};function ra(e){return typeof e>"u"||!!e}function mn(e){const n={},t=e.currentTarget;if(!(!(t!=null&&t._ripple)||t._ripple.touched||e[mt])){if(e[mt]=!0,pt(e))t._ripple.touched=!0,t._ripple.isTouch=!0;else if(t._ripple.isTouch)return;if(n.center=t._ripple.centered||aa(e),t._ripple.class&&(n.class=t._ripple.class),pt(e)){if(t._ripple.showTimerCommit)return;t._ripple.showTimerCommit=()=>{Tn.show(e,t,n)},t._ripple.showTimer=window.setTimeout(()=>{var i;(i=t==null?void 0:t._ripple)!=null&&i.showTimerCommit&&(t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null)},pl)}else Tn.show(e,t,n)}}function wi(e){e[mt]=!0}function ue(e){const n=e.currentTarget;if(n!=null&&n._ripple){if(window.clearTimeout(n._ripple.showTimer),e.type==="touchend"&&n._ripple.showTimerCommit){n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null,n._ripple.showTimer=window.setTimeout(()=>{ue(e)});return}window.setTimeout(()=>{n._ripple&&(n._ripple.touched=!1)}),Tn.hide(n)}}function la(e){const n=e.currentTarget;n!=null&&n._ripple&&(n._ripple.showTimerCommit&&(n._ripple.showTimerCommit=null),window.clearTimeout(n._ripple.showTimer))}let pn=!1;function oa(e){!pn&&(e.keyCode===Qt.enter||e.keyCode===Qt.space)&&(pn=!0,mn(e))}function sa(e){pn=!1,ue(e)}function da(e){pn&&(pn=!1,ue(e))}function ca(e,n,t){const{value:i,modifiers:a}=n,r=ra(i);if(r||Tn.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=r,e._ripple.centered=a.center,e._ripple.circle=a.circle,ct(i)&&i.class&&(e._ripple.class=i.class),r&&!t){if(a.stop){e.addEventListener("touchstart",wi,{passive:!0}),e.addEventListener("mousedown",wi);return}e.addEventListener("touchstart",mn,{passive:!0}),e.addEventListener("touchend",ue,{passive:!0}),e.addEventListener("touchmove",la,{passive:!0}),e.addEventListener("touchcancel",ue),e.addEventListener("mousedown",mn),e.addEventListener("mouseup",ue),e.addEventListener("mouseleave",ue),e.addEventListener("keydown",oa),e.addEventListener("keyup",sa),e.addEventListener("blur",da),e.addEventListener("dragstart",ue,{passive:!0})}else!r&&t&&ua(e)}function ua(e){e.removeEventListener("mousedown",mn),e.removeEventListener("touchstart",mn),e.removeEventListener("touchend",ue),e.removeEventListener("touchmove",la),e.removeEventListener("touchcancel",ue),e.removeEventListener("mouseup",ue),e.removeEventListener("mouseleave",ue),e.removeEventListener("keydown",oa),e.removeEventListener("keyup",sa),e.removeEventListener("dragstart",ue),e.removeEventListener("blur",da)}function hl(e,n){ca(e,n,!1)}function bl(e){delete e._ripple,ua(e)}function yl(e,n){if(n.value===n.oldValue)return;const t=ra(n.oldValue);ca(e,n,t)}const Rt={mounted:hl,unmounted:bl,updated:yl},xl=V({active:{type:Boolean,default:void 0},baseColor:String,symbol:{type:null,default:Ji},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:ne,appendIcon:ne,block:Boolean,readonly:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...tn(),...U(),...Me(),...Ue(),...rn(),...Dr(),...Tt(),...Ht(),...ta(),...Le(),...Ft(),...Kn(),...re({tag:"button"}),...se(),...on({variant:"elevated"})},"VBtn"),Ce=z()({name:"VBtn",props:xl(),emits:{"group:selected":e=>!0},setup(e,n){let{attrs:t,slots:i}=n;const{themeClasses:a}=ce(e),{borderClasses:r}=an(e),{densityClasses:l}=We(e),{dimensionStyles:o}=qe(e),{elevationClasses:c}=ln(e),{loaderClasses:u}=Ot(e),{locationStyles:f}=$t(e),{positionClasses:m}=ia(e),{roundedClasses:p}=Ae(e),{sizeClasses:d,sizeStyles:g}=Yn(e),v=jr(e,e.symbol,!1),b=Mt(e,t),y=h(()=>{var B;return e.active!==void 0?e.active:b.isLink.value?(B=b.isActive)==null?void 0:B.value:v==null?void 0:v.isSelected.value}),C=h(()=>{var P,_;return{color:(v==null?void 0:v.isSelected.value)&&(!b.isLink.value||((P=b.isActive)==null?void 0:P.value))||!v||((_=b.isActive)==null?void 0:_.value)?e.color??e.baseColor:e.baseColor,variant:e.variant}}),{colorClasses:S,colorStyles:A,variantClasses:I}=Gn(C),k=h(()=>(v==null?void 0:v.disabled.value)||e.disabled),x=h(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),E=h(()=>{if(!(e.value===void 0||typeof e.value=="symbol"))return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function O(B){var P;k.value||b.isLink.value&&(B.metaKey||B.ctrlKey||B.shiftKey||B.button!==0||t.target==="_blank")||((P=b.navigate)==null||P.call(b,B),v==null||v.toggle())}return fl(b,v==null?void 0:v.select),N(()=>{const B=b.isLink.value?"a":e.tag,P=!!(e.prependIcon||i.prepend),_=!!(e.appendIcon||i.append),w=!!(e.icon&&e.icon!==!0);return Se(s(B,{type:B==="a"?void 0:"button",class:["v-btn",v==null?void 0:v.selectedClass.value,{"v-btn--active":y.value,"v-btn--block":e.block,"v-btn--disabled":k.value,"v-btn--elevated":x.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--readonly":e.readonly,"v-btn--slim":e.slim,"v-btn--stacked":e.stacked},a.value,r.value,S.value,l.value,c.value,u.value,m.value,p.value,d.value,I.value,e.class],style:[A.value,o.value,f.value,g.value,e.style],"aria-busy":e.loading?!0:void 0,disabled:k.value||void 0,href:b.href.value,tabindex:e.loading||e.readonly?-1:void 0,onClick:O,value:E.value},{default:()=>{var L;return[qn(!0,"v-btn"),!e.icon&&P&&s("span",{key:"prepend",class:"v-btn__prepend"},[i.prepend?s(ae,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},i.prepend):s(oe,{key:"prepend-icon",icon:e.prependIcon},null)]),s("span",{class:"v-btn__content","data-no-activator":""},[!i.default&&w?s(oe,{key:"content-icon",icon:e.icon},null):s(ae,{key:"content-defaults",disabled:!w,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var T;return[((T=i.default)==null?void 0:T.call(i))??e.text]}})]),!e.icon&&_&&s("span",{key:"append",class:"v-btn__append"},[i.append?s(ae,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},i.append):s(oe,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&s("span",{key:"loader",class:"v-btn__loader"},[((L=i.loader)==null?void 0:L.call(i))??s(al,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,width:"2"},null)])]}}),[[Rt,!k.value&&!!e.ripple,"",{center:!!e.icon}]])}),{group:v}}});var _l=`.v-card {
  display: block;
  overflow: hidden;
  overflow-wrap: break-word;
  position: relative;
  padding: 0;
  text-decoration: none;
  transition-duration: 0.28s;
  transition-property: box-shadow, opacity, background;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 0;
  border-color: rgba(var(--v-border-color), var(--v-border-opacity));
  border-style: solid;
  border-width: 0;
  border-radius: 4px;
}
.v-card--border {
  border-width: thin;
  box-shadow: none;
}
.v-card--absolute {
  position: absolute;
}
.v-card--fixed {
  position: fixed;
}
.v-card:hover > .v-card__overlay {
  opacity: calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier));
}
.v-card:focus-visible > .v-card__overlay {
  opacity: calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier));
}
@supports not selector(:focus-visible) {
  .v-card:focus > .v-card__overlay {
    opacity: calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier));
  }
}
.v-card--active > .v-card__overlay, .v-card[aria-haspopup=menu][aria-expanded=true] > .v-card__overlay {
  opacity: calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier));
}
.v-card--active:hover > .v-card__overlay, .v-card[aria-haspopup=menu][aria-expanded=true]:hover > .v-card__overlay {
  opacity: calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier));
}
.v-card--active:focus-visible > .v-card__overlay, .v-card[aria-haspopup=menu][aria-expanded=true]:focus-visible > .v-card__overlay {
  opacity: calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier));
}
@supports not selector(:focus-visible) {
  .v-card--active:focus > .v-card__overlay, .v-card[aria-haspopup=menu][aria-expanded=true]:focus > .v-card__overlay {
    opacity: calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier));
  }
}
.v-card--variant-plain, .v-card--variant-outlined, .v-card--variant-text, .v-card--variant-tonal {
  background: transparent;
  color: inherit;
}
.v-card--variant-plain {
  opacity: 0.62;
}
.v-card--variant-plain:focus, .v-card--variant-plain:hover {
  opacity: 1;
}
.v-card--variant-plain .v-card__overlay {
  display: none;
}
.v-card--variant-elevated, .v-card--variant-flat {
  background: rgb(var(--v-theme-surface));
  color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
}
.v-card--variant-elevated {
  box-shadow: 0px 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 1px 1px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 3px 0px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12));
}
.v-card--variant-flat {
  box-shadow: 0px 0px 0px 0px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 0px 0px 0px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12));
}
.v-card--variant-outlined {
  border: thin solid currentColor;
}
.v-card--variant-text .v-card__overlay {
  background: currentColor;
}
.v-card--variant-tonal .v-card__underlay {
  background: currentColor;
  opacity: var(--v-activated-opacity);
  border-radius: inherit;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.v-card .v-card__underlay {
  position: absolute;
}
.v-card--disabled {
  pointer-events: none;
  user-select: none;
}
.v-card--disabled > :not(.v-card__loader) {
  opacity: 0.6;
}
.v-card--flat {
  box-shadow: none;
}
.v-card--hover {
  cursor: pointer;
}
.v-card--hover::before, .v-card--hover::after {
  border-radius: inherit;
  bottom: 0;
  content: "";
  display: block;
  left: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  transition: inherit;
}
.v-card--hover::before {
  opacity: 1;
  z-index: -1;
  box-shadow: 0px 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 1px 1px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 3px 0px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12));
}
.v-card--hover::after {
  z-index: 1;
  opacity: 0;
  box-shadow: 0px 5px 5px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 8px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 3px 14px 2px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12));
}
.v-card--hover:hover::after {
  opacity: 1;
}
.v-card--hover:hover::before {
  opacity: 0;
}
.v-card--hover:hover {
  box-shadow: 0px 5px 5px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 8px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 3px 14px 2px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12));
}
.v-card--link {
  cursor: pointer;
}

.v-card-actions {
  align-items: center;
  display: flex;
  flex: none;
  min-height: 52px;
  padding: 0.5rem;
}

.v-card-item {
  align-items: center;
  display: grid;
  flex: none;
  grid-template-areas: "prepend content append";
  grid-template-columns: max-content auto max-content;
  padding: 0.625rem 1rem;
}
.v-card-item + .v-card-text {
  padding-top: 0;
}
.v-card-item__prepend, .v-card-item__append {
  align-items: center;
  display: flex;
}
.v-card-item__prepend {
  grid-area: prepend;
  padding-inline-end: 0.5rem;
}
.v-card-item__append {
  grid-area: append;
  padding-inline-start: 0.5rem;
}

.v-card-item__content {
  align-self: center;
  grid-area: content;
  overflow: hidden;
}

.v-card-title {
  display: block;
  flex: none;
  font-size: 1.25rem;
  font-weight: 500;
  hyphens: auto;
  letter-spacing: 0.0125em;
  min-width: 0;
  overflow-wrap: normal;
  overflow: hidden;
  padding: 0.5rem 1rem;
  text-overflow: ellipsis;
  text-transform: none;
  white-space: nowrap;
  word-break: normal;
  word-wrap: break-word;
}
.v-card .v-card-title {
  line-height: 1.6;
}
.v-card--density-comfortable .v-card-title {
  line-height: 1.75rem;
}
.v-card--density-compact .v-card-title {
  line-height: 1.55rem;
}
.v-card-item .v-card-title {
  padding: 0;
}
.v-card-title + .v-card-text,
.v-card-title + .v-card-actions {
  padding-top: 0;
}

.v-card-subtitle {
  display: block;
  flex: none;
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.0178571429em;
  opacity: var(--v-card-subtitle-opacity, var(--v-medium-emphasis-opacity));
  overflow: hidden;
  padding: 0 1rem;
  text-overflow: ellipsis;
  text-transform: none;
  white-space: nowrap;
}
.v-card .v-card-subtitle {
  line-height: 1.425;
}
.v-card--density-comfortable .v-card-subtitle {
  line-height: 1.125rem;
}
.v-card--density-compact .v-card-subtitle {
  line-height: 1rem;
}
.v-card-item .v-card-subtitle {
  padding: 0 0 0.25rem;
}

.v-card-text {
  flex: 1 1 auto;
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.0178571429em;
  opacity: var(--v-card-text-opacity, 1);
  padding: 1rem;
  text-transform: none;
}
.v-card .v-card-text {
  line-height: 1.425;
}
.v-card--density-comfortable .v-card-text {
  line-height: 1.2rem;
}
.v-card--density-compact .v-card-text {
  line-height: 1.15rem;
}

.v-card__image {
  display: flex;
  height: 100%;
  flex: 1 1 auto;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
}

.v-card__content {
  border-radius: inherit;
  overflow: hidden;
  position: relative;
}

.v-card__loader {
  bottom: auto;
  top: 0;
  left: 0;
  position: absolute;
  right: 0;
  width: 100%;
  z-index: 1;
}

.v-card__overlay {
  background-color: currentColor;
  border-radius: inherit;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}`;q(_l);const Nt=z()({name:"VCardActions",props:U(),setup(e,n){let{slots:t}=n;return xn({VBtn:{slim:!0,variant:"text"}}),N(()=>{var i;return s("div",{class:["v-card-actions",e.class],style:e.style},[(i=t.default)==null?void 0:i.call(t)])}),{}}}),wl=V({opacity:[Number,String],...U(),...re()},"VCardSubtitle"),kl=z()({name:"VCardSubtitle",props:wl(),setup(e,n){let{slots:t}=n;return N(()=>s(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},t)),{}}}),Cl=Et("v-card-title");var Sl=`.v-avatar {
  flex: none;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  line-height: normal;
  overflow: hidden;
  position: relative;
  text-align: center;
  transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: width, height;
  vertical-align: middle;
  border-radius: 50%;
}
.v-avatar.v-avatar--size-x-small {
  --v-avatar-height: 24px;
}
.v-avatar.v-avatar--size-small {
  --v-avatar-height: 32px;
}
.v-avatar.v-avatar--size-default {
  --v-avatar-height: 40px;
}
.v-avatar.v-avatar--size-large {
  --v-avatar-height: 48px;
}
.v-avatar.v-avatar--size-x-large {
  --v-avatar-height: 56px;
}
.v-avatar.v-avatar--density-default {
  height: calc(var(--v-avatar-height) + 0px);
  width: calc(var(--v-avatar-height) + 0px);
}
.v-avatar.v-avatar--density-comfortable {
  height: calc(var(--v-avatar-height) + -4px);
  width: calc(var(--v-avatar-height) + -4px);
}
.v-avatar.v-avatar--density-compact {
  height: calc(var(--v-avatar-height) + -8px);
  width: calc(var(--v-avatar-height) + -8px);
}
.v-avatar--variant-plain, .v-avatar--variant-outlined, .v-avatar--variant-text, .v-avatar--variant-tonal {
  background: transparent;
  color: inherit;
}
.v-avatar--variant-plain {
  opacity: 0.62;
}
.v-avatar--variant-plain:focus, .v-avatar--variant-plain:hover {
  opacity: 1;
}
.v-avatar--variant-plain .v-avatar__overlay {
  display: none;
}
.v-avatar--variant-elevated, .v-avatar--variant-flat {
  background: var(--v-theme-surface);
  color: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity));
}
.v-avatar--variant-elevated {
  box-shadow: 0px 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 1px 1px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 3px 0px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12));
}
.v-avatar--variant-flat {
  box-shadow: 0px 0px 0px 0px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 0px 0px 0px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12));
}
.v-avatar--variant-outlined {
  border: thin solid currentColor;
}
.v-avatar--variant-text .v-avatar__overlay {
  background: currentColor;
}
.v-avatar--variant-tonal .v-avatar__underlay {
  background: currentColor;
  opacity: var(--v-activated-opacity);
  border-radius: inherit;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.v-avatar .v-avatar__underlay {
  position: absolute;
}
.v-avatar--rounded {
  border-radius: 4px;
}
.v-avatar--start {
  margin-inline-end: 8px;
}
.v-avatar--end {
  margin-inline-start: 8px;
}
.v-avatar .v-img {
  height: 100%;
  width: 100%;
}`;q(Sl);var Vl=`.v-img {
  --v-theme-overlay-multiplier: 3;
  z-index: 0;
}
.v-img--booting .v-responsive__sizer {
  transition: none;
}
.v-img--rounded {
  border-radius: 4px;
}

.v-img__img,
.v-img__picture,
.v-img__gradient,
.v-img__placeholder,
.v-img__error {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.v-img__img--preload {
  filter: blur(4px);
}
.v-img__img--contain {
  object-fit: contain;
}
.v-img__img--cover {
  object-fit: cover;
}

.v-img__gradient {
  background-repeat: no-repeat;
}`;q(Vl);var Ll=`.v-responsive {
  display: flex;
  flex: 1 0 auto;
  max-height: 100%;
  max-width: 100%;
  overflow: hidden;
  position: relative;
}
.v-responsive--inline {
  display: inline-flex;
  flex: 0 0 auto;
}

.v-responsive__content {
  flex: 1 0 0px;
  max-width: 100%;
}

.v-responsive__sizer ~ .v-responsive__content {
  margin-inline-start: -100%;
}

.v-responsive__sizer {
  flex: 1 0 0px;
  transition: padding-bottom 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
}`;q(Ll);function Al(e){return{aspectStyles:h(()=>{const n=Number(e.aspectRatio);return n?{paddingBottom:String(1/n*100)+"%"}:void 0})}}const va=V({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...U(),...Ue()},"VResponsive"),ki=z()({name:"VResponsive",props:va(),setup(e,n){let{slots:t}=n;const{aspectStyles:i}=Al(e),{dimensionStyles:a}=qe(e);return N(()=>{var r;return s("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[a.value,e.style]},[s("div",{class:"v-responsive__sizer",style:i.value},null),(r=t.additional)==null?void 0:r.call(t),t.default&&s("div",{class:["v-responsive__content",e.contentClass]},[t.default()])])}),{}}}),Xn=V({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),Be=(e,n)=>{let{slots:t}=n;const{transition:i,disabled:a,group:r,...l}=e,{component:o=r?wt:je,...c}=typeof i=="object"?i:{};return Dn(o,K(typeof i=="string"?{name:a?"":i}:c,typeof i=="string"?{}:Object.fromEntries(Object.entries({disabled:a,group:r}).filter(u=>{let[f,m]=u;return m!==void 0})),l),t)};function Il(e,n){if(!Vt)return;const t=n.modifiers||{},i=n.value,{handler:a,options:r}=typeof i=="object"?i:{handler:i,options:{}},l=new IntersectionObserver(function(){var m;let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],c=arguments.length>1?arguments[1]:void 0;const u=(m=e._observe)==null?void 0:m[n.instance.$.uid];if(!u)return;const f=o.some(p=>p.isIntersecting);a&&(!t.quiet||u.init)&&(!t.once||f||u.init)&&a(f,o,c),f&&t.once?fa(e,n):u.init=!0},r);e._observe=Object(e._observe),e._observe[n.instance.$.uid]={init:!1,observer:l},l.observe(e)}function fa(e,n){var i;const t=(i=e._observe)==null?void 0:i[n.instance.$.uid];t&&(t.observer.unobserve(e),delete e._observe[n.instance.$.uid])}const Pl={mounted:Il,unmounted:fa};var ma=Pl;const El=V({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...va(),...U(),...Le(),...Xn()},"VImg"),Dt=z()({name:"VImg",directives:{intersect:ma},props:El(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,n){let{emit:t,slots:i}=n;const{backgroundColorClasses:a,backgroundColorStyles:r}=He(R(e,"color")),{roundedClasses:l}=Ae(e),o=ie("VImg"),c=Z(""),u=$(),f=Z(e.eager?"loading":"idle"),m=Z(),p=Z(),d=h(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),g=h(()=>d.value.aspect||m.value/p.value||0);D(()=>e.src,()=>{v(f.value!=="idle")}),D(g,(_,w)=>{!_&&w&&u.value&&A(u.value)}),Hi(()=>v());function v(_){if(!(e.eager&&_)&&!(Vt&&!_&&!e.eager)){if(f.value="loading",d.value.lazySrc){const w=new Image;w.src=d.value.lazySrc,A(w,null)}d.value.src&&_e(()=>{var w;t("loadstart",((w=u.value)==null?void 0:w.currentSrc)||d.value.src),setTimeout(()=>{var L;if(!o.isUnmounted)if((L=u.value)!=null&&L.complete){if(u.value.naturalWidth||y(),f.value==="error")return;g.value||A(u.value,null),f.value==="loading"&&b()}else g.value||A(u.value),C()})})}}function b(){var _;o.isUnmounted||(C(),A(u.value),f.value="loaded",t("load",((_=u.value)==null?void 0:_.currentSrc)||d.value.src))}function y(){var _;o.isUnmounted||(f.value="error",t("error",((_=u.value)==null?void 0:_.currentSrc)||d.value.src))}function C(){const _=u.value;_&&(c.value=_.currentSrc||_.src)}let S=-1;ze(()=>{clearTimeout(S)});function A(_){let w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const L=()=>{if(clearTimeout(S),o.isUnmounted)return;const{naturalHeight:T,naturalWidth:j}=_;T||j?(m.value=j,p.value=T):!_.complete&&f.value==="loading"&&w!=null?S=window.setTimeout(L,w):(_.currentSrc.endsWith(".svg")||_.currentSrc.startsWith("data:image/svg+xml"))&&(m.value=1,p.value=1)};L()}const I=h(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),k=()=>{var L;if(!d.value.src||f.value==="idle")return null;const _=s("img",{class:["v-img__img",I.value],style:{objectPosition:e.position},src:d.value.src,srcset:d.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:u,onLoad:b,onError:y},null),w=(L=i.sources)==null?void 0:L.call(i);return s(Be,{transition:e.transition,appear:!0},{default:()=>[Se(w?s("picture",{class:"v-img__picture"},[w,_]):_,[[yn,f.value==="loaded"]])]})},x=()=>s(Be,{transition:e.transition},{default:()=>[d.value.lazySrc&&f.value!=="loaded"&&s("img",{class:["v-img__img","v-img__img--preload",I.value],style:{objectPosition:e.position},src:d.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),E=()=>i.placeholder?s(Be,{transition:e.transition,appear:!0},{default:()=>[(f.value==="loading"||f.value==="error"&&!i.error)&&s("div",{class:"v-img__placeholder"},[i.placeholder()])]}):null,O=()=>i.error?s(Be,{transition:e.transition,appear:!0},{default:()=>[f.value==="error"&&s("div",{class:"v-img__error"},[i.error()])]}):null,B=()=>e.gradient?s("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,P=Z(!1);{const _=D(g,w=>{w&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{P.value=!0})}),_())})}return N(()=>{const _=ki.filterProps(e);return Se(s(ki,K({class:["v-img",{"v-img--booting":!P.value},a.value,l.value,e.class],style:[{width:H(e.width==="auto"?m.value:e.width)},r.value,e.style]},_,{aspectRatio:g.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>s(ee,null,[s(k,null,null),s(x,null,null),s(B,null,null),s(E,null,null),s(O,null,null)]),default:i.default}),[[bn("intersect"),{handler:v,options:e.options},null,{once:!0}]])}),{currentSrc:c,image:u,state:f,naturalWidth:m,naturalHeight:p}}}),zl=V({start:Boolean,end:Boolean,icon:ne,image:String,text:String,...U(),...Me(),...Le(),...Kn(),...re(),...se(),...on({variant:"flat"})},"VAvatar"),On=z()({name:"VAvatar",props:zl(),setup(e,n){let{slots:t}=n;const{themeClasses:i}=ce(e),{colorClasses:a,colorStyles:r,variantClasses:l}=Gn(e),{densityClasses:o}=We(e),{roundedClasses:c}=Ae(e),{sizeClasses:u,sizeStyles:f}=Yn(e);return N(()=>s(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},i.value,a.value,o.value,c.value,u.value,l.value,e.class],style:[r.value,f.value,e.style]},{default:()=>[t.default?s(ae,{key:"content-defaults",defaults:{VImg:{cover:!0,image:e.image},VIcon:{icon:e.icon}}},{default:()=>[t.default()]}):e.image?s(Dt,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?s(oe,{key:"icon",icon:e.icon},null):e.text,qn(!1,"v-avatar")]})),{}}}),Bl=V({appendAvatar:String,appendIcon:ne,prependAvatar:String,prependIcon:ne,subtitle:[String,Number],title:[String,Number],...U(),...Me()},"VCardItem"),Hl=z()({name:"VCardItem",props:Bl(),setup(e,n){let{slots:t}=n;return N(()=>{var u;const i=!!(e.prependAvatar||e.prependIcon),a=!!(i||t.prepend),r=!!(e.appendAvatar||e.appendIcon),l=!!(r||t.append),o=!!(e.title!=null||t.title),c=!!(e.subtitle!=null||t.subtitle);return s("div",{class:["v-card-item",e.class],style:e.style},[a&&s("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?s(ae,{key:"prepend-defaults",disabled:!i,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):s(ee,null,[e.prependAvatar&&s(On,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&s(oe,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),s("div",{class:"v-card-item__content"},[o&&s(Cl,{key:"title"},{default:()=>{var f;return[((f=t.title)==null?void 0:f.call(t))??e.title]}}),c&&s(kl,{key:"subtitle"},{default:()=>{var f;return[((f=t.subtitle)==null?void 0:f.call(t))??e.subtitle]}}),(u=t.default)==null?void 0:u.call(t)]),l&&s("div",{key:"append",class:"v-card-item__append"},[t.append?s(ae,{key:"append-defaults",disabled:!r,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):s(ee,null,[e.appendIcon&&s(oe,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&s(On,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),$l=V({opacity:[Number,String],...U(),...re()},"VCardText"),jt=z()({name:"VCardText",props:$l(),setup(e,n){let{slots:t}=n;return N(()=>s(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},t)),{}}}),Tl=V({appendAvatar:String,appendIcon:ne,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:ne,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...tn(),...U(),...Me(),...Ue(),...rn(),...Tt(),...Ht(),...ta(),...Le(),...Ft(),...re(),...se(),...on({variant:"elevated"})},"VCard"),pa=z()({name:"VCard",directives:{Ripple:Rt},props:Tl(),setup(e,n){let{attrs:t,slots:i}=n;const{themeClasses:a}=ce(e),{borderClasses:r}=an(e),{colorClasses:l,colorStyles:o,variantClasses:c}=Gn(e),{densityClasses:u}=We(e),{dimensionStyles:f}=qe(e),{elevationClasses:m}=ln(e),{loaderClasses:p}=Ot(e),{locationStyles:d}=$t(e),{positionClasses:g}=ia(e),{roundedClasses:v}=Ae(e),b=Mt(e,t),y=h(()=>e.link!==!1&&b.isLink.value),C=h(()=>!e.disabled&&e.link!==!1&&(e.link||b.isClickable.value));return N(()=>{const S=y.value?"a":e.tag,A=!!(i.title||e.title!=null),I=!!(i.subtitle||e.subtitle!=null),k=A||I,x=!!(i.append||e.appendAvatar||e.appendIcon),E=!!(i.prepend||e.prependAvatar||e.prependIcon),O=!!(i.image||e.image),B=k||E||x,P=!!(i.text||e.text!=null);return Se(s(S,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":C.value},a.value,r.value,l.value,u.value,m.value,p.value,g.value,v.value,c.value,e.class],style:[o.value,f.value,d.value,e.style],href:b.href.value,onClick:C.value&&b.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var _;return[O&&s("div",{key:"image",class:"v-card__image"},[i.image?s(ae,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},i.image):s(Dt,{key:"image-img",cover:!0,src:e.image},null)]),s(na,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:i.loader}),B&&s(Hl,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:i.item,prepend:i.prepend,title:i.title,subtitle:i.subtitle,append:i.append}),P&&s(jt,{key:"text"},{default:()=>{var w;return[((w=i.text)==null?void 0:w.call(i))??e.text]}}),(_=i.default)==null?void 0:_.call(i),i.actions&&s(Nt,null,{default:i.actions}),qn(C.value,"v-card")]}}),[[bn("ripple"),C.value&&e.ripple]])}),{}}});var Ol=`.v-dialog {
  align-items: center;
  justify-content: center;
  margin: auto;
}
.v-dialog > .v-overlay__content {
  max-height: calc(100% - 48px);
  width: calc(100% - 48px);
  max-width: calc(100% - 48px);
  margin: 24px;
}
.v-dialog > .v-overlay__content,
.v-dialog > .v-overlay__content > form {
  display: flex;
  flex-direction: column;
  min-height: 0;
}
.v-dialog > .v-overlay__content > .v-card,
.v-dialog > .v-overlay__content > .v-sheet,
.v-dialog > .v-overlay__content > form > .v-card,
.v-dialog > .v-overlay__content > form > .v-sheet {
  --v-scrollbar-offset: 0px;
  border-radius: 4px;
  overflow-y: auto;
  box-shadow: 0px 11px 15px -7px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 24px 38px 3px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 9px 46px 8px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12));
}
.v-dialog > .v-overlay__content > .v-card,
.v-dialog > .v-overlay__content > form > .v-card {
  display: flex;
  flex-direction: column;
}
.v-dialog > .v-overlay__content > .v-card > .v-card-item,
.v-dialog > .v-overlay__content > form > .v-card > .v-card-item {
  padding: 16px 24px;
}
.v-dialog > .v-overlay__content > .v-card > .v-card-item + .v-card-text,
.v-dialog > .v-overlay__content > form > .v-card > .v-card-item + .v-card-text {
  padding-top: 0;
}
.v-dialog > .v-overlay__content > .v-card > .v-card-text,
.v-dialog > .v-overlay__content > form > .v-card > .v-card-text {
  font-size: inherit;
  letter-spacing: 0.03125em;
  line-height: inherit;
  padding: 16px 24px 24px;
}
.v-dialog > .v-overlay__content > .v-card > .v-card-actions,
.v-dialog > .v-overlay__content > form > .v-card > .v-card-actions {
  justify-content: flex-end;
}

.v-dialog--fullscreen {
  --v-scrollbar-offset: 0px;
}
.v-dialog--fullscreen > .v-overlay__content {
  border-radius: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  overflow-y: auto;
  top: 0;
  left: 0;
}
.v-dialog--fullscreen > .v-overlay__content > .v-card,
.v-dialog--fullscreen > .v-overlay__content > .v-sheet,
.v-dialog--fullscreen > .v-overlay__content > form > .v-card,
.v-dialog--fullscreen > .v-overlay__content > form > .v-sheet {
  min-height: 100%;
  min-width: 100%;
  border-radius: 0;
}

.v-dialog--scrollable > .v-overlay__content,
.v-dialog--scrollable > .v-overlay__content > form {
  display: flex;
}
.v-dialog--scrollable > .v-overlay__content > .v-card,
.v-dialog--scrollable > .v-overlay__content > form > .v-card {
  display: flex;
  flex: 1 1 100%;
  flex-direction: column;
  max-height: 100%;
  max-width: 100%;
}
.v-dialog--scrollable > .v-overlay__content > .v-card > .v-card-text,
.v-dialog--scrollable > .v-overlay__content > form > .v-card > .v-card-text {
  backface-visibility: hidden;
  overflow-y: auto;
}`;q(Ol);const Ml=V({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function pe(e,n,t){return z()({name:e,props:Ml({mode:t,origin:n}),setup(i,a){let{slots:r}=a;const l={onBeforeEnter(o){i.origin&&(o.style.transformOrigin=i.origin)},onLeave(o){if(i.leaveAbsolute){const{offsetTop:c,offsetLeft:u,offsetWidth:f,offsetHeight:m}=o;o._transitionInitialStyles={position:o.style.position,top:o.style.top,left:o.style.left,width:o.style.width,height:o.style.height},o.style.position="absolute",o.style.top=`${c}px`,o.style.left=`${u}px`,o.style.width=`${f}px`,o.style.height=`${m}px`}i.hideOnLeave&&o.style.setProperty("display","none","important")},onAfterLeave(o){if(i.leaveAbsolute&&(o!=null&&o._transitionInitialStyles)){const{position:c,top:u,left:f,width:m,height:p}=o._transitionInitialStyles;delete o._transitionInitialStyles,o.style.position=c||"",o.style.top=u||"",o.style.left=f||"",o.style.width=m||"",o.style.height=p||""}}};return()=>{const o=i.group?wt:je;return Dn(o,{name:i.disabled?"":e,css:!i.disabled,...i.group?void 0:{mode:i.mode},...i.disabled?{}:l},r.default)}}})}function ga(e,n){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return z()({name:e,props:{mode:{type:String,default:t},disabled:Boolean,group:Boolean},setup(i,a){let{slots:r}=a;const l=i.group?wt:je;return()=>Dn(l,{name:i.disabled?"":e,css:!i.disabled,...i.disabled?{}:n},r.default)}})}function ha(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",i=Ti(`offset-${t}`);return{onBeforeEnter(l){l._parent=l.parentNode,l._initialStyle={transition:l.style.transition,overflow:l.style.overflow,[t]:l.style[t]}},onEnter(l){const o=l._initialStyle;l.style.setProperty("transition","none","important"),l.style.overflow="hidden";const c=`${l[i]}px`;l.style[t]="0",l.offsetHeight,l.style.transition=o.transition,e&&l._parent&&l._parent.classList.add(e),requestAnimationFrame(()=>{l.style[t]=c})},onAfterEnter:r,onEnterCancelled:r,onLeave(l){l._initialStyle={transition:"",overflow:l.style.overflow,[t]:l.style[t]},l.style.overflow="hidden",l.style[t]=`${l[i]}px`,l.offsetHeight,requestAnimationFrame(()=>l.style[t]="0")},onAfterLeave:a,onLeaveCancelled:a};function a(l){e&&l._parent&&l._parent.classList.remove(e),r(l)}function r(l){const o=l._initialStyle[t];l.style.overflow=l._initialStyle.overflow,o!=null&&(l.style[t]=o),delete l._initialStyle}}const Fl=V({target:[Object,Array]},"v-dialog-transition"),ba=z()({name:"VDialogTransition",props:Fl(),setup(e,n){let{slots:t}=n;const i={onBeforeEnter(a){a.style.pointerEvents="none",a.style.visibility="hidden"},async onEnter(a,r){var p;await new Promise(d=>requestAnimationFrame(d)),await new Promise(d=>requestAnimationFrame(d)),a.style.visibility="";const{x:l,y:o,sx:c,sy:u,speed:f}=Si(e.target,a),m=Xe(a,[{transform:`translate(${l}px, ${o}px) scale(${c}, ${u})`,opacity:0},{}],{duration:225*f,easing:Br});(p=Ci(a))==null||p.forEach(d=>{Xe(d,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*f,easing:Hn})}),m.finished.then(()=>r())},onAfterEnter(a){a.style.removeProperty("pointer-events")},onBeforeLeave(a){a.style.pointerEvents="none"},async onLeave(a,r){var p;await new Promise(d=>requestAnimationFrame(d));const{x:l,y:o,sx:c,sy:u,speed:f}=Si(e.target,a);Xe(a,[{},{transform:`translate(${l}px, ${o}px) scale(${c}, ${u})`,opacity:0}],{duration:125*f,easing:Hr}).finished.then(()=>r()),(p=Ci(a))==null||p.forEach(d=>{Xe(d,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*f,easing:Hn})})},onAfterLeave(a){a.style.removeProperty("pointer-events")}};return()=>e.target?s(je,K({name:"dialog-transition"},i,{css:!1}),t):s(je,{name:"dialog-transition"},t)}});function Ci(e){var t;const n=(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:t.children;return n&&[...n]}function Si(e,n){const t=qi(e),i=It(n),[a,r]=getComputedStyle(n).transformOrigin.split(" ").map(y=>parseFloat(y)),[l,o]=getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");let c=t.left+t.width/2;l==="left"||o==="left"?c-=t.width/2:(l==="right"||o==="right")&&(c+=t.width/2);let u=t.top+t.height/2;l==="top"||o==="top"?u-=t.height/2:(l==="bottom"||o==="bottom")&&(u+=t.height/2);const f=t.width/i.width,m=t.height/i.height,p=Math.max(1,f,m),d=f/p||0,g=m/p||0,v=i.width*i.height/(window.innerWidth*window.innerHeight),b=v>.12?Math.min(1.5,(v-.12)*10+1):1;return{x:c-(a+i.left),y:u-(r+i.top),sx:d,sy:g,speed:b}}pe("fab-transition","center center","out-in");pe("dialog-bottom-transition");pe("dialog-top-transition");pe("fade-transition");pe("scale-transition");pe("scroll-x-transition");pe("scroll-x-reverse-transition");pe("scroll-y-transition");pe("scroll-y-reverse-transition");pe("slide-x-transition");pe("slide-x-reverse-transition");const ya=pe("slide-y-transition");pe("slide-y-reverse-transition");const xa=ga("expand-transition",ha()),Rl=ga("expand-x-transition",ha("",!0));var Nl=`.v-overlay-container {
  contain: layout;
  left: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  display: contents;
}

.v-overlay-scroll-blocked {
  padding-inline-end: var(--v-scrollbar-offset);
}
.v-overlay-scroll-blocked:not(html) {
  overflow-y: hidden !important;
}
html.v-overlay-scroll-blocked {
  position: fixed;
  top: var(--v-body-scroll-y);
  left: var(--v-body-scroll-x);
  width: 100%;
  height: 100%;
}

.v-overlay {
  border-radius: inherit;
  display: flex;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
}

.v-overlay__content {
  outline: none;
  position: absolute;
  pointer-events: auto;
  contain: layout;
}

.v-overlay__scrim {
  pointer-events: auto;
  background: rgb(var(--v-theme-on-surface));
  border-radius: inherit;
  bottom: 0;
  left: 0;
  opacity: var(--v-overlay-opacity, 0.32);
  position: fixed;
  right: 0;
  top: 0;
}

.v-overlay--absolute {
  position: absolute;
}

.v-overlay--contained .v-overlay__scrim {
  position: absolute;
}

.v-overlay--scroll-blocked {
  padding-inline-end: var(--v-scrollbar-offset);
}`;q(Nl);function rt(e,n){return{x:e.x+n.x,y:e.y+n.y}}function Dl(e,n){return{x:e.x-n.x,y:e.y-n.y}}function Vi(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:i}=e,a=i==="left"?0:i==="center"?n.width/2:i==="right"?n.width:i,r=t==="top"?0:t==="bottom"?n.height:t;return rt({x:a,y:r},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:i}=e,a=t==="left"?0:t==="right"?n.width:t,r=i==="top"?0:i==="center"?n.height/2:i==="bottom"?n.height:i;return rt({x:a,y:r},n)}return rt({x:n.width/2,y:n.height/2},n)}const _a={static:Ul,connected:Gl},jl=V({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in _a},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function Wl(e,n){const t=$({}),i=$();me&&Qe(()=>!!(n.isActive.value&&e.locationStrategy),r=>{var l,o;D(()=>e.locationStrategy,r),we(()=>{window.removeEventListener("resize",a),i.value=void 0}),window.addEventListener("resize",a,{passive:!0}),typeof e.locationStrategy=="function"?i.value=(l=e.locationStrategy(n,e,t))==null?void 0:l.updateLocation:i.value=(o=_a[e.locationStrategy](n,e,t))==null?void 0:o.updateLocation});function a(r){var l;(l=i.value)==null||l.call(i,r)}return{contentStyles:t,updateLocation:i}}function Ul(){}function ql(e,n){n?e.style.removeProperty("left"):e.style.removeProperty("right");const t=It(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function Gl(e,n,t){(Array.isArray(e.target.value)||Mr(e.target.value))&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:a,preferredOrigin:r}=At(()=>{const g=vt(n.location,e.isRtl.value),v=n.origin==="overlap"?g:n.origin==="auto"?tt(g):vt(n.origin,e.isRtl.value);return g.side===v.side&&g.align===it(v).align?{preferredAnchor:ai(g),preferredOrigin:ai(v)}:{preferredAnchor:g,preferredOrigin:v}}),[l,o,c,u]=["minWidth","minHeight","maxWidth","maxHeight"].map(g=>h(()=>{const v=parseFloat(n[g]);return isNaN(v)?1/0:v})),f=h(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const g=n.offset.split(" ").map(parseFloat);return g.length<2&&g.push(0),g}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let m=!1;const p=new ResizeObserver(()=>{m&&d()});D([e.target,e.contentEl],(g,v)=>{let[b,y]=g,[C,S]=v;C&&!Array.isArray(C)&&p.unobserve(C),b&&!Array.isArray(b)&&p.observe(b),S&&p.unobserve(S),y&&p.observe(y)},{immediate:!0}),we(()=>{p.disconnect()});function d(){if(m=!1,requestAnimationFrame(()=>m=!0),!e.target.value||!e.contentEl.value)return;const g=qi(e.target.value),v=ql(e.contentEl.value,e.isRtl.value),b=$n(e.contentEl.value),y=12;b.length||(b.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(v.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),v.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const C=b.reduce((P,_)=>{const w=_.getBoundingClientRect(),L=new De({x:_===document.documentElement?0:w.x,y:_===document.documentElement?0:w.y,width:_.clientWidth,height:_.clientHeight});return P?new De({x:Math.max(P.left,L.left),y:Math.max(P.top,L.top),width:Math.min(P.right,L.right)-Math.max(P.left,L.left),height:Math.min(P.bottom,L.bottom)-Math.max(P.top,L.top)}):L},void 0);C.x+=y,C.y+=y,C.width-=y*2,C.height-=y*2;let S={anchor:a.value,origin:r.value};function A(P){const _=new De(v),w=Vi(P.anchor,g),L=Vi(P.origin,_);let{x:T,y:j}=Dl(w,L);switch(P.anchor.side){case"top":j-=f.value[0];break;case"bottom":j+=f.value[0];break;case"left":T-=f.value[0];break;case"right":T+=f.value[0];break}switch(P.anchor.align){case"top":j-=f.value[1];break;case"bottom":j+=f.value[1];break;case"left":T-=f.value[1];break;case"right":T+=f.value[1];break}return _.x+=T,_.y+=j,_.width=Math.min(_.width,c.value),_.height=Math.min(_.height,u.value),{overflows:li(_,C),x:T,y:j}}let I=0,k=0;const x={x:0,y:0},E={x:!1,y:!1};let O=-1;for(;!(O++>10);){const{x:P,y:_,overflows:w}=A(S);I+=P,k+=_,v.x+=P,v.y+=_;{const L=ri(S.anchor),T=w.x.before||w.x.after,j=w.y.before||w.y.after;let Y=!1;if(["x","y"].forEach(W=>{if(W==="x"&&T&&!E.x||W==="y"&&j&&!E.y){const te={anchor:{...S.anchor},origin:{...S.origin}},M=W==="x"?L==="y"?it:tt:L==="y"?tt:it;te.anchor=M(te.anchor),te.origin=M(te.origin);const{overflows:J}=A(te);(J[W].before<=w[W].before&&J[W].after<=w[W].after||J[W].before+J[W].after<(w[W].before+w[W].after)/2)&&(S=te,Y=E[W]=!0)}}),Y)continue}w.x.before&&(I+=w.x.before,v.x+=w.x.before),w.x.after&&(I-=w.x.after,v.x-=w.x.after),w.y.before&&(k+=w.y.before,v.y+=w.y.before),w.y.after&&(k-=w.y.after,v.y-=w.y.after);{const L=li(v,C);x.x=C.width-L.x.before-L.x.after,x.y=C.height-L.y.before-L.y.after,I+=L.x.before,v.x+=L.x.before,k+=L.y.before,v.y+=L.y.before}break}const B=ri(S.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${S.anchor.side} ${S.anchor.align}`,transformOrigin:`${S.origin.side} ${S.origin.align}`,top:H(lt(k)),left:e.isRtl.value?void 0:H(lt(I)),right:e.isRtl.value?H(lt(-I)):void 0,minWidth:H(B==="y"?Math.min(l.value,g.width):l.value),maxWidth:H(Li(In(x.x,l.value===1/0?0:l.value,c.value))),maxHeight:H(Li(In(x.y,o.value===1/0?0:o.value,u.value)))}),{available:x,contentBox:v}}return D(()=>[a.value,r.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>d()),_e(()=>{const g=d();if(!g)return;const{available:v,contentBox:b}=g;b.height>v.y&&requestAnimationFrame(()=>{d(),requestAnimationFrame(()=>{d()})})}),{updateLocation:d}}function lt(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Li(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let gt=!0;const Mn=[];function Zl(e){!gt||Mn.length?(Mn.push(e),ht()):(gt=!1,e(),ht())}let Ai=-1;function ht(){cancelAnimationFrame(Ai),Ai=requestAnimationFrame(()=>{const e=Mn.shift();e&&e(),Mn.length?ht():gt=!0})}const An={none:null,close:Xl,block:Jl,reposition:Ql},Kl=V({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in An}},"VOverlay-scroll-strategies");function Yl(e,n){if(!me)return;let t;nn(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=Ct(),await new Promise(i=>setTimeout(i)),t.active&&t.run(()=>{var i;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(i=An[e.scrollStrategy])==null||i.call(An,n,e,t)}))}),we(()=>{t==null||t.stop()})}function Xl(e){function n(t){e.isActive.value=!1}wa(e.targetEl.value??e.contentEl.value,n)}function Jl(e,n){var l;const t=(l=e.root.value)==null?void 0:l.offsetParent,i=[...new Set([...$n(e.targetEl.value,n.contained?t:void 0),...$n(e.contentEl.value,n.contained?t:void 0)])].filter(o=>!o.classList.contains("v-overlay-scroll-blocked")),a=window.innerWidth-document.documentElement.offsetWidth,r=(o=>zt(o)&&o)(t||document.documentElement);r&&e.root.value.classList.add("v-overlay--scroll-blocked"),i.forEach((o,c)=>{o.style.setProperty("--v-body-scroll-x",H(-o.scrollLeft)),o.style.setProperty("--v-body-scroll-y",H(-o.scrollTop)),o!==document.documentElement&&o.style.setProperty("--v-scrollbar-offset",H(a)),o.classList.add("v-overlay-scroll-blocked")}),we(()=>{i.forEach((o,c)=>{const u=parseFloat(o.style.getPropertyValue("--v-body-scroll-x")),f=parseFloat(o.style.getPropertyValue("--v-body-scroll-y")),m=o.style.scrollBehavior;o.style.scrollBehavior="auto",o.style.removeProperty("--v-body-scroll-x"),o.style.removeProperty("--v-body-scroll-y"),o.style.removeProperty("--v-scrollbar-offset"),o.classList.remove("v-overlay-scroll-blocked"),o.scrollLeft=-u,o.scrollTop=-f,o.style.scrollBehavior=m}),r&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function Ql(e,n,t){let i=!1,a=-1,r=-1;function l(o){Zl(()=>{var f,m;const c=performance.now();(m=(f=e.updateLocation).value)==null||m.call(f,o),i=(performance.now()-c)/(1e3/60)>2})}r=(typeof requestIdleCallback>"u"?o=>o():requestIdleCallback)(()=>{t.run(()=>{wa(e.targetEl.value??e.contentEl.value,o=>{i?(cancelAnimationFrame(a),a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{l(o)})})):l(o)})})}),we(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(r),cancelAnimationFrame(a)})}function wa(e,n){const t=[document,...$n(e)];t.forEach(i=>{i.addEventListener("scroll",n,{passive:!0})}),we(()=>{t.forEach(i=>{i.removeEventListener("scroll",n)})})}const bt=Symbol.for("vuetify:v-menu"),eo=V({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function no(e,n){let t=()=>{};function i(l){t==null||t();const o=Number(l?e.openDelay:e.closeDelay);return new Promise(c=>{t=fr(o,()=>{n==null||n(l),c(l)})})}function a(){return i(!0)}function r(){return i(!1)}return{clearDelay:t,runOpenDelay:a,runCloseDelay:r}}const to=V({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...eo()},"VOverlay-activator");function io(e,n){let{isActive:t,isTop:i}=n;const a=ie("useActivator"),r=$();let l=!1,o=!1,c=!0;const u=h(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),f=h(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!u.value),{runOpenDelay:m,runCloseDelay:p}=no(e,x=>{x===(e.openOnHover&&l||u.value&&o)&&!(e.openOnHover&&t.value&&!i.value)&&(t.value!==x&&(c=!0),t.value=x)}),d=$(),g={onClick:x=>{x.stopPropagation(),r.value=x.currentTarget||x.target,t.value||(d.value=[x.clientX,x.clientY]),t.value=!t.value},onMouseenter:x=>{var E;(E=x.sourceCapabilities)!=null&&E.firesTouchEvents||(l=!0,r.value=x.currentTarget||x.target,m())},onMouseleave:x=>{l=!1,p()},onFocus:x=>{vr(x.target,":focus-visible")!==!1&&(o=!0,x.stopPropagation(),r.value=x.currentTarget||x.target,m())},onBlur:x=>{o=!1,x.stopPropagation(),p()}},v=h(()=>{const x={};return f.value&&(x.onClick=g.onClick),e.openOnHover&&(x.onMouseenter=g.onMouseenter,x.onMouseleave=g.onMouseleave),u.value&&(x.onFocus=g.onFocus,x.onBlur=g.onBlur),x}),b=h(()=>{const x={};if(e.openOnHover&&(x.onMouseenter=()=>{l=!0,m()},x.onMouseleave=()=>{l=!1,p()}),u.value&&(x.onFocusin=()=>{o=!0,m()},x.onFocusout=()=>{o=!1,p()}),e.closeOnContentClick){const E=X(bt,null);x.onClick=()=>{t.value=!1,E==null||E.closeParents()}}return x}),y=h(()=>{const x={};return e.openOnHover&&(x.onMouseenter=()=>{c&&(l=!0,c=!1,m())},x.onMouseleave=()=>{l=!1,p()}),x});D(i,x=>{x&&(e.openOnHover&&!l&&(!u.value||!o)||u.value&&!o&&(!e.openOnHover||!l))&&(t.value=!1)}),D(t,x=>{x||setTimeout(()=>{d.value=void 0})},{flush:"post"});const C=ut();nn(()=>{C.value&&_e(()=>{r.value=C.el})});const S=ut(),A=h(()=>e.target==="cursor"&&d.value?d.value:S.value?S.el:ka(e.target,a)||r.value),I=h(()=>Array.isArray(A.value)?void 0:A.value);let k;return D(()=>!!e.activator,x=>{x&&me?(k=Ct(),k.run(()=>{ao(e,a,{activatorEl:r,activatorEvents:v})})):k&&k.stop()},{flush:"post",immediate:!0}),we(()=>{k==null||k.stop()}),{activatorEl:r,activatorRef:C,target:A,targetEl:I,targetRef:S,activatorEvents:v,contentEvents:b,scrimEvents:y}}function ao(e,n,t){let{activatorEl:i,activatorEvents:a}=t;D(()=>e.activator,(c,u)=>{if(u&&c!==u){const f=o(u);f&&l(f)}c&&_e(()=>r())},{immediate:!0}),D(()=>e.activatorProps,()=>{r()}),we(()=>{l()});function r(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:o(),u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;c&&gr(c,K(a.value,u))}function l(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:o(),u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;c&&hr(c,K(a.value,u))}function o(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const u=ka(c,n);return i.value=(u==null?void 0:u.nodeType)===Node.ELEMENT_NODE?u:void 0,i.value}}function ka(e,n){var i,a;if(!e)return;let t;if(e==="parent"){let r=(a=(i=n==null?void 0:n.proxy)==null?void 0:i.$el)==null?void 0:a.parentNode;for(;r!=null&&r.hasAttribute("data-no-activator");)r=r.parentNode;t=r}else typeof e=="string"?t=document.querySelector(e):"$el"in e?t=e.$el:t=e;return t}const ro=Symbol.for("vuetify:display");function lo(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ve();const t=X(ro);if(!t)throw new Error("Could not find Vuetify display injection");const i=h(()=>{if(e.mobile!=null)return e.mobile;if(!e.mobileBreakpoint)return t.mobile.value;const r=typeof e.mobileBreakpoint=="number"?e.mobileBreakpoint:t.thresholds.value[e.mobileBreakpoint];return t.width.value<r}),a=h(()=>n?{[`${n}--mobile`]:i.value}:{});return{...t,displayClasses:a,mobile:i}}function oo(){if(!me)return Z(!1);const{ssr:e}=lo();if(e){const n=Z(!1);return jn(()=>{n.value=!0}),n}else return Z(!0)}const so=V({eager:Boolean},"lazy");function co(e,n){const t=Z(!1),i=h(()=>t.value||e.eager||n.value);D(n,()=>t.value=!0);function a(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:i,onAfterLeave:a}}function Jn(){const n=ie("useScopeId").vnode.scopeId;return{scopeId:n?{[n]:""}:void 0}}const Ii=Symbol.for("vuetify:stack"),cn=Nn([]);function uo(e,n,t){const i=ie("useStack"),a=!t,r=X(Ii,void 0),l=Nn({activeChildren:new Set});be(Ii,l);const o=Z(+n.value);Qe(e,()=>{var m;const f=(m=cn.at(-1))==null?void 0:m[1];o.value=f?f+10:+n.value,a&&cn.push([i.uid,o.value]),r==null||r.activeChildren.add(i.uid),we(()=>{if(a){const p=fe(cn).findIndex(d=>d[0]===i.uid);cn.splice(p,1)}r==null||r.activeChildren.delete(i.uid)})});const c=Z(!0);a&&nn(()=>{var m;const f=((m=cn.at(-1))==null?void 0:m[0])===i.uid;setTimeout(()=>c.value=f)});const u=h(()=>!l.activeChildren.size);return{globalTop:_t(c),localTop:u,stackStyles:h(()=>({zIndex:o.value}))}}function vo(e){return{teleportTarget:h(()=>{const t=e.value;if(t===!0||!me)return;const i=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(i==null)return;let a=i.querySelector(":scope > .v-overlay-container");return a||(a=document.createElement("div"),a.className="v-overlay-container",i.appendChild(a)),a})}}function fo(){return!0}function Ca(e,n,t){if(!e||Sa(e,t)===!1)return!1;const i=Zi(n);if(typeof ShadowRoot<"u"&&i instanceof ShadowRoot&&i.host===e.target)return!1;const a=(typeof t.value=="object"&&t.value.include||(()=>[]))();return a.push(n),!a.some(r=>r==null?void 0:r.contains(e.target))}function Sa(e,n){return(typeof n.value=="object"&&n.value.closeConditional||fo)(e)}function mo(e,n,t){const i=typeof t.value=="function"?t.value:t.value.handler;n._clickOutside.lastMousedownWasOutside&&Ca(e,n,t)&&setTimeout(()=>{Sa(e,t)&&i&&i(e)},0)}function Pi(e,n){const t=Zi(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const po={mounted(e,n){const t=a=>mo(a,e,n),i=a=>{e._clickOutside.lastMousedownWasOutside=Ca(a,e,n)};Pi(e,a=>{a.addEventListener("click",t,!0),a.addEventListener("mousedown",i,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:i}},unmounted(e,n){e._clickOutside&&(Pi(e,t=>{var r;if(!t||!((r=e._clickOutside)!=null&&r[n.instance.$.uid]))return;const{onClick:i,onMousedown:a}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",i,!0),t.removeEventListener("mousedown",a,!0)}),delete e._clickOutside[n.instance.$.uid])}};function go(e){const{modelValue:n,color:t,...i}=e;return s(je,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&s("div",K({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},i),null)]})}const Qn=V({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,opacity:[Number,String],noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...to(),...U(),...Ue(),...so(),...jl(),...Kl(),...se(),...Xn()},"VOverlay"),en=z()({name:"VOverlay",directives:{ClickOutside:po},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...Qn()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:i,emit:a}=n;const r=ve(e,"modelValue"),l=h({get:()=>r.value,set:G=>{G&&e.disabled||(r.value=G)}}),{teleportTarget:o}=vo(h(()=>e.attach||e.contained)),{themeClasses:c}=ce(e),{rtlClasses:u,isRtl:f}=sn(),{hasContent:m,onAfterLeave:p}=co(e,l),d=He(h(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:g,localTop:v,stackStyles:b}=uo(l,R(e,"zIndex"),e._disableGlobalStack),{activatorEl:y,activatorRef:C,target:S,targetEl:A,targetRef:I,activatorEvents:k,contentEvents:x,scrimEvents:E}=io(e,{isActive:l,isTop:v}),{dimensionStyles:O}=qe(e),B=oo(),{scopeId:P}=Jn();D(()=>e.disabled,G=>{G&&(l.value=!1)});const _=$(),w=$(),L=$(),{contentStyles:T,updateLocation:j}=Wl(e,{isRtl:f,contentEl:L,target:S,isActive:l});Yl(e,{root:_,contentEl:L,targetEl:A,isActive:l,updateLocation:j});function Y(G){a("click:outside",G),e.persistent?de():l.value=!1}function W(G){return l.value&&g.value&&(!e.scrim||G.target===w.value)}me&&D(l,G=>{G?window.addEventListener("keydown",te):window.removeEventListener("keydown",te)},{immediate:!0}),ze(()=>{me&&window.removeEventListener("keydown",te)});function te(G){var le,Fe;G.key==="Escape"&&g.value&&(e.persistent?de():(l.value=!1,(le=L.value)!=null&&le.contains(document.activeElement)&&((Fe=y.value)==null||Fe.focus())))}const M=ul();Qe(()=>e.closeOnBack,()=>{vl(M,G=>{g.value&&l.value?(G(!1),e.persistent?de():l.value=!1):G()})});const J=$();D(()=>l.value&&(e.absolute||e.contained)&&o.value==null,G=>{if(G){const le=$r(_.value);le&&le!==document.scrollingElement&&(J.value=le.scrollTop)}});function de(){e.noClickAnimation||L.value&&Xe(L.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:Hn})}function Ge(){a("afterEnter")}function Ze(){p(),a("afterLeave")}return N(()=>{var G;return s(ee,null,[(G=t.activator)==null?void 0:G.call(t,{isActive:l.value,targetRef:I,props:K({ref:C},k.value,e.activatorProps)}),B.value&&m.value&&s(Ya,{disabled:!o.value,to:o.value},{default:()=>[s("div",K({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":l.value,"v-overlay--contained":e.contained},c.value,u.value,e.class],style:[b.value,{"--v-overlay-opacity":e.opacity,top:H(J.value)},e.style],ref:_},P,i),[s(go,K({color:d,modelValue:l.value&&!!e.scrim,ref:w},E.value),null),s(Be,{appear:!0,persisted:!0,transition:e.transition,target:S.value,onAfterEnter:Ge,onAfterLeave:Ze},{default:()=>{var le;return[Se(s("div",K({ref:L,class:["v-overlay__content",e.contentClass],style:[O.value,T.value]},x.value,e.contentProps),[(le=t.default)==null?void 0:le.call(t,{isActive:l})]),[[yn,l.value],[bn("click-outside"),{handler:Y,closeConditional:W,include:()=>[y.value]}]])]}})])]})])}),{activatorEl:y,scrimEl:w,target:S,animateClick:de,contentEl:L,globalTop:g,localTop:v,updateLocation:j}}}),ot=Symbol("Forwarded refs");function st(e,n){let t=e;for(;t;){const i=Reflect.getOwnPropertyDescriptor(t,n);if(i)return i;t=Object.getPrototypeOf(t)}}function wn(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),i=1;i<n;i++)t[i-1]=arguments[i];return e[ot]=t,new Proxy(e,{get(a,r){if(Reflect.has(a,r))return Reflect.get(a,r);if(!(typeof r=="symbol"||r.startsWith("$")||r.startsWith("__"))){for(const l of t)if(l.value&&Reflect.has(l.value,r)){const o=Reflect.get(l.value,r);return typeof o=="function"?o.bind(l.value):o}}},has(a,r){if(Reflect.has(a,r))return!0;if(typeof r=="symbol"||r.startsWith("$")||r.startsWith("__"))return!1;for(const l of t)if(l.value&&Reflect.has(l.value,r))return!0;return!1},set(a,r,l){if(Reflect.has(a,r))return Reflect.set(a,r,l);if(typeof r=="symbol"||r.startsWith("$")||r.startsWith("__"))return!1;for(const o of t)if(o.value&&Reflect.has(o.value,r))return Reflect.set(o.value,r,l);return!1},getOwnPropertyDescriptor(a,r){var o;const l=Reflect.getOwnPropertyDescriptor(a,r);if(l)return l;if(!(typeof r=="symbol"||r.startsWith("$")||r.startsWith("__"))){for(const c of t){if(!c.value)continue;const u=st(c.value,r)??("_"in c.value?st((o=c.value._)==null?void 0:o.setupState,r):void 0);if(u)return u}for(const c of t){const u=c.value&&c.value[ot];if(!u)continue;const f=u.slice();for(;f.length;){const m=f.shift(),p=st(m.value,r);if(p)return p;const d=m.value&&m.value[ot];d&&f.push(...d)}}}}})}const ho=V({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...Qn({origin:"center center",scrollStrategy:"block",transition:{component:ba},zIndex:2400})},"VDialog"),Va=z()({name:"VDialog",props:ho(),emits:{"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,n){let{emit:t,slots:i}=n;const a=ve(e,"modelValue"),{scopeId:r}=Jn(),l=$();function o(f){var d,g;const m=f.relatedTarget,p=f.target;if(m!==p&&((d=l.value)!=null&&d.contentEl)&&((g=l.value)!=null&&g.globalTop)&&![document,l.value.contentEl].includes(p)&&!l.value.contentEl.contains(p)){const v=En(l.value.contentEl);if(!v.length)return;const b=v[0],y=v[v.length-1];m===b?y.focus():b.focus()}}me&&D(()=>a.value&&e.retainFocus,f=>{f?document.addEventListener("focusin",o):document.removeEventListener("focusin",o)},{immediate:!0});function c(){var f;(f=l.value)!=null&&f.contentEl&&!l.value.contentEl.contains(document.activeElement)&&l.value.contentEl.focus({preventScroll:!0})}function u(){t("afterLeave")}return D(a,async f=>{var m;f||(await _e(),(m=l.value.activatorEl)==null||m.focus({preventScroll:!0}))}),N(()=>{const f=en.filterProps(e),m=K({"aria-haspopup":"dialog","aria-expanded":String(a.value)},e.activatorProps),p=K({tabindex:-1},e.contentProps);return s(en,K({ref:l,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},f,{modelValue:a.value,"onUpdate:modelValue":d=>a.value=d,"aria-modal":"true",activatorProps:m,contentProps:p,role:"dialog",onAfterEnter:c,onAfterLeave:u},r),{activator:i.activator,default:function(){for(var d=arguments.length,g=new Array(d),v=0;v<d;v++)g[v]=arguments[v];return s(ae,{root:"VDialog"},{default:()=>{var b;return[(b=i.default)==null?void 0:b.call(i,...g)]}})}})}),wn({},l)}}),La=Symbol.for("vuetify:form"),bo=V({disabled:Boolean,fastFail:Boolean,readonly:Boolean,modelValue:{type:Boolean,default:null},validateOn:{type:String,default:"input"}},"form");function yo(e){const n=ve(e,"modelValue"),t=h(()=>e.disabled),i=h(()=>e.readonly),a=Z(!1),r=$([]),l=$([]);async function o(){const f=[];let m=!0;l.value=[],a.value=!0;for(const p of r.value){const d=await p.validate();if(d.length>0&&(m=!1,f.push({id:p.id,errorMessages:d})),!m&&e.fastFail)break}return l.value=f,a.value=!1,{valid:m,errors:l.value}}function c(){r.value.forEach(f=>f.reset())}function u(){r.value.forEach(f=>f.resetValidation())}return D(r,()=>{let f=0,m=0;const p=[];for(const d of r.value)d.isValid===!1?(m++,p.push({id:d.id,errorMessages:d.errorMessages})):d.isValid===!0&&f++;l.value=p,n.value=m>0?!1:f===r.value.length?!0:null},{deep:!0,flush:"post"}),be(La,{register:f=>{let{id:m,vm:p,validate:d,reset:g,resetValidation:v}=f;r.value.some(b=>b.id===m),r.value.push({id:m,validate:d,reset:g,resetValidation:v,vm:Xa(p),isValid:null,errorMessages:[]})},unregister:f=>{r.value=r.value.filter(m=>m.id!==f)},update:(f,m,p)=>{const d=r.value.find(g=>g.id===f);d&&(d.isValid=m,d.errorMessages=p)},isDisabled:t,isReadonly:i,isValidating:a,isValid:n,items:r,validateOn:R(e,"validateOn")}),{errors:l,isDisabled:t,isReadonly:i,isValidating:a,isValid:n,items:r,validate:o,reset:c,resetValidation:u}}function xo(){return X(La,null)}const _o=V({...U(),...bo()},"VForm"),Aa=z()({name:"VForm",props:_o(),emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,n){let{slots:t,emit:i}=n;const a=yo(e),r=$();function l(c){c.preventDefault(),a.reset()}function o(c){const u=c,f=a.validate();u.then=f.then.bind(f),u.catch=f.catch.bind(f),u.finally=f.finally.bind(f),i("submit",u),u.defaultPrevented||f.then(m=>{var d;let{valid:p}=m;p&&((d=r.value)==null||d.submit())}),u.preventDefault()}return N(()=>{var c;return s("form",{ref:r,class:["v-form",e.class],style:e.style,novalidate:!0,onReset:l,onSubmit:o},[(c=t.default)==null?void 0:c.call(t,a)])}),wn(a,r)}});var wo=`.v-container {
  width: 100%;
  padding: 16px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 960px) {
  .v-container {
    max-width: 900px;
  }
}
@media (min-width: 1280px) {
  .v-container {
    max-width: 1200px;
  }
}
@media (min-width: 1920px) {
  .v-container {
    max-width: 1800px;
  }
}
@media (min-width: 2560px) {
  .v-container {
    max-width: 2400px;
  }
}
.v-container--fluid {
  max-width: 100%;
}
.v-container.fill-height {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
}

.v-row {
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
  margin: -12px;
}
.v-row + .v-row {
  margin-top: 12px;
}
.v-row + .v-row--dense {
  margin-top: 4px;
}
.v-row--dense {
  margin: -4px;
}
.v-row--dense > .v-col,
.v-row--dense > [class*=v-col-] {
  padding: 4px;
}
.v-row.v-row--no-gutters {
  margin: 0;
}
.v-row.v-row--no-gutters > .v-col,
.v-row.v-row--no-gutters > [class*=v-col-] {
  padding: 0;
}

.v-spacer {
  flex-grow: 1;
}

.v-col-xxl,
.v-col-xxl-auto, .v-col-xxl-12, .v-col-xxl-11, .v-col-xxl-10, .v-col-xxl-9, .v-col-xxl-8, .v-col-xxl-7, .v-col-xxl-6, .v-col-xxl-5, .v-col-xxl-4, .v-col-xxl-3, .v-col-xxl-2, .v-col-xxl-1, .v-col-xl,
.v-col-xl-auto, .v-col-xl-12, .v-col-xl-11, .v-col-xl-10, .v-col-xl-9, .v-col-xl-8, .v-col-xl-7, .v-col-xl-6, .v-col-xl-5, .v-col-xl-4, .v-col-xl-3, .v-col-xl-2, .v-col-xl-1, .v-col-lg,
.v-col-lg-auto, .v-col-lg-12, .v-col-lg-11, .v-col-lg-10, .v-col-lg-9, .v-col-lg-8, .v-col-lg-7, .v-col-lg-6, .v-col-lg-5, .v-col-lg-4, .v-col-lg-3, .v-col-lg-2, .v-col-lg-1, .v-col-md,
.v-col-md-auto, .v-col-md-12, .v-col-md-11, .v-col-md-10, .v-col-md-9, .v-col-md-8, .v-col-md-7, .v-col-md-6, .v-col-md-5, .v-col-md-4, .v-col-md-3, .v-col-md-2, .v-col-md-1, .v-col-sm,
.v-col-sm-auto, .v-col-sm-12, .v-col-sm-11, .v-col-sm-10, .v-col-sm-9, .v-col-sm-8, .v-col-sm-7, .v-col-sm-6, .v-col-sm-5, .v-col-sm-4, .v-col-sm-3, .v-col-sm-2, .v-col-sm-1, .v-col,
.v-col-auto, .v-col-12, .v-col-11, .v-col-10, .v-col-9, .v-col-8, .v-col-7, .v-col-6, .v-col-5, .v-col-4, .v-col-3, .v-col-2, .v-col-1 {
  width: 100%;
  padding: 12px;
}

.v-col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
}

.v-col-auto {
  flex: 0 0 auto;
  width: auto;
  max-width: 100%;
}

.v-col-1 {
  flex: 0 0 8.3333333333%;
  max-width: 8.3333333333%;
}

.v-col-2 {
  flex: 0 0 16.6666666667%;
  max-width: 16.6666666667%;
}

.v-col-3 {
  flex: 0 0 25%;
  max-width: 25%;
}

.v-col-4 {
  flex: 0 0 33.3333333333%;
  max-width: 33.3333333333%;
}

.v-col-5 {
  flex: 0 0 41.6666666667%;
  max-width: 41.6666666667%;
}

.v-col-6 {
  flex: 0 0 50%;
  max-width: 50%;
}

.v-col-7 {
  flex: 0 0 58.3333333333%;
  max-width: 58.3333333333%;
}

.v-col-8 {
  flex: 0 0 66.6666666667%;
  max-width: 66.6666666667%;
}

.v-col-9 {
  flex: 0 0 75%;
  max-width: 75%;
}

.v-col-10 {
  flex: 0 0 83.3333333333%;
  max-width: 83.3333333333%;
}

.v-col-11 {
  flex: 0 0 91.6666666667%;
  max-width: 91.6666666667%;
}

.v-col-12 {
  flex: 0 0 100%;
  max-width: 100%;
}

.offset-1 {
  margin-inline-start: 8.3333333333%;
}

.offset-2 {
  margin-inline-start: 16.6666666667%;
}

.offset-3 {
  margin-inline-start: 25%;
}

.offset-4 {
  margin-inline-start: 33.3333333333%;
}

.offset-5 {
  margin-inline-start: 41.6666666667%;
}

.offset-6 {
  margin-inline-start: 50%;
}

.offset-7 {
  margin-inline-start: 58.3333333333%;
}

.offset-8 {
  margin-inline-start: 66.6666666667%;
}

.offset-9 {
  margin-inline-start: 75%;
}

.offset-10 {
  margin-inline-start: 83.3333333333%;
}

.offset-11 {
  margin-inline-start: 91.6666666667%;
}

@media (min-width: 600px) {
  .v-col-sm {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
  .v-col-sm-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }
  .v-col-sm-1 {
    flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%;
  }
  .v-col-sm-2 {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }
  .v-col-sm-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .v-col-sm-4 {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }
  .v-col-sm-5 {
    flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%;
  }
  .v-col-sm-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .v-col-sm-7 {
    flex: 0 0 58.3333333333%;
    max-width: 58.3333333333%;
  }
  .v-col-sm-8 {
    flex: 0 0 66.6666666667%;
    max-width: 66.6666666667%;
  }
  .v-col-sm-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .v-col-sm-10 {
    flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%;
  }
  .v-col-sm-11 {
    flex: 0 0 91.6666666667%;
    max-width: 91.6666666667%;
  }
  .v-col-sm-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .offset-sm-0 {
    margin-inline-start: 0;
  }
  .offset-sm-1 {
    margin-inline-start: 8.3333333333%;
  }
  .offset-sm-2 {
    margin-inline-start: 16.6666666667%;
  }
  .offset-sm-3 {
    margin-inline-start: 25%;
  }
  .offset-sm-4 {
    margin-inline-start: 33.3333333333%;
  }
  .offset-sm-5 {
    margin-inline-start: 41.6666666667%;
  }
  .offset-sm-6 {
    margin-inline-start: 50%;
  }
  .offset-sm-7 {
    margin-inline-start: 58.3333333333%;
  }
  .offset-sm-8 {
    margin-inline-start: 66.6666666667%;
  }
  .offset-sm-9 {
    margin-inline-start: 75%;
  }
  .offset-sm-10 {
    margin-inline-start: 83.3333333333%;
  }
  .offset-sm-11 {
    margin-inline-start: 91.6666666667%;
  }
}
@media (min-width: 960px) {
  .v-col-md {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
  .v-col-md-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }
  .v-col-md-1 {
    flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%;
  }
  .v-col-md-2 {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }
  .v-col-md-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .v-col-md-4 {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }
  .v-col-md-5 {
    flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%;
  }
  .v-col-md-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .v-col-md-7 {
    flex: 0 0 58.3333333333%;
    max-width: 58.3333333333%;
  }
  .v-col-md-8 {
    flex: 0 0 66.6666666667%;
    max-width: 66.6666666667%;
  }
  .v-col-md-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .v-col-md-10 {
    flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%;
  }
  .v-col-md-11 {
    flex: 0 0 91.6666666667%;
    max-width: 91.6666666667%;
  }
  .v-col-md-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .offset-md-0 {
    margin-inline-start: 0;
  }
  .offset-md-1 {
    margin-inline-start: 8.3333333333%;
  }
  .offset-md-2 {
    margin-inline-start: 16.6666666667%;
  }
  .offset-md-3 {
    margin-inline-start: 25%;
  }
  .offset-md-4 {
    margin-inline-start: 33.3333333333%;
  }
  .offset-md-5 {
    margin-inline-start: 41.6666666667%;
  }
  .offset-md-6 {
    margin-inline-start: 50%;
  }
  .offset-md-7 {
    margin-inline-start: 58.3333333333%;
  }
  .offset-md-8 {
    margin-inline-start: 66.6666666667%;
  }
  .offset-md-9 {
    margin-inline-start: 75%;
  }
  .offset-md-10 {
    margin-inline-start: 83.3333333333%;
  }
  .offset-md-11 {
    margin-inline-start: 91.6666666667%;
  }
}
@media (min-width: 1280px) {
  .v-col-lg {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
  .v-col-lg-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }
  .v-col-lg-1 {
    flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%;
  }
  .v-col-lg-2 {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }
  .v-col-lg-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .v-col-lg-4 {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }
  .v-col-lg-5 {
    flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%;
  }
  .v-col-lg-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .v-col-lg-7 {
    flex: 0 0 58.3333333333%;
    max-width: 58.3333333333%;
  }
  .v-col-lg-8 {
    flex: 0 0 66.6666666667%;
    max-width: 66.6666666667%;
  }
  .v-col-lg-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .v-col-lg-10 {
    flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%;
  }
  .v-col-lg-11 {
    flex: 0 0 91.6666666667%;
    max-width: 91.6666666667%;
  }
  .v-col-lg-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .offset-lg-0 {
    margin-inline-start: 0;
  }
  .offset-lg-1 {
    margin-inline-start: 8.3333333333%;
  }
  .offset-lg-2 {
    margin-inline-start: 16.6666666667%;
  }
  .offset-lg-3 {
    margin-inline-start: 25%;
  }
  .offset-lg-4 {
    margin-inline-start: 33.3333333333%;
  }
  .offset-lg-5 {
    margin-inline-start: 41.6666666667%;
  }
  .offset-lg-6 {
    margin-inline-start: 50%;
  }
  .offset-lg-7 {
    margin-inline-start: 58.3333333333%;
  }
  .offset-lg-8 {
    margin-inline-start: 66.6666666667%;
  }
  .offset-lg-9 {
    margin-inline-start: 75%;
  }
  .offset-lg-10 {
    margin-inline-start: 83.3333333333%;
  }
  .offset-lg-11 {
    margin-inline-start: 91.6666666667%;
  }
}
@media (min-width: 1920px) {
  .v-col-xl {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
  .v-col-xl-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }
  .v-col-xl-1 {
    flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%;
  }
  .v-col-xl-2 {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }
  .v-col-xl-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .v-col-xl-4 {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }
  .v-col-xl-5 {
    flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%;
  }
  .v-col-xl-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .v-col-xl-7 {
    flex: 0 0 58.3333333333%;
    max-width: 58.3333333333%;
  }
  .v-col-xl-8 {
    flex: 0 0 66.6666666667%;
    max-width: 66.6666666667%;
  }
  .v-col-xl-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .v-col-xl-10 {
    flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%;
  }
  .v-col-xl-11 {
    flex: 0 0 91.6666666667%;
    max-width: 91.6666666667%;
  }
  .v-col-xl-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .offset-xl-0 {
    margin-inline-start: 0;
  }
  .offset-xl-1 {
    margin-inline-start: 8.3333333333%;
  }
  .offset-xl-2 {
    margin-inline-start: 16.6666666667%;
  }
  .offset-xl-3 {
    margin-inline-start: 25%;
  }
  .offset-xl-4 {
    margin-inline-start: 33.3333333333%;
  }
  .offset-xl-5 {
    margin-inline-start: 41.6666666667%;
  }
  .offset-xl-6 {
    margin-inline-start: 50%;
  }
  .offset-xl-7 {
    margin-inline-start: 58.3333333333%;
  }
  .offset-xl-8 {
    margin-inline-start: 66.6666666667%;
  }
  .offset-xl-9 {
    margin-inline-start: 75%;
  }
  .offset-xl-10 {
    margin-inline-start: 83.3333333333%;
  }
  .offset-xl-11 {
    margin-inline-start: 91.6666666667%;
  }
}
@media (min-width: 2560px) {
  .v-col-xxl {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
  .v-col-xxl-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }
  .v-col-xxl-1 {
    flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%;
  }
  .v-col-xxl-2 {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }
  .v-col-xxl-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .v-col-xxl-4 {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }
  .v-col-xxl-5 {
    flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%;
  }
  .v-col-xxl-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .v-col-xxl-7 {
    flex: 0 0 58.3333333333%;
    max-width: 58.3333333333%;
  }
  .v-col-xxl-8 {
    flex: 0 0 66.6666666667%;
    max-width: 66.6666666667%;
  }
  .v-col-xxl-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .v-col-xxl-10 {
    flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%;
  }
  .v-col-xxl-11 {
    flex: 0 0 91.6666666667%;
    max-width: 91.6666666667%;
  }
  .v-col-xxl-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .offset-xxl-0 {
    margin-inline-start: 0;
  }
  .offset-xxl-1 {
    margin-inline-start: 8.3333333333%;
  }
  .offset-xxl-2 {
    margin-inline-start: 16.6666666667%;
  }
  .offset-xxl-3 {
    margin-inline-start: 25%;
  }
  .offset-xxl-4 {
    margin-inline-start: 33.3333333333%;
  }
  .offset-xxl-5 {
    margin-inline-start: 41.6666666667%;
  }
  .offset-xxl-6 {
    margin-inline-start: 50%;
  }
  .offset-xxl-7 {
    margin-inline-start: 58.3333333333%;
  }
  .offset-xxl-8 {
    margin-inline-start: 66.6666666667%;
  }
  .offset-xxl-9 {
    margin-inline-start: 75%;
  }
  .offset-xxl-10 {
    margin-inline-start: 83.3333333333%;
  }
  .offset-xxl-11 {
    margin-inline-start: 91.6666666667%;
  }
}`;q(wo);const gn=Et("v-spacer","div","VSpacer");var ko=`/* region BLOCK */
.v-text-field input {
  color: inherit;
  opacity: 0;
  flex: 1;
  transition: 0.15s opacity cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 0;
}
.v-text-field input:focus, .v-text-field input:active {
  outline: none;
}
.v-text-field input:invalid {
  box-shadow: none;
}
.v-text-field .v-field {
  cursor: text;
}
.v-text-field--prefixed.v-text-field .v-field__input {
  --v-field-padding-start: 6px;
}

.v-text-field--suffixed.v-text-field .v-field__input {
  --v-field-padding-end: 0;
}

.v-text-field .v-input__details {
  padding-inline: 16px;
}
.v-input--plain-underlined.v-text-field .v-input__details {
  padding-inline: 0;
}

.v-text-field .v-field--no-label input,
.v-text-field .v-field--active input {
  opacity: 1;
}
.v-text-field .v-field--single-line input {
  transition: none;
}

/* endregion */
/* region ELEMENTS */
.v-text-field__prefix, .v-text-field__suffix {
  align-items: center;
  color: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity));
  cursor: default;
  display: flex;
  opacity: 0;
  transition: inherit;
  white-space: nowrap;
  min-height: max(var(--v-input-control-height, 56px), 1.5rem + var(--v-field-input-padding-top) + var(--v-field-input-padding-bottom));
  padding-top: calc(var(--v-field-padding-top, 4px) + var(--v-input-padding-top, 0));
  padding-bottom: var(--v-field-padding-bottom, 6px);
}
.v-field--active .v-text-field__prefix, .v-field--active .v-text-field__suffix {
  opacity: 1;
}
.v-field--disabled .v-text-field__prefix, .v-field--disabled .v-text-field__suffix {
  color: rgba(var(--v-theme-on-surface), var(--v-disabled-opacity));
}
.v-text-field__prefix {
  padding-inline-start: var(--v-field-padding-start);
}
.v-text-field__suffix {
  padding-inline-end: var(--v-field-padding-end);
}

/* endregion */`;q(ko);var Co=`.v-counter {
  color: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity));
  flex: 0 1 auto;
  font-size: 12px;
  transition-duration: 150ms;
}`;q(Co);const So=V({active:Boolean,disabled:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...U(),...Xn({transition:{component:ya}})},"VCounter"),Vo=z()({name:"VCounter",functional:!0,props:So(),setup(e,n){let{slots:t}=n;const i=h(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return N(()=>s(Be,{transition:e.transition},{default:()=>[Se(s("div",{class:["v-counter",{"text-error":e.max&&!e.disabled&&parseFloat(e.value)>parseFloat(e.max)},e.class],style:e.style},[t.default?t.default({counter:i.value,max:e.max,value:e.value}):i.value]),[[yn,e.active]])]})),{}}});var Lo=`/* region INPUT */
.v-field {
  --v-theme-overlay-multiplier: 1;
  display: grid;
  grid-template-areas: "prepend-inner field clear append-inner";
  grid-template-columns: min-content minmax(0, 1fr) min-content min-content;
  font-size: 16px;
  letter-spacing: 0.009375em;
  max-width: 100%;
  border-radius: 4px;
  contain: layout;
  flex: 1 0;
  grid-area: control;
  position: relative;
  --v-field-padding-start: 16px;
  --v-field-padding-end: 16px;
  --v-field-padding-top: 8px;
  --v-field-padding-bottom: 4px;
  --v-field-input-padding-top: calc(var(--v-field-padding-top, 8px) + var(--v-input-padding-top, 0));
  --v-field-input-padding-bottom: var(--v-field-padding-bottom, 4px);
}
.v-field--disabled {
  opacity: var(--v-disabled-opacity);
  pointer-events: none;
}
.v-field .v-chip {
  --v-chip-height: 24px;
}

/* endregion */
/* region MODIFIERS */
.v-field--prepended {
  padding-inline-start: 12px;
}
.v-field--appended {
  padding-inline-end: 12px;
}
.v-field--variant-solo, .v-field--variant-solo-filled {
  background: rgb(var(--v-theme-surface));
  border-color: transparent;
  color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
  box-shadow: 0px 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 2px 2px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 5px 0px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12));
}
.v-field--variant-solo-inverted {
  background: rgb(var(--v-theme-surface));
  border-color: transparent;
  color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
  box-shadow: 0px 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 2px 2px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 5px 0px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12));
}
.v-field--variant-solo-inverted.v-field--focused {
  color: rgb(var(--v-theme-on-surface-variant));
}
.v-field--variant-filled {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.v-input--density-default .v-field--variant-solo, .v-input--density-default .v-field--variant-solo-inverted, .v-input--density-default .v-field--variant-solo-filled, .v-input--density-default .v-field--variant-filled {
  --v-input-control-height: 56px;
  --v-field-padding-bottom: 4px;
}

.v-input--density-comfortable .v-field--variant-solo, .v-input--density-comfortable .v-field--variant-solo-inverted, .v-input--density-comfortable .v-field--variant-solo-filled, .v-input--density-comfortable .v-field--variant-filled {
  --v-input-control-height: 48px;
  --v-field-padding-bottom: 0px;
}

.v-input--density-compact .v-field--variant-solo, .v-input--density-compact .v-field--variant-solo-inverted, .v-input--density-compact .v-field--variant-solo-filled, .v-input--density-compact .v-field--variant-filled {
  --v-input-control-height: 40px;
  --v-field-padding-bottom: 0px;
}

.v-field--variant-outlined, .v-field--single-line, .v-field--no-label {
  --v-field-padding-top: 0px;
}
.v-input--density-default .v-field--variant-outlined, .v-input--density-default .v-field--single-line, .v-input--density-default .v-field--no-label {
  --v-field-padding-bottom: 16px;
}

.v-input--density-comfortable .v-field--variant-outlined, .v-input--density-comfortable .v-field--single-line, .v-input--density-comfortable .v-field--no-label {
  --v-field-padding-bottom: 12px;
}

.v-input--density-compact .v-field--variant-outlined, .v-input--density-compact .v-field--single-line, .v-input--density-compact .v-field--no-label {
  --v-field-padding-bottom: 8px;
}

.v-field--variant-plain, .v-field--variant-underlined {
  border-radius: 0;
  padding: 0;
}
.v-field--variant-plain.v-field, .v-field--variant-underlined.v-field {
  --v-field-padding-start: 0px;
  --v-field-padding-end: 0px;
}
.v-input--density-default .v-field--variant-plain, .v-input--density-default .v-field--variant-underlined {
  --v-input-control-height: 48px;
  --v-field-padding-top: 4px;
  --v-field-padding-bottom: 4px;
}

.v-input--density-comfortable .v-field--variant-plain, .v-input--density-comfortable .v-field--variant-underlined {
  --v-input-control-height: 40px;
  --v-field-padding-top: 2px;
  --v-field-padding-bottom: 0px;
}

.v-input--density-compact .v-field--variant-plain, .v-input--density-compact .v-field--variant-underlined {
  --v-input-control-height: 32px;
  --v-field-padding-top: 0px;
  --v-field-padding-bottom: 0px;
}

.v-field--flat {
  box-shadow: none;
}
.v-field--rounded {
  border-radius: 24px;
}
.v-field.v-field--prepended {
  --v-field-padding-start: 6px;
}
.v-field.v-field--appended {
  --v-field-padding-end: 6px;
}

/* endregion */
/* region ELEMENTS */
.v-field__input {
  align-items: center;
  color: inherit;
  column-gap: 2px;
  display: flex;
  flex-wrap: wrap;
  letter-spacing: 0.009375em;
  opacity: var(--v-high-emphasis-opacity);
  min-height: max(var(--v-input-control-height, 56px), 1.5rem + var(--v-field-input-padding-top) + var(--v-field-input-padding-bottom));
  min-width: 0;
  padding-inline: var(--v-field-padding-start) var(--v-field-padding-end);
  padding-top: var(--v-field-input-padding-top);
  padding-bottom: var(--v-field-input-padding-bottom);
  position: relative;
  width: 100%;
}
.v-input--density-default .v-field__input {
  row-gap: 8px;
}

.v-input--density-comfortable .v-field__input {
  row-gap: 6px;
}

.v-input--density-compact .v-field__input {
  row-gap: 4px;
}

.v-field__input input {
  letter-spacing: inherit;
}
.v-field__input input::placeholder,
input.v-field__input::placeholder,
textarea.v-field__input::placeholder {
  color: currentColor;
  opacity: var(--v-disabled-opacity);
}

.v-field__input:focus, .v-field__input:active {
  outline: none;
}
.v-field__input:invalid {
  box-shadow: none;
}

.v-field__field {
  flex: 1 0;
  grid-area: field;
  position: relative;
  align-items: flex-start;
  display: flex;
}

/* endregion */
/* region AFFIXES */
.v-field__prepend-inner {
  grid-area: prepend-inner;
  padding-inline-end: var(--v-field-padding-after);
}

.v-field__clearable {
  grid-area: clear;
}

.v-field__append-inner {
  grid-area: append-inner;
  padding-inline-start: var(--v-field-padding-after);
}

.v-field__append-inner,
.v-field__clearable,
.v-field__prepend-inner {
  display: flex;
  align-items: flex-start;
  padding-top: var(--v-input-padding-top, 8px);
}
.v-field--center-affix .v-field__append-inner,
.v-field--center-affix .v-field__clearable,
.v-field--center-affix .v-field__prepend-inner {
  align-items: center;
  padding-top: 0;
}

.v-field.v-field--variant-underlined .v-field__append-inner,
.v-field.v-field--variant-underlined .v-field__clearable,
.v-field.v-field--variant-underlined .v-field__prepend-inner,
.v-field.v-field--variant-plain .v-field__append-inner,
.v-field.v-field--variant-plain .v-field__clearable,
.v-field.v-field--variant-plain .v-field__prepend-inner {
  align-items: flex-start;
  padding-top: calc(var(--v-field-padding-top, 8px) + var(--v-input-padding-top, 0));
  padding-bottom: var(--v-field-padding-bottom, 4px);
}

.v-field--focused .v-field__prepend-inner,
.v-field--focused .v-field__append-inner {
  opacity: 1;
}

.v-field__prepend-inner > .v-icon,
.v-field__append-inner > .v-icon,
.v-field__clearable > .v-icon {
  opacity: var(--v-medium-emphasis-opacity);
}
.v-field--disabled .v-field__prepend-inner > .v-icon, .v-field--error .v-field__prepend-inner > .v-icon,
.v-field--disabled .v-field__append-inner > .v-icon,
.v-field--error .v-field__append-inner > .v-icon,
.v-field--disabled .v-field__clearable > .v-icon,
.v-field--error .v-field__clearable > .v-icon {
  opacity: 1;
}
.v-field--error:not(.v-field--disabled) .v-field__prepend-inner > .v-icon,
.v-field--error:not(.v-field--disabled) .v-field__append-inner > .v-icon,
.v-field--error:not(.v-field--disabled) .v-field__clearable > .v-icon {
  color: rgb(var(--v-theme-error));
}

.v-field__clearable {
  cursor: pointer;
  opacity: 0;
  overflow: hidden;
  margin-inline: 4px;
  transition: 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: opacity, transform, width;
}
.v-field--focused .v-field__clearable, .v-field--persistent-clear .v-field__clearable {
  opacity: 1;
}
@media (hover: hover) {
  .v-field:hover .v-field__clearable {
    opacity: 1;
  }
}
@media (hover: none) {
  .v-field__clearable {
    opacity: 1;
  }
}

/* endregion */
/* region LABEL */
.v-label.v-field-label {
  contain: layout paint;
  display: block;
  margin-inline-start: var(--v-field-padding-start);
  margin-inline-end: var(--v-field-padding-end);
  max-width: calc(100% - var(--v-field-padding-start) - var(--v-field-padding-end));
  pointer-events: none;
  position: absolute;
  top: var(--v-input-padding-top);
  transform-origin: left center;
  transition: 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: opacity, transform;
  z-index: 1;
}
.v-field--variant-underlined .v-label.v-field-label, .v-field--variant-plain .v-label.v-field-label {
  top: calc(var(--v-input-padding-top) + var(--v-field-padding-top));
}
.v-field--center-affix .v-label.v-field-label {
  top: 50%;
  transform: translateY(-50%);
}
.v-field--active .v-label.v-field-label {
  visibility: hidden;
}
.v-field--focused .v-label.v-field-label, .v-field--error .v-label.v-field-label {
  opacity: 1;
}
.v-field--error:not(.v-field--disabled) .v-label.v-field-label {
  color: rgb(var(--v-theme-error));
}
.v-label.v-field-label--floating {
  --v-field-label-scale: 0.75em;
  font-size: var(--v-field-label-scale);
  visibility: hidden;
  max-width: 100%;
}
.v-field--center-affix .v-label.v-field-label--floating {
  transform: none;
}
.v-field.v-field--active .v-label.v-field-label--floating {
  visibility: unset;
}
.v-input--density-default .v-field--variant-solo .v-label.v-field-label--floating, .v-input--density-default .v-field--variant-solo-inverted .v-label.v-field-label--floating, .v-input--density-default .v-field--variant-filled .v-label.v-field-label--floating, .v-input--density-default .v-field--variant-solo-filled .v-label.v-field-label--floating {
  top: 7px;
}

.v-input--density-comfortable .v-field--variant-solo .v-label.v-field-label--floating, .v-input--density-comfortable .v-field--variant-solo-inverted .v-label.v-field-label--floating, .v-input--density-comfortable .v-field--variant-filled .v-label.v-field-label--floating, .v-input--density-comfortable .v-field--variant-solo-filled .v-label.v-field-label--floating {
  top: 5px;
}

.v-input--density-compact .v-field--variant-solo .v-label.v-field-label--floating, .v-input--density-compact .v-field--variant-solo-inverted .v-label.v-field-label--floating, .v-input--density-compact .v-field--variant-filled .v-label.v-field-label--floating, .v-input--density-compact .v-field--variant-solo-filled .v-label.v-field-label--floating {
  top: 3px;
}

.v-field--variant-plain .v-label.v-field-label--floating, .v-field--variant-underlined .v-label.v-field-label--floating {
  transform: translateY(-16px);
  margin: 0;
  top: var(--v-input-padding-top);
}
.v-field--variant-outlined .v-label.v-field-label--floating {
  transform: translateY(-50%);
  transform-origin: center;
  position: static;
  margin: 0 4px;
}

/* endregion */
/* region OUTLINE */
.v-field__outline {
  --v-field-border-width: 1px;
  --v-field-border-opacity: 0.38;
  align-items: stretch;
  contain: layout;
  display: flex;
  height: 100%;
  left: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  width: 100%;
}
@media (hover: hover) {
  .v-field:hover .v-field__outline {
    --v-field-border-opacity: var(--v-high-emphasis-opacity);
  }
}
.v-field--error:not(.v-field--disabled) .v-field__outline {
  color: rgb(var(--v-theme-error));
}
.v-field.v-field--focused .v-field__outline, .v-input.v-input--error .v-field__outline {
  --v-field-border-opacity: 1;
}
.v-field--variant-outlined.v-field--focused .v-field__outline {
  --v-field-border-width: 2px;
}
.v-field--variant-filled .v-field__outline::before, .v-field--variant-underlined .v-field__outline::before {
  border-color: currentColor;
  border-style: solid;
  border-width: 0 0 var(--v-field-border-width);
  opacity: var(--v-field-border-opacity);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.v-field--variant-filled .v-field__outline::after, .v-field--variant-underlined .v-field__outline::after {
  border-color: currentColor;
  border-style: solid;
  border-width: 0 0 2px;
  transform: scaleX(0);
  transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.v-field--focused.v-field--variant-filled .v-field__outline::after, .v-field--focused.v-field--variant-underlined .v-field__outline::after {
  transform: scaleX(1);
}

.v-field--variant-outlined .v-field__outline {
  border-radius: inherit;
}
.v-field--variant-outlined .v-field__outline__start, .v-field--variant-outlined .v-field__outline__notch::before, .v-field--variant-outlined .v-field__outline__notch::after, .v-field--variant-outlined .v-field__outline__end {
  border: 0 solid currentColor;
  opacity: var(--v-field-border-opacity);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
.v-field--variant-outlined .v-field__outline__start {
  flex: 0 0 12px;
  border-top-width: var(--v-field-border-width);
  border-bottom-width: var(--v-field-border-width);
  border-inline-start-width: var(--v-field-border-width);
  border-start-start-radius: inherit;
  border-start-end-radius: 0;
  border-end-end-radius: 0;
  border-end-start-radius: inherit;
}
.v-field--rounded.v-field--variant-outlined .v-field__outline__start,
[class^=rounded-].v-field--variant-outlined .v-field__outline__start,
[class*=" rounded-"].v-field--variant-outlined .v-field__outline__start {
  flex-basis: calc(var(--v-input-control-height) / 2 + 2px);
}

.v-field--reverse.v-field--variant-outlined .v-field__outline__start {
  border-start-start-radius: 0;
  border-start-end-radius: inherit;
  border-end-end-radius: inherit;
  border-end-start-radius: 0;
  border-inline-end-width: var(--v-field-border-width);
  border-inline-start-width: 0;
}

.v-field--variant-outlined .v-field__outline__notch {
  flex: none;
  position: relative;
  max-width: calc(100% - 12px);
}
.v-field--variant-outlined .v-field__outline__notch::before, .v-field--variant-outlined .v-field__outline__notch::after {
  opacity: var(--v-field-border-opacity);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.v-field--variant-outlined .v-field__outline__notch::before {
  border-width: var(--v-field-border-width) 0 0;
}
.v-field--variant-outlined .v-field__outline__notch::after {
  bottom: 0;
  border-width: 0 0 var(--v-field-border-width);
}
.v-field--active.v-field--variant-outlined .v-field__outline__notch::before {
  opacity: 0;
}

.v-field--variant-outlined .v-field__outline__end {
  flex: 1;
  border-top-width: var(--v-field-border-width);
  border-bottom-width: var(--v-field-border-width);
  border-inline-end-width: var(--v-field-border-width);
  border-start-start-radius: 0;
  border-start-end-radius: inherit;
  border-end-end-radius: inherit;
  border-end-start-radius: 0;
}
.v-field--reverse.v-field--variant-outlined .v-field__outline__end {
  border-start-start-radius: inherit;
  border-start-end-radius: 0;
  border-end-end-radius: 0;
  border-end-start-radius: inherit;
  border-inline-end-width: 0;
  border-inline-start-width: var(--v-field-border-width);
}

/* endregion */
/* region LOADER */
.v-field__loader {
  top: calc(100% - 2px);
  left: 0;
  position: absolute;
  right: 0;
  width: 100%;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
  overflow: hidden;
}
.v-field--variant-outlined .v-field__loader {
  top: calc(100% - 3px);
  width: calc(100% - 1px * 2);
  left: 1px;
}

/* endregion */
/* region OVERLAY */
.v-field__overlay {
  border-radius: inherit;
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.v-field--variant-filled .v-field__overlay {
  background-color: currentColor;
  opacity: 0.04;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
.v-field--variant-filled.v-field--has-background .v-field__overlay {
  opacity: 0;
}
@media (hover: hover) {
  .v-field--variant-filled:hover .v-field__overlay {
    opacity: calc((0.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier));
  }
}
.v-field--variant-filled.v-field--focused .v-field__overlay {
  opacity: calc((0.04 + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier));
}

.v-field--variant-solo-filled .v-field__overlay {
  background-color: currentColor;
  opacity: 0.04;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
@media (hover: hover) {
  .v-field--variant-solo-filled:hover .v-field__overlay {
    opacity: calc((0.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier));
  }
}
.v-field--variant-solo-filled.v-field--focused .v-field__overlay {
  opacity: calc((0.04 + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier));
}

.v-field--variant-solo-inverted .v-field__overlay {
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
.v-field--variant-solo-inverted.v-field--has-background .v-field__overlay {
  opacity: 0;
}
@media (hover: hover) {
  .v-field--variant-solo-inverted:hover .v-field__overlay {
    opacity: calc((0.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier));
  }
}
.v-field--variant-solo-inverted.v-field--focused .v-field__overlay {
  background-color: rgb(var(--v-theme-surface-variant));
  opacity: 1;
}

/* endregion */
/* region MODIFIERS */
.v-field--reverse .v-field__field,
.v-field--reverse .v-field__input,
.v-field--reverse .v-field__outline {
  flex-direction: row-reverse;
}
.v-field--reverse .v-field__input, .v-field--reverse input {
  text-align: end;
}

.v-input--disabled .v-field--variant-filled .v-field__outline::before,
.v-input--disabled .v-field--variant-underlined .v-field__outline::before {
  border-image: repeating-linear-gradient(to right, rgba(var(--v-theme-on-surface), var(--v-disabled-opacity)) 0px, rgba(var(--v-theme-on-surface), var(--v-disabled-opacity)) 2px, transparent 2px, transparent 4px) 1 repeat;
}

.v-field--loading .v-field__outline::after,
.v-field--loading .v-field__outline::before {
  opacity: 0;
}

/* endregion */`;q(Lo);var Ao=`.v-label {
  align-items: center;
  color: inherit;
  display: inline-flex;
  font-size: 1rem;
  letter-spacing: 0.009375em;
  min-width: 0;
  opacity: var(--v-medium-emphasis-opacity);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.v-label--clickable {
  cursor: pointer;
}`;q(Ao);const Io=V({text:String,onClick:Ee(),...U(),...se()},"VLabel"),Po=z()({name:"VLabel",props:Io(),setup(e,n){let{slots:t}=n;return N(()=>{var i;return s("label",{class:["v-label",{"v-label--clickable":!!e.onClick},e.class],style:e.style,onClick:e.onClick},[e.text,(i=t.default)==null?void 0:i.call(t)])}),{}}}),Eo=V({floating:Boolean,...U()},"VFieldLabel"),Sn=z()({name:"VFieldLabel",props:Eo(),setup(e,n){let{slots:t}=n;return N(()=>s(Po,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},t)),{}}});function Ia(e){const{t:n}=ll();function t(i){let{name:a}=i;const r={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[a],l=e[`onClick:${a}`],o=l&&r?n(`$vuetify.input.${r}`,e.label??""):void 0;return s(oe,{icon:e[`${a}Icon`],"aria-label":o,onClick:l},null)}return{InputIcon:t}}const Pa=V({focused:Boolean,"onUpdate:focused":Ee()},"focus");function Ea(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ve();const t=ve(e,"focused"),i=h(()=>({[`${n}--focused`]:t.value}));function a(){t.value=!0}function r(){t.value=!1}return{focusClasses:i,isFocused:t,focus:a,blur:r}}const zo=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],za=V({appendInnerIcon:ne,bgColor:String,clearable:Boolean,clearIcon:{type:ne,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:ne,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>zo.includes(e)},"onClick:clear":Ee(),"onClick:appendInner":Ee(),"onClick:prependInner":Ee(),...U(),...Tt(),...Le(),...se()},"VField"),Ba=z()({name:"VField",inheritAttrs:!1,props:{id:String,...Pa(),...za()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,n){let{attrs:t,emit:i,slots:a}=n;const{themeClasses:r}=ce(e),{loaderClasses:l}=Ot(e),{focusClasses:o,isFocused:c,focus:u,blur:f}=Ea(e),{InputIcon:m}=Ia(e),{roundedClasses:p}=Ae(e),{rtlClasses:d}=sn(),g=h(()=>e.dirty||e.active),v=h(()=>!e.singleLine&&!!(e.label||a.label)),b=Oe(),y=h(()=>e.id||`input-${b}`),C=h(()=>`${y.value}-messages`),S=$(),A=$(),I=$(),k=h(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:x,backgroundColorStyles:E}=He(R(e,"bgColor")),{textColorClasses:O,textColorStyles:B}=$e(h(()=>e.error||e.disabled?void 0:g.value&&c.value?e.color:e.baseColor));D(g,L=>{if(v.value){const T=S.value.$el,j=A.value.$el;requestAnimationFrame(()=>{const Y=It(T),W=j.getBoundingClientRect(),te=W.x-Y.x,M=W.y-Y.y-(Y.height/2-W.height/2),J=W.width/.75,de=Math.abs(J-Y.width)>1?{maxWidth:H(J)}:void 0,Ge=getComputedStyle(T),Ze=getComputedStyle(j),G=parseFloat(Ge.transitionDuration)*1e3||150,le=parseFloat(Ze.getPropertyValue("--v-field-label-scale")),Fe=Ze.getPropertyValue("color");T.style.visibility="visible",j.style.visibility="hidden",Xe(T,{transform:`translate(${te}px, ${M}px) scale(${le})`,color:Fe,...de},{duration:G,easing:Hn,direction:L?"normal":"reverse"}).finished.then(()=>{T.style.removeProperty("visibility"),j.style.removeProperty("visibility")})})}},{flush:"post"});const P=h(()=>({isActive:g,isFocused:c,controlRef:I,blur:f,focus:u}));function _(L){L.target!==document.activeElement&&L.preventDefault()}function w(L){var T;L.key!=="Enter"&&L.key!==" "||(L.preventDefault(),L.stopPropagation(),(T=e["onClick:clear"])==null||T.call(e,new MouseEvent("click")))}return N(()=>{var te,M,J;const L=e.variant==="outlined",T=!!(a["prepend-inner"]||e.prependInnerIcon),j=!!(e.clearable||a.clear),Y=!!(a["append-inner"]||e.appendInnerIcon||j),W=()=>a.label?a.label({...P.value,label:e.label,props:{for:y.value}}):e.label;return s("div",K({class:["v-field",{"v-field--active":g.value,"v-field--appended":Y,"v-field--center-affix":e.centerAffix??!k.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":T,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!W(),[`v-field--variant-${e.variant}`]:!0},r.value,x.value,o.value,l.value,p.value,d.value,e.class],style:[E.value,e.style],onClick:_},t),[s("div",{class:"v-field__overlay"},null),s(na,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:a.loader}),T&&s("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&s(m,{key:"prepend-icon",name:"prependInner"},null),(te=a["prepend-inner"])==null?void 0:te.call(a,P.value)]),s("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&v.value&&s(Sn,{key:"floating-label",ref:A,class:[O.value],floating:!0,for:y.value,style:B.value},{default:()=>[W()]}),s(Sn,{ref:S,for:y.value},{default:()=>[W()]}),(M=a.default)==null?void 0:M.call(a,{...P.value,props:{id:y.value,class:"v-field__input","aria-describedby":C.value},focus:u,blur:f})]),j&&s(Rl,{key:"clear"},{default:()=>[Se(s("div",{class:"v-field__clearable",onMousedown:de=>{de.preventDefault(),de.stopPropagation()}},[s(ae,{defaults:{VIcon:{icon:e.clearIcon}}},{default:()=>[a.clear?a.clear({...P.value,props:{onKeydown:w,onFocus:u,onBlur:f,onClick:e["onClick:clear"]}}):s(m,{name:"clear",onKeydown:w,onFocus:u,onBlur:f},null)]})]),[[yn,e.dirty]])]}),Y&&s("div",{key:"append",class:"v-field__append-inner"},[(J=a["append-inner"])==null?void 0:J.call(a,P.value),e.appendInnerIcon&&s(m,{key:"append-icon",name:"appendInner"},null)]),s("div",{class:["v-field__outline",O.value],style:B.value},[L&&s(ee,null,[s("div",{class:"v-field__outline__start"},null),v.value&&s("div",{class:"v-field__outline__notch"},[s(Sn,{ref:A,floating:!0,for:y.value},{default:()=>[W()]})]),s("div",{class:"v-field__outline__end"},null)]),k.value&&v.value&&s(Sn,{ref:A,floating:!0,for:y.value},{default:()=>[W()]})])])}),{controlRef:I}}});function Bo(e){const n=Object.keys(Ba.props).filter(t=>!Lt(t)&&t!=="class"&&t!=="style");return Ri(e,n)}var Ho=`.v-input {
  display: grid;
  flex: 1 1 auto;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
}
.v-input--disabled {
  pointer-events: none;
}
.v-input--density-default {
  --v-input-control-height: 56px;
  --v-input-padding-top: 16px;
}

.v-input--density-comfortable {
  --v-input-control-height: 48px;
  --v-input-padding-top: 12px;
}

.v-input--density-compact {
  --v-input-control-height: 40px;
  --v-input-padding-top: 8px;
}

.v-input--vertical {
  grid-template-areas: "append" "control" "prepend";
  grid-template-rows: max-content auto max-content;
  grid-template-columns: min-content;
}
.v-input--vertical .v-input__prepend {
  margin-block-start: 16px;
}
.v-input--vertical .v-input__append {
  margin-block-end: 16px;
}

.v-input--horizontal {
  grid-template-areas: "prepend control append" "a messages b";
  grid-template-columns: max-content minmax(0, 1fr) max-content;
  grid-template-rows: auto auto;
}
.v-input--horizontal .v-input__prepend {
  margin-inline-end: 16px;
}
.v-input--horizontal .v-input__append {
  margin-inline-start: 16px;
}

.v-input__details {
  align-items: flex-end;
  display: flex;
  font-size: 0.75rem;
  font-weight: 400;
  grid-area: messages;
  letter-spacing: 0.0333333333em;
  line-height: normal;
  min-height: 22px;
  padding-top: 6px;
  overflow: hidden;
  justify-content: space-between;
}

.v-input__details > .v-icon,
.v-input__prepend > .v-icon,
.v-input__append > .v-icon {
  opacity: var(--v-medium-emphasis-opacity);
}
.v-input--disabled .v-input__details > .v-icon,
.v-input--disabled .v-input__details .v-messages, .v-input--error .v-input__details > .v-icon,
.v-input--error .v-input__details .v-messages,
.v-input--disabled .v-input__prepend > .v-icon,
.v-input--disabled .v-input__prepend .v-messages,
.v-input--error .v-input__prepend > .v-icon,
.v-input--error .v-input__prepend .v-messages,
.v-input--disabled .v-input__append > .v-icon,
.v-input--disabled .v-input__append .v-messages,
.v-input--error .v-input__append > .v-icon,
.v-input--error .v-input__append .v-messages {
  opacity: 1;
}
.v-input--disabled .v-input__details,
.v-input--disabled .v-input__prepend,
.v-input--disabled .v-input__append {
  opacity: var(--v-disabled-opacity);
}
.v-input--error:not(.v-input--disabled) .v-input__details > .v-icon,
.v-input--error:not(.v-input--disabled) .v-input__details .v-messages,
.v-input--error:not(.v-input--disabled) .v-input__prepend > .v-icon,
.v-input--error:not(.v-input--disabled) .v-input__prepend .v-messages,
.v-input--error:not(.v-input--disabled) .v-input__append > .v-icon,
.v-input--error:not(.v-input--disabled) .v-input__append .v-messages {
  color: rgb(var(--v-theme-error));
}

.v-input__prepend,
.v-input__append {
  display: flex;
  align-items: flex-start;
  padding-top: var(--v-input-padding-top);
}
.v-input--center-affix .v-input__prepend,
.v-input--center-affix .v-input__append {
  align-items: center;
  padding-top: 0;
}

.v-input__prepend {
  grid-area: prepend;
}

.v-input__append {
  grid-area: append;
}

.v-input__control {
  display: flex;
  grid-area: control;
}

.v-input--hide-spin-buttons input::-webkit-outer-spin-button,
.v-input--hide-spin-buttons input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.v-input--hide-spin-buttons input[type=number] {
  -moz-appearance: textfield;
}
.v-input--plain-underlined .v-input__prepend,
.v-input--plain-underlined .v-input__append {
  align-items: flex-start;
}
.v-input--density-default.v-input--plain-underlined .v-input__prepend, .v-input--density-default.v-input--plain-underlined .v-input__append {
  padding-top: calc(var(--v-input-padding-top) + 4px);
}

.v-input--density-comfortable.v-input--plain-underlined .v-input__prepend, .v-input--density-comfortable.v-input--plain-underlined .v-input__append {
  padding-top: calc(var(--v-input-padding-top) + 2px);
}

.v-input--density-compact.v-input--plain-underlined .v-input__prepend, .v-input--density-compact.v-input--plain-underlined .v-input__append {
  padding-top: calc(var(--v-input-padding-top) + 0px);
}`;q(Ho);var $o=`.v-messages {
  flex: 1 1 auto;
  font-size: 12px;
  min-height: 14px;
  min-width: 1px;
  opacity: var(--v-medium-emphasis-opacity);
  position: relative;
}
.v-messages__message {
  line-height: 12px;
  word-break: break-word;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
  transition-duration: 150ms;
}`;q($o);const To=V({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...U(),...Xn({transition:{component:ya,leaveAbsolute:!0,group:!0}})},"VMessages"),Oo=z()({name:"VMessages",props:To(),setup(e,n){let{slots:t}=n;const i=h(()=>Re(e.messages)),{textColorClasses:a,textColorStyles:r}=$e(h(()=>e.color));return N(()=>s(Be,{transition:e.transition,tag:"div",class:["v-messages",a.value,e.class],style:[r.value,e.style],role:"alert","aria-live":"polite"},{default:()=>[e.active&&i.value.map((l,o)=>s("div",{class:"v-messages__message",key:`${o}-${i.value}`},[t.message?t.message({message:l}):l]))]})),{}}}),Mo=V({disabled:{type:Boolean,default:null},error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...Pa()},"validation");function Fo(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ve(),t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Oe();const i=ve(e,"modelValue"),a=h(()=>e.validationValue===void 0?i.value:e.validationValue),r=xo(),l=$([]),o=Z(!0),c=h(()=>!!(Re(i.value===""?null:i.value).length||Re(a.value===""?null:a.value).length)),u=h(()=>!!(e.disabled??(r==null?void 0:r.isDisabled.value))),f=h(()=>!!(e.readonly??(r==null?void 0:r.isReadonly.value))),m=h(()=>{var I;return(I=e.errorMessages)!=null&&I.length?Re(e.errorMessages).concat(l.value).slice(0,Math.max(0,+e.maxErrors)):l.value}),p=h(()=>{let I=(e.validateOn??(r==null?void 0:r.validateOn.value))||"input";I==="lazy"&&(I="input lazy");const k=new Set((I==null?void 0:I.split(" "))??[]);return{blur:k.has("blur")||k.has("input"),input:k.has("input"),submit:k.has("submit"),lazy:k.has("lazy")}}),d=h(()=>{var I;return e.error||(I=e.errorMessages)!=null&&I.length?!1:e.rules.length?o.value?l.value.length||p.value.lazy?null:!0:!l.value.length:!0}),g=Z(!1),v=h(()=>({[`${n}--error`]:d.value===!1,[`${n}--dirty`]:c.value,[`${n}--disabled`]:u.value,[`${n}--readonly`]:f.value})),b=ie("validation"),y=h(()=>e.name??ke(t));Hi(()=>{r==null||r.register({id:y.value,vm:b,validate:A,reset:C,resetValidation:S})}),ze(()=>{r==null||r.unregister(y.value)}),jn(async()=>{p.value.lazy||await A(!0),r==null||r.update(y.value,d.value,m.value)}),Qe(()=>p.value.input,()=>{D(a,()=>{if(a.value!=null)A();else if(e.focused){const I=D(()=>e.focused,k=>{k||A(),I()})}})}),Qe(()=>p.value.blur,()=>{D(()=>e.focused,I=>{I||A()})}),D([d,m],()=>{r==null||r.update(y.value,d.value,m.value)});async function C(){i.value=null,await _e(),await S()}async function S(){o.value=!0,p.value.lazy?l.value=[]:await A(!0)}async function A(){let I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const k=[];g.value=!0;for(const x of e.rules){if(k.length>=+(e.maxErrors??1))break;const O=await(typeof x=="function"?x:()=>x)(a.value);if(O!==!0){if(O!==!1&&typeof O!="string"){console.warn(`${O} is not a valid value. Rule functions must return boolean true or a string.`);continue}k.push(O||"")}}return l.value=k,g.value=!1,o.value=I,l.value}return{errorMessages:m,isDirty:c,isDisabled:u,isReadonly:f,isPristine:o,isValid:d,isValidating:g,reset:C,resetValidation:S,validate:A,validationClasses:v}}const Ha=V({id:String,appendIcon:ne,centerAffix:{type:Boolean,default:!0},prependIcon:ne,hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},"onClick:prepend":Ee(),"onClick:append":Ee(),...U(),...Me(),...or(Ue(),["maxWidth","minWidth","width"]),...se(),...Mo()},"VInput"),Ei=z()({name:"VInput",props:{...Ha()},emits:{"update:modelValue":e=>!0},setup(e,n){let{attrs:t,slots:i,emit:a}=n;const{densityClasses:r}=We(e),{dimensionStyles:l}=qe(e),{themeClasses:o}=ce(e),{rtlClasses:c}=sn(),{InputIcon:u}=Ia(e),f=Oe(),m=h(()=>e.id||`input-${f}`),p=h(()=>`${m.value}-messages`),{errorMessages:d,isDirty:g,isDisabled:v,isReadonly:b,isPristine:y,isValid:C,isValidating:S,reset:A,resetValidation:I,validate:k,validationClasses:x}=Fo(e,"v-input",m),E=h(()=>({id:m,messagesId:p,isDirty:g,isDisabled:v,isReadonly:b,isPristine:y,isValid:C,isValidating:S,reset:A,resetValidation:I,validate:k})),O=h(()=>{var B;return(B=e.errorMessages)!=null&&B.length||!y.value&&d.value.length?d.value:e.hint&&(e.persistentHint||e.focused)?e.hint:e.messages});return N(()=>{var L,T,j,Y;const B=!!(i.prepend||e.prependIcon),P=!!(i.append||e.appendIcon),_=O.value.length>0,w=!e.hideDetails||e.hideDetails==="auto"&&(_||!!i.details);return s("div",{class:["v-input",`v-input--${e.direction}`,{"v-input--center-affix":e.centerAffix,"v-input--hide-spin-buttons":e.hideSpinButtons},r.value,o.value,c.value,x.value,e.class],style:[l.value,e.style]},[B&&s("div",{key:"prepend",class:"v-input__prepend"},[(L=i.prepend)==null?void 0:L.call(i,E.value),e.prependIcon&&s(u,{key:"prepend-icon",name:"prepend"},null)]),i.default&&s("div",{class:"v-input__control"},[(T=i.default)==null?void 0:T.call(i,E.value)]),P&&s("div",{key:"append",class:"v-input__append"},[e.appendIcon&&s(u,{key:"append-icon",name:"append"},null),(j=i.append)==null?void 0:j.call(i,E.value)]),w&&s("div",{class:"v-input__details"},[s(Oo,{id:p.value,active:_,messages:O.value},{message:i.message}),(Y=i.details)==null?void 0:Y.call(i,E.value)])])}),{reset:A,resetValidation:I,validate:k,isValid:C,errorMessages:d}}}),Ro=["color","file","time","date","datetime-local","week","month"],No=V({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...Ha(),...za()},"VTextField"),Fn=z()({name:"VTextField",directives:{Intersect:ma},inheritAttrs:!1,props:No(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,n){let{attrs:t,emit:i,slots:a}=n;const r=ve(e,"modelValue"),{isFocused:l,focus:o,blur:c}=Ea(e),u=h(()=>typeof e.counterValue=="function"?e.counterValue(r.value):typeof e.counterValue=="number"?e.counterValue:(r.value??"").toString().length),f=h(()=>{if(t.maxlength)return t.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter}),m=h(()=>["plain","underlined"].includes(e.variant));function p(k,x){var E,O;!e.autofocus||!k||(O=(E=x[0].target)==null?void 0:E.focus)==null||O.call(E)}const d=$(),g=$(),v=$(),b=h(()=>Ro.includes(e.type)||e.persistentPlaceholder||l.value||e.active);function y(){var k;v.value!==document.activeElement&&((k=v.value)==null||k.focus()),l.value||o()}function C(k){i("mousedown:control",k),k.target!==v.value&&(y(),k.preventDefault())}function S(k){y(),i("click:control",k)}function A(k){k.stopPropagation(),y(),_e(()=>{r.value=null,ur(e["onClick:clear"],k)})}function I(k){var E;const x=k.target;if(r.value=x.value,(E=e.modelModifiers)!=null&&E.trim&&["text","search","password","tel","url"].includes(e.type)){const O=[x.selectionStart,x.selectionEnd];_e(()=>{x.selectionStart=O[0],x.selectionEnd=O[1]})}}return N(()=>{const k=!!(a.counter||e.counter!==!1&&e.counter!=null),x=!!(k||a.details),[E,O]=dr(t),{modelValue:B,...P}=Ei.filterProps(e),_=Bo(e);return s(Ei,K({ref:d,modelValue:r.value,"onUpdate:modelValue":w=>r.value=w,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-input--plain-underlined":m.value},e.class],style:e.style},E,P,{centerAffix:!m.value,focused:l.value}),{...a,default:w=>{let{id:L,isDisabled:T,isDirty:j,isReadonly:Y,isValid:W}=w;return s(Ba,K({ref:g,onMousedown:C,onClick:S,"onClick:clear":A,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:e.role},_,{id:L.value,active:b.value||j.value,dirty:j.value||e.dirty,disabled:T.value,focused:l.value,error:W.value===!1}),{...a,default:te=>{let{props:{class:M,...J}}=te;const de=Se(s("input",K({ref:v,value:r.value,onInput:I,autofocus:e.autofocus,readonly:Y.value,disabled:T.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:y,onBlur:c},J,O),null),[[bn("intersect"),{handler:p},null,{once:!0}]]);return s(ee,null,[e.prefix&&s("span",{class:"v-text-field__prefix"},[s("span",{class:"v-text-field__prefix__text"},[e.prefix])]),a.default?s("div",{class:M,"data-no-activator":""},[a.default(),de]):Ja(de,{class:M}),e.suffix&&s("span",{class:"v-text-field__suffix"},[s("span",{class:"v-text-field__suffix__text"},[e.suffix])])])}})},details:x?w=>{var L;return s(ee,null,[(L=a.details)==null?void 0:L.call(a,w),k&&s(ee,null,[s("span",null,null),s(Vo,{active:e.persistentCounter||l.value,value:u.value,max:f.value,disabled:e.disabled},a.counter)])])}:void 0})}),wn({},d,g,v)}});var Do=`.v-toolbar {
  align-items: flex-start;
  display: flex;
  flex: none;
  flex-direction: column;
  justify-content: space-between;
  max-width: 100%;
  position: relative;
  transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: height, width, transform, max-width, left, right, top, bottom, box-shadow;
  width: 100%;
  border-color: rgba(var(--v-border-color), var(--v-border-opacity));
  border-style: solid;
  border-width: 0;
  box-shadow: 0px 0px 0px 0px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 0px 0px 0px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12));
  border-radius: 0;
  background: rgb(var(--v-theme-surface-light));
  color: rgba(var(--v-theme-on-surface-light), var(--v-high-emphasis-opacity));
}
.v-toolbar--border {
  border-width: thin;
  box-shadow: none;
}
.v-toolbar--absolute {
  position: absolute;
}
.v-toolbar--collapse {
  max-width: 112px;
  overflow: hidden;
  border-end-end-radius: 24px;
}
.v-toolbar--collapse .v-toolbar-title {
  display: none;
}
.v-toolbar--flat {
  box-shadow: 0px 0px 0px 0px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 0px 0px 0px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12));
}
.v-toolbar--floating {
  display: inline-flex;
}
.v-toolbar--rounded {
  border-radius: 4px;
}

.v-toolbar__content,
.v-toolbar__extension {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  position: relative;
  transition: inherit;
  width: 100%;
}

.v-toolbar__content {
  overflow: hidden;
}
.v-toolbar__content > .v-btn:first-child {
  margin-inline-start: 4px;
}
.v-toolbar__content > .v-btn:last-child {
  margin-inline-end: 4px;
}
.v-toolbar__content > .v-toolbar-title {
  margin-inline-start: 20px;
}
.v-toolbar--density-prominent .v-toolbar__content {
  align-items: flex-start;
}

.v-toolbar__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  opacity: var(--v-toolbar-image-opacity, 1);
  transition-property: opacity;
}

.v-toolbar__prepend,
.v-toolbar__append {
  align-items: center;
  align-self: stretch;
  display: flex;
}

.v-toolbar__prepend {
  margin-inline: 4px auto;
}

.v-toolbar__append {
  margin-inline: auto 4px;
}

.v-toolbar-title {
  flex: 1 1;
  font-size: 1.25rem;
  min-width: 0;
  font-size: 1.25rem;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.75rem;
  text-transform: none;
}
.v-toolbar--density-prominent .v-toolbar-title {
  align-self: flex-end;
  padding-bottom: 6px;
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 2.25rem;
  text-transform: none;
}

.v-toolbar-title__placeholder {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.v-toolbar-items {
  display: flex;
  height: inherit;
  align-self: stretch;
}
.v-toolbar-items > .v-btn {
  border-radius: 0;
}`;q(Do);const jo=V({text:String,...U(),...re()},"VToolbarTitle"),Wt=z()({name:"VToolbarTitle",props:jo(),setup(e,n){let{slots:t}=n;return N(()=>{const i=!!(t.default||t.text||e.text);return s(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var a;return[i&&s("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(a=t.default)==null?void 0:a.call(t)])]}})}),{}}}),Wo=[null,"prominent","default","comfortable","compact"],Uo=V({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Wo.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...tn(),...U(),...rn(),...Le(),...re({tag:"header"}),...se()},"VToolbar"),Ut=z()({name:"VToolbar",props:Uo(),setup(e,n){var d;let{slots:t}=n;const{backgroundColorClasses:i,backgroundColorStyles:a}=He(R(e,"color")),{borderClasses:r}=an(e),{elevationClasses:l}=ln(e),{roundedClasses:o}=Ae(e),{themeClasses:c}=ce(e),{rtlClasses:u}=sn(),f=Z(!!(e.extended||(d=t.extension)!=null&&d.call(t))),m=h(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),p=h(()=>f.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return xn({VBtn:{variant:"text"}}),N(()=>{var y;const g=!!(e.title||t.title),v=!!(t.image||e.image),b=(y=t.extension)==null?void 0:y.call(t);return f.value=!!(e.extended||b),s(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},i.value,r.value,l.value,o.value,c.value,u.value,e.class],style:[a.value,e.style]},{default:()=>[v&&s("div",{key:"image",class:"v-toolbar__image"},[t.image?s(ae,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):s(Dt,{key:"image-img",cover:!0,src:e.image},null)]),s(ae,{defaults:{VTabs:{height:H(m.value)}}},{default:()=>{var C,S,A;return[s("div",{class:"v-toolbar__content",style:{height:H(m.value)}},[t.prepend&&s("div",{class:"v-toolbar__prepend"},[(C=t.prepend)==null?void 0:C.call(t)]),g&&s(Wt,{key:"title",text:e.title},{text:t.title}),(S=t.default)==null?void 0:S.call(t),t.append&&s("div",{class:"v-toolbar__append"},[(A=t.append)==null?void 0:A.call(t)])])]}}),s(ae,{defaults:{VTabs:{height:H(p.value)}}},{default:()=>[s(xa,null,{default:()=>[f.value&&s("div",{class:"v-toolbar__extension",style:{height:H(p.value)}},[b])]})]})]})}),{contentHeight:m,extensionHeight:p}}});function qo(e,n,t,i,a,r){return Q(),Pe(Va,{modelValue:e.isVisible,"onUpdate:modelValue":n[5]||(n[5]=l=>e.isVisible=l),persistent:"","max-width":"600px"},{default:F(()=>[s(pa,null,{default:F(()=>[s(Ut,null,{default:F(()=>[s(Wt,null,{default:F(()=>[ge(he(e.t("insertNetworkImageDialog.title")),1)]),_:1}),s(gn),s(Ce,{icon:"",dense:"",elevation:"0",onClick:n[0]||(n[0]=l=>e.hide())},{default:F(()=>[s(oe,{icon:"mdi-close"})]),_:1})]),_:1}),s(jt,null,{default:F(()=>[s(Aa,{ref:"form","validate-on":"blur"},{default:F(()=>[s(Fn,{modelValue:e.form.url,"onUpdate:modelValue":n[1]||(n[1]=l=>e.form.url=l),label:e.t("insertNetworkImageDialog.urlField"),placeholder:e.t("insertNetworkImageDialog.urlFieldPlaceHolder"),rules:[e.rules.urlRequired,e.rules.urlValid],required:""},null,8,["modelValue","label","placeholder","rules"]),s(Fn,{modelValue:e.form.title,"onUpdate:modelValue":n[2]||(n[2]=l=>e.form.title=l),label:e.t("insertNetworkImageDialog.titleField"),placeholder:e.t("insertNetworkImageDialog.titleFieldPlaceHolder")},null,8,["modelValue","label","placeholder"])]),_:1},512)]),_:1}),s(Nt,null,{default:F(()=>[s(gn),s(Ce,{color:"info",onClick:n[3]||(n[3]=l=>e.hide())},{default:F(()=>[ge(he(e.t("insertNetworkImageDialog.cancel")),1)]),_:1}),s(Ce,{color:"primary",onClick:n[4]||(n[4]=l=>e.ok())},{default:F(()=>[ge(he(e.t("insertNetworkImageDialog.ok")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}St.render=qo;St.__file="src/VuetifyToolbar/ImageBtn/InsertNetworkImageDialog.vue";var Go="M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z",Zo="M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z",Ko="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z",Yo="M13.5,15.5H10V12.5H13.5A1.5,1.5 0 0,1 15,14A1.5,1.5 0 0,1 13.5,15.5M10,6.5H13A1.5,1.5 0 0,1 14.5,8A1.5,1.5 0 0,1 13,9.5H10M15.6,10.79C16.57,10.11 17.25,9 17.25,8C17.25,5.74 15.5,4 13.25,4H7V18H14.04C16.14,18 17.75,16.3 17.75,14.21C17.75,12.69 16.89,11.39 15.6,10.79Z",Xo="M4,17L6.75,14.25L6.72,14.23C6.14,13.64 6.14,12.69 6.72,12.11L11.46,7.37L15.7,11.61L10.96,16.35C10.39,16.93 9.46,16.93 8.87,16.37L8.24,17H4M15.91,2.91C16.5,2.33 17.45,2.33 18.03,2.91L20.16,5.03C20.74,5.62 20.74,6.57 20.16,7.16L16.86,10.45L12.62,6.21L15.91,2.91Z",Jo="M3,4H5V10H9V4H11V18H9V12H5V18H3V4M14,18V16H16V6.31L13.5,7.75V5.44L16,4H18V16H20V18H14Z",Qo="M3,4H5V10H9V4H11V18H9V12H5V18H3V4M21,18H15A2,2 0 0,1 13,16C13,15.47 13.2,15 13.54,14.64L18.41,9.41C18.78,9.05 19,8.55 19,8A2,2 0 0,0 17,6A2,2 0 0,0 15,8H13A4,4 0 0,1 17,4A4,4 0 0,1 21,8C21,9.1 20.55,10.1 19.83,10.83L15,16H21V18Z",es="M3,4H5V10H9V4H11V18H9V12H5V18H3V4M15,4H19A2,2 0 0,1 21,6V16A2,2 0 0,1 19,18H15A2,2 0 0,1 13,16V15H15V16H19V12H15V10H19V6H15V7H13V6A2,2 0 0,1 15,4Z",ns="M3,4H5V10H9V4H11V18H9V12H5V18H3V4M18,18V13H13V11L18,4H20V11H21V13H20V18H18M18,11V7.42L15.45,11H18Z",ts="M3,4H5V10H9V4H11V18H9V12H5V18H3V4M15,4H20V6H15V10H17A4,4 0 0,1 21,14A4,4 0 0,1 17,18H15A2,2 0 0,1 13,16V15H15V16H17A2,2 0 0,0 19,14A2,2 0 0,0 17,12H15A2,2 0 0,1 13,10V6A2,2 0 0,1 15,4Z",is="M3,4H5V10H9V4H11V18H9V12H5V18H3V4M15,4H19A2,2 0 0,1 21,6V7H19V6H15V10H19A2,2 0 0,1 21,12V16A2,2 0 0,1 19,18H15A2,2 0 0,1 13,16V6A2,2 0 0,1 15,4M15,12V16H19V12H15Z",as="M10,4V7H12.21L8.79,15H6V18H14V15H11.79L15.21,7H18V4H10Z",rs="M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z",ls="M7,13V11H21V13H7M7,19V17H21V19H7M7,7V5H21V7H7M3,8V5H2V4H4V8H3M2,17V16H5V20H2V19H4V18.5H3V17.5H4V17H2M4.25,10A0.75,0.75 0 0,1 5,10.75C5,10.95 4.92,11.14 4.79,11.27L3.12,13H5V14H2V13.08L4,11H2V10H4.25Z",os="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z",ss="M3,14H21V12H3M5,4V7H10V10H14V7H19V4M10,19H14V16H10V19Z",ds="M16,7.41L11.41,12L16,16.59L14.59,18L10,13.41L5.41,18L4,16.59L8.59,12L4,7.41L5.41,6L10,10.59L14.59,6L16,7.41M21.85,21.03H16.97V20.03L17.86,19.23C18.62,18.58 19.18,18.04 19.56,17.6C19.93,17.16 20.12,16.75 20.13,16.36C20.14,16.08 20.05,15.85 19.86,15.66C19.68,15.5 19.39,15.38 19,15.38C18.69,15.38 18.42,15.44 18.16,15.56L17.5,15.94L17.05,14.77C17.32,14.56 17.64,14.38 18.03,14.24C18.42,14.1 18.85,14 19.32,14C20.1,14.04 20.7,14.25 21.1,14.66C21.5,15.07 21.72,15.59 21.72,16.23C21.71,16.79 21.53,17.31 21.18,17.78C20.84,18.25 20.42,18.7 19.91,19.14L19.27,19.66V19.68H21.85V21.03Z",cs="M16,7.41L11.41,12L16,16.59L14.59,18L10,13.41L5.41,18L4,16.59L8.59,12L4,7.41L5.41,6L10,10.59L14.59,6L16,7.41M21.85,9H16.97V8L17.86,7.18C18.62,6.54 19.18,6 19.56,5.55C19.93,5.11 20.12,4.7 20.13,4.32C20.14,4.04 20.05,3.8 19.86,3.62C19.68,3.43 19.39,3.34 19,3.33C18.69,3.34 18.42,3.4 18.16,3.5L17.5,3.89L17.05,2.72C17.32,2.5 17.64,2.33 18.03,2.19C18.42,2.05 18.85,2 19.32,2C20.1,2 20.7,2.2 21.1,2.61C21.5,3 21.72,3.54 21.72,4.18C21.71,4.74 21.53,5.26 21.18,5.73C20.84,6.21 20.42,6.66 19.91,7.09L19.27,7.61V7.63H21.85V9Z",us="M5,21H19V19H5V21M12,17A6,6 0 0,0 18,11V3H15.5V11A3.5,3.5 0 0,1 12,14.5A3.5,3.5 0 0,1 8.5,11V3H6V11A6,6 0 0,0 12,17Z",vs="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z",fs="M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z",ms="M19,13H5V11H19V13Z",ps="M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z",gs="M18,14H20V17H23V19H20V22H18V19H15V17H18V14M4,3H18A2,2 0 0,1 20,5V12.08C18.45,11.82 16.92,12.18 15.68,13H12V17H13.08C12.97,17.68 12.97,18.35 13.08,19H4A2,2 0 0,1 2,17V5A2,2 0 0,1 4,3M4,7V11H10V7H4M12,7V11H18V7H12M4,13V17H10V13H4Z",hs="M5,3C3.89,3 3,3.89 3,5V19C3,20.11 3.89,21 5,21H19C20.11,21 21,20.11 21,19V5C21,3.89 20.11,3 19,3H5M5,5H19V19H5V5M7,7V9H17V7H7M7,11V13H17V11H7M7,15V17H14V15H7Z",bs="M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z",qt=Te({setup(){const n=X("getContext")(),{t}=n.lang,{command:i}=n.editor;return{command:i,t}},components:{InsertNetworkImageDialog:St},props:{fnUploadImage:{type:Function,required:!1}},data:function(){return{mdiImage:vs}},methods:{showNetworkImageDialog(){this.$refs.networkImageDialog.open()},insertNetworkImage(e,n){this.command("image",{url:e,title:n})},showUploadDialog(){const e=this.$refs.file;e.focus(),e.click()},async uploadLocalImage(){var n;const e=this.$refs.file;if((n=e.files)!=null&&n.length){let t=window.URL.createObjectURL(e.files[0]);this.fnUploadImage&&(t=await this.fnUploadImage(e.files[0])),this.command("image",{title:"",url:t})}}}}),ys=`.v-list {
  overflow: auto;
  padding: 8px 0;
  position: relative;
  outline: none;
  border-color: rgba(var(--v-border-color), var(--v-border-opacity));
  border-style: solid;
  border-width: 0;
  box-shadow: 0px 0px 0px 0px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 0px 0px 0px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12));
  border-radius: 0;
  background: rgba(var(--v-theme-surface));
  color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
}
.v-list--border {
  border-width: thin;
  box-shadow: none;
}
.v-list--disabled {
  pointer-events: none;
  user-select: none;
}
.v-list--nav {
  padding-inline: 8px;
}
.v-list--rounded {
  border-radius: 4px;
}
.v-list--subheader {
  padding-top: 0;
}

.v-list-img {
  border-radius: inherit;
  display: flex;
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
}

.v-list-subheader {
  align-items: center;
  background: inherit;
  color: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity));
  display: flex;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem;
  padding-inline-end: 16px;
  min-height: 40px;
  transition: 0.2s min-height cubic-bezier(0.4, 0, 0.2, 1);
}
.v-list-subheader__text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.v-list--density-default .v-list-subheader {
  min-height: 40px;
  padding-inline-start: calc(16px + var(--indent-padding)) !important;
}

.v-list--density-comfortable .v-list-subheader {
  min-height: 36px;
  padding-inline-start: calc(16px + var(--indent-padding)) !important;
}

.v-list--density-compact .v-list-subheader {
  min-height: 32px;
  padding-inline-start: calc(16px + var(--indent-padding)) !important;
}

.v-list-subheader--inset {
  --indent-padding: 56px;
}
.v-list--nav .v-list-subheader {
  font-size: 0.75rem;
}
.v-list-subheader--sticky {
  background: inherit;
  left: 0;
  position: sticky;
  top: 0;
  z-index: 1;
}

.v-list__overlay {
  background-color: currentColor;
  border-radius: inherit;
  bottom: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  transition: opacity 0.2s ease-in-out;
}`;q(ys);const yt=Symbol.for("vuetify:list");function $a(){const e=X(yt,{hasPrepend:Z(!1),updateHasPrepend:()=>null}),n={hasPrepend:Z(!1),updateHasPrepend:t=>{t&&(n.hasPrepend.value=t)}};return be(yt,n),e}function Ta(){return X(yt,null)}const Gt=e=>{const n={activate:t=>{let{id:i,value:a,activated:r}=t;return i=fe(i),e&&!a&&r.size===1&&r.has(i)||(a?r.add(i):r.delete(i)),r},in:(t,i,a)=>{let r=new Set;if(t!=null)for(const l of Re(t))r=n.activate({id:l,value:!0,activated:new Set(r),children:i,parents:a});return r},out:t=>Array.from(t)};return n},Oa=e=>{const n=Gt(e);return{activate:i=>{let{activated:a,id:r,...l}=i;r=fe(r);const o=a.has(r)?new Set([r]):new Set;return n.activate({...l,id:r,activated:o})},in:(i,a,r)=>{let l=new Set;if(i!=null){const o=Re(i);o.length&&(l=n.in(o.slice(0,1),a,r))}return l},out:(i,a,r)=>n.out(i,a,r)}},xs=e=>{const n=Gt(e);return{activate:i=>{let{id:a,activated:r,children:l,...o}=i;return a=fe(a),l.has(a)?r:n.activate({id:a,activated:r,children:l,...o})},in:n.in,out:n.out}},_s=e=>{const n=Oa(e);return{activate:i=>{let{id:a,activated:r,children:l,...o}=i;return a=fe(a),l.has(a)?r:n.activate({id:a,activated:r,children:l,...o})},in:n.in,out:n.out}},ws={open:e=>{let{id:n,value:t,opened:i,parents:a}=e;if(t){const r=new Set;r.add(n);let l=a.get(n);for(;l!=null;)r.add(l),l=a.get(l);return r}else return i.delete(n),i},select:()=>null},Ma={open:e=>{let{id:n,value:t,opened:i,parents:a}=e;if(t){let r=a.get(n);for(i.add(n);r!=null&&r!==n;)i.add(r),r=a.get(r);return i}else i.delete(n);return i},select:()=>null},ks={open:Ma.open,select:e=>{let{id:n,value:t,opened:i,parents:a}=e;if(!t)return i;const r=[];let l=a.get(n);for(;l!=null;)r.push(l),l=a.get(l);return new Set(r)}},Zt=e=>{const n={select:t=>{let{id:i,value:a,selected:r}=t;if(i=fe(i),e&&!a){const l=Array.from(r.entries()).reduce((o,c)=>{let[u,f]=c;return f==="on"&&o.push(u),o},[]);if(l.length===1&&l[0]===i)return r}return r.set(i,a?"on":"off"),r},in:(t,i,a)=>{let r=new Map;for(const l of t||[])r=n.select({id:l,value:!0,selected:new Map(r),children:i,parents:a});return r},out:t=>{const i=[];for(const[a,r]of t.entries())r==="on"&&i.push(a);return i}};return n},Fa=e=>{const n=Zt(e);return{select:i=>{let{selected:a,id:r,...l}=i;r=fe(r);const o=a.has(r)?new Map([[r,a.get(r)]]):new Map;return n.select({...l,id:r,selected:o})},in:(i,a,r)=>{let l=new Map;return i!=null&&i.length&&(l=n.in(i.slice(0,1),a,r)),l},out:(i,a,r)=>n.out(i,a,r)}},Cs=e=>{const n=Zt(e);return{select:i=>{let{id:a,selected:r,children:l,...o}=i;return a=fe(a),l.has(a)?r:n.select({id:a,selected:r,children:l,...o})},in:n.in,out:n.out}},Ss=e=>{const n=Fa(e);return{select:i=>{let{id:a,selected:r,children:l,...o}=i;return a=fe(a),l.has(a)?r:n.select({id:a,selected:r,children:l,...o})},in:n.in,out:n.out}},Vs=e=>{const n={select:t=>{let{id:i,value:a,selected:r,children:l,parents:o}=t;i=fe(i);const c=new Map(r),u=[i];for(;u.length;){const m=u.shift();r.set(m,a?"on":"off"),l.has(m)&&u.push(...l.get(m))}let f=o.get(i);for(;f;){const m=l.get(f),p=m.every(g=>r.get(g)==="on"),d=m.every(g=>!r.has(g)||r.get(g)==="off");r.set(f,p?"on":d?"off":"indeterminate"),f=o.get(f)}return e&&!a&&Array.from(r.entries()).reduce((p,d)=>{let[g,v]=d;return v==="on"&&p.push(g),p},[]).length===0?c:r},in:(t,i,a)=>{let r=new Map;for(const l of t||[])r=n.select({id:l,value:!0,selected:new Map(r),children:i,parents:a});return r},out:(t,i)=>{const a=[];for(const[r,l]of t.entries())l==="on"&&!i.has(r)&&a.push(r);return a}};return n},hn=Symbol.for("vuetify:nested"),Ra={id:Z(),root:{register:()=>null,unregister:()=>null,parents:$(new Map),children:$(new Map),open:()=>null,openOnSelect:()=>null,activate:()=>null,select:()=>null,activatable:$(!1),selectable:$(!1),opened:$(new Set),activated:$(new Set),selected:$(new Map),selectedValues:$([])}},Ls=V({activatable:Boolean,selectable:Boolean,activeStrategy:[String,Function,Object],selectStrategy:[String,Function,Object],openStrategy:[String,Object],opened:null,activated:null,selected:null,mandatory:Boolean},"nested"),As=e=>{let n=!1;const t=$(new Map),i=$(new Map),a=ve(e,"opened",e.opened,d=>new Set(d),d=>[...d.values()]),r=h(()=>{if(typeof e.activeStrategy=="object")return e.activeStrategy;if(typeof e.activeStrategy=="function")return e.activeStrategy(e.mandatory);switch(e.activeStrategy){case"leaf":return xs(e.mandatory);case"single-leaf":return _s(e.mandatory);case"independent":return Gt(e.mandatory);case"single-independent":default:return Oa(e.mandatory)}}),l=h(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;if(typeof e.selectStrategy=="function")return e.selectStrategy(e.mandatory);switch(e.selectStrategy){case"single-leaf":return Ss(e.mandatory);case"leaf":return Cs(e.mandatory);case"independent":return Zt(e.mandatory);case"single-independent":return Fa(e.mandatory);case"classic":default:return Vs(e.mandatory)}}),o=h(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return ks;case"single":return ws;case"multiple":default:return Ma}}),c=ve(e,"activated",e.activated,d=>r.value.in(d,t.value,i.value),d=>r.value.out(d,t.value,i.value)),u=ve(e,"selected",e.selected,d=>l.value.in(d,t.value,i.value),d=>l.value.out(d,t.value,i.value));ze(()=>{n=!0});function f(d){const g=[];let v=d;for(;v!=null;)g.unshift(v),v=i.value.get(v);return g}const m=ie("nested"),p={id:Z(),root:{opened:a,activatable:R(e,"activatable"),selectable:R(e,"selectable"),activated:c,selected:u,selectedValues:h(()=>{const d=[];for(const[g,v]of u.value.entries())v==="on"&&d.push(g);return d}),register:(d,g,v)=>{g&&d!==g&&i.value.set(d,g),v&&t.value.set(d,[]),g!=null&&t.value.set(g,[...t.value.get(g)||[],d])},unregister:d=>{if(n)return;t.value.delete(d);const g=i.value.get(d);if(g){const v=t.value.get(g)??[];t.value.set(g,v.filter(b=>b!==d))}i.value.delete(d),a.value.delete(d)},open:(d,g,v)=>{m.emit("click:open",{id:d,value:g,path:f(d),event:v});const b=o.value.open({id:d,value:g,opened:new Set(a.value),children:t.value,parents:i.value,event:v});b&&(a.value=b)},openOnSelect:(d,g,v)=>{const b=o.value.select({id:d,value:g,selected:new Map(u.value),opened:new Set(a.value),children:t.value,parents:i.value,event:v});b&&(a.value=b)},select:(d,g,v)=>{m.emit("click:select",{id:d,value:g,path:f(d),event:v});const b=l.value.select({id:d,value:g,selected:new Map(u.value),children:t.value,parents:i.value,event:v});b&&(u.value=b),p.root.openOnSelect(d,g,v)},activate:(d,g,v)=>{if(!e.activatable)return p.root.select(d,!0,v);m.emit("click:activate",{id:d,value:g,path:f(d),event:v});const b=r.value.activate({id:d,value:g,activated:new Set(c.value),children:t.value,parents:i.value,event:v});b&&(c.value=b)},children:t,parents:i}};return be(hn,p),p.root},Na=(e,n)=>{const t=X(hn,Ra),i=Symbol(Oe()),a=h(()=>e.value!==void 0?e.value:i),r={...t,id:a,open:(l,o)=>t.root.open(a.value,l,o),openOnSelect:(l,o)=>t.root.openOnSelect(a.value,l,o),isOpen:h(()=>t.root.opened.value.has(a.value)),parent:h(()=>t.root.parents.value.get(a.value)),activate:(l,o)=>t.root.activate(a.value,l,o),isActivated:h(()=>t.root.activated.value.has(fe(a.value))),select:(l,o)=>t.root.select(a.value,l,o),isSelected:h(()=>t.root.selected.value.get(fe(a.value))==="on"),isIndeterminate:h(()=>t.root.selected.value.get(a.value)==="indeterminate"),isLeaf:h(()=>!t.root.children.value.get(a.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(a.value,t.id.value,n),ze(()=>{!t.isGroupActivator&&t.root.unregister(a.value)}),n&&be(hn,r),r},Is=()=>{const e=X(hn,Ra);be(hn,{...e,isGroupActivator:!0})};function Ps(){const e=Z(!1);return jn(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:h(()=>e.value?void 0:{transition:"none !important"}),isBooted:_t(e)}}const Es=_n({name:"VListGroupActivator",setup(e,n){let{slots:t}=n;return Is(),()=>{var i;return(i=t.default)==null?void 0:i.call(t)}}}),zs=V({activeColor:String,baseColor:String,color:String,collapseIcon:{type:ne,default:"$collapse"},expandIcon:{type:ne,default:"$expand"},prependIcon:ne,appendIcon:ne,fluid:Boolean,subgroup:Boolean,title:String,value:null,...U(),...re()},"VListGroup"),zi=z()({name:"VListGroup",props:zs(),setup(e,n){let{slots:t}=n;const{isOpen:i,open:a,id:r}=Na(R(e,"value"),!0),l=h(()=>`v-list-group--id-${String(r.value)}`),o=Ta(),{isBooted:c}=Ps();function u(d){a(!i.value,d)}const f=h(()=>({onClick:u,class:"v-list-group__header",id:l.value})),m=h(()=>i.value?e.collapseIcon:e.expandIcon),p=h(()=>({VListItem:{active:i.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&m.value,appendIcon:e.appendIcon||!e.subgroup&&m.value,title:e.title,value:e.value}}));return N(()=>s(e.tag,{class:["v-list-group",{"v-list-group--prepend":o==null?void 0:o.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":i.value},e.class],style:e.style},{default:()=>[t.activator&&s(ae,{defaults:p.value},{default:()=>[s(Es,null,{default:()=>[t.activator({props:f.value,isOpen:i.value})]})]}),s(Be,{transition:{component:xa},disabled:!c.value},{default:()=>{var d;return[Se(s("div",{class:"v-list-group__items",role:"group","aria-labelledby":l.value},[(d=t.default)==null?void 0:d.call(t)]),[[yn,i.value]])]}})]})),{isOpen:i}}});var Bs=`.v-list-item {
  align-items: center;
  display: grid;
  flex: none;
  grid-template-areas: "prepend content append";
  grid-template-columns: max-content 1fr auto;
  outline: none;
  max-width: 100%;
  padding: 4px 16px;
  position: relative;
  text-decoration: none;
  border-color: rgba(var(--v-border-color), var(--v-border-opacity));
  border-style: solid;
  border-width: 0;
  border-radius: 0;
}
.v-list-item--border {
  border-width: thin;
  box-shadow: none;
}
.v-list-item:hover > .v-list-item__overlay {
  opacity: calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier));
}
.v-list-item:focus-visible > .v-list-item__overlay {
  opacity: calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier));
}
@supports not selector(:focus-visible) {
  .v-list-item:focus > .v-list-item__overlay {
    opacity: calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier));
  }
}
.v-list-item--active > .v-list-item__overlay, .v-list-item[aria-haspopup=menu][aria-expanded=true] > .v-list-item__overlay {
  opacity: calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier));
}
.v-list-item--active:hover > .v-list-item__overlay, .v-list-item[aria-haspopup=menu][aria-expanded=true]:hover > .v-list-item__overlay {
  opacity: calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier));
}
.v-list-item--active:focus-visible > .v-list-item__overlay, .v-list-item[aria-haspopup=menu][aria-expanded=true]:focus-visible > .v-list-item__overlay {
  opacity: calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier));
}
@supports not selector(:focus-visible) {
  .v-list-item--active:focus > .v-list-item__overlay, .v-list-item[aria-haspopup=menu][aria-expanded=true]:focus > .v-list-item__overlay {
    opacity: calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier));
  }
}
.v-list-item--variant-plain, .v-list-item--variant-outlined, .v-list-item--variant-text, .v-list-item--variant-tonal {
  background: transparent;
  color: inherit;
}
.v-list-item--variant-plain {
  opacity: 0.62;
}
.v-list-item--variant-plain:focus, .v-list-item--variant-plain:hover {
  opacity: 1;
}
.v-list-item--variant-plain .v-list-item__overlay {
  display: none;
}
.v-list-item--variant-elevated, .v-list-item--variant-flat {
  background: rgba(var(--v-theme-surface));
  color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
}
.v-list-item--variant-elevated {
  box-shadow: 0px 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 1px 1px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 3px 0px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12));
}
.v-list-item--variant-flat {
  box-shadow: 0px 0px 0px 0px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 0px 0px 0px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12));
}
.v-list-item--variant-outlined {
  border: thin solid currentColor;
}
.v-list-item--variant-text .v-list-item__overlay {
  background: currentColor;
}
.v-list-item--variant-tonal .v-list-item__underlay {
  background: currentColor;
  opacity: var(--v-activated-opacity);
  border-radius: inherit;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.v-list-item .v-list-item__underlay {
  position: absolute;
}
@supports selector(:focus-visible) {
  .v-list-item::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    border: 2px solid currentColor;
    border-radius: 4px;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }
  .v-list-item:focus-visible::after {
    opacity: calc(0.15 * var(--v-theme-overlay-multiplier));
  }
}
.v-list-item__prepend > .v-badge .v-icon,
.v-list-item__prepend > .v-icon, .v-list-item__append > .v-badge .v-icon,
.v-list-item__append > .v-icon {
  opacity: var(--v-medium-emphasis-opacity);
}
.v-list-item--active .v-list-item__prepend > .v-badge .v-icon,
.v-list-item--active .v-list-item__prepend > .v-icon,
.v-list-item--active .v-list-item__append > .v-badge .v-icon,
.v-list-item--active .v-list-item__append > .v-icon {
  opacity: 1;
}
.v-list-item--active:not(.v-list-item--link) .v-list-item__overlay {
  opacity: calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier));
}
.v-list-item--rounded {
  border-radius: 4px;
}
.v-list-item--disabled {
  pointer-events: none;
  user-select: none;
  opacity: 0.6;
}
.v-list-item--link {
  cursor: pointer;
}
.v-navigation-drawer--rail:not(.v-navigation-drawer--expand-on-hover) .v-list-item .v-avatar, .v-navigation-drawer--rail.v-navigation-drawer--expand-on-hover:not(.v-navigation-drawer--is-hovering) .v-list-item .v-avatar {
  --v-avatar-height: 24px;
}

.v-list-item__prepend {
  align-items: center;
  align-self: center;
  display: flex;
  grid-area: prepend;
}
.v-list-item__prepend > .v-badge ~ .v-list-item__spacer,
.v-list-item__prepend > .v-icon ~ .v-list-item__spacer,
.v-list-item__prepend > .v-tooltip ~ .v-list-item__spacer {
  width: 32px;
}
.v-list-item__prepend > .v-avatar ~ .v-list-item__spacer {
  width: 16px;
}
.v-list-item__prepend > .v-list-item-action ~ .v-list-item__spacer {
  width: 16px;
}
.v-list-item--slim .v-list-item__prepend > .v-badge ~ .v-list-item__spacer,
.v-list-item--slim .v-list-item__prepend > .v-icon ~ .v-list-item__spacer,
.v-list-item--slim .v-list-item__prepend > .v-tooltip ~ .v-list-item__spacer {
  width: 20px;
}
.v-list-item--slim .v-list-item__prepend > .v-avatar ~ .v-list-item__spacer {
  width: 4px;
}
.v-list-item--slim .v-list-item__prepend > .v-list-item-action ~ .v-list-item__spacer {
  width: 4px;
}
.v-list-item--three-line .v-list-item__prepend {
  align-self: start;
}

.v-list-item__append {
  align-self: center;
  display: flex;
  align-items: center;
  grid-area: append;
}
.v-list-item__append .v-list-item__spacer {
  order: -1;
  transition: 150ms width cubic-bezier(0.4, 0, 0.2, 1);
}
.v-list-item__append > .v-badge ~ .v-list-item__spacer,
.v-list-item__append > .v-icon ~ .v-list-item__spacer,
.v-list-item__append > .v-tooltip ~ .v-list-item__spacer {
  width: 32px;
}
.v-list-item__append > .v-avatar ~ .v-list-item__spacer {
  width: 16px;
}
.v-list-item__append > .v-list-item-action ~ .v-list-item__spacer {
  width: 16px;
}
.v-list-item--slim .v-list-item__append > .v-badge ~ .v-list-item__spacer,
.v-list-item--slim .v-list-item__append > .v-icon ~ .v-list-item__spacer,
.v-list-item--slim .v-list-item__append > .v-tooltip ~ .v-list-item__spacer {
  width: 20px;
}
.v-list-item--slim .v-list-item__append > .v-avatar ~ .v-list-item__spacer {
  width: 4px;
}
.v-list-item--slim .v-list-item__append > .v-list-item-action ~ .v-list-item__spacer {
  width: 4px;
}
.v-list-item--three-line .v-list-item__append {
  align-self: start;
}

.v-list-item__content {
  align-self: center;
  grid-area: content;
  overflow: hidden;
}

.v-list-item-action {
  align-self: center;
  display: flex;
  align-items: center;
  flex: none;
  transition: inherit;
  transition-property: height, width;
}
.v-list-item-action--start {
  margin-inline-end: 8px;
  margin-inline-start: -8px;
}
.v-list-item-action--end {
  margin-inline-start: 8px;
  margin-inline-end: -8px;
}

.v-list-item-media {
  margin-top: 0;
  margin-bottom: 0;
}
.v-list-item-media--start {
  margin-inline-end: 16px;
}
.v-list-item-media--end {
  margin-inline-start: 16px;
}
.v-list-item--two-line .v-list-item-media {
  margin-top: -4px;
  margin-bottom: -4px;
}
.v-list-item--three-line .v-list-item-media {
  margin-top: 0;
  margin-bottom: 0;
}

.v-list-item-subtitle {
  -webkit-box-orient: vertical;
  display: -webkit-box;
  opacity: var(--v-list-item-subtitle-opacity, var(--v-medium-emphasis-opacity));
  overflow: hidden;
  padding: 0;
  text-overflow: ellipsis;
  overflow-wrap: break-word;
  word-break: initial;
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.0178571429em;
  line-height: 1rem;
  text-transform: none;
}
.v-list-item--one-line .v-list-item-subtitle {
  -webkit-line-clamp: 1;
}
.v-list-item--two-line .v-list-item-subtitle {
  -webkit-line-clamp: 2;
}
.v-list-item--three-line .v-list-item-subtitle {
  -webkit-line-clamp: 3;
}
.v-list-item--nav .v-list-item-subtitle {
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.0178571429em;
  line-height: 1rem;
}

.v-list-item-title {
  hyphens: auto;
  overflow-wrap: normal;
  overflow: hidden;
  padding: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: normal;
  word-wrap: break-word;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.009375em;
  line-height: 1.5;
  text-transform: none;
}
.v-list-item--nav .v-list-item-title {
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1rem;
}

.v-list-item--density-default {
  min-height: 40px;
}
.v-list-item--density-default.v-list-item--one-line {
  min-height: 48px;
  padding-top: 4px;
  padding-bottom: 4px;
}
.v-list-item--density-default.v-list-item--two-line {
  min-height: 64px;
  padding-top: 12px;
  padding-bottom: 12px;
}
.v-list-item--density-default.v-list-item--three-line {
  min-height: 88px;
  padding-top: 16px;
  padding-bottom: 16px;
}
.v-list-item--density-default.v-list-item--three-line .v-list-item__prepend,
.v-list-item--density-default.v-list-item--three-line .v-list-item__append {
  padding-top: 8px;
}
.v-list-item--density-default:not(.v-list-item--nav).v-list-item--one-line {
  padding-inline: 16px;
}
.v-list-item--density-default:not(.v-list-item--nav).v-list-item--two-line {
  padding-inline: 16px;
}
.v-list-item--density-default:not(.v-list-item--nav).v-list-item--three-line {
  padding-inline: 16px;
}

.v-list-item--density-comfortable {
  min-height: 36px;
}
.v-list-item--density-comfortable.v-list-item--one-line {
  min-height: 44px;
}
.v-list-item--density-comfortable.v-list-item--two-line {
  min-height: 60px;
  padding-top: 8px;
  padding-bottom: 8px;
}
.v-list-item--density-comfortable.v-list-item--three-line {
  min-height: 84px;
  padding-top: 12px;
  padding-bottom: 12px;
}
.v-list-item--density-comfortable.v-list-item--three-line .v-list-item__prepend,
.v-list-item--density-comfortable.v-list-item--three-line .v-list-item__append {
  padding-top: 6px;
}
.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--one-line {
  padding-inline: 16px;
}
.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--two-line {
  padding-inline: 16px;
}
.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--three-line {
  padding-inline: 16px;
}

.v-list-item--density-compact {
  min-height: 32px;
}
.v-list-item--density-compact.v-list-item--one-line {
  min-height: 40px;
}
.v-list-item--density-compact.v-list-item--two-line {
  min-height: 56px;
  padding-top: 4px;
  padding-bottom: 4px;
}
.v-list-item--density-compact.v-list-item--three-line {
  min-height: 80px;
  padding-top: 8px;
  padding-bottom: 8px;
}
.v-list-item--density-compact.v-list-item--three-line .v-list-item__prepend,
.v-list-item--density-compact.v-list-item--three-line .v-list-item__append {
  padding-top: 4px;
}
.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--one-line {
  padding-inline: 16px;
}
.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--two-line {
  padding-inline: 16px;
}
.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--three-line {
  padding-inline: 16px;
}

.v-list-item--nav {
  padding-inline: 8px;
}
.v-list .v-list-item--nav:not(:only-child) {
  margin-bottom: 4px;
}

.v-list-item__underlay {
  position: absolute;
}

.v-list-item__overlay {
  background-color: currentColor;
  border-radius: inherit;
  bottom: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  transition: opacity 0.2s ease-in-out;
}
.v-list-item--active.v-list-item--variant-elevated .v-list-item__overlay {
  --v-theme-overlay-multiplier: 0;
}

.v-list {
  --indent-padding: 0px;
}
.v-list--nav {
  --indent-padding: -8px;
}

.v-list-group {
  --list-indent-size: 16px;
  --parent-padding: var(--indent-padding);
  --prepend-width: 40px;
}
.v-list--slim .v-list-group {
  --prepend-width: 28px;
}
.v-list-group--fluid {
  --list-indent-size: 0px;
}
.v-list-group--prepend {
  --parent-padding: calc(var(--indent-padding) + var(--prepend-width));
}
.v-list-group--fluid.v-list-group--prepend {
  --parent-padding: var(--indent-padding);
}

.v-list-group__items {
  --indent-padding: calc(var(--parent-padding) + var(--list-indent-size));
}

.v-list-group__items .v-list-item {
  padding-inline-start: calc(16px + var(--indent-padding)) !important;
}

.v-list-group__header.v-list-item--active:not(:focus-visible) .v-list-item__overlay {
  opacity: 0;
}
.v-list-group__header.v-list-item--active:hover .v-list-item__overlay {
  opacity: calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier));
}`;q(Bs);const Hs=V({opacity:[Number,String],...U(),...re()},"VListItemSubtitle"),$s=z()({name:"VListItemSubtitle",props:Hs(),setup(e,n){let{slots:t}=n;return N(()=>s(e.tag,{class:["v-list-item-subtitle",e.class],style:[{"--v-list-item-subtitle-opacity":e.opacity},e.style]},t)),{}}}),xt=Et("v-list-item-title"),Ts=V({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:ne,baseColor:String,disabled:Boolean,lines:[Boolean,String],link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:ne,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:Ee(),onClickOnce:Ee(),...tn(),...U(),...Me(),...Ue(),...rn(),...Le(),...Ft(),...re(),...se(),...on({variant:"text"})},"VListItem"),Rn=z()({name:"VListItem",directives:{Ripple:Rt},props:Ts(),emits:{click:e=>!0},setup(e,n){let{attrs:t,slots:i,emit:a}=n;const r=Mt(e,t),l=h(()=>e.value===void 0?r.href.value:e.value),{activate:o,isActivated:c,select:u,isSelected:f,isIndeterminate:m,isGroupActivator:p,root:d,parent:g,openOnSelect:v}=Na(l,!1),b=Ta(),y=h(()=>{var M;return e.active!==!1&&(e.active||((M=r.isActive)==null?void 0:M.value)||(d.activatable.value?c.value:f.value))}),C=h(()=>e.link!==!1&&r.isLink.value),S=h(()=>!e.disabled&&e.link!==!1&&(e.link||r.isClickable.value||!!b&&(d.selectable.value||d.activatable.value||e.value!=null))),A=h(()=>e.rounded||e.nav),I=h(()=>e.color??e.activeColor),k=h(()=>({color:y.value?I.value??e.baseColor:e.baseColor,variant:e.variant}));D(()=>{var M;return(M=r.isActive)==null?void 0:M.value},M=>{M&&g.value!=null&&d.open(g.value,!0),M&&v(M)},{immediate:!0});const{themeClasses:x}=ce(e),{borderClasses:E}=an(e),{colorClasses:O,colorStyles:B,variantClasses:P}=Gn(k),{densityClasses:_}=We(e),{dimensionStyles:w}=qe(e),{elevationClasses:L}=ln(e),{roundedClasses:T}=Ae(A),j=h(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),Y=h(()=>({isActive:y.value,select:u,isSelected:f.value,isIndeterminate:m.value}));function W(M){var J;a("click",M),S.value&&((J=r.navigate)==null||J.call(r,M),!p&&(d.activatable.value?o(!c.value,M):(d.selectable.value||e.value!=null)&&u(!f.value,M)))}function te(M){(M.key==="Enter"||M.key===" ")&&(M.preventDefault(),W(M))}return N(()=>{const M=C.value?"a":e.tag,J=i.title||e.title!=null,de=i.subtitle||e.subtitle!=null,Ge=!!(e.appendAvatar||e.appendIcon),Ze=!!(Ge||i.append),G=!!(e.prependAvatar||e.prependIcon),le=!!(G||i.prepend);return b==null||b.updateHasPrepend(le),e.activeColor&&Sr("active-color",["color","base-color"]),Se(s(M,{class:["v-list-item",{"v-list-item--active":y.value,"v-list-item--disabled":e.disabled,"v-list-item--link":S.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!le&&(b==null?void 0:b.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&y.value},x.value,E.value,O.value,_.value,L.value,j.value,T.value,P.value,e.class],style:[B.value,w.value,e.style],href:r.href.value,tabindex:S.value?b?-2:0:void 0,onClick:W,onKeydown:S.value&&!C.value&&te},{default:()=>{var Fe;return[qn(S.value||y.value,"v-list-item"),le&&s("div",{key:"prepend",class:"v-list-item__prepend"},[i.prepend?s(ae,{key:"prepend-defaults",disabled:!G,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var ye;return[(ye=i.prepend)==null?void 0:ye.call(i,Y.value)]}}):s(ee,null,[e.prependAvatar&&s(On,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&s(oe,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),s("div",{class:"v-list-item__spacer"},null)]),s("div",{class:"v-list-item__content","data-no-activator":""},[J&&s(xt,{key:"title"},{default:()=>{var ye;return[((ye=i.title)==null?void 0:ye.call(i,{title:e.title}))??e.title]}}),de&&s($s,{key:"subtitle"},{default:()=>{var ye;return[((ye=i.subtitle)==null?void 0:ye.call(i,{subtitle:e.subtitle}))??e.subtitle]}}),(Fe=i.default)==null?void 0:Fe.call(i,Y.value)]),Ze&&s("div",{key:"append",class:"v-list-item__append"},[i.append?s(ae,{key:"append-defaults",disabled:!Ge,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var ye;return[(ye=i.append)==null?void 0:ye.call(i,Y.value)]}}):s(ee,null,[e.appendIcon&&s(oe,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&s(On,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),s("div",{class:"v-list-item__spacer"},null)])]}}),[[bn("ripple"),S.value&&e.ripple]])}),{isGroupActivator:p,isSelected:f,list:b,select:u}}}),Os=V({color:String,inset:Boolean,sticky:Boolean,title:String,...U(),...re()},"VListSubheader"),Ms=z()({name:"VListSubheader",props:Os(),setup(e,n){let{slots:t}=n;const{textColorClasses:i,textColorStyles:a}=$e(R(e,"color"));return N(()=>{const r=!!(t.default||e.title);return s(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},i.value,e.class],style:[{textColorStyles:a},e.style]},{default:()=>{var l;return[r&&s("div",{class:"v-list-subheader__text"},[((l=t.default)==null?void 0:l.call(t))??e.title])]}})}),{}}});var Fs=`.v-divider {
  display: block;
  flex: 1 1 100%;
  height: 0px;
  max-height: 0px;
  opacity: var(--v-border-opacity);
  transition: inherit;
  border-style: solid;
  border-width: thin 0 0 0;
}
.v-divider--vertical {
  align-self: stretch;
  border-width: 0 thin 0 0;
  display: inline-flex;
  height: auto;
  margin-left: -1px;
  max-height: 100%;
  max-width: 0px;
  vertical-align: text-bottom;
  width: 0px;
}
.v-divider--inset:not(.v-divider--vertical) {
  max-width: calc(100% - 72px);
  margin-inline-start: 72px;
}
.v-divider--inset.v-divider--vertical {
  margin-bottom: 8px;
  margin-top: 8px;
  max-height: calc(100% - 16px);
}

.v-divider__content {
  padding: 0 16px;
  text-wrap: nowrap;
}
.v-divider__wrapper--vertical .v-divider__content {
  padding: 4px 0;
}

.v-divider__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.v-divider__wrapper--vertical {
  flex-direction: column;
  height: 100%;
}
.v-divider__wrapper--vertical .v-divider {
  margin: 0 auto;
}`;q(Fs);const Rs=V({color:String,inset:Boolean,length:[Number,String],opacity:[Number,String],thickness:[Number,String],vertical:Boolean,...U(),...se()},"VDivider"),Da=z()({name:"VDivider",props:Rs(),setup(e,n){let{attrs:t,slots:i}=n;const{themeClasses:a}=ce(e),{textColorClasses:r,textColorStyles:l}=$e(R(e,"color")),o=h(()=>{const c={};return e.length&&(c[e.vertical?"maxHeight":"maxWidth"]=H(e.length)),e.thickness&&(c[e.vertical?"borderRightWidth":"borderTopWidth"]=H(e.thickness)),c});return N(()=>{const c=s("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},a.value,r.value,e.class],style:[o.value,l.value,{"--v-border-opacity":e.opacity},e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null);return i.default?s("div",{class:["v-divider__wrapper",{"v-divider__wrapper--vertical":e.vertical,"v-divider__wrapper--inset":e.inset}]},[c,s("div",{class:"v-divider__content"},[i.default()]),c]):c}),{}}}),Ns=V({items:Array,returnObject:Boolean},"VListChildren"),ja=z()({name:"VListChildren",props:Ns(),setup(e,n){let{slots:t}=n;return $a(),()=>{var i,a;return((i=t.default)==null?void 0:i.call(t))??((a=e.items)==null?void 0:a.map(r=>{var p,d;let{children:l,props:o,type:c,raw:u}=r;if(c==="divider")return((p=t.divider)==null?void 0:p.call(t,{props:o}))??s(Da,o,null);if(c==="subheader")return((d=t.subheader)==null?void 0:d.call(t,{props:o}))??s(Ms,o,null);const f={subtitle:t.subtitle?g=>{var v;return(v=t.subtitle)==null?void 0:v.call(t,{...g,item:u})}:void 0,prepend:t.prepend?g=>{var v;return(v=t.prepend)==null?void 0:v.call(t,{...g,item:u})}:void 0,append:t.append?g=>{var v;return(v=t.append)==null?void 0:v.call(t,{...g,item:u})}:void 0,title:t.title?g=>{var v;return(v=t.title)==null?void 0:v.call(t,{...g,item:u})}:void 0},m=zi.filterProps(o);return l?s(zi,K({value:o==null?void 0:o.value},m),{activator:g=>{let{props:v}=g;const b={...o,...v,value:e.returnObject?u:o.value};return t.header?t.header({props:b}):s(Rn,b,f)},default:()=>s(ja,{items:l,returnObject:e.returnObject},t)}):t.item?t.item({props:o}):s(Rn,K(o,{value:e.returnObject?u:o.value}),f)}))}}}),Ds=V({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:Wn}},"list-items");function js(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Ws(e,n){const t=dn(n,e.itemType,"item"),i=js(n)?n:dn(n,e.itemTitle),a=dn(n,e.itemValue,void 0),r=dn(n,e.itemChildren),l=e.itemProps===!0?Un(n,["children"]):dn(n,e.itemProps),o={title:i,value:a,...l};return{type:t,title:o.title,value:o.value,props:o,children:t==="item"&&r?Wa(e,r):void 0,raw:n}}function Wa(e,n){const t=[];for(const i of n)t.push(Ws(e,i));return t}function Us(e){return{items:h(()=>Wa(e,e.items))}}const qs=V({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,expandIcon:String,collapseIcon:String,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,...Ls({selectStrategy:"single-leaf",openStrategy:"list"}),...tn(),...U(),...Me(),...Ue(),...rn(),itemType:{type:String,default:"type"},...Ds(),...Le(),...re(),...se(),...on({variant:"text"})},"VList"),Gs=z()({name:"VList",props:qs(),emits:{"update:selected":e=>!0,"update:activated":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:activate":e=>!0,"click:select":e=>!0},setup(e,n){let{slots:t}=n;const{items:i}=Us(e),{themeClasses:a}=ce(e),{backgroundColorClasses:r,backgroundColorStyles:l}=He(R(e,"bgColor")),{borderClasses:o}=an(e),{densityClasses:c}=We(e),{dimensionStyles:u}=qe(e),{elevationClasses:f}=ln(e),{roundedClasses:m}=Ae(e),{children:p,open:d,parents:g,select:v}=As(e),b=h(()=>e.lines?`v-list--${e.lines}-line`:void 0),y=R(e,"activeColor"),C=R(e,"baseColor"),S=R(e,"color");$a(),xn({VListGroup:{activeColor:y,baseColor:C,color:S,expandIcon:R(e,"expandIcon"),collapseIcon:R(e,"collapseIcon")},VListItem:{activeClass:R(e,"activeClass"),activeColor:y,baseColor:C,color:S,density:R(e,"density"),disabled:R(e,"disabled"),lines:R(e,"lines"),nav:R(e,"nav"),slim:R(e,"slim"),variant:R(e,"variant")}});const A=Z(!1),I=$();function k(_){A.value=!0}function x(_){A.value=!1}function E(_){var w;!A.value&&!(_.relatedTarget&&((w=I.value)!=null&&w.contains(_.relatedTarget)))&&P()}function O(_){const w=_.target;if(!(!I.value||["INPUT","TEXTAREA"].includes(w.tagName))){if(_.key==="ArrowDown")P("next");else if(_.key==="ArrowUp")P("prev");else if(_.key==="Home")P("first");else if(_.key==="End")P("last");else return;_.preventDefault()}}function B(_){A.value=!0}function P(_){if(I.value)return zn(I.value,_)}return N(()=>s(e.tag,{ref:I,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav,"v-list--slim":e.slim},a.value,r.value,o.value,c.value,f.value,b.value,m.value,e.class],style:[l.value,u.value,e.style],tabindex:e.disabled||A.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:k,onFocusout:x,onFocus:E,onKeydown:O,onMousedown:B},{default:()=>[s(ja,{items:i.value,returnObject:e.returnObject},t)]})),{open:d,select:v,focus:P,children:p,parents:g}}});var Zs=`.v-menu > .v-overlay__content {
  display: flex;
  flex-direction: column;
  border-radius: 4px;
}
.v-menu > .v-overlay__content > .v-card,
.v-menu > .v-overlay__content > .v-sheet,
.v-menu > .v-overlay__content > .v-list {
  background: rgb(var(--v-theme-surface));
  border-radius: inherit;
  overflow: auto;
  height: 100%;
  box-shadow: 0px 5px 5px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 8px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 3px 14px 2px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12));
}`;q(Zs);const Ks=V({id:String,...Un(Qn({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:ba}}),["absolute"])},"VMenu"),Ua=z()({name:"VMenu",props:Ks(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const i=ve(e,"modelValue"),{scopeId:a}=Jn(),r=Oe(),l=h(()=>e.id||`v-menu-${r}`),o=$(),c=X(bt,null),u=Z(0);be(bt,{register(){++u.value},unregister(){--u.value},closeParents(v){setTimeout(()=>{!u.value&&!e.persistent&&(v==null||v&&!mr(v,o.value.contentEl))&&(i.value=!1,c==null||c.closeParents())},40)}});async function f(v){var C,S,A;const b=v.relatedTarget,y=v.target;await _e(),i.value&&b!==y&&((C=o.value)!=null&&C.contentEl)&&((S=o.value)!=null&&S.globalTop)&&![document,o.value.contentEl].includes(y)&&!o.value.contentEl.contains(y)&&((A=En(o.value.contentEl)[0])==null||A.focus())}D(i,v=>{v?(c==null||c.register(),document.addEventListener("focusin",f,{once:!0})):(c==null||c.unregister(),document.removeEventListener("focusin",f))});function m(v){c==null||c.closeParents(v)}function p(v){var b,y,C;if(!e.disabled)if(v.key==="Tab"||v.key==="Enter"&&!e.closeOnContentClick){if(v.key==="Enter"&&v.target instanceof HTMLTextAreaElement)return;v.key==="Enter"&&v.preventDefault(),Wi(En((b=o.value)==null?void 0:b.contentEl,!1),v.shiftKey?"prev":"next",A=>A.tabIndex>=0)||(i.value=!1,(C=(y=o.value)==null?void 0:y.activatorEl)==null||C.focus())}else["Enter"," "].includes(v.key)&&e.closeOnContentClick&&(i.value=!1,c==null||c.closeParents())}function d(v){var y;if(e.disabled)return;const b=(y=o.value)==null?void 0:y.contentEl;b&&i.value?v.key==="ArrowDown"?(v.preventDefault(),zn(b,"next")):v.key==="ArrowUp"&&(v.preventDefault(),zn(b,"prev")):["ArrowDown","ArrowUp"].includes(v.key)&&(i.value=!0,v.preventDefault(),setTimeout(()=>setTimeout(()=>d(v))))}const g=h(()=>K({"aria-haspopup":"menu","aria-expanded":String(i.value),"aria-owns":l.value,onKeydown:d},e.activatorProps));return N(()=>{const v=en.filterProps(e);return s(en,K({ref:o,id:l.value,class:["v-menu",e.class],style:e.style},v,{modelValue:i.value,"onUpdate:modelValue":b=>i.value=b,absolute:!0,activatorProps:g.value,"onClick:outside":m,onKeydown:p},a),{activator:t.activator,default:function(){for(var b=arguments.length,y=new Array(b),C=0;C<b;C++)y[C]=arguments[C];return s(ae,{root:"VMenu"},{default:()=>{var S;return[(S=t.default)==null?void 0:S.call(t,...y)]}})}})}),wn({id:l,ΨopenChildren:u},o)}});function Ys(e,n,t,i,a,r){const l=kt("insert-network-image-dialog");return Q(),Pe(Ce,{size:"small",variant:"flat",color:"white",class:"sm-toolbar-button"},{default:F(()=>[s(oe,{small:"",color:"grey darken-1",icon:e.mdiImage},null,8,["icon"]),Ie(" the network image dialog "),s(l,{onOk:e.insertNetworkImage,ref:"networkImageDialog"},null,8,["onOk"]),Ie(" the upload image dialog "),Mi("input",{type:"file",ref:"file",onChange:n[0]||(n[0]=o=>e.uploadLocalImage()),accept:"image/*",style:{display:"none"}},null,544),Ie(" menu "),s(Ua,{"offset-y":!0,"open-on-hover":"",bottom:"",activator:"parent"},{default:F(()=>[s(Gs,null,{default:F(()=>[s(Rn,{onClick:n[1]||(n[1]=o=>e.showNetworkImageDialog())},{default:F(()=>[s(xt,null,{default:F(()=>[ge(he(e.t("toolbar.insertNetworkImage")),1)]),_:1})]),_:1}),s(Rn,{onClick:n[2]||(n[2]=o=>e.showUploadDialog())},{default:F(()=>[s(xt,null,{default:F(()=>[ge(he(e.t("toolbar.uploadLocalImage")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}qt.render=Ys;qt.__file="src/VuetifyToolbar/ImageBtn/ImageButton.vue";var Kt=Te({setup(){const n=X("getContext")(),{t}=n.lang;return{t}},data:function(){return{isVisible:!1,form:{url:"",title:""},rules:{urlRequired:e=>!!e||this.t("insertLinkDialog.urlFieldIsEmptyErr"),urlValid:e=>/^(http|https):\/\//.test(e)||this.t("insertLinkDialog.urlFieldIsInvalidErr")}}},methods:{hide(){this.isVisible=!1},open(){this.form.url="",this.form.title="",this.isVisible=!0},async ok(){const{valid:e}=await this.$refs.form.validate();e&&(this.$emit("ok",this.form.url,this.form.title),this.hide())}}});function Xs(e,n,t,i,a,r){return Q(),Pe(Va,{modelValue:e.isVisible,"onUpdate:modelValue":n[5]||(n[5]=l=>e.isVisible=l),persistent:"","max-width":"600px"},{default:F(()=>[s(pa,null,{default:F(()=>[s(Ut,null,{default:F(()=>[s(Wt,null,{default:F(()=>[ge(he(e.t("insertLinkDialog.title")),1)]),_:1}),s(gn),s(Ce,{icon:"",dense:"",elevation:"0",onClick:n[0]||(n[0]=l=>e.hide())},{default:F(()=>[s(oe,{icon:"mdi-close"})]),_:1})]),_:1}),s(jt,null,{default:F(()=>[s(Aa,{ref:"form","validate-on":"blur"},{default:F(()=>[s(Fn,{modelValue:e.form.url,"onUpdate:modelValue":n[1]||(n[1]=l=>e.form.url=l),label:e.t("insertLinkDialog.urlField"),placeholder:e.t("insertLinkDialog.urlFieldPlaceHolder"),rules:[e.rules.urlRequired,e.rules.urlValid],required:""},null,8,["modelValue","label","placeholder","rules"]),s(Fn,{modelValue:e.form.title,"onUpdate:modelValue":n[2]||(n[2]=l=>e.form.title=l),label:e.t("insertLinkDialog.titleField"),placeholder:e.t("insertLinkDialog.titleFieldPlaceHolder")},null,8,["modelValue","label","placeholder"])]),_:1},512)]),_:1}),s(Nt,null,{default:F(()=>[s(gn),s(Ce,{color:"info",onClick:n[3]||(n[3]=l=>e.hide())},{default:F(()=>[ge(he(e.t("insertLinkDialog.cancel")),1)]),_:1}),s(Ce,{color:"primary",onClick:n[4]||(n[4]=l=>e.ok())},{default:F(()=>[ge(he(e.t("insertLinkDialog.ok")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}Kt.render=Xs;Kt.__file="src/VuetifyToolbar/LinkBtn/InsertLinkDialog.vue";var Yt=Te({setup(){const n=X("getContext")(),{t}=n.lang,{command:i}=n.editor;return{command:i,t}},components:{InsertLinkDialog:Kt},data:function(){return{mdiLinkVariant:fs}},methods:{showLinkDialog(){this.$refs.linkDialog.open()},insertLink(e,n){this.command("link",{title:n,url:e})}}}),Js=`.v-tooltip > .v-overlay__content {
  background: rgb(var(--v-theme-surface-variant));
  color: rgb(var(--v-theme-on-surface-variant));
  border-radius: 4px;
  font-size: 0.875rem;
  line-height: 1.6;
  display: inline-block;
  padding: 5px 16px;
  text-transform: initial;
  width: auto;
  opacity: 1;
  pointer-events: none;
  transition-property: opacity, transform;
  overflow-wrap: break-word;
}
.v-tooltip > .v-overlay__content[class*=enter-active] {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  transition-duration: 150ms;
}
.v-tooltip > .v-overlay__content[class*=leave-active] {
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  transition-duration: 75ms;
}`;q(Js);const Qs=V({id:String,text:String,...Un(Qn({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),Xt=z()({name:"VTooltip",props:Qs(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const i=ve(e,"modelValue"),{scopeId:a}=Jn(),r=Oe(),l=h(()=>e.id||`v-tooltip-${r}`),o=$(),c=h(()=>e.location.split(" ").length>1?e.location:e.location+" center"),u=h(()=>e.origin==="auto"||e.origin==="overlap"||e.origin.split(" ").length>1||e.location.split(" ").length>1?e.origin:e.origin+" center"),f=h(()=>e.transition?e.transition:i.value?"scale-transition":"fade-transition"),m=h(()=>K({"aria-describedby":l.value},e.activatorProps));return N(()=>{const p=en.filterProps(e);return s(en,K({ref:o,class:["v-tooltip",e.class],style:e.style,id:l.value},p,{modelValue:i.value,"onUpdate:modelValue":d=>i.value=d,transition:f.value,absolute:!0,location:c.value,origin:u.value,persistent:!0,role:"tooltip",activatorProps:m.value,_disableGlobalStack:!0},a),{activator:t.activator,default:function(){var b;for(var d=arguments.length,g=new Array(d),v=0;v<d;v++)g[v]=arguments[v];return((b=t.default)==null?void 0:b.call(t,...g))??e.text}})}),wn({},o)}});function ed(e,n,t,i,a,r){const l=kt("insert-link-dialog");return Q(),Pe(Ce,{size:"small",variant:"flat",color:"white",class:"sm-toolbar-button",onClick:e.showLinkDialog},{default:F(()=>[s(oe,{small:"",color:"grey darken-1",icon:e.mdiLinkVariant},null,8,["icon"]),s(Xt,{location:"bottom",activator:"parent"},{default:F(()=>[ge(he(e.t("toolbar.link")),1)]),_:1}),s(l,{ref:"linkDialog",onOk:e.insertLink},null,8,["onOk"])]),_:1},8,["onClick"])}Yt.render=ed;Yt.__file="src/VuetifyToolbar/LinkBtn/LinkButton.vue";var et=Te({setup(){const n=X("getContext")(),{t}=n.lang;return{t}},data:function(){return{rowNum:10,colNum:10,minRowNum:10,minColNum:10,curRow:0,curCol:0,timer:0}},methods:{setCurrentRowAndCol(e,n){this.curRow=e,this.curCol=n,this.rowNum>this.minRowNum&&this.rowNum>e&&this.rowNum--,this.colNum>this.minColNum&&this.colNum>n&&this.colNum--,this.rowNum<=e&&this.rowNum++,this.colNum<=n&&this.colNum++},hide(){this.$emit("input",!1)},cancel(){this.hide()},ok(){this.$emit("ok",{row:this.curRow,col:this.curCol})},doNothing(){}},mounted(){this.timer=setInterval(()=>{var e,n,t;!((t=(n=(e=this.$refs)==null?void 0:e.table)==null?void 0:n.matches)!=null&&t.call(n,":hover"))&&this.curRow>0&&this.setCurrentRowAndCol(0,0)},200)},beforeUnmount(){clearInterval(this.timer)}});const nd={class:"pa-2 bg-white rounded elevation-4"},td={class:"table",ref:"table"},id=["onMouseover"];function ad(e,n,t,i,a,r){return Q(),xe("div",nd,[ge(he(e.curRow>0?e.t("insertTableBoard.info",{row:e.curRow.toString(),col:e.curCol.toString()}):e.t("insertTableBoard.title"))+" ",1),Mi("table",td,[(Q(!0),xe(ee,null,dt(e.rowNum,l=>(Q(),xe("tr",{key:l},[(Q(!0),xe(ee,null,dt(e.colNum,o=>(Q(),xe("td",{key:o,class:er(["cell",{highlight:l<=e.curRow&&o<=e.curCol}]),onMouseover:c=>e.setCurrentRowAndCol(l,o),onClick:n[0]||(n[0]=c=>e.ok())},null,42,id))),128))]))),128))],512)])}var rd=`
.table[data-v-39b86409] {
  border-spacing: 2px;
}
.cell[data-v-39b86409] {
  width: 20px;
  height: 20px;
  border: 1px solid black !important;
}
.highlight[data-v-39b86409] {
  background-color: lightblue;
}
`;q(rd);et.render=ad;et.__scopeId="data-v-39b86409";et.__file="src/VuetifyToolbar/TableBtn/InsertTableBoard.vue";var Jt=Te({setup(){const n=X("getContext")(),{t}=n.lang,{command:i}=n.editor;return{command:i,t}},components:{InsertTableBoard:et},data:function(){return{mdiTablePlus:gs}},methods:{insertTable(e,n){this.command("table",{row:e,col:n})}}});function ld(e,n,t,i,a,r){const l=kt("insert-table-board");return Q(),Pe(Ce,{size:"small",variant:"flat",color:"white",class:"sm-toolbar-button"},{default:F(()=>[s(oe,{small:"",color:"grey darken-1",icon:e.mdiTablePlus},null,8,["icon"]),s(Xt,{location:"bottom",activator:"parent"},{default:F(()=>[ge(he(e.t("toolbar.table")),1)]),_:1}),Ie(" table "),s(Ua,{"offset-y":!0,"open-on-hover":"",bottom:"",activator:"parent"},{default:F(()=>[s(l,{onOk:n[0]||(n[0]=o=>e.insertTable(o.row,o.col))})]),_:1})]),_:1})}Jt.render=ld;Jt.__file="src/VuetifyToolbar/TableBtn/TableButton.vue";var qa=Te({__name:"VuetifyToolbar",props:{items:{type:Array,required:!1,default:()=>["undo","redo","divider","bold","italic","strikethrough","underline","subscript","superscript","mark","heading1","heading2","heading3","divider","bulletedList","numberedList","quote","codeBlock","link","image","horizontalRule","table","spacer","preview","toc"]},fnUpload:{type:null,required:!1}},setup(e,{expose:n}){const t=e,a=X("getContext")(),{t:r}=a.lang,{command:l}=a.editor,{getMode:o,setMode:c}=a,u={divider:{name:"divider"},spacer:{name:"spacer"},undo:{name:"undo",icon:bs,cmd:"undo",tip:()=>r("toolbar.undo")},redo:{name:"redo",icon:ps,cmd:"redo",tip:()=>r("toolbar.redo")},bold:{name:"bold",icon:Yo,cmd:"bold",tip:()=>r("toolbar.bold")},italic:{name:"italic",icon:as,cmd:"italic",tip:()=>r("toolbar.italic")},strikethrough:{name:"strikethrough",icon:ss,cmd:"strikethrough",tip:()=>r("toolbar.strikethrough")},underline:{name:"underline",icon:us,cmd:"underline",tip:()=>r("toolbar.underline")},subscript:{name:"subscript",icon:ds,cmd:"subscript",tip:()=>r("toolbar.subscript")},superscript:{name:"superscript",icon:cs,cmd:"superscript",tip:()=>r("toolbar.superscript")},mark:{name:"mark",icon:Xo,cmd:"mark",tip:()=>r("toolbar.mark")},heading1:{name:"heading1",icon:Jo,cmd:"heading1",tip:()=>r("toolbar.heading1")},heading2:{name:"heading2",icon:Qo,cmd:"heading2",tip:()=>r("toolbar.heading2")},heading3:{name:"heading3",icon:es,cmd:"heading3",tip:()=>r("toolbar.heading3")},heading4:{name:"heading4",icon:ns,cmd:"heading4",tip:()=>r("toolbar.heading4")},heading5:{name:"heading5",icon:ts,cmd:"heading5",tip:()=>r("toolbar.heading5")},heading6:{name:"heading6",icon:is,cmd:"heading6",tip:()=>r("toolbar.heading6")},bulletedList:{name:"bulletedList",icon:rs,cmd:"bulletedList",tip:()=>r("toolbar.bulletedList")},numberedList:{name:"numberedList",icon:ls,cmd:"numberedList",tip:()=>r("toolbar.numberedList")},quote:{name:"quote",icon:os,cmd:"quote",tip:()=>r("toolbar.quote")},codeBlock:{name:"codeBlock",icon:Go,cmd:"codeBlock",tip:()=>r("toolbar.codeBlock")},horizontalRule:{name:"horizontalRule",icon:ms,cmd:"horizontalRule",tip:()=>r("toolbar.horizontalRule")},image:{name:"image",vnode:()=>s(qt,{fnUploadImage:t.fnUpload},null)},link:{name:"link",comp:Yt},table:{name:"table",comp:Jt},preview:{name:"preview",icon:()=>o().split("|").includes("viewer")?Zo:Ko,exec:()=>{const d=o().split("|");if(d.includes("viewer")){const v=d.filter(b=>b!=="viewer").join("|");c(v)}else{const v=d[d.length-1]==="toc"?"editor|viewer|toc":"editor|viewer";c(v)}},tip:()=>o().split("|").includes("viewer")?r("toolbar.closePreview"):r("toolbar.openPreview")},toc:{name:"toc",icon:hs,exec:()=>{const d=o().split("|"),g=d[d.length-1],v=[...d];g==="toc"?v.pop():v.push("toc");const b=v.join("|");c(b)},tip:()=>r("toolbar.toc")}},f=h(()=>{const p=[];return t.items.forEach(d=>{if(typeof d=="string")if(u[d]){const g={...u[d]};g!=null&&g.name||(g.name=d),p.push(g);return}else{console.error(`invalid toolbar item: ${d}`);return}if(Qa(d)){p.push({name:"vnode",vnode:()=>d});return}if(typeof d=="function"){p.push({name:"vnode",vnode:d});return}if(typeof d.render=="function"){p.push({name:"component",comp:d});return}p.push(d)}),p});function m(p){p.exec?p.exec():p.cmd&&l(p.cmd)}return n({calcToolbarItems:f}),(p,d)=>(Q(),Pe(Ut,{density:"compact",class:"sm-toolbar"},{default:F(()=>[(Q(!0),xe(ee,null,dt(f.value,(g,v)=>(Q(),xe(ee,{key:g.name+v},[Ie(" divider "),g.name==="divider"?(Q(),Pe(Da,{key:0,class:"vertical-divider mx-2",vertical:""})):g.name==="spacer"?(Q(),xe(ee,{key:1},[Ie(" spacer "),s(gn)],2112)):g.vnode?(Q(),xe(ee,{key:2},[Ie(" custom button "),s(ke(nr),{vnodes:[g.vnode()]},null,8,["vnodes"])],2112)):g.comp?(Q(),xe(ee,{key:3},[Ie(" custom component "),(Q(),Pe(Oi(g.comp)))],2112)):(Q(),xe(ee,{key:4},[Ie(" button "),(Q(),Pe(Ce,{size:"small",variant:"flat",color:"white",class:"sm-toolbar-button",key:(g.name??"")+v,onClick:b=>m(g)},{default:F(()=>[s(oe,{small:"",color:"grey darken-1",icon:typeof g.icon=="function"?g.icon():g.icon},null,8,["icon"]),s(Xt,{location:"bottom",activator:"parent"},{default:F(()=>[ge(he(typeof g.tip=="function"?g.tip():g.tip),1)]),_:2},1024)]),_:2},1032,["onClick"]))],2112))],64))),128))]),_:1}))}}),od=`
.sm-toolbar-button[data-v-216131c6] {
  min-width: 40px !important;
}
`;q(od);qa.__scopeId="data-v-216131c6";qa.__file="src/VuetifyToolbar/VuetifyToolbar.vue";export{qa as s};
