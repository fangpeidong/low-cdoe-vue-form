<template>
  <div class="canvas">
    <template v-for="c in componentList" :key="c.fe_id">
      <div
        :class="{
          'component-wrapper': true,
          selected: c.fe_id === store.selectedId,
          locked: false
        }"
        @click.stop="handleClick(c.fe_id)"
      >
        <div class="component">
          <component
            :is="getComponentConfByType(c.type)?.Component"
            v-bind="c.props"
          />
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { getComponentConfByType } from '@/components';
import { useStore } from '@/stores';
import { storeToRefs } from 'pinia';
const store = useStore();
const { componentList } = storeToRefs(store);

function handleClick(id) {
  store.changeSelectedId(id);
}
</script>

<style lang="scss" scoped>
.canvas {
  min-height: 100%;
  background-color: #fff;
  overflow: hidden;
}

.component-wrapper {
  margin: 12px;
  border: 1px solid #fff;
  padding: 12px;
  border-radius: 3px;
  &:hover {
    border-color: #d9d9d9;
  }
}

.selected {
  border-color: #1890ff !important;
}

.locked {
  opacity: 0.5;
  cursor: not-allowed;
}

.component {
  pointer-events: none; // 屏蔽鼠标行为
}
</style>
