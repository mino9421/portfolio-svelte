import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

import adp_md from '$lib/md/experiences/adp.md?raw';
import gbc_md from '$lib/md/experiences/gbc.md?raw';
import inone_md from '$lib/md/experiences/inone.md?raw';
import operation_md from '$lib/md/experiences/operation.md?raw';

export const items: Array<Experience> = [
	{
		slug: 'Intermediate Software Engineer',
		company: 'ADP',
		description:  adp_md,
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Toronto',
		period: { from: new Date(2022, 9, 1), to: new Date(2024, 6, 1) },
		skills: getSkills('ts', 'js', 'reactjs', 'tailwind', 'csharp', 'reactjs', 'python', 'vue', 'vite', 'vitest', 'prisma', 'docker', 'firebase', 'kubernetes', 'postgresql'),
		name: 'Intermediate Software Engineer',
		color: 'red',
		links: [],
		logo: Assets.ADP,
		shortDescription: 'Creating awesome tools for developers.'
	},
	{
		slug: 'Computer Science Teaching Assistant',
		company: 'George Brown',
		description:  gbc_md,
		contract: ContractType.PartTime,
		type: 'Software Development',
		location: 'Toronto',
		period: { from: new Date(2021, 0, 1), to: new Date(2022, 8, 1) },
		skills: getSkills('ts', 'sass', 'css', 'html', 'js', 'reactjs', 'angular', 'csharp', 'docker', 'python', 'postgresql', 'node', 'firebase'),
		name: 'Computer Science Teaching Assistant',
		color: 'blue',
		links: [],
		logo: Assets.GB,
		shortDescription: 'Assisting professors support students and tutoring students after classes.'
	},
	{
		slug: 'Software Engineer',
		company: 'inOne Mobile Wallet',
		description:  inone_md,
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Armenia',
		period: { from: new Date(2018, 0, 1), to: new Date(2021, 0, 1) },
		skills: getSkills('css', 'html', 'js', 'react', 'redux', 'sass', 'reactjs', 'python', 'docker', 'mongodb', 'express', 'jest'),
		name: 'Junior Software Engineer',
		color: 'green',
		links: [],
		logo: Assets.Inone,
		shortDescription: 'Implementing application for users to shop smart and track their spendings.'
	},
	{
		slug: 'Operation Management',
		company: 'Avante',
		description:  operation_md,
		contract: ContractType.FullTime,
		type: 'Operation Management',
		location: 'Toronto',
		period: { from: new Date(2016, 0, 1), to: new Date(2018, 0, 1) },
		skills: getSkills(),
		name: 'Operation Management',
		color: 'green',
		links: [],
		logo: Assets.Avante,
		shortDescription: 'Streamlined operations and ensured swift emergency response through innovative software development and communication management.'
	}
];

export const title = 'Experience';
