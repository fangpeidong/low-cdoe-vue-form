<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="prop">
      <template #tab>
        <span>
          <FileTextOutlined />
          属性
        </span>
      </template>
      <ComponentProp />
    </a-tab-pane>
  </a-tabs>
</template>

<script setup>
import { ref } from 'vue';
import { FileTextOutlined } from '@ant-design/icons-vue';
import ComponentProp from './ComponentProp.vue';

const activeKey = ref('prop');
</script>
