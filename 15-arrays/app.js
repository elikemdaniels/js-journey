// ARRAYS

let cars = ['BMW', 'Volvo', 'Saab', 'Ford'];

console.log(cars);

cars.pop();
console.log(cars);

cars.shift();
console.log(cars);

cars.unshift('Toyota');
console.log(cars);

cars.push('Tesla', 'Jaguar', 'Land Rover', 'Hyundai');
console.log(cars);
console.log(cars.length);

let newCars = cars;

console.log(newCars);

newCars.pop();
console.log(newCars);

newCars.unshift('Peugeot', 'Mazda', 'Ford');
console.log(newCars);
console.log(cars);

console.log((newCars[0] = 'BMW'));
console.log(cars);

// for (let car = 0; car < cars.length; car++) {
//   console.log(cars[car]);
// }

// for (let car of cars) {
//   console.log(car);
// }

let car = 0;

// while (car < cars.length) {
//   console.log(cars[car]);
//   car++;
// }

do {
  console.log(cars[car]);
  car++;
} while (car < cars.length);
