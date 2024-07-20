import { publish } from 'gh-pages';

publish(
	'build', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'git@github.com:mikkelam/mikkelam.com.git',
		dotfiles: true
	},
	() => {
		console.log('Deploy Successful!');
	}
);
