import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Armen';

export const lastName = 'Uzunian';

export const description =
	"A Polymath and Software Engineer driven by a passion for learning and problem-solving. I thrive on questioning the deepest details to find the simplest answers, applying logic and rationality both in my work and in life. Whether I'm developing innovative applications, snowboarding in the winter, or jet skiing in the summer, I bring curiosity and a love for exploration to everything I do.";

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/mino9421' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/armenlevon/'
	},
	{
		platform: Platform.Twitter,
		link: 'https://x.com/'
	},
	{
		platform: Platform.StackOverflow,
		link: 'https://stackoverflow.com/users/11554173/armen'
	},
	{
		platform: Platform.Email,
		link: 'armenuzuniian@gmail.com'
	},
	{
		platform: Platform.Youtube,
		link: 'https://www.youtube.com'
	},
	{
		platform: Platform.Facebook,
		link: 'https://www.facebook.com'
	}
];

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'sass', 'svelte', 'ts');
