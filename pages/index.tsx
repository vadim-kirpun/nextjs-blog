import { ContentWrapper, PostsGrid, Title } from '@components';
import { Hero } from '@modules/home-page';
import type { PostsProps } from '@types';
import { getFeaturedPosts } from '@lib';

const HomePage = ({ posts }: PostsProps) => (
  <>
    <Hero />

    <ContentWrapper>
      <Title>Featured Posts</Title>
      <PostsGrid posts={posts} />
    </ContentWrapper>
  </>
);

export const getStaticProps = async () => ({
  props: { posts: getFeaturedPosts() },
  revalidate: 60,
});

export default HomePage;
