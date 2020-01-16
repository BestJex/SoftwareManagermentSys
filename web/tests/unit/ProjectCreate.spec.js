import Vue from 'vue'
import Element from 'element-ui'
Vue.use(Element)
import flushPromises from 'flush-promises'
import {
  shallowMount
} from '@vue/test-utils'

import ProjectCreate from '@/views/ProjectCreate.vue'

jest.mock('axios')



describe('ProjectCreate.vue', () => {
  const wrapper = shallowMount(ProjectCreate);
  it('页面是否渲染', () => {
    expect(wrapper.find('.title').text()).toBe('创建项目:')
  })

  it('项目名称输入按钮是否正常渲染', () => {
    expect(wrapper.find('.projectName').exists()).toBe(true);
  })

  it('项目名称和项目简介是否能正常的输入', async () => {
    wrapper.setData({
      model: {
        projectFeatures: '由自动化测试输入',
        projectName: '由自动化测试输入'
      }
    })

    let sendProject = wrapper.find('.sendProjectItem');
    sendProject.trigger('click');
    await flushPromises()


    expect(wrapper.vm.model.projectName).toBe('由自动化测试输入');
    expect(wrapper.vm.model.projectFeatures).toBe('由自动化测试输入');


  })
})