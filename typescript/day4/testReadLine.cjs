// import readline from "readline";
// readline 모듈을 가져와서 rl 인터페이스를 생성합니다.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin, // 표준 입력을 사용하도록 설정합니다.
  output: process.stdout, // 표준 출력을 사용하도록 설정합니다.
});

// 입력을 저장할 배열을 선언합니다.
let input = [];
//kjh 20240702
function printPersonal(name, age) {
  return `내 나이는 ${age}이고 이름은 ${name} `;
}

//kjh 20240702
function separateStringAndNumbers(input) {
  // 모든 숫자와 문자를 찾는 정규 표현식
  const numberPattern = /\d+/g;
  const stringPattern = /[a-zA-Z]+/g;

  // 숫자를 찾고 배열로 변환
  const numbers = input.match(numberPattern) || [];
  // 문자열을 찾고 배열로 변환
  const strings = input.match(stringPattern) || [];

  // 숫자를 정수형으로 변환
  const intNumbers = numbers.map(Number);

  return {
    numbers: intNumbers,
    strings: strings,
  };
}

// 'line' 이벤트 리스너를 설정합니다. 사용자가 한 줄을 입력하면 실행됩니다.
rl.on("line", function (line) {
  // 입력된 줄을 input 배열에 저장합니다.
  console.log("입력된 줄을 input 배열에 저장");
  input = [line];

  let noSpacesStr = line.replace(/\s/g, "");

  console.log("input = ", input);
  console.log("line = ", line);
  console.log("noSpacesStr = ", noSpacesStr);

  const result = separateStringAndNumbers(noSpacesStr);
  console.log("Numbers: ", result.numbers); // [123, 456, 789]
  console.log("Strings: ", result.strings); // ["abc", "def", "ghi"]

  printPersonal(result.strings, result.numbers);
}).on("close", function () {
  // 입력이 종료되면 실행됩니다.
  // 첫 번째 입력을 str 변수에 저장합니다.
  console.log("입력이 종료되면 실행됩니다. 첫 입력을 str변수에 저장합니다.");
  str = input[0];
});
