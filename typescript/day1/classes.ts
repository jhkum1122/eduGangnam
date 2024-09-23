/*
// 1번 예제
class Person{
  constructor(){
    console.log("생성자가 만들어짐");
  }
  msg : string;

  speak(){
    console.log(this.msg);
  }
}

const tim = new Person();
// tim.msg = "안녕안녕";
tim.speak();


// 2번째 예제
class Person{
  constructor(private msg : String){
    console.log("생성자가 만들어짐");
  }
  
  speak(){
    console.log(this.msg);
  }
}

const tim = new Person("Hello World!");
// tim.msg = "안녕안녕";
tim.speak();

class Person {
  private message: string;

  constructor(private name: string) {
    this.message = "";
    console.log("생성자가 만들어짐");
  }

  get Message() {
    if (!this.message.includes(this.name)) {
      throw new Error("message is missing speaker's name");
    }
    return this.message;
  }

  set Message(value: string) {
    this.message = value;
  }
}

// 올바른 객체 생성
const tim = new Person("Tim"); // 올바른 이름 전달

// 메시지 설정
tim.Message = "Hello World! Tim"; // 이름을 포함하는 메시지 설정

// 메시지 가져오기
console.log(tim.Message); // "Hello World! Tim" 출력
*/
