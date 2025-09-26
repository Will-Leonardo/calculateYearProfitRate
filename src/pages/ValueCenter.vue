<template>
  <el-container style="height:100%;min-height:calc(100vh - 120px);background:#fff;">
    <el-main style="padding:0;height:100%;">
      <iframe
        src="https://danjuanfunds.com/djmodule/value-center"
        style="border:none;width:100%;height:100%;display:block;"
        allowfullscreen
      ></iframe>
    </el-main>
  </el-container>
</template>

<script setup>
// 引入 Element Plus 相关样式和组件（在 main.js 已全局引入则无需重复导入）
</script>

<style scoped>
.el-main {
  padding: 0 !important;
  height: 100%;
}

/* H5适配优化 */
@media (max-width: 600px) {
  .el-container,
  .el-main,
  iframe {
    min-height: calc(100vh - 56px);
    height: calc(100vh - 56px);
    width: 100vw;
    background: #fff;
    border-radius: 0;
    margin: 0;
    box-shadow: none;
    display: block;
  }
}
</style>