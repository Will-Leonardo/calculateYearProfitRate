/*
 * @Autor: wangliangxin3
 * @Email: wangliangxin3@jd.com
 * @Description: Vite 配置，适配 GitHub Pages 部署
 * @Date: 2025-09-26 18:15:00
 * @LastEditors: wangliangxin3
 * @LastEditTime: 2025-09-26 17:57:39
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/calculate-year/', // 根据你的仓库名设置
  plugins: [vue()],
});