import * as React from "react";

const Main = () => {
  const LazyLayout = React.lazy(
    () => import(/* webpackChunkName: "Layout" */ "./Layout")
  );

  const LazyBlogPage = React.lazy(
    () => import(/* webpackChunkName: "BlogPage" */ "./blog/BlogIndex")
  );

  return (
    <LazyLayout>
      <LazyBlogPage />
    </LazyLayout>
  );
};

export default Main;
