// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://anjasfedo.github.io',
	trailingSlash: 'always',
	integrations: [
		sitemap(),
		starlight({
			title: 'Anjasfedo',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/anjasfedo' }],
			head: [
				{
					tag: 'script',
					attrs: { type: 'application/ld+json' },
					content: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'Person',
						name: 'M. Anjasfedo Afridiansah',
						url: 'https://anjasfedo.github.io',
						image: 'https://anjasfedo.github.io/profile-circle.webp',
						jobTitle: 'Software Engineer',
						sameAs: [
							'https://github.com/anjasfedo',
							'https://linkedin.com/in/m-anjasfedo-afridiansah',
						],
					}),
				},
			],
			sidebar: [
				{ label: 'About', slug: 'about' },
				{
					label: 'Experience',
					items: [{ autogenerate: { directory: 'experience' } }],
				},
				{
					label: 'Projects',
					items: [{ autogenerate: { directory: 'projects' } }],
				},
				{
					label: 'Certificates',
					items: [{ autogenerate: { directory: 'certificates' } }],
				},
				{ label: 'Uses', slug: 'uses' },
				{ label: 'Contact', slug: 'contact' },
			],
		}),
	],
});
