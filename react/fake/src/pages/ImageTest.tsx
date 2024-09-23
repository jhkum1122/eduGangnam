import { Title, Div, Subtitle } from "../components";
import * as D from "../data";

const src = D.randomImage(3000, 1600);

export default function ImageTest() {
  return (
    <section className="mt-4">
      <Title>ImageTest</Title>
      <img src={src} className="bg-gray-400" width={400} height={400}></img>
      <Div className="mt-4 bg-gray-400 h-80" src={src}>
        <Subtitle className="text-gray-500">Some Text here</Subtitle>
      </Div>
    </section>
  );
}
