import { Hero, FeaturedPosts } from '@modules/home-page';
import type { IPost } from '@types';

const posts: IPost[] = [
  {
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.jpg',
    excerpt: 'NextJS is a React framework for production.',
    date: '1996-07-13',
    slug: 'getting-started-with-next-js',
  },
];

const HomePage = () => (
  <>
    <Hero />
    <FeaturedPosts posts={posts} />
  </>
);

export default HomePage;
