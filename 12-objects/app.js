// OBJECTS

/**
 * Creates a student object with properties like name, age, gender etc.
 * Calculates the number of properties in the student object using Object.keys.
 * Logs the number of properties to the console.
 */
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
  sayHello() {
    console.log(`Hello, ${student.name}`);
  },
};
const studentLength = Object.keys(student).length;
console.log(studentLength);
