interface GreetingProps {
  message: string;
}

export default function Greeting(props: GreetingProps) {
  console.log("redering Greeting");

  return <div>{props.message}</div>;
}
