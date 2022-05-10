import * as React from "react";
import Tag from "./Tag";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import Icon from "views/common/Icon";
import { useNavigate } from "react-router-dom";

const BlogItem = () => {
  const navitation = useNavigate();

  const toBlog = () => {
    navitation("blog");
  };

  return (
    <div
      className="w-full h-fit p-4 border-b border-slate-200 dark:border-slate-700 flex flex-col items-start"
      onClick={toBlog}
    >
      <span className="text-lg text-left cursor-pointer uppercase dark:text-slate-100">
        THE NOTICE SHORTCODE
      </span>
      <span className="text-sm my-8 h-fit flex-auto text-left text-slate-600 dark:text-slate-200">
        Hugo ships with several Built-in Shortcodes for rich content, along with
        a Privacy Config and a set of Simple Shortcodes that enable static and
        no-JS versions of various social media embeds.
      </span>

      <div className="flex flex-row w-full h-7">
        <Icon icon={faCalendar} size="1x" className="h-4 my-1" />
        <span className="dark:text-slate-300">18/3/2022</span>
        <div className="flex flex-auto justify-start flex-row text-sm items-center ml-2 text-slate-400">
          <Tag text="React" />
          <Tag text="Java" />
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
