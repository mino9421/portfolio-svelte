import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

import gazer_md from '$lib/md/projects/gazer.md?raw';
import deez_md from '$lib/md/projects/deez.md?raw';
import portfolio_md from '$lib/md/projects/portfolio.md?raw';
import poker_md from '$lib/md/projects/poker.md?raw';
import football_md from '$lib/md/projects/football.md?raw';


// Import images directly
import portfolioImg1 from '$lib/assets/projects/portfolio/portfolio_1.png';
import portfolioImg2 from '$lib/assets/projects/portfolio/portfolio_2.png';
import portfolioImg3 from '$lib/assets/projects/portfolio/portfolio_3.png';
import portfolioImg4 from '$lib/assets/projects/portfolio/portfolio_4.png';

import gazerImg1 from '$lib/assets/projects/gazer/gazer_1.png';
import gazerImg2 from '$lib/assets/projects/gazer/gazer_2.png';
import gazerImg3 from '$lib/assets/projects/gazer/gazer_3.png';

import poker_1 from '$lib/assets/projects/poker/poker_1.png';
import poker_2 from '$lib/assets/projects/poker/poker_2.png';
import poker_3 from '$lib/assets/projects/poker/poker_3.png';

import deez_1 from '$lib/assets/projects/deez/deez_1.png';
import deez_2 from '$lib/assets/projects/deez/deez_2.png';
import deez_3 from '$lib/assets/projects/deez/deez_3.png';

import football_1 from '$lib/assets/projects/football/football_1.png';
import football_2 from '$lib/assets/projects/football/football_2.png';
import football_3 from '$lib/assets/projects/football/football_3.png';


export const items: Array<Project> = [
	{
		slug: 'portfolio-svelte',
		color: '#5e95e3',
		description:
			portfolio_md,
		shortDescription:
			'A modular and customizable portfolio built with SvelteKit, TypeScript, and Tailwind CSS, allowing users to easily manage and expand their portfolio by adding skills, projects, experience, and education via Markdown files.',
		links: [{ to: 'https://github.com/mino9421/portfolio-svelte', label: 'GitHub' }, { to: 'https://mino9421.github.io/portfolio-svelte', label: 'Pages' }],
		logo: Assets.Svelte,
		name: 'Slick Portfolio',
		period: {
			from: new Date(2024, 8, 25), to: new Date(2024, 9, 3)
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
		links: [{ to: 'https://github.com/mino9421/deez-book', label: 'GitHub' }, { to: 'https://deez-book.vercel.app/', label: 'Vercel' }],
		logo: Assets.ReactJs,
		name: 'Deez',
		period: {
			from: new Date(2024, 4, 10), to: new Date(2024, 4, 20)
		},
		skills: getSkills('reactjs', 'ts', 'js', 'tailwind', 'prisma', 'vite', 'trpc', 'drizzle' ),
		type: 'Social Media',
		screenshots: [
			{
				label: '1',
				src: deez_1
			},
			{
				label: '2',
				src: deez_2
			},
			{
				label: '3',
				src: deez_3
			}
		]
	},
	{
		slug: 'Sports League',
		color: '#ff3e00',
		description: football_md,
		shortDescription:
		'A sports league platform built with Nuxt.js, Vue, and Tailwind CSS, providing real-time standings, match schedules, and statistics for soccer leagues. It integrates cutting-edge tools like UnoCSS, Chart.js, and Supabase for a smooth and data-driven experience.',
		links: [{ to: 'https://github.com/mino9421/sports-league-ui', label: 'GitHub' }, { to: 'https://sports-league-ui.vercel.app/', label: 'Vercel' }],
		logo: Assets.VueJs,
		name: 'Sports League',
		period: {
			from: new Date(2024, 9, 1), to: new Date(2024, 9, 5)
		},
		skills: getSkills('vue', 'ts', 'js', 'tailwind', 'prisma', 'vite', 'vite', 'unocss', 'express' ),
		type: 'Data-Driven Application',
		screenshots: [
			{
				label: '1',
				src: football_1
			},
			{
				label: '2',
				src: football_2
			},
			{
				label: '3',
				src: football_3
			}
		]
	},
	{
		slug: "Poker Ultimte Texas Hold'em",
		color: '#ff3e00',
		description: poker_md,
		shortDescription:
		"Built with Vue.js and Nuxt.js, this Ultimate Texas Hold'em Poker game lets players compete against a computer dealer with realistic gameplay and dynamic betting rounds.",
		links: [{ to: 'https://github.com/mino9421/poker-vue', label: 'GitHub' }, { to: 'https://poker-vue.vercel.app/', label: 'Vercel' }],
		logo: Assets.Nuxt,
		name: "Poker Ultimte Texas Hold'em",
		period: {
			from: new Date(2024, 8, 1), to: new Date(2024, 8, 10)
		},
		skills: getSkills('ts', 'vue', 'nuxt', 'tailwind', 'unocss', 'vite', 'vitest'),
		type: 'Browser-Based Poker Game',
		screenshots: [
			{
				label: '1',
				src: poker_1
			},
			{
				label: '2',
				src: poker_2
			},
			{
				label: '3',
				src: poker_3
			}
		]
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
			from: new Date(2024, 3, 22), to: new Date(2024, 3, 31)
		},
		skills: getSkills('unity', 'csharp'),
		type: 'Dungeon Crawler Game',
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
