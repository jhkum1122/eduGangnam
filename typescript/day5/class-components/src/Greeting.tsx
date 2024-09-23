import React, { FunctionComponent } from "react";

interface GreetingProps {
  name?: string;
}

interface GreetingState {
  message: string;
}

export default class Greeting extends React.Component<
  GreetingProps,
  GreetingState
> {
  constructor(props: GreetingProps) {
    super(props);
    this.state = {
      message: `Hello from, ${props.name}`,
    };
  }

  static getDerivedStateFromProps(props: GreetingProps, state: GreetingState) {
    console.log(props, state);
    if (props.name && props.name !== state.message) {
      const newState = { ...state };
      // newState.message = Greeting.getNewMessage(props.name);
      newState.message = "Hello from, " + props.name;
      return newState;
    }
    return state;
  }

  // function getNewMessage(name: string): string {
  //   console.log();
  //   return "Hello from," + name;
  // }

  render() {
    if (!this.props.name) {
      return <div>no name given</div>;
    }
    console.log(`{this.state.message}`);
    return <div>{this.state.message}</div>;
  }
}
