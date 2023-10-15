'use strict';

var vue = require('vue');

// Material Design Icons v7.2.96
var mdiClose = "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";
var mdiImage = "M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z";
var mdiLinkVariant = "M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z";
var mdiTablePlus = "M18,14H20V17H23V19H20V22H18V19H15V17H18V14M4,3H18A2,2 0 0,1 20,5V12.08C18.45,11.82 16.92,12.18 15.68,13H12V17H13.08C12.97,17.68 12.97,18.35 13.08,19H4A2,2 0 0,1 2,17V5A2,2 0 0,1 4,3M4,7V11H10V7H4M12,7V11H18V7H12M4,13V17H10V13H4Z";

var script$5 = vue.defineComponent({
  setup() {
    const getVuetifyContext = vue.inject('getVuetifyContext');
    const context = getVuetifyContext();
    const {
      t
    } = context.methods;
    return {
      t
    };
  },
  props: {
    modelValue: {
      type: Boolean,
      required: true
    },
    url: {
      type: String,
      required: false,
      default: ''
    }
  },
  data: function () {
    return {
      mdiClose
    };
  },
  methods: {
    hide() {
      this.$emit('update:modelValue', false);
    },
    cancel() {
      this.hide();
    },
    ok() {
      this.$emit('ok');
    }
  },
  watch: {
    modelValue: {
      immediate: true,
      handler(newVal) {
        console.log(`---InsertNetworkImageDialog----modelValue:${newVal}---`);
      }
    }
  }
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$q = "/** if false, disabled buttons will be greyed out */\n.v-btn {\n  align-items: center;\n  border-radius: 4px;\n  display: inline-grid;\n  grid-template-areas: \"prepend content append\";\n  grid-template-columns: max-content auto max-content;\n  font-weight: 500;\n  justify-content: center;\n  letter-spacing: 0.0892857143em;\n  line-height: normal;\n  max-width: 100%;\n  outline: none;\n  position: relative;\n  text-decoration: none;\n  text-indent: 0.0892857143em;\n  text-transform: uppercase;\n  transition-property: box-shadow, transform, opacity, background;\n  transition-duration: 0.28s;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  user-select: none;\n  vertical-align: middle;\n  flex-shrink: 0;\n  border-color: rgba(var(--v-border-color), var(--v-border-opacity));\n  border-style: solid;\n  border-width: 0;\n}\n.v-btn--size-x-small {\n  --v-btn-size: 0.625rem;\n  --v-btn-height: 20px;\n  font-size: var(--v-btn-size);\n  min-width: 36px;\n  padding: 0 8px;\n}\n\n.v-btn--size-small {\n  --v-btn-size: 0.75rem;\n  --v-btn-height: 28px;\n  font-size: var(--v-btn-size);\n  min-width: 50px;\n  padding: 0 12px;\n}\n\n.v-btn--size-default {\n  --v-btn-size: 0.875rem;\n  --v-btn-height: 36px;\n  font-size: var(--v-btn-size);\n  min-width: 64px;\n  padding: 0 16px;\n}\n\n.v-btn--size-large {\n  --v-btn-size: 1rem;\n  --v-btn-height: 44px;\n  font-size: var(--v-btn-size);\n  min-width: 78px;\n  padding: 0 20px;\n}\n\n.v-btn--size-x-large {\n  --v-btn-size: 1.125rem;\n  --v-btn-height: 52px;\n  font-size: var(--v-btn-size);\n  min-width: 92px;\n  padding: 0 24px;\n}\n\n.v-btn.v-btn--density-default {\n  height: calc(var(--v-btn-height) + 0px);\n}\n\n.v-btn.v-btn--density-comfortable {\n  height: calc(var(--v-btn-height) + -8px);\n}\n\n.v-btn.v-btn--density-compact {\n  height: calc(var(--v-btn-height) + -12px);\n}\n\n.v-btn--border {\n  border-width: thin;\n  box-shadow: none;\n}\n.v-btn--absolute {\n  position: absolute;\n}\n.v-btn--fixed {\n  position: fixed;\n}\n.v-btn:hover > .v-btn__overlay {\n  opacity: calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier));\n}\n.v-btn:focus-visible > .v-btn__overlay {\n  opacity: calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier));\n}\n@supports not selector(:focus-visible) {\n  .v-btn:focus > .v-btn__overlay {\n    opacity: calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier));\n  }\n}\n.v-btn--active > .v-btn__overlay, .v-btn[aria-haspopup=menu][aria-expanded=true] > .v-btn__overlay {\n  opacity: calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier));\n}\n.v-btn--active:hover > .v-btn__overlay, .v-btn[aria-haspopup=menu][aria-expanded=true]:hover > .v-btn__overlay {\n  opacity: calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier));\n}\n.v-btn--active:focus-visible > .v-btn__overlay, .v-btn[aria-haspopup=menu][aria-expanded=true]:focus-visible > .v-btn__overlay {\n  opacity: calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier));\n}\n@supports not selector(:focus-visible) {\n  .v-btn--active:focus > .v-btn__overlay, .v-btn[aria-haspopup=menu][aria-expanded=true]:focus > .v-btn__overlay {\n    opacity: calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier));\n  }\n}\n.v-btn--variant-plain, .v-btn--variant-outlined, .v-btn--variant-text, .v-btn--variant-tonal {\n  background: transparent;\n  color: inherit;\n}\n.v-btn--variant-plain {\n  opacity: 0.62;\n}\n.v-btn--variant-plain:focus, .v-btn--variant-plain:hover {\n  opacity: 1;\n}\n.v-btn--variant-plain .v-btn__overlay {\n  display: none;\n}\n.v-btn--variant-elevated, .v-btn--variant-flat {\n  background: rgb(var(--v-theme-surface));\n  color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));\n}\n.v-btn--variant-elevated {\n  box-shadow: 0px 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 2px 2px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 5px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));\n}\n.v-btn--variant-flat {\n  box-shadow: 0px 0px 0px 0px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));\n}\n.v-btn--variant-outlined {\n  border: thin solid currentColor;\n}\n.v-btn--variant-text .v-btn__overlay {\n  background: currentColor;\n}\n.v-btn--variant-tonal .v-btn__underlay {\n  background: currentColor;\n  opacity: var(--v-activated-opacity);\n  border-radius: inherit;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  pointer-events: none;\n}\n@supports selector(:focus-visible) {\n  .v-btn::after {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    pointer-events: none;\n    border: 2px solid currentColor;\n    border-radius: inherit;\n    opacity: 0;\n    transition: opacity 0.2s ease-in-out;\n  }\n  .v-btn:focus-visible::after {\n    opacity: calc(0.25 * var(--v-theme-overlay-multiplier));\n  }\n}\n.v-btn--icon {\n  border-radius: 50%;\n  min-width: 0;\n  padding: 0;\n}\n.v-btn--icon.v-btn--size-default {\n  --v-btn-size: 1rem;\n}\n.v-btn--icon.v-btn--density-default {\n  width: calc(var(--v-btn-height) + 12px);\n  height: calc(var(--v-btn-height) + 12px);\n}\n.v-btn--icon.v-btn--density-comfortable {\n  width: calc(var(--v-btn-height) + 0px);\n  height: calc(var(--v-btn-height) + 0px);\n}\n.v-btn--icon.v-btn--density-compact {\n  width: calc(var(--v-btn-height) + -8px);\n  height: calc(var(--v-btn-height) + -8px);\n}\n\n.v-btn--elevated:hover, .v-btn--elevated:focus {\n  box-shadow: 0px 2px 4px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 4px 5px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 10px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));\n}\n.v-btn--elevated:active {\n  box-shadow: 0px 5px 5px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 8px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 3px 14px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));\n}\n.v-btn--flat {\n  box-shadow: none;\n}\n.v-btn--block {\n  display: flex;\n  flex: 1 0 auto;\n  min-width: 100%;\n}\n.v-btn--disabled {\n  pointer-events: none;\n  opacity: 0.26;\n}\n.v-btn--disabled:hover {\n  opacity: 0.26;\n}\n.v-btn--disabled.v-btn--variant-elevated, .v-btn--disabled.v-btn--variant-flat {\n  box-shadow: none;\n  opacity: 1;\n  color: rgba(var(--v-theme-on-surface), 0.26);\n  background: rgb(var(--v-theme-surface));\n}\n.v-btn--disabled.v-btn--variant-elevated .v-btn__overlay, .v-btn--disabled.v-btn--variant-flat .v-btn__overlay {\n  opacity: 0.4615384615;\n}\n.v-btn--loading {\n  pointer-events: none;\n}\n.v-btn--loading .v-btn__content,\n.v-btn--loading .v-btn__prepend,\n.v-btn--loading .v-btn__append {\n  opacity: 0;\n}\n.v-btn--stacked {\n  grid-template-areas: \"prepend\" \"content\" \"append\";\n  grid-template-columns: auto;\n  grid-template-rows: max-content max-content max-content;\n  justify-items: center;\n  align-content: center;\n}\n.v-btn--stacked .v-btn__content {\n  flex-direction: column;\n  line-height: 1.25;\n}\n.v-btn--stacked .v-btn__prepend,\n.v-btn--stacked .v-btn__append,\n.v-btn--stacked .v-btn__content > .v-icon--start,\n.v-btn--stacked .v-btn__content > .v-icon--end {\n  margin-inline-start: 0;\n  margin-inline-end: 0;\n}\n.v-btn--stacked .v-btn__prepend,\n.v-btn--stacked .v-btn__content > .v-icon--start {\n  margin-bottom: 4px;\n}\n.v-btn--stacked .v-btn__append,\n.v-btn--stacked .v-btn__content > .v-icon--end {\n  margin-top: 4px;\n}\n.v-btn--stacked.v-btn--size-x-small {\n  --v-btn-size: 0.625rem;\n  --v-btn-height: 56px;\n  font-size: var(--v-btn-size);\n  min-width: 56px;\n  padding: 0 12px;\n}\n\n.v-btn--stacked.v-btn--size-small {\n  --v-btn-size: 0.75rem;\n  --v-btn-height: 64px;\n  font-size: var(--v-btn-size);\n  min-width: 64px;\n  padding: 0 14px;\n}\n\n.v-btn--stacked.v-btn--size-default {\n  --v-btn-size: 0.875rem;\n  --v-btn-height: 72px;\n  font-size: var(--v-btn-size);\n  min-width: 72px;\n  padding: 0 16px;\n}\n\n.v-btn--stacked.v-btn--size-large {\n  --v-btn-size: 1rem;\n  --v-btn-height: 80px;\n  font-size: var(--v-btn-size);\n  min-width: 80px;\n  padding: 0 18px;\n}\n\n.v-btn--stacked.v-btn--size-x-large {\n  --v-btn-size: 1.125rem;\n  --v-btn-height: 88px;\n  font-size: var(--v-btn-size);\n  min-width: 88px;\n  padding: 0 20px;\n}\n\n.v-btn--stacked.v-btn--density-default {\n  height: calc(var(--v-btn-height) + 0px);\n}\n\n.v-btn--stacked.v-btn--density-comfortable {\n  height: calc(var(--v-btn-height) + -16px);\n}\n\n.v-btn--stacked.v-btn--density-compact {\n  height: calc(var(--v-btn-height) + -24px);\n}\n\n.v-btn--rounded {\n  border-radius: 24px;\n}\n.v-btn--rounded.v-btn--icon {\n  border-radius: 4px;\n}\n.v-btn .v-icon {\n  --v-icon-size-multiplier: 0.8571428571;\n}\n.v-btn--icon .v-icon {\n  --v-icon-size-multiplier: 1;\n}\n.v-btn--stacked .v-icon {\n  --v-icon-size-multiplier: 1.1428571429;\n}\n\n.v-btn__loader {\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n.v-btn__content,\n.v-btn__prepend,\n.v-btn__append {\n  align-items: center;\n  display: flex;\n  transition: transform, opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.v-btn__prepend {\n  grid-area: prepend;\n  margin-inline-start: calc(var(--v-btn-height) / -9);\n  margin-inline-end: calc(var(--v-btn-height) / 4.5);\n}\n\n.v-btn__append {\n  grid-area: append;\n  margin-inline-start: calc(var(--v-btn-height) / 4.5);\n  margin-inline-end: calc(var(--v-btn-height) / -9);\n}\n\n.v-btn__content {\n  grid-area: content;\n  justify-content: center;\n  white-space: nowrap;\n}\n.v-btn__content > .v-icon--start {\n  margin-inline-start: calc(var(--v-btn-height) / -9);\n  margin-inline-end: calc(var(--v-btn-height) / 4.5);\n}\n.v-btn__content > .v-icon--end {\n  margin-inline-start: calc(var(--v-btn-height) / 4.5);\n  margin-inline-end: calc(var(--v-btn-height) / -9);\n}\n.v-btn--stacked .v-btn__content {\n  white-space: normal;\n}\n\n.v-btn__overlay {\n  background-color: currentColor;\n  border-radius: inherit;\n  opacity: 0;\n  transition: opacity 0.2s ease-in-out;\n}\n\n.v-btn__overlay,\n.v-btn__underlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n\n.v-card-actions .v-btn {\n  padding: 0 8px;\n}\n.v-card-actions .v-btn ~ .v-btn:not(.v-btn-toggle .v-btn) {\n  margin-inline-start: 0.5rem;\n}\n\n.v-banner-actions .v-btn {\n  padding: 0 8px;\n}\n\n.v-pagination .v-btn {\n  border-radius: 4px;\n}\n.v-btn__overlay {\n  transition: none;\n}\n.v-pagination__item--is-active .v-btn__overlay {\n  opacity: var(--v-border-opacity);\n}\n\n.v-snackbar-actions .v-btn {\n  padding: 0 8px;\n}";
styleInject(css_248z$q);

var css_248z$p = ".v-btn-toggle > .v-btn.v-btn--active:not(.v-btn--disabled) > .v-btn__overlay {\n  opacity: calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier));\n}\n.v-btn-toggle > .v-btn.v-btn--active:not(.v-btn--disabled):hover > .v-btn__overlay {\n  opacity: calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier));\n}\n.v-btn-toggle > .v-btn.v-btn--active:not(.v-btn--disabled):focus-visible > .v-btn__overlay {\n  opacity: calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier));\n}\n@supports not selector(:focus-visible) {\n  .v-btn-toggle > .v-btn.v-btn--active:not(.v-btn--disabled):focus > .v-btn__overlay {\n    opacity: calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier));\n  }\n}";
styleInject(css_248z$p);

var css_248z$o = "/** if false, disabled buttons will be greyed out */\n.v-btn-group {\n  display: inline-flex;\n  flex-wrap: nowrap;\n  max-width: 100%;\n  min-width: 0;\n  overflow: hidden;\n  vertical-align: middle;\n  border-color: rgba(var(--v-border-color), var(--v-border-opacity));\n  border-style: solid;\n  border-width: 0;\n  box-shadow: 0px 0px 0px 0px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));\n  border-radius: 4px;\n  background: transparent;\n  color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));\n}\n.v-btn-group--border {\n  border-width: thin;\n  box-shadow: none;\n}\n.v-btn-group--density-default.v-btn-group {\n  height: 48px;\n}\n\n.v-btn-group--density-comfortable.v-btn-group {\n  height: 40px;\n}\n\n.v-btn-group--density-compact.v-btn-group {\n  height: 36px;\n}\n\n.v-btn-group .v-btn {\n  border-radius: 0;\n  border-color: inherit;\n}\n.v-btn-group .v-btn:not(:last-child) {\n  border-inline-end: none;\n}\n.v-btn-group .v-btn:not(:first-child) {\n  border-inline-start: none;\n}\n.v-btn-group .v-btn:first-child {\n  border-start-start-radius: inherit;\n  border-end-start-radius: inherit;\n}\n.v-btn-group .v-btn:last-child {\n  border-start-end-radius: inherit;\n  border-end-end-radius: inherit;\n}\n.v-btn-group--divided .v-btn:not(:last-child) {\n  border-inline-end-width: thin;\n  border-inline-end-style: solid;\n  border-inline-end-color: rgba(var(--v-border-color), var(--v-border-opacity));\n}\n.v-btn-group--tile {\n  border-radius: 0;\n}";
styleInject(css_248z$o);

const IN_BROWSER = typeof window !== 'undefined';
const SUPPORTS_INTERSECTION = IN_BROWSER && 'IntersectionObserver' in window;

function getNestedValue(obj, path, fallback) {
  const last = path.length - 1;
  if (last < 0) return obj === undefined ? fallback : obj;
  for (let i = 0; i < last; i++) {
    if (obj == null) {
      return fallback;
    }
    obj = obj[path[i]];
  }
  if (obj == null) return fallback;
  return obj[path[last]] === undefined ? fallback : obj[path[last]];
}
function deepEqual(a, b) {
  if (a === b) return true;
  if (a instanceof Date && b instanceof Date && a.getTime() !== b.getTime()) {
    // If the values are Date, compare them as timestamps
    return false;
  }
  if (a !== Object(a) || b !== Object(b)) {
    // If the values aren't objects, they were already checked for equality
    return false;
  }
  const props = Object.keys(a);
  if (props.length !== Object.keys(b).length) {
    // Different number of props, don't bother to check
    return false;
  }
  return props.every(p => deepEqual(a[p], b[p]));
}
function getObjectValueByPath(obj, path, fallback) {
  // credit: http://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-with-string-key#comment55278413_6491621
  if (obj == null || !path || typeof path !== 'string') return fallback;
  if (obj[path] !== undefined) return obj[path];
  path = path.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
  path = path.replace(/^\./, ''); // strip a leading dot
  return getNestedValue(obj, path.split('.'), fallback);
}
function getPropertyFromItem(item, property, fallback) {
  if (property == null) return item === undefined ? fallback : item;
  if (item !== Object(item)) {
    if (typeof property !== 'function') return fallback;
    const value = property(item, fallback);
    return typeof value === 'undefined' ? fallback : value;
  }
  if (typeof property === 'string') return getObjectValueByPath(item, property, fallback);
  if (Array.isArray(property)) return getNestedValue(item, property, fallback);
  if (typeof property !== 'function') return fallback;
  const value = property(item, fallback);
  return typeof value === 'undefined' ? fallback : value;
}
function convertToUnit(str) {
  let unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'px';
  if (str == null || str === '') {
    return undefined;
  } else if (isNaN(+str)) {
    return String(str);
  } else if (!isFinite(+str)) {
    return undefined;
  } else {
    return `${Number(str)}${unit}`;
  }
}
function isObject(obj) {
  return obj !== null && typeof obj === 'object' && !Array.isArray(obj);
}
function refElement(obj) {
  return obj && '$el' in obj ? obj.$el : obj;
}

// KeyboardEvent.keyCode aliases
const keyCodes = Object.freeze({
  enter: 13,
  tab: 9,
  delete: 46,
  esc: 27,
  space: 32,
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  end: 35,
  home: 36,
  del: 46,
  backspace: 8,
  insert: 45,
  pageup: 33,
  pagedown: 34,
  shift: 16
});
function has(obj, key) {
  return key.every(k => obj.hasOwnProperty(k));
}
function pick(obj, paths, exclude) {
  const found = Object.create(null);
  const rest = Object.create(null);
  for (const key in obj) {
    if (paths.some(path => path instanceof RegExp ? path.test(key) : path === key) && !exclude?.some(path => path === key)) {
      found[key] = obj[key];
    } else {
      rest[key] = obj[key];
    }
  }
  return [found, rest];
}
function omit(obj, exclude) {
  const clone = {
    ...obj
  };
  exclude.forEach(prop => delete clone[prop]);
  return clone;
}
const onRE = /^on[^a-z]/;
const isOn = key => onRE.test(key);
const bubblingEvents = ['onAfterscriptexecute', 'onAnimationcancel', 'onAnimationend', 'onAnimationiteration', 'onAnimationstart', 'onAuxclick', 'onBeforeinput', 'onBeforescriptexecute', 'onChange', 'onClick', 'onCompositionend', 'onCompositionstart', 'onCompositionupdate', 'onContextmenu', 'onCopy', 'onCut', 'onDblclick', 'onFocusin', 'onFocusout', 'onFullscreenchange', 'onFullscreenerror', 'onGesturechange', 'onGestureend', 'onGesturestart', 'onGotpointercapture', 'onInput', 'onKeydown', 'onKeypress', 'onKeyup', 'onLostpointercapture', 'onMousedown', 'onMousemove', 'onMouseout', 'onMouseover', 'onMouseup', 'onMousewheel', 'onPaste', 'onPointercancel', 'onPointerdown', 'onPointerenter', 'onPointerleave', 'onPointermove', 'onPointerout', 'onPointerover', 'onPointerup', 'onReset', 'onSelect', 'onSubmit', 'onTouchcancel', 'onTouchend', 'onTouchmove', 'onTouchstart', 'onTransitioncancel', 'onTransitionend', 'onTransitionrun', 'onTransitionstart', 'onWheel'];

/**
 * Filter attributes that should be applied to
 * the root element of an input component. Remaining
 * attributes should be passed to the <input> element inside.
 */
function filterInputAttrs(attrs) {
  const [events, props] = pick(attrs, [onRE]);
  const inputEvents = omit(events, bubblingEvents);
  const [rootAttrs, inputAttrs] = pick(props, ['class', 'style', 'id', /^data-/]);
  Object.assign(rootAttrs, events);
  Object.assign(inputAttrs, inputEvents);
  return [rootAttrs, inputAttrs];
}
function wrapInArray(v) {
  return v == null ? [] : Array.isArray(v) ? v : [v];
}
function clamp(value) {
  let min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  let max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  return Math.max(min, Math.min(max, value));
}
function padEnd(str, length) {
  let char = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0';
  return str + char.repeat(Math.max(0, length - str.length));
}
function chunk(str) {
  let size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  const chunked = [];
  let index = 0;
  while (index < str.length) {
    chunked.push(str.substr(index, size));
    index += size;
  }
  return chunked;
}
function mergeDeep() {
  let source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let arrayFn = arguments.length > 2 ? arguments[2] : undefined;
  const out = {};
  for (const key in source) {
    out[key] = source[key];
  }
  for (const key in target) {
    const sourceProperty = source[key];
    const targetProperty = target[key];

    // Only continue deep merging if
    // both properties are objects
    if (isObject(sourceProperty) && isObject(targetProperty)) {
      out[key] = mergeDeep(sourceProperty, targetProperty, arrayFn);
      continue;
    }
    if (Array.isArray(sourceProperty) && Array.isArray(targetProperty) && arrayFn) {
      out[key] = arrayFn(sourceProperty, targetProperty);
      continue;
    }
    out[key] = targetProperty;
  }
  return out;
}
function flattenFragments(nodes) {
  return nodes.map(node => {
    if (node.type === vue.Fragment) {
      return flattenFragments(node.children);
    } else {
      return node;
    }
  }).flat();
}
function toKebabCase() {
  let str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  if (toKebabCase.cache.has(str)) return toKebabCase.cache.get(str);
  const kebab = str.replace(/[^a-z]/gi, '-').replace(/\B([A-Z])/g, '-$1').toLowerCase();
  toKebabCase.cache.set(str, kebab);
  return kebab;
}
toKebabCase.cache = new Map();
function findChildrenWithProvide(key, vnode) {
  if (!vnode || typeof vnode !== 'object') return [];
  if (Array.isArray(vnode)) {
    return vnode.map(child => findChildrenWithProvide(key, child)).flat(1);
  } else if (Array.isArray(vnode.children)) {
    return vnode.children.map(child => findChildrenWithProvide(key, child)).flat(1);
  } else if (vnode.component) {
    if (Object.getOwnPropertySymbols(vnode.component.provides).includes(key)) {
      return [vnode.component];
    } else if (vnode.component.subTree) {
      return findChildrenWithProvide(key, vnode.component.subTree).flat(1);
    }
  }
  return [];
}

// Only allow a single return type

function destructComputed(getter) {
  const refs = vue.reactive({});
  const base = vue.computed(getter);
  vue.watchEffect(() => {
    for (const key in base.value) {
      refs[key] = base.value[key];
    }
  }, {
    flush: 'sync'
  });
  return vue.toRefs(refs);
}

/** Array.includes but value can be any type */
function includes(arr, val) {
  return arr.includes(val);
}
function eventName(propName) {
  return propName[2].toLowerCase() + propName.slice(3);
}
const EventProp = () => [Function, Array];
function hasEvent(props, name) {
  name = 'on' + vue.capitalize(name);
  return !!(props[name] || props[`${name}Once`] || props[`${name}Capture`] || props[`${name}OnceCapture`] || props[`${name}CaptureOnce`]);
}
function callEvent(handler) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }
  if (Array.isArray(handler)) {
    for (const h of handler) {
      h(...args);
    }
  } else if (typeof handler === 'function') {
    handler(...args);
  }
}
function focusableChildren(el) {
  let filterByTabIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  const targets = ['button', '[href]', 'input:not([type="hidden"])', 'select', 'textarea', '[tabindex]'].map(s => `${s}${filterByTabIndex ? ':not([tabindex="-1"])' : ''}:not([disabled])`).join(', ');
  return [...el.querySelectorAll(targets)];
}
function getNextElement(elements, location, condition) {
  let _el;
  let idx = elements.indexOf(document.activeElement);
  const inc = location === 'next' ? 1 : -1;
  do {
    idx += inc;
    _el = elements[idx];
  } while ((!_el || _el.offsetParent == null || !(condition?.(_el) ?? true)) && idx < elements.length && idx >= 0);
  return _el;
}
function focusChild(el, location) {
  const focusable = focusableChildren(el);
  if (!location) {
    if (el === document.activeElement || !el.contains(document.activeElement)) {
      focusable[0]?.focus();
    }
  } else if (location === 'first') {
    focusable[0]?.focus();
  } else if (location === 'last') {
    focusable.at(-1)?.focus();
  } else if (typeof location === 'number') {
    focusable[location]?.focus();
  } else {
    const _el = getNextElement(focusable, location);
    if (_el) _el.focus();else focusChild(el, location === 'next' ? 'first' : 'last');
  }
}

/** Returns null if the selector is not supported or we can't check */
function matchesSelector(el, selector) {
  const supportsSelector = IN_BROWSER && typeof CSS !== 'undefined' && typeof CSS.supports !== 'undefined' && CSS.supports(`selector(${selector})`);
  if (!supportsSelector) return null;
  try {
    return !!el && el.matches(selector);
  } catch (err) {
    return null;
  }
}

// Utilities
const block = ['top', 'bottom'];
const inline = ['start', 'end', 'left', 'right'];
/** Parse a raw anchor string into an object */
function parseAnchor(anchor, isRtl) {
  let [side, align] = anchor.split(' ');
  if (!align) {
    align = includes(block, side) ? 'start' : includes(inline, side) ? 'top' : 'center';
  }
  return {
    side: toPhysical(side, isRtl),
    align: toPhysical(align, isRtl)
  };
}
function toPhysical(str, isRtl) {
  if (str === 'start') return isRtl ? 'right' : 'left';
  if (str === 'end') return isRtl ? 'left' : 'right';
  return str;
}
function flipSide(anchor) {
  return {
    side: {
      center: 'center',
      top: 'bottom',
      bottom: 'top',
      left: 'right',
      right: 'left'
    }[anchor.side],
    align: anchor.align
  };
}
function flipAlign(anchor) {
  return {
    side: anchor.side,
    align: {
      center: 'center',
      top: 'bottom',
      bottom: 'top',
      left: 'right',
      right: 'left'
    }[anchor.align]
  };
}
function flipCorner(anchor) {
  return {
    side: anchor.align,
    align: anchor.side
  };
}
function getAxis(anchor) {
  return includes(block, anchor.side) ? 'y' : 'x';
}

class Box {
  constructor(_ref) {
    let {
      x,
      y,
      width,
      height
    } = _ref;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
}
function getOverflow(a, b) {
  return {
    x: {
      before: Math.max(0, b.left - a.left),
      after: Math.max(0, a.right - b.right)
    },
    y: {
      before: Math.max(0, b.top - a.top),
      after: Math.max(0, a.bottom - b.bottom)
    }
  };
}

// Utilities
/** @see https://stackoverflow.com/a/57876601/2074736 */
function nullifyTransforms(el) {
  const rect = el.getBoundingClientRect();
  const style = getComputedStyle(el);
  const tx = style.transform;
  if (tx) {
    let ta, sx, sy, dx, dy;
    if (tx.startsWith('matrix3d(')) {
      ta = tx.slice(9, -1).split(/, /);
      sx = +ta[0];
      sy = +ta[5];
      dx = +ta[12];
      dy = +ta[13];
    } else if (tx.startsWith('matrix(')) {
      ta = tx.slice(7, -1).split(/, /);
      sx = +ta[0];
      sy = +ta[3];
      dx = +ta[4];
      dy = +ta[5];
    } else {
      return new Box(rect);
    }
    const to = style.transformOrigin;
    const x = rect.x - dx - (1 - sx) * parseFloat(to);
    const y = rect.y - dy - (1 - sy) * parseFloat(to.slice(to.indexOf(' ') + 1));
    const w = sx ? rect.width / sx : el.offsetWidth + 1;
    const h = sy ? rect.height / sy : el.offsetHeight + 1;
    return new Box({
      x,
      y,
      width: w,
      height: h
    });
  } else {
    return new Box(rect);
  }
}
function animate(el, keyframes, options) {
  if (typeof el.animate === 'undefined') return {
    finished: Promise.resolve()
  };
  let animation;
  try {
    animation = el.animate(keyframes, options);
  } catch (err) {
    return {
      finished: Promise.resolve()
    };
  }
  if (typeof animation.finished === 'undefined') {
    animation.finished = new Promise(resolve => {
      animation.onfinish = () => {
        resolve(animation);
      };
    });
  }
  return animation;
}

// Utilities
const handlers = new WeakMap();
function bindProps(el, props) {
  Object.keys(props).forEach(k => {
    if (isOn(k)) {
      const name = eventName(k);
      const handler = handlers.get(el);
      if (props[k] == null) {
        handler?.forEach(v => {
          const [n, fn] = v;
          if (n === name) {
            el.removeEventListener(name, fn);
            handler.delete(v);
          }
        });
      } else if (!handler || ![...handler]?.some(v => v[0] === name && v[1] === props[k])) {
        el.addEventListener(name, props[k]);
        const _handler = handler || new Set();
        _handler.add([name, props[k]]);
        if (!handlers.has(el)) handlers.set(el, _handler);
      }
    } else {
      if (props[k] == null) {
        el.removeAttribute(k);
      } else {
        el.setAttribute(k, props[k]);
      }
    }
  });
}
function unbindProps(el, props) {
  Object.keys(props).forEach(k => {
    if (isOn(k)) {
      const name = eventName(k);
      const handler = handlers.get(el);
      handler?.forEach(v => {
        const [n, fn] = v;
        if (n === name) {
          el.removeEventListener(name, fn);
          handler.delete(v);
        }
      });
    } else {
      el.removeAttribute(k);
    }
  });
}

/**
 * WCAG 3.0 APCA perceptual contrast algorithm from https://github.com/Myndex/SAPC-APCA
 * @licence https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @see https://www.w3.org/WAI/GL/task-forces/silver/wiki/Visual_Contrast_of_Text_Subgroup
 */
// Types

// MAGICAL NUMBERS

// sRGB Conversion to Relative Luminance (Y)

// Transfer Curve (aka "Gamma") for sRGB linearization
// Simple power curve vs piecewise described in docs
// Essentially, 2.4 best models actual display
// characteristics in combination with the total method
const mainTRC = 2.4;
const Rco = 0.2126729; // sRGB Red Coefficient (from matrix)
const Gco = 0.7151522; // sRGB Green Coefficient (from matrix)
const Bco = 0.0721750; // sRGB Blue Coefficient (from matrix)

// For Finding Raw SAPC Contrast from Relative Luminance (Y)

// Constants for SAPC Power Curve Exponents
// One pair for normal text, and one for reverse
// These are the "beating heart" of SAPC
const normBG = 0.55;
const normTXT = 0.58;
const revTXT = 0.57;
const revBG = 0.62;

// For Clamping and Scaling Values

const blkThrs = 0.03; // Level that triggers the soft black clamp
const blkClmp = 1.45; // Exponent for the soft black clamp curve
const deltaYmin = 0.0005; // Lint trap
const scaleBoW = 1.25; // Scaling for dark text on light
const scaleWoB = 1.25; // Scaling for light text on dark
const loConThresh = 0.078; // Threshold for new simple offset scale
const loConFactor = 12.82051282051282; // = 1/0.078,
const loConOffset = 0.06; // The simple offset
const loClip = 0.001; // Output clip (lint trap #2)

function APCAcontrast(text, background) {
  // Linearize sRGB
  const Rtxt = (text.r / 255) ** mainTRC;
  const Gtxt = (text.g / 255) ** mainTRC;
  const Btxt = (text.b / 255) ** mainTRC;
  const Rbg = (background.r / 255) ** mainTRC;
  const Gbg = (background.g / 255) ** mainTRC;
  const Bbg = (background.b / 255) ** mainTRC;

  // Apply the standard coefficients and sum to Y
  let Ytxt = Rtxt * Rco + Gtxt * Gco + Btxt * Bco;
  let Ybg = Rbg * Rco + Gbg * Gco + Bbg * Bco;

  // Soft clamp Y when near black.
  // Now clamping all colors to prevent crossover errors
  if (Ytxt <= blkThrs) Ytxt += (blkThrs - Ytxt) ** blkClmp;
  if (Ybg <= blkThrs) Ybg += (blkThrs - Ybg) ** blkClmp;

  // Return 0 Early for extremely low ∆Y (lint trap #1)
  if (Math.abs(Ybg - Ytxt) < deltaYmin) return 0.0;

  // SAPC CONTRAST

  let outputContrast; // For weighted final values
  if (Ybg > Ytxt) {
    // For normal polarity, black text on white
    // Calculate the SAPC contrast value and scale

    const SAPC = (Ybg ** normBG - Ytxt ** normTXT) * scaleBoW;

    // NEW! SAPC SmoothScale™
    // Low Contrast Smooth Scale Rollout to prevent polarity reversal
    // and also a low clip for very low contrasts (lint trap #2)
    // much of this is for very low contrasts, less than 10
    // therefore for most reversing needs, only loConOffset is important
    outputContrast = SAPC < loClip ? 0.0 : SAPC < loConThresh ? SAPC - SAPC * loConFactor * loConOffset : SAPC - loConOffset;
  } else {
    // For reverse polarity, light text on dark
    // WoB should always return negative value.

    const SAPC = (Ybg ** revBG - Ytxt ** revTXT) * scaleWoB;
    outputContrast = SAPC > -loClip ? 0.0 : SAPC > -loConThresh ? SAPC - SAPC * loConFactor * loConOffset : SAPC + loConOffset;
  }
  return outputContrast * 100;
}

/* eslint-disable no-console */

function consoleWarn(message) {
  vue.warn(`Vuetify: ${message}`);
}
function consoleError(message) {
  vue.warn(`Vuetify error: ${message}`);
}
function deprecate(original, replacement) {
  replacement = Array.isArray(replacement) ? replacement.slice(0, -1).map(s => `'${s}'`).join(', ') + ` or '${replacement.at(-1)}'` : `'${replacement}'`;
  vue.warn(`[Vuetify UPGRADE] '${original}' is deprecated, use ${replacement} instead.`);
}

// Utilities
function isCssColor(color) {
  return !!color && /^(#|var\(--|(rgb|hsl)a?\()/.test(color);
}
const cssColorRe = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/;
const mappers = {
  rgb: (r, g, b, a) => ({
    r,
    g,
    b,
    a
  }),
  rgba: (r, g, b, a) => ({
    r,
    g,
    b,
    a
  }),
  hsl: (h, s, l, a) => HSLtoRGB({
    h,
    s,
    l,
    a
  }),
  hsla: (h, s, l, a) => HSLtoRGB({
    h,
    s,
    l,
    a
  }),
  hsv: (h, s, v, a) => HSVtoRGB({
    h,
    s,
    v,
    a
  }),
  hsva: (h, s, v, a) => HSVtoRGB({
    h,
    s,
    v,
    a
  })
};
function parseColor(color) {
  if (typeof color === 'number') {
    if (isNaN(color) || color < 0 || color > 0xFFFFFF) {
      // int can't have opacity
      consoleWarn(`'${color}' is not a valid hex color`);
    }
    return {
      r: (color & 0xFF0000) >> 16,
      g: (color & 0xFF00) >> 8,
      b: color & 0xFF
    };
  } else if (typeof color === 'string' && cssColorRe.test(color)) {
    const {
      groups
    } = color.match(cssColorRe);
    const {
      fn,
      values
    } = groups;
    const realValues = values.split(/,\s*/).map(v => {
      if (v.endsWith('%') && ['hsl', 'hsla', 'hsv', 'hsva'].includes(fn)) {
        return parseFloat(v) / 100;
      } else {
        return parseFloat(v);
      }
    });
    return mappers[fn](...realValues);
  } else if (typeof color === 'string') {
    let hex = color.startsWith('#') ? color.slice(1) : color;
    if ([3, 4].includes(hex.length)) {
      hex = hex.split('').map(char => char + char).join('');
    } else if (![6, 8].includes(hex.length)) {
      consoleWarn(`'${color}' is not a valid hex(a) color`);
    }
    const int = parseInt(hex, 16);
    if (isNaN(int) || int < 0 || int > 0xFFFFFFFF) {
      consoleWarn(`'${color}' is not a valid hex(a) color`);
    }
    return HexToRGB(hex);
  } else if (typeof color === 'object') {
    if (has(color, ['r', 'g', 'b'])) {
      return color;
    } else if (has(color, ['h', 's', 'l'])) {
      return HSVtoRGB(HSLtoHSV(color));
    } else if (has(color, ['h', 's', 'v'])) {
      return HSVtoRGB(color);
    }
  }
  throw new TypeError(`Invalid color: ${color == null ? color : String(color) || color.constructor.name}\nExpected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}

/** Converts HSVA to RGBA. Based on formula from https://en.wikipedia.org/wiki/HSL_and_HSV */
function HSVtoRGB(hsva) {
  const {
    h,
    s,
    v,
    a
  } = hsva;
  const f = n => {
    const k = (n + h / 60) % 6;
    return v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
  };
  const rgb = [f(5), f(3), f(1)].map(v => Math.round(v * 255));
  return {
    r: rgb[0],
    g: rgb[1],
    b: rgb[2],
    a
  };
}
function HSLtoRGB(hsla) {
  return HSVtoRGB(HSLtoHSV(hsla));
}
function HSLtoHSV(hsl) {
  const {
    h,
    s,
    l,
    a
  } = hsl;
  const v = l + s * Math.min(l, 1 - l);
  const sprime = v === 0 ? 0 : 2 - 2 * l / v;
  return {
    h,
    s: sprime,
    v,
    a
  };
}
function HexToRGB(hex) {
  hex = parseHex(hex);
  let [r, g, b, a] = chunk(hex, 2).map(c => parseInt(c, 16));
  a = a === undefined ? a : a / 255;
  return {
    r,
    g,
    b,
    a
  };
}
function parseHex(hex) {
  if (hex.startsWith('#')) {
    hex = hex.slice(1);
  }
  hex = hex.replace(/([^0-9a-f])/gi, 'F');
  if (hex.length === 3 || hex.length === 4) {
    hex = hex.split('').map(x => x + x).join('');
  }
  if (hex.length !== 6) {
    hex = padEnd(padEnd(hex, 6), 8, 'F');
  }
  return hex;
}
function getForeground(color) {
  const blackContrast = Math.abs(APCAcontrast(parseColor(0), parseColor(color)));
  const whiteContrast = Math.abs(APCAcontrast(parseColor(0xffffff), parseColor(color)));

  // TODO: warn about poor color selections
  // const contrastAsText = Math.abs(APCAcontrast(colorVal, colorToInt(theme.colors.background)))
  // const minContrast = Math.max(blackContrast, whiteContrast)
  // if (minContrast < 60) {
  //   consoleInfo(`${key} theme color ${color} has poor contrast (${minContrast.toFixed()}%)`)
  // } else if (contrastAsText < 60 && !['background', 'surface'].includes(color)) {
  //   consoleInfo(`${key} theme color ${color} has poor contrast as text (${contrastAsText.toFixed()}%)`)
  // }

  // Prefer white text if both have an acceptable contrast ratio
  return whiteContrast > Math.min(blackContrast, 50) ? '#fff' : '#000';
}

// Types
// eslint-disable-line vue/prefer-import-from-vue

/**
 * Creates a factory function for props definitions.
 * This is used to define props in a composable then override
 * default values in an implementing component.
 *
 * @example Simplified signature
 * (props: Props) => (defaults?: Record<keyof props, any>) => Props
 *
 * @example Usage
 * const makeProps = propsFactory({
 *   foo: String,
 * })
 *
 * defineComponent({
 *   props: {
 *     ...makeProps({
 *       foo: 'a',
 *     }),
 *   },
 *   setup (props) {
 *     // would be "string | undefined", now "string" because a default has been provided
 *     props.foo
 *   },
 * }
 */

function propsFactory(props, source) {
  return defaults => {
    return Object.keys(props).reduce((obj, prop) => {
      const isObjectDefinition = typeof props[prop] === 'object' && props[prop] != null && !Array.isArray(props[prop]);
      const definition = isObjectDefinition ? props[prop] : {
        type: props[prop]
      };
      if (defaults && prop in defaults) {
        obj[prop] = {
          ...definition,
          default: defaults[prop]
        };
      } else {
        obj[prop] = definition;
      }
      if (source && !obj[prop].source) {
        obj[prop].source = source;
      }
      return obj;
    }, {});
  };
}

// Utilities
// Composables
const makeComponentProps = propsFactory({
  class: [String, Array],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, 'component');

// Utilities
const DefaultsSymbol = Symbol.for('vuetify:defaults');
function injectDefaults() {
  const defaults = vue.inject(DefaultsSymbol);
  if (!defaults) throw new Error('[Vuetify] Could not find defaults instance');
  return defaults;
}
function provideDefaults(defaults, options) {
  const injectedDefaults = injectDefaults();
  const providedDefaults = vue.ref(defaults);
  const newDefaults = vue.computed(() => {
    const disabled = vue.unref(options?.disabled);
    if (disabled) return injectedDefaults.value;
    const scoped = vue.unref(options?.scoped);
    const reset = vue.unref(options?.reset);
    const root = vue.unref(options?.root);
    if (providedDefaults.value == null && !(scoped || reset || root)) return injectedDefaults.value;
    let properties = mergeDeep(providedDefaults.value, {
      prev: injectedDefaults.value
    });
    if (scoped) return properties;
    if (reset || root) {
      const len = Number(reset || Infinity);
      for (let i = 0; i <= len; i++) {
        if (!properties || !('prev' in properties)) {
          break;
        }
        properties = properties.prev;
      }
      if (properties && typeof root === 'string' && root in properties) {
        properties = mergeDeep(mergeDeep(properties, {
          prev: properties
        }), properties[root]);
      }
      return properties;
    }
    return properties.prev ? mergeDeep(properties.prev, properties) : properties;
  });
  vue.provide(DefaultsSymbol, newDefaults);
  return newDefaults;
}
function propIsDefined(vnode, prop) {
  return typeof vnode.props?.[prop] !== 'undefined' || typeof vnode.props?.[toKebabCase(prop)] !== 'undefined';
}
function internalUseDefaults() {
  let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let name = arguments.length > 1 ? arguments[1] : undefined;
  let defaults = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : injectDefaults();
  const vm = getCurrentInstance('useDefaults');
  name = name ?? vm.type.name ?? vm.type.__name;
  if (!name) {
    throw new Error('[Vuetify] Could not determine component name');
  }
  const componentDefaults = vue.computed(() => defaults.value?.[props._as ?? name]);
  const _props = new Proxy(props, {
    get(target, prop) {
      const propValue = Reflect.get(target, prop);
      if (prop === 'class' || prop === 'style') {
        return [componentDefaults.value?.[prop], propValue].filter(v => v != null);
      } else if (typeof prop === 'string' && !propIsDefined(vm.vnode, prop)) {
        return componentDefaults.value?.[prop] ?? defaults.value?.global?.[prop] ?? propValue;
      }
      return propValue;
    }
  });
  const _subcomponentDefaults = vue.shallowRef();
  vue.watchEffect(() => {
    if (componentDefaults.value) {
      const subComponents = Object.entries(componentDefaults.value).filter(_ref => {
        let [key] = _ref;
        return key.startsWith(key[0].toUpperCase());
      });
      _subcomponentDefaults.value = subComponents.length ? Object.fromEntries(subComponents) : undefined;
    } else {
      _subcomponentDefaults.value = undefined;
    }
  });
  function provideSubDefaults() {
    const injected = injectSelf(DefaultsSymbol, vm);
    vue.provide(DefaultsSymbol, vue.computed(() => {
      return _subcomponentDefaults.value ? mergeDeep(injected?.value ?? {}, _subcomponentDefaults.value) : injected?.value;
    }));
  }
  return {
    props: _props,
    provideSubDefaults
  };
}

// Composables
// Implementation
function defineComponent(options) {
  options._setup = options._setup ?? options.setup;
  if (!options.name) {
    consoleWarn('The component is missing an explicit name, unable to generate default prop value');
    return options;
  }
  if (options._setup) {
    options.props = propsFactory(options.props ?? {}, options.name)();
    const propKeys = Object.keys(options.props);
    options.filterProps = function filterProps(props) {
      return pick(props, propKeys, ['class', 'style']);
    };
    options.props._as = String;
    options.setup = function setup(props, ctx) {
      const defaults = injectDefaults();

      // Skip props proxy if defaults are not provided
      if (!defaults.value) return options._setup(props, ctx);
      const {
        props: _props,
        provideSubDefaults
      } = internalUseDefaults(props, props._as ?? options.name, defaults);
      const setupBindings = options._setup(_props, ctx);
      provideSubDefaults();
      return setupBindings;
    };
  }
  return options;
}
// Implementation
function genericComponent() {
  let exposeDefaults = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return options => (exposeDefaults ? defineComponent : vue.defineComponent)(options);
}

// Composables
function createSimpleFunctional(klass) {
  let tag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'div';
  let name = arguments.length > 2 ? arguments[2] : undefined;
  return genericComponent()({
    name: name ?? vue.capitalize(vue.camelize(klass.replace(/__/g, '-'))),
    props: {
      tag: {
        type: String,
        default: tag
      },
      ...makeComponentProps()
    },
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      return () => {
        return vue.h(props.tag, {
          class: [klass, props.class],
          style: props.style
        }, slots.default?.());
      };
    }
  });
}

/**
 * Returns:
 *  - 'null' if the node is not attached to the DOM
 *  - the root node (HTMLDocument | ShadowRoot) otherwise
 */
function attachedRoot(node) {
  /* istanbul ignore next */
  if (typeof node.getRootNode !== 'function') {
    // Shadow DOM not supported (IE11), lets find the root of this node
    while (node.parentNode) node = node.parentNode;

    // The root parent is the document if the node is attached to the DOM
    if (node !== document) return null;
    return document;
  }
  const root = node.getRootNode();

  // The composed root node is the document if the node is attached to the DOM
  if (root !== document && root.getRootNode({
    composed: true
  }) !== document) return null;
  return root;
}

const standardEasing = 'cubic-bezier(0.4, 0, 0.2, 1)';
const deceleratedEasing = 'cubic-bezier(0.0, 0, 0.2, 1)'; // Entering
const acceleratedEasing = 'cubic-bezier(0.4, 0, 1, 1)'; // Leaving

// Utilities
function getCurrentInstance(name, message) {
  const vm = vue.getCurrentInstance();
  if (!vm) {
    throw new Error(`[Vuetify] ${name} ${message || 'must be called from inside a setup function'}`);
  }
  return vm;
}
function getCurrentInstanceName() {
  let name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'composables';
  const vm = getCurrentInstance(name).type;
  return toKebabCase(vm?.aliasName || vm?.name);
}
let _uid = 0;
let _map = new WeakMap();
function getUid() {
  const vm = getCurrentInstance('getUid');
  if (_map.has(vm)) return _map.get(vm);else {
    const uid = _uid++;
    _map.set(vm, uid);
    return uid;
  }
}
getUid.reset = () => {
  _uid = 0;
  _map = new WeakMap();
};

function getScrollParent(el) {
  let includeHidden = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  while (el) {
    if (includeHidden ? isPotentiallyScrollable(el) : hasScrollbar(el)) return el;
    el = el.parentElement;
  }
  return document.scrollingElement;
}
function getScrollParents(el, stopAt) {
  const elements = [];
  if (stopAt && el && !stopAt.contains(el)) return elements;
  while (el) {
    if (hasScrollbar(el)) elements.push(el);
    if (el === stopAt) break;
    el = el.parentElement;
  }
  return elements;
}
function hasScrollbar(el) {
  if (!el || el.nodeType !== Node.ELEMENT_NODE) return false;
  const style = window.getComputedStyle(el);
  return style.overflowY === 'scroll' || style.overflowY === 'auto' && el.scrollHeight > el.clientHeight;
}
function isPotentiallyScrollable(el) {
  if (!el || el.nodeType !== Node.ELEMENT_NODE) return false;
  const style = window.getComputedStyle(el);
  return ['scroll', 'auto'].includes(style.overflowY);
}

// Utilities
function injectSelf(key) {
  let vm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getCurrentInstance('injectSelf');
  const {
    provides
  } = vm;
  if (provides && key in provides) {
    // TS doesn't allow symbol as index type
    return provides[key];
  }
  return undefined;
}

function isFixedPosition(el) {
  while (el) {
    if (window.getComputedStyle(el).position === 'fixed') {
      return true;
    }
    el = el.offsetParent;
  }
  return false;
}

// Utilities
function useRender(render) {
  const vm = getCurrentInstance('useRender');
  vm.render = render;
}

// Utilities
// Composables
const makeBorderProps = propsFactory({
  border: [Boolean, Number, String]
}, 'border');
function useBorder(props) {
  let name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getCurrentInstanceName();
  const borderClasses = vue.computed(() => {
    const border = vue.isRef(props) ? props.value : props.border;
    const classes = [];
    if (border === true || border === '') {
      classes.push(`${name}--border`);
    } else if (typeof border === 'string' || border === 0) {
      for (const value of String(border).split(' ')) {
        classes.push(`border-${value}`);
      }
    }
    return classes;
  });
  return {
    borderClasses
  };
}

// Utilities
const allowedDensities$1 = [null, 'default', 'comfortable', 'compact'];

// typeof allowedDensities[number] evalutes to any
// when generating api types for whatever reason.

// Composables
const makeDensityProps = propsFactory({
  density: {
    type: String,
    default: 'default',
    validator: v => allowedDensities$1.includes(v)
  }
}, 'density');
function useDensity(props) {
  let name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getCurrentInstanceName();
  const densityClasses = vue.computed(() => {
    return `${name}--density-${props.density}`;
  });
  return {
    densityClasses
  };
}

// Utilities
// Composables
const makeElevationProps = propsFactory({
  elevation: {
    type: [Number, String],
    validator(v) {
      const value = parseInt(v);
      return !isNaN(value) && value >= 0 &&
      // Material Design has a maximum elevation of 24
      // https://material.io/design/environment/elevation.html#default-elevations
      value <= 24;
    }
  }
}, 'elevation');
function useElevation(props) {
  const elevationClasses = vue.computed(() => {
    const elevation = vue.isRef(props) ? props.value : props.elevation;
    const classes = [];
    if (elevation == null) return classes;
    classes.push(`elevation-${elevation}`);
    return classes;
  });
  return {
    elevationClasses
  };
}

// Utilities
// Composables
const makeRoundedProps = propsFactory({
  rounded: {
    type: [Boolean, Number, String],
    default: undefined
  }
}, 'rounded');
function useRounded(props) {
  let name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getCurrentInstanceName();
  const roundedClasses = vue.computed(() => {
    const rounded = vue.isRef(props) ? props.value : props.rounded;
    const classes = [];
    if (rounded === true || rounded === '') {
      classes.push(`${name}--rounded`);
    } else if (typeof rounded === 'string' || rounded === 0) {
      for (const value of String(rounded).split(' ')) {
        classes.push(`rounded-${value}`);
      }
    }
    return classes;
  });
  return {
    roundedClasses
  };
}

// Utilities
// Composables
const makeTagProps = propsFactory({
  tag: {
    type: String,
    default: 'div'
  }
}, 'tag');

// Utilities
const ThemeSymbol = Symbol.for('vuetify:theme');
const makeThemeProps = propsFactory({
  theme: String
}, 'theme');
function provideTheme(props) {
  getCurrentInstance('provideTheme');
  const theme = vue.inject(ThemeSymbol, null);
  if (!theme) throw new Error('Could not find Vuetify theme injection');
  const name = vue.computed(() => {
    return props.theme ?? theme.name.value;
  });
  const current = vue.computed(() => theme.themes.value[name.value]);
  const themeClasses = vue.computed(() => theme.isDisabled ? undefined : `v-theme--${name.value}`);
  const newTheme = {
    ...theme,
    name,
    current,
    themeClasses
  };
  vue.provide(ThemeSymbol, newTheme);
  return newTheme;
}

// Utilities
// Composables
function useColor(colors) {
  return destructComputed(() => {
    const classes = [];
    const styles = {};
    if (colors.value.background) {
      if (isCssColor(colors.value.background)) {
        styles.backgroundColor = colors.value.background;
        if (!colors.value.text) {
          const backgroundColor = parseColor(colors.value.background);
          if (backgroundColor.a == null || backgroundColor.a === 1) {
            const textColor = getForeground(backgroundColor);
            styles.color = textColor;
            styles.caretColor = textColor;
          }
        }
      } else {
        classes.push(`bg-${colors.value.background}`);
      }
    }
    if (colors.value.text) {
      if (isCssColor(colors.value.text)) {
        styles.color = colors.value.text;
        styles.caretColor = colors.value.text;
      } else {
        classes.push(`text-${colors.value.text}`);
      }
    }
    return {
      colorClasses: classes,
      colorStyles: styles
    };
  });
}
function useTextColor(props, name) {
  const colors = vue.computed(() => ({
    text: vue.isRef(props) ? props.value : name ? props[name] : null
  }));
  const {
    colorClasses: textColorClasses,
    colorStyles: textColorStyles
  } = useColor(colors);
  return {
    textColorClasses,
    textColorStyles
  };
}
function useBackgroundColor(props, name) {
  const colors = vue.computed(() => ({
    background: vue.isRef(props) ? props.value : name ? props[name] : null
  }));
  const {
    colorClasses: backgroundColorClasses,
    colorStyles: backgroundColorStyles
  } = useColor(colors);
  return {
    backgroundColorClasses,
    backgroundColorStyles
  };
}

const allowedVariants$1 = ['elevated', 'flat', 'tonal', 'outlined', 'text', 'plain'];
function genOverlays(isClickable, name) {
  return vue.createVNode(vue.Fragment, null, [isClickable && vue.createVNode("span", {
    "key": "overlay",
    "class": `${name}__overlay`
  }, null), vue.createVNode("span", {
    "key": "underlay",
    "class": `${name}__underlay`
  }, null)]);
}
const makeVariantProps = propsFactory({
  color: String,
  variant: {
    type: String,
    default: 'elevated',
    validator: v => allowedVariants$1.includes(v)
  }
}, 'variant');
function useVariant(props) {
  let name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getCurrentInstanceName();
  const variantClasses = vue.computed(() => {
    const {
      variant
    } = vue.unref(props);
    return `${name}--variant-${variant}`;
  });
  const {
    colorClasses,
    colorStyles
  } = useColor(vue.computed(() => {
    const {
      variant,
      color
    } = vue.unref(props);
    return {
      [['elevated', 'flat'].includes(variant) ? 'background' : 'text']: color
    };
  }));
  return {
    colorClasses,
    colorStyles,
    variantClasses
  };
}

const makeVBtnGroupProps = propsFactory({
  divided: Boolean,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeElevationProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps()
}, 'VBtnGroup');
const VBtnGroup = genericComponent()({
  name: 'VBtnGroup',
  props: makeVBtnGroupProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    provideDefaults({
      VBtn: {
        height: 'auto',
        color: vue.toRef(props, 'color'),
        density: vue.toRef(props, 'density'),
        flat: true,
        variant: vue.toRef(props, 'variant')
      }
    });
    useRender(() => {
      return vue.createVNode(props.tag, {
        "class": ['v-btn-group', {
          'v-btn-group--divided': props.divided
        }, themeClasses.value, borderClasses.value, densityClasses.value, elevationClasses.value, roundedClasses.value, props.class],
        "style": props.style
      }, slots);
    });
  }
});

// Utilities

// Types

function useToggleScope(source, fn) {
  let scope;
  function start() {
    scope = vue.effectScope();
    scope.run(() => fn.length ? fn(() => {
      scope?.stop();
      start();
    }) : fn());
  }
  vue.watch(source, active => {
    if (active && !scope) {
      start();
    } else if (!active) {
      scope?.stop();
      scope = undefined;
    }
  }, {
    immediate: true
  });
  vue.onScopeDispose(() => {
    scope?.stop();
  });
}

// Composables
// Composables
function useProxiedModel(props, prop, defaultValue) {
  let transformIn = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : v => v;
  let transformOut = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : v => v;
  const vm = getCurrentInstance('useProxiedModel');
  const internal = vue.ref(props[prop] !== undefined ? props[prop] : defaultValue);
  const kebabProp = toKebabCase(prop);
  const checkKebab = kebabProp !== prop;
  const isControlled = checkKebab ? vue.computed(() => {
    void props[prop];
    return !!((vm.vnode.props?.hasOwnProperty(prop) || vm.vnode.props?.hasOwnProperty(kebabProp)) && (vm.vnode.props?.hasOwnProperty(`onUpdate:${prop}`) || vm.vnode.props?.hasOwnProperty(`onUpdate:${kebabProp}`)));
  }) : vue.computed(() => {
    void props[prop];
    return !!(vm.vnode.props?.hasOwnProperty(prop) && vm.vnode.props?.hasOwnProperty(`onUpdate:${prop}`));
  });
  useToggleScope(() => !isControlled.value, () => {
    vue.watch(() => props[prop], val => {
      internal.value = val;
    });
  });
  const model = vue.computed({
    get() {
      const externalValue = props[prop];
      return transformIn(isControlled.value ? externalValue : internal.value);
    },
    set(internalValue) {
      const newValue = transformOut(internalValue);
      const value = vue.toRaw(isControlled.value ? props[prop] : internal.value);
      if (value === newValue || transformIn(value) === internalValue) {
        return;
      }
      internal.value = newValue;
      vm?.emit(`update:${prop}`, newValue);
    }
  });
  Object.defineProperty(model, 'externalValue', {
    get: () => isControlled.value ? props[prop] : internal.value
  });
  return model;
}

// Composables
const makeGroupProps = propsFactory({
  modelValue: {
    type: null,
    default: undefined
  },
  multiple: Boolean,
  mandatory: [Boolean, String],
  max: Number,
  selectedClass: String,
  disabled: Boolean
}, 'group');
const makeGroupItemProps = propsFactory({
  value: null,
  disabled: Boolean,
  selectedClass: String
}, 'group-item');
function useGroupItem(props, injectKey) {
  let required = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  const vm = getCurrentInstance('useGroupItem');
  if (!vm) {
    throw new Error('[Vuetify] useGroupItem composable must be used inside a component setup function');
  }
  const id = getUid();
  vue.provide(Symbol.for(`${injectKey.description}:id`), id);
  const group = vue.inject(injectKey, null);
  if (!group) {
    if (!required) return group;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${injectKey.description}`);
  }
  const value = vue.toRef(props, 'value');
  const disabled = vue.computed(() => !!(group.disabled.value || props.disabled));
  group.register({
    id,
    value,
    disabled
  }, vm);
  vue.onBeforeUnmount(() => {
    group.unregister(id);
  });
  const isSelected = vue.computed(() => {
    return group.isSelected(id);
  });
  const selectedClass = vue.computed(() => isSelected.value && [group.selectedClass.value, props.selectedClass]);
  vue.watch(isSelected, value => {
    vm.emit('group:selected', {
      value
    });
  });
  return {
    id,
    isSelected,
    toggle: () => group.select(id, !isSelected.value),
    select: value => group.select(id, value),
    selectedClass,
    value,
    disabled,
    group
  };
}
function useGroup(props, injectKey) {
  let isUnmounted = false;
  const items = vue.reactive([]);
  const selected = useProxiedModel(props, 'modelValue', [], v => {
    if (v == null) return [];
    return getIds(items, wrapInArray(v));
  }, v => {
    const arr = getValues(items, v);
    return props.multiple ? arr : arr[0];
  });
  const groupVm = getCurrentInstance('useGroup');
  function register(item, vm) {
    // Is there a better way to fix this typing?
    const unwrapped = item;
    const key = Symbol.for(`${injectKey.description}:id`);
    const children = findChildrenWithProvide(key, groupVm?.vnode);
    const index = children.indexOf(vm);
    if (index > -1) {
      items.splice(index, 0, unwrapped);
    } else {
      items.push(unwrapped);
    }
  }
  function unregister(id) {
    if (isUnmounted) return;

    // TODO: re-evaluate this line's importance in the future
    // should we only modify the model if mandatory is set.
    // selected.value = selected.value.filter(v => v !== id)

    forceMandatoryValue();
    const index = items.findIndex(item => item.id === id);
    items.splice(index, 1);
  }

  // If mandatory and nothing is selected, then select first non-disabled item
  function forceMandatoryValue() {
    const item = items.find(item => !item.disabled);
    if (item && props.mandatory === 'force' && !selected.value.length) {
      selected.value = [item.id];
    }
  }
  vue.onMounted(() => {
    forceMandatoryValue();
  });
  vue.onBeforeUnmount(() => {
    isUnmounted = true;
  });
  function select(id, value) {
    const item = items.find(item => item.id === id);
    if (value && item?.disabled) return;
    if (props.multiple) {
      const internalValue = selected.value.slice();
      const index = internalValue.findIndex(v => v === id);
      const isSelected = ~index;
      value = value ?? !isSelected;

      // We can't remove value if group is
      // mandatory, value already exists,
      // and it is the only value
      if (isSelected && props.mandatory && internalValue.length <= 1) return;

      // We can't add value if it would
      // cause max limit to be exceeded
      if (!isSelected && props.max != null && internalValue.length + 1 > props.max) return;
      if (index < 0 && value) internalValue.push(id);else if (index >= 0 && !value) internalValue.splice(index, 1);
      selected.value = internalValue;
    } else {
      const isSelected = selected.value.includes(id);
      if (props.mandatory && isSelected) return;
      selected.value = value ?? !isSelected ? [id] : [];
    }
  }
  function step(offset) {
    // getting an offset from selected value obviously won't work with multiple values
    if (props.multiple) consoleWarn('This method is not supported when using "multiple" prop');
    if (!selected.value.length) {
      const item = items.find(item => !item.disabled);
      item && (selected.value = [item.id]);
    } else {
      const currentId = selected.value[0];
      const currentIndex = items.findIndex(i => i.id === currentId);
      let newIndex = (currentIndex + offset) % items.length;
      let newItem = items[newIndex];
      while (newItem.disabled && newIndex !== currentIndex) {
        newIndex = (newIndex + offset) % items.length;
        newItem = items[newIndex];
      }
      if (newItem.disabled) return;
      selected.value = [items[newIndex].id];
    }
  }
  const state = {
    register,
    unregister,
    selected,
    select,
    disabled: vue.toRef(props, 'disabled'),
    prev: () => step(items.length - 1),
    next: () => step(1),
    isSelected: id => selected.value.includes(id),
    selectedClass: vue.computed(() => props.selectedClass),
    items: vue.computed(() => items),
    getItemIndex: value => getItemIndex(items, value)
  };
  vue.provide(injectKey, state);
  return state;
}
function getItemIndex(items, value) {
  const ids = getIds(items, [value]);
  if (!ids.length) return -1;
  return items.findIndex(item => item.id === ids[0]);
}
function getIds(items, modelValue) {
  const ids = [];
  modelValue.forEach(value => {
    const item = items.find(item => deepEqual(value, item.value));
    const itemByIndex = items[value];
    if (item?.value != null) {
      ids.push(item.id);
    } else if (itemByIndex != null) {
      ids.push(itemByIndex.id);
    }
  });
  return ids;
}
function getValues(items, ids) {
  const values = [];
  ids.forEach(id => {
    const itemIndex = items.findIndex(item => item.id === id);
    if (~itemIndex) {
      const item = items[itemIndex];
      values.push(item.value != null ? item.value : itemIndex);
    }
  });
  return values;
}

const VBtnToggleSymbol = Symbol.for('vuetify:v-btn-toggle');
const makeVBtnToggleProps = propsFactory({
  ...makeVBtnGroupProps(),
  ...makeGroupProps()
}, 'VBtnToggle');
genericComponent()({
  name: 'VBtnToggle',
  props: makeVBtnToggleProps(),
  emits: {
    'update:modelValue': value => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      isSelected,
      next,
      prev,
      select,
      selected
    } = useGroup(props, VBtnToggleSymbol);
    useRender(() => {
      const [btnGroupProps] = VBtnGroup.filterProps(props);
      return vue.createVNode(VBtnGroup, vue.mergeProps({
        "class": ['v-btn-toggle', props.class]
      }, btnGroupProps, {
        "style": props.style
      }), {
        default: () => [slots.default?.({
          isSelected,
          next,
          prev,
          select,
          selected
        })]
      });
    });
    return {
      next,
      prev,
      select
    };
  }
});

// Composables
const makeVDefaultsProviderProps = propsFactory({
  defaults: Object,
  disabled: Boolean,
  reset: [Number, String],
  root: [Boolean, String],
  scoped: Boolean
}, 'VDefaultsProvider');
const VDefaultsProvider = genericComponent(false)({
  name: 'VDefaultsProvider',
  props: makeVDefaultsProviderProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      defaults,
      disabled,
      reset,
      root,
      scoped
    } = vue.toRefs(props);
    provideDefaults(defaults, {
      reset,
      root,
      scoped,
      disabled
    });
    return () => slots.default?.();
  }
});

var css_248z$n = ".v-icon {\n  --v-icon-size-multiplier: 1;\n  align-items: center;\n  display: inline-flex;\n  font-feature-settings: \"liga\";\n  height: 1em;\n  justify-content: center;\n  letter-spacing: normal;\n  line-height: 1;\n  position: relative;\n  text-indent: 0;\n  text-align: center;\n  user-select: none;\n  vertical-align: middle;\n  width: 1em;\n  min-width: 1em;\n}\n.v-icon--clickable {\n  cursor: pointer;\n}\n.v-icon--size-x-small {\n  font-size: calc(var(--v-icon-size-multiplier) * 1em);\n}\n.v-icon--size-small {\n  font-size: calc(var(--v-icon-size-multiplier) * 1.25em);\n}\n.v-icon--size-default {\n  font-size: calc(var(--v-icon-size-multiplier) * 1.5em);\n}\n.v-icon--size-large {\n  font-size: calc(var(--v-icon-size-multiplier) * 1.75em);\n}\n.v-icon--size-x-large {\n  font-size: calc(var(--v-icon-size-multiplier) * 2em);\n}\n\n.v-icon__svg {\n  fill: currentColor;\n  width: 100%;\n  height: 100%;\n}\n\n.v-icon--start {\n  margin-inline-end: 8px;\n}\n\n.v-icon--end {\n  margin-inline-start: 8px;\n}";
styleInject(css_248z$n);

const IconValue = [String, Function, Object, Array];
const IconSymbol = Symbol.for('vuetify:icons');
const makeIconProps = propsFactory({
  icon: {
    type: IconValue
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: String,
    required: true
  }
}, 'icon');
const VComponentIcon = genericComponent()({
  name: 'VComponentIcon',
  props: makeIconProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    return () => {
      const Icon = props.icon;
      return vue.createVNode(props.tag, null, {
        default: () => [props.icon ? vue.createVNode(Icon, null, null) : slots.default?.()]
      });
    };
  }
});
const VSvgIcon = defineComponent({
  name: 'VSvgIcon',
  inheritAttrs: false,
  props: makeIconProps(),
  setup(props, _ref2) {
    let {
      attrs
    } = _ref2;
    return () => {
      return vue.createVNode(props.tag, vue.mergeProps(attrs, {
        "style": null
      }), {
        default: () => [vue.createVNode("svg", {
          "class": "v-icon__svg",
          "xmlns": "http://www.w3.org/2000/svg",
          "viewBox": "0 0 24 24",
          "role": "img",
          "aria-hidden": "true"
        }, [Array.isArray(props.icon) ? props.icon.map(path => Array.isArray(path) ? vue.createVNode("path", {
          "d": path[0],
          "fill-opacity": path[1]
        }, null) : vue.createVNode("path", {
          "d": path
        }, null)) : vue.createVNode("path", {
          "d": props.icon
        }, null)])]
      });
    };
  }
});
defineComponent({
  name: 'VLigatureIcon',
  props: makeIconProps(),
  setup(props) {
    return () => {
      return vue.createVNode(props.tag, null, {
        default: () => [props.icon]
      });
    };
  }
});
defineComponent({
  name: 'VClassIcon',
  props: makeIconProps(),
  setup(props) {
    return () => {
      return vue.createVNode(props.tag, {
        "class": props.icon
      }, null);
    };
  }
});
const useIcon = props => {
  const icons = vue.inject(IconSymbol);
  if (!icons) throw new Error('Missing Vuetify Icons provide!');
  const iconData = vue.computed(() => {
    const iconAlias = vue.unref(props);
    if (!iconAlias) return {
      component: VComponentIcon
    };
    let icon = iconAlias;
    if (typeof icon === 'string') {
      icon = icon.trim();
      if (icon.startsWith('$')) {
        icon = icons.aliases?.[icon.slice(1)];
      }
    }
    if (!icon) throw new Error(`Could not find aliased icon "${iconAlias}"`);
    if (Array.isArray(icon)) {
      return {
        component: VSvgIcon,
        icon
      };
    } else if (typeof icon !== 'string') {
      return {
        component: VComponentIcon,
        icon
      };
    }
    const iconSetName = Object.keys(icons.sets).find(setName => typeof icon === 'string' && icon.startsWith(`${setName}:`));
    const iconName = iconSetName ? icon.slice(iconSetName.length + 1) : icon;
    const iconSet = icons.sets[iconSetName ?? icons.defaultSet];
    return {
      component: iconSet.component,
      icon: iconName
    };
  });
  return {
    iconData
  };
};

// Utilities
const predefinedSizes = ['x-small', 'small', 'default', 'large', 'x-large'];
// Composables
const makeSizeProps = propsFactory({
  size: {
    type: [String, Number],
    default: 'default'
  }
}, 'size');
function useSize(props) {
  let name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getCurrentInstanceName();
  return destructComputed(() => {
    let sizeClasses;
    let sizeStyles;
    if (includes(predefinedSizes, props.size)) {
      sizeClasses = `${name}--size-${props.size}`;
    } else if (props.size) {
      sizeStyles = {
        width: convertToUnit(props.size),
        height: convertToUnit(props.size)
      };
    }
    return {
      sizeClasses,
      sizeStyles
    };
  });
}

const makeVIconProps = propsFactory({
  color: String,
  start: Boolean,
  end: Boolean,
  icon: IconValue,
  ...makeComponentProps(),
  ...makeSizeProps(),
  ...makeTagProps({
    tag: 'i'
  }),
  ...makeThemeProps()
}, 'VIcon');
const VIcon = genericComponent()({
  name: 'VIcon',
  props: makeVIconProps(),
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const slotIcon = vue.ref();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      iconData
    } = useIcon(vue.computed(() => slotIcon.value || props.icon));
    const {
      sizeClasses
    } = useSize(props);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(vue.toRef(props, 'color'));
    useRender(() => {
      const slotValue = slots.default?.();
      if (slotValue) {
        slotIcon.value = flattenFragments(slotValue).filter(node => node.type === vue.Text && node.children && typeof node.children === 'string')[0]?.children;
      }
      return vue.createVNode(iconData.value.component, {
        "tag": props.tag,
        "icon": iconData.value.icon,
        "class": ['v-icon', 'notranslate', themeClasses.value, sizeClasses.value, textColorClasses.value, {
          'v-icon--clickable': !!attrs.onClick,
          'v-icon--start': props.start,
          'v-icon--end': props.end
        }, props.class],
        "style": [!sizeClasses.value ? {
          fontSize: convertToUnit(props.size),
          height: convertToUnit(props.size),
          width: convertToUnit(props.size)
        } : undefined, textColorStyles.value, props.style],
        "role": attrs.onClick ? 'button' : undefined,
        "aria-hidden": !attrs.onClick
      }, {
        default: () => [slotValue]
      });
    });
    return {};
  }
});

var css_248z$m = ".v-progress-circular {\n  align-items: center;\n  display: inline-flex;\n  justify-content: center;\n  position: relative;\n  vertical-align: middle;\n}\n.v-progress-circular > svg {\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 0;\n}\n\n.v-progress-circular__content {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.v-progress-circular__underlay {\n  color: rgba(var(--v-border-color), var(--v-border-opacity));\n  stroke: currentColor;\n  z-index: 1;\n}\n\n.v-progress-circular__overlay {\n  stroke: currentColor;\n  transition: all 0.2s ease-in-out, stroke-width 0s;\n  z-index: 2;\n}\n\n.v-progress-circular--size-x-small {\n  height: 16px;\n  width: 16px;\n}\n.v-progress-circular--size-small {\n  height: 24px;\n  width: 24px;\n}\n.v-progress-circular--size-default {\n  height: 32px;\n  width: 32px;\n}\n.v-progress-circular--size-large {\n  height: 48px;\n  width: 48px;\n}\n.v-progress-circular--size-x-large {\n  height: 64px;\n  width: 64px;\n}\n\n.v-progress-circular--indeterminate > svg {\n  animation: progress-circular-rotate 1.4s linear infinite;\n  transform-origin: center center;\n  transition: all 0.2s ease-in-out;\n}\n.v-progress-circular--indeterminate .v-progress-circular__overlay {\n  animation: progress-circular-dash 1.4s ease-in-out infinite, progress-circular-rotate 1.4s linear infinite;\n  stroke-dasharray: 25, 200;\n  stroke-dashoffset: 0;\n  stroke-linecap: round;\n  transform-origin: center center;\n  transform: rotate(-90deg);\n}\n\n.v-progress-circular--disable-shrink > svg {\n  animation-duration: 0.7s;\n}\n.v-progress-circular--disable-shrink .v-progress-circular__overlay {\n  animation: none;\n}\n\n.v-progress-circular--indeterminate:not(.v-progress-circular--visible) > svg,\n.v-progress-circular--indeterminate:not(.v-progress-circular--visible) .v-progress-circular__overlay {\n  animation-play-state: paused !important;\n}\n\n@keyframes progress-circular-dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0px;\n  }\n  50% {\n    stroke-dasharray: 100, 200;\n    stroke-dashoffset: -15px;\n  }\n  100% {\n    stroke-dasharray: 100, 200;\n    stroke-dashoffset: -124px;\n  }\n}\n@keyframes progress-circular-rotate {\n  100% {\n    transform: rotate(270deg);\n  }\n}";
styleInject(css_248z$m);

// Utilities
function useIntersectionObserver(callback, options) {
  const intersectionRef = vue.ref();
  const isIntersecting = vue.shallowRef(false);
  if (SUPPORTS_INTERSECTION) {
    const observer = new IntersectionObserver(entries => {
      callback?.(entries, observer);
      isIntersecting.value = !!entries.find(entry => entry.isIntersecting);
    }, options);
    vue.onBeforeUnmount(() => {
      observer.disconnect();
    });
    vue.watch(intersectionRef, (newValue, oldValue) => {
      if (oldValue) {
        observer.unobserve(oldValue);
        isIntersecting.value = false;
      }
      if (newValue) observer.observe(newValue);
    }, {
      flush: 'post'
    });
  }
  return {
    intersectionRef,
    isIntersecting
  };
}

// Utilities
function useResizeObserver(callback) {
  let box = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'content';
  const resizeRef = vue.ref();
  const contentRect = vue.ref();
  if (IN_BROWSER) {
    const observer = new ResizeObserver(entries => {
      callback?.(entries, observer);
      if (!entries.length) return;
      if (box === 'content') {
        contentRect.value = entries[0].contentRect;
      } else {
        contentRect.value = entries[0].target.getBoundingClientRect();
      }
    });
    vue.onBeforeUnmount(() => {
      observer.disconnect();
    });
    vue.watch(resizeRef, (newValue, oldValue) => {
      if (oldValue) {
        observer.unobserve(refElement(oldValue));
        contentRect.value = undefined;
      }
      if (newValue) observer.observe(refElement(newValue));
    }, {
      flush: 'post'
    });
  }
  return {
    resizeRef,
    contentRect: vue.readonly(contentRect)
  };
}

const makeVProgressCircularProps = propsFactory({
  bgColor: String,
  color: String,
  indeterminate: [Boolean, String],
  modelValue: {
    type: [Number, String],
    default: 0
  },
  rotate: {
    type: [Number, String],
    default: 0
  },
  width: {
    type: [Number, String],
    default: 4
  },
  ...makeComponentProps(),
  ...makeSizeProps(),
  ...makeTagProps({
    tag: 'div'
  }),
  ...makeThemeProps()
}, 'VProgressCircular');
const VProgressCircular = genericComponent()({
  name: 'VProgressCircular',
  props: makeVProgressCircularProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const MAGIC_RADIUS_CONSTANT = 20;
    const CIRCUMFERENCE = 2 * Math.PI * MAGIC_RADIUS_CONSTANT;
    const root = vue.ref();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      sizeClasses,
      sizeStyles
    } = useSize(props);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(vue.toRef(props, 'color'));
    const {
      textColorClasses: underlayColorClasses,
      textColorStyles: underlayColorStyles
    } = useTextColor(vue.toRef(props, 'bgColor'));
    const {
      intersectionRef,
      isIntersecting
    } = useIntersectionObserver();
    const {
      resizeRef,
      contentRect
    } = useResizeObserver();
    const normalizedValue = vue.computed(() => Math.max(0, Math.min(100, parseFloat(props.modelValue))));
    const width = vue.computed(() => Number(props.width));
    const size = vue.computed(() => {
      // Get size from element if size prop value is small, large etc
      return sizeStyles.value ? Number(props.size) : contentRect.value ? contentRect.value.width : Math.max(width.value, 32);
    });
    const diameter = vue.computed(() => MAGIC_RADIUS_CONSTANT / (1 - width.value / size.value) * 2);
    const strokeWidth = vue.computed(() => width.value / size.value * diameter.value);
    const strokeDashOffset = vue.computed(() => convertToUnit((100 - normalizedValue.value) / 100 * CIRCUMFERENCE));
    vue.watchEffect(() => {
      intersectionRef.value = root.value;
      resizeRef.value = root.value;
    });
    useRender(() => vue.createVNode(props.tag, {
      "ref": root,
      "class": ['v-progress-circular', {
        'v-progress-circular--indeterminate': !!props.indeterminate,
        'v-progress-circular--visible': isIntersecting.value,
        'v-progress-circular--disable-shrink': props.indeterminate === 'disable-shrink'
      }, themeClasses.value, sizeClasses.value, textColorClasses.value, props.class],
      "style": [sizeStyles.value, textColorStyles.value, props.style],
      "role": "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": props.indeterminate ? undefined : normalizedValue.value
    }, {
      default: () => [vue.createVNode("svg", {
        "style": {
          transform: `rotate(calc(-90deg + ${Number(props.rotate)}deg))`
        },
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": `0 0 ${diameter.value} ${diameter.value}`
      }, [vue.createVNode("circle", {
        "class": ['v-progress-circular__underlay', underlayColorClasses.value],
        "style": underlayColorStyles.value,
        "fill": "transparent",
        "cx": "50%",
        "cy": "50%",
        "r": MAGIC_RADIUS_CONSTANT,
        "stroke-width": strokeWidth.value,
        "stroke-dasharray": CIRCUMFERENCE,
        "stroke-dashoffset": 0
      }, null), vue.createVNode("circle", {
        "class": "v-progress-circular__overlay",
        "fill": "transparent",
        "cx": "50%",
        "cy": "50%",
        "r": MAGIC_RADIUS_CONSTANT,
        "stroke-width": strokeWidth.value,
        "stroke-dasharray": CIRCUMFERENCE,
        "stroke-dashoffset": strokeDashOffset.value
      }, null)]), slots.default && vue.createVNode("div", {
        "class": "v-progress-circular__content"
      }, [slots.default({
        value: normalizedValue.value
      })])]
    }));
    return {};
  }
});

// Utilities
// Composables
const makeDimensionProps = propsFactory({
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String]
}, 'dimension');
function useDimension(props) {
  const dimensionStyles = vue.computed(() => ({
    height: convertToUnit(props.height),
    maxHeight: convertToUnit(props.maxHeight),
    maxWidth: convertToUnit(props.maxWidth),
    minHeight: convertToUnit(props.minHeight),
    minWidth: convertToUnit(props.minWidth),
    width: convertToUnit(props.width)
  }));
  return {
    dimensionStyles
  };
}

var css_248z$l = ".v-progress-linear {\n  background: transparent;\n  overflow: hidden;\n  position: relative;\n  transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  width: 100%;\n}\n.v-progress-linear--rounded {\n  border-radius: 9999px;\n}\n\n.v-progress-linear__background {\n  background: currentColor;\n  bottom: 0;\n  left: 0;\n  opacity: var(--v-border-opacity);\n  position: absolute;\n  top: 0;\n  transition-property: width, left, right;\n  transition: inherit;\n}\n\n.v-progress-linear__content {\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n.v-progress-linear__determinate,\n.v-progress-linear__indeterminate {\n  background: currentColor;\n}\n\n.v-progress-linear__determinate {\n  height: inherit;\n  left: 0;\n  position: absolute;\n  transition: inherit;\n  transition-property: width, left, right;\n}\n\n.v-progress-linear__indeterminate .long, .v-progress-linear__indeterminate .short {\n  animation-play-state: paused;\n  animation-duration: 2.2s;\n  animation-iteration-count: infinite;\n  bottom: 0;\n  height: inherit;\n  left: 0;\n  position: absolute;\n  right: auto;\n  top: 0;\n  width: auto;\n  will-change: left, right;\n}\n.v-progress-linear__indeterminate .long {\n  animation-name: indeterminate-ltr;\n}\n.v-progress-linear__indeterminate .short {\n  animation-name: indeterminate-short-ltr;\n}\n\n.v-progress-linear__stream {\n  animation: stream 0.25s infinite linear;\n  animation-play-state: paused;\n  bottom: 0;\n  left: auto;\n  opacity: 0.3;\n  pointer-events: none;\n  position: absolute;\n  transition: inherit;\n  transition-property: width, left, right;\n}\n\n.v-progress-linear--reverse .v-progress-linear__background,\n.v-progress-linear--reverse .v-progress-linear__determinate,\n.v-progress-linear--reverse .v-progress-linear__content {\n  left: auto;\n  right: 0;\n}\n.v-progress-linear--reverse .v-progress-linear__indeterminate .long, .v-progress-linear--reverse .v-progress-linear__indeterminate .short {\n  left: auto;\n  right: 0;\n}\n.v-progress-linear--reverse .v-progress-linear__indeterminate .long {\n  animation-name: indeterminate-rtl;\n}\n.v-progress-linear--reverse .v-progress-linear__indeterminate .short {\n  animation-name: indeterminate-short-rtl;\n}\n.v-progress-linear--reverse .v-progress-linear__stream {\n  right: auto;\n}\n\n.v-progress-linear--absolute,\n.v-progress-linear--fixed {\n  left: 0;\n  z-index: 1;\n}\n\n.v-progress-linear--absolute {\n  position: absolute;\n}\n\n.v-progress-linear--fixed {\n  position: fixed;\n}\n\n.v-progress-linear--rounded {\n  border-radius: 9999px;\n}\n.v-progress-linear--rounded.v-progress-linear--rounded-bar .v-progress-linear__determinate,\n.v-progress-linear--rounded.v-progress-linear--rounded-bar .v-progress-linear__indeterminate {\n  border-radius: inherit;\n}\n\n.v-progress-linear--striped .v-progress-linear__determinate {\n  animation: progress-linear-stripes 1s infinite linear;\n  background-image: linear-gradient(135deg, hsla(0, 0%, 100%, 0.25) 25%, transparent 0, transparent 50%, hsla(0, 0%, 100%, 0.25) 0, hsla(0, 0%, 100%, 0.25) 75%, transparent 0, transparent);\n  background-repeat: repeat;\n  background-size: var(--v-progress-linear-height);\n}\n\n.v-progress-linear--active .v-progress-linear__indeterminate .long, .v-progress-linear--active .v-progress-linear__indeterminate .short {\n  animation-play-state: running;\n}\n.v-progress-linear--active .v-progress-linear__stream {\n  animation-play-state: running;\n}\n\n.v-progress-linear--rounded-bar .v-progress-linear__determinate,\n.v-progress-linear--rounded-bar .v-progress-linear__indeterminate,\n.v-progress-linear--rounded-bar .v-progress-linear__stream + .v-progress-linear__background {\n  border-radius: 9999px;\n}\n.v-locale--is-ltr.v-progress-linear--rounded-bar .v-progress-linear__determinate, .v-locale--is-ltr .v-progress-linear--rounded-bar .v-progress-linear__determinate {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.v-locale--is-rtl.v-progress-linear--rounded-bar .v-progress-linear__determinate, .v-locale--is-rtl .v-progress-linear--rounded-bar .v-progress-linear__determinate {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n@keyframes indeterminate-ltr {\n  0% {\n    left: -90%;\n    right: 100%;\n  }\n  60% {\n    left: -90%;\n    right: 100%;\n  }\n  100% {\n    left: 100%;\n    right: -35%;\n  }\n}\n@keyframes indeterminate-rtl {\n  0% {\n    left: 100%;\n    right: -90%;\n  }\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n  100% {\n    left: -35%;\n    right: 100%;\n  }\n}\n@keyframes indeterminate-short-ltr {\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n}\n@keyframes indeterminate-short-rtl {\n  0% {\n    left: 100%;\n    right: -200%;\n  }\n  60% {\n    left: -8%;\n    right: 107%;\n  }\n  100% {\n    left: -8%;\n    right: 107%;\n  }\n}\n@keyframes stream {\n  to {\n    transform: translateX(var(--v-progress-linear-stream-to));\n  }\n}\n@keyframes progress-linear-stripes {\n  0% {\n    background-position-x: var(--v-progress-linear-height);\n  }\n}";
styleInject(css_248z$l);

// Utilities
const LocaleSymbol = Symbol.for('vuetify:locale');
function useLocale() {
  const locale = vue.inject(LocaleSymbol);
  if (!locale) throw new Error('[Vuetify] Could not find injected locale instance');
  return locale;
}
function useRtl() {
  const locale = vue.inject(LocaleSymbol);
  if (!locale) throw new Error('[Vuetify] Could not find injected rtl instance');
  return {
    isRtl: locale.isRtl,
    rtlClasses: locale.rtlClasses
  };
}

// Composables
const oppositeMap = {
  center: 'center',
  top: 'bottom',
  bottom: 'top',
  left: 'right',
  right: 'left'
};
const makeLocationProps = propsFactory({
  location: String
}, 'location');
function useLocation(props) {
  let opposite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  let offset = arguments.length > 2 ? arguments[2] : undefined;
  const {
    isRtl
  } = useRtl();
  const locationStyles = vue.computed(() => {
    if (!props.location) return {};
    const {
      side,
      align
    } = parseAnchor(props.location.split(' ').length > 1 ? props.location : `${props.location} center`, isRtl.value);
    function getOffset(side) {
      return offset ? offset(side) : 0;
    }
    const styles = {};
    if (side !== 'center') {
      if (opposite) styles[oppositeMap[side]] = `calc(100% - ${getOffset(side)}px)`;else styles[side] = 0;
    }
    if (align !== 'center') {
      if (opposite) styles[oppositeMap[align]] = `calc(100% - ${getOffset(align)}px)`;else styles[align] = 0;
    } else {
      if (side === 'center') styles.top = styles.left = '50%';else {
        styles[{
          top: 'left',
          bottom: 'left',
          left: 'top',
          right: 'top'
        }[side]] = '50%';
      }
      styles.transform = {
        top: 'translateX(-50%)',
        bottom: 'translateX(-50%)',
        left: 'translateY(-50%)',
        right: 'translateY(-50%)',
        center: 'translate(-50%, -50%)'
      }[side];
    }
    return styles;
  });
  return {
    locationStyles
  };
}

const makeVProgressLinearProps = propsFactory({
  absolute: Boolean,
  active: {
    type: Boolean,
    default: true
  },
  bgColor: String,
  bgOpacity: [Number, String],
  bufferValue: {
    type: [Number, String],
    default: 0
  },
  clickable: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: 4
  },
  indeterminate: Boolean,
  max: {
    type: [Number, String],
    default: 100
  },
  modelValue: {
    type: [Number, String],
    default: 0
  },
  reverse: Boolean,
  stream: Boolean,
  striped: Boolean,
  roundedBar: Boolean,
  ...makeComponentProps(),
  ...makeLocationProps({
    location: 'top'
  }),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, 'VProgressLinear');
const VProgressLinear = genericComponent()({
  name: 'VProgressLinear',
  props: makeVProgressLinearProps(),
  emits: {
    'update:modelValue': value => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const progress = useProxiedModel(props, 'modelValue');
    const {
      isRtl,
      rtlClasses
    } = useRtl();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(props, 'color');
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(vue.computed(() => props.bgColor || props.color));
    const {
      backgroundColorClasses: barColorClasses,
      backgroundColorStyles: barColorStyles
    } = useBackgroundColor(props, 'color');
    const {
      roundedClasses
    } = useRounded(props);
    const {
      intersectionRef,
      isIntersecting
    } = useIntersectionObserver();
    const max = vue.computed(() => parseInt(props.max, 10));
    const height = vue.computed(() => parseInt(props.height, 10));
    const normalizedBuffer = vue.computed(() => parseFloat(props.bufferValue) / max.value * 100);
    const normalizedValue = vue.computed(() => parseFloat(progress.value) / max.value * 100);
    const isReversed = vue.computed(() => isRtl.value !== props.reverse);
    const transition = vue.computed(() => props.indeterminate ? 'fade-transition' : 'slide-x-transition');
    const opacity = vue.computed(() => {
      return props.bgOpacity == null ? props.bgOpacity : parseFloat(props.bgOpacity);
    });
    function handleClick(e) {
      if (!intersectionRef.value) return;
      const {
        left,
        right,
        width
      } = intersectionRef.value.getBoundingClientRect();
      const value = isReversed.value ? width - e.clientX + (right - width) : e.clientX - left;
      progress.value = Math.round(value / width * max.value);
    }
    useRender(() => vue.createVNode(props.tag, {
      "ref": intersectionRef,
      "class": ['v-progress-linear', {
        'v-progress-linear--absolute': props.absolute,
        'v-progress-linear--active': props.active && isIntersecting.value,
        'v-progress-linear--reverse': isReversed.value,
        'v-progress-linear--rounded': props.rounded,
        'v-progress-linear--rounded-bar': props.roundedBar,
        'v-progress-linear--striped': props.striped
      }, roundedClasses.value, themeClasses.value, rtlClasses.value, props.class],
      "style": [{
        bottom: props.location === 'bottom' ? 0 : undefined,
        top: props.location === 'top' ? 0 : undefined,
        height: props.active ? convertToUnit(height.value) : 0,
        '--v-progress-linear-height': convertToUnit(height.value),
        ...locationStyles.value
      }, props.style],
      "role": "progressbar",
      "aria-hidden": props.active ? 'false' : 'true',
      "aria-valuemin": "0",
      "aria-valuemax": props.max,
      "aria-valuenow": props.indeterminate ? undefined : normalizedValue.value,
      "onClick": props.clickable && handleClick
    }, {
      default: () => [props.stream && vue.createVNode("div", {
        "key": "stream",
        "class": ['v-progress-linear__stream', textColorClasses.value],
        "style": {
          ...textColorStyles.value,
          [isReversed.value ? 'left' : 'right']: convertToUnit(-height.value),
          borderTop: `${convertToUnit(height.value / 2)} dotted`,
          opacity: opacity.value,
          top: `calc(50% - ${convertToUnit(height.value / 4)})`,
          width: convertToUnit(100 - normalizedBuffer.value, '%'),
          '--v-progress-linear-stream-to': convertToUnit(height.value * (isReversed.value ? 1 : -1))
        }
      }, null), vue.createVNode("div", {
        "class": ['v-progress-linear__background', backgroundColorClasses.value],
        "style": [backgroundColorStyles.value, {
          opacity: opacity.value,
          width: convertToUnit(!props.stream ? 100 : normalizedBuffer.value, '%')
        }]
      }, null), vue.createVNode(vue.Transition, {
        "name": transition.value
      }, {
        default: () => [!props.indeterminate ? vue.createVNode("div", {
          "class": ['v-progress-linear__determinate', barColorClasses.value],
          "style": [barColorStyles.value, {
            width: convertToUnit(normalizedValue.value, '%')
          }]
        }, null) : vue.createVNode("div", {
          "class": "v-progress-linear__indeterminate"
        }, [['long', 'short'].map(bar => vue.createVNode("div", {
          "key": bar,
          "class": ['v-progress-linear__indeterminate', bar, barColorClasses.value],
          "style": barColorStyles.value
        }, null))])]
      }), slots.default && vue.createVNode("div", {
        "class": "v-progress-linear__content"
      }, [slots.default({
        value: normalizedValue.value,
        buffer: normalizedBuffer.value
      })])]
    }));
    return {};
  }
});

// Composables
const makeLoaderProps = propsFactory({
  loading: [Boolean, String]
}, 'loader');
function useLoader(props) {
  let name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getCurrentInstanceName();
  const loaderClasses = vue.computed(() => ({
    [`${name}--loading`]: props.loading
  }));
  return {
    loaderClasses
  };
}
function LoaderSlot(props, _ref) {
  let {
    slots
  } = _ref;
  return vue.createVNode("div", {
    "class": `${props.name}__loader`
  }, [slots.default?.({
    color: props.color,
    isActive: props.active
  }) || vue.createVNode(VProgressLinear, {
    "active": props.active,
    "color": props.color,
    "height": "2",
    "indeterminate": true
  }, null)]);
}

// Utilities
const positionValues = ['static', 'relative', 'fixed', 'absolute', 'sticky'];
// Composables
const makePositionProps = propsFactory({
  position: {
    type: String,
    validator: /* istanbul ignore next */v => positionValues.includes(v)
  }
}, 'position');
function usePosition(props) {
  let name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getCurrentInstanceName();
  const positionClasses = vue.computed(() => {
    return props.position ? `${name}--${props.position}` : undefined;
  });
  return {
    positionClasses
  };
}

// Utilities
function useRouter() {
  return getCurrentInstance('useRouter')?.proxy?.$router;
}
function useLink(props, attrs) {
  const RouterLink = vue.resolveDynamicComponent('RouterLink');
  const isLink = vue.computed(() => !!(props.href || props.to));
  const isClickable = vue.computed(() => {
    return isLink?.value || hasEvent(attrs, 'click') || hasEvent(props, 'click');
  });
  if (typeof RouterLink === 'string') {
    return {
      isLink,
      isClickable,
      href: vue.toRef(props, 'href')
    };
  }
  const link = props.to ? RouterLink.useLink(props) : undefined;
  return {
    isLink,
    isClickable,
    route: link?.route,
    navigate: link?.navigate,
    isActive: link && vue.computed(() => props.exact ? link.isExactActive?.value : link.isActive?.value),
    href: vue.computed(() => props.to ? link?.route.value.href : props.href)
  };
}
const makeRouterProps = propsFactory({
  href: String,
  replace: Boolean,
  to: [String, Object],
  exact: Boolean
}, 'router');
let inTransition = false;
function useBackButton(router, cb) {
  let popped = false;
  let removeBefore;
  let removeAfter;
  if (IN_BROWSER) {
    vue.nextTick(() => {
      window.addEventListener('popstate', onPopstate);
      removeBefore = router?.beforeEach((to, from, next) => {
        if (!inTransition) {
          setTimeout(() => popped ? cb(next) : next());
        } else {
          popped ? cb(next) : next();
        }
        inTransition = true;
      });
      removeAfter = router?.afterEach(() => {
        inTransition = false;
      });
    });
    vue.onScopeDispose(() => {
      window.removeEventListener('popstate', onPopstate);
      removeBefore?.();
      removeAfter?.();
    });
  }
  function onPopstate(e) {
    if (e.state?.replaced) return;
    popped = true;
    setTimeout(() => popped = false);
  }
}

// Utilities

// Types

function useSelectLink(link, select) {
  vue.watch(() => link.isActive?.value, isActive => {
    if (link.isLink.value && isActive && select) {
      vue.nextTick(() => {
        select(true);
      });
    }
  }, {
    immediate: true
  });
}

var css_248z$k = ".v-ripple__container {\n  color: inherit;\n  border-radius: inherit;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  overflow: hidden;\n  z-index: 0;\n  pointer-events: none;\n  contain: strict;\n}\n.v-ripple__animation {\n  color: inherit;\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-radius: 50%;\n  background: currentColor;\n  opacity: 0;\n  pointer-events: none;\n  overflow: hidden;\n  will-change: transform, opacity;\n}\n.v-ripple__animation--enter {\n  transition: none;\n  opacity: 0;\n}\n.v-ripple__animation--in {\n  transition: transform 0.25s cubic-bezier(0, 0, 0.2, 1), opacity 0.1s cubic-bezier(0, 0, 0.2, 1);\n  opacity: calc(0.25 * var(--v-theme-overlay-multiplier));\n}\n.v-ripple__animation--out {\n  transition: opacity 0.3s cubic-bezier(0, 0, 0.2, 1);\n  opacity: 0;\n}";
styleInject(css_248z$k);

// Styles
const stopSymbol = Symbol('rippleStop');
const DELAY_RIPPLE = 80;
function transform(el, value) {
  el.style.transform = value;
  el.style.webkitTransform = value;
}
function isTouchEvent(e) {
  return e.constructor.name === 'TouchEvent';
}
function isKeyboardEvent(e) {
  return e.constructor.name === 'KeyboardEvent';
}
const calculate = function (e, el) {
  let value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  let localX = 0;
  let localY = 0;
  if (!isKeyboardEvent(e)) {
    const offset = el.getBoundingClientRect();
    const target = isTouchEvent(e) ? e.touches[e.touches.length - 1] : e;
    localX = target.clientX - offset.left;
    localY = target.clientY - offset.top;
  }
  let radius = 0;
  let scale = 0.3;
  if (el._ripple?.circle) {
    scale = 0.15;
    radius = el.clientWidth / 2;
    radius = value.center ? radius : radius + Math.sqrt((localX - radius) ** 2 + (localY - radius) ** 2) / 4;
  } else {
    radius = Math.sqrt(el.clientWidth ** 2 + el.clientHeight ** 2) / 2;
  }
  const centerX = `${(el.clientWidth - radius * 2) / 2}px`;
  const centerY = `${(el.clientHeight - radius * 2) / 2}px`;
  const x = value.center ? centerX : `${localX - radius}px`;
  const y = value.center ? centerY : `${localY - radius}px`;
  return {
    radius,
    scale,
    x,
    y,
    centerX,
    centerY
  };
};
const ripples = {
  /* eslint-disable max-statements */
  show(e, el) {
    let value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    if (!el?._ripple?.enabled) {
      return;
    }
    const container = document.createElement('span');
    const animation = document.createElement('span');
    container.appendChild(animation);
    container.className = 'v-ripple__container';
    if (value.class) {
      container.className += ` ${value.class}`;
    }
    const {
      radius,
      scale,
      x,
      y,
      centerX,
      centerY
    } = calculate(e, el, value);
    const size = `${radius * 2}px`;
    animation.className = 'v-ripple__animation';
    animation.style.width = size;
    animation.style.height = size;
    el.appendChild(container);
    const computed = window.getComputedStyle(el);
    if (computed && computed.position === 'static') {
      el.style.position = 'relative';
      el.dataset.previousPosition = 'static';
    }
    animation.classList.add('v-ripple__animation--enter');
    animation.classList.add('v-ripple__animation--visible');
    transform(animation, `translate(${x}, ${y}) scale3d(${scale},${scale},${scale})`);
    animation.dataset.activated = String(performance.now());
    setTimeout(() => {
      animation.classList.remove('v-ripple__animation--enter');
      animation.classList.add('v-ripple__animation--in');
      transform(animation, `translate(${centerX}, ${centerY}) scale3d(1,1,1)`);
    }, 0);
  },
  hide(el) {
    if (!el?._ripple?.enabled) return;
    const ripples = el.getElementsByClassName('v-ripple__animation');
    if (ripples.length === 0) return;
    const animation = ripples[ripples.length - 1];
    if (animation.dataset.isHiding) return;else animation.dataset.isHiding = 'true';
    const diff = performance.now() - Number(animation.dataset.activated);
    const delay = Math.max(250 - diff, 0);
    setTimeout(() => {
      animation.classList.remove('v-ripple__animation--in');
      animation.classList.add('v-ripple__animation--out');
      setTimeout(() => {
        const ripples = el.getElementsByClassName('v-ripple__animation');
        if (ripples.length === 1 && el.dataset.previousPosition) {
          el.style.position = el.dataset.previousPosition;
          delete el.dataset.previousPosition;
        }
        if (animation.parentNode?.parentNode === el) el.removeChild(animation.parentNode);
      }, 300);
    }, delay);
  }
};
function isRippleEnabled(value) {
  return typeof value === 'undefined' || !!value;
}
function rippleShow(e) {
  const value = {};
  const element = e.currentTarget;
  if (!element?._ripple || element._ripple.touched || e[stopSymbol]) return;

  // Don't allow the event to trigger ripples on any other elements
  e[stopSymbol] = true;
  if (isTouchEvent(e)) {
    element._ripple.touched = true;
    element._ripple.isTouch = true;
  } else {
    // It's possible for touch events to fire
    // as mouse events on Android/iOS, this
    // will skip the event call if it has
    // already been registered as touch
    if (element._ripple.isTouch) return;
  }
  value.center = element._ripple.centered || isKeyboardEvent(e);
  if (element._ripple.class) {
    value.class = element._ripple.class;
  }
  if (isTouchEvent(e)) {
    // already queued that shows or hides the ripple
    if (element._ripple.showTimerCommit) return;
    element._ripple.showTimerCommit = () => {
      ripples.show(e, element, value);
    };
    element._ripple.showTimer = window.setTimeout(() => {
      if (element?._ripple?.showTimerCommit) {
        element._ripple.showTimerCommit();
        element._ripple.showTimerCommit = null;
      }
    }, DELAY_RIPPLE);
  } else {
    ripples.show(e, element, value);
  }
}
function rippleStop(e) {
  e[stopSymbol] = true;
}
function rippleHide(e) {
  const element = e.currentTarget;
  if (!element?._ripple) return;
  window.clearTimeout(element._ripple.showTimer);

  // The touch interaction occurs before the show timer is triggered.
  // We still want to show ripple effect.
  if (e.type === 'touchend' && element._ripple.showTimerCommit) {
    element._ripple.showTimerCommit();
    element._ripple.showTimerCommit = null;

    // re-queue ripple hiding
    element._ripple.showTimer = window.setTimeout(() => {
      rippleHide(e);
    });
    return;
  }
  window.setTimeout(() => {
    if (element._ripple) {
      element._ripple.touched = false;
    }
  });
  ripples.hide(element);
}
function rippleCancelShow(e) {
  const element = e.currentTarget;
  if (!element?._ripple) return;
  if (element._ripple.showTimerCommit) {
    element._ripple.showTimerCommit = null;
  }
  window.clearTimeout(element._ripple.showTimer);
}
let keyboardRipple = false;
function keyboardRippleShow(e) {
  if (!keyboardRipple && (e.keyCode === keyCodes.enter || e.keyCode === keyCodes.space)) {
    keyboardRipple = true;
    rippleShow(e);
  }
}
function keyboardRippleHide(e) {
  keyboardRipple = false;
  rippleHide(e);
}
function focusRippleHide(e) {
  if (keyboardRipple) {
    keyboardRipple = false;
    rippleHide(e);
  }
}
function updateRipple(el, binding, wasEnabled) {
  const {
    value,
    modifiers
  } = binding;
  const enabled = isRippleEnabled(value);
  if (!enabled) {
    ripples.hide(el);
  }
  el._ripple = el._ripple ?? {};
  el._ripple.enabled = enabled;
  el._ripple.centered = modifiers.center;
  el._ripple.circle = modifiers.circle;
  if (isObject(value) && value.class) {
    el._ripple.class = value.class;
  }
  if (enabled && !wasEnabled) {
    if (modifiers.stop) {
      el.addEventListener('touchstart', rippleStop, {
        passive: true
      });
      el.addEventListener('mousedown', rippleStop);
      return;
    }
    el.addEventListener('touchstart', rippleShow, {
      passive: true
    });
    el.addEventListener('touchend', rippleHide, {
      passive: true
    });
    el.addEventListener('touchmove', rippleCancelShow, {
      passive: true
    });
    el.addEventListener('touchcancel', rippleHide);
    el.addEventListener('mousedown', rippleShow);
    el.addEventListener('mouseup', rippleHide);
    el.addEventListener('mouseleave', rippleHide);
    el.addEventListener('keydown', keyboardRippleShow);
    el.addEventListener('keyup', keyboardRippleHide);
    el.addEventListener('blur', focusRippleHide);

    // Anchor tags can be dragged, causes other hides to fail - #1537
    el.addEventListener('dragstart', rippleHide, {
      passive: true
    });
  } else if (!enabled && wasEnabled) {
    removeListeners(el);
  }
}
function removeListeners(el) {
  el.removeEventListener('mousedown', rippleShow);
  el.removeEventListener('touchstart', rippleShow);
  el.removeEventListener('touchend', rippleHide);
  el.removeEventListener('touchmove', rippleCancelShow);
  el.removeEventListener('touchcancel', rippleHide);
  el.removeEventListener('mouseup', rippleHide);
  el.removeEventListener('mouseleave', rippleHide);
  el.removeEventListener('keydown', keyboardRippleShow);
  el.removeEventListener('keyup', keyboardRippleHide);
  el.removeEventListener('dragstart', rippleHide);
  el.removeEventListener('blur', focusRippleHide);
}
function mounted$1(el, binding) {
  updateRipple(el, binding, false);
}
function unmounted$1(el) {
  delete el._ripple;
  removeListeners(el);
}
function updated(el, binding) {
  if (binding.value === binding.oldValue) {
    return;
  }
  const wasEnabled = isRippleEnabled(binding.oldValue);
  updateRipple(el, binding, wasEnabled);
}
const Ripple = {
  mounted: mounted$1,
  unmounted: unmounted$1,
  updated
};

const makeVBtnProps = propsFactory({
  active: {
    type: Boolean,
    default: undefined
  },
  symbol: {
    type: null,
    default: VBtnToggleSymbol
  },
  flat: Boolean,
  icon: [Boolean, String, Function, Object],
  prependIcon: IconValue,
  appendIcon: IconValue,
  block: Boolean,
  stacked: Boolean,
  ripple: {
    type: [Boolean, Object],
    default: true
  },
  text: String,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeGroupItemProps(),
  ...makeLoaderProps(),
  ...makeLocationProps(),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeRouterProps(),
  ...makeSizeProps(),
  ...makeTagProps({
    tag: 'button'
  }),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: 'elevated'
  })
}, 'VBtn');
const VBtn = genericComponent()({
  name: 'VBtn',
  directives: {
    Ripple
  },
  props: makeVBtnProps(),
  emits: {
    'group:selected': val => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      loaderClasses
    } = useLoader(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      positionClasses
    } = usePosition(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      sizeClasses,
      sizeStyles
    } = useSize(props);
    const group = useGroupItem(props, props.symbol, false);
    const link = useLink(props, attrs);
    const isActive = vue.computed(() => {
      if (props.active !== undefined) {
        return props.active;
      }
      if (link.isLink.value) {
        return link.isActive?.value;
      }
      return group?.isSelected.value;
    });
    const isDisabled = vue.computed(() => group?.disabled.value || props.disabled);
    const isElevated = vue.computed(() => {
      return props.variant === 'elevated' && !(props.disabled || props.flat || props.border);
    });
    const valueAttr = vue.computed(() => {
      if (props.value === undefined) return undefined;
      return Object(props.value) === props.value ? JSON.stringify(props.value, null, 0) : props.value;
    });
    function onClick(e) {
      if (isDisabled.value || link.isLink.value && (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0 || attrs.target === '_blank')) return;
      link.navigate?.(e);
      group?.toggle();
    }
    useSelectLink(link, group?.select);
    useRender(() => {
      const Tag = link.isLink.value ? 'a' : props.tag;
      const hasPrepend = !!(props.prependIcon || slots.prepend);
      const hasAppend = !!(props.appendIcon || slots.append);
      const hasIcon = !!(props.icon && props.icon !== true);
      const hasColor = group?.isSelected.value && (!link.isLink.value || link.isActive?.value) || !group || link.isActive?.value;
      return vue.withDirectives(vue.createVNode(Tag, {
        "type": Tag === 'a' ? undefined : 'button',
        "class": ['v-btn', group?.selectedClass.value, {
          'v-btn--active': isActive.value,
          'v-btn--block': props.block,
          'v-btn--disabled': isDisabled.value,
          'v-btn--elevated': isElevated.value,
          'v-btn--flat': props.flat,
          'v-btn--icon': !!props.icon,
          'v-btn--loading': props.loading,
          'v-btn--stacked': props.stacked
        }, themeClasses.value, borderClasses.value, hasColor ? colorClasses.value : undefined, densityClasses.value, elevationClasses.value, loaderClasses.value, positionClasses.value, roundedClasses.value, sizeClasses.value, variantClasses.value, props.class],
        "style": [hasColor ? colorStyles.value : undefined, dimensionStyles.value, locationStyles.value, sizeStyles.value, props.style],
        "disabled": isDisabled.value || undefined,
        "href": link.href.value,
        "onClick": onClick,
        "value": valueAttr.value
      }, {
        default: () => [genOverlays(true, 'v-btn'), !props.icon && hasPrepend && vue.createVNode("span", {
          "key": "prepend",
          "class": "v-btn__prepend"
        }, [!slots.prepend ? vue.createVNode(VIcon, {
          "key": "prepend-icon",
          "icon": props.prependIcon
        }, null) : vue.createVNode(VDefaultsProvider, {
          "key": "prepend-defaults",
          "disabled": !props.prependIcon,
          "defaults": {
            VIcon: {
              icon: props.prependIcon
            }
          }
        }, slots.prepend)]), vue.createVNode("span", {
          "class": "v-btn__content",
          "data-no-activator": ""
        }, [!slots.default && hasIcon ? vue.createVNode(VIcon, {
          "key": "content-icon",
          "icon": props.icon
        }, null) : vue.createVNode(VDefaultsProvider, {
          "key": "content-defaults",
          "disabled": !hasIcon,
          "defaults": {
            VIcon: {
              icon: props.icon
            }
          }
        }, {
          default: () => [slots.default?.() ?? props.text]
        })]), !props.icon && hasAppend && vue.createVNode("span", {
          "key": "append",
          "class": "v-btn__append"
        }, [!slots.append ? vue.createVNode(VIcon, {
          "key": "append-icon",
          "icon": props.appendIcon
        }, null) : vue.createVNode(VDefaultsProvider, {
          "key": "append-defaults",
          "disabled": !props.appendIcon,
          "defaults": {
            VIcon: {
              icon: props.appendIcon
            }
          }
        }, slots.append)]), !!props.loading && vue.createVNode("span", {
          "key": "loader",
          "class": "v-btn__loader"
        }, [slots.loader?.() ?? vue.createVNode(VProgressCircular, {
          "color": typeof props.loading === 'boolean' ? undefined : props.loading,
          "indeterminate": true,
          "size": "23",
          "width": "2"
        }, null)])]
      }), [[vue.resolveDirective("ripple"), !isDisabled.value && props.ripple, null]]);
    });
    return {};
  }
});

var css_248z$j = ".v-card {\n  display: block;\n  overflow: hidden;\n  overflow-wrap: break-word;\n  position: relative;\n  padding: 0;\n  text-decoration: none;\n  transition-duration: 0.28s;\n  transition-property: box-shadow, opacity, background;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 0;\n  border-color: rgba(var(--v-border-color), var(--v-border-opacity));\n  border-style: solid;\n  border-width: 0;\n  border-radius: 4px;\n}\n.v-card--border {\n  border-width: thin;\n  box-shadow: none;\n}\n.v-card--absolute {\n  position: absolute;\n}\n.v-card--fixed {\n  position: fixed;\n}\n.v-card:hover > .v-card__overlay {\n  opacity: calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier));\n}\n.v-card:focus-visible > .v-card__overlay {\n  opacity: calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier));\n}\n@supports not selector(:focus-visible) {\n  .v-card:focus > .v-card__overlay {\n    opacity: calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier));\n  }\n}\n.v-card--active > .v-card__overlay, .v-card[aria-haspopup=menu][aria-expanded=true] > .v-card__overlay {\n  opacity: calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier));\n}\n.v-card--active:hover > .v-card__overlay, .v-card[aria-haspopup=menu][aria-expanded=true]:hover > .v-card__overlay {\n  opacity: calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier));\n}\n.v-card--active:focus-visible > .v-card__overlay, .v-card[aria-haspopup=menu][aria-expanded=true]:focus-visible > .v-card__overlay {\n  opacity: calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier));\n}\n@supports not selector(:focus-visible) {\n  .v-card--active:focus > .v-card__overlay, .v-card[aria-haspopup=menu][aria-expanded=true]:focus > .v-card__overlay {\n    opacity: calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier));\n  }\n}\n.v-card--variant-plain, .v-card--variant-outlined, .v-card--variant-text, .v-card--variant-tonal {\n  background: transparent;\n  color: inherit;\n}\n.v-card--variant-plain {\n  opacity: 0.62;\n}\n.v-card--variant-plain:focus, .v-card--variant-plain:hover {\n  opacity: 1;\n}\n.v-card--variant-plain .v-card__overlay {\n  display: none;\n}\n.v-card--variant-elevated, .v-card--variant-flat {\n  background: rgb(var(--v-theme-surface));\n  color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));\n}\n.v-card--variant-elevated {\n  box-shadow: 0px 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 1px 1px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 3px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));\n}\n.v-card--variant-flat {\n  box-shadow: 0px 0px 0px 0px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));\n}\n.v-card--variant-outlined {\n  border: thin solid currentColor;\n}\n.v-card--variant-text .v-card__overlay {\n  background: currentColor;\n}\n.v-card--variant-tonal .v-card__underlay {\n  background: currentColor;\n  opacity: var(--v-activated-opacity);\n  border-radius: inherit;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  pointer-events: none;\n}\n.v-card--disabled {\n  pointer-events: none;\n  user-select: none;\n}\n.v-card--disabled > :not(.v-card__loader) {\n  opacity: 0.6;\n}\n.v-card--flat {\n  box-shadow: none;\n}\n.v-card--hover {\n  cursor: pointer;\n  box-shadow: 0px 0px 0px 0px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));\n}\n.v-card--hover::before, .v-card--hover::after {\n  border-radius: inherit;\n  bottom: 0;\n  content: \"\";\n  display: block;\n  left: 0;\n  pointer-events: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transition: inherit;\n}\n.v-card--hover::before {\n  opacity: 1;\n  z-index: -1;\n  box-shadow: 0px 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 1px 1px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 3px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));\n}\n.v-card--hover::after {\n  z-index: 1;\n  opacity: 0;\n  box-shadow: 0px 5px 5px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 8px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 3px 14px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));\n}\n.v-card--hover:hover::after {\n  opacity: 1;\n}\n.v-card--hover:hover::before {\n  opacity: 0;\n}\n.v-card--link {\n  cursor: pointer;\n}\n\n.v-card-actions {\n  align-items: center;\n  display: flex;\n  flex: none;\n  min-height: 52px;\n  padding: 0.5rem;\n}\n\n.v-card-item {\n  align-items: center;\n  display: grid;\n  flex: none;\n  grid-template-areas: \"prepend content append\";\n  grid-template-columns: max-content auto max-content;\n  padding: 0.625rem 1rem;\n}\n.v-card-item + .v-card-text {\n  padding-top: 0;\n}\n.v-card-item__prepend {\n  grid-area: prepend;\n  padding-inline-end: 1rem;\n}\n.v-card-item__append {\n  grid-area: append;\n  padding-inline-start: 1rem;\n}\n\n.v-card-item__content {\n  align-self: center;\n  grid-area: content;\n  overflow: hidden;\n}\n\n.v-card-title {\n  display: block;\n  flex: none;\n  font-size: 1.25rem;\n  font-weight: 500;\n  hyphens: auto;\n  letter-spacing: 0.0125em;\n  min-width: 0;\n  overflow-wrap: normal;\n  overflow: hidden;\n  padding: 0.5rem 1rem;\n  text-overflow: ellipsis;\n  text-transform: none;\n  white-space: nowrap;\n  word-break: normal;\n  word-wrap: break-word;\n}\n.v-card .v-card-title {\n  line-height: 2rem;\n}\n.v-card--density-comfortable .v-card-title {\n  line-height: 1.75rem;\n}\n.v-card--density-compact .v-card-title {\n  line-height: 1.55rem;\n}\n.v-card-item .v-card-title {\n  padding: 0;\n}\n.v-card-title + .v-card-text,\n.v-card-title + .v-card-actions {\n  padding-top: 0;\n}\n\n.v-card-subtitle {\n  display: block;\n  flex: none;\n  font-size: 0.875rem;\n  font-weight: 400;\n  letter-spacing: 0.0178571429em;\n  opacity: var(--v-medium-emphasis-opacity);\n  overflow: hidden;\n  padding: 0 1rem;\n  text-overflow: ellipsis;\n  text-transform: none;\n  white-space: nowrap;\n}\n.v-card .v-card-subtitle {\n  line-height: 1.25rem;\n}\n.v-card--density-comfortable .v-card-subtitle {\n  line-height: 1.125rem;\n}\n.v-card--density-compact .v-card-subtitle {\n  line-height: 1rem;\n}\n.v-card-item .v-card-subtitle {\n  padding: 0 0 0.25rem;\n}\n\n.v-card-text {\n  flex: 1 1 auto;\n  font-size: 0.875rem;\n  font-weight: 400;\n  letter-spacing: 0.0178571429em;\n  padding: 1rem;\n  text-transform: none;\n}\n.v-card .v-card-text {\n  line-height: 1.25rem;\n}\n.v-card--density-comfortable .v-card-text {\n  line-height: 1.2rem;\n}\n.v-card--density-compact .v-card-text {\n  line-height: 1.15rem;\n}\n\n.v-card__image {\n  display: flex;\n  height: 100%;\n  flex: 1 1 auto;\n  left: 0;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: -1;\n}\n\n.v-card__content {\n  border-radius: inherit;\n  overflow: hidden;\n  position: relative;\n}\n\n.v-card__loader {\n  bottom: auto;\n  top: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  width: 100%;\n  z-index: 1;\n}\n\n.v-card__overlay {\n  background-color: currentColor;\n  border-radius: inherit;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  pointer-events: none;\n  opacity: 0;\n  transition: opacity 0.2s ease-in-out;\n}";
styleInject(css_248z$j);

const VCardActions = genericComponent()({
  name: 'VCardActions',
  props: makeComponentProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    provideDefaults({
      VBtn: {
        variant: 'text'
      }
    });
    useRender(() => vue.createVNode("div", {
      "class": ['v-card-actions', props.class],
      "style": props.style
    }, [slots.default?.()]));
    return {};
  }
});

// Utilities
const VCardSubtitle = createSimpleFunctional('v-card-subtitle');

// Utilities
const VCardTitle = createSimpleFunctional('v-card-title');

var css_248z$i = ".v-avatar {\n  flex: none;\n  align-items: center;\n  display: inline-flex;\n  justify-content: center;\n  line-height: normal;\n  overflow: hidden;\n  position: relative;\n  text-align: center;\n  transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  transition-property: width, height;\n  vertical-align: middle;\n  border-radius: 50%;\n}\n.v-avatar.v-avatar--size-x-small {\n  --v-avatar-height: 24px;\n}\n.v-avatar.v-avatar--size-small {\n  --v-avatar-height: 32px;\n}\n.v-avatar.v-avatar--size-default {\n  --v-avatar-height: 40px;\n}\n.v-avatar.v-avatar--size-large {\n  --v-avatar-height: 48px;\n}\n.v-avatar.v-avatar--size-x-large {\n  --v-avatar-height: 56px;\n}\n.v-avatar.v-avatar--density-default {\n  height: calc(var(--v-avatar-height) + 0px);\n  width: calc(var(--v-avatar-height) + 0px);\n}\n.v-avatar.v-avatar--density-comfortable {\n  height: calc(var(--v-avatar-height) + -4px);\n  width: calc(var(--v-avatar-height) + -4px);\n}\n.v-avatar.v-avatar--density-compact {\n  height: calc(var(--v-avatar-height) + -8px);\n  width: calc(var(--v-avatar-height) + -8px);\n}\n.v-avatar--variant-plain, .v-avatar--variant-outlined, .v-avatar--variant-text, .v-avatar--variant-tonal {\n  background: transparent;\n  color: inherit;\n}\n.v-avatar--variant-plain {\n  opacity: 0.62;\n}\n.v-avatar--variant-plain:focus, .v-avatar--variant-plain:hover {\n  opacity: 1;\n}\n.v-avatar--variant-plain .v-avatar__overlay {\n  display: none;\n}\n.v-avatar--variant-elevated, .v-avatar--variant-flat {\n  background: var(--v-theme-surface);\n  color: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity));\n}\n.v-avatar--variant-elevated {\n  box-shadow: 0px 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 1px 1px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 3px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));\n}\n.v-avatar--variant-flat {\n  box-shadow: 0px 0px 0px 0px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));\n}\n.v-avatar--variant-outlined {\n  border: thin solid currentColor;\n}\n.v-avatar--variant-text .v-avatar__overlay {\n  background: currentColor;\n}\n.v-avatar--variant-tonal .v-avatar__underlay {\n  background: currentColor;\n  opacity: var(--v-activated-opacity);\n  border-radius: inherit;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  pointer-events: none;\n}\n.v-avatar--rounded {\n  border-radius: 4px;\n}\n.v-avatar .v-img {\n  height: 100%;\n  width: 100%;\n}";
styleInject(css_248z$i);

var css_248z$h = ".v-img {\n  --v-theme-overlay-multiplier: 3;\n  z-index: 0;\n}\n.v-img--booting .v-responsive__sizer {\n  transition: none;\n}\n\n.v-img__img,\n.v-img__picture,\n.v-img__gradient,\n.v-img__placeholder,\n.v-img__error {\n  z-index: -1;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.v-img__img--preload {\n  filter: blur(4px);\n}\n.v-img__img--contain {\n  object-fit: contain;\n}\n.v-img__img--cover {\n  object-fit: cover;\n}\n\n.v-img__gradient {\n  background-repeat: no-repeat;\n}";
styleInject(css_248z$h);

var css_248z$g = ".v-responsive {\n  display: flex;\n  flex: 1 0 auto;\n  max-height: 100%;\n  max-width: 100%;\n  overflow: hidden;\n  position: relative;\n}\n.v-responsive--inline {\n  display: inline-flex;\n  flex: 0 0 auto;\n}\n\n.v-responsive__content {\n  flex: 1 0 0px;\n  max-width: 100%;\n}\n\n.v-responsive__sizer ~ .v-responsive__content {\n  margin-inline-start: -100%;\n}\n\n.v-responsive__sizer {\n  flex: 1 0 0px;\n  transition: padding-bottom 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  pointer-events: none;\n}";
styleInject(css_248z$g);

function useAspectStyles(props) {
  return {
    aspectStyles: vue.computed(() => {
      const ratio = Number(props.aspectRatio);
      return ratio ? {
        paddingBottom: String(1 / ratio * 100) + '%'
      } : undefined;
    })
  };
}
const makeVResponsiveProps = propsFactory({
  aspectRatio: [String, Number],
  contentClass: String,
  inline: Boolean,
  ...makeComponentProps(),
  ...makeDimensionProps()
}, 'VResponsive');
const VResponsive = genericComponent()({
  name: 'VResponsive',
  props: makeVResponsiveProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      aspectStyles
    } = useAspectStyles(props);
    const {
      dimensionStyles
    } = useDimension(props);
    useRender(() => vue.createVNode("div", {
      "class": ['v-responsive', {
        'v-responsive--inline': props.inline
      }, props.class],
      "style": [dimensionStyles.value, props.style]
    }, [vue.createVNode("div", {
      "class": "v-responsive__sizer",
      "style": aspectStyles.value
    }, null), slots.additional?.(), slots.default && vue.createVNode("div", {
      "class": ['v-responsive__content', props.contentClass]
    }, [slots.default()])]));
    return {};
  }
});

// Utilities
const makeTransitionProps$1 = propsFactory({
  transition: {
    type: [Boolean, String, Object],
    default: 'fade-transition',
    validator: val => val !== true
  }
}, 'transition');
const MaybeTransition = (props, _ref) => {
  let {
    slots
  } = _ref;
  const {
    transition,
    disabled,
    ...rest
  } = props;
  const {
    component = vue.Transition,
    ...customProps
  } = typeof transition === 'object' ? transition : {};
  return vue.h(component, vue.mergeProps(typeof transition === 'string' ? {
    name: disabled ? '' : transition
  } : customProps, rest, {
    disabled
  }), slots);
};

// Utilities
function mounted(el, binding) {
  if (!SUPPORTS_INTERSECTION) return;
  const modifiers = binding.modifiers || {};
  const value = binding.value;
  const {
    handler,
    options
  } = typeof value === 'object' ? value : {
    handler: value,
    options: {}
  };
  const observer = new IntersectionObserver(function () {
    let entries = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    let observer = arguments.length > 1 ? arguments[1] : undefined;
    const _observe = el._observe?.[binding.instance.$.uid];
    if (!_observe) return; // Just in case, should never fire

    const isIntersecting = entries.some(entry => entry.isIntersecting);

    // If is not quiet or has already been
    // initted, invoke the user callback
    if (handler && (!modifiers.quiet || _observe.init) && (!modifiers.once || isIntersecting || _observe.init)) {
      handler(isIntersecting, entries, observer);
    }
    if (isIntersecting && modifiers.once) unmounted(el, binding);else _observe.init = true;
  }, options);
  el._observe = Object(el._observe);
  el._observe[binding.instance.$.uid] = {
    init: false,
    observer
  };
  observer.observe(el);
}
function unmounted(el, binding) {
  const observe = el._observe?.[binding.instance.$.uid];
  if (!observe) return;
  observe.observer.unobserve(el);
  delete el._observe[binding.instance.$.uid];
}
const Intersect = {
  mounted,
  unmounted
};
var Intersect$1 = Intersect;

const makeVImgProps = propsFactory({
  alt: String,
  cover: Boolean,
  eager: Boolean,
  gradient: String,
  lazySrc: String,
  options: {
    type: Object,
    // For more information on types, navigate to:
    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    default: () => ({
      root: undefined,
      rootMargin: undefined,
      threshold: undefined
    })
  },
  sizes: String,
  src: {
    type: [String, Object],
    default: ''
  },
  srcset: String,
  ...makeVResponsiveProps(),
  ...makeComponentProps(),
  ...makeTransitionProps$1()
}, 'VImg');
const VImg = genericComponent()({
  name: 'VImg',
  directives: {
    intersect: Intersect$1
  },
  props: makeVImgProps(),
  emits: {
    loadstart: value => true,
    load: value => true,
    error: value => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const currentSrc = vue.shallowRef(''); // Set from srcset
    const image = vue.ref();
    const state = vue.shallowRef(props.eager ? 'loading' : 'idle');
    const naturalWidth = vue.shallowRef();
    const naturalHeight = vue.shallowRef();
    const normalisedSrc = vue.computed(() => {
      return props.src && typeof props.src === 'object' ? {
        src: props.src.src,
        srcset: props.srcset || props.src.srcset,
        lazySrc: props.lazySrc || props.src.lazySrc,
        aspect: Number(props.aspectRatio || props.src.aspect || 0)
      } : {
        src: props.src,
        srcset: props.srcset,
        lazySrc: props.lazySrc,
        aspect: Number(props.aspectRatio || 0)
      };
    });
    const aspectRatio = vue.computed(() => {
      return normalisedSrc.value.aspect || naturalWidth.value / naturalHeight.value || 0;
    });
    vue.watch(() => props.src, () => {
      init(state.value !== 'idle');
    });
    vue.watch(aspectRatio, (val, oldVal) => {
      if (!val && oldVal && image.value) {
        pollForSize(image.value);
      }
    });

    // TODO: getSrc when window width changes

    vue.onBeforeMount(() => init());
    function init(isIntersecting) {
      if (props.eager && isIntersecting) return;
      if (SUPPORTS_INTERSECTION && !isIntersecting && !props.eager) return;
      state.value = 'loading';
      if (normalisedSrc.value.lazySrc) {
        const lazyImg = new Image();
        lazyImg.src = normalisedSrc.value.lazySrc;
        pollForSize(lazyImg, null);
      }
      if (!normalisedSrc.value.src) return;
      vue.nextTick(() => {
        emit('loadstart', image.value?.currentSrc || normalisedSrc.value.src);
        if (image.value?.complete) {
          if (!image.value.naturalWidth) {
            onError();
          }
          if (state.value === 'error') return;
          if (!aspectRatio.value) pollForSize(image.value, null);
          onLoad();
        } else {
          if (!aspectRatio.value) pollForSize(image.value);
          getSrc();
        }
      });
    }
    function onLoad() {
      getSrc();
      state.value = 'loaded';
      emit('load', image.value?.currentSrc || normalisedSrc.value.src);
    }
    function onError() {
      state.value = 'error';
      emit('error', image.value?.currentSrc || normalisedSrc.value.src);
    }
    function getSrc() {
      const img = image.value;
      if (img) currentSrc.value = img.currentSrc || img.src;
    }
    let timer = -1;
    function pollForSize(img) {
      let timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
      const poll = () => {
        clearTimeout(timer);
        const {
          naturalHeight: imgHeight,
          naturalWidth: imgWidth
        } = img;
        if (imgHeight || imgWidth) {
          naturalWidth.value = imgWidth;
          naturalHeight.value = imgHeight;
        } else if (!img.complete && state.value === 'loading' && timeout != null) {
          timer = window.setTimeout(poll, timeout);
        } else if (img.currentSrc.endsWith('.svg') || img.currentSrc.startsWith('data:image/svg+xml')) {
          naturalWidth.value = 1;
          naturalHeight.value = 1;
        }
      };
      poll();
    }
    const containClasses = vue.computed(() => ({
      'v-img__img--cover': props.cover,
      'v-img__img--contain': !props.cover
    }));
    const __image = () => {
      if (!normalisedSrc.value.src || state.value === 'idle') return null;
      const img = vue.createVNode("img", {
        "class": ['v-img__img', containClasses.value],
        "src": normalisedSrc.value.src,
        "srcset": normalisedSrc.value.srcset,
        "alt": props.alt,
        "sizes": props.sizes,
        "ref": image,
        "onLoad": onLoad,
        "onError": onError
      }, null);
      const sources = slots.sources?.();
      return vue.createVNode(MaybeTransition, {
        "transition": props.transition,
        "appear": true
      }, {
        default: () => [vue.withDirectives(sources ? vue.createVNode("picture", {
          "class": "v-img__picture"
        }, [sources, img]) : img, [[vue.vShow, state.value === 'loaded']])]
      });
    };
    const __preloadImage = () => vue.createVNode(MaybeTransition, {
      "transition": props.transition
    }, {
      default: () => [normalisedSrc.value.lazySrc && state.value !== 'loaded' && vue.createVNode("img", {
        "class": ['v-img__img', 'v-img__img--preload', containClasses.value],
        "src": normalisedSrc.value.lazySrc,
        "alt": props.alt
      }, null)]
    });
    const __placeholder = () => {
      if (!slots.placeholder) return null;
      return vue.createVNode(MaybeTransition, {
        "transition": props.transition,
        "appear": true
      }, {
        default: () => [(state.value === 'loading' || state.value === 'error' && !slots.error) && vue.createVNode("div", {
          "class": "v-img__placeholder"
        }, [slots.placeholder()])]
      });
    };
    const __error = () => {
      if (!slots.error) return null;
      return vue.createVNode(MaybeTransition, {
        "transition": props.transition,
        "appear": true
      }, {
        default: () => [state.value === 'error' && vue.createVNode("div", {
          "class": "v-img__error"
        }, [slots.error()])]
      });
    };
    const __gradient = () => {
      if (!props.gradient) return null;
      return vue.createVNode("div", {
        "class": "v-img__gradient",
        "style": {
          backgroundImage: `linear-gradient(${props.gradient})`
        }
      }, null);
    };
    const isBooted = vue.shallowRef(false);
    {
      const stop = vue.watch(aspectRatio, val => {
        if (val) {
          // Doesn't work with nextTick, idk why
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              isBooted.value = true;
            });
          });
          stop();
        }
      });
    }
    useRender(() => {
      const [responsiveProps] = VResponsive.filterProps(props);
      return vue.withDirectives(vue.createVNode(VResponsive, vue.mergeProps({
        "class": ['v-img', {
          'v-img--booting': !isBooted.value
        }, props.class],
        "style": [{
          width: convertToUnit(props.width === 'auto' ? naturalWidth.value : props.width)
        }, props.style]
      }, responsiveProps, {
        "aspectRatio": aspectRatio.value,
        "aria-label": props.alt,
        "role": props.alt ? 'img' : undefined
      }), {
        additional: () => vue.createVNode(vue.Fragment, null, [vue.createVNode(__image, null, null), vue.createVNode(__preloadImage, null, null), vue.createVNode(__gradient, null, null), vue.createVNode(__placeholder, null, null), vue.createVNode(__error, null, null)]),
        default: slots.default
      }), [[vue.resolveDirective("intersect"), {
        handler: init,
        options: props.options
      }, null, {
        once: true
      }]]);
    });
    return {
      currentSrc,
      image,
      state,
      naturalWidth,
      naturalHeight
    };
  }
});

const makeVAvatarProps = propsFactory({
  start: Boolean,
  end: Boolean,
  icon: IconValue,
  image: String,
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeRoundedProps(),
  ...makeSizeProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: 'flat'
  })
}, 'VAvatar');
const VAvatar = genericComponent()({
  name: 'VAvatar',
  props: makeVAvatarProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      sizeClasses,
      sizeStyles
    } = useSize(props);
    useRender(() => vue.createVNode(props.tag, {
      "class": ['v-avatar', {
        'v-avatar--start': props.start,
        'v-avatar--end': props.end
      }, themeClasses.value, colorClasses.value, densityClasses.value, roundedClasses.value, sizeClasses.value, variantClasses.value, props.class],
      "style": [colorStyles.value, sizeStyles.value, props.style]
    }, {
      default: () => [props.image ? vue.createVNode(VImg, {
        "key": "image",
        "src": props.image,
        "alt": "",
        "cover": true
      }, null) : props.icon ? vue.createVNode(VIcon, {
        "key": "icon",
        "icon": props.icon
      }, null) : slots.default?.(), genOverlays(false, 'v-avatar')]
    }));
    return {};
  }
});

const makeCardItemProps = propsFactory({
  appendAvatar: String,
  appendIcon: IconValue,
  prependAvatar: String,
  prependIcon: IconValue,
  subtitle: String,
  title: String,
  ...makeComponentProps(),
  ...makeDensityProps()
}, 'VCardItem');
const VCardItem = genericComponent()({
  name: 'VCardItem',
  props: makeCardItemProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      const hasPrependMedia = !!(props.prependAvatar || props.prependIcon);
      const hasPrepend = !!(hasPrependMedia || slots.prepend);
      const hasAppendMedia = !!(props.appendAvatar || props.appendIcon);
      const hasAppend = !!(hasAppendMedia || slots.append);
      const hasTitle = !!(props.title || slots.title);
      const hasSubtitle = !!(props.subtitle || slots.subtitle);
      return vue.createVNode("div", {
        "class": ['v-card-item', props.class],
        "style": props.style
      }, [hasPrepend && vue.createVNode("div", {
        "key": "prepend",
        "class": "v-card-item__prepend"
      }, [!slots.prepend ? hasPrependMedia && vue.createVNode(VAvatar, {
        "key": "prepend-avatar",
        "density": props.density,
        "icon": props.prependIcon,
        "image": props.prependAvatar
      }, null) : vue.createVNode(VDefaultsProvider, {
        "key": "prepend-defaults",
        "disabled": !hasPrependMedia,
        "defaults": {
          VAvatar: {
            density: props.density,
            icon: props.prependIcon,
            image: props.prependAvatar
          }
        }
      }, slots.prepend)]), vue.createVNode("div", {
        "class": "v-card-item__content"
      }, [hasTitle && vue.createVNode(VCardTitle, {
        "key": "title"
      }, {
        default: () => [slots.title?.() ?? props.title]
      }), hasSubtitle && vue.createVNode(VCardSubtitle, {
        "key": "subtitle"
      }, {
        default: () => [slots.subtitle?.() ?? props.subtitle]
      }), slots.default?.()]), hasAppend && vue.createVNode("div", {
        "key": "append",
        "class": "v-card-item__append"
      }, [!slots.append ? hasAppendMedia && vue.createVNode(VAvatar, {
        "key": "append-avatar",
        "density": props.density,
        "icon": props.appendIcon,
        "image": props.appendAvatar
      }, null) : vue.createVNode(VDefaultsProvider, {
        "key": "append-defaults",
        "disabled": !hasAppendMedia,
        "defaults": {
          VAvatar: {
            density: props.density,
            icon: props.appendIcon,
            image: props.appendAvatar
          }
        }
      }, slots.append)])]);
    });
    return {};
  }
});

// Utilities
const VCardText = createSimpleFunctional('v-card-text');

const makeVCardProps = propsFactory({
  appendAvatar: String,
  appendIcon: IconValue,
  disabled: Boolean,
  flat: Boolean,
  hover: Boolean,
  image: String,
  link: {
    type: Boolean,
    default: undefined
  },
  prependAvatar: String,
  prependIcon: IconValue,
  ripple: {
    type: [Boolean, Object],
    default: true
  },
  subtitle: String,
  text: String,
  title: String,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeLoaderProps(),
  ...makeLocationProps(),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeRouterProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: 'elevated'
  })
}, 'VCard');
const VCard = genericComponent()({
  name: 'VCard',
  directives: {
    Ripple
  },
  props: makeVCardProps(),
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      loaderClasses
    } = useLoader(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      positionClasses
    } = usePosition(props);
    const {
      roundedClasses
    } = useRounded(props);
    const link = useLink(props, attrs);
    const isLink = vue.computed(() => props.link !== false && link.isLink.value);
    const isClickable = vue.computed(() => !props.disabled && props.link !== false && (props.link || link.isClickable.value));
    useRender(() => {
      const Tag = isLink.value ? 'a' : props.tag;
      const hasTitle = !!(slots.title || props.title);
      const hasSubtitle = !!(slots.subtitle || props.subtitle);
      const hasHeader = hasTitle || hasSubtitle;
      const hasAppend = !!(slots.append || props.appendAvatar || props.appendIcon);
      const hasPrepend = !!(slots.prepend || props.prependAvatar || props.prependIcon);
      const hasImage = !!(slots.image || props.image);
      const hasCardItem = hasHeader || hasPrepend || hasAppend;
      const hasText = !!(slots.text || props.text);
      return vue.withDirectives(vue.createVNode(Tag, {
        "class": ['v-card', {
          'v-card--disabled': props.disabled,
          'v-card--flat': props.flat,
          'v-card--hover': props.hover && !(props.disabled || props.flat),
          'v-card--link': isClickable.value
        }, themeClasses.value, borderClasses.value, colorClasses.value, densityClasses.value, elevationClasses.value, loaderClasses.value, positionClasses.value, roundedClasses.value, variantClasses.value, props.class],
        "style": [colorStyles.value, dimensionStyles.value, locationStyles.value, props.style],
        "href": link.href.value,
        "onClick": isClickable.value && link.navigate,
        "tabindex": props.disabled ? -1 : undefined
      }, {
        default: () => [hasImage && vue.createVNode("div", {
          "key": "image",
          "class": "v-card__image"
        }, [!slots.image ? vue.createVNode(VImg, {
          "key": "image-img",
          "cover": true,
          "src": props.image
        }, null) : vue.createVNode(VDefaultsProvider, {
          "key": "image-defaults",
          "disabled": !props.image,
          "defaults": {
            VImg: {
              cover: true,
              src: props.image
            }
          }
        }, slots.image)]), vue.createVNode(LoaderSlot, {
          "name": "v-card",
          "active": !!props.loading,
          "color": typeof props.loading === 'boolean' ? undefined : props.loading
        }, {
          default: slots.loader
        }), hasCardItem && vue.createVNode(VCardItem, {
          "key": "item",
          "prependAvatar": props.prependAvatar,
          "prependIcon": props.prependIcon,
          "title": props.title,
          "subtitle": props.subtitle,
          "appendAvatar": props.appendAvatar,
          "appendIcon": props.appendIcon
        }, {
          default: slots.item,
          prepend: slots.prepend,
          title: slots.title,
          subtitle: slots.subtitle,
          append: slots.append
        }), hasText && vue.createVNode(VCardText, {
          "key": "text"
        }, {
          default: () => [slots.text?.() ?? props.text]
        }), slots.default?.(), slots.actions && vue.createVNode(VCardActions, null, {
          default: slots.actions
        }), genOverlays(isClickable.value, 'v-card')]
      }), [[vue.resolveDirective("ripple"), isClickable.value && props.ripple]]);
    });
    return {};
  }
});

var css_248z$f = ".v-dialog {\n  align-items: center;\n  justify-content: center;\n  margin: auto;\n}\n.v-dialog > .v-overlay__content {\n  max-height: calc(100% - 48px);\n  width: calc(100% - 48px);\n  max-width: calc(100% - 48px);\n  margin: 24px;\n  display: flex;\n  flex-direction: column;\n}\n.v-dialog > .v-overlay__content > .v-card,\n.v-dialog > .v-overlay__content > .v-sheet,\n.v-dialog > .v-overlay__content > form > .v-card,\n.v-dialog > .v-overlay__content > form > .v-sheet {\n  --v-scrollbar-offset: 0px;\n  border-radius: 4px;\n  overflow-y: auto;\n  box-shadow: 0px 11px 15px -7px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 24px 38px 3px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 9px 46px 8px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));\n}\n.v-dialog > .v-overlay__content > .v-card,\n.v-dialog > .v-overlay__content > form > .v-card {\n  display: flex;\n  flex-direction: column;\n}\n.v-dialog > .v-overlay__content > .v-card > .v-card-item,\n.v-dialog > .v-overlay__content > form > .v-card > .v-card-item {\n  padding: 14px 24px 0;\n}\n.v-dialog > .v-overlay__content > .v-card > .v-card-item + .v-card-text,\n.v-dialog > .v-overlay__content > form > .v-card > .v-card-item + .v-card-text {\n  padding-top: 10px;\n}\n.v-dialog > .v-overlay__content > .v-card > .v-card-text,\n.v-dialog > .v-overlay__content > form > .v-card > .v-card-text {\n  font-size: inherit;\n  letter-spacing: 0.03125em;\n  line-height: inherit;\n  padding: 16px 24px 10px;\n}\n\n.v-dialog--fullscreen {\n  --v-scrollbar-offset: 0px;\n}\n.v-dialog--fullscreen > .v-overlay__content {\n  border-radius: 0;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  overflow-y: auto;\n  top: 0;\n  left: 0;\n}\n.v-dialog--fullscreen > .v-overlay__content > .v-card,\n.v-dialog--fullscreen > .v-overlay__content > .v-sheet,\n.v-dialog--fullscreen > .v-overlay__content > form > .v-card,\n.v-dialog--fullscreen > .v-overlay__content > form > .v-sheet {\n  min-height: 100%;\n  min-width: 100%;\n  border-radius: 0;\n}\n\n.v-dialog--scrollable > .v-overlay__content,\n.v-dialog--scrollable > .v-overlay__content > form {\n  display: flex;\n  overflow: hidden;\n}\n.v-dialog--scrollable > .v-overlay__content > .v-card,\n.v-dialog--scrollable > .v-overlay__content > form > .v-card {\n  display: flex;\n  flex: 1 1 100%;\n  flex-direction: column;\n  max-height: 100%;\n  max-width: 100%;\n}\n.v-dialog--scrollable > .v-overlay__content > .v-card > .v-card-text,\n.v-dialog--scrollable > .v-overlay__content > form > .v-card > .v-card-text {\n  backface-visibility: hidden;\n  overflow-y: auto;\n}";
styleInject(css_248z$f);

// Utilities
const makeTransitionProps = propsFactory({
  disabled: Boolean,
  group: Boolean,
  hideOnLeave: Boolean,
  leaveAbsolute: Boolean,
  mode: String,
  origin: String
}, 'transition');
function createCssTransition(name, origin, mode) {
  return genericComponent()({
    name,
    props: makeTransitionProps({
      mode,
      origin
    }),
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      const functions = {
        onBeforeEnter(el) {
          if (props.origin) {
            el.style.transformOrigin = props.origin;
          }
        },
        onLeave(el) {
          if (props.leaveAbsolute) {
            const {
              offsetTop,
              offsetLeft,
              offsetWidth,
              offsetHeight
            } = el;
            el._transitionInitialStyles = {
              position: el.style.position,
              top: el.style.top,
              left: el.style.left,
              width: el.style.width,
              height: el.style.height
            };
            el.style.position = 'absolute';
            el.style.top = `${offsetTop}px`;
            el.style.left = `${offsetLeft}px`;
            el.style.width = `${offsetWidth}px`;
            el.style.height = `${offsetHeight}px`;
          }
          if (props.hideOnLeave) {
            el.style.setProperty('display', 'none', 'important');
          }
        },
        onAfterLeave(el) {
          if (props.leaveAbsolute && el?._transitionInitialStyles) {
            const {
              position,
              top,
              left,
              width,
              height
            } = el._transitionInitialStyles;
            delete el._transitionInitialStyles;
            el.style.position = position || '';
            el.style.top = top || '';
            el.style.left = left || '';
            el.style.width = width || '';
            el.style.height = height || '';
          }
        }
      };
      return () => {
        const tag = props.group ? vue.TransitionGroup : vue.Transition;
        return vue.h(tag, {
          name: props.disabled ? '' : name,
          css: !props.disabled,
          ...(props.group ? undefined : {
            mode: props.mode
          }),
          ...(props.disabled ? {} : functions)
        }, slots.default);
      };
    }
  });
}
function createJavascriptTransition(name, functions) {
  let mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'in-out';
  return genericComponent()({
    name,
    props: {
      mode: {
        type: String,
        default: mode
      },
      disabled: Boolean
    },
    setup(props, _ref2) {
      let {
        slots
      } = _ref2;
      return () => {
        return vue.h(vue.Transition, {
          name: props.disabled ? '' : name,
          css: !props.disabled,
          // mode: props.mode, // TODO: vuejs/vue-next#3104
          ...(props.disabled ? {} : functions)
        }, slots.default);
      };
    }
  });
}

// Utilities
function ExpandTransitionGenerator () {
  let expandedParentClass = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  let x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  const sizeProperty = x ? 'width' : 'height';
  const offsetProperty = vue.camelize(`offset-${sizeProperty}`);
  return {
    onBeforeEnter(el) {
      el._parent = el.parentNode;
      el._initialStyle = {
        transition: el.style.transition,
        overflow: el.style.overflow,
        [sizeProperty]: el.style[sizeProperty]
      };
    },
    onEnter(el) {
      const initialStyle = el._initialStyle;
      el.style.setProperty('transition', 'none', 'important');
      // Hide overflow to account for collapsed margins in the calculated height
      el.style.overflow = 'hidden';
      const offset = `${el[offsetProperty]}px`;
      el.style[sizeProperty] = '0';
      void el.offsetHeight; // force reflow

      el.style.transition = initialStyle.transition;
      if (expandedParentClass && el._parent) {
        el._parent.classList.add(expandedParentClass);
      }
      requestAnimationFrame(() => {
        el.style[sizeProperty] = offset;
      });
    },
    onAfterEnter: resetStyles,
    onEnterCancelled: resetStyles,
    onLeave(el) {
      el._initialStyle = {
        transition: '',
        overflow: el.style.overflow,
        [sizeProperty]: el.style[sizeProperty]
      };
      el.style.overflow = 'hidden';
      el.style[sizeProperty] = `${el[offsetProperty]}px`;
      void el.offsetHeight; // force reflow

      requestAnimationFrame(() => el.style[sizeProperty] = '0');
    },
    onAfterLeave,
    onLeaveCancelled: onAfterLeave
  };
  function onAfterLeave(el) {
    if (expandedParentClass && el._parent) {
      el._parent.classList.remove(expandedParentClass);
    }
    resetStyles(el);
  }
  function resetStyles(el) {
    const size = el._initialStyle[sizeProperty];
    el.style.overflow = el._initialStyle.overflow;
    if (size != null) el.style[sizeProperty] = size;
    delete el._initialStyle;
  }
}

const makeVDialogTransitionProps = propsFactory({
  target: Object
}, 'v-dialog-transition');
const VDialogTransition = genericComponent()({
  name: 'VDialogTransition',
  props: makeVDialogTransitionProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const functions = {
      onBeforeEnter(el) {
        el.style.pointerEvents = 'none';
        el.style.visibility = 'hidden';
      },
      async onEnter(el, done) {
        await new Promise(resolve => requestAnimationFrame(resolve));
        await new Promise(resolve => requestAnimationFrame(resolve));
        el.style.visibility = '';
        const {
          x,
          y,
          sx,
          sy,
          speed
        } = getDimensions(props.target, el);
        const animation = animate(el, [{
          transform: `translate(${x}px, ${y}px) scale(${sx}, ${sy})`,
          opacity: 0
        }, {}], {
          duration: 225 * speed,
          easing: deceleratedEasing
        });
        getChildren(el)?.forEach(el => {
          animate(el, [{
            opacity: 0
          }, {
            opacity: 0,
            offset: 0.33
          }, {}], {
            duration: 225 * 2 * speed,
            easing: standardEasing
          });
        });
        animation.finished.then(() => done());
      },
      onAfterEnter(el) {
        el.style.removeProperty('pointer-events');
      },
      onBeforeLeave(el) {
        el.style.pointerEvents = 'none';
      },
      async onLeave(el, done) {
        await new Promise(resolve => requestAnimationFrame(resolve));
        const {
          x,
          y,
          sx,
          sy,
          speed
        } = getDimensions(props.target, el);
        const animation = animate(el, [{}, {
          transform: `translate(${x}px, ${y}px) scale(${sx}, ${sy})`,
          opacity: 0
        }], {
          duration: 125 * speed,
          easing: acceleratedEasing
        });
        animation.finished.then(() => done());
        getChildren(el)?.forEach(el => {
          animate(el, [{}, {
            opacity: 0,
            offset: 0.2
          }, {
            opacity: 0
          }], {
            duration: 125 * 2 * speed,
            easing: standardEasing
          });
        });
      },
      onAfterLeave(el) {
        el.style.removeProperty('pointer-events');
      }
    };
    return () => {
      return props.target ? vue.createVNode(vue.Transition, vue.mergeProps({
        "name": "dialog-transition"
      }, functions, {
        "css": false
      }), slots) : vue.createVNode(vue.Transition, {
        "name": "dialog-transition"
      }, slots);
    };
  }
});

/** Animatable children (card, sheet, list) */
function getChildren(el) {
  const els = el.querySelector(':scope > .v-card, :scope > .v-sheet, :scope > .v-list')?.children;
  return els && [...els];
}
function getDimensions(target, el) {
  const targetBox = target.getBoundingClientRect();
  const elBox = nullifyTransforms(el);
  const [originX, originY] = getComputedStyle(el).transformOrigin.split(' ').map(v => parseFloat(v));
  const [anchorSide, anchorOffset] = getComputedStyle(el).getPropertyValue('--v-overlay-anchor-origin').split(' ');
  let offsetX = targetBox.left + targetBox.width / 2;
  if (anchorSide === 'left' || anchorOffset === 'left') {
    offsetX -= targetBox.width / 2;
  } else if (anchorSide === 'right' || anchorOffset === 'right') {
    offsetX += targetBox.width / 2;
  }
  let offsetY = targetBox.top + targetBox.height / 2;
  if (anchorSide === 'top' || anchorOffset === 'top') {
    offsetY -= targetBox.height / 2;
  } else if (anchorSide === 'bottom' || anchorOffset === 'bottom') {
    offsetY += targetBox.height / 2;
  }
  const tsx = targetBox.width / elBox.width;
  const tsy = targetBox.height / elBox.height;
  const maxs = Math.max(1, tsx, tsy);
  const sx = tsx / maxs || 0;
  const sy = tsy / maxs || 0;

  // Animate elements larger than 12% of the screen area up to 1.5x slower
  const asa = elBox.width * elBox.height / (window.innerWidth * window.innerHeight);
  const speed = asa > 0.12 ? Math.min(1.5, (asa - 0.12) * 10 + 1) : 1;
  return {
    x: offsetX - (originX + elBox.left),
    y: offsetY - (originY + elBox.top),
    sx,
    sy,
    speed
  };
}

createCssTransition('fab-transition', 'center center', 'out-in');

// Generic transitions
createCssTransition('dialog-bottom-transition');
createCssTransition('dialog-top-transition');
createCssTransition('fade-transition');
createCssTransition('scale-transition');
createCssTransition('scroll-x-transition');
createCssTransition('scroll-x-reverse-transition');
createCssTransition('scroll-y-transition');
createCssTransition('scroll-y-reverse-transition');
createCssTransition('slide-x-transition');
createCssTransition('slide-x-reverse-transition');
const VSlideYTransition = createCssTransition('slide-y-transition');
createCssTransition('slide-y-reverse-transition');

// Javascript transitions
const VExpandTransition = createJavascriptTransition('expand-transition', ExpandTransitionGenerator());
const VExpandXTransition = createJavascriptTransition('expand-x-transition', ExpandTransitionGenerator('', true));

var css_248z$e = ".v-overlay-container {\n  contain: layout;\n  left: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  display: contents;\n}\n\n.v-overlay-scroll-blocked {\n  padding-inline-end: var(--v-scrollbar-offset);\n}\n.v-overlay-scroll-blocked:not(html) {\n  overflow-y: hidden !important;\n}\nhtml.v-overlay-scroll-blocked {\n  position: fixed;\n  top: var(--v-body-scroll-y);\n  left: var(--v-body-scroll-x);\n  width: 100%;\n  height: 100%;\n}\n\n.v-overlay {\n  border-radius: inherit;\n  display: flex;\n  left: 0;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.v-overlay__content {\n  outline: none;\n  position: absolute;\n  pointer-events: auto;\n  contain: layout;\n}\n\n.v-overlay__scrim {\n  pointer-events: auto;\n  background: rgb(var(--v-theme-on-surface));\n  border-radius: inherit;\n  bottom: 0;\n  left: 0;\n  opacity: 0.32;\n  position: fixed;\n  right: 0;\n  top: 0;\n}\n\n.v-overlay--absolute {\n  position: absolute;\n}\n\n.v-overlay--contained .v-overlay__scrim {\n  position: absolute;\n}\n\n.v-overlay--scroll-blocked {\n  padding-inline-end: var(--v-scrollbar-offset);\n}";
styleInject(css_248z$e);

// Types

/** Convert a point in local space to viewport space */
function elementToViewport(point, offset) {
  return {
    x: point.x + offset.x,
    y: point.y + offset.y
  };
}

/** Get the difference between two points */
function getOffset(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  };
}

/** Convert an anchor object to a point in local space */
function anchorToPoint(anchor, box) {
  if (anchor.side === 'top' || anchor.side === 'bottom') {
    const {
      side,
      align
    } = anchor;
    const x = align === 'left' ? 0 : align === 'center' ? box.width / 2 : align === 'right' ? box.width : align;
    const y = side === 'top' ? 0 : side === 'bottom' ? box.height : side;
    return elementToViewport({
      x,
      y
    }, box);
  } else if (anchor.side === 'left' || anchor.side === 'right') {
    const {
      side,
      align
    } = anchor;
    const x = side === 'left' ? 0 : side === 'right' ? box.width : side;
    const y = align === 'top' ? 0 : align === 'center' ? box.height / 2 : align === 'bottom' ? box.height : align;
    return elementToViewport({
      x,
      y
    }, box);
  }
  return elementToViewport({
    x: box.width / 2,
    y: box.height / 2
  }, box);
}

// Composables
const locationStrategies = {
  static: staticLocationStrategy,
  // specific viewport position, usually centered
  connected: connectedLocationStrategy // connected to a certain element
};

const makeLocationStrategyProps = propsFactory({
  locationStrategy: {
    type: [String, Function],
    default: 'static',
    validator: val => typeof val === 'function' || val in locationStrategies
  },
  location: {
    type: String,
    default: 'bottom'
  },
  origin: {
    type: String,
    default: 'auto'
  },
  offset: [Number, String, Array]
}, 'VOverlay-location-strategies');
function useLocationStrategies(props, data) {
  const contentStyles = vue.ref({});
  const updateLocation = vue.ref();
  if (IN_BROWSER) {
    useToggleScope(() => !!(data.isActive.value && props.locationStrategy), reset => {
      vue.watch(() => props.locationStrategy, reset);
      vue.onScopeDispose(() => {
        updateLocation.value = undefined;
      });
      if (typeof props.locationStrategy === 'function') {
        updateLocation.value = props.locationStrategy(data, props, contentStyles)?.updateLocation;
      } else {
        updateLocation.value = locationStrategies[props.locationStrategy](data, props, contentStyles)?.updateLocation;
      }
    });
    window.addEventListener('resize', onResize, {
      passive: true
    });
    vue.onScopeDispose(() => {
      window.removeEventListener('resize', onResize);
      updateLocation.value = undefined;
    });
  }
  function onResize(e) {
    updateLocation.value?.(e);
  }
  return {
    contentStyles,
    updateLocation
  };
}
function staticLocationStrategy() {
  // TODO
}

/** Get size of element ignoring max-width/max-height */
function getIntrinsicSize(el, isRtl) {
  // const scrollables = new Map<Element, [number, number]>()
  // el.querySelectorAll('*').forEach(el => {
  //   const x = el.scrollLeft
  //   const y = el.scrollTop
  //   if (x || y) {
  //     scrollables.set(el, [x, y])
  //   }
  // })

  // const initialMaxWidth = el.style.maxWidth
  // const initialMaxHeight = el.style.maxHeight
  // el.style.removeProperty('max-width')
  // el.style.removeProperty('max-height')

  if (isRtl) {
    el.style.removeProperty('left');
  } else {
    el.style.removeProperty('right');
  }

  /* eslint-disable-next-line sonarjs/prefer-immediate-return */
  const contentBox = nullifyTransforms(el);
  if (isRtl) {
    contentBox.x += parseFloat(el.style.right || 0);
  } else {
    contentBox.x -= parseFloat(el.style.left || 0);
  }
  contentBox.y -= parseFloat(el.style.top || 0);

  // el.style.maxWidth = initialMaxWidth
  // el.style.maxHeight = initialMaxHeight
  // scrollables.forEach((position, el) => {
  //   el.scrollTo(...position)
  // })

  return contentBox;
}
function connectedLocationStrategy(data, props, contentStyles) {
  const activatorFixed = isFixedPosition(data.activatorEl.value);
  if (activatorFixed) {
    Object.assign(contentStyles.value, {
      position: 'fixed',
      top: 0,
      [data.isRtl.value ? 'right' : 'left']: 0
    });
  }
  const {
    preferredAnchor,
    preferredOrigin
  } = destructComputed(() => {
    const parsedAnchor = parseAnchor(props.location, data.isRtl.value);
    const parsedOrigin = props.origin === 'overlap' ? parsedAnchor : props.origin === 'auto' ? flipSide(parsedAnchor) : parseAnchor(props.origin, data.isRtl.value);

    // Some combinations of props may produce an invalid origin
    if (parsedAnchor.side === parsedOrigin.side && parsedAnchor.align === flipAlign(parsedOrigin).align) {
      return {
        preferredAnchor: flipCorner(parsedAnchor),
        preferredOrigin: flipCorner(parsedOrigin)
      };
    } else {
      return {
        preferredAnchor: parsedAnchor,
        preferredOrigin: parsedOrigin
      };
    }
  });
  const [minWidth, minHeight, maxWidth, maxHeight] = ['minWidth', 'minHeight', 'maxWidth', 'maxHeight'].map(key => {
    return vue.computed(() => {
      const val = parseFloat(props[key]);
      return isNaN(val) ? Infinity : val;
    });
  });
  const offset = vue.computed(() => {
    if (Array.isArray(props.offset)) {
      return props.offset;
    }
    if (typeof props.offset === 'string') {
      const offset = props.offset.split(' ').map(parseFloat);
      if (offset.length < 2) offset.push(0);
      return offset;
    }
    return typeof props.offset === 'number' ? [props.offset, 0] : [0, 0];
  });
  let observe = false;
  const observer = new ResizeObserver(() => {
    if (observe) updateLocation();
  });
  vue.watch([data.activatorEl, data.contentEl], (_ref, _ref2) => {
    let [newActivatorEl, newContentEl] = _ref;
    let [oldActivatorEl, oldContentEl] = _ref2;
    if (oldActivatorEl) observer.unobserve(oldActivatorEl);
    if (newActivatorEl) observer.observe(newActivatorEl);
    if (oldContentEl) observer.unobserve(oldContentEl);
    if (newContentEl) observer.observe(newContentEl);
  }, {
    immediate: true
  });
  vue.onScopeDispose(() => {
    observer.disconnect();
  });

  // eslint-disable-next-line max-statements
  function updateLocation() {
    observe = false;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => observe = true);
    });
    if (!data.activatorEl.value || !data.contentEl.value) return;
    const targetBox = data.activatorEl.value.getBoundingClientRect();
    const contentBox = getIntrinsicSize(data.contentEl.value, data.isRtl.value);
    const scrollParents = getScrollParents(data.contentEl.value);
    const viewportMargin = 12;
    if (!scrollParents.length) {
      scrollParents.push(document.documentElement);
      if (!(data.contentEl.value.style.top && data.contentEl.value.style.left)) {
        contentBox.x -= parseFloat(document.documentElement.style.getPropertyValue('--v-body-scroll-x') || 0);
        contentBox.y -= parseFloat(document.documentElement.style.getPropertyValue('--v-body-scroll-y') || 0);
      }
    }
    const viewport = scrollParents.reduce((box, el) => {
      const rect = el.getBoundingClientRect();
      const scrollBox = new Box({
        x: el === document.documentElement ? 0 : rect.x,
        y: el === document.documentElement ? 0 : rect.y,
        width: el.clientWidth,
        height: el.clientHeight
      });
      if (box) {
        return new Box({
          x: Math.max(box.left, scrollBox.left),
          y: Math.max(box.top, scrollBox.top),
          width: Math.min(box.right, scrollBox.right) - Math.max(box.left, scrollBox.left),
          height: Math.min(box.bottom, scrollBox.bottom) - Math.max(box.top, scrollBox.top)
        });
      }
      return scrollBox;
    }, undefined);
    viewport.x += viewportMargin;
    viewport.y += viewportMargin;
    viewport.width -= viewportMargin * 2;
    viewport.height -= viewportMargin * 2;
    let placement = {
      anchor: preferredAnchor.value,
      origin: preferredOrigin.value
    };
    function checkOverflow(_placement) {
      const box = new Box(contentBox);
      const targetPoint = anchorToPoint(_placement.anchor, targetBox);
      const contentPoint = anchorToPoint(_placement.origin, box);
      let {
        x,
        y
      } = getOffset(targetPoint, contentPoint);
      switch (_placement.anchor.side) {
        case 'top':
          y -= offset.value[0];
          break;
        case 'bottom':
          y += offset.value[0];
          break;
        case 'left':
          x -= offset.value[0];
          break;
        case 'right':
          x += offset.value[0];
          break;
      }
      switch (_placement.anchor.align) {
        case 'top':
          y -= offset.value[1];
          break;
        case 'bottom':
          y += offset.value[1];
          break;
        case 'left':
          x -= offset.value[1];
          break;
        case 'right':
          x += offset.value[1];
          break;
      }
      box.x += x;
      box.y += y;
      box.width = Math.min(box.width, maxWidth.value);
      box.height = Math.min(box.height, maxHeight.value);
      const overflows = getOverflow(box, viewport);
      return {
        overflows,
        x,
        y
      };
    }
    let x = 0;
    let y = 0;
    const available = {
      x: 0,
      y: 0
    };
    const flipped = {
      x: false,
      y: false
    };
    let resets = -1;
    while (true) {
      if (resets++ > 10) {
        consoleError('Infinite loop detected in connectedLocationStrategy');
        break;
      }
      const {
        x: _x,
        y: _y,
        overflows
      } = checkOverflow(placement);
      x += _x;
      y += _y;
      contentBox.x += _x;
      contentBox.y += _y;

      // flip
      {
        const axis = getAxis(placement.anchor);
        const hasOverflowX = overflows.x.before || overflows.x.after;
        const hasOverflowY = overflows.y.before || overflows.y.after;
        let reset = false;
        ['x', 'y'].forEach(key => {
          if (key === 'x' && hasOverflowX && !flipped.x || key === 'y' && hasOverflowY && !flipped.y) {
            const newPlacement = {
              anchor: {
                ...placement.anchor
              },
              origin: {
                ...placement.origin
              }
            };
            const flip = key === 'x' ? axis === 'y' ? flipAlign : flipSide : axis === 'y' ? flipSide : flipAlign;
            newPlacement.anchor = flip(newPlacement.anchor);
            newPlacement.origin = flip(newPlacement.origin);
            const {
              overflows: newOverflows
            } = checkOverflow(newPlacement);
            if (newOverflows[key].before <= overflows[key].before && newOverflows[key].after <= overflows[key].after || newOverflows[key].before + newOverflows[key].after < (overflows[key].before + overflows[key].after) / 2) {
              placement = newPlacement;
              reset = flipped[key] = true;
            }
          }
        });
        if (reset) continue;
      }

      // shift
      if (overflows.x.before) {
        x += overflows.x.before;
        contentBox.x += overflows.x.before;
      }
      if (overflows.x.after) {
        x -= overflows.x.after;
        contentBox.x -= overflows.x.after;
      }
      if (overflows.y.before) {
        y += overflows.y.before;
        contentBox.y += overflows.y.before;
      }
      if (overflows.y.after) {
        y -= overflows.y.after;
        contentBox.y -= overflows.y.after;
      }

      // size
      {
        const overflows = getOverflow(contentBox, viewport);
        available.x = viewport.width - overflows.x.before - overflows.x.after;
        available.y = viewport.height - overflows.y.before - overflows.y.after;
        x += overflows.x.before;
        contentBox.x += overflows.x.before;
        y += overflows.y.before;
        contentBox.y += overflows.y.before;
      }
      break;
    }
    const axis = getAxis(placement.anchor);
    Object.assign(contentStyles.value, {
      '--v-overlay-anchor-origin': `${placement.anchor.side} ${placement.anchor.align}`,
      transformOrigin: `${placement.origin.side} ${placement.origin.align}`,
      // transform: `translate(${pixelRound(x)}px, ${pixelRound(y)}px)`,
      top: convertToUnit(pixelRound(y)),
      left: data.isRtl.value ? undefined : convertToUnit(pixelRound(x)),
      right: data.isRtl.value ? convertToUnit(pixelRound(-x)) : undefined,
      minWidth: convertToUnit(axis === 'y' ? Math.min(minWidth.value, targetBox.width) : minWidth.value),
      maxWidth: convertToUnit(pixelCeil(clamp(available.x, minWidth.value === Infinity ? 0 : minWidth.value, maxWidth.value))),
      maxHeight: convertToUnit(pixelCeil(clamp(available.y, minHeight.value === Infinity ? 0 : minHeight.value, maxHeight.value)))
    });
    return {
      available,
      contentBox
    };
  }
  vue.watch(() => [preferredAnchor.value, preferredOrigin.value, props.offset, props.minWidth, props.minHeight, props.maxWidth, props.maxHeight], () => updateLocation());
  vue.nextTick(() => {
    const result = updateLocation();

    // TODO: overflowing content should only require a single updateLocation call
    // Icky hack to make sure the content is positioned consistently
    if (!result) return;
    const {
      available,
      contentBox
    } = result;
    if (contentBox.height > available.y) {
      requestAnimationFrame(() => {
        updateLocation();
        requestAnimationFrame(() => {
          updateLocation();
        });
      });
    }
  });
  return {
    updateLocation
  };
}
function pixelRound(val) {
  return Math.round(val * devicePixelRatio) / devicePixelRatio;
}
function pixelCeil(val) {
  return Math.ceil(val * devicePixelRatio) / devicePixelRatio;
}

let clean = true;
const frames = [];

/**
 * Schedule a task to run in an animation frame on its own
 * This is useful for heavy tasks that may cause jank if all ran together
 */
function requestNewFrame(cb) {
  if (!clean || frames.length) {
    frames.push(cb);
    run();
  } else {
    clean = false;
    cb();
    run();
  }
}
let raf = -1;
function run() {
  cancelAnimationFrame(raf);
  raf = requestAnimationFrame(() => {
    const frame = frames.shift();
    if (frame) frame();
    if (frames.length) run();else clean = true;
  });
}

// Utilities
const scrollStrategies = {
  none: null,
  close: closeScrollStrategy,
  block: blockScrollStrategy,
  reposition: repositionScrollStrategy
};
const makeScrollStrategyProps = propsFactory({
  scrollStrategy: {
    type: [String, Function],
    default: 'block',
    validator: val => typeof val === 'function' || val in scrollStrategies
  }
}, 'VOverlay-scroll-strategies');
function useScrollStrategies(props, data) {
  if (!IN_BROWSER) return;
  let scope;
  vue.watchEffect(async () => {
    scope?.stop();
    if (!(data.isActive.value && props.scrollStrategy)) return;
    scope = vue.effectScope();
    await vue.nextTick();
    scope.active && scope.run(() => {
      if (typeof props.scrollStrategy === 'function') {
        props.scrollStrategy(data, props, scope);
      } else {
        scrollStrategies[props.scrollStrategy]?.(data, props, scope);
      }
    });
  });
  vue.onScopeDispose(() => {
    scope?.stop();
  });
}
function closeScrollStrategy(data) {
  function onScroll(e) {
    data.isActive.value = false;
  }
  bindScroll(data.activatorEl.value ?? data.contentEl.value, onScroll);
}
function blockScrollStrategy(data, props) {
  const offsetParent = data.root.value?.offsetParent;
  const scrollElements = [...new Set([...getScrollParents(data.activatorEl.value, props.contained ? offsetParent : undefined), ...getScrollParents(data.contentEl.value, props.contained ? offsetParent : undefined)])].filter(el => !el.classList.contains('v-overlay-scroll-blocked'));
  const scrollbarWidth = window.innerWidth - document.documentElement.offsetWidth;
  const scrollableParent = (el => hasScrollbar(el) && el)(offsetParent || document.documentElement);
  if (scrollableParent) {
    data.root.value.classList.add('v-overlay--scroll-blocked');
  }
  scrollElements.forEach((el, i) => {
    el.style.setProperty('--v-body-scroll-x', convertToUnit(-el.scrollLeft));
    el.style.setProperty('--v-body-scroll-y', convertToUnit(-el.scrollTop));
    if (el !== document.documentElement) {
      el.style.setProperty('--v-scrollbar-offset', convertToUnit(scrollbarWidth));
    }
    el.classList.add('v-overlay-scroll-blocked');
  });
  vue.onScopeDispose(() => {
    scrollElements.forEach((el, i) => {
      const x = parseFloat(el.style.getPropertyValue('--v-body-scroll-x'));
      const y = parseFloat(el.style.getPropertyValue('--v-body-scroll-y'));
      el.style.removeProperty('--v-body-scroll-x');
      el.style.removeProperty('--v-body-scroll-y');
      el.style.removeProperty('--v-scrollbar-offset');
      el.classList.remove('v-overlay-scroll-blocked');
      el.scrollLeft = -x;
      el.scrollTop = -y;
    });
    if (scrollableParent) {
      data.root.value.classList.remove('v-overlay--scroll-blocked');
    }
  });
}
function repositionScrollStrategy(data, props, scope) {
  let slow = false;
  let raf = -1;
  let ric = -1;
  function update(e) {
    requestNewFrame(() => {
      const start = performance.now();
      data.updateLocation.value?.(e);
      const time = performance.now() - start;
      slow = time / (1000 / 60) > 2;
    });
  }
  ric = (typeof requestIdleCallback === 'undefined' ? cb => cb() : requestIdleCallback)(() => {
    scope.run(() => {
      bindScroll(data.activatorEl.value ?? data.contentEl.value, e => {
        if (slow) {
          // If the position calculation is slow,
          // defer updates until scrolling is finished.
          // Browsers usually fire one scroll event per frame so
          // we just wait until we've got two frames without an event
          cancelAnimationFrame(raf);
          raf = requestAnimationFrame(() => {
            raf = requestAnimationFrame(() => {
              update(e);
            });
          });
        } else {
          update(e);
        }
      });
    });
  });
  vue.onScopeDispose(() => {
    typeof cancelIdleCallback !== 'undefined' && cancelIdleCallback(ric);
    cancelAnimationFrame(raf);
  });
}

/** @private */
function bindScroll(el, onScroll) {
  const scrollElements = [document, ...getScrollParents(el)];
  scrollElements.forEach(el => {
    el.addEventListener('scroll', onScroll, {
      passive: true
    });
  });
  vue.onScopeDispose(() => {
    scrollElements.forEach(el => {
      el.removeEventListener('scroll', onScroll);
    });
  });
}

// Types

const VMenuSymbol = Symbol.for('vuetify:v-menu');

// Utilities
// Composables
const makeDelayProps = propsFactory({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, 'delay');
function useDelay(props, cb) {
  const delays = {};
  const runDelayFactory = prop => () => {
    // istanbul ignore next
    if (!IN_BROWSER) return Promise.resolve(true);
    const active = prop === 'openDelay';
    delays.closeDelay && window.clearTimeout(delays.closeDelay);
    delete delays.closeDelay;
    delays.openDelay && window.clearTimeout(delays.openDelay);
    delete delays.openDelay;
    return new Promise(resolve => {
      const delay = parseInt(props[prop] ?? 0, 10);
      delays[prop] = window.setTimeout(() => {
        cb?.(active);
        resolve(active);
      }, delay);
    });
  };
  return {
    runCloseDelay: runDelayFactory('closeDelay'),
    runOpenDelay: runDelayFactory('openDelay')
  };
}

// Components
const makeActivatorProps = propsFactory({
  activator: [String, Object],
  activatorProps: {
    type: Object,
    default: () => ({})
  },
  openOnClick: {
    type: Boolean,
    default: undefined
  },
  openOnHover: Boolean,
  openOnFocus: {
    type: Boolean,
    default: undefined
  },
  closeOnContentClick: Boolean,
  ...makeDelayProps()
}, 'VOverlay-activator');
function useActivator(props, _ref) {
  let {
    isActive,
    isTop
  } = _ref;
  const activatorEl = vue.ref();
  let isHovered = false;
  let isFocused = false;
  let firstEnter = true;
  const openOnFocus = vue.computed(() => props.openOnFocus || props.openOnFocus == null && props.openOnHover);
  const openOnClick = vue.computed(() => props.openOnClick || props.openOnClick == null && !props.openOnHover && !openOnFocus.value);
  const {
    runOpenDelay,
    runCloseDelay
  } = useDelay(props, value => {
    if (value === (props.openOnHover && isHovered || openOnFocus.value && isFocused) && !(props.openOnHover && isActive.value && !isTop.value)) {
      if (isActive.value !== value) {
        firstEnter = true;
      }
      isActive.value = value;
    }
  });
  const availableEvents = {
    onClick: e => {
      e.stopPropagation();
      activatorEl.value = e.currentTarget || e.target;
      isActive.value = !isActive.value;
    },
    onMouseenter: e => {
      if (e.sourceCapabilities?.firesTouchEvents) return;
      isHovered = true;
      activatorEl.value = e.currentTarget || e.target;
      runOpenDelay();
    },
    onMouseleave: e => {
      isHovered = false;
      runCloseDelay();
    },
    onFocus: e => {
      if (matchesSelector(e.target, ':focus-visible') === false) return;
      isFocused = true;
      e.stopPropagation();
      activatorEl.value = e.currentTarget || e.target;
      runOpenDelay();
    },
    onBlur: e => {
      isFocused = false;
      e.stopPropagation();
      runCloseDelay();
    }
  };
  const activatorEvents = vue.computed(() => {
    const events = {};
    if (openOnClick.value) {
      events.onClick = availableEvents.onClick;
    }
    if (props.openOnHover) {
      events.onMouseenter = availableEvents.onMouseenter;
      events.onMouseleave = availableEvents.onMouseleave;
    }
    if (openOnFocus.value) {
      events.onFocus = availableEvents.onFocus;
      events.onBlur = availableEvents.onBlur;
    }
    return events;
  });
  const contentEvents = vue.computed(() => {
    const events = {};
    if (props.openOnHover) {
      events.onMouseenter = () => {
        isHovered = true;
        runOpenDelay();
      };
      events.onMouseleave = () => {
        isHovered = false;
        runCloseDelay();
      };
    }
    if (openOnFocus.value) {
      events.onFocusin = () => {
        isFocused = true;
        runOpenDelay();
      };
      events.onFocusout = () => {
        isFocused = false;
        runCloseDelay();
      };
    }
    if (props.closeOnContentClick) {
      const menu = vue.inject(VMenuSymbol, null);
      events.onClick = () => {
        isActive.value = false;
        menu?.closeParents();
      };
    }
    return events;
  });
  const scrimEvents = vue.computed(() => {
    const events = {};
    if (props.openOnHover) {
      events.onMouseenter = () => {
        if (firstEnter) {
          isHovered = true;
          firstEnter = false;
          runOpenDelay();
        }
      };
      events.onMouseleave = () => {
        isHovered = false;
        runCloseDelay();
      };
    }
    return events;
  });
  vue.watch(isTop, val => {
    if (val && (props.openOnHover && !isHovered && (!openOnFocus.value || !isFocused) || openOnFocus.value && !isFocused && (!props.openOnHover || !isHovered))) {
      isActive.value = false;
    }
  });
  const activatorRef = vue.ref();
  vue.watchEffect(() => {
    if (!activatorRef.value) return;
    vue.nextTick(() => {
      activatorEl.value = refElement(activatorRef.value);
    });
  });
  const vm = getCurrentInstance('useActivator');
  let scope;
  vue.watch(() => !!props.activator, val => {
    if (val && IN_BROWSER) {
      scope = vue.effectScope();
      scope.run(() => {
        _useActivator(props, vm, {
          activatorEl,
          activatorEvents
        });
      });
    } else if (scope) {
      scope.stop();
    }
  }, {
    flush: 'post',
    immediate: true
  });
  vue.onScopeDispose(() => {
    scope?.stop();
  });
  return {
    activatorEl,
    activatorRef,
    activatorEvents,
    contentEvents,
    scrimEvents
  };
}
function _useActivator(props, vm, _ref2) {
  let {
    activatorEl,
    activatorEvents
  } = _ref2;
  vue.watch(() => props.activator, (val, oldVal) => {
    if (oldVal && val !== oldVal) {
      const activator = getActivator(oldVal);
      activator && unbindActivatorProps(activator);
    }
    if (val) {
      vue.nextTick(() => bindActivatorProps());
    }
  }, {
    immediate: true
  });
  vue.watch(() => props.activatorProps, () => {
    bindActivatorProps();
  });
  vue.onScopeDispose(() => {
    unbindActivatorProps();
  });
  function bindActivatorProps() {
    let el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getActivator();
    let _props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : props.activatorProps;
    if (!el) return;
    bindProps(el, vue.mergeProps(activatorEvents.value, _props));
  }
  function unbindActivatorProps() {
    let el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getActivator();
    let _props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : props.activatorProps;
    if (!el) return;
    unbindProps(el, vue.mergeProps(activatorEvents.value, _props));
  }
  function getActivator() {
    let selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : props.activator;
    let activator;
    if (selector) {
      if (selector === 'parent') {
        let el = vm?.proxy?.$el?.parentNode;
        while (el?.hasAttribute('data-no-activator')) {
          el = el.parentNode;
        }
        activator = el;
      } else if (typeof selector === 'string') {
        // Selector
        activator = document.querySelector(selector);
      } else if ('$el' in selector) {
        // Component (ref)
        activator = selector.$el;
      } else {
        // HTMLElement | Element
        activator = selector;
      }
    }

    // The activator should only be a valid element (Ignore comments and text nodes)
    activatorEl.value = activator?.nodeType === Node.ELEMENT_NODE ? activator : null;
    return activatorEl.value;
  }
}

// Utilities
const breakpoints = ['sm', 'md', 'lg', 'xl', 'xxl']; // no xs

const DisplaySymbol = Symbol.for('vuetify:display');
function useDisplay() {
  const display = vue.inject(DisplaySymbol);
  if (!display) throw new Error('Could not find Vuetify display injection');
  return display;
}

// Composables
function useHydration() {
  if (!IN_BROWSER) return vue.shallowRef(false);
  const {
    ssr
  } = useDisplay();
  if (ssr) {
    const isMounted = vue.shallowRef(false);
    vue.onMounted(() => {
      isMounted.value = true;
    });
    return isMounted;
  } else {
    return vue.shallowRef(true);
  }
}

// Utilities
const makeLazyProps = propsFactory({
  eager: Boolean
}, 'lazy');
function useLazy(props, active) {
  const isBooted = vue.shallowRef(false);
  const hasContent = vue.computed(() => isBooted.value || props.eager || active.value);
  vue.watch(active, () => isBooted.value = true);
  function onAfterLeave() {
    if (!props.eager) isBooted.value = false;
  }
  return {
    isBooted,
    hasContent,
    onAfterLeave
  };
}

// Utilities
function useScopeId() {
  const vm = getCurrentInstance('useScopeId');
  const scopeId = vm.vnode.scopeId;
  return {
    scopeId: scopeId ? {
      [scopeId]: ''
    } : undefined
  };
}

// Composables
const StackSymbol = Symbol.for('vuetify:stack');
const globalStack = vue.reactive([]);
function useStack(isActive, zIndex, disableGlobalStack) {
  const vm = getCurrentInstance('useStack');
  const createStackEntry = !disableGlobalStack;
  const parent = vue.inject(StackSymbol, undefined);
  const stack = vue.reactive({
    activeChildren: new Set()
  });
  vue.provide(StackSymbol, stack);
  const _zIndex = vue.shallowRef(+zIndex.value);
  useToggleScope(isActive, () => {
    const lastZIndex = globalStack.at(-1)?.[1];
    _zIndex.value = lastZIndex ? lastZIndex + 10 : +zIndex.value;
    if (createStackEntry) {
      globalStack.push([vm.uid, _zIndex.value]);
    }
    parent?.activeChildren.add(vm.uid);
    vue.onScopeDispose(() => {
      if (createStackEntry) {
        const idx = vue.toRaw(globalStack).findIndex(v => v[0] === vm.uid);
        globalStack.splice(idx, 1);
      }
      parent?.activeChildren.delete(vm.uid);
    });
  });
  const globalTop = vue.shallowRef(true);
  if (createStackEntry) {
    vue.watchEffect(() => {
      const _isTop = globalStack.at(-1)?.[0] === vm.uid;
      setTimeout(() => globalTop.value = _isTop);
    });
  }
  const localTop = vue.computed(() => !stack.activeChildren.size);
  return {
    globalTop: vue.readonly(globalTop),
    localTop,
    stackStyles: vue.computed(() => ({
      zIndex: _zIndex.value
    }))
  };
}

// Utilities
function useTeleport(target) {
  const teleportTarget = vue.computed(() => {
    const _target = target.value;
    if (_target === true || !IN_BROWSER) return undefined;
    const targetElement = _target === false ? document.body : typeof _target === 'string' ? document.querySelector(_target) : _target;
    if (targetElement == null) {
      vue.warn(`Unable to locate target ${_target}`);
      return undefined;
    }
    let container = targetElement.querySelector(':scope > .v-overlay-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'v-overlay-container';
      targetElement.appendChild(container);
    }
    return container;
  });
  return {
    teleportTarget
  };
}

// Utilities
function defaultConditional() {
  return true;
}
function checkEvent(e, el, binding) {
  // The include element callbacks below can be expensive
  // so we should avoid calling them when we're not active.
  // Explicitly check for false to allow fallback compatibility
  // with non-toggleable components
  if (!e || checkIsActive(e, binding) === false) return false;

  // If we're clicking inside the shadowroot, then the app root doesn't get the same
  // level of introspection as to _what_ we're clicking. We want to check to see if
  // our target is the shadowroot parent container, and if it is, ignore.
  const root = attachedRoot(el);
  if (typeof ShadowRoot !== 'undefined' && root instanceof ShadowRoot && root.host === e.target) return false;

  // Check if additional elements were passed to be included in check
  // (click must be outside all included elements, if any)
  const elements = (typeof binding.value === 'object' && binding.value.include || (() => []))();
  // Add the root element for the component this directive was defined on
  elements.push(el);

  // Check if it's a click outside our elements, and then if our callback returns true.
  // Non-toggleable components should take action in their callback and return falsy.
  // Toggleable can return true if it wants to deactivate.
  // Note that, because we're in the capture phase, this callback will occur before
  // the bubbling click event on any outside elements.
  return !elements.some(el => el?.contains(e.target));
}
function checkIsActive(e, binding) {
  const isActive = typeof binding.value === 'object' && binding.value.closeConditional || defaultConditional;
  return isActive(e);
}
function directive(e, el, binding) {
  const handler = typeof binding.value === 'function' ? binding.value : binding.value.handler;
  el._clickOutside.lastMousedownWasOutside && checkEvent(e, el, binding) && setTimeout(() => {
    checkIsActive(e, binding) && handler && handler(e);
  }, 0);
}
function handleShadow(el, callback) {
  const root = attachedRoot(el);
  callback(document);
  if (typeof ShadowRoot !== 'undefined' && root instanceof ShadowRoot) {
    callback(root);
  }
}
const ClickOutside = {
  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  mounted(el, binding) {
    const onClick = e => directive(e, el, binding);
    const onMousedown = e => {
      el._clickOutside.lastMousedownWasOutside = checkEvent(e, el, binding);
    };
    handleShadow(el, app => {
      app.addEventListener('click', onClick, true);
      app.addEventListener('mousedown', onMousedown, true);
    });
    if (!el._clickOutside) {
      el._clickOutside = {
        lastMousedownWasOutside: false
      };
    }
    el._clickOutside[binding.instance.$.uid] = {
      onClick,
      onMousedown
    };
  },
  unmounted(el, binding) {
    if (!el._clickOutside) return;
    handleShadow(el, app => {
      if (!app || !el._clickOutside?.[binding.instance.$.uid]) return;
      const {
        onClick,
        onMousedown
      } = el._clickOutside[binding.instance.$.uid];
      app.removeEventListener('click', onClick, true);
      app.removeEventListener('mousedown', onMousedown, true);
    });
    delete el._clickOutside[binding.instance.$.uid];
  }
};

function Scrim(props) {
  const {
    modelValue,
    color,
    ...rest
  } = props;
  return vue.createVNode(vue.Transition, {
    "name": "fade-transition",
    "appear": true
  }, {
    default: () => [props.modelValue && vue.createVNode("div", vue.mergeProps({
      "class": ['v-overlay__scrim', props.color.backgroundColorClasses.value],
      "style": props.color.backgroundColorStyles.value
    }, rest), null)]
  });
}
const makeVOverlayProps = propsFactory({
  absolute: Boolean,
  attach: [Boolean, String, Object],
  closeOnBack: {
    type: Boolean,
    default: true
  },
  contained: Boolean,
  contentClass: null,
  contentProps: null,
  disabled: Boolean,
  noClickAnimation: Boolean,
  modelValue: Boolean,
  persistent: Boolean,
  scrim: {
    type: [Boolean, String],
    default: true
  },
  zIndex: {
    type: [Number, String],
    default: 2000
  },
  ...makeActivatorProps(),
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeLazyProps(),
  ...makeLocationStrategyProps(),
  ...makeScrollStrategyProps(),
  ...makeThemeProps(),
  ...makeTransitionProps$1()
}, 'VOverlay');
const VOverlay = genericComponent()({
  name: 'VOverlay',
  directives: {
    ClickOutside
  },
  inheritAttrs: false,
  props: {
    _disableGlobalStack: Boolean,
    ...makeVOverlayProps()
  },
  emits: {
    'click:outside': e => true,
    'update:modelValue': value => true,
    afterLeave: () => true
  },
  setup(props, _ref) {
    let {
      slots,
      attrs,
      emit
    } = _ref;
    const model = useProxiedModel(props, 'modelValue');
    const isActive = vue.computed({
      get: () => model.value,
      set: v => {
        if (!(v && props.disabled)) model.value = v;
      }
    });
    const {
      teleportTarget
    } = useTeleport(vue.computed(() => props.attach || props.contained));
    const {
      themeClasses
    } = provideTheme(props);
    const {
      rtlClasses,
      isRtl
    } = useRtl();
    const {
      hasContent,
      onAfterLeave
    } = useLazy(props, isActive);
    const scrimColor = useBackgroundColor(vue.computed(() => {
      return typeof props.scrim === 'string' ? props.scrim : null;
    }));
    const {
      globalTop,
      localTop,
      stackStyles
    } = useStack(isActive, vue.toRef(props, 'zIndex'), props._disableGlobalStack);
    const {
      activatorEl,
      activatorRef,
      activatorEvents,
      contentEvents,
      scrimEvents
    } = useActivator(props, {
      isActive,
      isTop: localTop
    });
    const {
      dimensionStyles
    } = useDimension(props);
    const isMounted = useHydration();
    const {
      scopeId
    } = useScopeId();
    vue.watch(() => props.disabled, v => {
      if (v) isActive.value = false;
    });
    const root = vue.ref();
    const contentEl = vue.ref();
    const {
      contentStyles,
      updateLocation
    } = useLocationStrategies(props, {
      isRtl,
      contentEl,
      activatorEl,
      isActive
    });
    useScrollStrategies(props, {
      root,
      contentEl,
      activatorEl,
      isActive,
      updateLocation
    });
    function onClickOutside(e) {
      emit('click:outside', e);
      if (!props.persistent) isActive.value = false;else animateClick();
    }
    function closeConditional() {
      return isActive.value && globalTop.value;
    }
    IN_BROWSER && vue.watch(isActive, val => {
      if (val) {
        window.addEventListener('keydown', onKeydown);
      } else {
        window.removeEventListener('keydown', onKeydown);
      }
    }, {
      immediate: true
    });
    function onKeydown(e) {
      if (e.key === 'Escape' && globalTop.value) {
        if (!props.persistent) {
          isActive.value = false;
          if (contentEl.value?.contains(document.activeElement)) {
            activatorEl.value?.focus();
          }
        } else animateClick();
      }
    }
    const router = useRouter();
    useToggleScope(() => props.closeOnBack, () => {
      useBackButton(router, next => {
        if (globalTop.value && isActive.value) {
          next(false);
          if (!props.persistent) isActive.value = false;else animateClick();
        } else {
          next();
        }
      });
    });
    const top = vue.ref();
    vue.watch(() => isActive.value && (props.absolute || props.contained) && teleportTarget.value == null, val => {
      if (val) {
        const scrollParent = getScrollParent(root.value);
        if (scrollParent && scrollParent !== document.scrollingElement) {
          top.value = scrollParent.scrollTop;
        }
      }
    });

    // Add a quick "bounce" animation to the content
    function animateClick() {
      if (props.noClickAnimation) return;
      contentEl.value && animate(contentEl.value, [{
        transformOrigin: 'center'
      }, {
        transform: 'scale(1.03)'
      }, {
        transformOrigin: 'center'
      }], {
        duration: 150,
        easing: standardEasing
      });
    }
    useRender(() => vue.createVNode(vue.Fragment, null, [slots.activator?.({
      isActive: isActive.value,
      props: vue.mergeProps({
        ref: activatorRef
      }, activatorEvents.value, props.activatorProps)
    }), isMounted.value && hasContent.value && vue.createVNode(vue.Teleport, {
      "disabled": !teleportTarget.value,
      "to": teleportTarget.value
    }, {
      default: () => [vue.createVNode("div", vue.mergeProps({
        "class": ['v-overlay', {
          'v-overlay--absolute': props.absolute || props.contained,
          'v-overlay--active': isActive.value,
          'v-overlay--contained': props.contained
        }, themeClasses.value, rtlClasses.value, props.class],
        "style": [stackStyles.value, {
          top: convertToUnit(top.value)
        }, props.style],
        "ref": root
      }, scopeId, attrs), [vue.createVNode(Scrim, vue.mergeProps({
        "color": scrimColor,
        "modelValue": isActive.value && !!props.scrim
      }, scrimEvents.value), null), vue.createVNode(MaybeTransition, {
        "appear": true,
        "persisted": true,
        "transition": props.transition,
        "target": activatorEl.value,
        "onAfterLeave": () => {
          onAfterLeave();
          emit('afterLeave');
        }
      }, {
        default: () => [vue.withDirectives(vue.createVNode("div", vue.mergeProps({
          "ref": contentEl,
          "class": ['v-overlay__content', props.contentClass],
          "style": [dimensionStyles.value, contentStyles.value]
        }, contentEvents.value, props.contentProps), [slots.default?.({
          isActive
        })]), [[vue.vShow, isActive.value], [vue.resolveDirective("click-outside"), {
          handler: onClickOutside,
          closeConditional,
          include: () => [activatorEl.value]
        }]])]
      })])]
    })]));
    return {
      activatorEl,
      animateClick,
      contentEl,
      globalTop,
      localTop,
      updateLocation
    };
  }
});

// Types

const Refs = Symbol('Forwarded refs');

/** Omit properties starting with P */

function getDescriptor(obj, key) {
  let currentObj = obj;
  while (currentObj) {
    const descriptor = Reflect.getOwnPropertyDescriptor(currentObj, key);
    if (descriptor) return descriptor;
    currentObj = Object.getPrototypeOf(currentObj);
  }
  return undefined;
}
function forwardRefs(target) {
  for (var _len = arguments.length, refs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    refs[_key - 1] = arguments[_key];
  }
  target[Refs] = refs;
  return new Proxy(target, {
    get(target, key) {
      if (Reflect.has(target, key)) {
        return Reflect.get(target, key);
      }

      // Skip internal properties
      if (typeof key === 'symbol' || key.startsWith('__')) return;
      for (const ref of refs) {
        if (ref.value && Reflect.has(ref.value, key)) {
          const val = Reflect.get(ref.value, key);
          return typeof val === 'function' ? val.bind(ref.value) : val;
        }
      }
    },
    has(target, key) {
      if (Reflect.has(target, key)) {
        return true;
      }

      // Skip internal properties
      if (typeof key === 'symbol' || key.startsWith('__')) return false;
      for (const ref of refs) {
        if (ref.value && Reflect.has(ref.value, key)) {
          return true;
        }
      }
      return false;
    },
    set(target, key, value) {
      if (Reflect.has(target, key)) {
        return Reflect.set(target, key, value);
      }

      // Skip internal properties
      if (typeof key === 'symbol' || key.startsWith('__')) return false;
      for (const ref of refs) {
        if (ref.value && Reflect.has(ref.value, key)) {
          return Reflect.set(ref.value, key, value);
        }
      }
      return false;
    },
    getOwnPropertyDescriptor(target, key) {
      const descriptor = Reflect.getOwnPropertyDescriptor(target, key);
      if (descriptor) return descriptor;

      // Skip internal properties
      if (typeof key === 'symbol' || key.startsWith('__')) return;

      // Check each ref's own properties
      for (const ref of refs) {
        if (!ref.value) continue;
        const descriptor = getDescriptor(ref.value, key) ?? ('_' in ref.value ? getDescriptor(ref.value._?.setupState, key) : undefined);
        if (descriptor) return descriptor;
      }

      // Recursive search up each ref's prototype
      for (const ref of refs) {
        const childRefs = ref.value && ref.value[Refs];
        if (!childRefs) continue;
        const queue = childRefs.slice();
        while (queue.length) {
          const ref = queue.shift();
          const descriptor = getDescriptor(ref.value, key);
          if (descriptor) return descriptor;
          const childRefs = ref.value && ref.value[Refs];
          if (childRefs) queue.push(...childRefs);
        }
      }
      return undefined;
    }
  });
}

const makeVDialogProps = propsFactory({
  fullscreen: Boolean,
  retainFocus: {
    type: Boolean,
    default: true
  },
  scrollable: Boolean,
  ...makeVOverlayProps({
    origin: 'center center',
    scrollStrategy: 'block',
    transition: {
      component: VDialogTransition
    },
    zIndex: 2400
  })
}, 'VDialog');
const VDialog = genericComponent()({
  name: 'VDialog',
  props: makeVDialogProps(),
  emits: {
    'update:modelValue': value => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const isActive = useProxiedModel(props, 'modelValue');
    const {
      scopeId
    } = useScopeId();
    const overlay = vue.ref();
    function onFocusin(e) {
      const before = e.relatedTarget;
      const after = e.target;
      if (before !== after && overlay.value?.contentEl &&
      // We're the topmost dialog
      overlay.value?.globalTop &&
      // It isn't the document or the dialog body
      ![document, overlay.value.contentEl].includes(after) &&
      // It isn't inside the dialog body
      !overlay.value.contentEl.contains(after)) {
        const focusable = focusableChildren(overlay.value.contentEl);
        if (!focusable.length) return;
        const firstElement = focusable[0];
        const lastElement = focusable[focusable.length - 1];
        if (before === firstElement) {
          lastElement.focus();
        } else {
          firstElement.focus();
        }
      }
    }
    if (IN_BROWSER) {
      vue.watch(() => isActive.value && props.retainFocus, val => {
        val ? document.addEventListener('focusin', onFocusin) : document.removeEventListener('focusin', onFocusin);
      }, {
        immediate: true
      });
    }
    vue.watch(isActive, async val => {
      await vue.nextTick();
      if (val) {
        overlay.value.contentEl?.focus({
          preventScroll: true
        });
      } else {
        overlay.value.activatorEl?.focus({
          preventScroll: true
        });
      }
    });
    const activatorProps = vue.computed(() => vue.mergeProps({
      'aria-haspopup': 'dialog',
      'aria-expanded': String(isActive.value)
    }, props.activatorProps));
    useRender(() => {
      const [overlayProps] = VOverlay.filterProps(props);
      return vue.createVNode(VOverlay, vue.mergeProps({
        "ref": overlay,
        "class": ['v-dialog', {
          'v-dialog--fullscreen': props.fullscreen,
          'v-dialog--scrollable': props.scrollable
        }, props.class],
        "style": props.style
      }, overlayProps, {
        "modelValue": isActive.value,
        "onUpdate:modelValue": $event => isActive.value = $event,
        "aria-modal": "true",
        "activatorProps": activatorProps.value,
        "role": "dialog"
      }, scopeId), {
        activator: slots.activator,
        default: function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return vue.createVNode(VDefaultsProvider, {
            "root": "VDialog"
          }, {
            default: () => [slots.default?.(...args)]
          });
        }
      });
    });
    return forwardRefs({}, overlay);
  }
});

var css_248z$d = ".v-container {\n  width: 100%;\n  padding: 16px;\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 960px) {\n  .v-container {\n    max-width: 900px;\n  }\n}\n@media (min-width: 1280px) {\n  .v-container {\n    max-width: 1200px;\n  }\n}\n@media (min-width: 1920px) {\n  .v-container {\n    max-width: 1800px;\n  }\n}\n@media (min-width: 2560px) {\n  .v-container {\n    max-width: 2400px;\n  }\n}\n.v-container--fluid {\n  max-width: 100%;\n}\n.v-container.fill-height {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.v-row {\n  display: flex;\n  flex-wrap: wrap;\n  flex: 1 1 auto;\n  margin: -12px;\n}\n.v-row + .v-row {\n  margin-top: 12px;\n}\n.v-row + .v-row--dense {\n  margin-top: 4px;\n}\n.v-row--dense {\n  margin: -4px;\n}\n.v-row--dense > .v-col,\n.v-row--dense > [class*=v-col-] {\n  padding: 4px;\n}\n.v-row.v-row--no-gutters {\n  margin: 0;\n}\n.v-row.v-row--no-gutters > .v-col,\n.v-row.v-row--no-gutters > [class*=v-col-] {\n  padding: 0;\n}\n\n.v-spacer {\n  flex-grow: 1;\n}\n\n.v-col-xxl,\n.v-col-xxl-auto, .v-col-xxl-12, .v-col-xxl-11, .v-col-xxl-10, .v-col-xxl-9, .v-col-xxl-8, .v-col-xxl-7, .v-col-xxl-6, .v-col-xxl-5, .v-col-xxl-4, .v-col-xxl-3, .v-col-xxl-2, .v-col-xxl-1, .v-col-xl,\n.v-col-xl-auto, .v-col-xl-12, .v-col-xl-11, .v-col-xl-10, .v-col-xl-9, .v-col-xl-8, .v-col-xl-7, .v-col-xl-6, .v-col-xl-5, .v-col-xl-4, .v-col-xl-3, .v-col-xl-2, .v-col-xl-1, .v-col-lg,\n.v-col-lg-auto, .v-col-lg-12, .v-col-lg-11, .v-col-lg-10, .v-col-lg-9, .v-col-lg-8, .v-col-lg-7, .v-col-lg-6, .v-col-lg-5, .v-col-lg-4, .v-col-lg-3, .v-col-lg-2, .v-col-lg-1, .v-col-md,\n.v-col-md-auto, .v-col-md-12, .v-col-md-11, .v-col-md-10, .v-col-md-9, .v-col-md-8, .v-col-md-7, .v-col-md-6, .v-col-md-5, .v-col-md-4, .v-col-md-3, .v-col-md-2, .v-col-md-1, .v-col-sm,\n.v-col-sm-auto, .v-col-sm-12, .v-col-sm-11, .v-col-sm-10, .v-col-sm-9, .v-col-sm-8, .v-col-sm-7, .v-col-sm-6, .v-col-sm-5, .v-col-sm-4, .v-col-sm-3, .v-col-sm-2, .v-col-sm-1, .v-col,\n.v-col-auto, .v-col-12, .v-col-11, .v-col-10, .v-col-9, .v-col-8, .v-col-7, .v-col-6, .v-col-5, .v-col-4, .v-col-3, .v-col-2, .v-col-1 {\n  width: 100%;\n  padding: 12px;\n}\n\n.v-col {\n  flex-basis: 0;\n  flex-grow: 1;\n  max-width: 100%;\n}\n\n.v-col-auto {\n  flex: 0 0 auto;\n  width: auto;\n  max-width: 100%;\n}\n\n.v-col-1 {\n  flex: 0 0 8.3333333333%;\n  max-width: 8.3333333333%;\n}\n\n.v-col-2 {\n  flex: 0 0 16.6666666667%;\n  max-width: 16.6666666667%;\n}\n\n.v-col-3 {\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n\n.v-col-4 {\n  flex: 0 0 33.3333333333%;\n  max-width: 33.3333333333%;\n}\n\n.v-col-5 {\n  flex: 0 0 41.6666666667%;\n  max-width: 41.6666666667%;\n}\n\n.v-col-6 {\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n\n.v-col-7 {\n  flex: 0 0 58.3333333333%;\n  max-width: 58.3333333333%;\n}\n\n.v-col-8 {\n  flex: 0 0 66.6666666667%;\n  max-width: 66.6666666667%;\n}\n\n.v-col-9 {\n  flex: 0 0 75%;\n  max-width: 75%;\n}\n\n.v-col-10 {\n  flex: 0 0 83.3333333333%;\n  max-width: 83.3333333333%;\n}\n\n.v-col-11 {\n  flex: 0 0 91.6666666667%;\n  max-width: 91.6666666667%;\n}\n\n.v-col-12 {\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n\n.v-locale--is-ltr.offset-1, .v-locale--is-ltr .offset-1 {\n  margin-left: 8.3333333333%;\n}\n\n.v-locale--is-rtl.offset-1, .v-locale--is-rtl .offset-1 {\n  margin-right: 8.3333333333%;\n}\n\n.v-locale--is-ltr.offset-2, .v-locale--is-ltr .offset-2 {\n  margin-left: 16.6666666667%;\n}\n\n.v-locale--is-rtl.offset-2, .v-locale--is-rtl .offset-2 {\n  margin-right: 16.6666666667%;\n}\n\n.v-locale--is-ltr.offset-3, .v-locale--is-ltr .offset-3 {\n  margin-left: 25%;\n}\n\n.v-locale--is-rtl.offset-3, .v-locale--is-rtl .offset-3 {\n  margin-right: 25%;\n}\n\n.v-locale--is-ltr.offset-4, .v-locale--is-ltr .offset-4 {\n  margin-left: 33.3333333333%;\n}\n\n.v-locale--is-rtl.offset-4, .v-locale--is-rtl .offset-4 {\n  margin-right: 33.3333333333%;\n}\n\n.v-locale--is-ltr.offset-5, .v-locale--is-ltr .offset-5 {\n  margin-left: 41.6666666667%;\n}\n\n.v-locale--is-rtl.offset-5, .v-locale--is-rtl .offset-5 {\n  margin-right: 41.6666666667%;\n}\n\n.v-locale--is-ltr.offset-6, .v-locale--is-ltr .offset-6 {\n  margin-left: 50%;\n}\n\n.v-locale--is-rtl.offset-6, .v-locale--is-rtl .offset-6 {\n  margin-right: 50%;\n}\n\n.v-locale--is-ltr.offset-7, .v-locale--is-ltr .offset-7 {\n  margin-left: 58.3333333333%;\n}\n\n.v-locale--is-rtl.offset-7, .v-locale--is-rtl .offset-7 {\n  margin-right: 58.3333333333%;\n}\n\n.v-locale--is-ltr.offset-8, .v-locale--is-ltr .offset-8 {\n  margin-left: 66.6666666667%;\n}\n\n.v-locale--is-rtl.offset-8, .v-locale--is-rtl .offset-8 {\n  margin-right: 66.6666666667%;\n}\n\n.v-locale--is-ltr.offset-9, .v-locale--is-ltr .offset-9 {\n  margin-left: 75%;\n}\n\n.v-locale--is-rtl.offset-9, .v-locale--is-rtl .offset-9 {\n  margin-right: 75%;\n}\n\n.v-locale--is-ltr.offset-10, .v-locale--is-ltr .offset-10 {\n  margin-left: 83.3333333333%;\n}\n\n.v-locale--is-rtl.offset-10, .v-locale--is-rtl .offset-10 {\n  margin-right: 83.3333333333%;\n}\n\n.v-locale--is-ltr.offset-11, .v-locale--is-ltr .offset-11 {\n  margin-left: 91.6666666667%;\n}\n\n.v-locale--is-rtl.offset-11, .v-locale--is-rtl .offset-11 {\n  margin-right: 91.6666666667%;\n}\n\n@media (min-width: 600px) {\n  .v-col-sm {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .v-col-sm-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%;\n  }\n  .v-col-sm-1 {\n    flex: 0 0 8.3333333333%;\n    max-width: 8.3333333333%;\n  }\n  .v-col-sm-2 {\n    flex: 0 0 16.6666666667%;\n    max-width: 16.6666666667%;\n  }\n  .v-col-sm-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .v-col-sm-4 {\n    flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n  .v-col-sm-5 {\n    flex: 0 0 41.6666666667%;\n    max-width: 41.6666666667%;\n  }\n  .v-col-sm-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .v-col-sm-7 {\n    flex: 0 0 58.3333333333%;\n    max-width: 58.3333333333%;\n  }\n  .v-col-sm-8 {\n    flex: 0 0 66.6666666667%;\n    max-width: 66.6666666667%;\n  }\n  .v-col-sm-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .v-col-sm-10 {\n    flex: 0 0 83.3333333333%;\n    max-width: 83.3333333333%;\n  }\n  .v-col-sm-11 {\n    flex: 0 0 91.6666666667%;\n    max-width: 91.6666666667%;\n  }\n  .v-col-sm-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .v-locale--is-ltr.offset-sm-0, .v-locale--is-ltr .offset-sm-0 {\n    margin-left: 0;\n  }\n  .v-locale--is-rtl.offset-sm-0, .v-locale--is-rtl .offset-sm-0 {\n    margin-right: 0;\n  }\n  .v-locale--is-ltr.offset-sm-1, .v-locale--is-ltr .offset-sm-1 {\n    margin-left: 8.3333333333%;\n  }\n  .v-locale--is-rtl.offset-sm-1, .v-locale--is-rtl .offset-sm-1 {\n    margin-right: 8.3333333333%;\n  }\n  .v-locale--is-ltr.offset-sm-2, .v-locale--is-ltr .offset-sm-2 {\n    margin-left: 16.6666666667%;\n  }\n  .v-locale--is-rtl.offset-sm-2, .v-locale--is-rtl .offset-sm-2 {\n    margin-right: 16.6666666667%;\n  }\n  .v-locale--is-ltr.offset-sm-3, .v-locale--is-ltr .offset-sm-3 {\n    margin-left: 25%;\n  }\n  .v-locale--is-rtl.offset-sm-3, .v-locale--is-rtl .offset-sm-3 {\n    margin-right: 25%;\n  }\n  .v-locale--is-ltr.offset-sm-4, .v-locale--is-ltr .offset-sm-4 {\n    margin-left: 33.3333333333%;\n  }\n  .v-locale--is-rtl.offset-sm-4, .v-locale--is-rtl .offset-sm-4 {\n    margin-right: 33.3333333333%;\n  }\n  .v-locale--is-ltr.offset-sm-5, .v-locale--is-ltr .offset-sm-5 {\n    margin-left: 41.6666666667%;\n  }\n  .v-locale--is-rtl.offset-sm-5, .v-locale--is-rtl .offset-sm-5 {\n    margin-right: 41.6666666667%;\n  }\n  .v-locale--is-ltr.offset-sm-6, .v-locale--is-ltr .offset-sm-6 {\n    margin-left: 50%;\n  }\n  .v-locale--is-rtl.offset-sm-6, .v-locale--is-rtl .offset-sm-6 {\n    margin-right: 50%;\n  }\n  .v-locale--is-ltr.offset-sm-7, .v-locale--is-ltr .offset-sm-7 {\n    margin-left: 58.3333333333%;\n  }\n  .v-locale--is-rtl.offset-sm-7, .v-locale--is-rtl .offset-sm-7 {\n    margin-right: 58.3333333333%;\n  }\n  .v-locale--is-ltr.offset-sm-8, .v-locale--is-ltr .offset-sm-8 {\n    margin-left: 66.6666666667%;\n  }\n  .v-locale--is-rtl.offset-sm-8, .v-locale--is-rtl .offset-sm-8 {\n    margin-right: 66.6666666667%;\n  }\n  .v-locale--is-ltr.offset-sm-9, .v-locale--is-ltr .offset-sm-9 {\n    margin-left: 75%;\n  }\n  .v-locale--is-rtl.offset-sm-9, .v-locale--is-rtl .offset-sm-9 {\n    margin-right: 75%;\n  }\n  .v-locale--is-ltr.offset-sm-10, .v-locale--is-ltr .offset-sm-10 {\n    margin-left: 83.3333333333%;\n  }\n  .v-locale--is-rtl.offset-sm-10, .v-locale--is-rtl .offset-sm-10 {\n    margin-right: 83.3333333333%;\n  }\n  .v-locale--is-ltr.offset-sm-11, .v-locale--is-ltr .offset-sm-11 {\n    margin-left: 91.6666666667%;\n  }\n  .v-locale--is-rtl.offset-sm-11, .v-locale--is-rtl .offset-sm-11 {\n    margin-right: 91.6666666667%;\n  }\n}\n@media (min-width: 960px) {\n  .v-col-md {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .v-col-md-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%;\n  }\n  .v-col-md-1 {\n    flex: 0 0 8.3333333333%;\n    max-width: 8.3333333333%;\n  }\n  .v-col-md-2 {\n    flex: 0 0 16.6666666667%;\n    max-width: 16.6666666667%;\n  }\n  .v-col-md-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .v-col-md-4 {\n    flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n  .v-col-md-5 {\n    flex: 0 0 41.6666666667%;\n    max-width: 41.6666666667%;\n  }\n  .v-col-md-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .v-col-md-7 {\n    flex: 0 0 58.3333333333%;\n    max-width: 58.3333333333%;\n  }\n  .v-col-md-8 {\n    flex: 0 0 66.6666666667%;\n    max-width: 66.6666666667%;\n  }\n  .v-col-md-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .v-col-md-10 {\n    flex: 0 0 83.3333333333%;\n    max-width: 83.3333333333%;\n  }\n  .v-col-md-11 {\n    flex: 0 0 91.6666666667%;\n    max-width: 91.6666666667%;\n  }\n  .v-col-md-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .v-locale--is-ltr.offset-md-0, .v-locale--is-ltr .offset-md-0 {\n    margin-left: 0;\n  }\n  .v-locale--is-rtl.offset-md-0, .v-locale--is-rtl .offset-md-0 {\n    margin-right: 0;\n  }\n  .v-locale--is-ltr.offset-md-1, .v-locale--is-ltr .offset-md-1 {\n    margin-left: 8.3333333333%;\n  }\n  .v-locale--is-rtl.offset-md-1, .v-locale--is-rtl .offset-md-1 {\n    margin-right: 8.3333333333%;\n  }\n  .v-locale--is-ltr.offset-md-2, .v-locale--is-ltr .offset-md-2 {\n    margin-left: 16.6666666667%;\n  }\n  .v-locale--is-rtl.offset-md-2, .v-locale--is-rtl .offset-md-2 {\n    margin-right: 16.6666666667%;\n  }\n  .v-locale--is-ltr.offset-md-3, .v-locale--is-ltr .offset-md-3 {\n    margin-left: 25%;\n  }\n  .v-locale--is-rtl.offset-md-3, .v-locale--is-rtl .offset-md-3 {\n    margin-right: 25%;\n  }\n  .v-locale--is-ltr.offset-md-4, .v-locale--is-ltr .offset-md-4 {\n    margin-left: 33.3333333333%;\n  }\n  .v-locale--is-rtl.offset-md-4, .v-locale--is-rtl .offset-md-4 {\n    margin-right: 33.3333333333%;\n  }\n  .v-locale--is-ltr.offset-md-5, .v-locale--is-ltr .offset-md-5 {\n    margin-left: 41.6666666667%;\n  }\n  .v-locale--is-rtl.offset-md-5, .v-locale--is-rtl .offset-md-5 {\n    margin-right: 41.6666666667%;\n  }\n  .v-locale--is-ltr.offset-md-6, .v-locale--is-ltr .offset-md-6 {\n    margin-left: 50%;\n  }\n  .v-locale--is-rtl.offset-md-6, .v-locale--is-rtl .offset-md-6 {\n    margin-right: 50%;\n  }\n  .v-locale--is-ltr.offset-md-7, .v-locale--is-ltr .offset-md-7 {\n    margin-left: 58.3333333333%;\n  }\n  .v-locale--is-rtl.offset-md-7, .v-locale--is-rtl .offset-md-7 {\n    margin-right: 58.3333333333%;\n  }\n  .v-locale--is-ltr.offset-md-8, .v-locale--is-ltr .offset-md-8 {\n    margin-left: 66.6666666667%;\n  }\n  .v-locale--is-rtl.offset-md-8, .v-locale--is-rtl .offset-md-8 {\n    margin-right: 66.6666666667%;\n  }\n  .v-locale--is-ltr.offset-md-9, .v-locale--is-ltr .offset-md-9 {\n    margin-left: 75%;\n  }\n  .v-locale--is-rtl.offset-md-9, .v-locale--is-rtl .offset-md-9 {\n    margin-right: 75%;\n  }\n  .v-locale--is-ltr.offset-md-10, .v-locale--is-ltr .offset-md-10 {\n    margin-left: 83.3333333333%;\n  }\n  .v-locale--is-rtl.offset-md-10, .v-locale--is-rtl .offset-md-10 {\n    margin-right: 83.3333333333%;\n  }\n  .v-locale--is-ltr.offset-md-11, .v-locale--is-ltr .offset-md-11 {\n    margin-left: 91.6666666667%;\n  }\n  .v-locale--is-rtl.offset-md-11, .v-locale--is-rtl .offset-md-11 {\n    margin-right: 91.6666666667%;\n  }\n}\n@media (min-width: 1280px) {\n  .v-col-lg {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .v-col-lg-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%;\n  }\n  .v-col-lg-1 {\n    flex: 0 0 8.3333333333%;\n    max-width: 8.3333333333%;\n  }\n  .v-col-lg-2 {\n    flex: 0 0 16.6666666667%;\n    max-width: 16.6666666667%;\n  }\n  .v-col-lg-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .v-col-lg-4 {\n    flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n  .v-col-lg-5 {\n    flex: 0 0 41.6666666667%;\n    max-width: 41.6666666667%;\n  }\n  .v-col-lg-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .v-col-lg-7 {\n    flex: 0 0 58.3333333333%;\n    max-width: 58.3333333333%;\n  }\n  .v-col-lg-8 {\n    flex: 0 0 66.6666666667%;\n    max-width: 66.6666666667%;\n  }\n  .v-col-lg-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .v-col-lg-10 {\n    flex: 0 0 83.3333333333%;\n    max-width: 83.3333333333%;\n  }\n  .v-col-lg-11 {\n    flex: 0 0 91.6666666667%;\n    max-width: 91.6666666667%;\n  }\n  .v-col-lg-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .v-locale--is-ltr.offset-lg-0, .v-locale--is-ltr .offset-lg-0 {\n    margin-left: 0;\n  }\n  .v-locale--is-rtl.offset-lg-0, .v-locale--is-rtl .offset-lg-0 {\n    margin-right: 0;\n  }\n  .v-locale--is-ltr.offset-lg-1, .v-locale--is-ltr .offset-lg-1 {\n    margin-left: 8.3333333333%;\n  }\n  .v-locale--is-rtl.offset-lg-1, .v-locale--is-rtl .offset-lg-1 {\n    margin-right: 8.3333333333%;\n  }\n  .v-locale--is-ltr.offset-lg-2, .v-locale--is-ltr .offset-lg-2 {\n    margin-left: 16.6666666667%;\n  }\n  .v-locale--is-rtl.offset-lg-2, .v-locale--is-rtl .offset-lg-2 {\n    margin-right: 16.6666666667%;\n  }\n  .v-locale--is-ltr.offset-lg-3, .v-locale--is-ltr .offset-lg-3 {\n    margin-left: 25%;\n  }\n  .v-locale--is-rtl.offset-lg-3, .v-locale--is-rtl .offset-lg-3 {\n    margin-right: 25%;\n  }\n  .v-locale--is-ltr.offset-lg-4, .v-locale--is-ltr .offset-lg-4 {\n    margin-left: 33.3333333333%;\n  }\n  .v-locale--is-rtl.offset-lg-4, .v-locale--is-rtl .offset-lg-4 {\n    margin-right: 33.3333333333%;\n  }\n  .v-locale--is-ltr.offset-lg-5, .v-locale--is-ltr .offset-lg-5 {\n    margin-left: 41.6666666667%;\n  }\n  .v-locale--is-rtl.offset-lg-5, .v-locale--is-rtl .offset-lg-5 {\n    margin-right: 41.6666666667%;\n  }\n  .v-locale--is-ltr.offset-lg-6, .v-locale--is-ltr .offset-lg-6 {\n    margin-left: 50%;\n  }\n  .v-locale--is-rtl.offset-lg-6, .v-locale--is-rtl .offset-lg-6 {\n    margin-right: 50%;\n  }\n  .v-locale--is-ltr.offset-lg-7, .v-locale--is-ltr .offset-lg-7 {\n    margin-left: 58.3333333333%;\n  }\n  .v-locale--is-rtl.offset-lg-7, .v-locale--is-rtl .offset-lg-7 {\n    margin-right: 58.3333333333%;\n  }\n  .v-locale--is-ltr.offset-lg-8, .v-locale--is-ltr .offset-lg-8 {\n    margin-left: 66.6666666667%;\n  }\n  .v-locale--is-rtl.offset-lg-8, .v-locale--is-rtl .offset-lg-8 {\n    margin-right: 66.6666666667%;\n  }\n  .v-locale--is-ltr.offset-lg-9, .v-locale--is-ltr .offset-lg-9 {\n    margin-left: 75%;\n  }\n  .v-locale--is-rtl.offset-lg-9, .v-locale--is-rtl .offset-lg-9 {\n    margin-right: 75%;\n  }\n  .v-locale--is-ltr.offset-lg-10, .v-locale--is-ltr .offset-lg-10 {\n    margin-left: 83.3333333333%;\n  }\n  .v-locale--is-rtl.offset-lg-10, .v-locale--is-rtl .offset-lg-10 {\n    margin-right: 83.3333333333%;\n  }\n  .v-locale--is-ltr.offset-lg-11, .v-locale--is-ltr .offset-lg-11 {\n    margin-left: 91.6666666667%;\n  }\n  .v-locale--is-rtl.offset-lg-11, .v-locale--is-rtl .offset-lg-11 {\n    margin-right: 91.6666666667%;\n  }\n}\n@media (min-width: 1920px) {\n  .v-col-xl {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .v-col-xl-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%;\n  }\n  .v-col-xl-1 {\n    flex: 0 0 8.3333333333%;\n    max-width: 8.3333333333%;\n  }\n  .v-col-xl-2 {\n    flex: 0 0 16.6666666667%;\n    max-width: 16.6666666667%;\n  }\n  .v-col-xl-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .v-col-xl-4 {\n    flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n  .v-col-xl-5 {\n    flex: 0 0 41.6666666667%;\n    max-width: 41.6666666667%;\n  }\n  .v-col-xl-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .v-col-xl-7 {\n    flex: 0 0 58.3333333333%;\n    max-width: 58.3333333333%;\n  }\n  .v-col-xl-8 {\n    flex: 0 0 66.6666666667%;\n    max-width: 66.6666666667%;\n  }\n  .v-col-xl-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .v-col-xl-10 {\n    flex: 0 0 83.3333333333%;\n    max-width: 83.3333333333%;\n  }\n  .v-col-xl-11 {\n    flex: 0 0 91.6666666667%;\n    max-width: 91.6666666667%;\n  }\n  .v-col-xl-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .v-locale--is-ltr.offset-xl-0, .v-locale--is-ltr .offset-xl-0 {\n    margin-left: 0;\n  }\n  .v-locale--is-rtl.offset-xl-0, .v-locale--is-rtl .offset-xl-0 {\n    margin-right: 0;\n  }\n  .v-locale--is-ltr.offset-xl-1, .v-locale--is-ltr .offset-xl-1 {\n    margin-left: 8.3333333333%;\n  }\n  .v-locale--is-rtl.offset-xl-1, .v-locale--is-rtl .offset-xl-1 {\n    margin-right: 8.3333333333%;\n  }\n  .v-locale--is-ltr.offset-xl-2, .v-locale--is-ltr .offset-xl-2 {\n    margin-left: 16.6666666667%;\n  }\n  .v-locale--is-rtl.offset-xl-2, .v-locale--is-rtl .offset-xl-2 {\n    margin-right: 16.6666666667%;\n  }\n  .v-locale--is-ltr.offset-xl-3, .v-locale--is-ltr .offset-xl-3 {\n    margin-left: 25%;\n  }\n  .v-locale--is-rtl.offset-xl-3, .v-locale--is-rtl .offset-xl-3 {\n    margin-right: 25%;\n  }\n  .v-locale--is-ltr.offset-xl-4, .v-locale--is-ltr .offset-xl-4 {\n    margin-left: 33.3333333333%;\n  }\n  .v-locale--is-rtl.offset-xl-4, .v-locale--is-rtl .offset-xl-4 {\n    margin-right: 33.3333333333%;\n  }\n  .v-locale--is-ltr.offset-xl-5, .v-locale--is-ltr .offset-xl-5 {\n    margin-left: 41.6666666667%;\n  }\n  .v-locale--is-rtl.offset-xl-5, .v-locale--is-rtl .offset-xl-5 {\n    margin-right: 41.6666666667%;\n  }\n  .v-locale--is-ltr.offset-xl-6, .v-locale--is-ltr .offset-xl-6 {\n    margin-left: 50%;\n  }\n  .v-locale--is-rtl.offset-xl-6, .v-locale--is-rtl .offset-xl-6 {\n    margin-right: 50%;\n  }\n  .v-locale--is-ltr.offset-xl-7, .v-locale--is-ltr .offset-xl-7 {\n    margin-left: 58.3333333333%;\n  }\n  .v-locale--is-rtl.offset-xl-7, .v-locale--is-rtl .offset-xl-7 {\n    margin-right: 58.3333333333%;\n  }\n  .v-locale--is-ltr.offset-xl-8, .v-locale--is-ltr .offset-xl-8 {\n    margin-left: 66.6666666667%;\n  }\n  .v-locale--is-rtl.offset-xl-8, .v-locale--is-rtl .offset-xl-8 {\n    margin-right: 66.6666666667%;\n  }\n  .v-locale--is-ltr.offset-xl-9, .v-locale--is-ltr .offset-xl-9 {\n    margin-left: 75%;\n  }\n  .v-locale--is-rtl.offset-xl-9, .v-locale--is-rtl .offset-xl-9 {\n    margin-right: 75%;\n  }\n  .v-locale--is-ltr.offset-xl-10, .v-locale--is-ltr .offset-xl-10 {\n    margin-left: 83.3333333333%;\n  }\n  .v-locale--is-rtl.offset-xl-10, .v-locale--is-rtl .offset-xl-10 {\n    margin-right: 83.3333333333%;\n  }\n  .v-locale--is-ltr.offset-xl-11, .v-locale--is-ltr .offset-xl-11 {\n    margin-left: 91.6666666667%;\n  }\n  .v-locale--is-rtl.offset-xl-11, .v-locale--is-rtl .offset-xl-11 {\n    margin-right: 91.6666666667%;\n  }\n}\n@media (min-width: 2560px) {\n  .v-col-xxl {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .v-col-xxl-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%;\n  }\n  .v-col-xxl-1 {\n    flex: 0 0 8.3333333333%;\n    max-width: 8.3333333333%;\n  }\n  .v-col-xxl-2 {\n    flex: 0 0 16.6666666667%;\n    max-width: 16.6666666667%;\n  }\n  .v-col-xxl-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .v-col-xxl-4 {\n    flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n  .v-col-xxl-5 {\n    flex: 0 0 41.6666666667%;\n    max-width: 41.6666666667%;\n  }\n  .v-col-xxl-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .v-col-xxl-7 {\n    flex: 0 0 58.3333333333%;\n    max-width: 58.3333333333%;\n  }\n  .v-col-xxl-8 {\n    flex: 0 0 66.6666666667%;\n    max-width: 66.6666666667%;\n  }\n  .v-col-xxl-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .v-col-xxl-10 {\n    flex: 0 0 83.3333333333%;\n    max-width: 83.3333333333%;\n  }\n  .v-col-xxl-11 {\n    flex: 0 0 91.6666666667%;\n    max-width: 91.6666666667%;\n  }\n  .v-col-xxl-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .v-locale--is-ltr.offset-xxl-0, .v-locale--is-ltr .offset-xxl-0 {\n    margin-left: 0;\n  }\n  .v-locale--is-rtl.offset-xxl-0, .v-locale--is-rtl .offset-xxl-0 {\n    margin-right: 0;\n  }\n  .v-locale--is-ltr.offset-xxl-1, .v-locale--is-ltr .offset-xxl-1 {\n    margin-left: 8.3333333333%;\n  }\n  .v-locale--is-rtl.offset-xxl-1, .v-locale--is-rtl .offset-xxl-1 {\n    margin-right: 8.3333333333%;\n  }\n  .v-locale--is-ltr.offset-xxl-2, .v-locale--is-ltr .offset-xxl-2 {\n    margin-left: 16.6666666667%;\n  }\n  .v-locale--is-rtl.offset-xxl-2, .v-locale--is-rtl .offset-xxl-2 {\n    margin-right: 16.6666666667%;\n  }\n  .v-locale--is-ltr.offset-xxl-3, .v-locale--is-ltr .offset-xxl-3 {\n    margin-left: 25%;\n  }\n  .v-locale--is-rtl.offset-xxl-3, .v-locale--is-rtl .offset-xxl-3 {\n    margin-right: 25%;\n  }\n  .v-locale--is-ltr.offset-xxl-4, .v-locale--is-ltr .offset-xxl-4 {\n    margin-left: 33.3333333333%;\n  }\n  .v-locale--is-rtl.offset-xxl-4, .v-locale--is-rtl .offset-xxl-4 {\n    margin-right: 33.3333333333%;\n  }\n  .v-locale--is-ltr.offset-xxl-5, .v-locale--is-ltr .offset-xxl-5 {\n    margin-left: 41.6666666667%;\n  }\n  .v-locale--is-rtl.offset-xxl-5, .v-locale--is-rtl .offset-xxl-5 {\n    margin-right: 41.6666666667%;\n  }\n  .v-locale--is-ltr.offset-xxl-6, .v-locale--is-ltr .offset-xxl-6 {\n    margin-left: 50%;\n  }\n  .v-locale--is-rtl.offset-xxl-6, .v-locale--is-rtl .offset-xxl-6 {\n    margin-right: 50%;\n  }\n  .v-locale--is-ltr.offset-xxl-7, .v-locale--is-ltr .offset-xxl-7 {\n    margin-left: 58.3333333333%;\n  }\n  .v-locale--is-rtl.offset-xxl-7, .v-locale--is-rtl .offset-xxl-7 {\n    margin-right: 58.3333333333%;\n  }\n  .v-locale--is-ltr.offset-xxl-8, .v-locale--is-ltr .offset-xxl-8 {\n    margin-left: 66.6666666667%;\n  }\n  .v-locale--is-rtl.offset-xxl-8, .v-locale--is-rtl .offset-xxl-8 {\n    margin-right: 66.6666666667%;\n  }\n  .v-locale--is-ltr.offset-xxl-9, .v-locale--is-ltr .offset-xxl-9 {\n    margin-left: 75%;\n  }\n  .v-locale--is-rtl.offset-xxl-9, .v-locale--is-rtl .offset-xxl-9 {\n    margin-right: 75%;\n  }\n  .v-locale--is-ltr.offset-xxl-10, .v-locale--is-ltr .offset-xxl-10 {\n    margin-left: 83.3333333333%;\n  }\n  .v-locale--is-rtl.offset-xxl-10, .v-locale--is-rtl .offset-xxl-10 {\n    margin-right: 83.3333333333%;\n  }\n  .v-locale--is-ltr.offset-xxl-11, .v-locale--is-ltr .offset-xxl-11 {\n    margin-left: 91.6666666667%;\n  }\n  .v-locale--is-rtl.offset-xxl-11, .v-locale--is-rtl .offset-xxl-11 {\n    margin-right: 91.6666666667%;\n  }\n}";
styleInject(css_248z$d);

const makeVContainerProps = propsFactory({
  fluid: {
    type: Boolean,
    default: false
  },
  ...makeComponentProps(),
  ...makeTagProps()
}, 'VContainer');
const VContainer = genericComponent()({
  name: 'VContainer',
  props: makeVContainerProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      rtlClasses
    } = useRtl();
    useRender(() => vue.createVNode(props.tag, {
      "class": ['v-container', {
        'v-container--fluid': props.fluid
      }, rtlClasses.value, props.class],
      "style": props.style
    }, slots));
    return {};
  }
});

// Styles
const breakpointProps = (() => {
  return breakpoints.reduce((props, val) => {
    props[val] = {
      type: [Boolean, String, Number],
      default: false
    };
    return props;
  }, {});
})();
const offsetProps = (() => {
  return breakpoints.reduce((props, val) => {
    const offsetKey = 'offset' + vue.capitalize(val);
    props[offsetKey] = {
      type: [String, Number],
      default: null
    };
    return props;
  }, {});
})();
const orderProps = (() => {
  return breakpoints.reduce((props, val) => {
    const orderKey = 'order' + vue.capitalize(val);
    props[orderKey] = {
      type: [String, Number],
      default: null
    };
    return props;
  }, {});
})();
const propMap$1 = {
  col: Object.keys(breakpointProps),
  offset: Object.keys(offsetProps),
  order: Object.keys(orderProps)
};
function breakpointClass$1(type, prop, val) {
  let className = type;
  if (val == null || val === false) {
    return undefined;
  }
  if (prop) {
    const breakpoint = prop.replace(type, '');
    className += `-${breakpoint}`;
  }
  if (type === 'col') {
    className = 'v-' + className;
  }
  // Handling the boolean style prop when accepting [Boolean, String, Number]
  // means Vue will not convert <v-col sm></v-col> to sm: true for us.
  // Since the default is false, an empty string indicates the prop's presence.
  if (type === 'col' && (val === '' || val === true)) {
    // .v-col-md
    return className.toLowerCase();
  }
  // .order-md-6
  className += `-${val}`;
  return className.toLowerCase();
}
const ALIGN_SELF_VALUES = ['auto', 'start', 'end', 'center', 'baseline', 'stretch'];
const makeVColProps = propsFactory({
  cols: {
    type: [Boolean, String, Number],
    default: false
  },
  ...breakpointProps,
  offset: {
    type: [String, Number],
    default: null
  },
  ...offsetProps,
  order: {
    type: [String, Number],
    default: null
  },
  ...orderProps,
  alignSelf: {
    type: String,
    default: null,
    validator: str => ALIGN_SELF_VALUES.includes(str)
  },
  ...makeComponentProps(),
  ...makeTagProps()
}, 'VCol');
const VCol = genericComponent()({
  name: 'VCol',
  props: makeVColProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const classes = vue.computed(() => {
      const classList = [];

      // Loop through `col`, `offset`, `order` breakpoint props
      let type;
      for (type in propMap$1) {
        propMap$1[type].forEach(prop => {
          const value = props[prop];
          const className = breakpointClass$1(type, prop, value);
          if (className) classList.push(className);
        });
      }
      const hasColClasses = classList.some(className => className.startsWith('v-col-'));
      classList.push({
        // Default to .v-col if no other col-{bp}-* classes generated nor `cols` specified.
        'v-col': !hasColClasses || !props.cols,
        [`v-col-${props.cols}`]: props.cols,
        [`offset-${props.offset}`]: props.offset,
        [`order-${props.order}`]: props.order,
        [`align-self-${props.alignSelf}`]: props.alignSelf
      });
      return classList;
    });
    return () => vue.h(props.tag, {
      class: [classes.value, props.class],
      style: props.style
    }, slots.default?.());
  }
});

// Styles
const ALIGNMENT = ['start', 'end', 'center'];
const SPACE = ['space-between', 'space-around', 'space-evenly'];
function makeRowProps(prefix, def) {
  return breakpoints.reduce((props, val) => {
    const prefixKey = prefix + vue.capitalize(val);
    props[prefixKey] = def();
    return props;
  }, {});
}
const ALIGN_VALUES = [...ALIGNMENT, 'baseline', 'stretch'];
const alignValidator = str => ALIGN_VALUES.includes(str);
const alignProps = makeRowProps('align', () => ({
  type: String,
  default: null,
  validator: alignValidator
}));
const JUSTIFY_VALUES = [...ALIGNMENT, ...SPACE];
const justifyValidator = str => JUSTIFY_VALUES.includes(str);
const justifyProps = makeRowProps('justify', () => ({
  type: String,
  default: null,
  validator: justifyValidator
}));
const ALIGN_CONTENT_VALUES = [...ALIGNMENT, ...SPACE, 'stretch'];
const alignContentValidator = str => ALIGN_CONTENT_VALUES.includes(str);
const alignContentProps = makeRowProps('alignContent', () => ({
  type: String,
  default: null,
  validator: alignContentValidator
}));
const propMap = {
  align: Object.keys(alignProps),
  justify: Object.keys(justifyProps),
  alignContent: Object.keys(alignContentProps)
};
const classMap = {
  align: 'align',
  justify: 'justify',
  alignContent: 'align-content'
};
function breakpointClass(type, prop, val) {
  let className = classMap[type];
  if (val == null) {
    return undefined;
  }
  if (prop) {
    // alignSm -> Sm
    const breakpoint = prop.replace(type, '');
    className += `-${breakpoint}`;
  }
  // .align-items-sm-center
  className += `-${val}`;
  return className.toLowerCase();
}
const makeVRowProps = propsFactory({
  dense: Boolean,
  noGutters: Boolean,
  align: {
    type: String,
    default: null,
    validator: alignValidator
  },
  ...alignProps,
  justify: {
    type: String,
    default: null,
    validator: justifyValidator
  },
  ...justifyProps,
  alignContent: {
    type: String,
    default: null,
    validator: alignContentValidator
  },
  ...alignContentProps,
  ...makeComponentProps(),
  ...makeTagProps()
}, 'VRow');
const VRow = genericComponent()({
  name: 'VRow',
  props: makeVRowProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const classes = vue.computed(() => {
      const classList = [];

      // Loop through `align`, `justify`, `alignContent` breakpoint props
      let type;
      for (type in propMap) {
        propMap[type].forEach(prop => {
          const value = props[prop];
          const className = breakpointClass(type, prop, value);
          if (className) classList.push(className);
        });
      }
      classList.push({
        'v-row--no-gutters': props.noGutters,
        'v-row--dense': props.dense,
        [`align-${props.align}`]: props.align,
        [`justify-${props.justify}`]: props.justify,
        [`align-content-${props.alignContent}`]: props.alignContent
      });
      return classList;
    });
    return () => vue.h(props.tag, {
      class: ['v-row', classes.value, props.class],
      style: props.style
    }, slots.default?.());
  }
});

// Utilities
const VSpacer = createSimpleFunctional('v-spacer', 'div', 'VSpacer');

var css_248z$c = "/* region BLOCK */\n.v-text-field input {\n  color: inherit;\n  opacity: 0;\n  flex: 1;\n  transition: 0.15s opacity cubic-bezier(0.4, 0, 0.2, 1);\n  min-width: 0;\n}\n.v-text-field input:focus, .v-text-field input:active {\n  outline: none;\n}\n.v-text-field input:invalid {\n  box-shadow: none;\n}\n.v-text-field .v-field {\n  cursor: text;\n}\n.v-text-field--prefixed.v-text-field .v-field__input {\n  --v-field-padding-start: 6px;\n}\n\n.v-text-field--suffixed.v-text-field .v-field__input {\n  --v-field-padding-end: 0;\n}\n\n.v-text-field .v-field__input input {\n  margin-top: var(--v-input-chips-margin-top);\n  margin-bottom: var(--v-input-chips-margin-bottom);\n}\n.v-text-field input.v-field__input {\n  min-height: calc(max(var(--v-input-control-height, 56px), 1.5rem + var(--v-field-input-padding-top) + var(--v-field-input-padding-bottom) + var(--v-input-chips-margin-bottom) + 2px) - var(--v-input-chips-margin-top) - var(--v-input-chips-margin-bottom));\n  padding-top: calc(var(--v-input-chips-margin-top) + var(--v-field-input-padding-top));\n  padding-bottom: calc(var(--v-input-chips-margin-bottom) + var(--v-field-input-padding-bottom));\n}\n.v-text-field .v-input__details {\n  padding-inline-start: 16px;\n  padding-inline-end: 16px;\n}\n.v-text-field .v-field--no-label input,\n.v-text-field .v-field--active input {\n  opacity: 1;\n}\n.v-text-field .v-field--single-line input {\n  transition: none;\n}\n\n/* endregion */\n/* region ELEMENTS */\n.v-text-field__prefix, .v-text-field__suffix {\n  align-items: center;\n  color: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity));\n  cursor: default;\n  display: flex;\n  opacity: 0;\n  transition: inherit;\n  white-space: nowrap;\n  min-height: max(var(--v-input-control-height, 56px), 1.5rem + var(--v-field-input-padding-top) + var(--v-field-input-padding-bottom) + var(--v-input-chips-margin-bottom) + 2px);\n  padding-top: calc(var(--v-field-padding-top, 4px) + var(--v-input-padding-top, 0));\n  padding-bottom: var(--v-field-padding-bottom, 6px);\n}\n.v-text-field__prefix__text, .v-text-field__suffix__text {\n  margin-top: var(--v-input-chips-margin-top);\n  margin-bottom: var(--v-input-chips-margin-bottom);\n}\n.v-field--active .v-text-field__prefix, .v-field--active .v-text-field__suffix {\n  opacity: 1;\n}\n.v-field--disabled .v-text-field__prefix, .v-field--disabled .v-text-field__suffix {\n  color: rgba(var(--v-theme-on-surface), var(--v-disabled-opacity));\n}\n.v-text-field__prefix {\n  padding-inline-start: var(--v-field-padding-start);\n}\n.v-text-field__suffix {\n  padding-inline-end: var(--v-field-padding-end);\n}\n\n/* endregion */\n/* region MODIFIERS */\n.v-text-field--plain-underlined {\n  --v-field-padding-top--plain-underlined: 6px;\n}\n.v-text-field--plain-underlined .v-input__details {\n  padding: 0;\n}\n.v-text-field--plain-underlined .v-input__prepend,\n.v-text-field--plain-underlined .v-input__append {\n  align-items: flex-start;\n  padding-top: calc(var(--v-field-padding-top--plain-underlined) + var(--v-input-padding-top));\n}\n\n/* endregion */";
styleInject(css_248z$c);

var css_248z$b = ".v-counter {\n  color: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity));\n  flex: 0 1 auto;\n  font-size: 12px;\n  transition-duration: 150ms;\n}";
styleInject(css_248z$b);

const makeVCounterProps = propsFactory({
  active: Boolean,
  max: [Number, String],
  value: {
    type: [Number, String],
    default: 0
  },
  ...makeComponentProps(),
  ...makeTransitionProps$1({
    transition: {
      component: VSlideYTransition
    }
  })
}, 'VCounter');
const VCounter = genericComponent()({
  name: 'VCounter',
  functional: true,
  props: makeVCounterProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const counter = vue.computed(() => {
      return props.max ? `${props.value} / ${props.max}` : String(props.value);
    });
    useRender(() => vue.createVNode(MaybeTransition, {
      "transition": props.transition
    }, {
      default: () => [vue.withDirectives(vue.createVNode("div", {
        "class": ['v-counter', props.class],
        "style": props.style
      }, [slots.default ? slots.default({
        counter: counter.value,
        max: props.max,
        value: props.value
      }) : counter.value]), [[vue.vShow, props.active]])]
    }));
    return {};
  }
});

var css_248z$a = "/* region INPUT */\n.v-field {\n  display: grid;\n  grid-template-areas: \"prepend-inner field clear append-inner\";\n  grid-template-columns: min-content minmax(0, 1fr) min-content min-content;\n  font-size: 16px;\n  letter-spacing: 0.009375em;\n  max-width: 100%;\n  border-radius: 4px;\n  contain: layout;\n  flex: 1 0;\n  grid-area: control;\n  position: relative;\n  --v-field-padding-start: 16px;\n  --v-field-padding-end: 16px;\n  --v-field-padding-top: 10px;\n  --v-field-padding-bottom: 5px;\n  --v-field-input-padding-top: calc(var(--v-field-padding-top, 10px) + var(--v-input-padding-top, 0));\n  --v-field-input-padding-bottom: var(--v-field-padding-bottom, 5px);\n}\n.v-field--disabled {\n  opacity: var(--v-disabled-opacity);\n  pointer-events: none;\n}\n\n/* endregion */\n/* region MODIFIERS */\n.v-field--prepended {\n  padding-inline-start: 12px;\n}\n.v-field--appended {\n  padding-inline-end: 12px;\n}\n.v-field--variant-solo, .v-field--variant-solo-filled {\n  background: rgb(var(--v-theme-surface));\n  border-color: transparent;\n  color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));\n  box-shadow: 0px 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 2px 2px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 5px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));\n}\n.v-field--variant-solo-inverted {\n  background: rgb(var(--v-theme-surface));\n  border-color: transparent;\n  color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));\n  box-shadow: 0px 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 2px 2px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 5px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));\n}\n.v-field--variant-solo-inverted.v-field--focused {\n  color: rgb(var(--v-theme-on-surface-variant));\n}\n.v-field--variant-filled {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.v-input--density-default .v-field--variant-solo, .v-input--density-default .v-field--variant-solo-inverted, .v-input--density-default .v-field--variant-solo-filled, .v-input--density-default .v-field--variant-filled {\n  --v-input-control-height: 56px;\n  --v-field-padding-bottom: 5px;\n}\n\n.v-input--density-comfortable .v-field--variant-solo, .v-input--density-comfortable .v-field--variant-solo-inverted, .v-input--density-comfortable .v-field--variant-solo-filled, .v-input--density-comfortable .v-field--variant-filled {\n  --v-input-control-height: 48px;\n  --v-field-padding-bottom: 1px;\n}\n\n.v-input--density-compact .v-field--variant-solo, .v-input--density-compact .v-field--variant-solo-inverted, .v-input--density-compact .v-field--variant-solo-filled, .v-input--density-compact .v-field--variant-filled {\n  --v-input-control-height: 40px;\n  --v-field-padding-bottom: 0px;\n}\n\n.v-field--variant-outlined, .v-field--single-line, .v-field--no-label {\n  --v-field-padding-top: 0px;\n}\n.v-input--density-default .v-field--variant-outlined, .v-input--density-default .v-field--single-line, .v-input--density-default .v-field--no-label {\n  --v-field-padding-bottom: 15px;\n}\n\n.v-input--density-comfortable .v-field--variant-outlined, .v-input--density-comfortable .v-field--single-line, .v-input--density-comfortable .v-field--no-label {\n  --v-field-padding-bottom: 11px;\n}\n\n.v-input--density-compact .v-field--variant-outlined, .v-input--density-compact .v-field--single-line, .v-input--density-compact .v-field--no-label {\n  --v-field-padding-bottom: 7px;\n}\n\n.v-field--variant-plain, .v-field--variant-underlined {\n  border-radius: 0;\n  padding: 0;\n}\n.v-field--variant-plain.v-field, .v-field--variant-underlined.v-field {\n  --v-field-padding-start: 0px;\n  --v-field-padding-end: 0px;\n  --v-field-padding-top: var(--v-field-padding-top--plain-underlined, 6px);\n}\n.v-input--density-default .v-field--variant-plain, .v-input--density-default .v-field--variant-underlined {\n  --v-input-control-height: 48px;\n  --v-field-padding-bottom: 5px;\n}\n\n.v-input--density-comfortable .v-field--variant-plain, .v-input--density-comfortable .v-field--variant-underlined {\n  --v-input-control-height: 40px;\n  --v-field-padding-bottom: 1px;\n}\n\n.v-input--density-compact .v-field--variant-plain, .v-input--density-compact .v-field--variant-underlined {\n  --v-input-control-height: 32px;\n  --v-field-padding-bottom: 0px;\n}\n\n.v-field--flat {\n  box-shadow: none;\n}\n.v-field--rounded {\n  border-radius: 9999px;\n}\n.v-field.v-field--prepended {\n  --v-field-padding-start: 6px;\n}\n.v-field.v-field--appended {\n  --v-field-padding-end: 6px;\n}\n\n/* endregion */\n/* region ELEMENTS */\n.v-field__input {\n  color: inherit;\n  display: flex;\n  flex-wrap: wrap;\n  letter-spacing: 0.009375em;\n  opacity: var(--v-high-emphasis-opacity);\n  min-height: max(var(--v-input-control-height, 56px), 1.5rem + var(--v-field-input-padding-top) + var(--v-field-input-padding-bottom) + var(--v-input-chips-margin-bottom) + 2px);\n  min-width: 0;\n  padding-inline-start: var(--v-field-padding-start);\n  padding-inline-end: var(--v-field-padding-end);\n  padding-top: var(--v-field-input-padding-top);\n  padding-bottom: var(--v-field-input-padding-bottom);\n  position: relative;\n  width: 100%;\n}\n.v-field__input input {\n  letter-spacing: inherit;\n}\n.v-field__input input::placeholder,\ninput.v-field__input::placeholder,\ntextarea.v-field__input::placeholder {\n  color: currentColor;\n  opacity: var(--v-disabled-opacity);\n}\n\n.v-field__input:focus, .v-field__input:active {\n  outline: none;\n}\n.v-field__input:invalid {\n  box-shadow: none;\n}\n\n.v-field__field {\n  flex: 1 0;\n  grid-area: field;\n  position: relative;\n  align-items: flex-start;\n  display: flex;\n}\n\n/* endregion */\n/* region AFFIXES */\n.v-field__prepend-inner {\n  grid-area: prepend-inner;\n  padding-inline-end: var(--v-field-padding-after);\n}\n\n.v-field__clearable {\n  grid-area: clear;\n}\n\n.v-field__append-inner {\n  grid-area: append-inner;\n  padding-inline-start: var(--v-field-padding-after);\n}\n\n.v-field__append-inner,\n.v-field__clearable,\n.v-field__prepend-inner {\n  display: flex;\n  align-items: flex-start;\n  padding-top: var(--v-input-padding-top, 10px);\n}\n.v-field--center-affix .v-field__append-inner,\n.v-field--center-affix .v-field__clearable,\n.v-field--center-affix .v-field__prepend-inner {\n  align-items: center;\n  padding-top: 0;\n}\n\n.v-field.v-field--variant-underlined .v-field__append-inner,\n.v-field.v-field--variant-underlined .v-field__clearable,\n.v-field.v-field--variant-underlined .v-field__prepend-inner,\n.v-field.v-field--variant-plain .v-field__append-inner,\n.v-field.v-field--variant-plain .v-field__clearable,\n.v-field.v-field--variant-plain .v-field__prepend-inner {\n  align-items: flex-start;\n  padding-top: calc(var(--v-field-padding-top, 10px) + var(--v-input-padding-top, 0));\n  padding-bottom: var(--v-field-padding-bottom, 5px);\n}\n\n.v-field--focused .v-field__prepend-inner,\n.v-field--focused .v-field__append-inner {\n  opacity: 1;\n}\n\n.v-field__prepend-inner > .v-icon,\n.v-field__append-inner > .v-icon,\n.v-field__clearable > .v-icon {\n  opacity: var(--v-medium-emphasis-opacity);\n}\n.v-field--disabled .v-field__prepend-inner > .v-icon, .v-field--error .v-field__prepend-inner > .v-icon,\n.v-field--disabled .v-field__append-inner > .v-icon,\n.v-field--error .v-field__append-inner > .v-icon,\n.v-field--disabled .v-field__clearable > .v-icon,\n.v-field--error .v-field__clearable > .v-icon {\n  opacity: 1;\n}\n.v-field--error:not(.v-field--disabled) .v-field__prepend-inner > .v-icon,\n.v-field--error:not(.v-field--disabled) .v-field__append-inner > .v-icon,\n.v-field--error:not(.v-field--disabled) .v-field__clearable > .v-icon {\n  color: rgb(var(--v-theme-error));\n}\n\n.v-field__clearable {\n  cursor: pointer;\n  opacity: 0;\n  overflow: hidden;\n  margin-inline-start: 4px;\n  margin-inline-end: 4px;\n  transition: 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n  transition-property: opacity, transform, width;\n}\n.v-field--focused .v-field__clearable, .v-field--persistent-clear .v-field__clearable {\n  opacity: 1;\n}\n@media (hover: hover) {\n  .v-field:hover .v-field__clearable {\n    opacity: 1;\n  }\n}\n\n/* endregion */\n/* region LABEL */\n.v-label.v-field-label {\n  contain: layout paint;\n  margin-inline-start: var(--v-field-padding-start);\n  margin-inline-end: var(--v-field-padding-end);\n  max-width: calc(100% - var(--v-field-padding-start) - var(--v-field-padding-end));\n  pointer-events: none;\n  position: absolute;\n  top: var(--v-input-padding-top);\n  transform-origin: left center;\n  transition: 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n  transition-property: opacity, transform;\n  z-index: 1;\n}\n.v-field--variant-underlined .v-label.v-field-label, .v-field--variant-plain .v-label.v-field-label {\n  top: calc(var(--v-input-padding-top) + var(--v-field-padding-top));\n}\n.v-field--center-affix .v-label.v-field-label {\n  top: 50%;\n  transform: translateY(-50%);\n}\n.v-field--active .v-label.v-field-label {\n  visibility: hidden;\n}\n.v-field--focused .v-label.v-field-label, .v-field--error .v-label.v-field-label {\n  opacity: 1;\n}\n.v-field--error:not(.v-field--disabled) .v-label.v-field-label {\n  color: rgb(var(--v-theme-error));\n}\n.v-label.v-field-label--floating {\n  --v-field-label-scale: 0.75em;\n  font-size: var(--v-field-label-scale);\n  visibility: hidden;\n  max-width: 100%;\n}\n.v-field--center-affix .v-label.v-field-label--floating {\n  transform: none;\n}\n.v-field.v-field--active .v-label.v-field-label--floating {\n  visibility: unset;\n}\n.v-input--density-default .v-field--variant-solo .v-label.v-field-label--floating, .v-input--density-default .v-field--variant-solo-inverted .v-label.v-field-label--floating, .v-input--density-default .v-field--variant-filled .v-label.v-field-label--floating, .v-input--density-default .v-field--variant-solo-filled .v-label.v-field-label--floating {\n  top: 7px;\n}\n\n.v-input--density-comfortable .v-field--variant-solo .v-label.v-field-label--floating, .v-input--density-comfortable .v-field--variant-solo-inverted .v-label.v-field-label--floating, .v-input--density-comfortable .v-field--variant-filled .v-label.v-field-label--floating, .v-input--density-comfortable .v-field--variant-solo-filled .v-label.v-field-label--floating {\n  top: 5px;\n}\n\n.v-input--density-compact .v-field--variant-solo .v-label.v-field-label--floating, .v-input--density-compact .v-field--variant-solo-inverted .v-label.v-field-label--floating, .v-input--density-compact .v-field--variant-filled .v-label.v-field-label--floating, .v-input--density-compact .v-field--variant-solo-filled .v-label.v-field-label--floating {\n  top: 3px;\n}\n\n.v-field--variant-plain .v-label.v-field-label--floating, .v-field--variant-underlined .v-label.v-field-label--floating {\n  transform: translateY(-16px);\n  margin: 0;\n  top: var(--v-input-padding-top);\n}\n.v-field--variant-outlined .v-label.v-field-label--floating {\n  transform: translateY(-50%);\n  transform-origin: center;\n  position: static;\n  margin: 0 4px;\n}\n\n/* endregion */\n/* region OUTLINE */\n.v-field__outline {\n  --v-field-border-width: 1px;\n  --v-field-border-opacity: 0.38;\n  align-items: stretch;\n  contain: layout;\n  display: flex;\n  height: 100%;\n  left: 0;\n  pointer-events: none;\n  position: absolute;\n  right: 0;\n  width: 100%;\n}\n@media (hover: hover) {\n  .v-field:hover .v-field__outline {\n    --v-field-border-opacity: var(--v-high-emphasis-opacity);\n  }\n}\n.v-field--error:not(.v-field--disabled) .v-field__outline {\n  color: rgb(var(--v-theme-error));\n}\n.v-field.v-field--focused .v-field__outline, .v-input.v-input--error .v-field__outline {\n  --v-field-border-opacity: 1;\n}\n.v-field--variant-outlined.v-field--focused .v-field__outline {\n  --v-field-border-width: 2px;\n}\n.v-field--variant-filled .v-field__outline::before, .v-field--variant-underlined .v-field__outline::before {\n  border-color: currentColor;\n  border-style: solid;\n  border-width: 0 0 var(--v-field-border-width);\n  opacity: var(--v-field-border-opacity);\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.v-field--variant-filled .v-field__outline::after, .v-field--variant-underlined .v-field__outline::after {\n  border-color: currentColor;\n  border-style: solid;\n  border-width: 0 0 2px;\n  transform: scaleX(0);\n  transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.v-field--focused.v-field--variant-filled .v-field__outline::after, .v-field--focused.v-field--variant-underlined .v-field__outline::after {\n  transform: scaleX(1);\n}\n\n.v-field--variant-outlined .v-field__outline {\n  border-radius: inherit;\n}\n.v-field--variant-outlined .v-field__outline__start, .v-field--variant-outlined .v-field__outline__notch::before, .v-field--variant-outlined .v-field__outline__notch::after, .v-field--variant-outlined .v-field__outline__end {\n  border: 0 solid currentColor;\n  opacity: var(--v-field-border-opacity);\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.v-field--variant-outlined .v-field__outline__start {\n  flex: 0 0 12px;\n  border-top-width: var(--v-field-border-width);\n  border-bottom-width: var(--v-field-border-width);\n  border-inline-start-width: var(--v-field-border-width);\n}\n.v-field--rounded.v-field--variant-outlined .v-field__outline__start,\n[class^=rounded-].v-field--variant-outlined .v-field__outline__start,\n[class*=\" rounded-\"].v-field--variant-outlined .v-field__outline__start {\n  flex-basis: calc(var(--v-input-control-height) / 2 + 2px);\n}\n\n.v-locale--is-ltr.v-field--variant-outlined .v-field__outline__start, .v-locale--is-ltr .v-field--variant-outlined .v-field__outline__start {\n  border-top-left-radius: inherit;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: inherit;\n}\n\n.v-locale--is-rtl.v-field--variant-outlined .v-field__outline__start, .v-locale--is-rtl .v-field--variant-outlined .v-field__outline__start {\n  border-top-left-radius: 0;\n  border-top-right-radius: inherit;\n  border-bottom-right-radius: inherit;\n  border-bottom-left-radius: 0;\n}\n\n.v-field--variant-outlined .v-field__outline__notch {\n  flex: none;\n  position: relative;\n}\n.v-field--variant-outlined .v-field__outline__notch::before, .v-field--variant-outlined .v-field__outline__notch::after {\n  opacity: var(--v-field-border-opacity);\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.v-field--variant-outlined .v-field__outline__notch::before {\n  border-width: var(--v-field-border-width) 0 0;\n}\n.v-field--variant-outlined .v-field__outline__notch::after {\n  bottom: 0;\n  border-width: 0 0 var(--v-field-border-width);\n}\n.v-field--active.v-field--variant-outlined .v-field__outline__notch::before {\n  opacity: 0;\n}\n\n.v-field--variant-outlined .v-field__outline__end {\n  flex: 1;\n  border-top-width: var(--v-field-border-width);\n  border-bottom-width: var(--v-field-border-width);\n  border-inline-end-width: var(--v-field-border-width);\n}\n.v-locale--is-ltr.v-field--variant-outlined .v-field__outline__end, .v-locale--is-ltr .v-field--variant-outlined .v-field__outline__end {\n  border-top-left-radius: 0;\n  border-top-right-radius: inherit;\n  border-bottom-right-radius: inherit;\n  border-bottom-left-radius: 0;\n}\n\n.v-locale--is-rtl.v-field--variant-outlined .v-field__outline__end, .v-locale--is-rtl .v-field--variant-outlined .v-field__outline__end {\n  border-top-left-radius: inherit;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: inherit;\n}\n\n/* endregion */\n/* region LOADER */\n.v-field__loader {\n  top: calc(100% - 2px);\n  left: 0;\n  position: absolute;\n  right: 0;\n  width: 100%;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: inherit;\n  border-bottom-right-radius: inherit;\n  overflow: hidden;\n}\n.v-field--variant-outlined .v-field__loader {\n  top: calc(100% - 3px);\n}\n\n/* endregion */\n/* region OVERLAY */\n.v-field__overlay {\n  border-radius: inherit;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.v-field--variant-filled .v-field__overlay {\n  background-color: currentColor;\n  opacity: 0.04;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.v-field--variant-filled.v-field--has-background .v-field__overlay {\n  opacity: 0;\n}\n@media (hover: hover) {\n  .v-field--variant-filled:hover .v-field__overlay {\n    opacity: calc((0.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier));\n  }\n}\n.v-field--variant-filled.v-field--focused .v-field__overlay {\n  opacity: calc((0.04 + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier));\n}\n\n.v-field--variant-solo-filled .v-field__overlay {\n  background-color: currentColor;\n  opacity: 0.04;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n@media (hover: hover) {\n  .v-field--variant-solo-filled:hover .v-field__overlay {\n    opacity: calc((0.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier));\n  }\n}\n.v-field--variant-solo-filled.v-field--focused .v-field__overlay {\n  opacity: calc((0.04 + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier));\n}\n\n.v-field--variant-solo-inverted .v-field__overlay {\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.v-field--variant-solo-inverted.v-field--has-background .v-field__overlay {\n  opacity: 0;\n}\n@media (hover: hover) {\n  .v-field--variant-solo-inverted:hover .v-field__overlay {\n    opacity: calc((0.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier));\n  }\n}\n.v-field--variant-solo-inverted.v-field--focused .v-field__overlay {\n  background-color: rgb(var(--v-theme-surface-variant));\n  opacity: 1;\n}\n\n/* endregion */\n/* region MODIFIERS */\n.v-field--reverse .v-field__field, .v-field--reverse .v-field__input {\n  flex-direction: row-reverse;\n}\n.v-locale--is-ltr.v-field--reverse .v-field__input, .v-locale--is-ltr.v-field--reverse input, .v-locale--is-ltr .v-field--reverse .v-field__input, .v-locale--is-ltr .v-field--reverse input {\n  text-align: right;\n}\n\n.v-locale--is-rtl.v-field--reverse .v-field__input, .v-locale--is-rtl.v-field--reverse input, .v-locale--is-rtl .v-field--reverse .v-field__input, .v-locale--is-rtl .v-field--reverse input {\n  text-align: left;\n}\n\n.v-input--disabled .v-field--variant-filled .v-field__outline::before,\n.v-input--disabled .v-field--variant-underlined .v-field__outline::before {\n  border-image: repeating-linear-gradient(to right, rgba(var(--v-theme-on-surface), var(--v-disabled-opacity)) 0px, rgba(var(--v-theme-on-surface), var(--v-disabled-opacity)) 2px, transparent 2px, transparent 4px) 1 repeat;\n}\n\n.v-field--loading .v-field__outline::after,\n.v-field--loading .v-field__outline::before {\n  opacity: 0;\n}\n\n/* endregion */";
styleInject(css_248z$a);

var css_248z$9 = ".v-label {\n  align-items: center;\n  color: inherit;\n  display: inline-flex;\n  font-size: 1rem;\n  letter-spacing: 0.009375em;\n  min-width: 0;\n  opacity: var(--v-medium-emphasis-opacity);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.v-label--clickable {\n  cursor: pointer;\n}";
styleInject(css_248z$9);

const makeVLabelProps = propsFactory({
  text: String,
  clickable: Boolean,
  ...makeComponentProps(),
  ...makeThemeProps()
}, 'VLabel');
const VLabel = genericComponent()({
  name: 'VLabel',
  props: makeVLabelProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => vue.createVNode("label", {
      "class": ['v-label', {
        'v-label--clickable': props.clickable
      }, props.class],
      "style": props.style
    }, [props.text, slots.default?.()]));
    return {};
  }
});

const makeVFieldLabelProps = propsFactory({
  floating: Boolean,
  ...makeComponentProps()
}, 'VFieldLabel');
const VFieldLabel = genericComponent()({
  name: 'VFieldLabel',
  props: makeVFieldLabelProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => vue.createVNode(VLabel, {
      "class": ['v-field-label', {
        'v-field-label--floating': props.floating
      }, props.class],
      "style": props.style,
      "aria-hidden": props.floating || undefined
    }, slots));
    return {};
  }
});

function useInputIcon(props) {
  const {
    t
  } = useLocale();
  function InputIcon(_ref) {
    let {
      name
    } = _ref;
    const localeKey = {
      prepend: 'prependAction',
      prependInner: 'prependAction',
      append: 'appendAction',
      appendInner: 'appendAction',
      clear: 'clear'
    }[name];
    const listener = props[`onClick:${name}`];
    const label = listener && localeKey ? t(`$vuetify.input.${localeKey}`, props.label ?? '') : undefined;
    return vue.createVNode(VIcon, {
      "icon": props[`${name}Icon`],
      "aria-label": label,
      "onClick": listener
    }, null);
  }
  return {
    InputIcon
  };
}

// Composables
// Composables
const makeFocusProps = propsFactory({
  focused: Boolean,
  'onUpdate:focused': EventProp()
}, 'focus');
function useFocus(props) {
  let name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getCurrentInstanceName();
  const isFocused = useProxiedModel(props, 'focused');
  const focusClasses = vue.computed(() => {
    return {
      [`${name}--focused`]: isFocused.value
    };
  });
  function focus() {
    isFocused.value = true;
  }
  function blur() {
    isFocused.value = false;
  }
  return {
    focusClasses,
    isFocused,
    focus,
    blur
  };
}

const allowedVariants = ['underlined', 'outlined', 'filled', 'solo', 'solo-inverted', 'solo-filled', 'plain'];
const makeVFieldProps = propsFactory({
  appendInnerIcon: IconValue,
  bgColor: String,
  clearable: Boolean,
  clearIcon: {
    type: IconValue,
    default: '$clear'
  },
  active: Boolean,
  centerAffix: {
    type: Boolean,
    default: undefined
  },
  color: String,
  baseColor: String,
  dirty: Boolean,
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  flat: Boolean,
  label: String,
  persistentClear: Boolean,
  prependInnerIcon: IconValue,
  reverse: Boolean,
  singleLine: Boolean,
  variant: {
    type: String,
    default: 'filled',
    validator: v => allowedVariants.includes(v)
  },
  'onClick:clear': EventProp(),
  'onClick:appendInner': EventProp(),
  'onClick:prependInner': EventProp(),
  ...makeComponentProps(),
  ...makeLoaderProps(),
  ...makeRoundedProps(),
  ...makeThemeProps()
}, 'VField');
const VField = genericComponent()({
  name: 'VField',
  inheritAttrs: false,
  props: {
    id: String,
    ...makeFocusProps(),
    ...makeVFieldProps()
  },
  emits: {
    'update:focused': focused => true,
    'update:modelValue': val => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      loaderClasses
    } = useLoader(props);
    const {
      focusClasses,
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const {
      InputIcon
    } = useInputIcon(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      rtlClasses
    } = useRtl();
    const isActive = vue.computed(() => props.dirty || props.active);
    const hasLabel = vue.computed(() => !props.singleLine && !!(props.label || slots.label));
    const uid = getUid();
    const id = vue.computed(() => props.id || `input-${uid}`);
    const messagesId = vue.computed(() => `${id.value}-messages`);
    const labelRef = vue.ref();
    const floatingLabelRef = vue.ref();
    const controlRef = vue.ref();
    const isPlainOrUnderlined = vue.computed(() => ['plain', 'underlined'].includes(props.variant));
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(vue.toRef(props, 'bgColor'));
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(vue.computed(() => {
      return props.error || props.disabled ? undefined : isActive.value && isFocused.value ? props.color : props.baseColor;
    }));
    vue.watch(isActive, val => {
      if (hasLabel.value) {
        const el = labelRef.value.$el;
        const targetEl = floatingLabelRef.value.$el;
        requestAnimationFrame(() => {
          const rect = nullifyTransforms(el);
          const targetRect = targetEl.getBoundingClientRect();
          const x = targetRect.x - rect.x;
          const y = targetRect.y - rect.y - (rect.height / 2 - targetRect.height / 2);
          const targetWidth = targetRect.width / 0.75;
          const width = Math.abs(targetWidth - rect.width) > 1 ? {
            maxWidth: convertToUnit(targetWidth)
          } : undefined;
          const style = getComputedStyle(el);
          const targetStyle = getComputedStyle(targetEl);
          const duration = parseFloat(style.transitionDuration) * 1000 || 150;
          const scale = parseFloat(targetStyle.getPropertyValue('--v-field-label-scale'));
          const color = targetStyle.getPropertyValue('color');
          el.style.visibility = 'visible';
          targetEl.style.visibility = 'hidden';
          animate(el, {
            transform: `translate(${x}px, ${y}px) scale(${scale})`,
            color,
            ...width
          }, {
            duration,
            easing: standardEasing,
            direction: val ? 'normal' : 'reverse'
          }).finished.then(() => {
            el.style.removeProperty('visibility');
            targetEl.style.removeProperty('visibility');
          });
        });
      }
    }, {
      flush: 'post'
    });
    const slotProps = vue.computed(() => ({
      isActive,
      isFocused,
      controlRef,
      blur,
      focus
    }));
    function onClick(e) {
      if (e.target !== document.activeElement) {
        e.preventDefault();
      }
    }
    useRender(() => {
      const isOutlined = props.variant === 'outlined';
      const hasPrepend = slots['prepend-inner'] || props.prependInnerIcon;
      const hasClear = !!(props.clearable || slots.clear);
      const hasAppend = !!(slots['append-inner'] || props.appendInnerIcon || hasClear);
      const label = slots.label ? slots.label({
        ...slotProps.value,
        label: props.label,
        props: {
          for: id.value
        }
      }) : props.label;
      return vue.createVNode("div", vue.mergeProps({
        "class": ['v-field', {
          'v-field--active': isActive.value,
          'v-field--appended': hasAppend,
          'v-field--center-affix': props.centerAffix ?? !isPlainOrUnderlined.value,
          'v-field--disabled': props.disabled,
          'v-field--dirty': props.dirty,
          'v-field--error': props.error,
          'v-field--flat': props.flat,
          'v-field--has-background': !!props.bgColor,
          'v-field--persistent-clear': props.persistentClear,
          'v-field--prepended': hasPrepend,
          'v-field--reverse': props.reverse,
          'v-field--single-line': props.singleLine,
          'v-field--no-label': !label,
          [`v-field--variant-${props.variant}`]: true
        }, themeClasses.value, backgroundColorClasses.value, focusClasses.value, loaderClasses.value, roundedClasses.value, rtlClasses.value, props.class],
        "style": [backgroundColorStyles.value, props.style],
        "onClick": onClick
      }, attrs), [vue.createVNode("div", {
        "class": "v-field__overlay"
      }, null), vue.createVNode(LoaderSlot, {
        "name": "v-field",
        "active": !!props.loading,
        "color": props.error ? 'error' : typeof props.loading === 'string' ? props.loading : props.color
      }, {
        default: slots.loader
      }), hasPrepend && vue.createVNode("div", {
        "key": "prepend",
        "class": "v-field__prepend-inner"
      }, [props.prependInnerIcon && vue.createVNode(InputIcon, {
        "key": "prepend-icon",
        "name": "prependInner"
      }, null), slots['prepend-inner']?.(slotProps.value)]), vue.createVNode("div", {
        "class": "v-field__field",
        "data-no-activator": ""
      }, [['filled', 'solo', 'solo-inverted', 'solo-filled'].includes(props.variant) && hasLabel.value && vue.createVNode(VFieldLabel, {
        "key": "floating-label",
        "ref": floatingLabelRef,
        "class": [textColorClasses.value],
        "floating": true,
        "for": id.value,
        "style": textColorStyles.value
      }, {
        default: () => [label]
      }), vue.createVNode(VFieldLabel, {
        "ref": labelRef,
        "for": id.value
      }, {
        default: () => [label]
      }), slots.default?.({
        ...slotProps.value,
        props: {
          id: id.value,
          class: 'v-field__input',
          'aria-describedby': messagesId.value
        },
        focus,
        blur
      })]), hasClear && vue.createVNode(VExpandXTransition, {
        "key": "clear"
      }, {
        default: () => [vue.withDirectives(vue.createVNode("div", {
          "class": "v-field__clearable",
          "onMousedown": e => {
            e.preventDefault();
            e.stopPropagation();
          }
        }, [slots.clear ? slots.clear() : vue.createVNode(InputIcon, {
          "name": "clear"
        }, null)]), [[vue.vShow, props.dirty]])]
      }), hasAppend && vue.createVNode("div", {
        "key": "append",
        "class": "v-field__append-inner"
      }, [slots['append-inner']?.(slotProps.value), props.appendInnerIcon && vue.createVNode(InputIcon, {
        "key": "append-icon",
        "name": "appendInner"
      }, null)]), vue.createVNode("div", {
        "class": ['v-field__outline', textColorClasses.value],
        "style": textColorStyles.value
      }, [isOutlined && vue.createVNode(vue.Fragment, null, [vue.createVNode("div", {
        "class": "v-field__outline__start"
      }, null), hasLabel.value && vue.createVNode("div", {
        "class": "v-field__outline__notch"
      }, [vue.createVNode(VFieldLabel, {
        "ref": floatingLabelRef,
        "floating": true,
        "for": id.value
      }, {
        default: () => [label]
      })]), vue.createVNode("div", {
        "class": "v-field__outline__end"
      }, null)]), isPlainOrUnderlined.value && hasLabel.value && vue.createVNode(VFieldLabel, {
        "ref": floatingLabelRef,
        "floating": true,
        "for": id.value
      }, {
        default: () => [label]
      })])]);
    });
    return {
      controlRef
    };
  }
});
// TODO: this is kinda slow, might be better to implicitly inherit props instead
function filterFieldProps(attrs) {
  const keys = Object.keys(VField.props).filter(k => !isOn(k) && k !== 'class' && k !== 'style');
  return pick(attrs, keys);
}

var css_248z$8 = ".v-input {\n  display: grid;\n  flex: 1 1 auto;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  --v-input-chips-margin-top: 2px;\n}\n.v-input--disabled {\n  pointer-events: none;\n}\n.v-input--density-default {\n  --v-input-control-height: 56px;\n  --v-input-padding-top: 15px;\n}\n\n.v-input--density-comfortable {\n  --v-input-control-height: 48px;\n  --v-input-padding-top: 11px;\n}\n\n.v-input--density-compact {\n  --v-input-control-height: 40px;\n  --v-input-padding-top: 7px;\n}\n\n.v-input--density-default {\n  --v-input-chips-margin-bottom: 0px;\n}\n\n.v-input--density-comfortable {\n  --v-input-chips-margin-bottom: 2px;\n}\n\n.v-input--density-compact {\n  --v-input-chips-margin-bottom: 4px;\n}\n\n.v-input--vertical {\n  grid-template-areas: \"append\" \"control\" \"prepend\";\n  grid-template-rows: max-content auto max-content;\n  grid-template-columns: min-content;\n}\n.v-input--vertical .v-input__prepend {\n  margin-block-start: 16px;\n}\n.v-input--vertical .v-input__append {\n  margin-block-end: 16px;\n}\n\n.v-input--horizontal {\n  grid-template-areas: \"prepend control append\" \"a messages b\";\n  grid-template-columns: max-content minmax(0, 1fr) max-content;\n  grid-template-rows: auto auto;\n}\n.v-input--horizontal .v-input__prepend {\n  margin-inline-end: 16px;\n}\n.v-input--horizontal .v-input__append {\n  margin-inline-start: 16px;\n}\n\n.v-input__details {\n  align-items: flex-end;\n  display: flex;\n  font-size: 0.75rem;\n  font-weight: 400;\n  grid-area: messages;\n  letter-spacing: 0.0333333333em;\n  line-height: normal;\n  min-height: 22px;\n  padding-top: 6px;\n  overflow: hidden;\n  justify-content: space-between;\n}\n\n.v-input__details > .v-icon,\n.v-input__prepend > .v-icon,\n.v-input__append > .v-icon {\n  opacity: var(--v-medium-emphasis-opacity);\n}\n.v-input--disabled .v-input__details > .v-icon,\n.v-input--disabled .v-input__details .v-messages, .v-input--error .v-input__details > .v-icon,\n.v-input--error .v-input__details .v-messages,\n.v-input--disabled .v-input__prepend > .v-icon,\n.v-input--disabled .v-input__prepend .v-messages,\n.v-input--error .v-input__prepend > .v-icon,\n.v-input--error .v-input__prepend .v-messages,\n.v-input--disabled .v-input__append > .v-icon,\n.v-input--disabled .v-input__append .v-messages,\n.v-input--error .v-input__append > .v-icon,\n.v-input--error .v-input__append .v-messages {\n  opacity: 1;\n}\n.v-input--disabled .v-input__details,\n.v-input--disabled .v-input__prepend,\n.v-input--disabled .v-input__append {\n  opacity: var(--v-disabled-opacity);\n}\n.v-input--error:not(.v-input--disabled) .v-input__details > .v-icon,\n.v-input--error:not(.v-input--disabled) .v-input__details .v-messages,\n.v-input--error:not(.v-input--disabled) .v-input__prepend > .v-icon,\n.v-input--error:not(.v-input--disabled) .v-input__prepend .v-messages,\n.v-input--error:not(.v-input--disabled) .v-input__append > .v-icon,\n.v-input--error:not(.v-input--disabled) .v-input__append .v-messages {\n  color: rgb(var(--v-theme-error));\n}\n\n.v-input__prepend,\n.v-input__append {\n  display: flex;\n  align-items: flex-start;\n  padding-top: var(--v-input-padding-top);\n}\n.v-input--center-affix .v-input__prepend,\n.v-input--center-affix .v-input__append {\n  align-items: center;\n  padding-top: 0;\n}\n\n.v-input__prepend {\n  grid-area: prepend;\n}\n\n.v-input__append {\n  grid-area: append;\n}\n\n.v-input__control {\n  display: flex;\n  grid-area: control;\n}";
styleInject(css_248z$8);

var css_248z$7 = ".v-messages {\n  flex: 1 1 auto;\n  font-size: 12px;\n  min-height: 14px;\n  min-width: 1px;\n  opacity: var(--v-medium-emphasis-opacity);\n  position: relative;\n}\n.v-messages__message {\n  line-height: 12px;\n  word-break: break-word;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  hyphens: auto;\n  transition-duration: 150ms;\n}";
styleInject(css_248z$7);

const makeVMessagesProps = propsFactory({
  active: Boolean,
  color: String,
  messages: {
    type: [Array, String],
    default: () => []
  },
  ...makeComponentProps(),
  ...makeTransitionProps$1({
    transition: {
      component: VSlideYTransition,
      leaveAbsolute: true,
      group: true
    }
  })
}, 'VMessages');
const VMessages = genericComponent()({
  name: 'VMessages',
  props: makeVMessagesProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const messages = vue.computed(() => wrapInArray(props.messages));
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(vue.computed(() => props.color));
    useRender(() => vue.createVNode(MaybeTransition, {
      "transition": props.transition,
      "tag": "div",
      "class": ['v-messages', textColorClasses.value, props.class],
      "style": [textColorStyles.value, props.style],
      "role": "alert",
      "aria-live": "polite"
    }, {
      default: () => [props.active && messages.value.map((message, i) => vue.createVNode("div", {
        "class": "v-messages__message",
        "key": `${i}-${messages.value}`
      }, [slots.message ? slots.message({
        message
      }) : message]))]
    }));
    return {};
  }
});

// Composables
const FormKey = Symbol.for('vuetify:form');
function useForm() {
  return vue.inject(FormKey, null);
}

// Composables
const makeValidationProps = propsFactory({
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  errorMessages: {
    type: [Array, String],
    default: () => []
  },
  maxErrors: {
    type: [Number, String],
    default: 1
  },
  name: String,
  label: String,
  readonly: {
    type: Boolean,
    default: null
  },
  rules: {
    type: Array,
    default: () => []
  },
  modelValue: null,
  validateOn: String,
  validationValue: null,
  ...makeFocusProps()
}, 'validation');
function useValidation(props) {
  let name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getCurrentInstanceName();
  let id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : getUid();
  const model = useProxiedModel(props, 'modelValue');
  const validationModel = vue.computed(() => props.validationValue === undefined ? model.value : props.validationValue);
  const form = useForm();
  const internalErrorMessages = vue.ref([]);
  const isPristine = vue.shallowRef(true);
  const isDirty = vue.computed(() => !!(wrapInArray(model.value === '' ? null : model.value).length || wrapInArray(validationModel.value === '' ? null : validationModel.value).length));
  const isDisabled = vue.computed(() => !!(props.disabled ?? form?.isDisabled.value));
  const isReadonly = vue.computed(() => !!(props.readonly ?? form?.isReadonly.value));
  const errorMessages = vue.computed(() => {
    return props.errorMessages.length ? wrapInArray(props.errorMessages).slice(0, Math.max(0, +props.maxErrors)) : internalErrorMessages.value;
  });
  const validateOn = vue.computed(() => {
    let value = (props.validateOn ?? form?.validateOn.value) || 'input';
    if (value === 'lazy') value = 'input lazy';
    const set = new Set(value?.split(' ') ?? []);
    return {
      blur: set.has('blur') || set.has('input'),
      input: set.has('input'),
      submit: set.has('submit'),
      lazy: set.has('lazy')
    };
  });
  const isValid = vue.computed(() => {
    if (props.error || props.errorMessages.length) return false;
    if (!props.rules.length) return true;
    if (isPristine.value) {
      return internalErrorMessages.value.length || validateOn.value.lazy ? null : true;
    } else {
      return !internalErrorMessages.value.length;
    }
  });
  const isValidating = vue.shallowRef(false);
  const validationClasses = vue.computed(() => {
    return {
      [`${name}--error`]: isValid.value === false,
      [`${name}--dirty`]: isDirty.value,
      [`${name}--disabled`]: isDisabled.value,
      [`${name}--readonly`]: isReadonly.value
    };
  });
  const uid = vue.computed(() => props.name ?? vue.unref(id));
  vue.onBeforeMount(() => {
    form?.register({
      id: uid.value,
      validate,
      reset,
      resetValidation
    });
  });
  vue.onBeforeUnmount(() => {
    form?.unregister(uid.value);
  });
  vue.onMounted(async () => {
    if (!validateOn.value.lazy) {
      await validate(true);
    }
    form?.update(uid.value, isValid.value, errorMessages.value);
  });
  useToggleScope(() => validateOn.value.input, () => {
    vue.watch(validationModel, () => {
      if (validationModel.value != null) {
        validate();
      } else if (props.focused) {
        const unwatch = vue.watch(() => props.focused, val => {
          if (!val) validate();
          unwatch();
        });
      }
    });
  });
  useToggleScope(() => validateOn.value.blur, () => {
    vue.watch(() => props.focused, val => {
      if (!val) validate();
    });
  });
  vue.watch(isValid, () => {
    form?.update(uid.value, isValid.value, errorMessages.value);
  });
  function reset() {
    model.value = null;
    vue.nextTick(resetValidation);
  }
  function resetValidation() {
    isPristine.value = true;
    if (!validateOn.value.lazy) {
      validate(true);
    } else {
      internalErrorMessages.value = [];
    }
  }
  async function validate() {
    let silent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    const results = [];
    isValidating.value = true;
    for (const rule of props.rules) {
      if (results.length >= +(props.maxErrors ?? 1)) {
        break;
      }
      const handler = typeof rule === 'function' ? rule : () => rule;
      const result = await handler(validationModel.value);
      if (result === true) continue;
      if (result !== false && typeof result !== 'string') {
        // eslint-disable-next-line no-console
        console.warn(`${result} is not a valid value. Rule functions must return boolean true or a string.`);
        continue;
      }
      results.push(result || '');
    }
    internalErrorMessages.value = results;
    isValidating.value = false;
    isPristine.value = silent;
    return internalErrorMessages.value;
  }
  return {
    errorMessages,
    isDirty,
    isDisabled,
    isReadonly,
    isPristine,
    isValid,
    isValidating,
    reset,
    resetValidation,
    validate,
    validationClasses
  };
}

const makeVInputProps = propsFactory({
  id: String,
  appendIcon: IconValue,
  centerAffix: {
    type: Boolean,
    default: true
  },
  prependIcon: IconValue,
  hideDetails: [Boolean, String],
  hint: String,
  persistentHint: Boolean,
  messages: {
    type: [Array, String],
    default: () => []
  },
  direction: {
    type: String,
    default: 'horizontal',
    validator: v => ['horizontal', 'vertical'].includes(v)
  },
  'onClick:prepend': EventProp(),
  'onClick:append': EventProp(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeValidationProps()
}, 'VInput');
const VInput = genericComponent()({
  name: 'VInput',
  props: {
    ...makeVInputProps()
  },
  emits: {
    'update:modelValue': val => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots,
      emit
    } = _ref;
    const {
      densityClasses
    } = useDensity(props);
    const {
      rtlClasses
    } = useRtl();
    const {
      InputIcon
    } = useInputIcon(props);
    const uid = getUid();
    const id = vue.computed(() => props.id || `input-${uid}`);
    const messagesId = vue.computed(() => `${id.value}-messages`);
    const {
      errorMessages,
      isDirty,
      isDisabled,
      isReadonly,
      isPristine,
      isValid,
      isValidating,
      reset,
      resetValidation,
      validate,
      validationClasses
    } = useValidation(props, 'v-input', id);
    const slotProps = vue.computed(() => ({
      id,
      messagesId,
      isDirty,
      isDisabled,
      isReadonly,
      isPristine,
      isValid,
      isValidating,
      reset,
      resetValidation,
      validate
    }));
    const messages = vue.computed(() => {
      if (props.errorMessages?.length || !isPristine.value && errorMessages.value.length) {
        return errorMessages.value;
      } else if (props.hint && (props.persistentHint || props.focused)) {
        return props.hint;
      } else {
        return props.messages;
      }
    });
    useRender(() => {
      const hasPrepend = !!(slots.prepend || props.prependIcon);
      const hasAppend = !!(slots.append || props.appendIcon);
      const hasMessages = messages.value.length > 0;
      const hasDetails = !props.hideDetails || props.hideDetails === 'auto' && (hasMessages || !!slots.details);
      return vue.createVNode("div", {
        "class": ['v-input', `v-input--${props.direction}`, {
          'v-input--center-affix': props.centerAffix
        }, densityClasses.value, rtlClasses.value, validationClasses.value, props.class],
        "style": props.style
      }, [hasPrepend && vue.createVNode("div", {
        "key": "prepend",
        "class": "v-input__prepend"
      }, [slots.prepend?.(slotProps.value), props.prependIcon && vue.createVNode(InputIcon, {
        "key": "prepend-icon",
        "name": "prepend"
      }, null)]), slots.default && vue.createVNode("div", {
        "class": "v-input__control"
      }, [slots.default?.(slotProps.value)]), hasAppend && vue.createVNode("div", {
        "key": "append",
        "class": "v-input__append"
      }, [props.appendIcon && vue.createVNode(InputIcon, {
        "key": "append-icon",
        "name": "append"
      }, null), slots.append?.(slotProps.value)]), hasDetails && vue.createVNode("div", {
        "class": "v-input__details"
      }, [vue.createVNode(VMessages, {
        "id": messagesId.value,
        "active": hasMessages,
        "messages": messages.value
      }, {
        message: slots.message
      }), slots.details?.(slotProps.value)])]);
    });
    return {
      reset,
      resetValidation,
      validate
    };
  }
});

const activeTypes = ['color', 'file', 'time', 'date', 'datetime-local', 'week', 'month'];
const makeVTextFieldProps = propsFactory({
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: Function,
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  suffix: String,
  role: String,
  type: {
    type: String,
    default: 'text'
  },
  modelModifiers: Object,
  ...makeVInputProps(),
  ...makeVFieldProps()
}, 'VTextField');
const VTextField = genericComponent()({
  name: 'VTextField',
  directives: {
    Intersect: Intersect$1
  },
  inheritAttrs: false,
  props: makeVTextFieldProps(),
  emits: {
    'click:control': e => true,
    'mousedown:control': e => true,
    'update:focused': focused => true,
    'update:modelValue': val => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const model = useProxiedModel(props, 'modelValue');
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const counterValue = vue.computed(() => {
      return typeof props.counterValue === 'function' ? props.counterValue(model.value) : (model.value ?? '').toString().length;
    });
    const max = vue.computed(() => {
      if (attrs.maxlength) return attrs.maxlength;
      if (!props.counter || typeof props.counter !== 'number' && typeof props.counter !== 'string') return undefined;
      return props.counter;
    });
    const isPlainOrUnderlined = vue.computed(() => ['plain', 'underlined'].includes(props.variant));
    function onIntersect(isIntersecting, entries) {
      if (!props.autofocus || !isIntersecting) return;
      entries[0].target?.focus?.();
    }
    const vInputRef = vue.ref();
    const vFieldRef = vue.ref();
    const inputRef = vue.ref();
    const isActive = vue.computed(() => activeTypes.includes(props.type) || props.persistentPlaceholder || isFocused.value || props.active);
    function onFocus() {
      if (inputRef.value !== document.activeElement) {
        inputRef.value?.focus();
      }
      if (!isFocused.value) focus();
    }
    function onControlMousedown(e) {
      emit('mousedown:control', e);
      if (e.target === inputRef.value) return;
      onFocus();
      e.preventDefault();
    }
    function onControlClick(e) {
      onFocus();
      emit('click:control', e);
    }
    function onClear(e) {
      e.stopPropagation();
      onFocus();
      vue.nextTick(() => {
        model.value = null;
        callEvent(props['onClick:clear'], e);
      });
    }
    function onInput(e) {
      const el = e.target;
      model.value = el.value;
      if (props.modelModifiers?.trim && ['text', 'search', 'password', 'tel', 'url'].includes(props.type)) {
        const caretPosition = [el.selectionStart, el.selectionEnd];
        vue.nextTick(() => {
          el.selectionStart = caretPosition[0];
          el.selectionEnd = caretPosition[1];
        });
      }
    }
    useRender(() => {
      const hasCounter = !!(slots.counter || props.counter || props.counterValue);
      const hasDetails = !!(hasCounter || slots.details);
      const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
      const [{
        modelValue: _,
        ...inputProps
      }] = VInput.filterProps(props);
      const [fieldProps] = filterFieldProps(props);
      return vue.createVNode(VInput, vue.mergeProps({
        "ref": vInputRef,
        "modelValue": model.value,
        "onUpdate:modelValue": $event => model.value = $event,
        "class": ['v-text-field', {
          'v-text-field--prefixed': props.prefix,
          'v-text-field--suffixed': props.suffix,
          'v-text-field--plain-underlined': ['plain', 'underlined'].includes(props.variant)
        }, props.class],
        "style": props.style
      }, rootAttrs, inputProps, {
        "centerAffix": !isPlainOrUnderlined.value,
        "focused": isFocused.value
      }), {
        ...slots,
        default: _ref2 => {
          let {
            id,
            isDisabled,
            isDirty,
            isReadonly,
            isValid
          } = _ref2;
          return vue.createVNode(VField, vue.mergeProps({
            "ref": vFieldRef,
            "onMousedown": onControlMousedown,
            "onClick": onControlClick,
            "onClick:clear": onClear,
            "onClick:prependInner": props['onClick:prependInner'],
            "onClick:appendInner": props['onClick:appendInner'],
            "role": props.role
          }, fieldProps, {
            "id": id.value,
            "active": isActive.value || isDirty.value,
            "dirty": isDirty.value || props.dirty,
            "disabled": isDisabled.value,
            "focused": isFocused.value,
            "error": isValid.value === false
          }), {
            ...slots,
            default: _ref3 => {
              let {
                props: {
                  class: fieldClass,
                  ...slotProps
                }
              } = _ref3;
              const inputNode = vue.withDirectives(vue.createVNode("input", vue.mergeProps({
                "ref": inputRef,
                "value": model.value,
                "onInput": onInput,
                "autofocus": props.autofocus,
                "readonly": isReadonly.value,
                "disabled": isDisabled.value,
                "name": props.name,
                "placeholder": props.placeholder,
                "size": 1,
                "type": props.type,
                "onFocus": onFocus,
                "onBlur": blur
              }, slotProps, inputAttrs), null), [[vue.resolveDirective("intersect"), {
                handler: onIntersect
              }, null, {
                once: true
              }]]);
              return vue.createVNode(vue.Fragment, null, [props.prefix && vue.createVNode("span", {
                "class": "v-text-field__prefix"
              }, [vue.createVNode("span", {
                "class": "v-text-field__prefix__text"
              }, [props.prefix])]), slots.default ? vue.createVNode("div", {
                "class": fieldClass,
                "data-no-activator": ""
              }, [slots.default(), inputNode]) : vue.cloneVNode(inputNode, {
                class: fieldClass
              }), props.suffix && vue.createVNode("span", {
                "class": "v-text-field__suffix"
              }, [vue.createVNode("span", {
                "class": "v-text-field__suffix__text"
              }, [props.suffix])])]);
            }
          });
        },
        details: hasDetails ? slotProps => vue.createVNode(vue.Fragment, null, [slots.details?.(slotProps), hasCounter && vue.createVNode(vue.Fragment, null, [vue.createVNode("span", null, null), vue.createVNode(VCounter, {
          "active": props.persistentCounter || isFocused.value,
          "value": counterValue.value,
          "max": max.value
        }, slots.counter)])]) : undefined
      });
    });
    return forwardRefs({}, vInputRef, vFieldRef, inputRef);
  }
});

var css_248z$6 = ".v-toolbar {\n  align-items: flex-start;\n  display: flex;\n  flex: none;\n  flex-direction: column;\n  justify-content: space-between;\n  max-width: 100%;\n  overflow: hidden;\n  position: relative;\n  transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  transition-property: height, width, transform, max-width, left, right, top, bottom, box-shadow;\n  width: 100%;\n  border-color: rgba(var(--v-border-color), var(--v-border-opacity));\n  border-style: solid;\n  border-width: 0;\n  box-shadow: 0px 0px 0px 0px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));\n  border-radius: 0;\n  background: rgb(var(--v-theme-on-surface-variant));\n  color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));\n}\n.v-toolbar--border {\n  border-width: thin;\n  box-shadow: none;\n}\n.v-toolbar--absolute {\n  position: absolute;\n}\n.v-toolbar--collapse {\n  max-width: 112px;\n  overflow: hidden;\n}\n.v-toolbar--collapse .v-toolbar-title {\n  display: none;\n}\n.v-locale--is-ltr.v-toolbar--collapse, .v-locale--is-ltr .v-toolbar--collapse {\n  border-bottom-right-radius: 24px;\n}\n\n.v-locale--is-rtl.v-toolbar--collapse, .v-locale--is-rtl .v-toolbar--collapse {\n  border-bottom-left-radius: 24px;\n}\n\n.v-toolbar--flat {\n  box-shadow: 0px 0px 0px 0px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));\n}\n.v-toolbar--floating {\n  display: inline-flex;\n}\n.v-toolbar--rounded {\n  border-radius: 4px;\n}\n\n.v-toolbar__content,\n.v-toolbar__extension {\n  align-items: center;\n  display: flex;\n  flex: 0 0 auto;\n  position: relative;\n  transition: inherit;\n  width: 100%;\n}\n\n.v-toolbar__content > .v-btn:first-child {\n  margin-inline-start: 10px;\n}\n.v-toolbar__content > .v-btn:last-child {\n  margin-inline-end: 10px;\n}\n.v-toolbar__content > .v-toolbar-title {\n  margin-inline-start: 16px;\n}\n.v-toolbar--density-prominent .v-toolbar__content {\n  align-items: flex-start;\n}\n\n.v-toolbar__image {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  opacity: var(--v-toolbar-image-opacity, 1);\n  transition-property: opacity;\n}\n\n.v-toolbar__prepend,\n.v-toolbar__append {\n  align-items: center;\n  align-self: stretch;\n  display: flex;\n}\n\n.v-toolbar__prepend {\n  margin-inline-start: 10px;\n  margin-inline-end: auto;\n}\n\n.v-toolbar__append {\n  margin-inline-start: auto;\n  margin-inline-end: 10px;\n}\n\n.v-toolbar-title {\n  flex: 1 1;\n  font-size: 1.25rem;\n  min-width: 0;\n  font-size: 1.25rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  line-height: 1.75rem;\n  text-transform: none;\n}\n.v-toolbar--density-prominent .v-toolbar-title {\n  align-self: flex-end;\n  padding-bottom: 6px;\n  font-size: 1.5rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  line-height: 2.25rem;\n  text-transform: none;\n}\n\n.v-toolbar-title__placeholder {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.v-toolbar-items {\n  display: flex;\n  height: inherit;\n  align-self: stretch;\n}\n.v-toolbar-items > .v-btn {\n  border-radius: 0;\n}";
styleInject(css_248z$6);

const makeVToolbarTitleProps = propsFactory({
  text: String,
  ...makeComponentProps(),
  ...makeTagProps()
}, 'VToolbarTitle');
const VToolbarTitle = genericComponent()({
  name: 'VToolbarTitle',
  props: makeVToolbarTitleProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      const hasText = !!(slots.default || slots.text || props.text);
      return vue.createVNode(props.tag, {
        "class": ['v-toolbar-title', props.class],
        "style": props.style
      }, {
        default: () => [hasText && vue.createVNode("div", {
          "class": "v-toolbar-title__placeholder"
        }, [slots.text ? slots.text() : props.text, slots.default?.()])]
      });
    });
    return {};
  }
});

const allowedDensities = [null, 'prominent', 'default', 'comfortable', 'compact'];
const makeVToolbarProps = propsFactory({
  absolute: Boolean,
  collapse: Boolean,
  color: String,
  density: {
    type: String,
    default: 'default',
    validator: v => allowedDensities.includes(v)
  },
  extended: Boolean,
  extensionHeight: {
    type: [Number, String],
    default: 48
  },
  flat: Boolean,
  floating: Boolean,
  height: {
    type: [Number, String],
    default: 64
  },
  image: String,
  title: String,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeElevationProps(),
  ...makeRoundedProps(),
  ...makeTagProps({
    tag: 'header'
  }),
  ...makeThemeProps()
}, 'VToolbar');
const VToolbar = genericComponent()({
  name: 'VToolbar',
  props: makeVToolbarProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(vue.toRef(props, 'color'));
    const {
      borderClasses
    } = useBorder(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      themeClasses
    } = provideTheme(props);
    const {
      rtlClasses
    } = useRtl();
    const isExtended = vue.shallowRef(!!(props.extended || slots.extension?.()));
    const contentHeight = vue.computed(() => parseInt(Number(props.height) + (props.density === 'prominent' ? Number(props.height) : 0) - (props.density === 'comfortable' ? 8 : 0) - (props.density === 'compact' ? 16 : 0), 10));
    const extensionHeight = vue.computed(() => isExtended.value ? parseInt(Number(props.extensionHeight) + (props.density === 'prominent' ? Number(props.extensionHeight) : 0) - (props.density === 'comfortable' ? 4 : 0) - (props.density === 'compact' ? 8 : 0), 10) : 0);
    provideDefaults({
      VBtn: {
        variant: 'text'
      }
    });
    useRender(() => {
      const hasTitle = !!(props.title || slots.title);
      const hasImage = !!(slots.image || props.image);
      const extension = slots.extension?.();
      isExtended.value = !!(props.extended || extension);
      return vue.createVNode(props.tag, {
        "class": ['v-toolbar', {
          'v-toolbar--absolute': props.absolute,
          'v-toolbar--collapse': props.collapse,
          'v-toolbar--flat': props.flat,
          'v-toolbar--floating': props.floating,
          [`v-toolbar--density-${props.density}`]: true
        }, backgroundColorClasses.value, borderClasses.value, elevationClasses.value, roundedClasses.value, themeClasses.value, rtlClasses.value, props.class],
        "style": [backgroundColorStyles.value, props.style]
      }, {
        default: () => [hasImage && vue.createVNode("div", {
          "key": "image",
          "class": "v-toolbar__image"
        }, [!slots.image ? vue.createVNode(VImg, {
          "key": "image-img",
          "cover": true,
          "src": props.image
        }, null) : vue.createVNode(VDefaultsProvider, {
          "key": "image-defaults",
          "disabled": !props.image,
          "defaults": {
            VImg: {
              cover: true,
              src: props.image
            }
          }
        }, slots.image)]), vue.createVNode(VDefaultsProvider, {
          "defaults": {
            VTabs: {
              height: convertToUnit(contentHeight.value)
            }
          }
        }, {
          default: () => [vue.createVNode("div", {
            "class": "v-toolbar__content",
            "style": {
              height: convertToUnit(contentHeight.value)
            }
          }, [slots.prepend && vue.createVNode("div", {
            "class": "v-toolbar__prepend"
          }, [slots.prepend?.()]), hasTitle && vue.createVNode(VToolbarTitle, {
            "key": "title",
            "text": props.title
          }, {
            text: slots.title
          }), slots.default?.(), slots.append && vue.createVNode("div", {
            "class": "v-toolbar__append"
          }, [slots.append?.()])])]
        }), vue.createVNode(VDefaultsProvider, {
          "defaults": {
            VTabs: {
              height: convertToUnit(extensionHeight.value)
            }
          }
        }, {
          default: () => [vue.createVNode(VExpandTransition, null, {
            default: () => [isExtended.value && vue.createVNode("div", {
              "class": "v-toolbar__extension",
              "style": {
                height: convertToUnit(extensionHeight.value)
              }
            }, [extension])]
          })]
        })]
      });
    });
    return {
      contentHeight,
      extensionHeight
    };
  }
});

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
                                                                          
                                                            
                                                        
                                                      
                                                              
                                                                    
                                                      
                                                      
                                                                  
                                                                  
                                                                        
                                                        
                                                            
  return vue.openBlock(), vue.createBlock(VDialog, {
    modelValue: _ctx.modelValue,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.$emit('update:modelValue', $event)),
    persistent: "",
    "max-width": "600px"
  }, {
    default: vue.withCtx(() => [vue.createVNode(VCard, null, {
      default: vue.withCtx(() => [vue.createVNode(VToolbar, null, {
        default: vue.withCtx(() => [vue.createVNode(VToolbarTitle, null, {
          default: vue.withCtx(() => [vue.createTextVNode(vue.toDisplayString(_ctx.t('svme.insertNetworkImageDialog.title')), 1 /* TEXT */)]),

          _: 1 /* STABLE */
        }), vue.createVNode(VSpacer), vue.createVNode(VBtn, {
          icon: "",
          dense: "",
          elevation: "0",
          onClick: _cache[0] || (_cache[0] = $event => _ctx.hide())
        }, {
          default: vue.withCtx(() => [vue.createVNode(VIcon, null, {
            default: vue.withCtx(() => [vue.createTextVNode(vue.toDisplayString(_ctx.mdiClose), 1 /* TEXT */)]),

            _: 1 /* STABLE */
          })]),

          _: 1 /* STABLE */
        })]),

        _: 1 /* STABLE */
      }), vue.createVNode(VCardText, null, {
        default: vue.withCtx(() => [vue.createVNode(VContainer, null, {
          default: vue.withCtx(() => [vue.createVNode(VRow, null, {
            default: vue.withCtx(() => [vue.createVNode(VCol, {
              cols: "12"
            }, {
              default: vue.withCtx(() => [vue.createVNode(VTextField, {
                modelValue: _ctx.url,
                placeholder: _ctx.t('svme.insertNetworkImageDialog.urlFieldPlaceHolder'),
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.$emit('update:url', $event)),
                required: ""
              }, null, 8 /* PROPS */, ["modelValue", "placeholder"])]),
              _: 1 /* STABLE */
            })]),

            _: 1 /* STABLE */
          })]),

          _: 1 /* STABLE */
        })]),

        _: 1 /* STABLE */
      }), vue.createVNode(VCardActions, null, {
        default: vue.withCtx(() => [vue.createVNode(VSpacer), vue.createVNode(VBtn, {
          color: "blue darken-1",
          text: "",
          onClick: _cache[2] || (_cache[2] = $event => _ctx.hide())
        }, {
          default: vue.withCtx(() => [vue.createTextVNode(vue.toDisplayString(_ctx.t('svme.insertNetworkImageDialog.cancel')), 1 /* TEXT */)]),

          _: 1 /* STABLE */
        }), vue.createVNode(VBtn, {
          color: "blue darken-1",
          text: "",
          onClick: _cache[3] || (_cache[3] = $event => _ctx.ok())
        }, {
          default: vue.withCtx(() => [vue.createTextVNode(vue.toDisplayString(_ctx.t('svme.insertNetworkImageDialog.ok')), 1 /* TEXT */)]),

          _: 1 /* STABLE */
        })]),

        _: 1 /* STABLE */
      })]),

      _: 1 /* STABLE */
    })]),

    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["modelValue"]);
}

script$5.render = render$5;
script$5.__file = "src/plugins/ToolbarImageBtnPlugin/InsertNetworkImageDialog.vue";

var script$4 = vue.defineComponent({
  setup() {
    const getVuetifyContext = vue.inject('getVuetifyContext');
    const context = getVuetifyContext();
    const {
      command,
      t
    } = context.methods;
    return {
      command,
      t
    };
  },
  components: {
    InsertNetworkImageDialog: script$5
  },
  props: {
    fnUploadImage: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      mdiImage,
      networkImageDialog: {
        show: false,
        url: '',
        title: ''
      }
    };
  },
  methods: {
    insert(params) {
      this.command('image', params);
    },
    showNetworkImageDialog() {
      console.log('---showNetworkImageDialog---');
      this.networkImageDialog.url = '';
      this.networkImageDialog.show = true;
    },
    hideNetworkImageDialog() {
      this.networkImageDialog.show = false;
    },
    insertNetworkImage() {
      this.insert({
        url: this.networkImageDialog.url,
        title: ''
      });
      this.hideNetworkImageDialog();
    },
    showUploadDialog() {
      const input = this.$refs.file;
      input.focus();
      input.click();
    },
    async uploadLocalImage() {
      const input = this.$refs.file;
      if (Array.isArray(input.files) && input.files.length > 0) {
        const url = await this.fnUploadImage(input.files[0]);
        this.insert({
          title: '',
          url
        });
      }
    }
  }
});

var css_248z$5 = ".v-list {\n  overflow: auto;\n  padding: 8px 0;\n  position: relative;\n  outline: none;\n  border-color: rgba(var(--v-border-color), var(--v-border-opacity));\n  border-style: solid;\n  border-width: 0;\n  box-shadow: 0px 0px 0px 0px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));\n  border-radius: 0;\n  background: rgba(var(--v-theme-surface));\n  color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));\n}\n.v-list--border {\n  border-width: thin;\n  box-shadow: none;\n}\n.v-list--disabled {\n  pointer-events: none;\n  user-select: none;\n}\n.v-list--nav {\n  padding-inline-start: 8px;\n  padding-inline-end: 8px;\n}\n.v-navigation-drawer--rail:not(.v-navigation-drawer--is-hovering.v-navigation-drawer--expand-on-hover) .v-list .v-avatar {\n  --v-avatar-height: 24px;\n}\n.v-list--rounded {\n  border-radius: 4px;\n}\n.v-list--subheader {\n  padding-top: 0;\n}\n\n.v-list-img {\n  border-radius: inherit;\n  display: flex;\n  height: 100%;\n  left: 0;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: -1;\n}\n\n.v-list-subheader {\n  align-items: center;\n  background: inherit;\n  color: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity));\n  display: flex;\n  font-size: 0.875rem;\n  font-weight: 400;\n  line-height: 1.375rem;\n  padding-inline-end: 16px;\n  min-height: 40px;\n  transition: 0.2s min-height cubic-bezier(0.4, 0, 0.2, 1);\n}\n.v-list-subheader__text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.v-list--density-default .v-list-subheader {\n  min-height: 40px;\n  padding-inline-start: calc(16px + var(--indent-padding)) !important;\n}\n\n.v-list--density-comfortable .v-list-subheader {\n  min-height: 36px;\n  padding-inline-start: calc(16px + var(--indent-padding)) !important;\n}\n\n.v-list--density-compact .v-list-subheader {\n  min-height: 32px;\n  padding-inline-start: calc(16px + var(--indent-padding)) !important;\n}\n\n.v-list-subheader--inset {\n  --indent-padding: 56px;\n}\n.v-list--nav .v-list-subheader {\n  font-size: 0.75rem;\n}\n.v-list-subheader--sticky {\n  background: inherit;\n  left: 0;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.v-list__overlay {\n  background-color: currentColor;\n  border-radius: inherit;\n  bottom: 0;\n  left: 0;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transition: opacity 0.2s ease-in-out;\n}";
styleInject(css_248z$5);

// Utilities

// List
const ListKey = Symbol.for('vuetify:list');
function createList() {
  const parent = vue.inject(ListKey, {
    hasPrepend: vue.shallowRef(false),
    updateHasPrepend: () => null
  });
  const data = {
    hasPrepend: vue.shallowRef(false),
    updateHasPrepend: value => {
      if (value) data.hasPrepend.value = value;
    }
  };
  vue.provide(ListKey, data);
  return parent;
}
function useList() {
  return vue.inject(ListKey, null);
}

const singleOpenStrategy = {
  open: _ref => {
    let {
      id,
      value,
      opened,
      parents
    } = _ref;
    if (value) {
      const newOpened = new Set();
      newOpened.add(id);
      let parent = parents.get(id);
      while (parent != null) {
        newOpened.add(parent);
        parent = parents.get(parent);
      }
      return newOpened;
    } else {
      opened.delete(id);
      return opened;
    }
  },
  select: () => null
};
const multipleOpenStrategy = {
  open: _ref2 => {
    let {
      id,
      value,
      opened,
      parents
    } = _ref2;
    if (value) {
      let parent = parents.get(id);
      opened.add(id);
      while (parent != null && parent !== id) {
        opened.add(parent);
        parent = parents.get(parent);
      }
      return opened;
    } else {
      opened.delete(id);
    }
    return opened;
  },
  select: () => null
};
const listOpenStrategy = {
  open: multipleOpenStrategy.open,
  select: _ref3 => {
    let {
      id,
      value,
      opened,
      parents
    } = _ref3;
    if (!value) return opened;
    const path = [];
    let parent = parents.get(id);
    while (parent != null) {
      path.push(parent);
      parent = parents.get(parent);
    }
    return new Set(path);
  }
};

/* eslint-disable sonarjs/no-identical-functions */
// Utilities
const independentSelectStrategy = mandatory => {
  const strategy = {
    select: _ref => {
      let {
        id,
        value,
        selected
      } = _ref;
      id = vue.toRaw(id);

      // When mandatory and we're trying to deselect when id
      // is the only currently selected item then do nothing
      if (mandatory && !value) {
        const on = Array.from(selected.entries()).reduce((arr, _ref2) => {
          let [key, value] = _ref2;
          return value === 'on' ? [...arr, key] : arr;
        }, []);
        if (on.length === 1 && on[0] === id) return selected;
      }
      selected.set(id, value ? 'on' : 'off');
      return selected;
    },
    in: (v, children, parents) => {
      let map = new Map();
      for (const id of v || []) {
        map = strategy.select({
          id,
          value: true,
          selected: new Map(map),
          children,
          parents
        });
      }
      return map;
    },
    out: v => {
      const arr = [];
      for (const [key, value] of v.entries()) {
        if (value === 'on') arr.push(key);
      }
      return arr;
    }
  };
  return strategy;
};
const independentSingleSelectStrategy = mandatory => {
  const parentStrategy = independentSelectStrategy(mandatory);
  const strategy = {
    select: _ref3 => {
      let {
        selected,
        id,
        ...rest
      } = _ref3;
      id = vue.toRaw(id);
      const singleSelected = selected.has(id) ? new Map([[id, selected.get(id)]]) : new Map();
      return parentStrategy.select({
        ...rest,
        id,
        selected: singleSelected
      });
    },
    in: (v, children, parents) => {
      let map = new Map();
      if (v?.length) {
        map = parentStrategy.in(v.slice(0, 1), children, parents);
      }
      return map;
    },
    out: (v, children, parents) => {
      return parentStrategy.out(v, children, parents);
    }
  };
  return strategy;
};
const leafSelectStrategy = mandatory => {
  const parentStrategy = independentSelectStrategy(mandatory);
  const strategy = {
    select: _ref4 => {
      let {
        id,
        selected,
        children,
        ...rest
      } = _ref4;
      id = vue.toRaw(id);
      if (children.has(id)) return selected;
      return parentStrategy.select({
        id,
        selected,
        children,
        ...rest
      });
    },
    in: parentStrategy.in,
    out: parentStrategy.out
  };
  return strategy;
};
const leafSingleSelectStrategy = mandatory => {
  const parentStrategy = independentSingleSelectStrategy(mandatory);
  const strategy = {
    select: _ref5 => {
      let {
        id,
        selected,
        children,
        ...rest
      } = _ref5;
      id = vue.toRaw(id);
      if (children.has(id)) return selected;
      return parentStrategy.select({
        id,
        selected,
        children,
        ...rest
      });
    },
    in: parentStrategy.in,
    out: parentStrategy.out
  };
  return strategy;
};
const classicSelectStrategy = mandatory => {
  const strategy = {
    select: _ref6 => {
      let {
        id,
        value,
        selected,
        children,
        parents
      } = _ref6;
      id = vue.toRaw(id);
      const original = new Map(selected);
      const items = [id];
      while (items.length) {
        const item = items.shift();
        selected.set(item, value ? 'on' : 'off');
        if (children.has(item)) {
          items.push(...children.get(item));
        }
      }
      let parent = parents.get(id);
      while (parent) {
        const childrenIds = children.get(parent);
        const everySelected = childrenIds.every(cid => selected.get(cid) === 'on');
        const noneSelected = childrenIds.every(cid => !selected.has(cid) || selected.get(cid) === 'off');
        selected.set(parent, everySelected ? 'on' : noneSelected ? 'off' : 'indeterminate');
        parent = parents.get(parent);
      }

      // If mandatory and planned deselect results in no selected
      // items then we can't do it, so return original state
      if (mandatory && !value) {
        const on = Array.from(selected.entries()).reduce((arr, _ref7) => {
          let [key, value] = _ref7;
          return value === 'on' ? [...arr, key] : arr;
        }, []);
        if (on.length === 0) return original;
      }
      return selected;
    },
    in: (v, children, parents) => {
      let map = new Map();
      for (const id of v || []) {
        map = strategy.select({
          id,
          value: true,
          selected: new Map(map),
          children,
          parents
        });
      }
      return map;
    },
    out: (v, children) => {
      const arr = [];
      for (const [key, value] of v.entries()) {
        if (value === 'on' && !children.has(key)) arr.push(key);
      }
      return arr;
    }
  };
  return strategy;
};

// Composables
const VNestedSymbol = Symbol.for('vuetify:nested');
const emptyNested = {
  id: vue.shallowRef(),
  root: {
    register: () => null,
    unregister: () => null,
    parents: vue.ref(new Map()),
    children: vue.ref(new Map()),
    open: () => null,
    openOnSelect: () => null,
    select: () => null,
    opened: vue.ref(new Set()),
    selected: vue.ref(new Map()),
    selectedValues: vue.ref([])
  }
};
const makeNestedProps = propsFactory({
  selectStrategy: [String, Function],
  openStrategy: [String, Object],
  opened: Array,
  selected: Array,
  mandatory: Boolean
}, 'nested');
const useNested = props => {
  let isUnmounted = false;
  const children = vue.ref(new Map());
  const parents = vue.ref(new Map());
  const opened = useProxiedModel(props, 'opened', props.opened, v => new Set(v), v => [...v.values()]);
  const selectStrategy = vue.computed(() => {
    if (typeof props.selectStrategy === 'object') return props.selectStrategy;
    switch (props.selectStrategy) {
      case 'single-leaf':
        return leafSingleSelectStrategy(props.mandatory);
      case 'leaf':
        return leafSelectStrategy(props.mandatory);
      case 'independent':
        return independentSelectStrategy(props.mandatory);
      case 'single-independent':
        return independentSingleSelectStrategy(props.mandatory);
      case 'classic':
      default:
        return classicSelectStrategy(props.mandatory);
    }
  });
  const openStrategy = vue.computed(() => {
    if (typeof props.openStrategy === 'object') return props.openStrategy;
    switch (props.openStrategy) {
      case 'list':
        return listOpenStrategy;
      case 'single':
        return singleOpenStrategy;
      case 'multiple':
      default:
        return multipleOpenStrategy;
    }
  });
  const selected = useProxiedModel(props, 'selected', props.selected, v => selectStrategy.value.in(v, children.value, parents.value), v => selectStrategy.value.out(v, children.value, parents.value));
  vue.onBeforeUnmount(() => {
    isUnmounted = true;
  });
  function getPath(id) {
    const path = [];
    let parent = id;
    while (parent != null) {
      path.unshift(parent);
      parent = parents.value.get(parent);
    }
    return path;
  }
  const vm = getCurrentInstance('nested');
  const nested = {
    id: vue.shallowRef(),
    root: {
      opened,
      selected,
      selectedValues: vue.computed(() => {
        const arr = [];
        for (const [key, value] of selected.value.entries()) {
          if (value === 'on') arr.push(key);
        }
        return arr;
      }),
      register: (id, parentId, isGroup) => {
        parentId && id !== parentId && parents.value.set(id, parentId);
        isGroup && children.value.set(id, []);
        if (parentId != null) {
          children.value.set(parentId, [...(children.value.get(parentId) || []), id]);
        }
      },
      unregister: id => {
        if (isUnmounted) return;
        children.value.delete(id);
        const parent = parents.value.get(id);
        if (parent) {
          const list = children.value.get(parent) ?? [];
          children.value.set(parent, list.filter(child => child !== id));
        }
        parents.value.delete(id);
        opened.value.delete(id);
      },
      open: (id, value, event) => {
        vm.emit('click:open', {
          id,
          value,
          path: getPath(id),
          event
        });
        const newOpened = openStrategy.value.open({
          id,
          value,
          opened: new Set(opened.value),
          children: children.value,
          parents: parents.value,
          event
        });
        newOpened && (opened.value = newOpened);
      },
      openOnSelect: (id, value, event) => {
        const newOpened = openStrategy.value.select({
          id,
          value,
          selected: new Map(selected.value),
          opened: new Set(opened.value),
          children: children.value,
          parents: parents.value,
          event
        });
        newOpened && (opened.value = newOpened);
      },
      select: (id, value, event) => {
        vm.emit('click:select', {
          id,
          value,
          path: getPath(id),
          event
        });
        const newSelected = selectStrategy.value.select({
          id,
          value,
          selected: new Map(selected.value),
          children: children.value,
          parents: parents.value,
          event
        });
        newSelected && (selected.value = newSelected);
        nested.root.openOnSelect(id, value, event);
      },
      children,
      parents
    }
  };
  vue.provide(VNestedSymbol, nested);
  return nested.root;
};
const useNestedItem = (id, isGroup) => {
  const parent = vue.inject(VNestedSymbol, emptyNested);
  const uidSymbol = Symbol(getUid());
  const computedId = vue.computed(() => id.value !== undefined ? id.value : uidSymbol);
  const item = {
    ...parent,
    id: computedId,
    open: (open, e) => parent.root.open(computedId.value, open, e),
    openOnSelect: (open, e) => parent.root.openOnSelect(computedId.value, open, e),
    isOpen: vue.computed(() => parent.root.opened.value.has(computedId.value)),
    parent: vue.computed(() => parent.root.parents.value.get(computedId.value)),
    select: (selected, e) => parent.root.select(computedId.value, selected, e),
    isSelected: vue.computed(() => parent.root.selected.value.get(vue.toRaw(computedId.value)) === 'on'),
    isIndeterminate: vue.computed(() => parent.root.selected.value.get(computedId.value) === 'indeterminate'),
    isLeaf: vue.computed(() => !parent.root.children.value.get(computedId.value)),
    isGroupActivator: parent.isGroupActivator
  };
  !parent.isGroupActivator && parent.root.register(computedId.value, parent.id.value, isGroup);
  vue.onBeforeUnmount(() => {
    !parent.isGroupActivator && parent.root.unregister(computedId.value);
  });
  isGroup && vue.provide(VNestedSymbol, item);
  return item;
};
const useNestedGroupActivator = () => {
  const parent = vue.inject(VNestedSymbol, emptyNested);
  vue.provide(VNestedSymbol, {
    ...parent,
    isGroupActivator: true
  });
};

// Utilities

// Composables
function useSsrBoot() {
  const isBooted = vue.shallowRef(false);
  vue.onMounted(() => {
    window.requestAnimationFrame(() => {
      isBooted.value = true;
    });
  });
  const ssrBootStyles = vue.computed(() => !isBooted.value ? {
    transition: 'none !important'
  } : undefined);
  return {
    ssrBootStyles,
    isBooted: vue.readonly(isBooted)
  };
}

const VListGroupActivator = defineComponent({
  name: 'VListGroupActivator',
  setup(_, _ref) {
    let {
      slots
    } = _ref;
    useNestedGroupActivator();
    return () => slots.default?.();
  }
});
const makeVListGroupProps = propsFactory({
  /* @deprecated */
  activeColor: String,
  baseColor: String,
  color: String,
  collapseIcon: {
    type: IconValue,
    default: '$collapse'
  },
  expandIcon: {
    type: IconValue,
    default: '$expand'
  },
  prependIcon: IconValue,
  appendIcon: IconValue,
  fluid: Boolean,
  subgroup: Boolean,
  title: String,
  value: null,
  ...makeComponentProps(),
  ...makeTagProps()
}, 'VListGroup');
const VListGroup = genericComponent()({
  name: 'VListGroup',
  props: makeVListGroupProps(),
  setup(props, _ref2) {
    let {
      slots
    } = _ref2;
    const {
      isOpen,
      open,
      id: _id
    } = useNestedItem(vue.toRef(props, 'value'), true);
    const id = vue.computed(() => `v-list-group--id-${String(_id.value)}`);
    const list = useList();
    const {
      isBooted
    } = useSsrBoot();
    function onClick(e) {
      open(!isOpen.value, e);
    }
    const activatorProps = vue.computed(() => ({
      onClick,
      class: 'v-list-group__header',
      id: id.value
    }));
    const toggleIcon = vue.computed(() => isOpen.value ? props.collapseIcon : props.expandIcon);
    const activatorDefaults = vue.computed(() => ({
      VListItem: {
        active: isOpen.value,
        activeColor: props.activeColor,
        baseColor: props.baseColor,
        color: props.color,
        prependIcon: props.prependIcon || props.subgroup && toggleIcon.value,
        appendIcon: props.appendIcon || !props.subgroup && toggleIcon.value,
        title: props.title,
        value: props.value
      }
    }));
    useRender(() => vue.createVNode(props.tag, {
      "class": ['v-list-group', {
        'v-list-group--prepend': list?.hasPrepend.value,
        'v-list-group--fluid': props.fluid,
        'v-list-group--subgroup': props.subgroup,
        'v-list-group--open': isOpen.value
      }, props.class],
      "style": props.style
    }, {
      default: () => [slots.activator && vue.createVNode(VDefaultsProvider, {
        "defaults": activatorDefaults.value
      }, {
        default: () => [vue.createVNode(VListGroupActivator, null, {
          default: () => [slots.activator({
            props: activatorProps.value,
            isOpen: isOpen.value
          })]
        })]
      }), vue.createVNode(MaybeTransition, {
        "transition": {
          component: VExpandTransition
        },
        "disabled": !isBooted.value
      }, {
        default: () => [vue.withDirectives(vue.createVNode("div", {
          "class": "v-list-group__items",
          "role": "group",
          "aria-labelledby": id.value
        }, [slots.default?.()]), [[vue.vShow, isOpen.value]])]
      })]
    }));
    return {};
  }
});

var css_248z$4 = ".v-list-item {\n  align-items: center;\n  display: grid;\n  flex: none;\n  grid-template-areas: \"prepend content append\";\n  grid-template-columns: max-content auto max-content;\n  outline: none;\n  max-width: 100%;\n  padding: 4px 16px;\n  position: relative;\n  text-decoration: none;\n  border-color: rgba(var(--v-border-color), var(--v-border-opacity));\n  border-style: solid;\n  border-width: 0;\n  border-radius: 0;\n}\n.v-list-item--border {\n  border-width: thin;\n  box-shadow: none;\n}\n.v-list-item:hover > .v-list-item__overlay {\n  opacity: calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier));\n}\n.v-list-item:focus-visible > .v-list-item__overlay {\n  opacity: calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier));\n}\n@supports not selector(:focus-visible) {\n  .v-list-item:focus > .v-list-item__overlay {\n    opacity: calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier));\n  }\n}\n.v-list-item--active > .v-list-item__overlay, .v-list-item[aria-haspopup=menu][aria-expanded=true] > .v-list-item__overlay {\n  opacity: calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier));\n}\n.v-list-item--active:hover > .v-list-item__overlay, .v-list-item[aria-haspopup=menu][aria-expanded=true]:hover > .v-list-item__overlay {\n  opacity: calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier));\n}\n.v-list-item--active:focus-visible > .v-list-item__overlay, .v-list-item[aria-haspopup=menu][aria-expanded=true]:focus-visible > .v-list-item__overlay {\n  opacity: calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier));\n}\n@supports not selector(:focus-visible) {\n  .v-list-item--active:focus > .v-list-item__overlay, .v-list-item[aria-haspopup=menu][aria-expanded=true]:focus > .v-list-item__overlay {\n    opacity: calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier));\n  }\n}\n.v-list-item--variant-plain, .v-list-item--variant-outlined, .v-list-item--variant-text, .v-list-item--variant-tonal {\n  background: transparent;\n  color: inherit;\n}\n.v-list-item--variant-plain {\n  opacity: 0.62;\n}\n.v-list-item--variant-plain:focus, .v-list-item--variant-plain:hover {\n  opacity: 1;\n}\n.v-list-item--variant-plain .v-list-item__overlay {\n  display: none;\n}\n.v-list-item--variant-elevated, .v-list-item--variant-flat {\n  background: rgba(var(--v-theme-surface));\n  color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));\n}\n.v-list-item--variant-elevated {\n  box-shadow: 0px 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 1px 1px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 3px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));\n}\n.v-list-item--variant-flat {\n  box-shadow: 0px 0px 0px 0px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));\n}\n.v-list-item--variant-outlined {\n  border: thin solid currentColor;\n}\n.v-list-item--variant-text .v-list-item__overlay {\n  background: currentColor;\n}\n.v-list-item--variant-tonal .v-list-item__underlay {\n  background: currentColor;\n  opacity: var(--v-activated-opacity);\n  border-radius: inherit;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  pointer-events: none;\n}\n@supports selector(:focus-visible) {\n  .v-list-item::after {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    pointer-events: none;\n    border: 2px solid currentColor;\n    border-radius: 4px;\n    opacity: 0;\n    transition: opacity 0.2s ease-in-out;\n  }\n  .v-list-item:focus-visible::after {\n    opacity: calc(0.15 * var(--v-theme-overlay-multiplier));\n  }\n}\n.v-list-item__prepend > .v-badge .v-icon,\n.v-list-item__prepend > .v-icon, .v-list-item__append > .v-badge .v-icon,\n.v-list-item__append > .v-icon {\n  opacity: var(--v-medium-emphasis-opacity);\n}\n.v-list-item--active .v-list-item__prepend > .v-badge .v-icon,\n.v-list-item--active .v-list-item__prepend > .v-icon,\n.v-list-item--active .v-list-item__append > .v-badge .v-icon,\n.v-list-item--active .v-list-item__append > .v-icon {\n  opacity: 1;\n}\n.v-list-item--rounded {\n  border-radius: 4px;\n}\n.v-list-item--disabled {\n  pointer-events: none;\n  user-select: none;\n  opacity: 0.6;\n}\n.v-list-item--link {\n  cursor: pointer;\n}\n\n.v-list-item__prepend {\n  align-items: center;\n  align-self: center;\n  display: flex;\n  grid-area: prepend;\n}\n.v-list-item__prepend > .v-badge ~ .v-list-item__spacer,\n.v-list-item__prepend > .v-icon ~ .v-list-item__spacer,\n.v-list-item__prepend > .v-tooltip ~ .v-list-item__spacer {\n  width: 32px;\n}\n.v-list-item__prepend > .v-avatar ~ .v-list-item__spacer {\n  width: 16px;\n}\n.v-list-item--three-line .v-list-item__prepend {\n  align-self: start;\n}\n\n.v-list-item__append {\n  align-self: center;\n  display: flex;\n  align-items: center;\n  grid-area: append;\n}\n.v-list-item__append .v-list-item__spacer {\n  order: -1;\n}\n.v-list-item__append > .v-badge ~ .v-list-item__spacer,\n.v-list-item__append > .v-icon ~ .v-list-item__spacer,\n.v-list-item__append > .v-tooltip ~ .v-list-item__spacer {\n  width: 32px;\n}\n.v-list-item__append > .v-avatar ~ .v-list-item__spacer {\n  width: 16px;\n}\n.v-list-item--three-line .v-list-item__append {\n  align-self: start;\n}\n\n.v-list-item__content {\n  align-self: center;\n  grid-area: content;\n  overflow: hidden;\n}\n\n.v-list-item-action {\n  align-self: center;\n  display: flex;\n  align-items: center;\n  grid-area: prepend;\n  flex: none;\n  transition: inherit;\n  transition-property: height, width;\n}\n.v-list-item-action--start {\n  margin-inline-end: 12px;\n}\n.v-list-item-action--end {\n  margin-inline-start: 12px;\n}\n\n.v-list-item-media {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.v-list-item-media--start {\n  margin-inline-end: 16px;\n}\n.v-list-item-media--end {\n  margin-inline-start: 16px;\n}\n.v-list-item--two-line .v-list-item-media {\n  margin-top: -4px;\n  margin-bottom: -4px;\n}\n.v-list-item--three-line .v-list-item-media {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.v-list-item-subtitle {\n  -webkit-box-orient: vertical;\n  display: -webkit-box;\n  opacity: var(--v-medium-emphasis-opacity);\n  overflow: hidden;\n  padding: 0;\n  text-overflow: ellipsis;\n  font-size: 0.875rem;\n  font-weight: 400;\n  letter-spacing: 0.0178571429em;\n  line-height: 1rem;\n  text-transform: none;\n}\n.v-list-item--one-line .v-list-item-subtitle {\n  -webkit-line-clamp: 1;\n}\n.v-list-item--two-line .v-list-item-subtitle {\n  -webkit-line-clamp: 2;\n}\n.v-list-item--three-line .v-list-item-subtitle {\n  -webkit-line-clamp: 3;\n}\n.v-list-item--nav .v-list-item-subtitle {\n  font-size: 0.75rem;\n  font-weight: 400;\n  letter-spacing: 0.0178571429em;\n  line-height: 1rem;\n}\n\n.v-list-item-title {\n  hyphens: auto;\n  overflow-wrap: normal;\n  overflow: hidden;\n  padding: 0;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  word-break: normal;\n  word-wrap: break-word;\n  font-size: 1rem;\n  font-weight: 400;\n  letter-spacing: 0.009375em;\n  line-height: 1.5rem;\n  text-transform: none;\n}\n.v-list-item--nav .v-list-item-title {\n  font-size: 0.8125rem;\n  font-weight: 500;\n  letter-spacing: normal;\n  line-height: 1rem;\n}\n\n.v-list-item--density-default {\n  min-height: 40px;\n}\n.v-list-item--density-default.v-list-item--one-line {\n  min-height: 48px;\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n.v-list-item--density-default.v-list-item--two-line {\n  min-height: 64px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n}\n.v-list-item--density-default.v-list-item--three-line {\n  min-height: 88px;\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n.v-list-item--density-default.v-list-item--three-line .v-list-item__prepend,\n.v-list-item--density-default.v-list-item--three-line .v-list-item__append {\n  padding-top: 8px;\n}\n.v-list-item--density-default:not(.v-list-item--nav).v-list-item--one-line {\n  padding-inline-start: 16px;\n  padding-inline-end: 16px;\n}\n.v-list-item--density-default:not(.v-list-item--nav).v-list-item--two-line {\n  padding-inline-start: 16px;\n  padding-inline-end: 16px;\n}\n.v-list-item--density-default:not(.v-list-item--nav).v-list-item--three-line {\n  padding-inline-start: 16px;\n  padding-inline-end: 16px;\n}\n\n.v-list-item--density-comfortable {\n  min-height: 36px;\n}\n.v-list-item--density-comfortable.v-list-item--one-line {\n  min-height: 44px;\n}\n.v-list-item--density-comfortable.v-list-item--two-line {\n  min-height: 60px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n.v-list-item--density-comfortable.v-list-item--three-line {\n  min-height: 84px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n}\n.v-list-item--density-comfortable.v-list-item--three-line .v-list-item__prepend,\n.v-list-item--density-comfortable.v-list-item--three-line .v-list-item__append {\n  padding-top: 6px;\n}\n.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--one-line {\n  padding-inline-start: 16px;\n  padding-inline-end: 16px;\n}\n.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--two-line {\n  padding-inline-start: 16px;\n  padding-inline-end: 16px;\n}\n.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--three-line {\n  padding-inline-start: 16px;\n  padding-inline-end: 16px;\n}\n\n.v-list-item--density-compact {\n  min-height: 32px;\n}\n.v-list-item--density-compact.v-list-item--one-line {\n  min-height: 40px;\n}\n.v-list-item--density-compact.v-list-item--two-line {\n  min-height: 56px;\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n.v-list-item--density-compact.v-list-item--three-line {\n  min-height: 80px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n.v-list-item--density-compact.v-list-item--three-line .v-list-item__prepend,\n.v-list-item--density-compact.v-list-item--three-line .v-list-item__append {\n  padding-top: 4px;\n}\n.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--one-line {\n  padding-inline-start: 16px;\n  padding-inline-end: 16px;\n}\n.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--two-line {\n  padding-inline-start: 16px;\n  padding-inline-end: 16px;\n}\n.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--three-line {\n  padding-inline-start: 16px;\n  padding-inline-end: 16px;\n}\n\n.v-list-item--nav {\n  padding-inline-start: 8px;\n  padding-inline-end: 8px;\n}\n.v-list .v-list-item--nav:not(:only-child) {\n  margin-bottom: 4px;\n}\n\n.v-list-item__underlay {\n  position: absolute;\n}\n\n.v-list-item__overlay {\n  background-color: currentColor;\n  border-radius: inherit;\n  bottom: 0;\n  left: 0;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transition: opacity 0.2s ease-in-out;\n}\n.v-list-item--active.v-list-item--variant-elevated .v-list-item__overlay {\n  --v-theme-overlay-multiplier: 0;\n}\n\n.v-list {\n  --indent-padding: 0px;\n}\n.v-list--nav {\n  --indent-padding: -8px;\n}\n\n.v-list-group {\n  --list-indent-size: 16px;\n  --parent-padding: var(--indent-padding);\n  --prepend-width: 40px;\n}\n.v-list-group--fluid {\n  --list-indent-size: 0px;\n}\n.v-list-group--prepend {\n  --parent-padding: calc(var(--indent-padding) + var(--prepend-width));\n}\n.v-list-group--fluid.v-list-group--prepend {\n  --parent-padding: var(--indent-padding);\n}\n\n.v-list-group__items {\n  --indent-padding: calc(var(--parent-padding) + var(--list-indent-size));\n}\n\n.v-list-group__items .v-list-item {\n  padding-inline-start: calc(16px + var(--indent-padding)) !important;\n}\n\n.v-list-group__header.v-list-item--active:not(:focus-visible) .v-list-item__overlay {\n  opacity: 0;\n}\n.v-list-group__header.v-list-item--active:hover .v-list-item__overlay {\n  opacity: calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier));\n}";
styleInject(css_248z$4);

// Utilities
const VListItemSubtitle = createSimpleFunctional('v-list-item-subtitle');

// Utilities
const VListItemTitle = createSimpleFunctional('v-list-item-title');

const makeVListItemProps = propsFactory({
  active: {
    type: Boolean,
    default: undefined
  },
  activeClass: String,
  /* @deprecated */
  activeColor: String,
  appendAvatar: String,
  appendIcon: IconValue,
  baseColor: String,
  disabled: Boolean,
  lines: String,
  link: {
    type: Boolean,
    default: undefined
  },
  nav: Boolean,
  prependAvatar: String,
  prependIcon: IconValue,
  ripple: {
    type: [Boolean, Object],
    default: true
  },
  subtitle: [String, Number, Boolean],
  title: [String, Number, Boolean],
  value: null,
  onClick: EventProp(),
  onClickOnce: EventProp(),
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeRoundedProps(),
  ...makeRouterProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: 'text'
  })
}, 'VListItem');
const VListItem = genericComponent()({
  name: 'VListItem',
  directives: {
    Ripple
  },
  props: makeVListItemProps(),
  emits: {
    click: e => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots,
      emit
    } = _ref;
    const link = useLink(props, attrs);
    const id = vue.computed(() => props.value === undefined ? link.href.value : props.value);
    const {
      select,
      isSelected,
      isIndeterminate,
      isGroupActivator,
      root,
      parent,
      openOnSelect
    } = useNestedItem(id, false);
    const list = useList();
    const isActive = vue.computed(() => props.active !== false && (props.active || link.isActive?.value || isSelected.value));
    const isLink = vue.computed(() => props.link !== false && link.isLink.value);
    const isClickable = vue.computed(() => !props.disabled && props.link !== false && (props.link || link.isClickable.value || props.value != null && !!list));
    const roundedProps = vue.computed(() => props.rounded || props.nav);
    const color = vue.computed(() => props.color ?? props.activeColor);
    const variantProps = vue.computed(() => ({
      color: isActive.value ? color.value ?? props.baseColor : props.baseColor,
      variant: props.variant
    }));
    vue.watch(() => link.isActive?.value, val => {
      if (val && parent.value != null) {
        root.open(parent.value, true);
      }
      if (val) {
        openOnSelect(val);
      }
    }, {
      immediate: true
    });
    const {
      themeClasses
    } = provideTheme(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(variantProps);
    const {
      densityClasses
    } = useDensity(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(roundedProps);
    const lineClasses = vue.computed(() => props.lines ? `v-list-item--${props.lines}-line` : undefined);
    const slotProps = vue.computed(() => ({
      isActive: isActive.value,
      select,
      isSelected: isSelected.value,
      isIndeterminate: isIndeterminate.value
    }));
    function onClick(e) {
      emit('click', e);
      if (isGroupActivator || !isClickable.value) return;
      link.navigate?.(e);
      props.value != null && select(!isSelected.value, e);
    }
    function onKeyDown(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onClick(e);
      }
    }
    useRender(() => {
      const Tag = isLink.value ? 'a' : props.tag;
      const hasTitle = slots.title || props.title;
      const hasSubtitle = slots.subtitle || props.subtitle;
      const hasAppendMedia = !!(props.appendAvatar || props.appendIcon);
      const hasAppend = !!(hasAppendMedia || slots.append);
      const hasPrependMedia = !!(props.prependAvatar || props.prependIcon);
      const hasPrepend = !!(hasPrependMedia || slots.prepend);
      list?.updateHasPrepend(hasPrepend);
      if (props.activeColor) {
        deprecate('active-color', ['color', 'base-color']);
      }
      return vue.withDirectives(vue.createVNode(Tag, {
        "class": ['v-list-item', {
          'v-list-item--active': isActive.value,
          'v-list-item--disabled': props.disabled,
          'v-list-item--link': isClickable.value,
          'v-list-item--nav': props.nav,
          'v-list-item--prepend': !hasPrepend && list?.hasPrepend.value,
          [`${props.activeClass}`]: props.activeClass && isActive.value
        }, themeClasses.value, borderClasses.value, colorClasses.value, densityClasses.value, elevationClasses.value, lineClasses.value, roundedClasses.value, variantClasses.value, props.class],
        "style": [colorStyles.value, dimensionStyles.value, props.style],
        "href": link.href.value,
        "tabindex": isClickable.value ? list ? -2 : 0 : undefined,
        "onClick": onClick,
        "onKeydown": isClickable.value && !isLink.value && onKeyDown
      }, {
        default: () => [genOverlays(isClickable.value || isActive.value, 'v-list-item'), hasPrepend && vue.createVNode("div", {
          "key": "prepend",
          "class": "v-list-item__prepend"
        }, [!slots.prepend ? vue.createVNode(vue.Fragment, null, [props.prependAvatar && vue.createVNode(VAvatar, {
          "key": "prepend-avatar",
          "density": props.density,
          "image": props.prependAvatar
        }, null), props.prependIcon && vue.createVNode(VIcon, {
          "key": "prepend-icon",
          "density": props.density,
          "icon": props.prependIcon
        }, null)]) : vue.createVNode(VDefaultsProvider, {
          "key": "prepend-defaults",
          "disabled": !hasPrependMedia,
          "defaults": {
            VAvatar: {
              density: props.density,
              image: props.prependAvatar
            },
            VIcon: {
              density: props.density,
              icon: props.prependIcon
            },
            VListItemAction: {
              start: true
            }
          }
        }, {
          default: () => [slots.prepend?.(slotProps.value)]
        }), vue.createVNode("div", {
          "class": "v-list-item__spacer"
        }, null)]), vue.createVNode("div", {
          "class": "v-list-item__content",
          "data-no-activator": ""
        }, [hasTitle && vue.createVNode(VListItemTitle, {
          "key": "title"
        }, {
          default: () => [slots.title?.({
            title: props.title
          }) ?? props.title]
        }), hasSubtitle && vue.createVNode(VListItemSubtitle, {
          "key": "subtitle"
        }, {
          default: () => [slots.subtitle?.({
            subtitle: props.subtitle
          }) ?? props.subtitle]
        }), slots.default?.(slotProps.value)]), hasAppend && vue.createVNode("div", {
          "key": "append",
          "class": "v-list-item__append"
        }, [!slots.append ? vue.createVNode(vue.Fragment, null, [props.appendIcon && vue.createVNode(VIcon, {
          "key": "append-icon",
          "density": props.density,
          "icon": props.appendIcon
        }, null), props.appendAvatar && vue.createVNode(VAvatar, {
          "key": "append-avatar",
          "density": props.density,
          "image": props.appendAvatar
        }, null)]) : vue.createVNode(VDefaultsProvider, {
          "key": "append-defaults",
          "disabled": !hasAppendMedia,
          "defaults": {
            VAvatar: {
              density: props.density,
              image: props.appendAvatar
            },
            VIcon: {
              density: props.density,
              icon: props.appendIcon
            },
            VListItemAction: {
              end: true
            }
          }
        }, {
          default: () => [slots.append?.(slotProps.value)]
        }), vue.createVNode("div", {
          "class": "v-list-item__spacer"
        }, null)])]
      }), [[vue.resolveDirective("ripple"), isClickable.value && props.ripple]]);
    });
    return {};
  }
});

const makeVListSubheaderProps = propsFactory({
  color: String,
  inset: Boolean,
  sticky: Boolean,
  title: String,
  ...makeComponentProps(),
  ...makeTagProps()
}, 'VListSubheader');
const VListSubheader = genericComponent()({
  name: 'VListSubheader',
  props: makeVListSubheaderProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(vue.toRef(props, 'color'));
    useRender(() => {
      const hasText = !!(slots.default || props.title);
      return vue.createVNode(props.tag, {
        "class": ['v-list-subheader', {
          'v-list-subheader--inset': props.inset,
          'v-list-subheader--sticky': props.sticky
        }, textColorClasses.value, props.class],
        "style": [{
          textColorStyles
        }, props.style]
      }, {
        default: () => [hasText && vue.createVNode("div", {
          "class": "v-list-subheader__text"
        }, [slots.default?.() ?? props.title])]
      });
    });
    return {};
  }
});

var css_248z$3 = ".v-divider {\n  display: block;\n  flex: 1 1 100%;\n  height: 0px;\n  max-height: 0px;\n  opacity: var(--v-border-opacity);\n  transition: inherit;\n  border-style: solid;\n  border-width: thin 0 0 0;\n}\n.v-divider--vertical {\n  align-self: stretch;\n  border-width: 0 thin 0 0;\n  display: inline-flex;\n  height: inherit;\n  margin-left: -1px;\n  max-height: 100%;\n  max-width: 0px;\n  vertical-align: text-bottom;\n  width: 0px;\n}\n.v-divider--inset:not(.v-divider--vertical) {\n  max-width: calc(100% - 72px);\n  margin-inline-start: 72px;\n}\n.v-divider--inset.v-divider--vertical {\n  margin-bottom: 8px;\n  margin-top: 8px;\n  max-height: calc(100% - 16px);\n}";
styleInject(css_248z$3);

const makeVDividerProps = propsFactory({
  color: String,
  inset: Boolean,
  length: [Number, String],
  thickness: [Number, String],
  vertical: Boolean,
  ...makeComponentProps(),
  ...makeThemeProps()
}, 'VDivider');
const VDivider = genericComponent()({
  name: 'VDivider',
  props: makeVDividerProps(),
  setup(props, _ref) {
    let {
      attrs
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(vue.toRef(props, 'color'));
    const dividerStyles = vue.computed(() => {
      const styles = {};
      if (props.length) {
        styles[props.vertical ? 'maxHeight' : 'maxWidth'] = convertToUnit(props.length);
      }
      if (props.thickness) {
        styles[props.vertical ? 'borderRightWidth' : 'borderTopWidth'] = convertToUnit(props.thickness);
      }
      return styles;
    });
    useRender(() => vue.createVNode("hr", {
      "class": [{
        'v-divider': true,
        'v-divider--inset': props.inset,
        'v-divider--vertical': props.vertical
      }, themeClasses.value, textColorClasses.value, props.class],
      "style": [dividerStyles.value, textColorStyles.value, props.style],
      "aria-orientation": !attrs.role || attrs.role === 'separator' ? props.vertical ? 'vertical' : 'horizontal' : undefined,
      "role": `${attrs.role || 'separator'}`
    }, null));
    return {};
  }
});

const makeVListChildrenProps = propsFactory({
  items: Array
}, 'VListChildren');
const VListChildren = genericComponent()({
  name: 'VListChildren',
  props: makeVListChildrenProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    createList();
    return () => slots.default?.() ?? props.items?.map(_ref2 => {
      let {
        children,
        props: itemProps,
        type,
        raw: item
      } = _ref2;
      if (type === 'divider') {
        return slots.divider?.({
          props: itemProps
        }) ?? vue.createVNode(VDivider, itemProps, null);
      }
      if (type === 'subheader') {
        return slots.subheader?.({
          props: itemProps
        }) ?? vue.createVNode(VListSubheader, itemProps, null);
      }
      const slotsWithItem = {
        subtitle: slots.subtitle ? slotProps => slots.subtitle?.({
          ...slotProps,
          item
        }) : undefined,
        prepend: slots.prepend ? slotProps => slots.prepend?.({
          ...slotProps,
          item
        }) : undefined,
        append: slots.append ? slotProps => slots.append?.({
          ...slotProps,
          item
        }) : undefined,
        title: slots.title ? slotProps => slots.title?.({
          ...slotProps,
          item
        }) : undefined
      };
      const [listGroupProps, _1] = VListGroup.filterProps(itemProps);
      return children ? vue.createVNode(VListGroup, vue.mergeProps({
        "value": itemProps?.value
      }, listGroupProps), {
        activator: _ref3 => {
          let {
            props: activatorProps
          } = _ref3;
          return slots.header ? slots.header({
            props: {
              ...itemProps,
              ...activatorProps
            }
          }) : vue.createVNode(VListItem, vue.mergeProps(itemProps, activatorProps), slotsWithItem);
        },
        default: () => vue.createVNode(VListChildren, {
          "items": children
        }, slots)
      }) : slots.item ? slots.item({
        props: itemProps
      }) : vue.createVNode(VListItem, itemProps, slotsWithItem);
    });
  }
});

// Utilities
// Composables
const makeItemsProps = propsFactory({
  items: {
    type: Array,
    default: () => []
  },
  itemTitle: {
    type: [String, Array, Function],
    default: 'title'
  },
  itemValue: {
    type: [String, Array, Function],
    default: 'value'
  },
  itemChildren: {
    type: [Boolean, String, Array, Function],
    default: 'children'
  },
  itemProps: {
    type: [Boolean, String, Array, Function],
    default: 'props'
  },
  returnObject: Boolean,
  valueComparator: {
    type: Function,
    default: deepEqual
  }
}, 'list-items');

function isPrimitive(value) {
  return typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean';
}
function transformItem(props, item) {
  const type = getPropertyFromItem(item, props.itemType, 'item');
  const title = isPrimitive(item) ? item : getPropertyFromItem(item, props.itemTitle);
  const value = getPropertyFromItem(item, props.itemValue, undefined);
  const children = getPropertyFromItem(item, props.itemChildren);
  const itemProps = props.itemProps === true ? pick(item, ['children'])[1] : getPropertyFromItem(item, props.itemProps);
  const _props = {
    title,
    value,
    ...itemProps
  };
  return {
    type,
    title: _props.title,
    value: _props.value,
    props: _props,
    children: type === 'item' && children ? transformItems(props, children) : undefined,
    raw: item
  };
}
function transformItems(props, items) {
  const array = [];
  for (const item of items) {
    array.push(transformItem(props, item));
  }
  return array;
}
function useListItems(props) {
  const items = vue.computed(() => transformItems(props, props.items));
  return {
    items
  };
}
const makeVListProps = propsFactory({
  baseColor: String,
  /* @deprecated */
  activeColor: String,
  activeClass: String,
  bgColor: String,
  disabled: Boolean,
  lines: {
    type: [Boolean, String],
    default: 'one'
  },
  nav: Boolean,
  ...makeNestedProps({
    selectStrategy: 'single-leaf',
    openStrategy: 'list'
  }),
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  itemType: {
    type: String,
    default: 'type'
  },
  ...makeItemsProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: 'text'
  })
}, 'VList');
const VList = genericComponent()({
  name: 'VList',
  props: makeVListProps(),
  emits: {
    'update:selected': val => true,
    'update:opened': val => true,
    'click:open': value => true,
    'click:select': value => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      items
    } = useListItems(props);
    const {
      themeClasses
    } = provideTheme(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(vue.toRef(props, 'bgColor'));
    const {
      borderClasses
    } = useBorder(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      open,
      select
    } = useNested(props);
    const lineClasses = vue.computed(() => props.lines ? `v-list--${props.lines}-line` : undefined);
    const activeColor = vue.toRef(props, 'activeColor');
    const baseColor = vue.toRef(props, 'baseColor');
    const color = vue.toRef(props, 'color');
    createList();
    provideDefaults({
      VListGroup: {
        activeColor,
        baseColor,
        color
      },
      VListItem: {
        activeClass: vue.toRef(props, 'activeClass'),
        activeColor,
        baseColor,
        color,
        density: vue.toRef(props, 'density'),
        disabled: vue.toRef(props, 'disabled'),
        lines: vue.toRef(props, 'lines'),
        nav: vue.toRef(props, 'nav'),
        variant: vue.toRef(props, 'variant')
      }
    });
    const isFocused = vue.shallowRef(false);
    const contentRef = vue.ref();
    function onFocusin(e) {
      isFocused.value = true;
    }
    function onFocusout(e) {
      isFocused.value = false;
    }
    function onFocus(e) {
      if (!isFocused.value && !(e.relatedTarget && contentRef.value?.contains(e.relatedTarget))) focus();
    }
    function onKeydown(e) {
      if (!contentRef.value) return;
      if (e.key === 'ArrowDown') {
        focus('next');
      } else if (e.key === 'ArrowUp') {
        focus('prev');
      } else if (e.key === 'Home') {
        focus('first');
      } else if (e.key === 'End') {
        focus('last');
      } else {
        return;
      }
      e.preventDefault();
    }
    function focus(location) {
      if (contentRef.value) {
        return focusChild(contentRef.value, location);
      }
    }
    useRender(() => {
      return vue.createVNode(props.tag, {
        "ref": contentRef,
        "class": ['v-list', {
          'v-list--disabled': props.disabled,
          'v-list--nav': props.nav
        }, themeClasses.value, backgroundColorClasses.value, borderClasses.value, densityClasses.value, elevationClasses.value, lineClasses.value, roundedClasses.value, props.class],
        "style": [backgroundColorStyles.value, dimensionStyles.value, props.style],
        "tabindex": props.disabled || isFocused.value ? -1 : 0,
        "role": "listbox",
        "aria-activedescendant": undefined,
        "onFocusin": onFocusin,
        "onFocusout": onFocusout,
        "onFocus": onFocus,
        "onKeydown": onKeydown
      }, {
        default: () => [vue.createVNode(VListChildren, {
          "items": items.value
        }, slots)]
      });
    });
    return {
      open,
      select,
      focus
    };
  }
});

var css_248z$2 = ".v-menu > .v-overlay__content {\n  display: flex;\n  flex-direction: column;\n  border-radius: 4px;\n}\n.v-menu > .v-overlay__content > .v-card,\n.v-menu > .v-overlay__content > .v-sheet,\n.v-menu > .v-overlay__content > .v-list {\n  background: rgb(var(--v-theme-surface));\n  border-radius: inherit;\n  overflow: auto;\n  height: 100%;\n  box-shadow: 0px 5px 5px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 8px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 3px 14px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));\n}";
styleInject(css_248z$2);

const makeVMenuProps = propsFactory({
  // TODO
  // disableKeys: Boolean,
  id: String,
  ...omit(makeVOverlayProps({
    closeDelay: 250,
    closeOnContentClick: true,
    locationStrategy: 'connected',
    openDelay: 300,
    scrim: false,
    scrollStrategy: 'reposition',
    transition: {
      component: VDialogTransition
    }
  }), ['absolute'])
}, 'VMenu');
const VMenu = genericComponent()({
  name: 'VMenu',
  props: makeVMenuProps(),
  emits: {
    'update:modelValue': value => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const isActive = useProxiedModel(props, 'modelValue');
    const {
      scopeId
    } = useScopeId();
    const uid = getUid();
    const id = vue.computed(() => props.id || `v-menu-${uid}`);
    const overlay = vue.ref();
    const parent = vue.inject(VMenuSymbol, null);
    const openChildren = vue.shallowRef(0);
    vue.provide(VMenuSymbol, {
      register() {
        ++openChildren.value;
      },
      unregister() {
        --openChildren.value;
      },
      closeParents() {
        setTimeout(() => {
          if (!openChildren.value) {
            isActive.value = false;
            parent?.closeParents();
          }
        }, 40);
      }
    });
    async function onFocusIn(e) {
      const before = e.relatedTarget;
      const after = e.target;
      await vue.nextTick();
      if (isActive.value && before !== after && overlay.value?.contentEl &&
      // We're the topmost menu
      overlay.value?.globalTop &&
      // It isn't the document or the menu body
      ![document, overlay.value.contentEl].includes(after) &&
      // It isn't inside the menu body
      !overlay.value.contentEl.contains(after)) {
        const focusable = focusableChildren(overlay.value.contentEl);
        focusable[0]?.focus();
      }
    }
    vue.watch(isActive, val => {
      if (val) {
        parent?.register();
        document.addEventListener('focusin', onFocusIn, {
          once: true
        });
      } else {
        parent?.unregister();
        document.removeEventListener('focusin', onFocusIn);
      }
    });
    function onClickOutside() {
      parent?.closeParents();
    }
    function onKeydown(e) {
      if (props.disabled) return;
      if (e.key === 'Tab') {
        const nextElement = getNextElement(focusableChildren(overlay.value?.contentEl, false), e.shiftKey ? 'prev' : 'next', el => el.tabIndex >= 0);
        if (!nextElement) {
          isActive.value = false;
          overlay.value?.activatorEl?.focus();
        }
      }
    }
    function onActivatorKeydown(e) {
      if (props.disabled) return;
      const el = overlay.value?.contentEl;
      if (el && isActive.value) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          focusChild(el, 'next');
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          focusChild(el, 'prev');
        }
      } else if (['ArrowDown', 'ArrowUp'].includes(e.key)) {
        isActive.value = true;
        e.preventDefault();
        setTimeout(() => setTimeout(() => onActivatorKeydown(e)));
      }
    }
    const activatorProps = vue.computed(() => vue.mergeProps({
      'aria-haspopup': 'menu',
      'aria-expanded': String(isActive.value),
      'aria-owns': id.value,
      onKeydown: onActivatorKeydown
    }, props.activatorProps));
    useRender(() => {
      const [overlayProps] = VOverlay.filterProps(props);
      return vue.createVNode(VOverlay, vue.mergeProps({
        "ref": overlay,
        "class": ['v-menu', props.class],
        "style": props.style
      }, overlayProps, {
        "modelValue": isActive.value,
        "onUpdate:modelValue": $event => isActive.value = $event,
        "absolute": true,
        "activatorProps": activatorProps.value,
        "onClick:outside": onClickOutside,
        "onKeydown": onKeydown
      }, scopeId), {
        activator: slots.activator,
        default: function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return vue.createVNode(VDefaultsProvider, {
            "root": "VMenu"
          }, {
            default: () => [slots.default?.(...args)]
          });
        }
      });
    });
    return forwardRefs({
      id,
      ΨopenChildren: openChildren
    }, overlay);
  }
});

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
                                                        
  const _component_insert_network_image_dialog = vue.resolveComponent("insert-network-image-dialog");
                                                                              
                                                                  
                                                        
                                                        
                                                      
  return vue.openBlock(), vue.createBlock(VBtn, {
    size: "small",
    variant: "flat",
    color: "white",
    class: "svme-toolbar-button"
  }, {
    default: vue.withCtx(() => [vue.createVNode(VIcon, {
      small: "",
      color: "grey darken-1",
      icon: _ctx.mdiImage
    }, null, 8 /* PROPS */, ["icon"]), vue.createCommentVNode(" the network image dialog "), vue.createVNode(_component_insert_network_image_dialog, {
      modelValue: _ctx.networkImageDialog.show,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.networkImageDialog.show = $event),
      url: _ctx.networkImageDialog.url,
      "onUpdate:url": _cache[1] || (_cache[1] = $event => _ctx.networkImageDialog.url = $event),
      onOk: _ctx.insertNetworkImage
    }, null, 8 /* PROPS */, ["modelValue", "url", "onOk"]), vue.createCommentVNode(" the upload image dialog "), vue.createElementVNode("input", {
      type: "file",
      ref: "file",
      onChange: _cache[2] || (_cache[2] = $event => _ctx.uploadLocalImage()),
      accept: "image/*",
      style: {
        display: 'none'
      }
    }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */), vue.createCommentVNode(" menu "), vue.createVNode(VMenu, {
      "offset-y": true,
      "open-on-hover": "",
      bottom: "",
      activator: "parent"
    }, {
      default: vue.withCtx(() => [vue.createVNode(VList, null, {
        default: vue.withCtx(() => [vue.createVNode(VListItem, {
          onClick: _cache[3] || (_cache[3] = $event => _ctx.showNetworkImageDialog())
        }, {
          default: vue.withCtx(() => [vue.createVNode(VListItemTitle, null, {
            default: vue.withCtx(() => [vue.createTextVNode(vue.toDisplayString(_ctx.t('svme.toolbar.insertNetworkImage')), 1 /* TEXT */)]),

            _: 1 /* STABLE */
          })]),

          _: 1 /* STABLE */
        }), vue.createVNode(VListItem, {
          onClick: _cache[4] || (_cache[4] = $event => _ctx.showUploadDialog())
        }, {
          default: vue.withCtx(() => [vue.createVNode(VListItemTitle, null, {
            default: vue.withCtx(() => [vue.createTextVNode(vue.toDisplayString(_ctx.t('svme.toolbar.uploadLocalImage')), 1 /* TEXT */)]),

            _: 1 /* STABLE */
          })]),

          _: 1 /* STABLE */
        })]),

        _: 1 /* STABLE */
      })]),

      _: 1 /* STABLE */
    })]),

    _: 1 /* STABLE */
  });
}

script$4.render = render$4;
script$4.__file = "src/plugins/ToolbarImageBtnPlugin/ImageButton.vue";

class ToolbarImageBtnPlugin {
  name = 'vuetify-plugin-toolbar-image-btn';
  constructor(fnUploadImage) {
    this.fnUploadImage = fnUploadImage;
    this.toolbarItemMap = {
      image: {
        vnode: () => {
          return vue.h(script$4, {
            fnUploadImage
          });
        }
      }
    };
  }
}
function toolbarImageBtn(fnUploadImage) {
  return new ToolbarImageBtnPlugin(fnUploadImage);
}

var script$3 = vue.defineComponent({
  setup() {
    const getVuetifyContext = vue.inject('getVuetifyContext');
    const context = getVuetifyContext();
    const {
      t
    } = context.methods;
    return {
      t
    };
  },
  props: {
    modelValue: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: false,
      default: ''
    },
    url: {
      type: String,
      required: false,
      default: ''
    }
  },
  data: function () {
    return {
      mdiClose
    };
  },
  methods: {
    hide() {
      this.$emit('update:modelValue', false);
    },
    cancel() {
      this.hide();
    },
    ok() {
      this.$emit('ok');
    }
  }
});

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
                                                                          
                                                            
                                                        
                                                      
                                                              
                                                                    
                                                      
                                                      
                                                                  
                                                                  
                                                                        
                                                        
                                                            
  return vue.openBlock(), vue.createBlock(VDialog, {
    modelValue: _ctx.modelValue,
    persistent: ""
  }, {
    default: vue.withCtx(() => [vue.createVNode(VCard, null, {
      default: vue.withCtx(() => [vue.createVNode(VToolbar, null, {
        default: vue.withCtx(() => [vue.createVNode(VToolbarTitle, null, {
          default: vue.withCtx(() => [vue.createTextVNode(vue.toDisplayString(_ctx.t('svme.insertLinkDialog.title')), 1 /* TEXT */)]),

          _: 1 /* STABLE */
        }), vue.createVNode(VSpacer), vue.createVNode(VBtn, {
          icon: "",
          dense: "",
          elevation: "0",
          onClick: _cache[0] || (_cache[0] = $event => _ctx.hide())
        }, {
          default: vue.withCtx(() => [vue.createVNode(VIcon, {
            icon: _ctx.mdiClose
          }, null, 8 /* PROPS */, ["icon"])]),
          _: 1 /* STABLE */
        })]),

        _: 1 /* STABLE */
      }), vue.createVNode(VCardText, null, {
        default: vue.withCtx(() => [vue.createVNode(VContainer, null, {
          default: vue.withCtx(() => [vue.createVNode(VRow, null, {
            default: vue.withCtx(() => [vue.createVNode(VCol, {
              cols: "12"
            }, {
              default: vue.withCtx(() => [vue.createVNode(VTextField, {
                value: _ctx.title,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.$emit('update:title', $event)),
                placeholder: _ctx.t('svme.insertLinkDialog.titleFieldPlaceHolder'),
                required: ""
              }, null, 8 /* PROPS */, ["value", "placeholder"])]),
              _: 1 /* STABLE */
            }), vue.createVNode(VCol, {
              cols: "12"
            }, {
              default: vue.withCtx(() => [vue.createVNode(VTextField, {
                value: _ctx.url,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.$emit('update:url', $event)),
                placeholder: _ctx.t('svme.insertLinkDialog.urlFieldPlaceHolder'),
                required: ""
              }, null, 8 /* PROPS */, ["value", "placeholder"])]),
              _: 1 /* STABLE */
            })]),

            _: 1 /* STABLE */
          })]),

          _: 1 /* STABLE */
        })]),

        _: 1 /* STABLE */
      }), vue.createVNode(VCardActions, null, {
        default: vue.withCtx(() => [vue.createVNode(VSpacer), vue.createVNode(VBtn, {
          color: "blue darken-1",
          text: "",
          onClick: _cache[3] || (_cache[3] = $event => _ctx.cancel())
        }, {
          default: vue.withCtx(() => [vue.createTextVNode(vue.toDisplayString(_ctx.t('svme.insertLinkDialog.cancel')), 1 /* TEXT */)]),

          _: 1 /* STABLE */
        }), vue.createVNode(VBtn, {
          color: "blue darken-1",
          text: "",
          onClick: _cache[4] || (_cache[4] = $event => _ctx.ok())
        }, {
          default: vue.withCtx(() => [vue.createTextVNode(vue.toDisplayString(_ctx.t('svme.insertLinkDialog.ok')), 1 /* TEXT */)]),

          _: 1 /* STABLE */
        })]),

        _: 1 /* STABLE */
      })]),

      _: 1 /* STABLE */
    })]),

    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["modelValue"]);
}

script$3.render = render$3;
script$3.__file = "src/plugins/ToolbarLinkBtnPlugin/InsertLinkDialog.vue";

var script$2 = vue.defineComponent({
  setup() {
    const getVuetifyContext = vue.inject('getVuetifyContext');
    const context = getVuetifyContext();
    const {
      command,
      t
    } = context.methods;
    return {
      command,
      t
    };
  },
  data: function () {
    return {
      mdiLinkVariant,
      linkDialog: {
        show: false,
        title: '',
        url: ''
      }
    };
  },
  components: {
    InsertLinkDialog: script$3
  },
  methods: {
    showLinkDialog() {
      this.linkDialog.title = '';
      this.linkDialog.url = '';
      this.linkDialog.show = true;
    },
    hideLinkDialog() {
      this.linkDialog.show = false;
    },
    insertLink() {
      this.hideLinkDialog();
      this.command('link', {
        title: this.linkDialog.title,
        url: this.linkDialog.url
      });
    }
  }
});

var css_248z$1 = ".v-tooltip > .v-overlay__content {\n  background: rgb(var(--v-theme-surface-variant));\n  color: rgb(var(--v-theme-on-surface-variant));\n  border-radius: 4px;\n  font-size: 0.875rem;\n  line-height: 1.6;\n  display: inline-block;\n  padding: 5px 16px;\n  text-transform: initial;\n  width: auto;\n  opacity: 1;\n  pointer-events: none;\n  transition-property: opacity, transform;\n}\n.v-tooltip > .v-overlay__content[class*=enter-active] {\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.v-tooltip > .v-overlay__content[class*=leave-active] {\n  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);\n  transition-duration: 75ms;\n}";
styleInject(css_248z$1);

const makeVTooltipProps = propsFactory({
  id: String,
  text: String,
  ...omit(makeVOverlayProps({
    closeOnBack: false,
    location: 'end',
    locationStrategy: 'connected',
    eager: true,
    minWidth: 0,
    offset: 10,
    openOnClick: false,
    openOnHover: true,
    origin: 'auto',
    scrim: false,
    scrollStrategy: 'reposition',
    transition: false
  }), ['absolute', 'persistent'])
}, 'VTooltip');
const VTooltip = genericComponent()({
  name: 'VTooltip',
  props: makeVTooltipProps(),
  emits: {
    'update:modelValue': value => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const isActive = useProxiedModel(props, 'modelValue');
    const {
      scopeId
    } = useScopeId();
    const uid = getUid();
    const id = vue.computed(() => props.id || `v-tooltip-${uid}`);
    const overlay = vue.ref();
    const location = vue.computed(() => {
      return props.location.split(' ').length > 1 ? props.location : props.location + ' center';
    });
    const origin = vue.computed(() => {
      return props.origin === 'auto' || props.origin === 'overlap' || props.origin.split(' ').length > 1 || props.location.split(' ').length > 1 ? props.origin : props.origin + ' center';
    });
    const transition = vue.computed(() => {
      if (props.transition) return props.transition;
      return isActive.value ? 'scale-transition' : 'fade-transition';
    });
    const activatorProps = vue.computed(() => vue.mergeProps({
      'aria-describedby': id.value
    }, props.activatorProps));
    useRender(() => {
      const [overlayProps] = VOverlay.filterProps(props);
      return vue.createVNode(VOverlay, vue.mergeProps({
        "ref": overlay,
        "class": ['v-tooltip', props.class],
        "style": props.style,
        "id": id.value
      }, overlayProps, {
        "modelValue": isActive.value,
        "onUpdate:modelValue": $event => isActive.value = $event,
        "transition": transition.value,
        "absolute": true,
        "location": location.value,
        "origin": origin.value,
        "persistent": true,
        "role": "tooltip",
        "activatorProps": activatorProps.value,
        "_disableGlobalStack": true
      }, scopeId), {
        activator: slots.activator,
        default: function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return slots.default?.(...args) ?? props.text;
        }
      });
    });
    return forwardRefs({}, overlay);
  }
});

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
                                                        
                                                              
  const _component_insert_link_dialog = vue.resolveComponent("insert-link-dialog");
                                                      
  return vue.openBlock(), vue.createBlock(VBtn, {
    size: "small",
    variant: "flat",
    color: "white",
    class: "svme-toolbar-button",
    onClick: _ctx.showLinkDialog
  }, {
    default: vue.withCtx(() => [vue.createVNode(VIcon, {
      small: "",
      color: "grey darken-1",
      icon: _ctx.mdiLinkVariant
    }, null, 8 /* PROPS */, ["icon"]), vue.createVNode(VTooltip, {
      location: "bottom",
      activator: "parent"
    }, {
      default: vue.withCtx(() => [vue.createTextVNode(vue.toDisplayString(_ctx.t('svme.toolbar.link')), 1 /* TEXT */)]),

      _: 1 /* STABLE */
    }), vue.createVNode(_component_insert_link_dialog, {
      modelValue: _ctx.linkDialog.show,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.linkDialog.show = $event),
      title: _ctx.linkDialog.title,
      "onUpdate:title": _cache[1] || (_cache[1] = $event => _ctx.linkDialog.title = $event),
      url: _ctx.linkDialog.url,
      "onUpdate:url": _cache[2] || (_cache[2] = $event => _ctx.linkDialog.url = $event),
      onOk: _cache[3] || (_cache[3] = $event => _ctx.insertLink())
    }, null, 8 /* PROPS */, ["modelValue", "title", "url"])]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onClick"]);
}

script$2.render = render$2;
script$2.__file = "src/plugins/ToolbarLinkBtnPlugin/LinkButton.vue";

class ToolbarLinkBtnPlugin {
  name = 'vuetify-plugin-toolbar-link-btn';
  constructor() {
    this.toolbarItemMap = {
      link: {
        comp: script$2
      }
    };
  }
}
function toolbarLinkBtn() {
  return new ToolbarLinkBtnPlugin();
}

var script$1 = vue.defineComponent({
  setup() {
    const getVuetifyContext = vue.inject('getVuetifyContext');
    const context = getVuetifyContext();
    const {
      t
    } = context.methods;
    return {
      t
    };
  },
  data: function () {
    return {
      rowNum: 10,
      colNum: 10,
      minRowNum: 10,
      minColNum: 10,
      curRow: 0,
      curCol: 0,
      timer: 0
    };
  },
  methods: {
    setCurrentRowAndCol(row, col) {
      this.curRow = row;
      this.curCol = col;
      if (this.rowNum > this.minRowNum && this.rowNum > row) {
        this.rowNum--;
      }
      if (this.colNum > this.minColNum && this.colNum > col) {
        this.colNum--;
      }
      if (this.rowNum <= row) {
        this.rowNum++;
      }
      if (this.colNum <= col) {
        this.colNum++;
      }
    },
    hide() {
      this.$emit('input', false);
    },
    cancel() {
      this.hide();
    },
    ok() {
      this.$emit('ok', {
        row: this.curRow,
        col: this.curCol
      });
    },
    doNothing() {}
  },
  mounted() {
    this.timer = setInterval(() => {
      if (!this.$refs?.table?.matches(':hover') && this.curRow > 0) {
        this.setCurrentRowAndCol(0, 0);
      }
    }, 200);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  }
});

const _hoisted_1 = {
  class: "pa-2 bg-white rounded elevation-4"
};
const _hoisted_2 = {
  class: "table",
  ref: "table"
};
const _hoisted_3 = ["onMouseover"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [vue.createTextVNode(vue.toDisplayString(_ctx.curRow > 0 ? _ctx.t('svme.insertTableBoard.info', {
    row: _ctx.curRow,
    col: _ctx.curCol
  }) : _ctx.t('svme.insertTableBoard.title')) + " ", 1 /* TEXT */), vue.createElementVNode("table", _hoisted_2, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.rowNum, row => {
    return vue.openBlock(), vue.createElementBlock("tr", {
      key: row
    }, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.colNum, col => {
      return vue.openBlock(), vue.createElementBlock("td", {
        key: col,
        class: vue.normalizeClass(['cell', {
          'highlight': row <= _ctx.curRow && col <= _ctx.curCol
        }]),
        onMouseover: $event => _ctx.setCurrentRowAndCol(row, col),
        onClick: _cache[0] || (_cache[0] = $event => _ctx.ok())
      }, null, 42 /* CLASS, PROPS, HYDRATE_EVENTS */, _hoisted_3);
    }), 128 /* KEYED_FRAGMENT */))]);
  }), 128 /* KEYED_FRAGMENT */))], 512 /* NEED_PATCH */)]);
}

var css_248z = "\n.table[data-v-77edf84c] {\n  border-spacing: 2px;\n}\n.cell[data-v-77edf84c] {\n  width: 20px;\n  height: 20px;\n  border: 1px solid black !important;\n}\n.highlight[data-v-77edf84c] {\n  background-color: lightblue;\n}\n";
styleInject(css_248z);

script$1.render = render$1;
script$1.__scopeId = "data-v-77edf84c";
script$1.__file = "src/plugins/ToolbarTableBtnPlugin/InsertTableBoard.vue";

var script = vue.defineComponent({
  setup() {
    const getVuetifyContext = vue.inject('getVuetifyContext');
    const context = getVuetifyContext();
    const {
      command,
      t
    } = context.methods;
    return {
      command,
      t
    };
  },
  components: {
    InsertTableBoard: script$1
  },
  data: function () {
    return {
      mdiTablePlus
    };
  },
  methods: {
    insertTable(row, col) {
      this.command('table', {
        row,
        col
      });
    }
  }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
                                                        
                                                              
  const _component_insert_table_board = vue.resolveComponent("insert-table-board");
                                                        
                                                      
  return vue.openBlock(), vue.createBlock(VBtn, {
    size: "small",
    variant: "flat",
    color: "white",
    class: "svme-toolbar-button"
  }, {
    default: vue.withCtx(() => [vue.createVNode(VIcon, {
      small: "",
      color: "grey darken-1",
      icon: _ctx.mdiTablePlus
    }, null, 8 /* PROPS */, ["icon"]), vue.createVNode(VTooltip, {
      location: "bottom",
      activator: "parent"
    }, {
      default: vue.withCtx(() => [vue.createTextVNode("Image")]),
      _: 1 /* STABLE */
    }), vue.createCommentVNode(" table "), vue.createVNode(VMenu, {
      "offset-y": true,
      "open-on-hover": "",
      bottom: "",
      activator: "parent"
    }, {
      default: vue.withCtx(() => [vue.createVNode(_component_insert_table_board, {
        onOk: _cache[0] || (_cache[0] = $event => _ctx.insertTable($event.row, $event.col))
      })]),
      _: 1 /* STABLE */
    })]),

    _: 1 /* STABLE */
  });
}

script.render = render;
script.__file = "src/plugins/ToolbarTableBtnPlugin/TableButton.vue";

class ToolbarTableBtnPlugin {
  name = 'vuetify-plugin-toolbar-table-btn';
  constructor() {
    this.toolbarItemMap = {
      table: {
        comp: script
      }
    };
  }
}
function toolbarTableBtn() {
  return new ToolbarTableBtnPlugin();
}

exports.toolbarImageBtn = toolbarImageBtn;
exports.toolbarLinkBtn = toolbarLinkBtn;
exports.toolbarTableBtn = toolbarTableBtn;
