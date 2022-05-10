import React from "react";

export interface TagProps {
	text:string
}
const Tag = (props:TagProps) => {
  return <div className="mx-1 cursor-pointer dark:text-slate-500">#{props.text}</div>;
};

export default Tag;
