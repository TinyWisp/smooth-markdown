import { createApp } from 'vue'
import App from './App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

import { createI18n } from 'vue-i18n'
import messages from './langs/messages'

const i18n = createI18n({
  legacy: false,
  locale: 'zh_CN', 
  fallbackLocale: 'zh_CN', 
  messages, 
})

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})

createApp(App).use(vuetify).use(i18n).mount('#app')
