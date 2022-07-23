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
    '/api3008': {
      target: 'http://localhost:3008',
      changeOrigin: true,
      pathRewrite: { '^/api3008': '' },
    },
    '/api': {
      target: 'http://localhost:3000',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
