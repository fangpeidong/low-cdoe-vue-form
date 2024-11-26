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
    }
  }
});
