<template>
  <a-form layout="vertical" :model="formState">
    <a-form-item
      label="段落内容"
      :rules="[{ required: true, message: '请输入' }]"
    >
      <a-input v-model:value="formState.text" />
    </a-form-item>
    <a-form-item>
      <a-checkbox v-model:checked="formState.isCenter">居中显示</a-checkbox>
    </a-form-item>
  </a-form>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  text: String,
  isCenter: Boolean
});

const formState = ref({ ...props });

const emits = defineEmits(['changeProps']);

watch(
  () => formState.value,
  () => {
    emits('changeProps', formState.value);
  },
  { deep: true }
);
</script>
