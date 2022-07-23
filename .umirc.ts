import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  dva: {
    hmr: true,
  },
  proxy: {
    '/api': {
      target: 'http://localhost:4000',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
