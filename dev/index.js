import fs from 'node:fs/promises';
import { IncomingMessage, ServerResponse, createServer } from 'node:http';

import esbuild from 'esbuild';

import { mimeType } from './utils.js';

const OUT_DIR = 'dev/out';

const context = await esbuild.context({
	entryPoints: ['dev/app.tsx'],
	bundle: true,
	jsx: 'automatic',
	minify: false,
	outdir: OUT_DIR,
	sourcemap: 'linked',
	loader: {
		'.module.css': 'local-css',
		'.css': 'css',
	},
	logLevel: 'debug',
});

// Rebuild on source files change
await context.watch();
// For live reloading
await context.serve({ port: 3001 });

/**
 * @param { IncomingMessage } request
 * @param { ServerResponse } response
 */
const listener = async ({ url }, response) => {
	if (!url) {
		return response.writeHead(400).end('400 Bad Request');
	}

	// Path traversal prevention
	const { pathname } = new URL(url, 'http://localhost:3000');

	if (pathname === '/') {
		return response.end(await fs.readFile('dev/index.html'));
	}

	const path = OUT_DIR + pathname;

	try {
		const content = await fs.readFile(path);
		const mime = mimeType(path);
		response.writeHead(200, { 'Content-Type': mime }).end(content);
	} catch {
		response.writeHead(404).end('404 Not Found');
	}
};

createServer(listener).listen(3000, () =>
	console.log('localhost:3000 listening'),
);
