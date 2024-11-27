<template>
  <a-typography-paragraph
    :style="{ textAlign: isCenter ? 'center' : 'start', marginBottom: 0 }"
  >
    <template v-for="(t, index) in textList" :key="index">
      <br v-if="index > 0" />
      {{ t }}
    </template>
  </a-typography-paragraph>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  text: String,
  isCenter: Boolean
});

const textList = computed(() => props.text.split('\n'));
</script>
