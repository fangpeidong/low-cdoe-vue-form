<template>
  <component
    v-if="curPropComp"
    v-bind="store.selectedComponent.props"
    :is="curPropComp"
    :key="store.selectedComponent.fe_id"
    @changeProps="changeProps"
  ></component>
</template>

<script setup>
import { getComponentConfByType } from '@/components';
import { useStore } from '@/stores';
import { computed } from 'vue';

const store = useStore();

const curPropComp = computed(() => {
  const { type = '' } = store.selectedComponent || {};
  return getComponentConfByType(type)?.PropComponent;
});

function changeProps(newProps) {
  store.changeComponentProps({
    fe_id: store.selectedComponent.fe_id,
    newProps
  });
}
</script>
