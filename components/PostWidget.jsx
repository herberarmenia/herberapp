import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import { getRecentPosts, getSimilarPosts } from "../services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => setRelatedPosts(result));
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
    console.log(relatedPosts, "reletedPosts");
  }, [slug]);
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8 mt-4">
      <h3>{slug ? "Related Posts" : "Resent Posts"}</h3>
    </div>
  );
};

export default PostWidget;
