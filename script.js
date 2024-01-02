// DOM MANIPULATION

// Select charactrs using id
// const characters = document.querySelector('#star-wars-characters');

// Select characters using tag
const characters = document.querySelector('ul');

// Select character, Luke Skywalker, using class
// const lukeSkywalker = characters.querySelector('luke');

// Select character, Luke Skywalker, using tag
// const lukeSkywalker = characters.querySelector('li');

// Slelect character, Luke Skywalker using attribute
const lukeSkywalker = characters.querySelector('[data-type="hero"]');

lukeSkywalker.style.color = 'blue';
