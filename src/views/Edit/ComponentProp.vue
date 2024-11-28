<template>
  <component
    v-bind="store.selectedComponent.props"
    :is="getComponentConfByType(store.selectedComponent.type).PropComponent"
    :key="store.selectedComponent.fe_id"
    @changeProps="changeProps"
  ></component>
</template>

<script setup>
import { getComponentConfByType } from '@/components';
import { useStore } from '@/stores';

const store = useStore();

function changeProps(newProps) {
  store.changeComponentProps({
    fe_id: store.selectedComponent.fe_id,
    newProps
  });
}
</script>
