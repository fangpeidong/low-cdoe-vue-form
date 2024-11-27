<template>
  <a-typography-title
    :level="props.level"
    :style="{
      textAlign: props.isCenter ? 'center' : 'start',
      marginBottom: '0',
      fontSize
    }"
  >
    {{ props.text }}
  </a-typography-title>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  text: String,
  level: Number,
  isCenter: Boolean
});

const fontSize = computed(() => {
  const level = props.level;
  if (level === 1) {
    return '24px';
  }
  if (level === 2) {
    return '20px';
  }
  if (level === 3) {
    return '16px';
  }
  return '16px';
});
</script>
