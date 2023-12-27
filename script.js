// STRINGS

// let studentName = 'Emmanuel';
// let replacedName = studentName.replace('Emmanuel', 'John');

// console.log(studentName);
// console.log(replacedName);
// console.log(studentName.length === replacedName.length);
// console.log(studentName.slice(2, studentName.length).toUpperCase());

// let userDetails = {
//   username: 'olamide',
//   email: 'olamide@gmail.com',
//   password: '@87@092hbjhAHJ897!!@',
//   isActive: true,
// };

// let prompter = prompt('What is your password?');

// function passwordValidator(prompter) {
//   if (prompter.length >= userDetails.password.length) {
//     console.log('You are logged in');
//   } else {
//     console.log('Your password is too short');
//   }
// }

// passwordValidator(prompter);

// REGISTERED USERS LIST

// const registeredUsers = [
//   'olamide',
//   'emeka',
//   'akinboye',
//   'oluwaseun',
//   'oreogundipe',
//   'chiamaka',
//   'ikenna',
// ];

// const firstName = 'John';
// const lastName = '';

// if (!firstName && !lastName) {
//   console.log(`You have a full name, ${firstMan} ${lastName}.`);
// } else {
//   console.log(`You have only first name, ${firstName}.`);
// }

// EMAIL ADDRESS CREATOR

let username = 'edinam';
let emailAddress = username.slice(1, -1) + '@protonmail.com';
let conatainsWord = emailAddress.includes(username.slice(2, -1));

console.log(emailAddress);
console.log(conatainsWord);
