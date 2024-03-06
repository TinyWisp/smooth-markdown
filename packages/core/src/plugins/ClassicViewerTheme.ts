import type { Plugin } from '../core/types'

const css = `
    &viewer {
      padding: 16px 23px;
      text-wrap: wrap;
      word-break: break-word;
      font-size: 16px;
      line-height: 1.5;
      --viewer-primary-color: teal;
    }
    &viewer table {
      border-spacing: 0;
      width: auto;
      overflow: auto;
      word-break: normal;
      word-break: keep-all;
      margin: 1.75em 0;
      border: 1px solid lightgray;
      border-radius: 3px;
      border-collapse: separate;
      overflow: hidden;
    }

    &viewer table th {
      background-color: #f6f8fa;
      color: var(--viewer-primary-color);
      font-weight: bold;
      text-align: left;
    }

    &viewer td, th {
      padding: 0.5em 1em;
      border: 0;
      height: 2em;
      min-width: 4em;
    }

    &viewer tr:nth-child(2n) {
      background-color: #f6f8fa;
    }

    &viewer tr td:not(:last-child) {
      border-right: 1px solid lightgray;
    }

    &viewer tr th:not(:last-child) {
      border-right: 1px solid lightgray;
    }

    &viewer tr:hover td {
      background-color: #eaf3f3;
    }

    &viewer img {
      max-width: 100%;
    }

    &viewer img.emoji {
      display: inline;
      border: 0;
      width: 1em;
      height: 1em;
      padding: 0;
      margin: 0;
    }

    &viewer a {
      color: var(--viewer-primary-color);
      font-weight: 600;
      text-decoration: none;
    }

    &viewer a:hover {
      text-decoration: underline;
    }

    &viewer a > code {
      color: #476582;
      text-decoration: none;
    }

    &viewer p > code {
      color: saddlebrown;
      background-color: #f1f1f1;
      padding: 0 0.5em;
      border-radius: 4px;
    }

    &viewer p {
      line-height: 1.6em;
      letter-spacing: 0.2px;
    }

    &viewer strong {
      color: saddlebrown;
      font-weight: bold;
    }

    &viewer mark {
      padding: 0.15em 0.5em;
    }

    &viewer blockquote {
      margin: 2em 0;
      padding-left: 20px;
      border-left: 4px solid var(--viewer-primary-color);
      background-color: #f3f5f7;
      white-space: nowrap;
      color: #57606a;
    }

    &viewer ul {
      margin: 0.5em 0;
      padding-left: 2em;
      list-style: disc;
    }

    &viewer li + li {
      margin-top: 0.25em;
    }

    &viewer ul.contains-task-list {
      list-style: none;
    }
    &viewer .task-list-item-checkbox {
      vertical-align: middle;
      display: inline-block;
    }

    &viewer ol {
      padding-left: 1.25em;
    }

    &viewer h1 {
      margin: 0 0 3rem;
      font-size: 2.4em;
      line-height: 1.4em;
      font-weight: 600;
      padding-bottom: 0.7em;
      border-bottom: 1px solid #d8dee4;
      width: 100%;
    }

    &viewer h2 {
      font-size: 1.5em;
      font-weight: 600;
      margin: 2.8em 0 0.8em;
      padding-bottom: 0.7em;
      border-bottom: 1px solid #d8dee4;
      width: 100%;
    }

    &viewer h3 {
      font-size: 1.2em;
      font-weight: 600;
      margin: 3rem 0 1.25rem 0;
    }

    &viewer h4 {
      font-size: 1em;
      margin: 1em 0;
    }

    &viewer h5 {
      font-size: 0.85em;
      margin: 1em 0;
    }

    &viewer h6 {
      font-size: 0.7em;
      margin: 1em 0;
    }

    &viewer hr {
      margin: 1.5em 0;
      width: 100%;
    }

    &viewer .nothing {
      display: none;
    }

    &viewer p, ul, ol, summary {
      margin-bottom: 1.2em;
    }

    &viewer blockquote > p {
      text-wrap: wrap;
      margin-bottom: 0;
    }

    &viewer pre {
      display: block;
      width: 100%;
      height: auto;
      position: relative;
    }
  `
function classicViewerTheme(): Plugin {
  return {
    name: 'core-plugin-classic-viewer-theme',
    css
  }
}

export default classicViewerTheme