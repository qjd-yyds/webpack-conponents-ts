import { Configuration } from 'webpack';

export interface Iproxy {
  [name: string]: {
    target: string;
    // 接受除了https以外服务器
    secure: boolean;
    pathRewrite: any;
  };
}
export interface DevServer {
  contentBase?: string;
  compress?: boolean;
  port?: number;
  // 打开浏览器
  open?: boolean;
  // 不打印打包状态
  noInfo?: boolean;
  // 广播
  bonjour?: boolean;
  // 使用ip打开
  useLocalIp?: boolean;
  stats?: string;
  // 代理
  proxy?: Iproxy;
}
export interface webpackConfig extends Configuration {
  devServer?: DevServer;
}
