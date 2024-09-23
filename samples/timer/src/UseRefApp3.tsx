import React, { useState, useEffect, useRef } from "react";

const UseRefApp3 = () => {
  const [count, setCount] = useState(1);
  // const [rederCount, setRenderCount] = useState(1);
  const renderCount = useRef(1);

  // 무한 반복된다.
  useEffect(() => {
    // 해결 방법: 주석처리
    // console.log('랜더링!');
    // setRenderCount(rederCount + 1)
    renderCount.current = renderCount.current + 1;
    console.log("랜더링 수:", renderCount.current);
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>올려</button>
    </div>
  );
};

export default UseRefApp3;
