import Component from './Component.vue';
import PropComponent from './PropComponent.vue';

export default {
  title: '多行输入',
  type: 'textarea',
  Component,
  PropComponent,
  defaultProps: {
    title: '输入框标题',
    placeholder: '请输入...'
  }
};
