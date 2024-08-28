import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelor degree of Computer Science',
		description: '',
		location: 'Toronto',
		logo: Assets.Unknown,
		name: '',
		organization: 'George Brown',
		period: { from: new Date(2019, 9, 1), to: new Date(2022, 5, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['Advanced Mathematics', 'Algorithms and Data structures', 'Cybersecurity', 'Machine Learning Python', 'Java Spring Boot', 'C# ASP.NET Core MVC', 'PHP Laravel', 'JavaScript', 'React', 
			'Angular', 'Swift iOS Development', 'Android Development', 'React Native', 'Ionic'
		]
	},
	{
		degree: 'Computer Engineering',
		description: 'Advanced Mathematic And Programming',
		location: 'Toronto',
		logo: Assets.Unknown,
		name: '',
		organization: 'Seneca',
		period: { from: new Date(2016, 0, 1), to: new Date(2018, 5, 1) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['Calculus', 'Assembly', 'C', 'C++', 'Computer Architecture', 'Linux Unix', 'Cloud AWS AZURE GCP',
			 'Electronics Engineering', 'CompTIA',
			  'Cisco', 'Fortinet', 'CWTA', 'IEEE', 'A+', 'CCNA' ]
	},
	{
		degree: 'Highschool Diploma',
		description: '',
		location: 'Toronto',
		logo: Assets.Unknown,
		name: '',
		organization: "L'Amoreaux Collegiate Institute",
		period: { from: new Date(2014, 0, 1), to: new Date(2016, 5, 1) },
		shortDescription: '',
		slug: 'dummy-education-item-3',
		subjects: ['Advanced Algebra', 'Java', 'Physics', 'Data Structures & Algorithms' ]
	},
	{
		degree: 'Highschool Diploma',
		description: 'Advanced Mathematic And Programming',
		location: 'Armenia',
		logo: Assets.Unknown,
		name: '',
		organization: 'Mkhitar Sebastatsi Educational Complex',
		period: { from: new Date(2008, 0, 1), to: new Date(2011, 5, 1) },
		shortDescription: '',
		slug: 'dummy-education-item-4',
		subjects: ['Algebra', 'Digital Logic & Electronics', 'Turbo Pascal', 'Visual Basic' ]
	}
];

export const title = 'Education';
