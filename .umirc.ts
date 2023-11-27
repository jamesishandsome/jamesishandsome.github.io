import { defineConfig } from '@umijs/max';

export default defineConfig({
  chainWebpack(config) {
    config.set('experiments', {
      ...config.get('experiments'),
      asyncWebAssembly: true,
    });

    const REG = /\.wasm$/;

    config.module.rule('asset').exclude.add(REG).end();

    config.module
      .rule('wasm')
      .test(REG)
      .exclude.add(/node_modules/)
      .end()
      .type('webassembly/async')
      .end();
  },
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
      name: 'wasm demo',
      path: '/wasm',
      component: './Wasm',
    },
    {
      name: 'What for lunch',
      path: '/lunch',
      component: './Lunch',
    },
    { path: '/*', component: './404' },
  ],

  npmClient: 'pnpm',
  tailwindcss: {},
});
