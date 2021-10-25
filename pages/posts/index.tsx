import Head from 'next/head';

import { ContentWrapper, PostsGrid, Title } from '@components';
import type { PostsProps } from '@types';
import { getAllPosts } from '@lib';

const AllPostsPage = ({ posts }: PostsProps) => (
  <ContentWrapper>
    <Head>
      <title>All Posts</title>
      <meta
        name='description'
        content='A list of all programming-related tutorials and posts'
      />
    </Head>

    <Title>All Posts</Title>
    <PostsGrid posts={posts} />
  </ContentWrapper>
);

export const getStaticProps = () => ({
  props: { posts: getAllPosts() },
  revalidate: 60,
});

export default AllPostsPage;
