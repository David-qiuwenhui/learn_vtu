import { mount } from '@vue/test-utils'
import Password from '@/components/Password.vue'
import flushPromises from 'flush-promises'

describe('Password.vue', () => {
  it('init ', async () => {
    const wrapper = mount(Password, {
      propsData: {
        minLength: 6
      }
    })

    const messageWrapper = wrapper.find('#errorMessage')
    expect(messageWrapper.exists()).toBe(false)

    const targetWrapper = wrapper.get('#inputEle')
    targetWrapper.setValue('123')
    await flushPromises()

    expect(wrapper.find('#errorMessage').exists()).toBe(true)
    expect(wrapper.get('#errorMessage').text()).toContain(
      'Password must be at least 6 characters.'
    )
  })

  it('change props', async () => {
    const wrapper = mount(Password, {
      propsData: {
        minLength: 6
      }
    })
    expect(wrapper.text()).toContain('minLength:6')

    wrapper.setProps({
      minLength: 3
    })
    await flushPromises()
    expect(wrapper.text()).toContain('minLength:3')
  })
})
