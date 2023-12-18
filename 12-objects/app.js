// ONJECTS

// Object constructor syntax
// let student = new Object();
// console.log(student);

// Object literal syntax
// let teacher = {
//   name: 'Jeremy',
//   age: 35,
//   class: 'Science',
//   isNew: false,
// };

// let key = prompt('What do you want to know about the teacher?', 'name');

// alert(`The teacher's ${key} is ${teacher[key]}.`);

// function makeUser(name, age, gender, country) {
//   return {
//     name,
//     age,
//     gender,
//     country,
//   };
// }

// let user = makeUser('Elikem', 30, 'Male', 'Ghana');
// userCountry = newUser.country;
// console.log('age' in newUser);

// For in loop

// for (let userDetails in newUser) {
//   console.log(userDetails);
// }

// for (let prop in user) {
//   console.log(user[prop]);
// }

// let countryCodes = {
//   235: 'Togo',
//   233: 'Ghana',
//   234: 'Nigeria',
//   212: 'Zimbabwe',
// };

// for (let code in countryCodes) {
//   console.log(countryCodes[code]);
// }

// console.log(countryCodes[235]);

// function getCountry(code) {
//   return countryCodes[code];
// }

// console.log(getCountry(234));

const student = {
  name: 'Elikem',
  age: 30,
  gender: 'Male',
  country: 'Ghana',
  favColor: 'Blue',
  hobbies: ['Sports', 'Reading', 'Music'],
  isMarried: true,
  isHappy: true,
  favNumbers: [1, 2, 3, 4, 5],
};

// for (let prop in student) {
//   console.log(student[prop]);
// }

// console.log(student.age);

// Object References & Copying
// let admin = student;
// student.name = 'Lumak';

// console.log(admin.name);

let teacher = {};

Object.assign(teacher, student);

console.log(teacher);
