import CoreEditor from './CoreEditor/CoreEditor.vue'
import highlightPlugin from './plugins/HighlightPlugin/HighlightPlugin'
import imageClickEventPlugin from './plugins/HandleImageClickPlugin'
import { uniqId, escapeHtml } from './utils/util'
import type { CorePlugin, CorePluginManager } from './plugins/CorePlugin'

export { CoreEditor, highlightPlugin, imageClickEventPlugin, uniqId, escapeHtml, CorePlugin, CorePluginManager }
