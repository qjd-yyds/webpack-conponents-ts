import { merge } from 'webpack-merge';
import { resolve } from 'path';
import common from './webpack.common';

const config = merge(common, {
  // 映射
  devtool: 'eval-source-map',
  // 打包模式
  mode: 'development',
  // 开发时
  devServer: {
    // 获取bundle目录
    contentBase: resolve(__dirname, '../dist'),
    // 开启gzip
    compress: true,
    // 端口
    port: 9000,
    // 打开浏览器
    open: true,
    // 不打印打包状态
    noInfo: true,
    // 广播
    bonjour: true,
    // 使用ip打开
    // useLocalIp: true,
    stats: 'errors-only',
    // 代理
    proxy: {
      '/api': {
        target: 'http://localhost:8888',
        // 接受除了https以外服务器
        secure: false,
        pathRewrite: { '^/api': '' },
      },
    },
  },
});
export default config;
