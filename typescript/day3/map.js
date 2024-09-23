const employees = [
    { name: "john", id: 1 },
    { name: "cindy", id: 2 },
    { name: "ruby", id: 3 },
];
const elements = employees.map((item, index) => {
    console.log(index);
    // return `<div>${item.id} - ${item.name}</div>`;
    return `${item.id * 2}`;
});
// const results = filterItems.filter((item, index) => {
//   console.log(index);
//   return item.name === "john";
// });
console.log(elements);
