import * as React from "react";
import { useNavigate } from "react-router-dom";

export interface NavigationItemProps {
  text: string;
  toPage: string;
}
const NavigationItem = (props: NavigationItemProps) => {
  const navitation = useNavigate();

  const toPage = () => {
    if (props.toPage != "") navitation(props.toPage);
  };

  return (
    <>
      <div
        onClick={toPage}
        className="text-center align-bottom mx-2 h-full hover:border-b border-blue-600 leading-[4rem] cursor-pointer dark:text-white"
      >
        {props.text}
      </div>
    </>
  );
};

export default NavigationItem;
