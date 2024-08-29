import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Armen';

export const lastName = 'Uzunian';

export const description =
	"Polymath and Software Engineer dedicated to mastering complex problems through logic and precision. I bring relentless curiosity and disciplined focus to every challenge.";

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
