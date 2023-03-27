import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import CoreEditor from '../CoreEditor.vue'

describe('HelloWorld', () => {
  it('modelValue', () => {
    const doc = 'hello world'
    const wrapper = mount(CoreEditor, { props: { modelValue: doc } })
    expect(wrapper.text()).toContain(doc)
  })

  it('insertOrReplace', () => {
    const doc = 'hello world'
    const text = 'god'
    const wrapper = mount(CoreEditor, { props: { modelValue: doc } })
    wrapper.vm.insertOrReplace(text)
    expect(wrapper.emitted()['update:modelValue']).toEqual([[text + doc]])
  })
})
