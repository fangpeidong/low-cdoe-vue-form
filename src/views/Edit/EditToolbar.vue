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
        :type="isLocked ? 'primary' : 'default'"
      ></a-button>
    </a-tooltip>
    <a-tooltip title="复制">
      <a-button
        shape="circle"
        :icon="h(CopyOutlined)"
        @click="
          {
            copy;
          }
        "
      ></a-button>
    </a-tooltip>
    <a-tooltip title="粘贴">
      <a-button
        shape="circle"
        :icon="h(BlockOutlined)"
        @click="paste"
        :disabled="copiedComponent == null"
      ></a-button>
    </a-tooltip>
    <a-tooltip title="上移">
      <a-button
        shape="circle"
        :icon="h(UpOutlined)"
        @click="
          {
            moveUp;
          }
        "
        :disabled="isFirst"
      ></a-button>
    </a-tooltip>
    <a-tooltip title="下移">
      <a-button
        shape="circle"
        :icon="h(DownOutlined)"
        @click="moveDown"
        :disabled="isLast"
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
const isLocked = ref(false);
const isFirst = ref(false);
const isLast = ref(false);
const copiedComponent = ref(null);

// 删除
function handleDelete() {
  store.removeSelectedComponent();
}
// 锁定
function handleLock() {}
// 复制
function copy() {}
// 粘贴
function paste() {}

// 上移
function moveUp() {
  if (isFirst) return;
}

// 下移
function moveDown() {
  if (isLast) return;
}

// 撤销
function undo() {}

// 重做
function redo() {}
</script>
