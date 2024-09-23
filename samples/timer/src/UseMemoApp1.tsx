// optimization => useMemo, useCallback 컴포넌트 성능 끌어 올리기
// useMemo, memorazation
// 매번 호출하는 함수를 자주 계산하지 않고 캐시에 저장해뒀다가 캐시에서 꺼내와서 시작한다.
// 함수형 컴포넌트를 함수이고 함수는 호출할때마다 함수에 정의된 값들이 초기화 된다.
// calculate() 함수가 매번 호출되면 무거운 작업이 계속 일어난다. 이러한 상황을 해결하기 위해 memo 사용한다.

// const value = useMemo(() => {
//     return calculateNewValue();
// }, [item])
// item 은 의존성 배열

// use 메모를 사욯하는것은 값을 저장한다는 것인데 불피료한 것을 많이 저장해주면 낭비가 발생할 수 있으므로 적절하게 저장한다.

// 예제 : 어려운 계산기
import React, { useMemo, useState } from "react";

const hardCalculate = (number: number) => {
  console.log("어려운 계산!");
  for (let i = 0; i < 99999999; i++) {} //생각하는 시간
  return number + 10000;
};

const easyCalculate = (number: number) => {
  console.log("짱 쉬운 계산!");
  return number + 1;
};

function UseMemoApp1() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  // easy 만 불러지도록 memo 를 사용한다.
  // const hardSum = hardCalculate(hardNumber);
  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber);
  }, [hardNumber]); // hardNumber 가 변경되어야 호출된다.
  const easySum = easyCalculate(easyNumber);

  return (
    <div>
      <h3>어려운 계산기</h3>
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => setHardNumber(parseInt(e.target.value))}
      />
      <span> + 10000 = {hardSum}</span>

      <h3>쉬운 계산기</h3>
      <input
        type="number"
        value={easyNumber}
        onChange={(e) => setEasyNumber(parseInt(e.target.value))}
      />
      <span> + 1 = {easySum}</span>
    </div>
  );
}

export default UseMemoApp1;
