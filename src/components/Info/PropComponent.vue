<template>
  <a-form layout="vertical" :model="formState" :disabled="store.isLocked">
    <a-form-item
      label="标题"
      name="title"
      :rules="[{ required: true, message: '请输入问卷标题' }]"
    >
      <a-input v-model:value="formState.title" />
    </a-form-item>
    <a-form-item label="描述" name="desc">
      <a-textarea v-model:value="formState.desc" />
    </a-form-item>
  </a-form>
</template>

<script setup>
import { useStore } from '@/stores';
import { ref, watch } from 'vue';

const props = defineProps({
  title: String,
  desc: String
});

const store = useStore();

const formState = ref({ ...props });

const emits = defineEmits(['changeProps']);

watch(
  () => formState.value,
  () => {
    emits('changeProps', formState.value);
  },
  {
    deep: true
  }
);
</script>
