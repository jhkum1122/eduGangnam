// sum.test.js

const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test("2 더하기 2는 4", () => {
  expect(sum(2, 2)).toBe(4);
})

test("객체 할당 테스트", () => {
  const data = {one :1}
  data["two"] = 2;
  expect(data).toEqual({one:1, two:2});
})


test("양수 더하기", () => {
  for (let a = 0; a < 10; a++) {
    for (let b = 0; b < 10; b++) {
      expect(a + b).toBeGreaterThanOrEqual(0);      
    }
  }
});

test("null", () => {
  const n = null;
  expect(n).toBeNull();        // n이 null인지 확인
  expect(n).toBeDefined();     // n이 정의되어 있는지 확인
  expect(n).not.toBeUndefined(); // n이 undefined가 아닌지 확인
  expect(n).not.toBeTruthy();  // n이 truthy하지 않은지 확인
  expect(n).toBeFalsy();       // n이 falsy한지 확인

})

test("zero", () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
})




test("two plus two", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);
  expect(value).toBe(4);  expect(value).toEqual(4);
})

test("adding floating point numbers", () => {
  const value = 0.1 + 0.2;
  expect(value).toBeGreaterThan(0.3);
  
})

test("there I no I in team", () => {
  expect("team").not.toMatch(/I/);  
})


test("but there is a 'stop' in Christoph", () => {
  expect("Christoph").toContain("stop");  
});


const shoppingList =[
  "diapers",
  "kleenex",
  "trash bags",
  "milk"
]

test("the shopping list has milk on it", () => {
  expect(shoppingList).toContain("milk");  
  expect(new Set(shoppingList)).toContain("milk");  
})

test("the fetch fails with an error", async () => {
  try {
    // await를 사용하여 fetchData 함수의 비동기 작업 완료를 기다림
    const data = await fetchData();
    console.log("Data fetched successfully:", data);
    // 비동기 작업 성공 시 여기서 추가적인 검증 가능
    // expect(shoppingList).toContain("milk");  
    // expect(new Set(shoppingList)).toContain("milk");  
  } catch (error) {
    // 비동기 작업 실패 시 에러 처리
    console.error("Error fetching data:", error);
    throw error; // 테스트 실패로 처리
  }
  // expect(shoppingList).toContain("milk");  
  // expect(new Set(shoppingList)).toContain("milk");  
})

