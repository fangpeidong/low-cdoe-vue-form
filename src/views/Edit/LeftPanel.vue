<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="componentLib">
      <template #tab>
        <span>
          <AppstoreOutlined />
          组件库
        </span>
      </template>
      <ComponentLib />
    </a-tab-pane>
  </a-tabs>
</template>

<script setup>
import { ref } from 'vue';
import { AppstoreOutlined } from '@ant-design/icons-vue';
import ComponentLib from './ComponentLib.vue';

const activeKey = ref('componentLib');
</script>
