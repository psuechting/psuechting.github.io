// Renders public/og-image.png (1200×630), the card shown when the site is shared.
// Run `npm run build:og` after changing the name, title or tagline in profile.ts.
import { chromium } from 'playwright';
import { writeFileSync } from 'node:fs';
import { profile } from '../src/data/profile.ts';

const html = `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600&family=Inter:wght@400;600&display=swap" rel="stylesheet">
<style>
	html, body { margin: 0; width: 1200px; height: 630px; }
	body { box-sizing: border-box; padding: 72px 80px; background: #FAF8F5; color: #1A2744; font-family: Inter, sans-serif; display: flex; flex-direction: column; justify-content: space-between; border-left: 16px solid #A85533; }
	.name { font-family: 'Crimson Pro', serif; font-size: 84px; font-weight: 400; line-height: 1.1; margin: 0; }
	.name strong { font-weight: 600; }
	.title { font-size: 30px; color: #5F6675; margin: 18px 0 0; }
	.tagline { font-family: 'Crimson Pro', serif; font-style: italic; font-size: 34px; line-height: 1.35; color: #5F6675; max-width: 980px; margin: 0; }
	.url { font-size: 24px; font-weight: 600; color: #A85533; letter-spacing: 0.02em; margin: 0; }
</style></head><body>
	<div><h1 class="name"><strong>${profile.name.split(' ')[0]}</strong> ${profile.name.split(' ').slice(1).join(' ')}, ${profile.honorific}</h1><p class="title">${profile.title}</p></div>
	<p class="tagline">${profile.tagline}</p>
	<p class="url">psuechting.github.io</p>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
const png = await page.screenshot({ type: 'png' });
await browser.close();
writeFileSync(new URL('../public/og-image.png', import.meta.url), png);
console.log(`og-image.png written (${Math.round(png.length / 1024)} KB)`);
