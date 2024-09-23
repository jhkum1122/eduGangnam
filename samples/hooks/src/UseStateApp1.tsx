import { useState } from "react";

function UseStateApp1() {
  const [time, setTime] = useState(11);
  const [minute, setMinute] = useState(51);

  const handleClick = () => {
    let newTime;
    if (time >= 12) {
      newTime = 1;
    } else {
      newTime = time + 1;
    }

    setTime(newTime);
  };

  const handleMuniteClick = () => {
    let newMinute;
    if (minute >= 60) {
      newMinute = 0;
    } else {
      newMinute = minute + 1;
    }

    setMinute(newMinute);
  };

  return (
    <div>
      <span>
        현재시각 : {time} 시 {minute} 분
      </span>
      <br />
      <button onClick={handleClick}>update</button>
      <button onClick={handleMuniteClick}>updateMinute</button>
    </div>
  );
}

export default UseStateApp1;
