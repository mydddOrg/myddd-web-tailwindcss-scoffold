import React, { useEffect, useState } from "react";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

import Icon from "views/common/Icon";

const DarkMode = () => {
  const [dark, setDark] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches ||
      localStorage.getItem("dark") == "true"
  );
  
  const change = () => {
    const nextTheme = !dark;
    setDark(nextTheme);
    localStorage.setItem("dark", nextTheme.toString());
  };

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);
  return (
    <div onClick={change}>
      <Icon
        icon={faCircleHalfStroke}
        size="lg"
        className="mx-2 cursor-pointer"
      />
    </div>
  );
};

export default DarkMode;
