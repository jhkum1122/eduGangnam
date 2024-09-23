import React, { useState, useEffect } from "react";

function UseEffectApp() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handelInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  useEffect(() => {
    console.log("렌더링");
  });

  useEffect(() => {
    console.log("count 렌더링");
  }, [count]);

  useEffect(() => {
    console.log("name 렌더링");
  }, [name]);

  console.log(); // 입력 상태 변수의 값 콘솔 출력

  return (
    <div>
      <button onClick={handleCountUpdate}>update</button>
      <span>count: {count} </span>
      <input type="text" value={name} onChange={handelInputChange}></input>
      <span>name : {name}</span>
    </div>
  );
}

export default UseEffectApp;
