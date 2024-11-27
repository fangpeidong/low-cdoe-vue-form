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
  title: String,
  placeholder: String
});
</script>
