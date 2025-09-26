<!--
 * @Autor: wangliangxin3
 * @Email: wangliangxin3@jd.com
 * @Description: 
 * @Date: 2025-09-26 17:51:17
 * @LastEditors: wangliangxin3
 * @LastEditTime: 2025-09-26 20:14:19
-->
<template>
  <div class="app-container">
    <main>
      <router-view />
    </main>
    <nav class="nav-menu-bottom">
      <router-link to="/" class="nav-item" active-class="router-link-active">
        <span class="nav-svg-icon" aria-label="首页">
          <!-- 首页SVG -->
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M3 10.5L12 4l9 6.5V20a1 1 0 0 1-1 1h-5v-5h-6v5H4a1 1 0 0 1-1-1V10.5z" stroke="#4285f4" stroke-width="1.6" fill="none"/>
          </svg>
        </span>
        <span>首页</span>
      </router-link>
      <router-link to="/annualized" class="nav-item" active-class="router-link-active">
        <span class="nav-svg-icon" aria-label="年化">
          <!-- 年化SVG（折线图/统计）-->
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M4 17L10 11L14 15L20 9" stroke="#4285f4" stroke-width="1.6" fill="none"/>
            <circle cx="4" cy="17" r="1.6" fill="#2ec7c9"/>
            <circle cx="10" cy="11" r="1.6" fill="#2ec7c9"/>
            <circle cx="14" cy="15" r="1.6" fill="#2ec7c9"/>
            <circle cx="20" cy="9" r="1.6" fill="#2ec7c9"/>
          </svg>
        </span>
        <span>年化计算</span>
      </router-link>
      <router-link to="/value-center" class="nav-item" active-class="router-link-active">
        <span class="nav-svg-icon" aria-label="估值中心">
          <!-- 估值中心SVG（用户/数据/基金）-->
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="8" r="4" stroke="#4285f4" stroke-width="1.6" fill="none"/>
            <path d="M4 20c0-4 16-4 16 0" stroke="#2ec7c9" stroke-width="1.6" fill="none"/>
          </svg>
        </span>
        <span>估值中心</span>
      </router-link>
    </nav>
  </div>
</template>

<script setup>
// 如需自定义 iconfont，可引入相关字体或 SVG
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: -apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei',Arial,sans-serif;
  background: #f4f6fb;
  position: relative;
}
.header-inner {
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.site-title {
  font-size: 23px;
  font-weight: 600;
  color: #fff;
  letter-spacing: 1px;
  text-shadow: 0 2px 12px rgba(42,176,208,0.09);
  margin-bottom: 4px;
}
main {
  flex: 1;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  box-sizing: border-box;
}
.nav-menu-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 60px;
  background: #fff;
  border-top: 1px solid #e2e4ea;
  display: flex;
  z-index: 99;
  box-shadow: 0 -2px 12px rgba(42,176,208,0.08);
}
.nav-menu-bottom .nav-item {
  flex: 1;
  text-align: center;
  color: #4285f4;
  font-size: 15px;
  padding: 4px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background .2s;
  border-right: 1px solid #f3f5fa;
}
.nav-menu-bottom .nav-item:last-child {
  border-right: none;
}
.nav-menu-bottom .iconfont {
  display: none;
}
.nav-menu-bottom .nav-svg-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2px;
  width: 28px;
  height: 28px;
}
.nav-menu-bottom .router-link-active {
  color: #2ec7c9;
  font-weight: 600;
  background: #e3f7fa;
}
.footer {
  text-align: center;
  padding: 12px 0;
  background: #e2e4ea;
  font-size: 14px;
  color: #888;
  margin-bottom: 60px;
}
@media (max-width: 600px) {
  .header-inner {
    padding: 0 8px;
  }
  .site-title {
    font-size: 16px;
  }
  main {
    max-width: 100vw;
  }
  .nav-menu-bottom {
    height: 55px;
    font-size: 13px;
  }
  .nav-menu-bottom .iconfont {
    font-size: 18px;
  }
  .footer {
    margin-bottom: 55px;
  }
}
.router-link-exact-active {
  /* border: 1px solid #fff; */
  /* border-radius: 5px; */
}
</style>