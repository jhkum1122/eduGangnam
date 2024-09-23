// optimization => useMemo, useCallback 컴포넌트 성능 끌어 올리기
// useMemo, memorazation
// 자주 사용하는 값을 받아오기 위해 반복해서 사용하는 계산을 메모리에서 꺼내서 재사용하는 최적화 기법중에 하나다.
// 자주 사용하는 값을 캐싱해줘서 매모리에서 꺼내와서 재사용한다.
// 차이점 : 함수 자체를 저장했다가 꺼내 사용한다.
// JS에서 함수는 객체의 한 종류이다. 함수 객체를 할당하는 것과 동일하다.
// 랜더링 -> 함수 호출 -> 모든 내부 변수를 초기화 한다.
// 함수 컴포넌트를 처음에 호출할때만 계산해주고 메모리에 가지고 있다가 재사용한다.
// const calculate = useCallback((num) => {return num + 1;},[item])

import { useEffect, useState, useCallback } from "react";

function UseCallbackApp1() {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(true);

  // someFunction 은 함수객체의 주소값을 가지고 있는데 새로 만들어진 공간이 호출되므로 useEffect 입장에서는 callback 함수를 매번 호출하는 구조이다.
  const someFunction = useCallback(() => {
    console.log(`someFunc: number: ${number}`);
    return;
  }, []);

  // 배열안에 들어있는 number 를 올려주려면
  // },[number])
  // 이렇게 변경해준다.

  // () => {
  //     console.log(`someFunc: number: ${number}`)
  //     return;
  // }

  useEffect(() => {
    console.log("someFunction이 변경되었습니다.");
  }, [someFunction]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      ></input>
      <br />
      <button onClick={someFunction}>Call someFunc</button>
      <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
    </div>
  );
}

export default UseCallbackApp1;
