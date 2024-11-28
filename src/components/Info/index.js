import Component from './Component.vue';
import PropComponent from './PropComponent.vue';

export default {
  title: '问卷信息',
  type: 'info',
  Component,
  PropComponent,
  defaultProps: {
    title: '问卷标题',
    desc: '问卷描述'
  }
};
