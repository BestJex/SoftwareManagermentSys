import Vue from 'vue'
import Element from 'element-ui'
Vue.use(Element)

import {
  shallowMount
} from '@vue/test-utils'
import McCreate from '@/views/McCreate.vue'


describe('McCreate.vue', () => {
  const wrapper = shallowMount(McCreate);
  it('测试提交表单按钮', () => {
    const div = wrapper.find('.versionNum');
    div.trigger('click');
    div.setValue('111')
  })
})