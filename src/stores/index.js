import { getNextSelectedId } from '@/utils';
import { defineStore } from 'pinia';

export const useStore = defineStore('Store', {
  state: () => ({
    selectedId: '',
    componentList: [],
    copiedComponent: null
  }),
  getters: {
    selectedComponent: (state) =>
      state.componentList.find((c) => c.fe_id === state.selectedId)
  },
  actions: {
    resetComponents({ selectedId, componentList, copiedComponent }) {
      this.selectedId = selectedId;
      this.componentList = componentList;
      this.copiedComponent = copiedComponent;
    },
    // 修改当前选中的组件id
    changeSelectedId(id) {
      this.selectedId = id;
    },
    // 添加新组件
    addComponent(payload) {
      const index = this.componentList.findIndex(
        (c) => c.fe_id === this.selectedId
      );
      if (index < 0) {
        this.componentList.push(payload);
      } else {
        this.componentList.splice(index + 1, 0, payload);
      }
      this.selectedId = payload.fe_id;
    },
    // 修改组件属性
    changeComponentProps(payload) {
      const { fe_id, newProps } = payload;
      this.componentList.forEach((c) => {
        if (c.fe_id === fe_id) {
          c.props = { ...newProps };
        }
      });
    },
    // 删除选中组件
    removeSelectedComponent() {
      const removeId = this.selectedId;
      // const { componentList, selectedId: removeId } = state;
      const newSelectedId = getNextSelectedId(removeId, this.componentList);
      this.selectedId = newSelectedId;
      const index = this.componentList.findIndex((c) => c.fe_id === removeId);
      this.componentList.splice(index, 1);
    }
  }
});
