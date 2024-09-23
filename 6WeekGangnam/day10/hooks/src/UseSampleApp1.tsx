import { useState, useEffect } from "react";

function UseSampleApp1() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);
  const [e, setE] = useState(0);
  const [f, setF] = useState(0);
  const [g, setG] = useState(0);
  const [h, setH] = useState(0);

  const [result1, setResult1] = useState(0);
  const [result2, setResult2] = useState(0);
  const [result3, setResult3] = useState(0);
  const [result4, setResult4] = useState(0);

  const handleInputAChange = (e: any) => {
    setA(parseInt(e.target.value));
  };

  const handleInputBChange = (e: any) => {
    setB(Number(e.target.value));
  };

  const handleResult1Button = (e: any) => {
    setResult1(a + b);
  };

  return (
    <div>
      <input type="text" onChange={handleInputAChange} value={a} />
      <input type="text" onChange={handleInputBChange} value={b} />
      <button onClick={handleResult1Button}>+</button>
      <span>{result1}</span>
      <br />

      <input type="text" />
      <input type="text" />
      <button>-</button>
      <span>{result2}</span>
      <br />

      <input type="text" />
      <input type="text" />
      <button>*</button>
      <span>{result3}</span>
      <br />

      <input type="text" />
      <input type="text" />
      <button>/</button>
      <span>{result4}</span>
      <br />
    </div>
  );
}

export default UseSampleApp1;
