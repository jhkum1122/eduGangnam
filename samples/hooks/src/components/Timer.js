/*
import React, { useEffect } from "react";
import { clearInterval } from "timers";

const Timer = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머 돌아가는 중");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("timer가 종료 되었습니다.");
    };
  }, []); // 빈 배열을 전달하여 Mount와 Unmount 시점에서 한 번씩만 실행
  return (
    <div>
      <span>타이머를 시작합니다. </span>
    </div>
  );
};

export default Timer;
*/

import React, { useEffect } from "react";

const Timer = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머 돌아가는 중");
    }, 1000);

    // cleanup 함수를 이용하여 컴포넌트가 언마운트될 때 타이머 정리
    return () => {
      clearInterval(timer);
      console.log("타이머가 종료되었습니다.");
    };
  }, []); // 빈 배열을 전달하여 Mount와 Unmount 시점에서 한 번씩만 실행

  return (
    <div>
      <span>타이머를 시작합니다. </span>
    </div>
  );
};

export default Timer;
