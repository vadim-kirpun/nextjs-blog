import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

import type { IPost } from '@types';

import { removeExtension } from './common';

const postsDirectory = join(process.cwd(), 'posts');

type PostMetadata = Omit<IPost, 'slug' | 'content'>;

export const getPostsFiles = () => readdirSync(postsDirectory);

export const getPostData = (postIdentifier: string): IPost => {
  const postSlug = removeExtension(postIdentifier);

  const filePath = join(postsDirectory, `${postSlug}.md`);
  const fileContent = readFileSync(filePath, 'utf-8');

  const { data, content } = matter(fileContent);

  return {
    slug: postSlug,
    ...(data as PostMetadata),
    content,
  };
};

export const getAllPosts = () => {
  const postFiles = readdirSync(postsDirectory);

  return postFiles
    .map((postFile) => getPostData(postFile))
    .sort((postA, postB) => (postA.date > postB.date ? -1 : 1));
};

export const getFeaturedPosts = () =>
  getAllPosts().filter((post) => post.isFeatured);
