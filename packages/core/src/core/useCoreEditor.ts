import { provide, computed } from 'vue'
import type { Ref, VNode } from 'vue'
import { PluginManager } from './PluginManager'
import { TocSpy } from './TocSpy'
import type { FnGetContext, FnSetContext, Plugin } from './types'

import { useCodeMirror } from './useCodeMirror'
import { useMarkdownIt } from './useMarkdownIt'

import { Lang } from './Lang'
import en from '../langs/en'
import zh_CN from '../langs/zh_CN'

import { EventBus } from './EventBus'

export interface CoreEditorConfig {
  doc: Ref<string>
  editorEl: Ref<HTMLElement | null>
  viewerEl: Ref<HTMLElement | null>
  tocEl: Ref<HTMLElement | null>
  editorScrollEl: Ref<HTMLElement | null>
  viewerScrollEl: Ref<HTMLElement | null>
  tocScrollEl: Ref<HTMLElement | null>
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
  const editorWrapperList = pluginManager.getEditorWrapperList()
  const viewerWrapperList = pluginManager.getViewerWrapperList()
  const tocWrapperList = pluginManager.getTocWrapperList()

  const codeMirror = useCodeMirror(coreEditorConfig.doc, coreEditorConfig.editorEl, pluginManager)
  const markdownIt = useMarkdownIt(coreEditorConfig.doc, coreEditorConfig.viewerEl, pluginManager)
  const { insertOrReplace, command, scrollToLine } = codeMirror
  const { html, headingList } = markdownIt

  setContext('instances', 'markdownIt', markdownIt.instance)
  setContext('instances', 'codeMirror', codeMirror.editorView)
  setContext('methods', 'insertOrReplace', insertOrReplace)
  setContext('methods', 'command', command)
  setContext('methods', 'scrollToLine', scrollToLine)
  setContext('data', 'html', html)
  setContext('data', 'headingList', headingList)

  const editorScrollEl = pluginManager.getEditorScrollEl() ?? coreEditorConfig.editorScrollEl
  const viewerScrollEl = pluginManager.getViewerScrollEl() ?? coreEditorConfig.viewerScrollEl
  const tocScrollEl = pluginManager.getTocScrollEl() ?? coreEditorConfig.tocScrollEl
  setContext('doms', 'editScroll', editorScrollEl)
  setContext('doms', 'viewScroll', viewerScrollEl)
  setContext('doms', 'tocScroll', tocScrollEl)

  const tocSpy = new TocSpy(headingList, viewerScrollEl, {}, getContext())
  setContext('instances', 'tocSpy', tocSpy)

  return {
    codeMirror,
    markdownIt,
    command,
    insertOrReplace,
    extraVnodes,
    css,
    toolbarWrapperList,
    editorWrapperList,
    viewerWrapperList,
    tocWrapperList,
    pluginManager,
    tocSpy
  }
}


