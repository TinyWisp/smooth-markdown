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

export { uniqId, escapeHtml }