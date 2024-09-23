import React, { useState, useRef } from "react";
import "./App.css";
import Page from "./components/page";

// ref값은 남지만 countVar는 날라감
function UseRefApp1() {
  const [renderer, setRenderer] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;

  console.log("UseContextApp : ");
  console.log("렌터링 : ", renderer);

  const doRendering = () => {
    setRenderer(renderer + 1);
    console.log("ref : ", renderer);
  };

  const increaseRef = () => {
    countVar++;
    console.log("var : ", countVar);
  };

  const increaseVar = () => {
    countRef.current++;
    console.log("ref : ", renderer);
  };

  const printResult = () => {
    console.log(`ref : ${countRef.current}, var : ${countVar}`);
  };

  return (
    <div>
      <p>Ref : {countRef.current} </p>
      <p>Ref : {renderer} </p>
      <button onClick={doRendering}>랜더</button>
      <button onClick={increaseRef}>ref 올려</button>
      <button onClick={increaseVar}>var 올려</button>
      <button onClick={printResult}>ref var 출력</button>
    </div>
  );
  // return <Page />;
}

export default UseRefApp1;
