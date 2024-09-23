function getEmployee(id) {
  return {
    name: "john",
    age: 35,
    address: "123 st",
    cont: "United States",
  };
}

const { name: fullName, age } = getEmployee(22);
// const { name: fullName, age } = getEmployee(22);

console.log("employee", fullName, age);
