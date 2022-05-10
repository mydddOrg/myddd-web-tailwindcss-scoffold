import * as React from "react";
import CopyRight from "./CopyRight";
import MyLogo from "./MyLogo";

const Card = () => {
  return (
    <div className="flex flex-col items-center justify-center	w-full h-96 md:w-2/5 md:h-screen md:border-r border-slate-200 dark:border-slate-600 text-center">
      <div className="flex flex-col items-center justify-center flex-auto w-full">
        <MyLogo />
      </div>
      <div className="md:flex hidden">
        <CopyRight />
      </div>
    </div>
  );
};

export default Card;
