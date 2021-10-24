import { memo } from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import type { IPost } from '@types';

import { ImageWrapper } from './styles/PostBody';

type Props = Pick<IPost, 'slug' | 'content'>;

const PostBody = ({ slug, content }: Props) => (
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
      code({ children }) {
        return (
          <SyntaxHighlighter language='javascript' style={atomDark}>
            {children[0]}
          </SyntaxHighlighter>
        );
      },
    }}
  >
    {content}
  </ReactMarkdown>
);

export default memo(PostBody);
