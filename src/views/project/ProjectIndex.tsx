import React from "react";
import ProjectItem from "./ProjectItem";

const ProjectIndex = () => {
  return (
    <div className="w-full h-full flex flex-col md:overflow-y-scroll">
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
    </div>
  );
};

export default ProjectIndex;
