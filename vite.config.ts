import { ConfigEnv } from 'vite';
import { getViteDevConfig } from './config/dev.config';

// https://vitejs.dev/config/
export default async ({ command, mode }: ConfigEnv) => {
  return getViteDevConfig({ command, mode });
};
