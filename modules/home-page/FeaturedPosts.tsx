import { memo } from 'react';

import { IPost } from '@types';
import { PostsGrid } from '@components';

import { Wrapper } from './styles/FeaturedPosts';

interface Props {
  posts: IPost[];
}

const FeaturedPosts = ({ posts }: Props) => (
  <Wrapper>
    <h2>Featured Posts</h2>
    <PostsGrid posts={posts} />
  </Wrapper>
);

export default memo(FeaturedPosts);
