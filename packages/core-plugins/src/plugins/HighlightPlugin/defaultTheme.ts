import { EditorView } from '@codemirror/view'
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language'
import { tags } from "@lezer/highlight";

const theme = {
    ".cm-scroller": {
        "overflow": "auto"
    },
    ".cm-wrap": {
        "height": "100%"
    },
    "&": {
        "backgroundColor": "#1e1e1e",
        "color": "#dcdcdc"
    },
    ".cm-content": {
        "caretColor": "#aeafad"
    },
    "&.cm-focused .cm-cursor": {
        "borderLeftColor": "#aeafad"
    },
    "&.cm-focused .cm-selectionBackground, ::selection": {
        "backgroundColor": "#264f78"
    },
    ".cm-activeLine": {
        "backgroundColor": "#264f78"
    },
    ".cm-searchMatch": {
        "backgroundColor": "#72a1ff"
    },
    ".cm-gutters": {
        "backgroundColor": "#1e1e1e",
        "color": "#858585"
    }
}
const highlightStyles = HighlightStyle.define([   
  {
    tag: [tags.keyword],
    color: "#c586c0"
  },

  {
    tag: [tags.function(tags.variableName)],
    color: "#dadaa8"
  },

  {
    tag: [tags.definitionKeyword],
    color: '#569cd6'
  },

  {
    tag: [tags.variableName],
    color: "#9cdcfe"
  },

  {
    tag: [tags.propertyName],
    color: "#9cdcfe"
  },

  {
    tag: [tags.number],
    color: "#b5cea8"
  },

  {
    tag: [tags.string],
    color: "#ce9178"
  },

  {
    tag: [tags.bool],
    color: "#569cd6"
  },

  {
    tag: [tags.brace],
    color: "#da70d6"
  },

  {
    tag: [tags.annotation],
    color: "#57a64a",
  },

  {
    tag: [tags.typeName],
    color: "#4ec9b0"
  },

  {
    tag: [tags.className],
    color: "#4ec9b0"
  },

  {
    tag: [tags.operator, tags.operatorKeyword],
    color: "#cccccc"
  },

  {
    tag: [tags.squareBracket],
    color: "#ffd700"
  },

  {
    tag: [tags.angleBracket],
    color: "#179cfa"
  },

  {
    tag: [tags.comment, tags.lineComment],
    color: "#57a64a",
    fontStyle: "italic"
  },

  {
    tag: [tags.blockComment],
    color: "#57a64a"
  },

  {
    tag: [tags.className],
    color: "#d7ba7d"
  },
])

export const defaultTheme = [
    EditorView.theme(theme),
    syntaxHighlighting(highlightStyles)
]
