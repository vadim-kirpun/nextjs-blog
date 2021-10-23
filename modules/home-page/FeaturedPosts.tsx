import { memo } from 'react';

import type { PostsProps } from '@types';
import { ContentWrapper, PostsGrid, Title } from '@components';

const FeaturedPosts = ({ posts }: PostsProps) => (
  <ContentWrapper>
    <Title>Featured Posts</Title>
    <PostsGrid posts={posts} />
  </ContentWrapper>
);

export default memo(FeaturedPosts);
