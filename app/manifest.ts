import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
	return {
		id:"/",
		name: 'Next.js App',
		short_name: 'Next.js App',
		description: 'Next.js App',
		start_url: '/',
		display: 'standalone',
		background_color: '#fff',
		theme_color: '#fff',
		"launch_handler": {
			"client_mode": ["navigate-existing", "auto"]
		},
		"orientation": "portrait",
		icons: [
			{
				"src": "https://mi-pwa-gray.vercel.app/icon-192.png",
				"sizes": "192x192",
				"type": "image/png",
				"purpose": "any"
			},
			{
				"src": "https://mi-pwa-gray.vercel.app/icon-512.png",
				"sizes": "512x512",
				"type": "image/png",
				"purpose": "any"
			}
		],
	}
}
