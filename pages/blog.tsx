import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import React, { useTransition } from "react";
import FilterSidebar from "../components/FilterSidebar/FilterSidebar";
import PostsList from "../components/Posts/PostsList/PostsList";
import { Category } from "../models/Category";
import { Post } from "../models/Post";
import { getCategories } from "../services/getCategories";
import { getPosts } from "../services/getPosts";
import { stripHtml } from "string-strip-html";
import SearchInput from "../components/SearchInput/SearchInput";
import { useAppDispatch } from "../store/hooks";
import { searchFilter } from "../store/filter-sclice";
const Blog = ({
  posts,
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const pageTitle = "وبلاگ";

  const [_, startTransition] = useTransition();
  const dispatch = useAppDispatch();

  const searchChangeHandler = (value: string) => {
    startTransition(() => {
      dispatch(searchFilter(value));
    });
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className="w-full h-full flex flex-col mt-10 lg:mt-20">
        <h3 className="text-center font-extrabold text-3xl mb-12 md:mb-16">
          وبلاگ
        </h3>
        <SearchInput onChange={searchChangeHandler} />
        <div className="w-full custom-container  flex items-start justify-start gap-16 mb-24">
          {categories && <FilterSidebar categories={categories} />}
          <main>{posts && <PostsList posts={posts} />}</main>
        </div>
      </div>
    </>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps<{
  posts: Post[];
  categories: Category[];
}> = async (context) => {
  let posts: Post[];
  let categories: Category[];

  try {
    const responses = await Promise.all([getPosts(), getCategories()]);
    posts = responses[0];
    categories = responses[1];
  } catch (error) {
    throw error;
  }

  for (const post of posts) {
    const { body } = post;
    const newBody = stripHtml(body).result.replace(
      'p style="text-align: right;">',
      ""
    );

    post.body = newBody;
  }

  return {
    props: {
      posts,
      categories,
    },
    revalidate: 10,
  };
};
