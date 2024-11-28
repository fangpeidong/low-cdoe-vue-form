<template>
  <a-form layout="vertical" :model="formState">
    <a-form-item
      label="标题"
      name="title"
      :rules="[{ required: true, message: '请输入' }]"
    >
      <a-input v-model:value="formState.title" />
    </a-form-item>
    <a-form-item label="Placeholder" name="placeholder">
      <a-input v-model:value="formState.placeholder" />
    </a-form-item>
  </a-form>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  title: String,
  placeholder: String
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
