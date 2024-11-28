<template>
  <a-space>
    <a-tooltip title="删除">
      <a-button
        shape="circle"
        :icon="h(DeleteOutlined)"
        @click="handleDelete"
      ></a-button>
    </a-tooltip>
    <a-tooltip title="锁定">
      <a-button
        shape="circle"
        :icon="h(LockOutlined)"
        @click="handleLock"
        :type="store.isLocked ? 'primary' : 'default'"
      ></a-button>
    </a-tooltip>
    <a-tooltip title="复制">
      <a-button shape="circle" :icon="h(CopyOutlined)" @click="copy"></a-button>
    </a-tooltip>
    <a-tooltip title="粘贴">
      <a-button
        shape="circle"
        :icon="h(BlockOutlined)"
        @click="paste"
        :disabled="store.copiedComponent == null"
      ></a-button>
    </a-tooltip>
    <a-tooltip title="上移">
      <a-button
        shape="circle"
        :icon="h(UpOutlined)"
        @click="moveUp"
        :disabled="store.isFirst"
      ></a-button>
    </a-tooltip>
    <a-tooltip title="下移">
      <a-button
        shape="circle"
        :icon="h(DownOutlined)"
        @click="moveDown"
        :disabled="store.isLast"
      ></a-button>
    </a-tooltip>
    <a-tooltip title="撤销">
      <a-button shape="circle" :icon="h(UndoOutlined)" @click="undo"></a-button>
    </a-tooltip>
    <a-tooltip title="重做">
      <a-button shape="circle" :icon="h(RedoOutlined)" @click="redo"></a-button>
    </a-tooltip>
  </a-space>
</template>

<script setup>
import { h, ref } from 'vue';
import {
  BlockOutlined,
  CopyOutlined,
  DeleteOutlined,
  LockOutlined,
  UpOutlined,
  DownOutlined,
  UndoOutlined,
  RedoOutlined
} from '@ant-design/icons-vue';
import { useStore } from '@/stores';

const store = useStore();

const isFirst = ref(false);
const isLast = ref(false);
const copiedComponent = ref(null);

// 删除
function handleDelete() {
  store.removeSelectedComponent();
}
// 锁定
function handleLock() {
  store.toggleComponentLocked();
}
// 复制
function copy() {
  store.copySelectedComponent();
}
// 粘贴
function paste() {
  store.pasteCopiedComponent();
}

// 上移
function moveUp() {
  if (store.isFirst) return;
  store.moveComponent({
    oldIndex: store.selectedIndex,
    newIndex: store.selectedIndex - 1
  });
}

// 下移
function moveDown() {
  if (store.isLast) return;
  store.moveComponent({
    oldIndex: store.selectedIndex,
    newIndex: store.selectedIndex + 1
  });
}

// 撤销
function undo() {}

// 重做
function redo() {}
</script>
