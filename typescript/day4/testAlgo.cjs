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
function validateStringLength(str) {
  const minLength = 1;
  const maxLength = 1000000;

  if (str.length >= minLength && str.length <= maxLength) {
    console.log("문자열의 길이가 유효합니다." + str.length);
    return true;
  } else {
    console.log(
      "문자열의 길이가 유효하지 않습니다. 길이는 1에서 1,000,000 사이여야 합니다." +
        str.length
    );
    return false;
  }
}

// 'line' 이벤트 리스너를 설정합니다. 사용자가 한 줄을 입력하면 실행됩니다.
rl.on("line", function (line) {
  // 입력된 줄을 input 배열에 저장합니다.
  //  console.log("입력된 줄을 input 배열에 저장");
  input = [line];

  let noSpacesStr = line.replace(/\s/g, "");
  /*
  console.log("input = ", input);
  console.log("line = ", line);
  console.log("noSpacesStr = ", noSpacesStr);
*/
  // let valStr = false;
  validateStringLength(noSpacesStr);
}).on("close", function () {
  // 입력이 종료되면 실행됩니다.
  // 첫 번째 입력을 str 변수에 저장합니다.
  console.log("입력이 종료되면 실행됩니다. 첫 입력을 str변수에 저장합니다.");
  str = input[0];
});
