import ReactMarkdown from 'react-markdown';

import { Wrapper, PostHeader } from '@modules/post-details';

const DUMMY_POST = {
  title: 'Getting Started with NextJS',
  image: 'getting-started-nextjs.jpg',
  date: '1996-07-13',
  slug: 'getting-started-with-next-js',
  content: '# This is a first post',
};

const PostDetailsPage = () => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <Wrapper>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </Wrapper>
  );
};

export default PostDetailsPage;
