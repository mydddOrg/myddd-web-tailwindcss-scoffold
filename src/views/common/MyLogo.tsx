import * as React from "react";
import ContactMe from "./ContactMe";

const MyLogo = () => {
  return (
    <div className="w-full h-fit flex flex-col items-center my-4">
      <div className="bg-icon rounded-full w-28 h-28 md:w-32 md:h-32 bg-cover" />
      <span className="m-1.5 font-medium font-mono text-slate-600 text-3xl dark:text-white">
        MY BLOG
      </span>
      <span className="my-1.5 font-sans text-lg dark:text-slate-200">
        Call me Jane
      </span>
      <ContactMe />
    </div>
  );
};

export default MyLogo;
