import { useState, useEffect, useLayoutEffect, useRef } from "react";

function getNumbers() {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
}

function UseLayoutEffectApp2() {
  const [numbers, setNumbers] = useState([1, 2]);
  const ref = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   setNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
  // }, []);

  useLayoutEffect(() => {
    setNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
  }, []);

  return (
    <div ref={ref} style={{ height: "300px", border: "1px solid blue" }}>
      {numbers}
    </div>
  );
}

export default UseLayoutEffectApp2;
