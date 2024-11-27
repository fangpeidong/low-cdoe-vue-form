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
    }
  }
});
