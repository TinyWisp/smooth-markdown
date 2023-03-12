import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import CoreEditor from '../CoreEditor.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(CoreEditor, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
