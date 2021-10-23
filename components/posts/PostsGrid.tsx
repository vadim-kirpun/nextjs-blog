import { memo } from 'react';

import type { PostsProps } from '@types';

import PostItem from './PostItem';
import { UnorderedList } from './styles/PostsGrid';

const PostsGrid = ({ posts }: PostsProps) => (
  <UnorderedList>
    {posts.map((post) => (
      <PostItem key={post.slug} post={post} />
    ))}
  </UnorderedList>
);

export default memo(PostsGrid);
