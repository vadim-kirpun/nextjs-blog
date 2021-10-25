import Head from 'next/head';

import { PostBody, PostHeader, Wrapper } from '@modules/post-details';
import { getImagePath, removeExtension } from '@helpers';
import { getPostData, getPostsFiles } from '@lib';
import type { PostProps } from '@types';

const PostDetailsPage = ({ post }: PostProps) => {
  const { content, image, slug, excerpt, title } = post;

  return (
    <Wrapper>
      <Head>
        <title>{title}</title>
        <meta name='description' content={excerpt} />
      </Head>

      <PostHeader title={title} image={getImagePath(slug, image)} />
      <PostBody content={content} slug={slug} />
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
