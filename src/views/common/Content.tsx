import * as React from "react";
import CopyRight from "./CopyRight";
import Navigation from "../navigation/Navigation";

export interface ContextProps {
  children: any;
}
const Context = (props: ContextProps) => {
  return (
    <div className=" w-full h-fit md:w-3/5 md:h-full flex flex-col">
      <Navigation />
      {props.children}
      <div className="md:hidden flex">
        <CopyRight />
      </div>
    </div>
  );
};

export default Context;
