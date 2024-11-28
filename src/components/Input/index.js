import Component from './Component.vue';
import PropComponent from './PropComponent.vue';

export default {
  title: '输入框',
  type: 'input',
  Component,
  PropComponent,
  defaultProps: {
    title: '请输入标题',
    placeholder: '请输入'
  }
};
