import Component from './Component.vue';
import PropComponent from './PropComponent.vue';

export default {
  title: '多选',
  type: 'checkbox',
  Component,
  PropComponent,
  defaultProps: {
    title: '多选标题',
    isVertical: false,
    list: [
      { value: 'item1', text: '选项1', checked: false },
      { value: 'item2', text: '选项2', checked: false },
      { value: 'item3', text: '选项3', checked: false }
    ]
  }
};
