/*
 * @Autor: wangliangxin3
 * @Email: wangliangxin3@jd.com
 * @Description: 
 * @Date: 2025-09-26 17:50:34
 * @LastEditors: wangliangxin3
 * @LastEditTime: 2025-09-26 17:50:37
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './assets/global.css';

createApp(App).use(router).mount('#app');