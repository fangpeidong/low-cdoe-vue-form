<template>
  <div :style="{ textAlign: 'center' }">
    <a-typography-title :style="{ fontSize: '24px' }">
      {{ props.title }}
    </a-typography-title>
    <a-typography-paragraph>
      <template v-for="(t, index) in descTextList" :key="index">
        <br v-if="index > 0" />
        {{ t }}
      </template>
    </a-typography-paragraph>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: String,
  desc: String
});

const descTextList = computed(() => props.desc.split('\n'));
</script>
