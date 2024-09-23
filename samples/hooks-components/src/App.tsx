import React, { useReducer, useCallback, useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Greeting from "./GreetingFunctional";
import ListCreator, { ListItem } from "./ListCreator";

// Reducer 함수 정의
const reducer = (state: any, action: any) => {
  console.log("enteredNameReducer");
  switch (action.type) {
    case "enteredName":
      // 만약 현재 상태의 enteredName과 action.payload가 같으면 상태 변경 없음
      if (state.enteredName === action.payload) {
        return state;
      }
      // 새로운 enteredName으로 상태 업데이트
      return { ...state, enteredName: action.payload };
    case "message":
      // message 업데이트
      return { ...state, message: `Hello, ${action.payload}` };
    default:
      // 잘못된 액션 타입이 들어오면 에러 발생
      throw new Error("Invalid action type " + action.type);
  }
};

// 초기 상태 정의
const initialState = {
  enteredName: "",
  message: "",
};

function App() {
  // useReducer를 사용하여 상태 관리
  const [{ message, enteredName }, dispatch] = useReducer(
    reducer,
    initialState
  );

  // useState를 사용하여 시작 카운트와 현재 카운트 관리
  const [startCount, setStartCount] = useState(0);
  const [count, setCount] = useState(0);

  // useCallback을 사용하여 최적화된 콜백 함수 생성
  const setCountCallback = useCallback(() => {
    const inc =
      count + 1 > startCount ? count + 1 : Number(count + 1) + startCount;
    setCount(inc);
  }, [count, startCount]);

  // useState를 사용하여 리스트 아이템 관리
  const [listItems, setListItems] = useState<Array<ListItem>>();

  // useEffect를 사용하여 count가 변경될 때마다 리스트 아이템 업데이트
  useEffect(() => {
    const li = [];
    for (let i = 0; i < count; i++) {
      li.push({ id: i });
    }
    setListItems(li);
  }, [count]);

  // 환영 버튼 클릭 시 동작 함수
  const onWelcomeBtnClick = () => {
    setCountCallback();
  };

  // 시작 카운트 입력 시 동작 함수
  const onChangeStartCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartCount(Number(e.target.value));
  };

  console.log("App.tsx render"); // 렌더링이 발생할 때마다 콘솔에 로그 출력

  // JSX 반환
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* Greeting 컴포넌트 렌더링 */}
        <Greeting
          message={message}
          enteredName={enteredName}
          greetingDispatcher={dispatch}
        />

        <div style={{ marginTop: "10px" }}>
          {/* 숫자 입력 및 카운트 증가 UI */}
          <label>Enter a number and we'll increment it</label>
          <br />
          <input
            value={startCount}
            onChange={onChangeStartCount}
            style={{ width: ".75rem" }}
          />
          &nbsp;
          <label>{count}</label>
          <br />
          <button onClick={onWelcomeBtnClick}>Increment count</button>
        </div>

        {/* 리스트 생성 컴포넌트 렌더링 */}
        <div>
          <ListCreator listItems={listItems} />
        </div>
      </header>
    </div>
  );
}

export default App;
