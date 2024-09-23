// useLayoutEffect vs useEffect
// useLayoutEffect => 화면 업데이트
// 화면 업데이트 => useEffect

import React, { useState, useEffect, useLayoutEffect, useRef } from "react";

function UseLayoutEffectApp1() {
  const [count, setCount] = useState(0);

  // 1
  //   useEffect(() => {
  //     console.log("useEffect", count)
  //   }, [count])

  // 2
  useLayoutEffect(() => {
    // 동기, 과한 작업을 진행하면 우리 앱 성능이 저하된다.
    console.log("useLayoutEffect", count);
  }, [count]);

  useEffect(() => {
    // 비동기
    console.log("useEffect", count);
  }, [count]);

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <span>count: {count}</span>
      <button onClick={handleCountUpdate}>Update</button>
    </div>
  );
}

export default UseLayoutEffectApp1;
