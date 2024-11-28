<template>
  <div v-for="group in componentConfGroup" :key="group.groupId">
    <a-typography-title
      :level="3"
      :style="{ fontSize: '16px', marginTop: index > 0 ? '20px' : '0' }"
    >
      {{ group.groupName }}
    </a-typography-title>
    <div
      class="wrapper"
      v-for="c in group.components"
      :key="c.type"
      @click="handleClick(c)"
    >
      <div class="component">
        <component :is="c.Component" v-bind="c.defaultProps" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { nanoid } from 'nanoid';
import { componentConfGroup } from '@/components';
import { useStore } from '@/stores';

const store = useStore();

function handleClick(c) {
  const { title, type, defaultProps } = c;
  store.addComponent({
    fe_id: nanoid(),
    title,
    type,
    props: defaultProps
  });
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin-bottom: 12px;
  cursor: pointer;
  background-color: #f7f7f7;
  border: 1px solid #f7f7f7;
  padding: 12px;
  border-radius: 3px;
  &:hover {
    border-color: #d9d9d9;
  }
}

.component {
  pointer-events: none;
}
</style>
