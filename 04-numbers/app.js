// NUMBERS

// toString(base)
// let num = 255;
// console.log((67839406578907654 - 7656789).toString(36));

// Rounding
// console.log(Math.floor(3.1));
// console.log(Math.ceil(3.1));
// console.log(Math.round(3.1));
// console.log(Math.round(3.6));
// console.log(Math.round(3.5));
// console.log(Math.trunc(3.1));

// let num = 2.3456789;

// console.log(Math.round(num * 100) / 100); // round to 2 decimals
// console.log(Math.round(num * 1000) / 1000); // round to 3 decimals
// console.log(Math.round(num * 10000) / 10000); // round to 4 decimals

// console.log(num.toFixed(2)); // round to 2 decimals, and returns a string value

// let num1 = 0.1;
// let num2 = 0.2;

// let result = num1 + num2;

// console.log(Math.random().toString(36).slice(2));

function random(min, max) {
  return (Math.random() * (max - min + 1) + min).toString(30).slice(2);
}

console.log(random(1, 9));
