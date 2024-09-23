/*
import { Component } from "react";

const App = () => {
  const texts = ["hello", "world"].map((item, index) => (
    <p key={index} children={item}></p>
  ));
  return <div children={texts}></div>;
};

export default App;
*/
/*
import { Component } from "react";

const App = () => {
  //refactoring map 함수 사용
  // [].map((item, index) =><tag>)
  // const employees = [
  //   { name: "john", id: 1 },
  //   { name: "cindy", id: 2 },
  //   { name: "ruby", id: 3 },
  // ];
  // const elements = employees.map((item, index) => {
  //   return `<div>${item.id} - ${item.name}</div>`;
  // });
  const texts = ["hello", "world"].map((item, index) => (
    <p key={index}>{item}</p>
  ));
  return <div>{texts}</div>;

  
  // const texts = [<p key="1">hello</p>, <p key="2">world</p>];
  // return <div>{texts}</div>;
  
};
export default App;
*/
/*
import { Component } from "react";
import ClassComponent from "./ClassComponent";
import ArrowComponent from "./ArrowComponent";



const App = () => {
  return (
    <ul>
      <ClassComponent
        href="http://www.google.com"
        text="go to google"
      ></ClassComponent>
      <ArrowComponent href="http://www.x.com" text="go to X"></ArrowComponent>
    </ul>
  );
};

export default App;
*/
/*
const App = () => {
  return <h1>function Component</h1>;
};

export default App;
*/

/*
export default function App() {
  return <div>Hello Function!</div>;
}
*/

/*
import ClassComponent from "./ClassComponent";

export default class App extends Component {
  render() {
    return (
      <ul>
        <ClassComponent
          href="http://www.google.com"
          text="go to google"
        ></ClassComponent>
        <ClassComponent href="http://www.x.com" text="go to x"></ClassComponent>
      </ul>
    );
  }
}
*/
// 20240704
/*
import EventLisner from "./pages/EventListner";
import OnClick from "./pages/OnClick";
import ReactOnClick from "./pages/ReactOnClick";
import DispatchEvent from "./pages/DispatchEvent";
import EventBubbling from "./pages/EventBubbling";
import StopPropagation from "./pages/StopPropagation";
import VariousInputs from "./pages/VariousInputs";
import OnChange from "./pages/OnChange";
import FileInput from "./pages/FileInput";
import FileDrop from "./pages/FileDrop";
import DragDrop from "./pages/DragDrop";

export default function App() {
  return (
    <div>
      <EventLisner />
      <OnClick />
      <ReactOnClick />
      <DispatchEvent />
      <EventBubbling />
      <StopPropagation />
      <VariousInputs />
      <OnChange />
      <FileInput />
      <FileDrop />
      <DragDrop />
    </div>
  );
}


import Bootstrap from "./pages/Bootstrap";
import Icon from "./pages/Icon";
import Style from "./pages/Styles";
import "./index.css";
// import UsingIcon from "./pages/UsingIcon";
// import UsingIconWithCSSClass from "./pages/UsingIconWithCSSClass";

export default function App() {
  return (
    <div>
   
      <Style />
      <Icon />
      <Bootstrap />
    </div>
  );
}
*/

/*
import Tailwindcss from "./pages/Tailwindcss";
import Color from "./pages/Color";
import TextsTest from "./pages/TextsTest";

export default function App() {
  return (
    <div>
      <TextsTest></TextsTest>
      <Color></Color>
      <Tailwindcss></Tailwindcss>
    </div>
  );
}

import DivTest from "./pages/DivTest";
import ViewportTest from "./pages/ViewportTest";
import HeightTest from "./pages/HeightTest";
import PaddingTest from "./pages/PaddingTest";
import MarginTest from "./pages/MarginTest";
import ImageTest from "./pages/ImageTest";
import BackgroundTest from "./pages/BackgroundImageTest";
import DisplayTest from "./pages/DisplayTest";
import DisplayNoneTest from "./pages/DisplayNoneTest";
import AvatarTest from "./pages/AvatarTest";
import PositionTest from "./pages/PositionTest";
import OverlayTest from "./pages/OverlayTest";

export default function App() {
  return (
    <main>
      <DivTest />
      <ViewportTest />
      <HeightTest />
      <PaddingTest />
      <MarginTest />
      <ImageTest />
      <BackgroundTest />
      <DisplayTest />
      <DisplayNoneTest />
      <AvatarTest />
      <PositionTest />
      <OverlayTest />
    </main>
  );
}
*/

import DirectionTest from "./pages/DirectionTest";
import WrapTest from "./pages/WrapTest";
import MinMaxTest from "./pages/MinMaxTest";
import JustifyCenterTest from "./pages/JustifyCenterTest";
import AlignTest from "./pages/AlignTest";
import UserContainer from "./pages/UserContainer";
import CardContainer from "./pages/CardContainer";
import ButtonTest from "./pages/ButtonTest";
import ModalTest from "./pages/ModalTest";
import InputTest from "./pages/InputTest";

export default function App() {
  return (
    <main>
      {/* <CardContainer />
      <UserContainer />
      <AlignTest />
      <JustifyCenterTest />
      <MinMaxTest />
      <WrapTest />
      <DirectionTest /> */}
      {/* <ButtonTest />
      <InputTest /> */}
      <ModalTest />
    </main>
  );
}
