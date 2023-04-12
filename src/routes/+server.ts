import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	throw new Error('This is a server error');
};
