// ARRAYS

// let cars = ['BMW', 'Volvo', 'Saab', 'Ford'];

// console.log(cars);

// cars.pop();
// console.log(cars);

// cars.shift();
// console.log(cars);

// cars.unshift('Toyota');
// console.log(cars);

// cars.push('Tesla', 'Jaguar', 'Land Rover', 'Hyundai');
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

let fruits = ['Apples', 'Pear', 'Orange'];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push('Banana');

// what's in fruits?
console.log(fruits.length); // ?
