import React, { useEffect, useMemo, useState } from "react";
import { Post } from "../../../models/Post";
import { useAppSelector } from "../../../store/hooks";
import { filterPosts } from "../../../util/util";
import Paginate from "../../Paginate/Paginate";
import PostItem from "../PostItem/PostItem";

interface IPostsListProps {
  posts: Post[];
}

const PostsList = ({ posts }: IPostsListProps) => {
  const ITEM_PER_PAGE = 4;

  const [page, setPage] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const categoryFilters = useAppSelector((state) => state.filters.categories);
  const searchFilters = useAppSelector((state) => state.filters.search);

  const filteredPosts = useMemo(() => {
    return filterPosts(posts, categoryFilters, searchFilters);
  }, [posts, categoryFilters, searchFilters]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  useEffect(() => {
    setPage(0);
    const newOffset = 0 % filteredPosts.length;
    setItemOffset(newOffset);
  }, [categoryFilters, searchFilters]);

  const handlePageClick = (value: number) => {
    const newOffset = (value * ITEM_PER_PAGE) % filteredPosts.length;
    setItemOffset(newOffset);
    setPage(value);
  };

  const makeContent = () => {
    if (filteredPosts.length === 0) return <p>چیزی پیدا نشد</p>;
    else {
      const endOffset = itemOffset + ITEM_PER_PAGE;

      return filteredPosts
        .slice(itemOffset, endOffset)
        .map((post) => <PostItem key={post._id} post={post} />);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-start justify-start gap-24">
      {makeContent()}
      <Paginate
        initialPage={page}
        itemPerPage={ITEM_PER_PAGE}
        itemsLength={filteredPosts.length}
        onPageChange={handlePageClick}
      />
    </div>
  );
};

export default PostsList;
