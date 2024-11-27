import TitleConf from './Title';
import InputConf from './Input';
import InfoConf from './Info';
import ParagraphConf from './Paragraph';
import TextareaConf from './Textarea';
import RadioConf from './Radio';
import CheckboxConf from './Checkbox';

const componentMap = {
  title: TitleConf.Component,
  input: InputConf.Component,
  info: InfoConf.Component,
  paragraph: ParagraphConf.Component,
  textarea: TextareaConf.Component,
  radio: RadioConf.Component,
  checkbox: CheckboxConf.Component
};

export function getComponent(componentInfo) {
  const { type } = componentInfo;
  return componentMap[type];
}

// 组件分组
export const componentConfGroup = [
  {
    groupId: 'textGroup',
    groupName: '文本',
    components: [TitleConf, InfoConf, ParagraphConf]
  },
  {
    groupId: 'inputGroup',
    groupName: '输入框',
    components: [InputConf, TextareaConf]
  },
  {
    groupId: 'chooseGroup',
    groupName: '选择',
    components: [RadioConf, CheckboxConf]
  }
];
