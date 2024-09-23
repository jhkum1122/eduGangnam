// 화면에 배치하기 전에 작업하는 것
import React, { useState, useEffect, useLayoutEffect, useRef } from "react";

function getNumbers() {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
}

function UseLayoutEffectApp2() {
  const [numbers, setNumbers] = useState([]);

  const ref = useRef<HTMLDivElement>(null);

  //   useLayoutEffect(() => {}, [numbers]);

  useEffect(() => {
    const nums: number[] = getNumbers();
    if (!nums) setNumbers(nums);
  }, []);

  // 장확하게 화면 작업이 필요할 떄는 useLayoutEffect를 사용하면 된다.
  //   useLayoutEffect(() => {
  //     if(numbers.length === 0) {
  //         return;
  //     }
  //     ref.current?.scrollTop = ref.current.scrollHeight;
  //   }, [numbers]);

  const handleCountUpdate = () => {};

  return (
    <div ref={ref} style={{ height: "300px", border: "1px solid blue" }}></div>
  );
}

export default UseLayoutEffectApp2;
