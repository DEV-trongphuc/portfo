import type { IncomingMessage, ServerResponse } from 'node:http';
import { handleContactHttp } from '../lib/contactEngine';

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  return handleContactHttp(req, res, process.env.APPS_SCRIPT_WEBHOOK_URL);
}
