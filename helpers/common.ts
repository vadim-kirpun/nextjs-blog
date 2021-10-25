export const removeExtension = (fileName: string) =>
  fileName.replace(/\.md$/, '');

export const getImagePath = (slug: string, image: string) =>
  `/images/posts/${slug}/${image}`;
