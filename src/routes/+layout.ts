// src/routes/+layout.ts
export const load = async ({ url }) => {
	return { pathname: url.pathname };
};
