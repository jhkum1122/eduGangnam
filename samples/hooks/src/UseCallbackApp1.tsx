import React, { useEffect, useCallback, useState } from "react";

// ref값은 남지만 countVar는 날라감
function UseCallbackApp1() {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(true);

  const someFunction = useCallback(() => {
    console.log("someFunction , number : ", number);
    return;
  }, []);

  useEffect(() => {
    console.log("랜더링");
  }, [someFunction]);
  return (
    <div>
      <h3>하루에 몇끼 먹나요?</h3>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <br />
      <button onClick={someFunction}>Call someFunction</button>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {toggle.toString()}
      </button>
    </div>
  );
}

export default UseCallbackApp1;
