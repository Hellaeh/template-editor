import { extname } from 'node:path';

/**
 * Helper function to return mime types
 *
 * @param { string } path
 */
export const mimeType = (path) => {
	switch (extname(path)) {
		case '.html':
			return 'text/html';
		case '.js':
			return 'text/javascript';
		case '.css':
			return 'text/css';
		default:
			return 'text/plain';
	}
};
