import { ContentWrapper, PostsGrid, Title } from '@components';
import type { PostsProps } from '@types';
import { getAllPosts } from '@lib';

const AllPostsPage = ({ posts }: PostsProps) => (
  <ContentWrapper>
    <Title>All Posts</Title>
    <PostsGrid posts={posts} />
  </ContentWrapper>
);

export const getStaticProps = async () => ({
  props: { posts: getAllPosts() },
  revalidate: 60,
});

export default AllPostsPage;
