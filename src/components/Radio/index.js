import Component from './Component.vue';

export default {
  title: '单选',
  type: 'radio',
  Component,
  defaultProps: {
    title: '单选标题',
    isVertical: false,
    options: [
      { value: 'item1', text: '选项1' },
      { value: 'item2', text: '选项2' },
      { value: 'item3', text: '选项3' }
    ],
    value: ''
  }
};
