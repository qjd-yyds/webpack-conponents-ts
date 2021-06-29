import HtmlWebpackPlugin from 'html-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import { resolve } from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import Webpackbar from 'webpackbar';
import { webpackConfig } from './webpack.type';

const pageLisy = ['main', 'index', 'other'];
const config: webpackConfig = {
  mode: 'development',
  entry: {
    main: './src/main.ts',
    index: './src/pages/index/index.ts',
    other: './src/pages/other/other.ts',
    'better-draggable-ball': './src/components/better-draggable-ball/index.ts',
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: (pathData) => {
      if (pageLisy.includes(pathData.chunk?.name!)) {
        return 'js/pages/[name].[hash].js';
      }
      return 'js/components/[name].[hash].js';
    },
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'image/',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'font/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'index页面',
      filename: 'index.html',
      template: './src/pages/index/index.html',
      chunks: ['index', 'main'],
    }),
    new HtmlWebpackPlugin({
      title: 'other页面',
      filename: 'other.html',
      template: './src/pages/other/other.html',
      chunks: ['other', 'main'],
    }),
    new ESLintPlugin({
      extensions: ['ts', 'js'],
      exclude: '/node_modules/',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
    }),
    new Webpackbar({
      name: '构建中',
      color: 'green',
      profile: true,
      basic: true,
    }),
  ],
  // 优化
  optimization: {
    splitChunks: {
      // async表示只从异步加载得模块（动态加载import()）里面进行拆分
      // initial表示只从入口模块进行拆分
      // all表示以上两者都包括
      chunks: 'all',
    },
  },
};
export default config;
