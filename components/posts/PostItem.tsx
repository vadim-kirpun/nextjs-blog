import { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import type { PostProps } from '@types';

import { ListItem, ImageWrapper, Content } from './styles/PostItem';

const PostItem = ({ post }: PostProps) => {
  const { title, image, excerpt, date, slug } = post;

  const formattedDate = new Date(date).toLocaleDateString('en-EN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <ListItem>
      <Link href={`/posts/${slug}`}>
        <a>
          <ImageWrapper>
            <Image
              src={`/images/posts/${slug}/${image}`}
              layout='responsive'
              alt={title}
              width={300}
              height={200}
            />
          </ImageWrapper>

          <Content>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </Content>
        </a>
      </Link>
    </ListItem>
  );
};

export default memo(PostItem);
