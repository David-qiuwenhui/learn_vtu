import Foo from '@/components/Foo.vue'
import { mount } from '@vue/test-utils'

describe('Foo.vue', () => {
  test('test init count', () => {
    const wrapper = mount(Foo)
    expect(wrapper.text()).toMatch('0')
  })

  // 视图异步更新 async await写法
  test('test new count, async await', async () => {
    const wrapper = mount(Foo)
    await wrapper.get('#countBtn').trigger('click')
    expect(wrapper.text()).toMatch('1')
  })

  // 视图异步更新 done写法
  test('test new count, done', (done) => {
    const wrapper = mount(Foo)
    wrapper
      .get('#countBtn')
      .trigger('click')
      .then(() => {
        expect(wrapper.text()).toMatch('1')
        done()
      })
  })

  test('input value', async () => {
    const wrapper = mount(Foo)
    await wrapper.get('#inputEle').setValue('update')

    expect(wrapper.text()).toContain('update')
  })
})
