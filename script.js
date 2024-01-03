// DOM MANIPULATION

// Select charactrs using id
// const characters = document.querySelector('#star-wars-characters');

// Array of characters
const actors = ['James Bond', 'Sylvester Stallone', 'Steven Seagal'];
const newCharacters = actors.map((actor) => {
  const character = document.createElement('li');
  character.textContent = actor;
  return character;
});

// Select characters using tag
const characters = document.querySelector('ul');

// Select character, Luke Skywalker, using class
// const lukeSkywalker = characters.querySelector('luke');

// Select character, Luke Skywalker, using tag
// const lukeSkywalker = characters.querySelector('li');

// Slelect character, Luke Skywalker using attribute
const lukeSkywalker = characters.querySelector('[data-type="hero"]');
const heading = document.querySelector('h1');
const colourChangeButton = document.querySelector('#colour-change-button');
const hideShowButton = document.querySelector('#hide-show-button');
const defaultText = hideShowButton.textContent;
const toggledText = 'Show Heading';

colourChangeButton.addEventListener('click', () => {
  lukeSkywalker.classList.toggle('red');
});

function hideHeadingChangeButtonText() {
  // Logic for toggling button text
  if (hideShowButton.textContent === defaultText) {
    hideShowButton.textContent = toggledText;
  } else {
    hideShowButton.textContent = defaultText;
  }

  heading.classList.toggle('hide');
}

// hideShowButton.addEventListener('click', () => {
//   hideHeadingChangeButtonText();
// });

// CALLBACK FUNCTION IN ACTION
hideShowButton.addEventListener('click', hideHeadingChangeButtonText);
