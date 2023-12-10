/**
 * forked from https://github.com/fnick851/vue-use-css/tree/main/src/use-css
 */
import { onUnmounted } from 'vue'
import scopeCss from 'css-scoped'

function transformCss(css: string, parentSelector: string): string {
  return scopeCss(css, 'PARENT-SELECTOR').replaceAll('.PARENT-SELECTOR &', parentSelector)
}

declare global {
  interface Window {
    __VUE_USE_CSS_NAMESPACE_COUNT__: number
  }
}

function getCssSope(): { attrName: string; attrValue: number } {
  if (!window.__VUE_USE_CSS_NAMESPACE_COUNT__) {
    window.__VUE_USE_CSS_NAMESPACE_COUNT__ = 1
  } else {
    window.__VUE_USE_CSS_NAMESPACE_COUNT__ += 1
  }
  const attrName = 'data-css-scope'
  const attrValue = window.__VUE_USE_CSS_NAMESPACE_COUNT__
  return { attrName, attrValue }
}

function useCss(css: string): { [key: string]: number } {
  const { attrName, attrValue } = getCssSope()

  const transformedCss = transformCss(css, `[${attrName}='${attrValue}']`)

  const styleElement = document.createElement('style')
  styleElement.textContent = transformedCss
  styleElement.setAttribute('data-css-for', `[${attrName}='${attrValue}']`)
  document.head.appendChild(styleElement)
  onUnmounted(() => {
    styleElement.remove()
  })

  return {
    [attrName]: attrValue,
  }
}

export { useCss }