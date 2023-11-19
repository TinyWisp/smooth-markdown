import { provide, computed } from 'vue'
import type { Ref, VNode } from 'vue'
import { CorePluginManager } from './CorePlugin'
import type { CoreContext, CorePlugin } from './types'

import { useCodeMirror } from './useCodeMirror'
import { useMarkdownIt } from './useMarkdownIt'

import { Lang } from './lang'
import en from '../langs/en'
import zh_CN from '../langs/zh_CN'


export interface CoreEditorConfig {
  doc: Ref<string>
  editElem: Ref<HTMLElement | null>
  viewElem: Ref<HTMLElement | null>
  plugins: CorePlugin[]
}

export function useCoreEditor(coreEditorConfig: CoreEditorConfig) {
  const pluginManager = new CorePluginManager(getCoreContext)
  pluginManager.registerPlugins(coreEditorConfig.plugins)

  const lang = new Lang()
  const t = lang.t.bind(lang)
  lang.merge({en, zh_CN})
  lang.merge(pluginManager.getMessageMap())

  const extraVnodes = computed<VNode[]>(() => {
    return pluginManager.getExtraVnodes()
  })
  const toolbarWrapperList = pluginManager.getToolbarWrapperList()

  const codeMirror = useCodeMirror(coreEditorConfig.doc, coreEditorConfig.editElem, pluginManager)
  const markdownIt = useMarkdownIt(coreEditorConfig.doc, coreEditorConfig.viewElem, pluginManager)
  const { insertOrReplace, command } = codeMirror

  // -------------------- getCoreContext, setCoreContext --------------------
  const coreContext: CoreContext = {
    methods: {},
    doms: {},
    props: {},
    instances: {},
    others: {}
  }
  function setCoreContext(key: keyof CoreContext, subKey: string, val: any) {
    coreContext[key][subKey] = val
  }
  function getCoreContext(): CoreContext {
    const context: CoreContext = {
      methods: {
        insertOrReplace,
        command,
        t,
        ...coreContext.methods
      },
      doms: {
        edit: coreEditorConfig.editElem.value,
        view: coreEditorConfig.viewElem.value,
        ...coreContext.doms
      },
      props: {
        hookProps: coreEditorConfig,
        ...coreContext.props
      },
      instances: {
        editorView: codeMirror.editorView,
        markdownIt: markdownIt.instance,
        ...coreContext.instances
      },
      others: {
        doc: coreEditorConfig.doc.value,
        html: markdownIt.html,
        pluginManager,
        ...coreContext.others
      }
    }
    return context
  }
  provide('getCoreContext', getCoreContext)
  provide('setCoreContext', getCoreContext)

  return {
    codeMirror,
    markdownIt,
    command,
    insertOrReplace,
    extraVnodes,
    getCoreContext,
    setCoreContext,
    toolbarWrapperList,
    pluginManager
  }
}


