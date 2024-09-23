const items = [
    { name: "john", age: 20 },
    { name: "kum", age: 30 },
    { name: "linda", age: 40 },
];
const john = items.find((item) => {
    return item.name === "john";
});
console.log(john);
