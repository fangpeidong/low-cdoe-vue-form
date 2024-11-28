import Component from './Component.vue';
import PropComponent from './PropComponent.vue';

export default {
  title: '段落',
  type: 'paragraph',
  Component,
  PropComponent,
  defaultProps: {
    text: '一行段落',
    isCenter: false
  }
};
