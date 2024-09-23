// 저장공간 : state 대신 ref 를 사용하면 불필요한 render를 없앤다.
// DOM 요소에 접근 : input 요소에 focus를 맞춰준다.

import React, { useState, useRef } from "react";

const UseRefApp1 = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  console.log(countRef);

  console.log("렌더링...");

  const increaseCountState = () => {
    setCount(count + 1);
  };

  const increaseCountRef = () => {
    // 엄청 자주 바뀌는 값을 계속 부를때 성능이 안좋아지는데, ref로 하면 좋다.
    countRef.current = countRef.current + 1;
    console.log("Ref: ", countRef.current);
  };

  return (
    <div>
      <p>State: {count}</p>
      <p>Ref: {countRef.current}</p>
      <button onClick={increaseCountState}>State 올려</button>
      <button onClick={increaseCountRef}>Ref 올려</button>
    </div>
  );
};

export default UseRefApp1;
