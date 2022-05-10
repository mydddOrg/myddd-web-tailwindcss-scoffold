import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import MobileNavItem from "./MobileNavItem";
import Icon from "views/common/Icon";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const change = () => {
    setOpen((prev) => !open);
  };

  return (
    <>
      <div
        className={`absolute top-14 left-0 right-0 h-fit bg-gray-100 ${
          !open ? "hidden" : "flex"
        } flex flex-col align-middle justify-center text-center z-10 py-4`}
      >
        <MobileNavItem text="HOME" toPage="/" />
        <MobileNavItem text="SERIES" toPage="/series" />
        <MobileNavItem text="PROJECTS" toPage="/projects" />
        <MobileNavItem text="ABOUT ME" toPage="/about" />
      </div>
      <div
        className="w-fit h-12 absolute top-4 left-4 md:hidden"
        onClick={change}
      >
        <Icon icon={faList} size="lg" className="mx-2 cursor-pointer" />
      </div>
    </>
  );
};

export default MobileNavigation;
