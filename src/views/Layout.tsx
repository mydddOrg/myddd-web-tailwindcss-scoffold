import * as React from "react";
import Context from "./common/Content";
import DarkMode from "./navigation/DarkMode";
import MobileNavigation from "./navigation/mobile/MobileNavigation";

export interface LayoutProps {
  children: any;
}
const Layout = (props: LayoutProps) => {
  const LazyCard = React.lazy(
    () => import(/* webpackChunkName: "Card" */ "./common/Card")
  );

  return (
    <div className="relative w-full h-full ">
      <div className=" absolute h-fit inset-0 flex flex-col md:flex-row md:h-screen dark:bg-slate-900">
        <LazyCard />
        <Context>{props.children}</Context>
      </div>
      <MobileNavigation />

      <div className="w-fit h-12 absolute top-4 right-4 md:hidden">
        <DarkMode />
      </div>
    </div>
  );
};

export default Layout;
