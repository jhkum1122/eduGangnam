import React, { useState, useEffect, ChangeEvent } from "react";
import "./App.css";
import Page from "./components/page";

function UseContextApp() {
  const [isDark, setIsDark] = useState(false);
  console.log("UseContextApp : ");
  console.log("isDark : ", isDark, ", setIsDark : ", setIsDark);
  return <Page />;
  // return <Page />;
}

export default UseContextApp;
