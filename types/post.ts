export interface IPost {
  title: string;
  image: string;
  date: string;
  slug: string;
  excerpt: string;
  isFeatured: boolean;
  content: string;
}

export interface PostsProps {
  posts: IPost[];
}

export interface PostProps {
  post: IPost;
}
