import React, { useEffect, useState, useLayoutEffect, useRef } from "react";

function getNumbers() {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
}

// ref값은 남지만 countVar는 날라감
function UseLayoutEffect2() {
  const [numbers, setNumbers] = useState([1, 2]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nums: number[] = getNumbers();

    if (!nums) {
      setNumbers(nums);
    }
  }, []);

  useLayoutEffect(() => {
    if (numbers.length === 0) {
      return;
    }
    if (ref.current?.scrollTop) {
      ref.current.scrollTop = ref.current?.scrollHeight;
    }
  }, [numbers]);

  return (
    <div
      style={{
        height: "300px",
        border: "1px solid blue",
      }}
    ></div>
  );
}

export default UseLayoutEffect2;
