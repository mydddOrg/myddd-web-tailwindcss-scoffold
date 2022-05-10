import * as React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";

const ContactMe = () => {
  return (
    <div className="w-full h-fit flex flex-row items-center justify-center my-2.5">
      <Icon icon={faEnvelope} size="2x" className="mx-2 cursor-pointer" />
    </div>
  );
};

export default ContactMe;
