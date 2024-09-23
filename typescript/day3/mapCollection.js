const mappedEmp = new Map();

mappedEmp.set("kum", { fullName: "kum jungho", id: 1 });
mappedEmp.set("linda", { fullName: "linda kim", id: 2 });
mappedEmp.set("ruby", { fullName: "ruby lee", id: 3 });

console.log(mappedEmp);
console.log("get", mappedEmp.get("linda"));
console.log("size", mappedEmp.size);

for (let [key, value] of mappedEmp) {
  console.log("iterate ", key, value);
}
