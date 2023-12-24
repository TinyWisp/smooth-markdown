import { provide, computed, onMounted, watch } from 'vue'
import type { Ref, VNode } from 'vue'
import { PluginManager } from './PluginManager'
import type { Context, FnGetContext, FnSetContext, Plugin } from './types'

import { useCodeMirror } from './useCodeMirror'
import { useMarkdownIt } from './useMarkdownIt'

import { Lang } from './Lang'
import en from '../langs/en'
import zh_CN from '../langs/zh_CN'

import { EventBus } from './EventBus'

export interface CoreEditorConfig {
  doc: Ref<string>
  editElem: Ref<HTMLElement | null>
  viewElem: Ref<HTMLElement | null>
  editScrollElm: Ref<HTMLElement | null>
  viewScrollElm: Ref<HTMLElement | null>
  plugins: Plugin[]
  getContext: FnGetContext
  setContext: FnSetContext
}

export function useCoreEditor(coreEditorConfig: CoreEditorConfig) {
  const { getContext, setContext } = coreEditorConfig
  provide('getContext', getContext)
  provide('setContext', setContext)

  const eventBus = new EventBus()
  const { on, off, fire } = eventBus
  setContext('instances', 'eventBus', eventBus)
  setContext('methods', 'on', on)
  setContext('methods', 'off', off)
  setContext('methods', 'fire', fire)

  const pluginManager = new PluginManager(getContext, setContext)
  pluginManager.registerPlugins(coreEditorConfig.plugins)
  pluginManager.init()
  setContext('instances', 'pluginManager', pluginManager)

  const lang = new Lang()
  const { t } = lang
  lang.merge({en, zh_CN})
  lang.merge(pluginManager.getMessageMap())
  setContext('methods', 't', t)
  setContext('instances', 'lang', lang)

  const css = pluginManager.getCss()

  const extraVnodes = computed<VNode[]>(() => {
    return pluginManager.getExtraVnodes()
  })

  const toolbarWrapperList = pluginManager.getToolbarWrapperList()
  const editWrapperList = pluginManager.getEditWrapperList()
  const viewWrapperList = pluginManager.getViewWrapperList()

  const codeMirror = useCodeMirror(coreEditorConfig.doc, coreEditorConfig.editElem, pluginManager)
  const markdownIt = useMarkdownIt(coreEditorConfig.doc, coreEditorConfig.viewElem, pluginManager)
  const { insertOrReplace, command } = codeMirror

  setContext('instances', 'markdownIt', markdownIt.instance)
  setContext('instances', 'codeMirror', codeMirror.editorView)
  setContext('methods', 'insertOrReplace', insertOrReplace)
  setContext('methods', 'command', command)
  setContext('data', 'html', markdownIt.html)

  const editScrollElm = pluginManager.getEditScrollElm() ?? coreEditorConfig.editScrollElm
  const viewScrollElm = pluginManager.getViewScrollElm() ?? coreEditorConfig.viewScrollElm
  setContext('doms', 'editScroll', editScrollElm)
  setContext('doms', 'viewScroll', viewScrollElm)

  onMounted(() => {
    watch([editScrollElm, viewScrollElm], () => {
      if (editScrollElm.value && viewScrollElm.value) {
        editScrollElm.value.addEventListener('scroll', (event: Event) => {
          fire('edit', 'scroll', event)
        })
        editScrollElm.value.addEventListener('scrollend', (event: Event) => {
          fire('edit', 'scrollend', event)
        })
        viewScrollElm.value.addEventListener('scroll', (event: Event) => {
          fire('view', 'scroll', event)
        })
        viewScrollElm.value.addEventListener('scrollend', (event: Event) => {
          fire('view', 'scrollend', event)
        })
      }
    })
  })

  return {
    codeMirror,
    markdownIt,
    command,
    insertOrReplace,
    extraVnodes,
    css,
    toolbarWrapperList,
    editWrapperList,
    viewWrapperList,
    pluginManager
  }
}


