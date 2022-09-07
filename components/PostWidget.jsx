import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import { getRecentPosts, getSimilarPost } from "../services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPost, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPost(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    }
  }, [slug]);

  return (
    <div className="bg-white shadow-lg rounded p-8 mb-8 ">
      <h3 className="text-cl mb-8 font-semibold border-b pb-4">
        {slug ? "Related Posts " : "Recent Posts"}
      </h3>
      {relatedPost.map((post) => (
        <div key={post.title} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <img
              alt={post.title}
              height="60px"
              width="60px"
              className="align-middle rounded-full"
              src={post.featuredImage.url}
            />
          </div>
          <div className="flex-grow ml-4">
            <p>{moment(post.createdAt).format("MMM DD, YYYY")}</p>
            <Link
              href={`/post/${post.slug}`}
              key={post.title}
              className="text-md"
            >
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
