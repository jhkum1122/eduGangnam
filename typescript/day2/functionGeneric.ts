/*
interface HasLength {
  length: number;
}

function getLength<T>(arg: T): number {
  if ((arg as any).hasOwnProperty("length")) {
    //length라는 속성이 있다면 True로 옮
    return arg["length"];
  }

  return 0;
}

console.log(getLength<number>(22));
console.log(getLength("Hello World!"));

*/

interface HasLength {
  length: number;
}

/*
function getLength<T extends HasLength>(arg: T): number {
  if ((arg as any).hasOwnProperty("length")) {
    //length라는 속성이 있다면 True로 옮
    return arg["length"];
  }

  return 0;
}
*/

// getLength 함수 정의
function getLength<T extends HasLength>(item: T): number {
  return item.length;
}

// console.log(getLength<number>(22));
console.log(getLength("Hello World!"));
// 올바르게 제약 조건을 만족하는 사용 예
console.log(getLength("Hello")); // 문자열은 length 속성을 가짐
console.log(getLength([1, 2, 3, 4])); // 배열도 length 속성을 가짐
console.log(getLength({ length: 10 })); // 객체가 length 속성을 가짐
export {};
