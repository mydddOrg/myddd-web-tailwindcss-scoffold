import React from "react";

const SeriesMain = () => {
  const LazyLayout = React.lazy(
    () => import(/* webpackChunkName: "Layout" */ "./Layout")
  );

  const LazySeries = React.lazy(
    () => import(/* webpackChunkName: "Series" */ "./series/Series")
  );

  return (
    <LazyLayout>
      <LazySeries />
    </LazyLayout>
  );
};

export default SeriesMain;
