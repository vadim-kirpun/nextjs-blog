import { ContentWrapper, PostsGrid, Title } from '@components';
import { getAllPosts } from '@lib/posts-util';
import type { PostsProps } from '@types';

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
