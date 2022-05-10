import * as React from "react";
import DarkMode from "./DarkMode";
import NavigationItem from "./NavigationItem";

const Navigation = () => {
  return (
    <div className=" w-ful min-h-[4rem] border-b border-slate-200 dark:border-slate-600 hidden md:flex text-center md:flex-row">
      <div className="flex-auto flex flex-row ml-3">
        <NavigationItem text="HOME" toPage="/" />
        <NavigationItem text="SERIES" toPage="/series" />
        <NavigationItem text="PROJECTS" toPage="/projects" />
        <NavigationItem text="ABOUT" toPage="/about" />
      </div>
      <div className="flex flex-col justify-center align-middle mx-3 cursor-pointer">
        <DarkMode />
      </div>
    </div>
  );
};

export default Navigation;
