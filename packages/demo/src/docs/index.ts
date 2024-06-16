import sampleZhCN from './sample.zh_CN.md?raw'
import sampleEn from './sample.en.md?raw'
import manualZhCN from './manual.zh_CN.md?raw'
import manualEn from './manual.en.md?raw'
import playgroundEn from './playground.en'
import playgroundZhCN from './playground.zh_CN'
import { Lang } from '@smooth-markdown/core'

const sampleMap: {[key: string]: string} = {
  zh_CN: sampleZhCN,
  en: sampleEn
}
const manualMap: {[key: string]: string} = {
  zh_CN: manualZhCN,
  en: manualEn
}

const query = new URLSearchParams(window.location.search)
const lang = query.get('lang') ?? 'en'
const sample = lang && sampleMap[lang] ? sampleMap[lang] : sampleEn
const manual = lang && manualMap[lang] ? manualMap[lang] : manualEn

const langPack = new Lang()
langPack.setLocale(lang)
langPack.merge({en: playgroundEn, zh_CN: playgroundZhCN})
const { t } = langPack

export { sample, manual, t }