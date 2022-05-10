import React from "react";

export interface SeriesItemProps {
  reverse?: boolean;
}
const SeriesItem = (props: SeriesItemProps) => {
  return (
    <div
      className={`m-1 p-1 border rounded-xl h-fit flex shadow-md my-2 ${
        props.reverse ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className="w-fit h-fit">
        <img
          src="assets/book.jpeg"
          alt="Grid Layout"
          className="min-w-[100px] min-h-[140px] max-w-[100px] max-h-[140px] md:min-w-[120px] md:min-h-[168px]"
        />
      </div>
      <div className="flex-auto m-2 my-2 flex flex-col">
        <div
          className={`text-lg	dark:text-slate-100 ${
            props.reverse ? "text-right" : "text-left"
          }`}
        >
          Grid Layout
        </div>
        <div
          className={`text-sm text-slate-500 dark:text-slate-200 ${
            props.reverse ? "text-right" : "text-left"
          }`}
        >
          Grid Layout and Flex Layout
        </div>
        <div
          className={`text-xs mt-4 dark:text-slate-400 ${
            props.reverse ? "text-right" : "text-left"
          }`}
        >
          Use the grid-cols- utilities to create grids with n equally sized
          columns.
        </div>
      </div>
    </div>
  );
};

export default SeriesItem;
