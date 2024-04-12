import { loadEnv, type ConfigEnv } from 'vite';
import { resolve } from 'path';
import qiankun from 'vite-plugin-qiankun';
import react from '@vitejs/plugin-react';

const isProduction = process.env.NODE_ENV === 'production';

export default ({ command, mode }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd());
  const { VITE_QIANKUN_NAME } = env;
  const APP_NAME = VITE_QIANKUN_NAME;

  return {
    resolve: {
      alias: {
        '@': resolve(__dirname, '../src'),
      },
    },
    plugins: [
      // 添加qiankun插件
      qiankun(APP_NAME, {
        useDevMode: isProduction ? false : true, // useDevMode = true 则不使用热更新插件，useDevMode = false 则能使用热更新，但无法作为子应用加载
      }),
      react(),
    ],
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            // 引入全局base.less
            // hack: `true; @import (reference) "${resolve(
            //   'src/assets/base.less'
            // )}";`,
          },
          javascriptEnabled: true,
        },
      },
    },
  };
};
