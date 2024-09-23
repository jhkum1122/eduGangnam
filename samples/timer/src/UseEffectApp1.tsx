import React, { useState, useEffect } from "react";

function UseEffectApp1() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleInpuChange = (e: any) => {
    setName(e.target.value);
  };

  // 화면 갱신될 때만
  // 매번 업데이트되면 비효율적이다.
  useEffect(() => {
    console.log("랜더링");
  });

  useEffect(() => {
    console.log("count 변화");
  }, [count]);

  useEffect(() => {
    console.log("name 변화");
  }, [name]);

  // mount 될 때만
  useEffect(() => {
    console.log("랜더링");
  }, []);

  return (
    <div>
      <button onClick={handleCountUpdate}>Update</button>
      <span>count: {count}</span>

      <input type="text" value={name} onChange={handleInpuChange} />
      <span>name: {name}</span>
    </div>
  );
}

export default UseEffectApp1;
