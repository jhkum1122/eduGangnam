// DOM 접근
// text box input foucus 시 사용한다. vanila js document.querySelector()와 동일
import React, { useState, useEffect, useRef } from "react";

const UseRefApp4 = () => {
  // 초기값 hi 를 넣으면 hi 가 찍힌다.
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // console.log(inputRef)
    if (inputRef.current !== null) {
      // inputRef.current.disabled = false; //input 비활성화 해제
      inputRef.current.focus(); //input에 focus
    }
  }, []);

  const login = () => {
    alert(`환영합니다. ${inputRef.current!.value}!`);
    inputRef.current?.focus();
  };

  // refresh 버튼을 클릭하였을때 자동으로 포커스 상태로 만든다.
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="username" />
      <button onClick={login}>로그인</button>
    </div>
  );
};

export default UseRefApp4;
