// Prints the built /cv/ and /resume/ pages to PDFs in dist/.
// Run after `astro build`: `npm run build:cv`. Needs Playwright's Chromium (`npx playwright install chromium`).
import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join } from 'node:path';
import { chromium } from 'playwright';

const DIST = new URL('../dist/', import.meta.url).pathname;
const TYPES = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml' };
const DOCS = [
	{ path: '/cv/', file: 'peter-suechting-cv.pdf', margin: '0.6in 0.7in' },
	{ path: '/resume/', file: 'peter-suechting-resume.pdf', margin: '0.3in 0.5in' },
];

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
	for (const doc of DOCS) {
		const [vertical, horizontal] = doc.margin.split(' ');
		const page = await browser.newPage();
		await page.goto(`http://localhost:${port}${doc.path}`, { waitUntil: 'networkidle' });
		await page.evaluate(() => document.fonts.ready);
		await page.emulateMedia({ media: 'print' });
		const output = join(DIST, doc.file);
		await page.pdf({
			path: output,
			format: 'Letter',
			printBackground: true,
			margin: { top: vertical, bottom: vertical, left: horizontal, right: horizontal },
		});
		await page.close();
		console.log(`${doc.path} -> ${output}`);
	}
} finally {
	await browser.close();
	server.close();
}
