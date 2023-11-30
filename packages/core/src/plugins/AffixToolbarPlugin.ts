import toolbarWrapper from "./ToolbarWrapperPlugin"
import HocElementAffix from '@hoc-element/affix/src/components/ScrollAffix/index.vue'

function affixToolbar(props: {[key: string]: any}) {
  return toolbarWrapper([HocElementAffix, props])
}

export default affixToolbar