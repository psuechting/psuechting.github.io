// Prints the built /cv/ page to dist/peter-suechting-cv.pdf.
// Run after `astro build`: `npm run build:cv`. Needs Playwright's Chromium (`npx playwright install chromium`).
import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join } from 'node:path';
import { chromium } from 'playwright';

const DIST = new URL('../dist/', import.meta.url).pathname;
const OUTPUT = join(DIST, 'peter-suechting-cv.pdf');
const TYPES = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml' };

// Serve dist/ so absolute asset paths (/_astro/...) resolve.
const server = createServer((req, res) => {
	let path = join(DIST, decodeURIComponent(new URL(req.url, 'http://x').pathname));
	if (existsSync(path) && statSync(path).isDirectory()) path = join(path, 'index.html');
	if (!existsSync(path)) return res.writeHead(404).end();
	res.writeHead(200, { 'Content-Type': TYPES[extname(path)] ?? 'application/octet-stream' });
	createReadStream(path).pipe(res);
});
await new Promise((resolve) => server.listen(0, resolve));
const { port } = server.address();

const browser = await chromium.launch();
try {
	const page = await browser.newPage();
	await page.goto(`http://localhost:${port}/cv/`, { waitUntil: 'networkidle' });
	await page.evaluate(() => document.fonts.ready);
	await page.emulateMedia({ media: 'print' });
	await page.pdf({
		path: OUTPUT,
		format: 'Letter',
		printBackground: true,
		margin: { top: '0.6in', bottom: '0.6in', left: '0.7in', right: '0.7in' },
	});
	console.log(`CV written to ${OUTPUT}`);
} finally {
	await browser.close();
	server.close();
}
