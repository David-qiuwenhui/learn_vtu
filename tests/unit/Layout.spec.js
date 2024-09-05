import { mount } from '@vue/test-utils'
import Layout from '@/components/Layout.vue'
import Foo from '@/components/Foo.vue'

describe('Layout.vue', () => {
  it('default slot 1', () => {
    const wrapper = mount(Layout, {
      slots: {
        default: 'default slot'
      }
    })

    expect(wrapper.text()).toContain('default slot')
  })

  // string
  it('default slot 2', () => {
    const wrapper = mount(Layout, {
      slots: {
        default: '<div id="defaultDiv">default slot</div>'
      }
    })

    expect(wrapper.get('#defaultDiv').exists()).toBe(true)
    expect(wrapper.get('#defaultDiv').text()).toContain('default slot')
  })

  // array
  it('named slot 2', () => {
    const wrapper = mount(Layout, {
      slots: {
        default: [
          "<div id='defaultOne'>one</div>",
          "<div id='defaultTwo'>two</div>"
        ],
        main: '<div id="mainDiv">main slot</div>',
        footer: '<div id="footerDiv">footer slot</div>'
      }
    })
    // default
    expect(wrapper.get('#defaultOne').text()).toContain('one')
    expect(wrapper.get('#defaultTwo').text()).toContain('two')
    // main
    expect(wrapper.get('#mainDiv').exists()).toBe(true)
    expect(wrapper.get('#mainDiv').text()).toContain('main slot')
    // footer
    expect(wrapper.get('#footerDiv').exists()).toBe(true)
    expect(wrapper.get('#footerDiv').text()).toContain('footer slot')
  })

  it('scoped slot', () => {
    // TODO:
    // const wrapper = mount(Layout, {
    //   slots: {
    //     header: `
    //     <template #header="data">
    //       data is {{ data }}
    //     </template>
    //     `
    //   }
    // })
    // console.log(wrapper.html())
    // expect(wrapper.get('#header').text()).toContain('data is message')
  })

  it('slot 高级用法1 component', () => {
    const wrapper = mount(Layout, {
      slots: {
        default: Foo
      }
    })
    expect(wrapper.text()).toContain('click')
  })

  it('slot 高级用法2 object', () => {
    const wrapper = mount(Layout, {
      slots: {
        default: {
          template: '<div>123</div>'
        }
      }
    })

    expect(wrapper.text()).toContain('123')
  })

  // it('slot 高级用法3 h -> vnode vue3', () => {
  //   const wrapper = mount(Layout, {
  //     slots: {
  //       default: {
  //         template: h('div', 'foo')
  //       }
  //     }
  //   })

  //   expect(wrapper.text()).toContain('foo')
  // })
})
