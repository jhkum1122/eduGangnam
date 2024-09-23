function getEmployee(id) {
  return [id, "office ST", "france"];
}

const [id, officeAddress] = getEmployee(22);

// const { name: fullName, age } = getEmployee(22);

console.log("employee", id, officeAddress);
