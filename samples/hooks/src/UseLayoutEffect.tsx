import React, {
  useEffect,
  useCallback,
  useState,
  useLayoutEffect,
} from "react";
import Box from "./Box";

// ref값은 남지만 countVar는 날라감
function UseLayoutEffect() {
  const [count, setCount] = useState(0);
  const [size, setSize] = useState(100);
  const [isDark, setIsDark] = useState(false);

  const handleCountUpdate = () => {
    console.log("someFunction , number : ", count);
    setCount(count + 1);
  };

  useEffect(() => {}, [count]);

  useLayoutEffect(() => {}, [count]);

  return (
    <div style={{ backgroundColor: isDark ? "black" : "white" }}>
      <span>count : </span>
      <button onClick={handleCountUpdate}>Update</button>
    </div>
  );
}

export default UseLayoutEffect;
