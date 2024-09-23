import React, { useMemo, useState } from "react";

// ref값은 남지만 countVar는 날라감
function UseMemoApp1() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber);
  }, [hardNumber]);

  const easySum = easyCalculate(easyNumber);

  function hardCalculate(hardNumber: number): any {
    console.log("어려운 계산");

    for (let index = 0; index < 99999999; index++) {
      // 생각하는 시간
    }

    return hardNumber + 10000;
  }
  function easyCalculate(easyNumber: number) {
    console.log("쉬운 계산");
    return easyNumber + 1;
  }

  return (
    <div>
      <h3>어려운 계산기</h3>
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => {
          setHardNumber(Number(e.target.value));
        }}
      ></input>
      <span> + 10000 = {hardSum}</span>

      <h3>쉬운 계산기</h3>
      <input
        type="number"
        value={easyNumber}
        onChange={(e) => {
          setEasyNumber(Number(e.target.value));
        }}
      ></input>
      <span> + 1 = {easySum}</span>
    </div>
  );
  // return <Page />;
}

export default UseMemoApp1;
