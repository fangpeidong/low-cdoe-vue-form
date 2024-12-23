import { useStore } from '@/stores';
import { ref } from 'vue';

const data = {
  id: '1',
  title: 'title',
  desc: '问卷描述',
  js: '',
  css: '',
  isDeleted: false,
  isPublished: true,
  componentList: [
    // Info
    {
      fe_id: 'c1', // 注意，由于统计页，左侧和中间需要数据完全一直，所以要写死 fe_id ，不能用 Random.id()
      type: 'info', // 组件类型，不能重复，前后端统一好
      title: '问卷信息',
      isHidden: false,
      isLocked: false,
      props: { title: '问卷标题', desc: '问卷描述...' }
    },
    // Title
    {
      fe_id: 'c2',
      type: 'title', // 组件类型，不能重复，前后端统一好
      title: '标题',
      isHidden: false,
      isLocked: false,
      props: { text: '个人信息调研', level: 1, isCenter: false }
    },
    // Input
    {
      fe_id: 'c3',
      type: 'input',
      title: '输入框1',
      isHidden: false,
      isLocked: false,
      props: { title: '你的姓名', placeholder: '请输入姓名...' }
    },
    // Input
    {
      fe_id: 'c4',
      type: 'input',
      title: '输入框2',
      isHidden: false,
      isLocked: false,
      props: { title: '你的电话', placeholder: '请输入电话...' }
    },
    // Textarea
    {
      fe_id: 'c5',
      type: 'textarea',
      title: '多行输入',
      isHidden: false,
      isLocked: false,
      props: { title: '你的爱好', placeholder: '请输入...' }
    },
    // Paragraph
    {
      fe_id: 'c6',
      type: 'paragraph',
      title: '段落',
      isHidden: false,
      isLocked: false,
      props: { text: '一行段落1\n一行段落2', isCenter: false }
    },
    // Radio
    {
      fe_id: 'c7',
      type: 'radio',
      title: '单选',
      isHidden: false,
      isLocked: false,
      props: {
        title: '单选标题',
        isVertical: false,
        options: [
          { value: 'item1', text: '选项1' },
          { value: 'item2', text: '选项2' },
          { value: 'item3', text: '选项3' }
        ],
        value: ''
      }
    },
    // Checkbox
    {
      fe_id: 'c8',
      type: 'checkbox',
      title: '多选',
      isHidden: false,
      isLocked: false,
      props: {
        title: '多选标题',
        isVertical: false,
        list: [
          { value: 'item1', text: '选项1', checked: true },
          { value: 'item2', text: '选项2', checked: false },
          { value: 'item3', text: '选项3', checked: false }
        ]
      }
    }
  ]
};

function useLoadData() {
  const store = useStore();
  const loading = ref(true);
  if (!data) return;
  const { componentList = [] } = data;
  let selectedId = '';
  if (componentList.length > 0) {
    selectedId = componentList[0].fe_id;
  }
  store.resetComponents({
    componentList,
    selectedId,
    copiedComponent: null
  });
  loading.value = false;

  return { errorMsg: '', loading: false };
}

export default useLoadData;
