import React, { useContext } from "react";
import { ThemeContext } from "../context/Themecontext";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const user = useContext(UserContext);

  console.log("Header : ");
  console.log("isDark : ", isDark);
  return (
    <header
      className="header"
      style={{
        backgroundColor: isDark ? "black" : "lightgrey",
        color: isDark ? "black" : "lightgrey",
      }}
    >
      <h1>Wellcome!!{user}</h1>
    </header>
  );
};

export default Header;
