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


## 自定义代码块渲染

##### 简介
自定义代码块渲染。

##### 插件
`customCodeBlockRenderer`

##### 参数
如下所示，表示:
1. 使用ArtText组件，渲染art-text代码块, 并且向组件传入参数color="red"。
1. 使用Echarts组件，渲染echarts代码块，无额外参数传入。 
1. art-text, echarts之外的代码块，则使用默认组件HelloWorld进行渲染。
```javascript
{
  'art-text': [ArtText, {color: 'red'}],
  echarts: [Echarts],
  default: [HelloWorld]
}
```

##### plugins 

```iframe
/demo?name=/plugins/custom-code-block-renderer
```

## affix toolbar

```iframe
/demo?name=/plugins/affix-toolbar
```

## perfect scrollbar

```iframe
/demo?name=/plugins/perfect-scrollbar
```

## overlay scrollbars

```iframe
/demo?name=/plugins/overlay-scrollbars
```

## auto height

```iframe
/demo?name=/plugins/auto-height
```
## highlight code blocks in editable area

```iframe
/demo?name=/plugins/highlight-code-block-in-editable-area
```
## sync scrollbar

```iframe
/demo?name=/plugins/sync-scrollbar
```

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

##### 需要更多的主题，可查看下面的网址
https://uiwjs.github.io/react-codemirror/#/theme/home
https://github.com/craftzdog/cm6-themes

## markdown渲染主题

```iframe
/demo?name=/examples/view-theme
```

# 预定义

# API

## references

## context

## events

## plugins