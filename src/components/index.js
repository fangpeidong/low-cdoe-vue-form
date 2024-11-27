import TitleComponent from './Title/Component.vue';
import InputComponent from './Input/Component.vue';
import InfoComponent from './Info/Component.vue';
import ParagraphComponent from './Paragraph/Component.vue';
import TextareaComponent from './Textarea/Component.vue';
import RadioComponent from './Radio/Component.vue';
import CheckboxComponent from './Checkbox/Component.vue';

const componentMap = {
  title: TitleComponent,
  input: InputComponent,
  info: InfoComponent,
  paragraph: ParagraphComponent,
  textarea: TextareaComponent,
  radio: RadioComponent,
  checkbox: CheckboxComponent
};

export function getComponent(componentInfo) {
  const { type } = componentInfo;
  return componentMap[type];
}
