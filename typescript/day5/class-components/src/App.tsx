import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greeting from "./GreetingFunction";
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        { <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> }
        <Greeting name="Dave Choi"></Greeting>
      </header>
    </div>
  );
}
*/
class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      enteredName: "",
    };
    this.onChangeName = this.onChangeName.bind(this);
  }

  state: { enteredName: string };

  onChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ enteredName: e.target.value });
  }

  render() {
    console.log("rendering App");
    console.log(`{this.state.enteredName} + {this.onChangeName}`);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input value={this.state.enteredName} onChange={this.onChangeName} />
          <Greeting message="Dave Choi"></Greeting>
        </header>
      </div>
    );
  }
}

export default App;
