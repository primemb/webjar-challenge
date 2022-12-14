import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "jalali-moment";
import React from "react";
import { Post } from "../../../models/Post";
import {
  faCalendar,
  faMessage,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import Button from "../../Button/Button";
interface IPostsProps {
  post: Post;
}

const PostItem = ({ post }: IPostsProps) => {
  const createDate = moment(post.createdAt).locale("fa").format("LL");

  const getImage = () => {
    if (post.introImageUrl.path !== "") {
      return post.introImageUrl.host + post.introImageUrl.path;
    } else {
      return post.introImageUrl.host;
    }
  };
  return (
    <div className="flex flex-col md:flex-row items-stretch justify-start w-full h-full shadow-custom-3 gap-4 md:gap-16">
      <div
        className="w-full md:w-300 flex-grow flex-shrink-0"
        style={{ minHeight: "100%" }}
      >
        <img
          src={getImage()}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="h-full flex flex-col mt-7 items-start justify-start font-medium text-lg">
        <h4>{post.title}</h4>
        <div className="font-light text-base mt-8 leading-8 text-brand-grey-3 flex-grow">
          <p>{`${post.body.slice(0, 300)}...`}</p>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between items-center mt-14 mb-2 gap-12">
          <div className="flex items-start justify-start gap-2">
            <FontAwesomeIcon icon={faCalendar} size="sm" />
            <p className="text-sm font-light">{createDate}</p>
          </div>
          <div className="flex items-center justify-start gap-2">
            <FontAwesomeIcon icon={faMessage} size="sm" />
            <p className="text-sm font-light">{post.commentCount} نظر</p>
          </div>
          <div className="flex items-center justify-start gap-2">
            <FontAwesomeIcon icon={faUser} size="sm" />
            <p className="text-sm font-light">{post.author}</p>
          </div>
          <Button type="secondary" onClick={() => {}}>
            بیشتر
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
