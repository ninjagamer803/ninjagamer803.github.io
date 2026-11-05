#!/usr/bin/env node
/**
 * capture-screenshot.mjs — capture a 1280x720 gameplay screenshot of a game in games/<slug>/.
 *
 * Usage:
 *   node tools/capture-screenshot.mjs --game games/my-game --out games/my-game/screenshot.png
 *   node tools/capture-screenshot.mjs --url http://127.0.0.1:8734/index.html --out shot.png --wait 3500
 *
 * Requires: puppeteer + chrome-headless-shell (see README in HOWTO-ADD-A-GAME.md).
 * The game server must be running (script serves the folder itself when --game is given).
 *
 * This is the exact script used to capture games/hamster-apocalypse/screenshot.png.
 */
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import puppeteer from 'puppeteer';

const args = process.argv.slice(2);
const get = (k, d) => {
  const i = args.indexOf(k);
  return i >= 0 && args[i + 1] ? args[i + 1] : d;
};
const gameDir = get('--game', 'games/hamster-apocalypse');
const out = get('--out', path.join(gameDir, 'screenshot.png'));
const waitMs = parseInt(get('--wait', '3500'), 10);
const startKey = get('--start-key', 'Space');

const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.md': 'text/plain' };

function serve(dir) {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const urlPath = decodeURIComponent(new URL(req.url, 'http://x').pathname);
      let file = path.join(dir, urlPath === '/' ? 'index.html' : urlPath);
      if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) file = path.join(dir, 'index.html');
      if (!fs.existsSync(file)) { res.writeHead(404); return res.end('not found'); }
      res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream' });
      fs.createReadStream(file).pipe(res);
    });
    server.listen(0, '127.0.0.1', () => resolve({ server, port: server.address().port }));
  });
}

const { server, port } = await serve(gameDir);
const url = get('--url', `http://127.0.0.1:${port}/index.html`);

const exe = process.env.CHROME_EXE || fs.readdirSync(`${process.env.HOME}/.cache/puppeteer/chrome-headless-shell`)
  .flatMap((v) => fs.readdirSync(`${process.env.HOME}/.cache/puppeteer/chrome-headless-shell/${v}`))
  .find((f) => f === 'chrome-headless-shell');
const candidate = `${process.env.HOME}/.cache/puppeteer/chrome-headless-shell`;
const execPath = process.env.CHROME_EXE || `${candidate}/${fs.readdirSync(candidate)[0]}/chrome-headless-shell-linux64/chrome-headless-shell`;

const browser = await puppeteer.launch({
  headless: true,
  executablePath: execPath,
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--window-size=1280,720'],
  defaultViewport: { width: 1280, height: 720 },
});
const page = await browser.newPage();
page.on('pageerror', (e) => console.log('[pageerror]', String(e).slice(0, 200)));
await page.goto(url, { waitUntil: 'load', timeout: 30000 });
await new Promise((r) => setTimeout(r, waitMs));
console.log('canvas:', await page.evaluate(() => !!document.querySelector('canvas')));

// Dismiss title/menu overlay if present (Hamster Apocalypse: click / Space)
await page.evaluate((key) => {
  const o = document.querySelector('#overlay');
  if (o && !o.classList.contains('hidden')) {
    o.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    window.dispatchEvent(new KeyboardEvent('keydown', { code: key, key: key === 'Space' ? ' ' : key, bubbles: true }));
  }
}, startKey);
await new Promise((r) => setTimeout(r, 600));
await page.evaluate(() => {
  const o = document.querySelector('#overlay');
  if (o && !o.classList.contains('hidden')) o.classList.add('hidden');
  const l = document.querySelector('#legend');
  if (l) l.classList.add('hidden');
});
await new Promise((r) => setTimeout(r, 2500));

await page.screenshot({ path: out });
await browser.close();
server.close();
console.log('saved:', out, fs.statSync(out).size, 'bytes');
