import { mount } from '@vue/test-utils'
import Upload from '@/components/Upload.vue'

describe('Upload', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Upload)
    expect(wrapper.vm).toBeTruthy()
  })
})
