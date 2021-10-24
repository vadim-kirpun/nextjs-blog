import ReactMarkdown from 'react-markdown';

import { getPostData, getPostsFiles, removeExtension } from '@lib';
import { PostHeader, Wrapper } from '@modules/post-details';
import type { PostProps } from '@types';

const PostDetailsPage = ({ post }: PostProps) => {
  const { content, image, slug, title } = post;

  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <Wrapper>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown>{content}</ReactMarkdown>
    </Wrapper>
  );
};

interface Params {
  params: { slug: string };
}

export const getStaticProps = async ({ params }: Params) => ({
  props: { post: getPostData(params.slug) },
});

export const getStaticPaths = () => {
  const paths = getPostsFiles().map((fileName) => ({
    params: { slug: removeExtension(fileName) },
  }));

  return { paths, fallback: 'blocking' };
};

export default PostDetailsPage;
