import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Page from "./components/page";

// ref값은 남지만 countVar는 날라감
function UseRefApp3() {
  const [count, setCount] = useState(1);
  // const [renderCount, setRenderCount] = useState(1);

  const renderCount = useRef(1);

  useEffect(() => {
    // console.log("랜더링");
    // setRenderCount(renderCount + 1);
    console.log("랜더링: ", renderCount.current);

    renderCount.current++;
  });

  return (
    <div>
      <p>Count : {count}</p>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        ref 올려
      </button>
      {/* <button onClick={increaseVar}>var 올려</button>
      <button onClick={printResult}>ref var 출력</button> */}
    </div>
  );
  // return <Page />;
}

export default UseRefApp3;
