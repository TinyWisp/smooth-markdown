import { provide, computed } from 'vue'
import type { Ref, VNode } from 'vue'
import { PluginManager } from './PluginManager'
import type { Context, Plugin } from './types'

import { useCodeMirror } from './useCodeMirror'
import { useMarkdownIt } from './useMarkdownIt'

import { Lang } from './lang'
import en from '../langs/en'
import zh_CN from '../langs/zh_CN'

import { EventBus } from './EventBus'

export interface CoreEditorConfig {
  doc: Ref<string>
  editElem: Ref<HTMLElement | null>
  viewElem: Ref<HTMLElement | null>
  plugins: Plugin[]
}

export function useCoreEditor(coreEditorConfig: CoreEditorConfig) {
  const eventBus = new EventBus()
  const { on, off, fire } = eventBus

  const pluginManager = new PluginManager(getContext, setContext)
  pluginManager.registerPlugins(coreEditorConfig.plugins)
  pluginManager.init()

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

  // -------------------- getContext, setContext --------------------
  const context: Context = {
    methods: {},
    doms: {},
    props: {},
    instances: {},
    others: {}
  }
  function setContext(key: keyof Context, subKey: string, val: any) {
    context[key][subKey] = val
  }
  function getContext(): Context {
    const fullContext: Context = {
      methods: {
        insertOrReplace,
        command,
        t,
        on,
        off,
        fire,
        ...context.methods
      },
      doms: {
        edit: coreEditorConfig.editElem.value,
        view: coreEditorConfig.viewElem.value,
        ...context.doms
      },
      props: {
        coreProps: coreEditorConfig,
        ...context.props
      },
      instances: {
        codemirror: codeMirror.editorView,
        markdownIt: markdownIt.instance,
        lang,
        eventBus,
        ...context.instances
      },
      others: {
        doc: coreEditorConfig.doc.value,
        html: markdownIt.html,
        pluginManager,
        ...context.others
      }
    }
    return fullContext
  }
  provide('getContext', getContext)
  provide('setContext', getContext)

  return {
    codeMirror,
    markdownIt,
    command,
    insertOrReplace,
    extraVnodes,
    getContext,
    setContext,
    toolbarWrapperList,
    pluginManager
  }
}


