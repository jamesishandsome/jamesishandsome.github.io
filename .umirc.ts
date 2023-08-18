import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  title: 'James Hu',
  layout: false,
  esbuildMinifyIIFE: true,
  routes: [
    {
      path: '/',
      layout: false,
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
    {
      name: 'What for lunch',
      path: '/lunch',
      component: './Lunch',
    },
  ],

  npmClient: 'pnpm',
  tailwindcss: {},
});
