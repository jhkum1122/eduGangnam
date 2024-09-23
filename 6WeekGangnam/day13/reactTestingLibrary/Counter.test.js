// Counter.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("renders counter with initial count of 0", () => {
  render(<Counter />);

  const countElement = screen.getByText(/count:/i); // "Count: " 텍스트를 포함하는 요소를 찾습니다.
  expect(countElement).toBeInTheDocument(); // 해당 요소가 화면에 보이는지 확인합니다.

  const incrementButton = screen.getByText(/increment/i); // "Increment" 텍스트를 포함하는 버튼을 찾습니다.
  const decrementButton = screen.getByText(/decrement/i); // "Decrement" 텍스트를 포함하는 버튼을 찾습니다.

  expect(screen.getByText("Count: 0")).toBeInTheDocument(); // 초기 카운트가 0인지 확인합니다.

  fireEvent.click(incrementButton); // Increment 버튼 클릭
  expect(screen.getByText("Count: 1")).toBeInTheDocument(); // 클릭 후 카운트가 1인지 확인합니다.

  fireEvent.click(decrementButton); // Decrement 버튼 클릭
  expect(screen.getByText("Count: 0")).toBeInTheDocument(); // 클릭 후 카운트가 다시 0인지 확인합니다.
});
