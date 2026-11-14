import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

function sealApiKey(plainKey, cipherSecret) {
  const key = crypto.createHash('sha256').update(`turnio-rag-v1:${cipherSecret}`, 'utf8').digest();
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
  const encrypted = Buffer.concat([cipher.update(plainKey.trim(), 'utf8'), cipher.final()]);
  const authTag = cipher.getAuthTag();
  return `enc:v1:${iv.toString('base64')}:${authTag.toString('base64')}:${encrypted.toString('base64')}`;
}

function main() {
  const envLocalPath = path.join(ROOT_DIR, '.env.local');
  let rawKey = process.env.GEMINI_API_KEY || '';

  if (!rawKey && fs.existsSync(envLocalPath)) {
    const content = fs.readFileSync(envLocalPath, 'utf8');
    const m = content.match(/^\s*GEMINI_API_KEY\s*=\s*(.+?)\s*$/m);
    if (m) rawKey = m[1].replace(/^['"]|['"]$/g, '').trim();
  }

  if (!rawKey || rawKey.startsWith('enc:v1:')) {
    console.log('Key is already sealed or missing plain GEMINI_API_KEY.');
    return;
  }

  const cipherSecret = crypto.randomBytes(32).toString('base64url');
  const sealed = sealApiKey(rawKey, cipherSecret);

  const nextEnv = [
    '# Local server-side encrypted Gemini API credentials (gitignored - never exposed to browser)',
    `GEMINI_API_KEY_ENC=${sealed}`,
    `GEMINI_CIPHER_SECRET=${cipherSecret}`,
    '',
  ].join('\n');

  fs.writeFileSync(envLocalPath, nextEnv, 'utf8');
  console.log('[SEAL-KEY] Encrypted GEMINI_API_KEY into AES-256-GCM envelope in .env.local (plaintext removed).');
}

main();
