// ONJECTS

// Object constructor syntax
// let student = new Object();
// console.log(student);

// Object literal syntax
let teacher = {
  name: 'Jeremy',
  age: 35,
  class: 'Science',
  isNew: false,
};

let key = prompt('What do you want to know about the teacher?', 'name');

alert(`The teacher's ${key} is ${teacher[key]}.`);
