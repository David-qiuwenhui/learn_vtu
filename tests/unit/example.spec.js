import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    // given
    const msg = 'new message'

    // when
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })

    console.log(wrapper.text())
    console.log(wrapper.html())

    // then
    expect(wrapper.text()).toMatch(msg)
  })
})
