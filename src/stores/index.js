import { getNextSelectedId } from '@/utils';
import { defineStore } from 'pinia';
import cloneDeep from 'lodash.clonedeep';
import { nanoid } from 'nanoid';
import { arrayMoveImmutable } from 'array-move';

export const useStore = defineStore('Store', {
  state: () => ({
    selectedId: '',
    componentList: [],
    copiedComponent: null
  }),
  getters: {
    selectedComponent(state) {
      const comp = state.componentList.find(
        (c) => c.fe_id === state.selectedId
      );
      return comp;
    },
    isLocked() {
      return this.selectedComponent.isLocked;
    },
    selectedIndex() {
      const index = this.componentList.findIndex(
        (c) => c.fe_id === this.selectedId
      );
      return index;
    },
    isFirst() {
      return this.selectedIndex <= 0;
    },
    isLast() {
      return this.selectedIndex + 1 >= this.componentList.length;
    }
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
      const newSelectedId = getNextSelectedId(removeId, this.componentList);
      this.selectedId = newSelectedId;
      const index = this.componentList.findIndex((c) => c.fe_id === removeId);
      this.componentList.splice(index, 1);
    },
    // 锁定/解锁组件
    toggleComponentLocked() {
      this.componentList.forEach((c) => {
        if (c.fe_id === this.selectedId) {
          c.isLocked = !c.isLocked;
        }
      });
    },
    // 复制选中的组件
    copySelectedComponent() {
      this.componentList.forEach((c) => {
        if (c.fe_id === this.selectedId) {
          this.copiedComponent = cloneDeep(this.selectedComponent);
        }
      });
    },
    // 粘贴组件
    pasteCopiedComponent() {
      this.copiedComponent.fe_id = nanoid();
      const index = this.componentList.findIndex(
        (c) => c.fe_id === this.selectedId
      );
      if (index < 0) {
        this.componentList.push(this.copiedComponent);
      } else {
        this.componentList.splice(index + 1, 0, this.copiedComponent);
      }
    },
    // 选中上一个
    selectPrevComponent() {
      if (this.selectedIndex < 0) return; // 未选中组件
      if (this.selectedIndex <= 0) return; // 已经选中了第一个，无法再向上选中
      this.selectedId = this.componentList[this.selectedIndex - 1].fe_id;
    },
    // 选中下一个
    selectNextComponent() {
      if (this.selectedIndex < 0) return; // 未选中组件
      if (this.selectedIndex + 1 === this.componentList.length) return; // 已经选中了最后一个，无法再向下选中
      this.selectedId = this.componentList[this.selectedIndex + 1].fe_id;
    },
    // 移动组件位置
    moveComponent(payload) {
      const { oldIndex, newIndex } = payload;
      const curComponentList = cloneDeep(this.componentList);
      this.componentList = arrayMoveImmutable(
        curComponentList,
        oldIndex,
        newIndex
      );
    }
  }
});
