// FUNCTIONS

// Function Declaration
// function showMessage() {
//   console.log('Hello, JavaScript');
// }

// showMessage();

// function showMessage(username) {
//   console.log(`Hello, ${username}. You're welcome.`);
// }

// showMessage('elikem');

// Local Variables
// function showMessage(username) {
//   let message = `Hello, ${username}. JavaScript is amazing.`;
//   console.log(message);
// }

// showMessage('elikem'.toUpperCase());

// Outer Variables

// let message = `Hello, JavaScript`;

// function showMessage() {
//   message = 'Hi';
//   console.log(message);
// }

// showMessage();

// Parameters & Arguments

// function showMessage(from, message) {
//   from = undefined;
//   console.log(`${from ?? 'Anonymous'}: ${message ?? 'No message'}.`);
// }

// showMessage('How are you?');

// Returning a Value
// function numberAdder(num1, num2) {
//   return num1 + num2;
// }

// let result = numberAdder(120, 300);
// console.log(result);

// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm('Do you have permission?');
//   }
// }

// let age = prompt('How old are you?', 18);

// if (checkAge(age)) {
//   alert('Permission granted.');
// } else {
//   alert('Permission denied.');
// }

// function checkAge(age) {
//   return age > 18 ? true : confirm('Hello');
// }

// console.log(checkAge(20));

// Function Expression
let addNumbers = function (a, b) {
  return a + b;
};
let mee = addNumbers;
console.log(mee(2, 122));
