import { Title, Div } from "../components";
import * as D from "../data";

const sentence = D.randomSentence(10);

export default function HeightTest() {
  return (
    <section className="mt-4">
      <Title>PaddingTest</Title>
      <Div className="p-8 m-11 border-x-2 border-y-8 border-green-600">
        <Div className="text-white bg-sky-500 h-1/2">
          <p className="text-center text-red-500">{sentence}</p>
        </Div>
        <Div className="p-8 text-white bg-orange-600">
          <p className="text-center text-red-500">{sentence}</p>
        </Div>
      </Div>
    </section>
  );
}
