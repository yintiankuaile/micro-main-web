import { defineConfig, loadEnv, type ConfigEnv } from 'vite';
import getViteShareConfig from './share.config';

export const getViteDevConfig = ({ command, mode }: ConfigEnv) => {
  const config = getViteShareConfig({ command, mode });
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  // const env = loadEnv(mode, process.cwd(), '')
  const env = loadEnv(mode, process.cwd());
  const { VITE_BASE_PATH } = env;
  const devConfig = command === 'serve' ? { base: VITE_BASE_PATH } : {};

  return defineConfig({
    ...config,
    server: {
      host: '0.0.0.0', // 指定监听的IP地址
      open: true, // 开发服务器启动时，自动在浏览器打开
      strictPort: true, // 若端口已被占用，就尝试下一个可用端口
      https: false, // 不开启 https 服务
      cors: true, // 允许跨域
    },
    ...devConfig,
  });
};
