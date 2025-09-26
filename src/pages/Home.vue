<!--
 * @Autor: wangliangxin3
 * @Email: wangliangxin3@jd.com
 * @Description: 首页
 * @Date: 2025-09-26 17:52:30
 * @LastEditors: wangliangxin3
 * @LastEditTime: 2025-09-26 20:17:29
-->
<template>
  <div class="home">
    <h2>欢迎使用个人工具百宝箱</h2>
    <p>这里将收集和展示你的常用工具页面。</p>
    <ul>
      <li><router-link to="/annualized">年化收益率计算</router-link></li>
      <li><router-link to="/value-center">估值中心（基金估值、外部数据展示）</router-link></li>
      <li>更多工具敬请期待...</li>
    </ul>
  </div>
</template>
<script setup></script>
<style scoped>
.home {
  padding: 24px 16px;
  background: #fff;
  box-shadow: 0 2px 6px rgba(67,103,211,0.03);
  border-radius: 8px;
  max-width: 600px;
}
h2 {
  color: #4285f4;
  margin-bottom: 12px;
  font-size: 24px;
}
ul {
  padding-left: 1em;
  margin-top: 16px;
}
li {
  line-height: 2;
  font-size: 16px;
}
@media (max-width: 600px) {
  .home {
    padding: 12px 16px;
    max-width: 100vw;
    min-height: calc(100vh - 56px);
    box-sizing: border-box;
    border-radius: 0;
    background: #fff;
  }
  h2 { font-size: 17px; }
  li { font-size: 15px; }
}
</style>