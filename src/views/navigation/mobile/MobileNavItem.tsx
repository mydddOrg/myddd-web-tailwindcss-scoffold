import React from "react";
import { useNavigate } from "react-router-dom";

export interface MobileNavItemProps {
  text: string;
  toPage: string;
}
const MobileNavItem = (props: MobileNavItemProps) => {
  const navitation = useNavigate();

  const toPage = () => {
    if (props.toPage != "") navitation(props.toPage);
  };

  return (
    <div className="w-full h-fit text-base my-2" onClick={toPage}>
      {props.text}
    </div>
  );
};

export default MobileNavItem;
