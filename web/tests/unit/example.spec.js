import {
  shallowMount
} from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import McCreate from '@/view/McCreate.vue'


describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: {
        msg
      }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

describe('McCreate.vue', () => {
  it('版本号输入框', () => {

  })
})