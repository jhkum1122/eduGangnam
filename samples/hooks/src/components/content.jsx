import React, { useContext } from "react";
import { ThemeContext } from "../context/Themecontext";
import { UserContext } from "../context/UserContext";

const Content = () => {
  const { isDark } = useContext(ThemeContext);
  const user = useContext(UserContext);

  console.log("Content : ");
  console.log("isDark : ", isDark);
  return (
    <div
      className="content"
      style={{
        backgroundColor: isDark ? "black" : "lightgrey",
        color: isDark ? "white" : "black",
      }}
    >
      <p>좋은 하루 되세여!!{user}</p>
    </div>
  );
};

export default Content;
