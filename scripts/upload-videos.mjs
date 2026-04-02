#!/usr/bin/env node
/**
 * Upload hero and tour videos to Vercel Blob.
 *
 * BEFORE running:
 *   1. Go to Vercel Dashboard → your project → Storage → Connect Blob store
 *      (or create a new one).
 *   2. Copy the BLOB_READ_WRITE_TOKEN from the .env.local snippet Vercel shows you.
 *   3. Set it in your shell:
 *        export BLOB_READ_WRITE_TOKEN="vercel_blob_rw_XXXXXXXXX"
 *   4. Run:
 *        node scripts/upload-videos.mjs
 *
 * After uploading, copy the printed env-var lines into Vercel
 * Dashboard → Project → Settings → Environment Variables.
 */

import { put } from '@vercel/blob';
import { createReadStream, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT      = join(__dirname, '..');

if (!process.env.BLOB_READ_WRITE_TOKEN) {
  console.error('❌  BLOB_READ_WRITE_TOKEN is not set. See instructions at top of this file.');
  process.exit(1);
}

const videos = [
  {
    localPath: join(ROOT, 'public', 'videos', 'untitled.webm'),
    blobName:  'sector-f-hero.webm',
    envKey:    'NEXT_PUBLIC_HERO_VIDEO_URL',
  },
  {
    localPath: join(ROOT, 'public', 'videos', 'Sector-F-DHA-Phase-1.webm'),
    blobName:  'sector-f-tour.webm',
    envKey:    'NEXT_PUBLIC_TOUR_VIDEO_URL',
  },
];

async function uploadVideo({ localPath, blobName, envKey }) {
  const size = (statSync(localPath).size / 1_000_000).toFixed(1);
  console.log(`⬆  Uploading ${blobName}  (${size} MB)…`);

  const stream = createReadStream(localPath);
  const { url } = await put(blobName, stream, {
    access: 'public',
    contentType: 'video/webm',
    token: process.env.BLOB_READ_WRITE_TOKEN,
  });

  console.log(`✅  ${blobName} → ${url}`);
  return { envKey, url };
}

(async () => {
  const results = [];
  for (const v of videos) {
    try {
      results.push(await uploadVideo(v));
    } catch (err) {
      console.error(`❌  Failed to upload ${v.blobName}:`, err.message);
    }
  }

  if (results.length) {
    console.log('\n─── Paste these into Vercel Environment Variables ───');
    for (const { envKey, url } of results) {
      console.log(`${envKey}="${url}"`);
    }
    console.log('──────────────────────────────────────────────────────\n');
  }
})();
