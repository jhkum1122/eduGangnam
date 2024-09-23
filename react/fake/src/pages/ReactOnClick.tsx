import  type {SyntheticEvent} from "react";

export default function ReactOnClick()
{
  const onclick = (e: SyntheticEvent) => {
    const { isTrusted, target, bubbles } = e;
    console.log("mouse click occurs on <button>", isTrusted, target, bubbles);
  }

  return (
  <div>
    <p>
      ReactOnClick
    </p>
    <button onClick={onclick}>
      click me
    </button>
  </div>);
}

