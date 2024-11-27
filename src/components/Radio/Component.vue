<template>
  <a-typography-paragraph strong>{{ title }}</a-typography-paragraph>
  <a-radio-group :value="value">
    <a-space :direction="isVertical ? 'vertical' : 'horizontal'">
      <a-radio v-for="opt in options" :key="opt.value" :value="opt.value">
        {{ opt.text }}
      </a-radio>
    </a-space>
  </a-radio-group>
</template>

<script setup>
defineProps({
  title: String,
  options: Array,
  value: String,
  isVertical: Boolean
});
</script>
