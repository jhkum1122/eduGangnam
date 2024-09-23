import React from "react";
import DisplayText from "./DisplayText";
import "./App.css";

function App() {
  const getUserFullname = async (username: string): Promise<string> => {
    const usersResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    if (usersResponse.ok) {
      const users = await usersResponse.json();
      const userByName = users.find((usr: any) => {
        return usr.username.toLowerCase() === username;
      });
      return userByName.name;
    }
    return "";
  };
  return (
    <div className="App">
      <h1>
        <label htmlFor="headingTest"> heading test</label>
        <label htmlFor="headingTest"> username</label>
        <input id="headingTest"></input>
      </h1>
      <input
        type="text"
        id="lastName"
        placeholder="username"
        value={"Norris"}
      />
      <label></label>
      <textarea id="messageTextArea" />
      {/* <DisplayText getUserFullname={getUserFullname} /> */}
    </div>
  );
}

export default App;
