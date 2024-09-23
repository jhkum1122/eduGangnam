import { useState } from "react";

// 매우 무거운 작업을 수행하는 함수
const heavyWork = () => {
  console.log("엄청 무거운 작업"); // 콘솔에 "엄청 무거운 작업" 출력
  return ["홍길동", "김민수"]; // 배열을 반환
};

function UseStateApp2() {
  // useState 훅을 사용하여 상태 변수 정의
  const [names, setNames] = useState(() => heavyWork()); // 초기값으로 heavyWork 함수의 결과를 사용
  const [input, setInput] = useState(""); // 빈 문자열로 초기화된 input 상태 변수

  // 입력 필드 값이 변경될 때 호출되는 함수
  const handleInputChange = (e: any) => {
    setInput(e.target.value); // 입력 필드의 값을 input 상태 변수에 설정
  };

  // 업로드 버튼 클릭 시 호출되는 함수
  const handleUpload = () => {
    setNames((prevState: any) => {
      console.log("이전 state", prevState); // 이전 상태를 콘솔에 출력
      return [input, ...prevState]; // 새로운 이름을 포함한 배열을 반환하여 names 상태 변수 업데이트
    });
  };

  console.log(input); // 입력 상태 변수의 값 콘솔 출력

  // JSX 반환
  return (
    <div>
      {/* 입력 필드 */}
      <input type="text" value={input} onChange={handleInputChange}></input>
      {/* 업로드 버튼 */}
      <button onClick={handleUpload}>upload</button>
      <br />
      {/* names 배열을 매핑하여 각 이름을 출력 */}
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>; // 각 이름을 담은 p 태그 출력
      })}
    </div>
  );
}

export default UseStateApp2;
