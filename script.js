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

// // EMAIL ADDRESS CREATOR

// let username = 'EDINAM';
// let emailAddress = username + '@protonmail.com';
// let conatainsWord = emailAddress.includes(username);

// console.log(emailAddress);
// console.log(conatainsWord);

let sentence = 'The quick brown fox jumps over the lazy dog';
let sentenceArray = sentence.split(' ');

console.log(sentenceArray);

let wordCheker = (word) => {
  sentenceArray.includes(word)
    ? console.log(`${word} is in the sentence.`)
    : console.log(`${word} is not in the sentence.`);
};

wordCheker('jax');

// for (let word = 0; word < sentenceArray.length; word++) {
//   console.log(sentenceArray[word]);
// }

// for (word in sentenceArray) {
//   console.log(sentenceArray[word]);
// }

// for (let word of sentenceArray) {
//   console.log(word);
// }
// let word = 0;
// while (word < sentenceArray.length) {
//   console.log(sentenceArray[word]);
//   word++;
// }

// DO WHILE LOOP
// do {
//   console.log(sentenceArray[word]);
//   word++;
// } while (word < sentenceArray.length);
