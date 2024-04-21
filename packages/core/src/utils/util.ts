import scopeCss from 'css-scoped'

/**
 * generate an unique id
 */
declare global {
  interface Window {
    svmeCounter: number
  }
}
if (!window.svmeCounter) {
  window.svmeCounter = Date.now()
}
function uniqId(): string {
  window.svmeCounter++
  return `svme_core_uniq_${window.svmeCounter}`
}

/**
 * escape html
 */
function escapeHtml(str: string) {
  return str.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/'/g, "&#39;")
            .replace(/"/g, "&quot;")
}

/**
 * add parent selector to all the css rules
 */
function addParentSelector(css: string, parentSelector: string) {
  return scopeCss(css, 'PARENT-SELECTOR').replaceAll('.PARENT-SELECTOR', parentSelector)
}

/**
 * insert a style element into head
 */
function insertCss(css: string) {
    const styleElement = document.createElement('style')
    styleElement.setAttribute('type', 'text/css')
    styleElement.textContent += css

    document.querySelector('head')?.appendChild(styleElement)

    return styleElement
}

export { uniqId, escapeHtml, addParentSelector, insertCss }