import React, { useState, useRef } from "react";

const UseRefApp2 = () => {
  const [renderer, setRenderer] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;

  // 변수는 랜더가 일어나면 초기화 되지만 ref는 전주기에 걸쳐서 계속 증가한다.
  const doRendering = () => {
    setRenderer(renderer + 1);
  };

  const increaseRef = () => {
    countRef.current = countRef.current + 1;
    console.log("ref: ", countRef.current);
  };

  const increaseVar = () => {
    countVar = countVar + 1;
    console.log("var: ", countVar);
  };

  const printResult = () => {
    console.log(`ref: ${countRef.current}, var: ${countVar}`);
  };

  return (
    <div>
      <p>Ref: {countRef.current}</p>
      <p>Var: {countRef.current}</p>
      <button onClick={doRendering}>랜더</button>
      <button onClick={increaseRef}>Ref 올려</button>
      <button onClick={increaseVar}>Var 올려</button>
      <button onClick={printResult}>Ref Var 올려</button>
    </div>
  );
};

export default UseRefApp2;
