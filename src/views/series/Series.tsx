import React from "react";
import SeriesItem from "./SeriesItem";

const Series = () => {
  return (
    <div className="w-full h-full flex flex-col md:overflow-y-scroll">
      <SeriesItem />
      <SeriesItem reverse={true}/>
      <SeriesItem />
      <SeriesItem reverse={true}/>
    </div>
  );
};

export default Series;
