// 네임스페이스 정의
namespace GenericNamespace {
  // 제네릭 클래스를 네임스페이스 안에 정의
  export class Box<T> {
    private _content: T;

    constructor(content: T) {
      this._content = content;
    }

    get content(): T {
      return this._content;
    }

    set content(value: T) {
      this._content = value;
    }

    // 내용물을 출력하는 메서드
    printContent(): void {
      console.log(`Box contains: ${this._content}`);
    }
  }

  // 또 다른 제네릭 클래스 예제
  export class Pair<K, V> {
    private _key: K;
    private _value: V;

    constructor(key: K, value: V) {
      this._key = key;
      this._value = value;
    }

    get key(): K {
      return this._key;
    }

    get value(): V {
      return this._value;
    }

    printPair(): void {
      console.log(`Pair - Key: ${this._key}, Value: ${this._value}`);
    }
  }
}

// 네임스페이스를 사용하여 Box 클래스를 생성
const stringBox = new GenericNamespace.Box<string>("Hello, World!");
stringBox.printContent(); // 출력: Box contains: Hello, World!

const numberBox = new GenericNamespace.Box<number>(42);
numberBox.printContent(); // 출력: Box contains: 42

// 네임스페이스를 사용하여 Pair 클래스를 생성
const pair = new GenericNamespace.Pair<string, number>("one", 1);
pair.printPair(); // 출력: Pair - Key: one, Value: 1
