import sampleZhCN from '../docs/sample.zh_CN.md?raw'
import sampleEn from '../docs/sample.en.md?raw'

const map: {[key: string]: string} = {
  zh_CN: sampleZhCN,
  en: sampleEn
}
const query = new URLSearchParams(window.location.search)
const lang = query.get('lang') ?? 'en'
const sample = lang && map[lang] ? map[lang] : sampleEn

export default sample