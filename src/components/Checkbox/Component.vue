<template>
  <div>
    <a-typography-paragraph strong>{{ title }}</a-typography-paragraph>
    <a-space :direction="isVertical ? 'vertical' : 'horizontal'">
      <a-checkbox
        v-for="opt in list"
        :key="opt.value"
        :value="opt.value"
        :checked="opt.checked"
        >{{ opt.text }}</a-checkbox
      >
    </a-space>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  isVertical: {
    type: Boolean,
    default: false
  },
  list: {
    type: Array,
    default: () => []
  }
});
</script>
