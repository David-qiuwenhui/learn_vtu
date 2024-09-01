import { mount } from '@vue/test-utils'
import Bar from '@/components/Bar.vue'
import flushPromises from 'flush-promises'

// mock 重写axios的属性方法
jest.mock('axios', () => {
  return {
    get() {
      return new Promise((resolve) => {
        resolve({ data: 'new data' })
      })
    }
  }
})

describe('Bar.vue', () => {
  it('get users data', async () => {
    const wrapper = mount(Bar)
    await wrapper.get('#getUsersBtn').trigger('click')

    // 确保所有已解析的 Promise 都被执行
    await flushPromises()
    expect(wrapper.text()).toContain('new data')
  })
})
