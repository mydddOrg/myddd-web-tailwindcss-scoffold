import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

export interface IconProps {
  icon: any;
  size?: SizeProp;
  className?: string;
}
const Icon = (props: IconProps) => {
  return (
    <>
      <div className="w-fit h-fit flex dark:hidden align-middle justify-center">
        <FontAwesomeIcon
          icon={props.icon}
          size={props.size ? props.size : "xs"}
          className={props.className}
        />
      </div>
      <div className="w-fit h-fit hidden dark:flex align-middle justify-center">
        <FontAwesomeIcon
          icon={props.icon}
          size={props.size ? props.size : "xs"}
          color="white"
          className={props.className}
        />
      </div>
    </>
  );
};

export default Icon;
