<template>
  <div class="container">
    <EditHeader />
    <div class="content-wrapper">
      <div class="content">
        <div class="left">
          <LeftPanel />
        </div>
        <div class="main" @click="clearSelectedId">
          <div class="canvas-wrapper">
            <EditCanvas :loading="loading" />
          </div>
        </div>
        <div class="right">
          <RightPanel />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import useLoadData from '@/hooks/useLoadData';

import EditHeader from './EditHeader';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import EditCanvas from './EditCanvas';

const { loading } = useLoadData();

function clearSelectedId() {}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f0f2f5;
}

.content-wrapper {
  flex: auto;
  padding: 12px 0;
}

.content {
  margin: 0 24px;
  display: flex;
  height: 100%;
  .left {
    width: 295px;
    background-color: #fff;
    padding: 0 12px;
  }
  .main {
    flex: 1;
    position: relative;
    overflow: hidden;
    .canvas-wrapper {
      position: absolute;
      width: 400px;
      height: 712px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      overflow: auto;
      box-shadow: 0 2px 10px #0000001f;
    }
  }
  .right {
    width: 300px;
    background-color: #fff;
    padding: 0 12px;
  }
}
</style>
