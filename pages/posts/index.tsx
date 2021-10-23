import { ContentWrapper, PostsGrid, Title } from '@components';

const AllPostsPage = () => (
  <ContentWrapper>
    <Title>All Posts</Title>
    <PostsGrid posts={[]} />
  </ContentWrapper>
);

export default AllPostsPage;
