import { Div, Title, Subtitle } from "../components";
import * as D from "../data";

export default function WrapTest() {
  const boxes = D.range(1, 30 + 1).map((number) => {
    return (
      <p key={number} className={`border-2 border-blue-300 p-1 mt-1 ml-1`}>
        {number}
      </p>
    );
  });
  return (
    <section className="mt-4">
      <Title>WrapTest</Title>
      <Div className="overflow-hidden flex flex-col mt-4 w-1/2 bg-gray-200">
        <Div className="mt-2">
          <Subtitle>flex-row flex-wrap</Subtitle>
          <Div className="p-4 flex flex-row flex-wrap">{boxes}</Div>
        </Div>
        <Div className="mt-2">
          <Subtitle>flex-row flex-wrap-reverse</Subtitle>
          <Div className="p-4 flex flex-row flex-wrap-reverse">{boxes}</Div>
        </Div>
        <Div className="mt-2">
          <Subtitle>flex-row flex-nowrap</Subtitle>
          <Div className="p-4 flex flex-row flex-nowrap overflow-hidden">
            {boxes}
          </Div>
        </Div>
      </Div>

      <Div className="overflow-scroll flex flex-row mt-4 bg-gray-200">
        <Div className="mr-8">
          <Subtitle>flex-column flex-wrap</Subtitle>
          <Div className="p-4 h-40 min-h-10 flex flex-col flex-wrap overflow-hidden">
            {boxes}
          </Div>
        </Div>
        <Div className="mr-8">
          <Subtitle>flex-column flex-wrap-reverse</Subtitle>
          <Div className="p-4 h-40 min-h-40 flex flex-col-reverse flex-wrap overflow-hidden">
            {boxes}
          </Div>
        </Div>
        <Div className="mr-8">
          <Subtitle>flex-column flex-nowrap</Subtitle>
          <Div className="p-4 h-40 min-h-40 flex flex-col flex-wrap overflow-scroll">
            {boxes}
          </Div>
        </Div>
      </Div>
    </section>
  );
}
