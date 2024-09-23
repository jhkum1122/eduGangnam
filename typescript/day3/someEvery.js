const widgets = [
  {
    id: 1,
    color: "blue",
  },
  {
    id: 2,
    color: "yellow",
  },
  {
    id: 3,
    color: "orange",
  },
  {
    id: 4,
    color: "black",
  },
];

console.log(
  "some are blue",
  widgets.some((item) => {
    return item.color === "blue";
  })
);

console.log(
  "every are blue",
  widgets.every((item) => {
    return item.color === "blue";
  })
);
