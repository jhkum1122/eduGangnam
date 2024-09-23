// 가장 따근따근 훅
// 가장 심플

import { useEffect, useId } from "react";

function UseIdApp1() {
  //   const id = useId();
  //   console.log(id);

  // 고유한 id 가 아니라 중복된다.
  return (
    <div>
      <MyInput />
      {/* <MyInput /> */}
    </div>
  );
}

function MyInput() {
  const id = useId();

  //   useEffect(() => {
  //     const element = document.querySelector("#btn");
  //     console.log(element);
  //   }, []);

  useEffect(() => {
    // useRef 를 사용해서 dom 요소에 접근하지 : 이 있는 id를 통해서 querySelector로 사용하지 않는다. <input ref={ref} > 로 사용해야 한다.
    // react 사용자로서 더 나은 역할을 사용하게 해준다. 안정성을 제공해준다.
    const element = document.querySelector(id);
    console.log(element);
  }, []);

  return (
    <div>
      {/* <label htmlFor={id}>이름</label>
      <input id={id}></input> */}

      {/* <label htmlFor={`${id}-name`}>이름</label>
      <input id={`${id}-name`}></input> */}

      <button id="btn">버튼</button>
      <label htmlFor={`id`}>이름</label>
      <input id={id}></input>

      <br />

      {/* <label htmlFor={id}>이름</label>
      <input id={id}></input> */}

      {/* <label htmlFor={`${id}-age`}>나이</label>
      <input id={`${id}-age`}></input> */}
    </div>
  );
}

export default UseIdApp1;
