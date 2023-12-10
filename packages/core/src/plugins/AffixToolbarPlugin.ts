import toolbarWrapper from "./ToolbarWrapperPlugin"
import VueAffix from 'vue-affix/src/affix.vue'

function affixToolbar(props: {[key: string]: any}) {
  return toolbarWrapper([VueAffix, props])
}

export default affixToolbar