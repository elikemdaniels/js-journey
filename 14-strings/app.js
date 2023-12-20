// STRINGS
let username = 'Widget with moo';
let str = 'elikem';

// console.log(username[0]);
// console.log(username[username.length - 2]);
// console.log(username.at(-2));

// console.log(username.indexOf('Widget'));
// console.log(username.indexOf('with'));
// console.log(username.indexOf('moo'));

// if (username.includes('Widget')) {
//   console.log('Found it!');
// }

// console.log(str[0].toUpperCase() + str.substring(1));

// console.log(str[0].toUpperCase() + str.slice(1));

/**
 * Checks if a string contains spam terms.
 *
 * @param {string} inputString - The string to check for spam terms
 * @returns {boolean} Whether the string contains spam terms
//  */
// function checkForSpam(inputString) {
//   const spamTerms = ['viagra', 'xxx', 'pharmacy'];

//   return spamTerms.some((term) => inputString.includes(term));
// }

// console.log(checkForSpam('buy viagra now')); // true

// function checkForSpam(inputString) {
//   let lowerCaseString = inputString.toLowerCase();

//   return lowerCaseString.includes('viagra') || lowerCaseString.includes('xxx');
// }

// console.log(checkForSpam('buy Vwiagra now for XXXXXXXXX')); // true

function truncateString(str, maxLength) {
  return str.length > maxLength ? str.slice(0, maxLength - 1) + '...' : str;
}
console.log(truncateString('Jehunamabugatti', 12)); // 'He...'
