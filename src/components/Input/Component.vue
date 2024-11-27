<template>
  <div>
    <a-typography-paragraph strong>{{ title }}</a-typography-paragraph>
    <div>
      <a-input :placeholder="placeholder"></a-input>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  }
});
</script>
