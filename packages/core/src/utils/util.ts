import scopeCss from 'css-scoped'

/**
 * generate an unique id
 */
let counter = Date.now()
function uniqId(): string {
  counter++
  return `svme_core_uniq_${counter}`
}

/**
 * escape html
 */
function escapeHtml(str: string) {
  return str.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/'/g, "&#39;")
            .replace(/"/g, "&quot;");
}

/**
 * add parent selector to all the css rules
 */
function addParentSelector(css: string, parentSelector: string) {
  return scopeCss(css, 'PARENT-SELECTOR').replaceAll('.PARENT-SELECTOR', parentSelector)
}

export { uniqId, escapeHtml, addParentSelector }