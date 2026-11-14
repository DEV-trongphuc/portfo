import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { ragChatApiPlugin } from './lib/viteChatMiddleware';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react(), ragChatApiPlugin(env.GEMINI_API_KEY)],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        sourcemap: false,
        chunkSizeWarningLimit: 1000,
        rollupOptions: {
          output: {
            manualChunks(id) {
              if (id.includes('node_modules')) {
                if (id.includes('react')) return 'vendor-react';
                if (id.includes('framer-motion')) return 'vendor-framer';
                if (id.includes('lucide')) return 'vendor-lucide';
                return 'vendor';
              }
            }
          }
        }
      }
    };
});
