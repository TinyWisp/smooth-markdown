# 快速开始

smooth-markdown是一个基于vue.js 3的markdown编辑器。
它有着强大的扩展机制，不论是markdown语法，编辑操作，还是外观上，都非常易于扩展。

**演示**

[点此查看演示](/playground)

**使用基于vuetify的工具栏**

```iframe
/demo?name=/getting-started/vuetify-toolbar
```

**使用基于element-plus的工具栏**

```iframe
/demo?name=/getting-started/element-toolbar
```

# 组件

## smooth-markdown

**属性**

| 属性名 | 类型 | 说明 | 默认值 | 备注 |
| - | - | - | - | - |
| locale | string | 语言 | en | 和加载的语言包有关 |
| mode | string | 模式 | editor\|viewer | editor,viewer,toc以\|相连，如'editor\|viewer  |
| plugins | Array | 插件列表 | [] | - |
| readonly | boolean | 是否只读 | false | - |

**方法**

| 方法 | 说明 | 备注 |
| - | - | - |
| getContext(): Context | 获取上下文 | - |
| setContext(key, val) <br> setContext(key, subkey, val) | 设置上下文 | - |

**插槽**

| 插槽名 | 说明 |
| - | - |
| toolbar | 工具栏 |
| toc | 目录 |

## simple-toc

**属性**
无

**方法**
无

## vuetify-toolbar

基于vuetify 3的工具栏

**属性**
| 属性名 | 类型 | 说明 | 默认值 | 备注 |
| - | - | - | - | - |
| items | (string \| Component \| VNode \| () => VNode \| ToolbarItem)[] | 工具栏项列表 | [...] |  |

**items的元素说明**
- string 指工具栏预定义项的名称，如"sub", "sup"等等。
- Component 自定义组件
- VNode JSX
- () => VNode 返回JSX的函数
- ToolbarItem 自定义按钮, 如{ icon: 'mdi-format-underline', tip: 'underline', cmd: 'underline' }

**ToolbarItem 自定义按钮**
``` javascript
interface ToolbarItem {
  name?: string                      // 名称 
  icon?: string | (() => string)     // 图标
  tip?: string | (() => string)      // 提示，鼠标悬停在按钮上时显示的文字
  cmd?: string                       // 命令
  exec?: () => void                  // 自定义点击时执行的方法, 有cmd则不需要exec, 两者都有exec优先
}
```
如:
``` javascript
{
  icon: 'mdi-format-underline',
  tip: 'underline',
  cmd: 'underline'
}
```

**预定义项**

| 名称 | 说明 |
| - | - |
| divider | 分割符 |
| spacer | 空白 |
| undo | 撤消 |
| redo | 重做 |
| bold | 粗体 |
| italic | 斜体 |
| strike | 删除线 |
| underline | 下划线 |
| subscript | 下标 |
| superscript | 上标 |
| mark | 标记 |
| heading1 | 1号标题 |
| heading2 | 2号标题 |
| heading3 | 3号标题 |
| heading4 | 4号标题 |
| heading5 | 5号标题 |
| heading6 | 6号标题 |
| bulletedList | 有序列表 |
| numberedList | 无序列表 |
| quote | 引用 |
| inlineCode | 行内代码 |
| codeBlock | 代码块 |
| horizontalRule | 水平线 |
| image | 图片 |
| link | 链接 |
| table | 表格 |
| preview | 打开/关闭预览 |

**示例**
```iframe
/demo?name=/vuetify-toolbar/custom-toolbar-items
```

## element-toolbar

基于element plus的工具栏

**属性**

| 属性名 | 类型 | 说明 | 默认值 | 备注 |
| - | - | - | - | - |
| items | (string \| Component \| VNode \| () => VNode \| ToolbarItem)[] | 工具栏项列表 | [...] |  |

**items的元素**
- string 指工具栏预定义项的名称，如"sub", "sup"等等。
- Component 自定义组件
- VNode JSX
- () => VNode 返回JSX的函数
- ToolbarItem 自定义按钮, 如{ icon: 'mdi-format-underline', tip: 'underline', cmd: 'underline' }

**ToolbarItem 自定义按钮**
``` javascript
interface ToolbarItem {
  name?: string                      // 名称 
  icon?: string | (() => string)     // 图标
  tip?: string | (() => string)      // 提示，鼠标悬停在按钮上时显示的文字
  cmd?: string                       // 命令
  exec?: () => void                  // 自定义点击时执行的方法, 有cmd则不需要exec, 两者都有exec优先
}
```
如:
``` javascript
{
  icon: 'mdi-format-underline',
  tip: 'underline',
  cmd: 'underline'
}
```

**预定义项**

| 名称 | 说明 |
| - | - |
| divider | 分割符 |
| spacer | 空白 |
| undo | 撤消 |
| redo | 重做 |
| bold | 粗体 |
| italic | 斜体 |
| strike | 删除线 |
| underline | 下划线 |
| subscript | 下标 |
| superscript | 上标 |
| mark | 标记 |
| heading1 | 1号标题 |
| heading2 | 2号标题 |
| heading3 | 3号标题 |
| heading4 | 4号标题 |
| heading5 | 5号标题 |
| heading6 | 6号标题 |
| bulletedList | 有序列表 |
| numberedList | 无序列表 |
| quote | 引用 |
| inlineCode | 行内代码 |
| codeBlock | 代码块 |
| horizontalRule | 水平线 |
| image | 图片 |
| link | 链接 |
| table | 表格 |
| preview | 打开/关闭预览 |

**示例**
```iframe
/demo?name=/element-toolbar/custom-toolbar-items
```

# 上下文

**获取/设置上下文**

组件方法
- getContext()
- setContext(key: string, val: any)
- setContext(key: string, subkey: string, val: any)

在slot中，可以使用inject, 如
``` javascript
  import type { FnGetContext, FnSetContext } from '@smooth-markdown/core'

  const getContext = inject<FnGetContext>('getContext')
  const getContext = inject<FnSetContext>('setContext')
```

**Context对像详情**

| 对象 | 属性名/方法名 | 类型 | 说明 | 
| - | - | - | - |
| | doc | Ref<string> | 内容 |
|   | mode | Ref<string> | 模式, 如`editor|viewer`, 值为editor, viewer, toc三个值的排列组合，以\|分隔 |
|   | props | SmoothMarkdownProps | 传递给组件的参数 |
| lang <br> 语言 | t |  Function(path: string, varMap: VariableMap = {}) | 翻译, path:消息路径, varMap: 变量映射 |
|   | print | Function() | 打印所有消息 |
|   | setLocale | Function(locale: string) | 设置当前语言 |
|   | setFallbackLocale | Function(locale: string) | 设置回退语言，当某条消息找不到所需的翻译数据时，则使用回退语言 |
| eventBus <br> 事件巴士 | on | Function(src: string, event: string, func: Function) | 绑定事件处理函数 |
|   | off | Function(src: string, event: string, func: Function) | 解绑事件处理函数 |
|   | fire | Function(src: string, event: string, detail: Any) | 发布事件消息 |
|   | beginDebug | Function() | 开始打印事件信息 |
|   | endDebug | Function() | 结束打印事件信息 |
| root <br> 根元素(整个组件最外层的容器) | el | HTMLElement \| null | DOM元素 |
|   | selector | string | css选择器 |
|   | style | {[key: string]: string} | 样式 |
| viewer <br> 预览区域 | el | HTMLElement \| null | DOM元素 |
|   | selector | string | css选择器 |
|   | containerEl | HTMLElement \| null | 容器DOM元素 |
|   | containerSelector | string | 容器的css选择器 |
|   | scrollEl | Ref<HTMLElement \| null> | 滚动DOM元素 |
|   | markdownIt | MarkdownIt | markdown-it的实例 |
| editor <br> 编辑区域 | el | HTMLElement \| null | DOM元素 |
|   | selector | string | css选择器 |
|   | containerEl | HTMLElement \| null | 容器DOM元素 |
|   | containerSelector | string | 容器的css选择器 |
|   | scrollEl | Ref<HTMLElement \| null> | 滚动DOM元素 |
|   | insertOrReplace | Function(text: string, newLine: boolean = false) | 插入或替换 <br> newLine: 是否强制新行 |
|   | command | Function(cmd: string, params: Object = {}) | 向编辑器发送命令 |
|   | scrollToLine | Function(lineNum: number) | 跳转到某一行 |
|   | moveLinesTo | Function(lineBegin: number, lineEnd: number, lineDes: number) | 将行移动至 |
|   | cmEditorView | EditorView | CodeMirror实例 |
| toc <br> 目录 | el | HTMLElement \| null | DOM元素 |
|   | selector | string | css选择器 |
|   | containerEl | HTMLElement \| null | 容器DOM元素 |
|   | containerSelector | string | 容器的css选择器 |
|   | scrollEl | Ref<HTMLElement \| null> | 滚动DOM元素 |
| header <br> 头部区域(工具栏) | el | HTMLElement \| null | DOM元素 |
|   | selector | string | css选择器 |
| body <br> 正文区域(内容编辑及预览区域) | el | HTMLElement \| null | DOM元素 |
|   | selector | string | css选择器 |

**context.editor.insertOrReplace(text: string, newLine: boolean = false)**
如果处于选中文字状态，则替换。反之，则插入。
text: 待插入/替换的文本, 如果包含"<-->"，"<-->"表示插入后光标所在的位置，或者在选中时，将"<-->"替换为选中的文字
newLine: 是否新起一行再插入/替换, 默认为false

**context.editor.command(cmd: string, params: Object = {})**
向编辑器发送命令

可使用命令如下所示:

| 命令 | 说明 | 参数 |
| - | - | - |
| undo | 撤消 | |
| redo | 重做 | |
| bold | 粗体 | |
| italic | 斜体 | |
| strikethrough | 删除线 | |
| underline | 下划线 | |
| subscript | 下标 | |
| superscript | 上标 | |
| mark | 标记 | |
| heading1 | 1号标题 | |
| heading2 | 2号标题 | |
| heading3 | 3号标题 | |
| heading4 | 4号标题 | |
| heading5 | 5号标题 | |
| heading6 | 6号标题 | |
| bulletedList | 有序列表 | |
| numberedList | 无序列表 | |
| quote | 引用 | |
| inlineCode | 行内代码 | |
| codeBlock | 代码块 | |
| horizontalRule | 水平线 | |
| image | 图片 | {title: '标题', url: '地址'} |
| link | 链接 |  {title: '标题', url: '地址'} |
| table | 表格 | {row: 行数, col: 列数 } |


# 插件

## 插件列表

| 插件    | 说明 |
| --------- | ----------- |
| customCodeBlockRenderer | 自定义代码块渲染 |
| affixToolbar | 固定工具栏到屏幕顶部 |
| overlayScrollbars | 基于overlayScrollbars的滚动条 |
| autoHeight | 自适应高度，使组件的高度适应其内容 |
| highlightCodeBlocksInEditableArea | 编辑区域代码块语法高亮 |
| syncScrollbars | 滚动条同步 |
| langCN | 中文语言包 |
| langEn | 英文语言包 |
| lang | 自定义语言包 |
| markdownItPlugins | 加载markdown-it插件 |
| markdownItOptions | 设置markdown-it的选项 |
| codemirrorExt | 加载codemirror扩展 |
| defaultEditorTheme | 编辑区域默认样式 |
| defaultViewerTheme | 预览区域默认样式 |
| customLinkAttrs | 自定义链接标签的属性 |
| math | 公式的显示 |
| handleImageClick | 图片点击处理 |
| pasteImage | 粘贴图片时上传并写入 |


## customCodeBlockRenderer 


自定义代码块渲染。

**参数**
```javascript
customCodeBlockRenderer({
  [lang: string]: [ RendererComponent, RendererComponentProps? ]
})
```
- lang 语言
- RendererComponent 用于渲染的组件
- RendererComponentProps 传递给渲染组件的参数

下面的示例，表示:
1. 使用ArtText组件，渲染art-text代码块, 并且向组件传入参数color="red"。
1. 使用Echarts组件，渲染echarts代码块，无额外参数传入。 
1. art-text, echarts之外的代码块，则使用默认组件Card进行渲染。
```javascript
customCodeBlockRenderer({
  'art-text': [ArtText, {color: 'red'}],
  echarts: [Echarts],
  default: [Card]
})
```

```iframe
/demo?name=/plugins/custom-code-block-renderer
```

**默认向渲染组件传递的参数**

| 名称 | 类型 | 说明 |
| - | - | - |
| lang | string | 语言 |
| code | string | 代码 |
| lineBegin | number | 起始行 |
| lineEnd | number | 结束行 |

## affixToolbar


固定顶部工具栏

**参数**
```javascript
affixToolbar({
  /**
   * 滚动容器选择器，如果不设置，则默认为window
   */
  scrollContainerSelector: null,

  /**
   * 窗口顶部/底部之间的偏移边距
   */
  offset: {
    top: 40,
    bottom: 40
  },

  /**
   * 是否开启
   */
  enabled: true,
  
  /**
   * 是否应在其高度超过视口时为“可滚动”，或者是否应始终固定在顶部，直到达到相对元素的末尾。
   */
  scrollAffix: false,
})
```
此插件基于第三方组件`vue-affix`
参数与`vue-affix`的参数相同，[点击查看vue-affix的参数](https://www.npmjs.com/package/vue-affix)

**另请参考**
[vue-affix](https://www.npmjs.com/package/vue-affix)

## overlayScrollbars


基于OverlayScrollbars的滚动条

**参数**
```javascript
affixToolbar({
  editor?: false | OverlayScrollbarsProps,
  viewer?: false | OverlayScrollbarsProps,
  toc?: false | OverlayScrollbarsProps,
  codeBlock?: false | OverlayScrollbarsProps
})
```
- false 不使用该滚动条
- OverlayScrollbarsProps指传递给overlayscrollbars-vue组件的参数

OverlayScrollbarsProps的选项如下
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

**另请参考**
[overlayscrollbars-vue](https://www.npmjs.com/package/overlayscrollbars-vue)
[overlayscrollbars](https://www.npmjs.com/package/overlayscrollbars)

## autoHeight


使其自适应其内容高度，不出现垂直滚动条。

```iframe
/demo?name=/plugins/auto-height
```

## highlightCodeBlocksInEditableArea


编辑区域代码高亮

**参数**
无

## syncScrollbars


同步滚动条

**参数**
```javascript
syncScrollbars(way: 'editor-to-viewer' | 'viewer-to-editor' | 'two-way')
```

## langCN


中文语言包

**参数**
无

## langEn


英文语言包

**参数**
无

## lang


自定义语言包

**参数**
```javascript
lang(messageMap: MessageMap)

interface MessageMap {
  [key: string]: string | MessageMap
}
```

示例
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

预览区域由markdown-it渲染，此插件用于加载markdown-it的插件

**参数**
```javascript
markdownItPlugins([
  [MarkdownItPlugin, MarkdownItPluginProps?]
])
```
**另请参考**
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


预览区域由markdown-it渲染，此插件用于设置markdown-it的选项

**参数**
```javascript
markdownItOptions({
  // 是否允许html标签
  html:         false,

  // 使用 '/' 关闭单标签，如<br />
  // 这仅仅是为了兼容CommonMark
  xhtmlOut:     false,

  // 将段落中的 '\n' 转换为 <br>
  breaks:       false,

  // 代码块渲染时的css类名前缀
  langPrefix:   'language-',

  // 自动将像url的文本转换为链接
  linkify:      false,

  // 常见排版元素替换，如(c) => ©, (tm) => ™ 
  // 要查看完整的替换列表， 请点击 https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/replacements.mjs
  typographer:  false,

  // 当typographer选项开启时，替换双引号及单引号
  quotes: '“”‘’',

  // 代码块渲染函数，它应该返回转义过的html，或者 ''。
  // 如果返回的结果以<pre开头，则跳过内置的包装，否则会加上<pre><code xxx>...</code></pre>等包装。
  highlight: function (/*str, lang*/) { return ''; }
})
```
**另请参考**
[markdown-it](https://www.npmjs.com/package/markdown-it)

## codemirrorExt


编辑区域由codemirror实现，此插件用于加载codemirror的扩展

**参数**
```javascript
codemirror(ext: CmExtension)
```
- ext: CodeMirror的扩展

## defaultEditorTheme


编辑区域的默认样式

**参数**
无

## defaultViewerTheme


预览区域的默认样式

**参数**
无

## customLinkAttrs


自定义渲染后的链接标签的的属性

**参数**
```javascript
customLinkAttrs((oldAttrMap: MditTokenAttrMap) => MditTokenAttrMap)
```

**示例**
```javascript
customLinkAttrs((attrs) => {
  attrs.target = '_blank'
  attrs.onclick = `javascript:alert('you are jumping to ${attrs.href}')`

  return attrs
})
```

## math


使用katex渲染公式, 渲染$...$之间或$$...$$之间的公式

**参数**
```javascript
math(options?: Object)
```
此插件基于markdown-it-math, options即是传给markdown-it-math的参数

**另请参考**
[markdown-it-math](https://www.npmjs.com/package/markdown-it-math)

## handleImageClick


处理图片点击事件

**参数**
```javascript
handleImageClick((images: ImageData[], idx: number, event: Event) => void)
```

## pasteImage


粘贴图片时上传并插入

**参数**
```javascript
type FnUpload = (file: File) => string | Promise<string>
pasteImage(fnUpload: FnUpload)
```

# 代码块渲染

此处主要是指使用CustomCodeBlockRenderer插件对代码块进行渲染

## CodeMirrorRenderer

使用CodeMirror渲染代码块

**属性**
| 名称 | 默认值 | 说明 |
| - | - | - |
| extensions | [] | CodeMirror的扩展 |

## MermaidRenderer

使用mermaid渲染代码块

**属性**
无

## KatexRenderer

使用Katex渲染代码块

**属性**
无

# 自定义外观

**CodeMirror主题**

```iframe
/demo?name=/examples/codemirror-theme
```

需要更多的主题，可查看下面的网址
- https://uiwjs.github.io/react-codemirror/#/theme/home
- https://github.com/craftzdog/cm6-themes