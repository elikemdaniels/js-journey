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

function makeUser(name, age, gender, country) {
  return {
    name,
    age,
    gender,
    country,
  };
}

let user = makeUser('Elikem', 30, 'Male', 'Ghana');
// userCountry = newUser.country;
// console.log('age' in newUser);

// For in loop

// for (let userDetails in newUser) {
//   console.log(userDetails);
// }

for (let userKeys in user) {
  console.log(user[userKeys]);
}
