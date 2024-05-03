# 说明

smooth-markdown是一个基于vue.js 3的markdown编辑器。
它有着强大的扩展机制，不论是markdown语法，编辑操作，还是外观上，都非常易于扩展。

# 演示

```iframe
/demo?name=/playground
```


# 快速开始



# 插件

## 插件列表

| 插件    | 说明 |
| --------- | ----------- |
| customCodeBlockRenderer | 自定义代码块渲染 |
| affixToolbar | 固定工具栏到屏幕顶部 |


## customCodeBlockRenderer 

### 简介
自定义代码块渲染。

### 插件
`customCodeBlockRenderer`

### 参数
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
1. art-text, echarts之外的代码块，则使用默认组件HelloWorld进行渲染。
```javascript
customCodeBlockRenderer({
  'art-text': [ArtText, {color: 'red'}],
  echarts: [Echarts],
  default: [HelloWorld]
})
```

```iframe
/demo?name=/plugins/custom-code-block-renderer
```

## affixToolbar

### 简介
固定顶部工具栏

### 参数
```javascript
affixToolbar({
  /**
   * The relative element selector string. The relative element is
   * the element you want your affix to be related to, as it will
   * not be related to the window. The element will be affixed when
   * the window reaches the relative element.
   * 
   * 相对元素的选择器。相对元素指你要固定在哪个元素上，默认情况下是window
   * 
   * @example '#contact'
   * @type {String} 
   */
  relativeElementSelector: {
    type: String,
    required: true
  },
  
  /**
   * This is the offset margin between the top/bottom of the window
   * before the affix is applied.
   *
   * @type {Object} 
   */
  offset: {
    type: Object,
    default: () => {
      return {
        top: 40,
        bottom: 40
      }
    }
  },
  
  /**
   * Checks if the plugin should be enabled/disabled based
   * on true/false, good for mobile when you need to disable it.
   *
   * @type {Boolean} 
   */
  enabled: {
    type: Boolean,
    default: true
  },
  
  /**
   * Sets if the affix should be 'scrollable' when it is
   * taller than the viewport or if it should always be
   * affixed to the top until it reaches the end of the
   * relative element. Check the demo to understand better.
   *
   * @type {Boolean} 
   */
  scrollAffix: {
    type: Boolean,
    default: false
  },
  
  /**
   * Sets the scrollable container to use in scroll position
   * calculations. If not set, the window object will be
   * used by default.
   *
   * @type {Object} 
   */
  scrollContainerSelector: {
    type: String,
    default: null,
  }
})
```
此插件基于第三方组件`vue-affix`
参数与`vue-affix`的参数相同，[点击查看vue-affix的参数](https://www.npmjs.com/package/vue-affix)

### 另请参考
[vue-affix](https://www.npmjs.com/package/vue-affix)

## overlayScrollbars

### 简介
基于OverlayScrollbars的滚动条

### 参数
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

### 另请参阅
[overlayscrollbars-vue](https://www.npmjs.com/package/overlayscrollbars-vue)
[overlayscrollbars](https://www.npmjs.com/package/overlayscrollbars)

```iframe
/demo?name=/plugins/overlay-scrollbars
```

## autoHeight

### 简介
使其自适应其内容高度，不出现滚动条。

```iframe
/demo?name=/plugins/auto-height
```

## highlightCodeBlocksInEditableArea

### 简介
编辑区域代码高亮

### 参数
无

```iframe
/demo?name=/plugins/highlight-code-block-in-editable-area
```
## syncScrollbars

### 简介
同步滚动条

### 参数
```javascript
syncScrollbars(way: 'editor-to-viewer' | 'viewer-to-editor' | 'two-way')
```

## langCN

### 简介
中文语言包

### 参数
无

## langEn

### 简介
英文语言包

### 参数
无

## lang

### 简介
自定义语言包

### 参数
```javascript
lang({

})
```

## markdownItPlugins

### 简介
预览区域由markdown-it渲染，此插件用于加载markdown-it的插件

### 参数
```javascript
markdownItPlugins([
  [MarkdownItPlugin, MarkdownItPluginProps?]
])
```
### 另请参考
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

### 简介
预览区域由markdown-it渲染，此插件用于设置markdown-it的选项

### 参数
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
### 另请参考
[markdown-it](https://www.npmjs.com/package/markdown-it)

## codemirrorExt

### 简介
编辑区域由codemirror实现，此插件用于加载codemirror的扩展




## load a markdown-it plugin

## load a codemirror extension

# renders

## hljs

```iframe
/demo?name=/renders/hljs
```
# 案例

## CodeMirror主题

```iframe
/demo?name=/examples/codemirror-theme
```

### 需要更多的主题，可查看下面的网址
https://uiwjs.github.io/react-codemirror/#/theme/home
https://github.com/craftzdog/cm6-themes

## markdown渲染主题

```iframe
/demo?name=/examples/view-theme
```

# 预定义

# API

## 属性

| 属性名 | 类型 | 说明 | 默认值 | 备注 |
| - | - | - | - | - |
| locale | string | 语言 | en | 和加载的语言包有关 |
| mode | string | 模式 | editor\|viewer | editor,viewer,toc'以\|相连，如'editor\|viewer  |
| plugins | Array | 插件列表 | [] | - |
| readonly | boolean | 是否只读 | false | - |

## 方法

| 方法 | 说明 | 备注 |
| - | - | - |
| getContext(): Context | 获取上下文 | - |
| setContext(key, val) <br> setContext(key, subkey, val) | 设置上下文 | - |

## 插槽

| 插槽名 | 说明 |
| toolbar | 工具栏 |
| toc | 目录 |

## 上下文

- Context
  - doc: Ref<string>
  - mode: Ref<string>
  - props: SmoothMarkdownProps
  - lang: Lang
    - t(path: string, varMap: VariableMap = {})
    - print()
    - setLocale(locale: string)
    - setFallbackLocale(locale: string)
  - eventBus: EventBus
    - on(src: string, event: string, func: Function)
    - off(src: string, event: string, func: Function)
    - fire(src: string, event: string, detail: any)
    - beginDebug()
    - endDebug()
  - pluginManager: PluginManager
    - registerPlugin(plugin: Plugin)
    - registerPlugins(plugins: Plugin[])
    - unregisterPlugin(name: string)
  - root
    - el: HTMLElement | null
    - selector: string
    - style: {[key: string]: string}
  - viewer
    - el: HTMLElement | null
    - selector: string
    - containerEl: HTMLElement | null
    - containerSelector: string
    - scrollEl: Ref<HTMLElement | null>
  - editor
    - el: HTMLElement | null
    - selector: string
    - containerEl: HTMLElement | null
    - containerSelector: string
    - scrollEl: Ref<HTMLElement | null>
  - toc
    - el: HTMLElement | null
    - selector: string
    - containerEl: HTMLElement | null
    - containerSelector: string
    - scrollEl: Ref<HTMLElement | null>
  - header
    - el: HTMLElement | null
    - selector: string
  - body
    - el: HTMLElement | null
    - selector: string
  - others



## references

## context

## events

## plugins