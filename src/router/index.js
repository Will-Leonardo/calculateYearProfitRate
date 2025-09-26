/*
 * @Autor: wangliangxin3
 * @Email: wangliangxin3@jd.com
 * @Description: Vue3 路由配置
 * @Date: 2025-09-26 17:51:50
 * @LastEditors: wangliangxin3
 * @LastEditTime: 2025-09-26 18:50:18
 */
import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '../pages/Home.vue';
import Annualized from '../pages/Annualized.vue';

const ValueCenter = () => import('../pages/ValueCenter.vue');
const routes = [
  { path: '/', component: Home },
  { path: '/annualized', component: Annualized },
  { path: '/value-center', component: ValueCenter },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;