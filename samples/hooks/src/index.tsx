import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import UseStateApp1 from "./UseStateApp1";
import UseStateApp2 from "./UseStateApp2";
import UseEffectApp from "./UseEffectApp";
import Timer from "./components/Timer";
import UseEffectApp2 from "./UserEffectApp2";
import UseCalulatorApp from "./UseCalulatorApp";
import UseCalulatorApp2 from "./UseCalulatorApp2";
import UseContextApp from "./UseContextApp";
import ContentDarkMode from "./ContentDarkMode";
import UseContextApp1 from "./UseContextApp1";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <UseContextApp1 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
