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

// let sentence = 'The quick brown fox jumps over the lazy dog';
// let sentenceArray = sentence.split(' ');

// console.log(sentenceArray);

// let wordCheker = (word) => {
//   sentenceArray.includes(word.toUpperCase())
//     ? console.log(`${word} is in the sentence.`)
//     : console.log(`${word} is not in the sentence.`);
// };

// wordCheker('jax');

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

// NUMBERS
// let score = 100;
// console.log(String(score));
// console.log(score.toString());

// console.log(String(null));

// DATE
// let today = new Date();
// let tomorrow = new Date(today);
// tomorrow.setDate(tomorrow.getDate() + 1);
let daysOfTheWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

// loggedDays = daysOfTheWeek.forEach(function (day) {
//   console.log(day);
// });

// loggedDays = daysOfTheWeek.forEach((day) => {
//   console.log(day);
// });

// console.log(loggedDays);

loggedDays = daysOfTheWeek.map((day) => {
  console.log(day);
});

console.log(loggedDays);

// console.log(
//   `Today is ${daysOfTheWeek[today.getDay()]} and tomorrow is ${
//     daysOfTheWeek[tomorrow.getDay()]
//   }.`
// );
// let dateOfBirth = new Date(1998, 10, 22);

// console.log(now.getFullYear() - dateOfBirth.getFullYear());

// console.log(now.getUTCFullYear() - dateOfBirth.getUTCFullYear());

// REGULAR EXPRESSIONS

// let zipCode = new RegExp('\\d{5}');
// let zipCodeRegex = zipCode.exec('Greater Accra has a zip code of 78734');

// console.log(zipCodeRegex);

// let s = "Beverly Hills 90210 was a '90s TV show set in Los Angeles.";
// s += ' 91125 is another ZIP code in the Los Angeles area.';
// console.log(s.match(zipCode));

// Exercise

// const sonnet = `Let me not to the marriage of true minds
// Admit impediments. Love is not love
// Which alters when it alteration finds,
// Or bends with the remover to remove.
// O no, it is an ever-fixed mark
// That looks on tempests and is never shaken;
// It is the star to every wand'ring bark,
// Whose worth's unknown, although his height be taken.
// Love's not time's fool, though rosy lips and cheeks
// Within his bending sickle's compass come:
// Love alters not with his brief hours and weeks,
// But bears it out even to the edge of doom.
//   If this be error and upon me proved,
//   I never writ, nor no man ever loved.`;

// let uniques = {};
// let words = sonnet.match(/\w+/g);

// for (let i = 0; i < words.length; i++) {
//   let word = words[i];
//   if (uniques[word]) {
//     uniques[word] += 1;
//   } else {
//     uniques[word] = 1;
//   }
// }

// console.log(uniques);

// function palindrome(str) {
//   return str === str.split('').reverse().join('');
// }

// function palindrome(str) {
//   str = str.toLowerCase();
//   if (str === str.split('').reverse().join('')) {
//     return `${str} is a palindrome.`;
//   } else {
//     return `${str} is not a palindrome.`;
//   }
// }

// console.log(palindrome('Redder'));

// Updated function with Array.from(str)

// function palindrome(str) {
//   str = str.toLowerCase();
//   if (str === Array.from(str).reverse().join('')) {
//     return `${str} is a palindrome.`;
//   } else {
//     return `${str} is not a palindrome.`;
//   }
// }

// console.log(palindrome('Gazelle'));
