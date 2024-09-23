import { SyntheticEvent } from "react";

export default function StopPropagation() {
  const onDivClick = (e: SyntheticEvent) =>
    console.log("click event bubbles on <div>");
  //   {
  //   const { isTrusted, target, bubbles, currentTarget } = e;
  //   console.log(
  //     "click event bubble on <div> occurs ",
  //     isTrusted,
  //     target,
  //     bubbles,
  //     currentTarget
  //   );
  // };

  const onButtonClick = (e: SyntheticEvent) => {
    console.log("click event bubbles on <div>");
    e.stopPropagation();
  };

  return (
    <div onClick={onDivClick}>
      <p>StopPropagation</p>{" "}
      <button onClick={onButtonClick}>Click me & stopPropagation</button>
    </div>
  );
}
