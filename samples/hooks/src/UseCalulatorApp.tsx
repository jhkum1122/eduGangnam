import React, { useState, useEffect, ChangeEvent } from "react";

const UseCalulatorApp: React.FC = () => {
  const [a, setA] = useState<string>("0");
  const [b, setB] = useState<string>("0");
  const [operation, setOperation] = useState<string>("+");
  const [result, setResult] = useState<number>(0);

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
    <div>
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

export default UseCalulatorApp;
