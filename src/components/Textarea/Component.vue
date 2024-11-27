<template>
  <div>
    <a-typography-paragraph strong>{{ title }}</a-typography-paragraph>
    <div>
      <a-textarea :placeholder="placeholder"></a-textarea>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  placeholder: String
});
</script>
