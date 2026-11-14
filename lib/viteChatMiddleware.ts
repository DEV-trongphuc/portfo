import type { Plugin } from 'vite';
import { handleRagChatHttp } from './ragEngine';
import { handleContactHttp } from './contactEngine';

export function ragChatApiPlugin(explicitApiKey?: string, explicitWebhookUrl?: string): Plugin {
  const attachMiddleware = (middlewares: {
    use: (
      route: string,
      handler: (req: import('node:http').IncomingMessage, res: import('node:http').ServerResponse) => void
    ) => void;
  }) => {
    middlewares.use('/api/chat', (req, res) => {
      void handleRagChatHttp(req, res, explicitApiKey);
    });
    middlewares.use('/api/contact', (req, res) => {
      void handleContactHttp(req, res, explicitWebhookUrl);
    });
  };

  return {
    name: 'turnio-rag-chat-api',
    configureServer(server) {
      attachMiddleware(server.middlewares);
    },
    configurePreviewServer(server) {
      attachMiddleware(server.middlewares);
    },
  };
}
