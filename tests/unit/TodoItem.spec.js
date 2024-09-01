import { shallowMount } from '@vue/test-utils'
import TodoItem from '@/components/TodoItem.vue'

describe('TodoItem.vue', () => {
  it('input: props, output: view', () => {
    // given
    const content = 'todo123'
    // when
    const wrapper = shallowMount(TodoItem, {
      propsData: { content }
    })
    // then
    expect(wrapper.text()).toMatch(content)
  })

  it('input: slot, output: view', () => {
    // given
    const defaultSlot = 'todo item slot '
    // when
    const wrapper = shallowMount(TodoItem, {
      propsData: {
        content: 'todo123'
      },
      slots: {
        default: defaultSlot
      }
    })
    // then
    expect(wrapper.text()).toMatch(defaultSlot)
  })

  it('input: click, output: emit', () => {
    const wrapper = shallowMount(TodoItem, {
      propsData: {
        content: 'todo123',
        id: 0
      }
    })

    // 找到 button，发起 click 事件
    wrapper.get('#removeBtn').trigger('click')
    wrapper.get('#removeBtn').trigger('click')

    expect(wrapper.emitted('remove')[0]).toEqual([0])
    expect(wrapper.emitted('remove')).toEqual([[0], [0]])
  })
})
