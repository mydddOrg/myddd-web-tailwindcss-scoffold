import React from "react";

const AboutMe = () => {
  return (
    <div className="md:m-4 md:shadow md:dark:shadow-slate-600	h-fit md:rounded-xl flex flex-col">
      <div className="w-full border-b dark:border-slate-600 dark:shadow-slate-600 h-fit flex align-middle">
        <div className="h-full flex-auto flex flex-col p-4">
          <span className="text-4xl dark:text-slate-100">About Me</span>
          <span className="text-lg text-neutral-500 dark:text-slate-200">
            Whatever It Takes
          </span>
          <span className="flex"></span>
        </div>
        <img
          src="assets/icon.jpeg"
          alt="Jane"
          className="hidden md:block p-2 h-32 w-32 rounded-full"
        />
      </div>
    </div>
  );
};

export default AboutMe;
