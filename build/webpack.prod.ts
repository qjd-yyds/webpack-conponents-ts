import { merge } from 'webpack-merge';
import common from './webpack.common';

const config = merge(common, {
  // 映射
  devtool: 'eval',
  // 打包模式
  mode: 'production',
});
export default config;
