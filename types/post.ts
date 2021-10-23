export interface IPost {
  title: string;
  image: string;
  excerpt: string;
  date: string;
  slug: string;
}

export interface PostsProps {
  posts: IPost[];
}
