import * as React from "react";
import BlogItem from "./Blogitem";

const BlogIndex = () => {
  return (
    <div className="w-full flex-auto text-center md:overflow-y-scroll">
    <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
    </div>
  );
};

export default BlogIndex;
