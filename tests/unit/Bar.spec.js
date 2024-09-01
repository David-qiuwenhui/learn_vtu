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

describe('Bar.vue async', () => {
  it('get users data', async () => {
    const wrapper = mount(Bar)
    await wrapper.get('#getUsersBtn').trigger('click')

    // 确保所有已解析的 Promise 都被执行
    await flushPromises()
    expect(wrapper.text()).toContain('new data')
  })
})

describe('Bar.vue condition render', () => {
  it('box1 render', () => {
    const wrapper = mount(Bar)
    const targetWrapper = wrapper.find('#box1')

    expect(targetWrapper.exists()).toBe(false)
  })

  it('box1 render', () => {
    const wrapper = mount(Bar, {
      data() {
        return {
          boxOneRender: true
        }
      }
    })
    const targetWrapper = wrapper.get('#box1')

    expect(targetWrapper.exists()).toBe(true)
    expect(targetWrapper.text()).toContain('box1')
  })

  it('box2 not visible', () => {
    const wrapper = mount(Bar)
    const targetWrapper = wrapper.get('#box2')

    expect(targetWrapper.exists()).toBe(true)
    expect(targetWrapper.isVisible()).toBe(false)
  })

  it('box2 visible', () => {
    const wrapper = mount(Bar, {
      data() {
        return {
          boxTwoVisible: true
        }
      }
    })
    const targetWrapper = wrapper.get('#box2')

    expect(targetWrapper.exists()).toBe(true)
    expect(targetWrapper.isVisible()).toBe(true)
  })
})

describe('Bar.vue emitted', () => {
  it('increment emitted', () => {
    const wrapper = mount(Bar)
    const targetWrapper = wrapper.get('#incrementBtn')
    expect(targetWrapper.exists()).toBe(true)

    targetWrapper.trigger('click')
    targetWrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('increment')
    expect(wrapper.emitted('increment')).toBeTruthy()
    expect(wrapper.emitted('increment')[0]).toEqual([0])
    expect(wrapper.emitted('increment')[1]).toEqual([1])
  })
})
