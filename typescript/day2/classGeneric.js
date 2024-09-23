// 네임스페이스 정의
var GenericNamespace;
(function (GenericNamespace) {
    // 제네릭 클래스를 네임스페이스 안에 정의
    var Box = /** @class */ (function () {
        function Box(content) {
            this._content = content;
        }
        Object.defineProperty(Box.prototype, "content", {
            get: function () {
                return this._content;
            },
            set: function (value) {
                this._content = value;
            },
            enumerable: false,
            configurable: true
        });
        // 내용물을 출력하는 메서드
        Box.prototype.printContent = function () {
            console.log("Box contains: ".concat(this._content));
        };
        return Box;
    }());
    GenericNamespace.Box = Box;
    // 또 다른 제네릭 클래스 예제
    var Pair = /** @class */ (function () {
        function Pair(key, value) {
            this._key = key;
            this._value = value;
        }
        Object.defineProperty(Pair.prototype, "key", {
            get: function () {
                return this._key;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Pair.prototype, "value", {
            get: function () {
                return this._value;
            },
            enumerable: false,
            configurable: true
        });
        Pair.prototype.printPair = function () {
            console.log("Pair - Key: ".concat(this._key, ", Value: ").concat(this._value));
        };
        return Pair;
    }());
    GenericNamespace.Pair = Pair;
})(GenericNamespace || (GenericNamespace = {}));
// 네임스페이스를 사용하여 Box 클래스를 생성
var stringBox = new GenericNamespace.Box("Hello, World!");
stringBox.printContent(); // 출력: Box contains: Hello, World!
var numberBox = new GenericNamespace.Box(42);
numberBox.printContent(); // 출력: Box contains: 42
// 네임스페이스를 사용하여 Pair 클래스를 생성
var pair = new GenericNamespace.Pair("one", 1);
pair.printPair(); // 출력: Pair - Key: one, Value: 1
