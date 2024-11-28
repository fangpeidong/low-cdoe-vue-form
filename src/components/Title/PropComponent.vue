<template>
  <a-form layout="vertical" :model="formState">
    <a-form-item
      label="标题内容"
      :rules="[{ required: true, message: '请输入' }]"
    >
      <a-input v-model:value="formState.text" />
    </a-form-item>
    <a-form-item label="层级">
      <a-select
        v-model:value="formState.level"
        :options="[
          { value: 1, text: 1 },
          { value: 2, text: 2 },
          { value: 3, text: 3 },
          { value: 4, text: 4 },
          { value: 5, text: 5 }
        ]"
      ></a-select>
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
  level: Number,
  isCenter: Boolean
});

const emits = defineEmits(['changeProps']);

const formState = ref({ ...props });

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
