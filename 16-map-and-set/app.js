// MAP & SET
let students = [
  {
    id: 1,
    name: 'John',
    age: 20,
    grades: [9, 10, 10, 10, 9],
    attendace: 120,
  },
  {
    id: 2,
    name: 'Jane',
    age: 22,
    grades: [10, 10, 9, 8, 9],
    attendace: 100,
  },
  {
    id: 3,
    name: 'Jerry',
    age: 20,
    grades: [8, 8, 10, 9, 10],
    attendace: 120,
  },
];

// let visitCount = new Map();
// visitCount.set(students[0].attendace, 245);

// console.log(visitCount.get(students[0].attendace));

let recipeMap = new Map([
  ['tomato', 120],
  ['pepper', 100],
  ['onion', 150],
  ['garlic', 100],
  ['ginger', 100],
  ['cucumber', 100],
]);

// for (let recipeItem of recipeMap.keys()) {
//   console.log(recipeItem);
// }

// for (let recipeItemCount of recipeMap.values()) {
//   console.log(recipeItemCount);
// }

// for (let entries of recipeMap) {
//   console.log(entries);
// }

let [recipeKey, recipeValue] = recipeMap.entries().next().value;

console.log(recipeValue);
