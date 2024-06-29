import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { VBtn } from 'vuetify/components/VBtn'
import { VCard, VCardActions, VCardText, VCardTitle, VCardSubtitle, VCardItem } from 'vuetify/components/VCard'
import { VToolbar } from 'vuetify/components/VToolbar'
import { VTooltip } from 'vuetify/components/VTooltip'
import { VDialog } from 'vuetify/components/VDialog'
import { VDivider } from 'vuetify/components/VDivider'
import { VSpacer, VRow, VCol, VContainer } from 'vuetify/components/VGrid'
import { VIcon } from 'vuetify/components/VIcon'
import { VMenu } from 'vuetify/components/VMenu'
import { VForm } from 'vuetify/components/VForm'
import { VTextField } from 'vuetify/components/VTextField'
import { VSelect } from 'vuetify/components/VSelect'
import { VSwitch } from 'vuetify/components/VSwitch'

import { ElButton, ElForm, ElFormItem, ElDialog, ElInput, ElSelect, ElDropdownMenu, ElDropdown, ElDropdownItem, ElTooltip, ElDivider, ElPopover } from 'element-plus'

import 'element-plus/dist/index.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  components: {
    VBtn,
    VCard,
    VCardActions,
    VCardText,
    VCardTitle,
    VCardSubtitle,
    VCardItem,
    VToolbar,
    VTooltip,
    VDialog,
    VDivider,
    VSpacer,
    VRow,
    VCol,
    VContainer,
    VIcon,
    VMenu,
    VForm,
    VTextField,
    VSelect,
    VSwitch
  },
  theme: {
    defaultTheme: 'light'
  }
})

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.component('ElButton', ElButton)
app.component('ElForm', ElForm)
app.component('ElFormItem', ElFormItem)
app.component('ElDialog', ElDialog)
app.component('ElSelect', ElSelect)
app.component('ElInput', ElInput)
app.component('ElTooltip', ElTooltip)
app.component('ElDivider', ElDivider)
app.component('ElPopover', ElPopover)
app.component('ElDropdown', ElDropdown)
app.component('ElDropdownItem', ElDropdownItem)
app.component('ElDropdownMenu', ElDropdownMenu)
app.mount('#app')
