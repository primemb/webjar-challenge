import { Post } from "../models/Post";

const filterByCategory = (posts: Post[], categories: string[]) => {
  if (categories.length == 0) return posts;
  return posts.filter((post) => categories.includes(post.category));
};

const filterBySearch = (posts: Post[], search: string) => {
  if (search === "") return posts;
  return posts.filter(
    (post) =>
      post.title === search ||
      post.body.includes(search) ||
      post.author.includes(search)
  );
};

export const filterPosts = (
  posts: Post[],
  categories: string[],
  search: string
) => {
  const filterdCategories = filterByCategory(posts, categories);
  return filterBySearch(filterdCategories, search);
};
