import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

import { PostHeader, Wrapper, ImageWrapper } from '@modules/post-details';
import { getPostData, getPostsFiles, removeExtension } from '@lib';
import type { PostProps } from '@types';

const PostDetailsPage = ({ post }: PostProps) => {
  const { content, image, slug, title } = post;

  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <Wrapper>
      <PostHeader title={title} image={imagePath} />

      <ReactMarkdown
        components={{
          p({ node, children }) {
            const { tagName, properties }: any = node.children[0];

            if (tagName === 'img') {
              const { src, alt } = properties;
              return (
                <ImageWrapper>
                  <Image
                    src={`/images/posts/${slug}/${src}`}
                    alt={alt}
                    width={600}
                    height={300}
                  />
                </ImageWrapper>
              );
            }
            return <p>{children}</p>;
          },
        }}
      >
        {content}
      </ReactMarkdown>
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
