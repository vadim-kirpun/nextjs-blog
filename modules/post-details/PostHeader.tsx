import { memo } from 'react';

import { Header, PostTitle, StyledImage } from './styles/PostHeader';

interface Props {
  title: string;
  image: string;
}

const PostHeader = ({ title, image }: Props) => (
  <Header>
    <PostTitle>{title}</PostTitle>
    <StyledImage src={image} alt={title} width={200} height={150} />
  </Header>
);

export default memo(PostHeader);
