import React, { useEffect, useCallback, useState } from "react";
import Box from "./Box";

// ref값은 남지만 countVar는 날라감
function UseCallbackApp2() {
  const [number, setNumber] = useState(0);
  const [size, setSize] = useState(100);
  const [isDark, setIsDark] = useState(false);

  const createBoxStyle = useCallback(() => {
    return { backgroundColor: "pink", width: `${size}px`, height: `${size}px` };
  }, [size]);

  const someFunction = useCallback(() => {
    console.log("someFunction , number : ", number);
    return;
  }, []);

  return (
    <div style={{ backgroundColor: isDark ? "black" : "white" }}>
      <input
        type="number"
        value={size}
        onChange={(e) => setSize(Number(e.target.value))}
      />
      <br />
      <button onClick={() => setIsDark(!isDark)}>chage theme</button>
      <Box createBoxStyle={createBoxStyle}></Box>
    </div>
  );
}

export default UseCallbackApp2;
