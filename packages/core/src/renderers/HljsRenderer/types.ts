import type { LanguageFn } from 'highlight.js'

export type FnGetLanguage = (lang: string) => (Promise<LanguageFn> | LanguageFn)