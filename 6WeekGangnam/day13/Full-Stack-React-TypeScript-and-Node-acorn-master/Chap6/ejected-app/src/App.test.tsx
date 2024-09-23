import React from "react";
import { screen ,render } from "@testing-library/react";
import App from "./App";
import DisplayText from "./DisplayText";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Show Message/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/enter your name/i);
//   expect(linkElement).toBeInTheDocument();
// });


// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByRole("heading", {level:1});
//   expect(linkElement).toBeInTheDocument();
// });



test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByLabelText(/heading test/i);
  expect(linkElement).toBeInTheDocument();
});

test("placeholder 찾기", () => {
  render(<App />);
  const linkElement = screen.getByLabelText(/username/i);
  expect(linkElement).toBeInTheDocument();
});

test("getByDisplayValue 찾기", () => {
  render(<App />);
  const lastNameInput = screen.getByDisplayValue("Norris");
  expect(lastNameInput).toBeInTheDocument();
});

test("getByPlaceholderText 찾기", () => {
  render(<App />);
  const linkElement = screen.getByPlaceholderText(/username/i);
  expect(linkElement).toBeInTheDocument();
});