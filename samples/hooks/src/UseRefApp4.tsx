import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Page from "./components/page";

// ref값은 남지만 countVar는 날라감
function UseRefApp4() {
  // const [count, setCount] = useState(1);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current !== null) {
      inputRef.current.focus();
      console.log(inputRef.current);
      inputRef.current.addEventListener("dbclick", () => {
        alert("test");
      });
    }
  });

  const login = () => {
    alert(`환영합니다. ${inputRef.current!.value}`);
    inputRef.current?.focus();
  };

  return (
    <div>
      <input type="text" placeholder="userName" ref={inputRef} />
      <button onClick={login}>로그인</button>
    </div>
  );
  // return <Page />;
}

export default UseRefApp4;
