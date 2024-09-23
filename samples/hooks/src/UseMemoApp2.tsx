import React, { useEffect, useMemo, useState } from "react";

// ref값은 남지만 countVar는 날라감
function UseMemoApp2() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  const location = useMemo(() => {
    return { country: isKorea ? "한국" : "외국" };
  }, [isKorea]);

  useEffect(() => {
    console.log("useEffect 호출");
  }, [location]);

  return (
    <div>
      <h3>하루에 몇끼 먹나요?</h3>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      ></input>

      <h3>어느 나라에 있나요?</h3>
      <p>나라 : {location.country}</p>

      <button onClick={() => setIsKorea(!isKorea)}>비행기</button>

      <span> </span>

      <span></span>
    </div>
  );
  // return <Page />;
}

export default UseMemoApp2;
