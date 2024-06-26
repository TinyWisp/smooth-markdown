Headings

# A first-level heading
## A second-level heading
### A third-level heading
#### A forth-level heading
##### A fifth-level heading
###### A sixth-level heading

## Paragraphs

There was no possibility of taking a walk that day. We had been wandering, indeed, in the leafless shrubbery an hour in the morning; but since dinner (Mrs. Reed, when there was no company, dined early) the cold winter wind had brought with it clouds so sombre, and a rain so penetrating, that further out-door exercise was now out of the question.

## Styling Text

| Style | Syntax | Example | Output |
| --- | --- | --- | --- |
| Bold | `** **` or `__ __`| `**This is bold text**` | **This is bold text** |
| Italic | `* *` or `_ _`     | `_This text is italicized_` | _This text is italicized_ |
| Strikethrough | `~~ ~~` | `~~This was mistaken text~~` | ~~This was mistaken text~~ |
| Bold and nested italic | `** **` and `_ _` | `**This text is _extremely_ important**` | **This text is _extremely_ important** |
| All bold and italic | `*** ***` | `***All this text is important***` | ***All this text is important*** |
| Subscript | `~ ~` | `This is a ~subscript~ text` | This is a ~subscript~ text |
| Superscript | `^ ^` | `This is a ^superscript^ text` | This is a ^superscript^ text |


## Links

[github](https://www.github.com)

## Images

![ZhongLi](./img/zhongli.jpg)
![Furina](./img/furina.jpg)
![Tighnari](./img/tighnari.jpg)

## Quoting text

> There was no possibility of taking a walk that day. We had been wandering, indeed, in the leafless shrubbery an hour in the morning; but since dinner (Mrs. Reed, when there was no company, dined early) the cold winter wind had brought with it clouds so sombre, and a rain so penetrating, that further out-door exercise was now out of the question.


## Horizontal Rules

***

---

_________________

## Footnotes

Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.
[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.

## Unordered Lists

- George Washington
- John Adams
- Thomas Jefferson


## Ordered Lists

1. James Madison
1. James Monroe
1. John Quincy Adams

## Nested Lists

1. First list item
   - First nested list item
     - Second nested list item

## Task Lists
     
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

## Fenced Code Blocks

```javascript
import { ref } from 'vue'
import { SmoothMarkdown } from '@smooth-markdown/core'
import { affixToolbar } from '@smooth-markdown/core/plugins'
import VuetifyToolbar from '@smooth-markdown/vuetify-toolbar'

const editor = ref(null)
const doc = ref('')
const plugins = [affixToolbar({
  offset: {
    top: 0,
    bottom: 0
  },
  style: {
    width: '100%'
  }
})]
```

## Inline Code

` npm install vue `

## Math Equation

Inline math equation: $a+b$

$$
\displaystyle \left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)
$$

```math
\displaystyle \left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)
```

## Mermaid

```mermaid
flowchart TD
    A[Start] --> B{Is it?}
    B -->|Yes| C[OK]
    C --> D[Rethink]
    D --> B
    B ---->|No| E[End]
```
