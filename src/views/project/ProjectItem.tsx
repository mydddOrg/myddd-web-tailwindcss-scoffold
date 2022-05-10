import React from "react";
import { faSquareNfi } from "@fortawesome/free-solid-svg-icons";
import Icon from "views/common/Icon";
import Color from "views/common/Color";
import Language from "views/blog/Language";

const ProjectItem = () => {
  return (
    <div className="min-h-36 p-2 m-2 md:m-4 border dark:border-slate-400 rounded-lg flex flex-col text-left cursor-pointer">
      <div className="w-full h-fit my-1 dark:text-slate-100 text-base flex flex-row align-middle">
        <Icon icon={faSquareNfi} size="1x" className="p-1" />
        Java-Project
      </div>
      <div className="w-full grow my-1 text-slate-500 dark:text-slate-200 text-sm">
        An open source project
      </div>
      <div className="w-full h-6 mt-3 text-sm flex flex-row align-middle">
        <Color />
        <Language text="Java" />
        <Language text="React" />
      </div>
    </div>
  );
};

export default ProjectItem;
