import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'git@github.com:mikkelam/mikkelam.com.git', // Update to point to your repository
  user: {
   name: 'Mikkel Alexander Madsen', // update to use your name
   email: 'mikkelam@icloud.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Successful!');
  }
);

