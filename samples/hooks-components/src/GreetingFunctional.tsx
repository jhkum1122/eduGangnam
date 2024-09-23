import React from "react";

// Greeting 컴포넌트의 props 타입 정의
interface GreetingProps {
  enteredName: string; // 입력된 이름
  message: string; // 환영 메시지
  greetingDispatcher: React.Dispatch<{ type: string; payload: string }>; // 액션을 dispatch하는 함수
}

// 함수형 컴포넌트로 Greeting 정의
export default function Greeting(props: GreetingProps) {
  // 입력 필드 값이 변경될 때 호출되는 함수
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    // enteredName을 변경하는 액션을 dispatch
    props.greetingDispatcher({ type: "enteredName", payload: e.target.value });

    // message를 변경하는 액션을 dispatch
    props.greetingDispatcher({ type: "message", payload: e.target.value });
  };

  // JSX 반환
  return (
    <div>
      {/* 입력 필드 */}
      <input value={props.enteredName} onChange={onChangeName} />
      {/* 환영 메시지 출력 */}
      <div>{props.message}</div>
    </div>
  );
}
