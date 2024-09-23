import React, { useState, useRef } from "react";
import "./App.css";
import Page from "./components/page";

function UseRefApp2() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  console.log("UseContextApp : ");
  console.log("렌터링 : ", count);

  const increaseCountState = () => {
    setCount(count + 1);
  };

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log("ref : ", countRef.current);
  };

  return (
    <div>
      <p>State : {count} </p>
      <p>Ref : {countRef.current} </p>
      <button onClick={increaseCountState}>state 올려</button>
      <button onClick={increaseCountRef}>ref 올려</button>
    </div>
  );
}

export default UseRefApp2;
