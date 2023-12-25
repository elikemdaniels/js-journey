// ARRAYS

// console.log(cars);

// cars.pop();
// console.log(cars);

// cars.shift();
// console.log(cars);

// cars.unshift('Toyota');
// console.log(cars);

// console.log(cars);
// console.log(cars.length);

// let newCars = cars;

// console.log(newCars);

// newCars.pop();
// console.log(newCars);

// newCars.unshift('Peugeot', 'Mazda', 'Ford');
// console.log(newCars);
// console.log(cars);

// console.log((newCars[0] = 'BMW'));
// console.log(cars);

// for (let car = 0; car < cars.length; car++) {
//   console.log(cars[car]);
// }

// for (let car of cars.slice(0, 5)) {
//   console.log(car);
// }

// let car = 0;

// while (car < cars.length) {
//   console.log(cars[car]);
//   car++;
// }

// do {
//   console.log(cars[car]);
//   car++;
// } while (car < cars.length);

// for (let car in cars) {
//   console.log(cars[car]);
// }

// console.log(cars == newCars);
// console.log(cars === newCars);

// let fruits = ['Apples', 'Pear', 'Orange'];

// // push a new value into the "copy"
// let shoppingCart = fruits;
// shoppingCart.push('Banana');

// // what's in fruits?
// console.log(fruits.length); // ?

// let styles = ['Jazz', 'Blues', 'Duu'];
// styles.push('Rock-n-Roll');
// let middleStyle = Math.floor(styles.length / 2);

// console.log(styles[middleStyle]);

// styles.unshift('Rap', 'Reggae');

// console.log(styles);

let newCars = ['BMW', 'Volvo', 'Saab', 'Ford', 'Tesla', 'Jaguar', 'Land Rover'];

let usedCars = ['Toyota', 'VW', 'Benz', 'Range Rover', 'Mazda'];

let strangeCars = {
  0: 'Pocco',
  1: 'Rex',
  2: 'Buvaro',
  3: 'Dodge',
  4: 'Chrysler',
  5: 'Jeep',
  6: 'Air Rover',
  7: 'Picanto',
  8: 'Chevrolet',
  9: 'Mooa',
  [Symbol.isConcatSpreadable]: true,
  length: 10,
};
// console.log(cars.slice(0, 3));
// console.log(cars);

// console.log(cars.splice(0, 3));
// console.log(cars);

// let allCars = usedCars.concat(newCars).concat(strangeCars);

// console.log(allCars);

// allCars.forEach((car) => console.log(car));

// console.log(allCars.indexOf('BMW'));

// console.log(allCars.includes('BMW'));

let students = [
  { id: 1, name: 'John', age: 20 },
  { id: 2, name: 'Jane', age: 21 },
  { id: 3, name: 'Johnny', age: 22 },
  { id: 4, name: 'Jill', age: 23 },
  { id: 5, name: 'Jake', age: 24 },
  { id: 6, name: 'Jessica', age: 25 },
  { id: 7, name: 'Jenny', age: 26 },
];

let filteredStudents = students.filter((student) =>
  student.name.startsWith('J')
);
let mappedStudents = students.map((student) => student.name.length);

console.log(filteredStudents.sort((a, b) => a.name.localeCompare(b.name)));
console.log(mappedStudents.reverse());

// Split & Join
// let drivers =
//   'Johnny, Jake, Jessica, Jenny, Samuel, Emmanuel, Daniels, Derrick';

// let driversLIst = drivers.split(', ');

// console.log(driversLIst.join(', '));

// const obj = {
//   id: 1,
//   getId: () => this.id,
// };
