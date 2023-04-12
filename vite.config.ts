import { sentryVitePlugin } from '@sentry/vite-plugin';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';

const config = defineConfig(({ mode }) => {
	const isProduction = mode === 'production';
	const env = loadEnv(mode, process.cwd(), '');
	return {
		build: {
			sourcemap: true
		},
		plugins: [
			sveltekit(),
			isProduction
				? sentryVitePlugin({
						telemetry: false,
						org: env.PUBLIC_SENTRY_ORG,
						project: env.PUBLIC_SENTRY_PROJECT,
						authToken: env.SENTRY_AUTH_TOKEN,
						include: './svelte-kit/output'
				  })
				: ''
		],
		test: {
			include: ['src/**/*.{test,spec}.{js,ts}']
		}
	};
});

export default config;
