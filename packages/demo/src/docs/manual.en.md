# Introduction

smooth-markdown is a pluggable markdown editor for vue.js 3. it is easy to extend in terms of markdown syntax, editing operations, and appearance.

| package  | status  | info |
| - | - | - |
| @smooth-markdown/core | [![npm](https://img.shields.io/npm/v/@smooth-markdown/core)](https://www.npmjs.com/package/@smooth-markdown/core) | the core components and plugins. |
| @smooth-markdown/vuetify-toolbar | [![npm](https://img.shields.io/npm/v/@smooth-markdown/vuetify-toolbar)](https://www.npmjs.com/package/@smooth-markdown/vuetify-toolbar) | a toolbar based on vuetify. |
| @smooth-markdown/element-toolbar | [![npm](https://img.shields.io/npm/v/@smooth-markdown/element-toolbar)](https://www.npmjs.com/package/@smooth-markdown/element-toolbar) | a toolbar based on element-plus. |
| @smooth-markdown/presets | [![npm](https://img.shields.io/npm/v/@smooth-markdown/presets)](https://www.npmjs.com/package/@smooth-markdown/presets) | presets |

**Install**

```bash
npm install @smooth-markdown/core @smooth-markdown/presets @smooth-markdown/element-toolbar @smooth-markdown/vuetify-toolbar
```

# Examples

## Playground

[playground](#/playground?lang=en)

## Vuetify Toolbar 

```iframe
#/demo?name=/getting-started/element-toolbar
```

## Element Plus Toolbar

```iframe
#/demo?name=/getting-started/vuetify-toolbar
```

## Custom Size

```iframe
#/demo?name=/examples/custom-size
```

## Extending Syntax

This component uses markdown-it for rendering, so it is able to extending syntax by loading markdown-it plugins.
There is a `markdownItPlugins` plugin to acheive that.

```iframe
#/demo?name=/examples/extending-markdown-syntax
```

## Language

loading the language plugin you need, and setting the `locale` property to the equivalent value.

```iframe
#/demo?name=/plugins/lang-zh-cn
```

## Custom Language Resource

using the `lang` plugin

```iframe
#/demo?name=/plugins/lang
```

## Custom Appearance

The editable area of this component is based on CodeMirror 6. By using the `CodeMirrorExt` plugin to load a theme extension for CodeMirror 6, you can change its appearance. For the preview area, simply add CSS styles.

In the previous examples, there is a `classicSetup` provided by `@smooth-markdown/presets`.
`classicSetup` is an array that contains multiple plugins. Below is its source code.

```javascript
import {
  markdownItPlugins,
  overlayScrollbars,
  math,
  customCodeBlockRenderer,
  defaultEditorTheme,
  defaultViewerTheme,
  tocSpy,
  syncScrollbars,
  highlightCodeBlocksInEditableArea,
  codemirrorExt
} from '@smooth-markdown/core/plugins'
import { MermaidRenderer, KatexRenderer, CodeMirrorRenderer } from '@smooth-markdown/core/renderers'
import type { Plugin } from '@smooth-markdown/core'
import sup from 'markdown-it-sup'
import sub from 'markdown-it-sub'
import ins from 'markdown-it-ins'
import br  from 'markdown-it-br'
import mark from 'markdown-it-mark'
import deflist from 'markdown-it-deflist'
import taskLists from 'markdown-it-task-lists'
import footnote from 'markdown-it-footnote'
import mialert from 'markdown-it-alert'
import { EditorView, lineNumbers, highlightActiveLine, highlightActiveLineGutter } from '@codemirror/view'
import { foldGutter } from '@codemirror/language'

const classicSetup: Plugin[] = [
  markdownItPlugins([
    [ sup ],
    [ sub ],
    [ ins ],
    [ br ],
    [ mark ],
    [ deflist ],
    [ taskLists ],
    [ footnote ],
    [ mialert ]
  ]),
  customCodeBlockRenderer({
    math: [KatexRenderer],
    mermaid: [MermaidRenderer],
    default: [CodeMirrorRenderer]
  }),
  codemirrorExt([
    EditorView.lineWrapping,
    lineNumbers(),
    highlightActiveLine(),
    highlightActiveLineGutter(),
    foldGutter()
  ]),
  overlayScrollbars(),
  math(),
  defaultEditorTheme(),
  defaultViewerTheme(),
  tocSpy(),
  syncScrollbars(),
  highlightCodeBlocksInEditableArea()
]

export default classicSetup
```

In this example, I copied the source code of  `classicSetup`, deleted the `defaultEditor` plugin and
the `defaultViewerTheme` plugin, loaded the `solarizedDark` extension for codemirror, and used the `injectCss`
plugin to style the preview area.

```iframe
#/demo?name=/examples/custom-appearances
```

## Operations

use the methods provided by `context` to operate it.

```iframe
#/demo?name=/examples/operations
```

# Components

## smooth-markdown

**Props**

| name | type | desc | default | note |
| - | - | - | - | - |
| locale | string | locale| en |  |
| mode | string | parts to be displayed | editor\|viewer | enum values including `editor`, `viewer` and `toc`, joined by `\|`. such as 'editor\|viewer'.  |
| plugins | Array | plugins to be loaded | [] | - |
| readonly | boolean | whether it is editable | false | - |

**Methods**

| method | desc | note |
| - | - | - |
| getContext(): Context | get the context | - |
| setContext(key, val) <br> setContext(key, subkey, val) | set the context | - |

**Slots**

| name | desc |
| - | - |
| toolbar | toolbar |
| toc | table of contents |

## simple-toc

**Props**
\-

**Methods**
\-

## vuetify-toolbar

A toolbar based on vuetify 3

**Attributes**
| name | type | desc | default | note |
| - | - | - | - | - |
| items | (string \| Component \| VNode \| () => VNode \| ToolbarItem)[] | items of the toolbar | [...] |  |

**Type**
- `string`  name of a predefined toolbar item, like 'sub' and 'sup'.
- `Component` a component.
- `VNode` JSX.
- `() => VNode` a function that returns JSX.
- `ToolbarItem` a custom button described by an object, like `{ icon: 'mdi-format-underline', tip: 'underline', cmd: 'underline' }`.

**Object that describes a button**
``` javascript
interface ToolbarItem {
  name?: string                      // name
  icon?: string | (() => string)     // an icon from '@mdi/js'
  tip?: string | (() => string)      // tip
  cmd?: string                       // command
  exec?: () => void                  // a custom function executed when the button is clicked. it is not needed if the `cmd` property is provided.
}
```

example:
``` javascript
{
  icon: 'mdi-format-underline',
  tip: 'underline',
  cmd: 'underline'
}
```

**Predefined Items**

| name | desc |
| - | - |
| divider | |
| spacer | push the following items to right. |
| undo | |
| redo | |
| bold | |
| italic | |
| strikethrough | |
| underline | |
| subscript | |
| superscript |  |
| mark | |
| heading1 | |
| heading2 | |
| heading3 | |
| heading4 | |
| heading5 | |
| heading6 | |
| bulletedList | |
| numberedList | |
| quote | |
| inlineCode | |
| codeBlock | |
| horizontalRule | |
| image | |
| link | |
| table | |
| preview | open or close the preview. |

**Example**
```iframe
#/demo?name=/vuetify-toolbar/custom-toolbar-items
```

## element-toolbar

A toolbar based on element plus.

**Attributes**

| name | type | desc | default | note |
| - | - | - | - | - |
| items | (string \| Component \| VNode \| () => VNode \| ToolbarItem)[] | items of the toolbar | [...] |  |

**Type**
- `string`  name of a predefined toolbar item, like 'sub' and 'sup'.
- `Component` a component.
- `VNode` JSX.
- `() => VNode` a function that returns JSX.
- `ToolbarItem` a custom button described by an object, like `{ icon: 'mdi-format-underline', tip: 'underline', cmd: 'underline' }`.

**Object that describes a button**
``` javascript
interface ToolbarItem {
  name?: string                      // name
  icon?: string | (() => string)     // an icon from '@mdi/js'
  tip?: string | (() => string)      // tip
  cmd?: string                       // command
  exec?: () => void                  // a custom function executed when the button is clicked. it is not needed if the `cmd` property is provided.
}
```

example:
``` javascript
{
  icon: 'mdi-format-underline',
  tip: 'underline',
  cmd: 'underline'
}
```

**Predefined Items**

| name | desc |
| - | - |
| divider | |
| spacer | push the following items to right. |
| undo | |
| redo | |
| bold | |
| italic | |
| strikethrough | |
| underline | |
| subscript | |
| superscript |  |
| mark | |
| heading1 | |
| heading2 | |
| heading3 | |
| heading4 | |
| heading5 | |
| heading6 | |
| bulletedList | |
| numberedList | |
| quote | |
| inlineCode | |
| codeBlock | |
| horizontalRule | |
| image | |
| link | |
| table | |
| preview | open or close the preview. |

**Example**
```iframe
#/demo?name=/element-toolbar/custom-toolbar-items
```

# Context

**get/set**

methods:
- getContext()
- setContext(key: string, val: any)
- setContext(key: string, subkey: string, val: any)

you can also get it via `inject` in a slot.
``` javascript
  import type { FnGetContext, FnSetContext } from '@smooth-markdown/core'

  const getContext = inject<FnGetContext>('getContext')
  const getContext = inject<FnSetContext>('setContext')
```

**Details**

| object | name | type | note | 
| - | - | - | - |
| | doc | Ref<string> | content |
| ^^ | mode | Ref<string> | mode. its value is a combination of 'editor', 'viewer' and 'toc', seprated by  '\|', like `editor|viewer` |
| ^^ | props | SmoothMarkdownProps | the props passed to the component.  |
| lang <br> 语言 | t |  Function(path: string, varMap: VariableMap = {}) | translate. path:消息路径, varMap: 变量映射 |
| ^^ | print | Function() | 打印所有消息 |
| ^^ | setLocale | Function(locale: string) | 设置当前语言 |
| ^^ | setFallbackLocale | Function(locale: string) | 设置回退语言，当某条消息找不到所需的翻译数据时，则使用回退语言 |
| eventBus <br> 事件巴士 | on | Function(src: string, event: string, func: Function) | 绑定事件处理函数 |
| ^^ | off | Function(src: string, event: string, func: Function) | 解绑事件处理函数 |
| ^^ | fire | Function(src: string, event: string, detail: Any) | 发布事件消息 |
| ^^ | beginDebug | Function() | 开始打印事件信息 |
| ^^ | endDebug | Function() | 结束打印事件信息 |
| root <br> 根元素(整个组件最外层的容器) | el | HTMLElement \| null | DOM元素 |
| ^^ | selector | string | css选择器 |
| ^^ | style | {[key: string]: string} | 样式 |
| viewer <br> the preview area | el | HTMLElement \| null | the DOM element |
| ^^ | selector | string | the css selector |
| ^^ | containerEl | HTMLElement \| null | the container's DOM element |
| ^^ | containerSelector | string | the css selector of its container |
| ^^ | scrollEl | Ref<HTMLElement \| null> | the element to be scrolled |
| ^^ | markdownIt | MarkdownIt | the instance of `markdown-it` |
| editor <br> the editable area | el | HTMLElement \| null | the DOM element |
| ^^ | selector | string | the css selector |
| ^^ | containerEl | HTMLElement \| null | the contianer's DOM element |
| ^^ | containerSelector | string | the css selector of its container |
| ^^ | scrollEl | Ref<HTMLElement \| null> | the element to be scrolled |
| ^^ | insertOrReplace | Function(text: string, newLine: boolean = false) | insert or replace a text <br> newLine: whether to insert a newline if the cursor is not at the beginning of a line |
| ^^ | command | Function(cmd: string, params: Object = {}) | execute a command |
| ^^ | scrollToLine | Function(lineNum: number) | scroll to a line  |
| ^^ | moveLinesTo | Function(lineBegin: number, lineEnd: number, lineDes: number) | move the specified lines to a new position |
| ^^ | cmEditorView | EditorView | the instance of `codemirror` |
| toc <br> table of content | el | HTMLElement \| null | the DOM element |
| ^^ | selector | string | the css selector |
| ^^ | containerEl | HTMLElement \| null | the container's DOM element |
| ^^ | containerSelector | string | the css selector of the container |
| ^^ | scrollEl | Ref<HTMLElement \| null> | the DOM element to be scrolled |
| header | el | HTMLElement \| null | the DOM element |
| ^^ | selector | string | the css selector |
| body | el | HTMLElement \| null | the DOM element |
| ^^ | selector | string | the css selector |

**elements**

```html
<div data-tip>
  <div>
</div>
```

**context.editor.insertOrReplace(text: string, newLine: boolean = false)**
replace the selected text, or insert at the cursor.
`text`: the text to be replaced or inserted. 
if it doesn't include a `<-->` and there is nothing selected, it will be inserted into the edtior.
if it doesn't include a `<-->` and there is a selected text in the editor, the selected text will be replaced with it.
if it includes a `<-->` and there is nothing selected in the editor, `<-->` means the position of the cursor after inserting. 
if it includes a `<-->` and there is a selected text in the editor, `<-->` will be replaced with the selected text.
`newLine`: whether to insert a newLine if the cursor is not at the beginning of a line.

**context.editor.command(cmd: string, params: Object = {})**
execute an command

avaliable commands:

| command | desc | params |
| - | - | - |
| undo | | |
| redo | | |
| bold | | |
| italic | | |
| strikethrough | | |
| underline | | |
| subscript | | |
| superscript | | |
| mark | | |
| heading1 | | |
| heading2 | | |
| heading3 | | |
| heading4 | | |
| heading5 | | |
| heading6 | | |
| bulletedList | | |
| numberedList | | |
| quote | | |
| inlineCode | | |
| codeBlock | | |
| horizontalRule |  | |
| image | | {title: 'title', url: 'url'} |
| link | |  {title: 'title', url: 'url'} |
| table | | {row: row, col: col } |

# Plugins

## List of plugins

| plugin    | desc |
| --------- | ----------- |
| customCodeBlockRenderer | rendering the code blocks with custom vue components |
| affixToolbar | affix the toolbar on the screen |
| overlayScrollbars | scrollbars based on overlayScrollbars |
| autoHeight | make its height fit to its content |
| highlightCodeBlocksInEditableArea | highlight the codes in the editable area |
| syncScrollbars | sync the scrollbars |
| langCN | Chinese language resource |
| langEn | English language resource |
| lang | custom language resource |
| markdownItPlugins | loading markdown-it plugins |
| markdownItOptions | setting markdown-it options |
| codemirrorExt | loading codemirror extensions |
| defaultEditorTheme | the default appearance of the editable area |
| defaultViewerTheme | the default appearance of the preview area |
| injectCss | inject css  |
| customLinkAttrs | custom the attributes of link tags  |
| math | math |
| handleImageClick | handle the click events when the user clicks an image |
| pasteImage | uploading the pasted image and insert it into the editor |

## customCodeBlockRenderer 

rendering the code blocks with custom vue components

**params**
```javascript
customCodeBlockRenderer({
  [lang: string]: [ RendererComponent, RendererComponentProps? ]
})
```
- `lang` language
- `RendererComponent` component for rendering
- `RendererComponentProps` props passed to the component

the following example means that:
1. rendering `art-text` codes with the ArtText component，and the `color="red"` prop will be passed to it.
1. rendering `echart` codes with the Echarts component, without any extra props.
1. codes other than `art-text` and `echarts`, will be rendered by the Card component.
```javascript
customCodeBlockRenderer({
  'art-text': [ArtText, {color: 'red'}],
  echarts: [Echarts],
  default: [Card]
})
```

```iframe
#/demo?name=/plugins/custom-code-block-renderer
```

**props passed to the rendering component by default**

| name | type | desc |
| - | - | - |
| lang | string | lang |
| code | string | code |
| lineBegin | number | number of the start line |
| lineEnd | number |  number of the end line |

## affixToolbar

affix the toolbar on the screen

**params**
```javascript
affixToolbar({
  /**
   * The relative element selector string. The relative element is
   * the element you want your affix to be related to, as it will
   * not be related to the window. The element will be affixed when
   * the window reaches the relative element.
   *
   * @example '#contact'
   * @type {String} 
   */
  scrollContainerSelector: null,

  /**
   * This is the offset margin between the top/bottom of the window
   * before the affix is applied.
   *
   * @type {Object} 
   */
  offset: {
    top: 40,
    bottom: 40
  },

  /**
   * Checks if the plugin should be enabled/disabled based
   * on true/false, good for mobile when you need to disable it.
   *
   * @type {Boolean} 
   */
  enabled: true,
  
  /**
   * Sets if the affix should be 'scrollable' when it is
   * taller than the viewport or if it should always be
   * affixed to the top until it reaches the end of the
   * relative element. Check the demo to understand better.
   *
   * @type {Boolean} 
   */
  scrollAffix: false,
})
```

this plugin is based on the `vue-affix`, and it params is the same with the props of `vue-affix`

**see also**
[vue-affix](https://www.npmjs.com/package/vue-affix)

## overlayScrollbars

scrollbars based on `overlayscrollbars-vue`

**params**
```javascript
affixToolbar({
  editor?: false | OverlayScrollbarsProps,
  viewer?: false | OverlayScrollbarsProps,
  toc?: false | OverlayScrollbarsProps,
  codeBlock?: false | OverlayScrollbarsProps
})
```
- false means no scrollbar
- OverlayScrollbarsProps means the props passed to `overlayscrollbars-vue`

OverlayScrollbarsProps
```javascript
{
  element: "span",
  options: {
    {
      scrollbars: { autoHide: 'scroll' }
    }
  },
  events: {
    { scroll: () => { /* ... */ } }
  },
  defer: boolean
}
```

**see also**
[overlayscrollbars-vue](https://www.npmjs.com/package/overlayscrollbars-vue)
[overlayscrollbars](https://www.npmjs.com/package/overlayscrollbars)

## autoHeight

make its height fit to its content

```iframe
#/demo?name=/plugins/auto-height
```

## highlightCodeBlocksInEditableArea

highlight the code blocks in the editalbe area.

**params**
\-

## syncScrollbars

sync the scrollbars.

**params**
```javascript
syncScrollbars(way: 'editor-to-viewer' | 'viewer-to-editor' | 'two-way')
```
- `editor-to-viewer` sync the scrollbars from the editable area to the preview area.
- `viewer-to-editor` sync the scrollbars from the preview area to the editable area.
- `two-way` two-way sync

## langCN

Chinese language resource.

**params**
\-

## langEn

English language resource.

**params**
\-

## lang

custom language resource.

**params**
```javascript
lang(messageMap: MessageMap)

interface MessageMap {
  [key: string]: string | MessageMap
}
```

example
```javascript
lang({
  zh_CN: {
    codeBlock: {
      copy: '复制'
    }
  }
})
```

## markdownItPlugins

the preview area is rendered by `markdown-it`.
this plugin helps you load `markdown-it` plugins.

**params**
```javascript
markdownItPlugins([
  [MarkdownItPlugin, MarkdownItPluginProps?]
])
```
**see also**
[markdown-it-sup](https://www.npms.com/packages/markdown-it-sup)
[markdown-it-sub](https://www.npms.com/packages/markdown-it-sub)
[markdown-it-ins](https://www.npms.com/packages/markdown-it-ins)
[markdown-it-br](https://www.npms.com/packages/markdown-it-br)
[markdown-it-mark](https://www.npms.com/packages/markdown-it-mark)
[markdown-it-deflist](https://www.npms.com/packages/markdown-it-deflist)
[markdown-it-taskLists](https://www.npms.com/packages/markdown-it-task-lists)
[markdown-it-footnote](https://www.npms.com/packages/markdown-it-footnote)
[markdown-it-alert](https://www.npms.com/packages/markdown-it-alert)
[more markdown-it plugins](https://www.npmjs.com/search?q=markdown-it)

## markdownItOptions

the preview area is rendered by `markdown-it`.
this plugin helps you set the options of `markdown-it`.

**params**
```javascript
markdownItOptions({
  // Enable HTML tags in source
  html:         false,

  // Use '/' to close single tags (<br />).
  // This is only for full CommonMark compatibility.
  xhtmlOut:     false,

  // Convert '\n' in paragraphs into <br>
  breaks:       false,

  // CSS language prefix for fenced blocks. Can be
  // useful for external highlighters.
  langPrefix:   'language-',

  // Autoconvert URL-like text to links
  linkify:      false,

  // Enable some language-neutral replacement + quotes beautification
  // For the full list of replacements, see https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/replacements.mjs
  typographer:  false,

  // Double + single quotes replacement pairs, when typographer enabled,
  // and smartquotes on. Could be either a String or an Array.
  //
  // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
  // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
  quotes: '“”‘’',

  // Highlighter function. Should return escaped HTML,
  // or '' if the source string is not changed and should be escaped externally.
  // If result starts with <pre... internal wrapper is skipped.
  highlight: function (/*str, lang*/) { return ''; }
})
```

**see also**
[markdown-it](https://www.npmjs.com/package/markdown-it)

## codemirrorExt

the editable area is based on `codemirror`.
this plugin helps you load `codemirror` extensions.

**params**
```javascript
codemirror(ext: CmExtension)
```
- ext: the CodeMirror extensions

## defaultEditorTheme

default appearance of the editable area.

**params**
\-

## defaultViewerTheme

default appearance of the preview area.

**params**
\-

## injectCss

inject css, which may includes the following selectors:
- `&root`
- `&header`
- `&body`
- `&editor`
- `&viewer`
- `&toc`
- `&editor-container`
- `&viewer-container`
- `&toc-container`

```html
<div class="structure">
  <div class="col" data-caption="&root">
    <div class="row" data-caption="&header">
    </div>
    <div class="row" data-caption="&body">
      <div class="col" data-caption="&editor-container">
        <div class="vellipsis"></div>
        <div class="cell" data-caption="&editor" style="height: 300px;"></div>
      </div>
      <div class="col" data-caption="&viewer-container">
        <div class="vellipsis"></div>
        <div class="cell" data-caption="&viewer" style="height: 300px;"></div>
      </div>
      <div class="col" data-caption="&toc-container">
        <div class="vellipsis"></div>
        <div class="cell" data-caption="&toc" style="height: 300px;"></div>
      </div>
    </div>
  </div>
</div>
```

## customLinkAttrs

custom the attributes of link tags.

**params**
```javascript
customLinkAttrs((oldAttrMap: MditTokenAttrMap) => MditTokenAttrMap)
```

**example**
```javascript
customLinkAttrs((attrs) => {
  attrs.target = '_blank'
  attrs.onclick = `javascript:alert('you are jumping to ${attrs.href}')`

  return attrs
})
```

## math

rendering math between `$...$` and `$$...$$`.

**params**
```javascript
math(options?: Object)
```

this plugin is based on `markdown-it-math`. `options` is the params passed to `markdown-it-math`.

**see also**
[markdown-it-math](https://www.npmjs.com/package/markdown-it-math)

## handleImageClick

handle the click events when the user clicks the images.

**params**
```javascript
handleImageClick((images: ImageData[], idx: number, event: Event) => void)
```

## pasteImage

upload the pasted image and insert it into the editor.

**params**
```javascript
type FnUpload = (file: File) => string | Promise<string>
pasteImage(fnUpload: FnUpload)
```

# Code block Rendering

it means rendering the codes using the `CustomCodeBlockRenderer` plugin.

## CodeMirrorRenderer

rendering the codes using `codemirror`.

**attributes**
| name | default | desc |
| - | - | - |
| extensions | [] | extensions of `codemirror` |

## MermaidRenderer

rendering the codes using `mermaid`.

**attributes**
\-

## KatexRenderer

rendering the codes using `katex`.

**attributes**
\-