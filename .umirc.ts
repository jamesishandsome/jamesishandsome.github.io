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
      name: 'Home Page',
      path: '/',
      component: './Home',
    },
    {
      name: 'Profile',
      path: '/profile',
      component: './cv',
    },
    {
      name: 'Chat',
      path: '/chat',
      component: './Chat',
    },
    // {
    //   name: 'What for lunch',
    //   path: '/lunch',
    //   component: './Lunch',
    // },
    { path: '/*', component: './404' },
  ],

  npmClient: 'pnpm',
  tailwindcss: {},
});
