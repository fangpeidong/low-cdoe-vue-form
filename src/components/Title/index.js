import Component from './Component.vue';
import PropComponent from './PropComponent.vue';

export default {
  title: '标题',
  type: 'title',
  Component,
  PropComponent,
  defaultProps: {
    text: '标题',
    level: 1,
    isCenter: false
  }
};
