import React from "react";

export interface LanguagePros {
	text:string
}
const Language = (props:LanguagePros) => {
  return <div className="ml-1 dark:text-slate-400 text-xs">{props.text}</div>;
};

export default Language;
