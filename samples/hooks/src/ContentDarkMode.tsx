import React, { useState } from "react";

const ContentDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <h1>Content</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        vestibulum fermentum dolor, id gravida lectus fermentum ac. Sed
        fringilla libero in justo volutpat vehicula.
      </p>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
};

export default ContentDarkMode;
