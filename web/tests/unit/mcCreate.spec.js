import Vue from 'vue'
import Element from 'element-ui'
Vue.use(Element)
import flushPromises from 'flush-promises'
import {
  shallowMount
} from '@vue/test-utils'

import McCreate from '@/views/McCreate.vue'
import ProjectCreate from '@/views/ProjectCreate.vue'
import http from '../../src/http/http.js'
Vue.prototype.$http = http;

describe('ProjectCreate.vue', () => {
  const wrapper = shallowMount(ProjectCreate);
  it('页面是否渲染', () => {
    expect(wrapper.find('.title').text()).toBe('创建项目:')
  })

  it('项目名称输入按钮是否正常渲染', () => {
    expect(wrapper.find('.projectName').exists()).toBe(true);
  })

  it('项目名称和项目简介是否能正常的输入', () => {
    wrapper.setData({
      model: {
        projectFeatures: '由自动化测试输入',
        projectName: '由自动化测试输入'
      }
    })

    expect(wrapper.vm.model.projectName).toBe('由自动化测试输入');
    expect(wrapper.vm.model.projectFeatures).toBe('由自动化测试输入');
  })

  it('send project', async () => {
    let sendProjectButton = wrapper.find('.sendProjectItem')
    expect(sendProjectButton.exists()).toBe(true);
    sendProjectButton.trigger('click', {
      projectName: '1'
    });
    await flushPromises();

  })

})

describe('McCreate.vue', () => {
  const wrapper = shallowMount(McCreate);
  it('测试页面渲染', () => {
    expect(wrapper.find('h1').text()).toBe('上传MC:')
  })

  it('输入版本', () => {
    let dom = wrapper.setData({
      model: {
        versionNumber: '自动化测试'
      }
    })
    expect(wrapper.vm.model.versionNumber).toBe('自动化测试');
  })
})

describe('EditCreate.vue', () => {
  const wrapper = shallowMount(McCreate);
  wrapper.setProps({
    id: 123
  });
  it('测试页面渲染', () => {
    expect(wrapper.find('h1').text()).toBe('编辑MC:')
  })
})