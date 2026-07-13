// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Anjasfedo',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/anjasfedo' }],
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
