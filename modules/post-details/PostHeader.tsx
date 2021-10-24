import { memo } from 'react';

import type { IPost } from '@types';

import { Header, PostTitle, StyledImage } from './styles/PostHeader';

type Props = Pick<IPost, 'title' | 'image'>;

const PostHeader = ({ title, image }: Props) => (
  <Header>
    <PostTitle>{title}</PostTitle>
    <StyledImage src={image} alt={title} width={200} height={150} />
  </Header>
);

export default memo(PostHeader);
