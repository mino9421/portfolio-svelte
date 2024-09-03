import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

import gazer_md from '$lib/md/projects/gazer.md?raw';
import deez_md from '$lib/md/projects/deez.md?raw';
import portfolio_md from '$lib/md/projects/portfolio.md?raw';


// Import images directly
import portfolioImg1 from '$lib/assets/projects/portfolio/portfolio_1.png';
import portfolioImg2 from '$lib/assets/projects/portfolio/portfolio_2.png';
import portfolioImg3 from '$lib/assets/projects/portfolio/portfolio_3.png';
import portfolioImg4 from '$lib/assets/projects/portfolio/portfolio_4.png';

import gazerImg1 from '$lib/assets/projects/gazer/gazer_1.png';
import gazerImg2 from '$lib/assets/projects/gazer/gazer_2.png';
import gazerImg3 from '$lib/assets/projects/gazer/gazer_3.png';

export const items: Array<Project> = [
	{
		slug: 'portfolio-svelte',
		color: '#5e95e3',
		description:
			portfolio_md,
		shortDescription:
			'A modular and customizable portfolio built with SvelteKit, TypeScript, and Tailwind CSS, allowing users to easily manage and expand their portfolio by adding skills, projects, experience, and education via Markdown files.',
		links: [{ to: 'https://github.com/mino9421/portfolio-svelte', label: 'GitHub' }],
		logo: Assets.Svelte,
		name: 'Slick Portfolio',
		period: {
			from: new Date()
		},
		skills: getSkills('svelte', 'ts', 'js', 'tailwind', 'unocss', 'sass', 'node', 'html'),
		type: 'Website Template',
		screenshots: [
			{
				label: '1',
				src: portfolioImg1
			},
			{
				label: '2',
				src: portfolioImg2
			},
			{
				label: '3',
				src: portfolioImg3
			},
			{
				label: '4',
				src: portfolioImg4
			}
		]
	},
	{
		slug: 'deez',
		color: '#ff3e00',
		description: deez_md,
		shortDescription:
		'A social media platform built with Next.js, tRPC, and Prisma, where users communicate solely through emojis. It features modern tools like Tailwind CSS, Drizzle, and NextAuth.js for a seamless and secure experience.',
		links: [{ to: 'https://github.com/mino9421/deez-book', label: 'GitHub' }],
		logo: Assets.ReactJs,
		name: 'Deez',
		period: {
			from: new Date()
		},
		skills: getSkills('reactjs', 'ts', 'js', 'tailwind', 'prisma', 'vite', 'trpc', 'drizzle' ),
		type: 'Website Template',
	},
	{
		slug: 'Gazer',
		color: '#ff3e00',
		description: gazer_md,
		shortDescription:
		'Semi-Procedural RPG Dungeon Crawler: Infinity',
		links: [{ to: 'https://brineshrimp.itch.io/nightmare-of-the-gazer', label: 'itch.io' }],
		logo: Assets.Unity,
		name: 'Gazer',
		period: {
			from: new Date()
		},
		skills: getSkills('unity', 'csharp'),
		type: 'Website Template',
		screenshots: [
			{
				label: '1',
				src: gazerImg1
			},
			{
				label: '2',
				src: gazerImg2
			},
			{
				label: '3',
				src: gazerImg3
			}
		]
	},
];

export const title = 'Projects';
