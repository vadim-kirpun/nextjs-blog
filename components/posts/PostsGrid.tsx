import { memo } from 'react';

import { IPost } from '@types';

import PostItem from './PostItem';
import { UnorderedList } from './styles/PostsGrid';

interface Props {
  posts: IPost[];
}

const PostsGrid = ({ posts }: Props) => (
  <UnorderedList>
    {posts.map((post) => (
      <PostItem key={post.slug} post={post} />
    ))}
  </UnorderedList>
);

export default memo(PostsGrid);
