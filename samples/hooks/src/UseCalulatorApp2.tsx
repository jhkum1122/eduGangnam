import React, { useState, useEffect, ChangeEvent } from "react";

const UseCalulatorApp2: React.FC = () => {
  const [a, setA] = useState<string>("0");
  const [b, setB] = useState<string>("0");
  const [operation, setOperation] = useState<string>("+");
  const [result, setResult] = useState<number>(0);

  // 20240710
  const [c, setC] = useState<string>("0");
  const [d, setD] = useState<string>("0");
  const [operation2, setOperation2] = useState<string>("+");
  const [result2, setResult2] = useState<number>(0);

  const [e, setE] = useState<string>("0");
  const [f, setF] = useState<string>("0");
  const [operation3, setOperation3] = useState<string>("+");
  const [result3, setResult3] = useState<number>(0);

  const [g, setG] = useState<string>("0");
  const [h, setH] = useState<string>("0");
  const [operation4, setOperation4] = useState<string>("+");
  const [result4, setResult4] = useState<number>(0);

  useEffect(() => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    switch (operation) {
      case "+":
        setResult(numA + numB);
        break;
      case "-":
        setResult(numA - numB);
        break;
      case "*":
        setResult(numA * numB);
        break;
      case "/":
        setResult(numA / numB);
        break;
      default:
        setResult(0);
    }
  }, [a, b, operation]);

  useEffect(() => {
    const numC = parseFloat(c);
    const numD = parseFloat(d);

    switch (operation) {
      case "+":
        setResult2(numC + numD);
        break;
      case "-":
        setResult2(numC - numD);
        break;
      case "*":
        setResult2(numC * numD);
        break;
      case "/":
        setResult2(numC / numD);
        break;
      default:
        setResult2(0);
    }
  }, [c, d, operation2]);

  useEffect(() => {
    const numE = parseFloat(e);
    const numF = parseFloat(f);

    switch (operation) {
      case "+":
        setResult3(numE + numF);
        break;
      case "-":
        setResult3(numE - numF);
        break;
      case "*":
        setResult3(numE * numF);
        break;
      case "/":
        setResult3(numE / numF);
        break;
      default:
        setResult3(0);
    }
  }, [e, f, operation3]);

  useEffect(() => {
    const numG = parseFloat(g);
    const numH = parseFloat(h);

    switch (operation) {
      case "+":
        setResult4(numG + numH);
        break;
      case "-":
        setResult4(numG - numH);
        break;
      case "*":
        setResult4(numG * numH);
        break;
      case "/":
        setResult4(numG / numH);
        break;
      default:
        setResult4(0);
    }
  }, [g, h, operation4]);

  const handleInputChangeA = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    // 숫자 형식이 맞는지 확인 후 설정
    if (!isNaN(parseFloat(input)) || input === "") {
      setA(input);
    }
  };

  const handleInputChangeB = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    // 숫자 형식이 맞는지 확인 후 설정
    if (!isNaN(parseFloat(input)) || input === "") {
      setB(input);
    }
  };

  const handleOperationChange = (op: string) => {
    setOperation(op);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <div>
        <input type="text" value={a} onChange={handleInputChangeA} />
        <input type="text" value={b} onChange={handleInputChangeB} />
      </div>
      <div>
        <button onClick={() => handleOperationChange("+")}>+</button>
        <button onClick={() => handleOperationChange("-")}>-</button>
        <button onClick={() => handleOperationChange("*")}>*</button>
        <button onClick={() => handleOperationChange("/")}>/</button>
      </div>
      <div>
        <span>Result: {result}</span>
      </div>
    </div>
  );
};

export default UseCalulatorApp2;
