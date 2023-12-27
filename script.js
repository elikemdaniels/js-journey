let courseTitle = 'JavaScript Course';
let main = document.getElementById('page-content');
let mainContent = document.createElement('h1');

mainContent.innerText = `Welcome to the most amazing ${courseTitle}`;

main.appendChild(mainContent);

// let contentBody = document.getElementById('content-body');
// let buttonClick = document.getElementById('colour-change');

// buttonClick.addEventListener('click', () => {
//   contentBody.style.backgroundColor = 'blue';
// });

// let contentBody = document.getElementById('content-body');
// let buttonClick = document.getElementById('colour-change');

// // Function to generate a random color
// function getRandomColor() {
//   // Generate a random color in hexadecimal format
//   const letters = '0123456789ABCDEF';
//   let color = '#';
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// buttonClick.addEventListener('click', () => {
//   // Set the backgroundColor to a random color
//   contentBody.style.backgroundColor = getRandomColor();
// });

let contentBody = document.getElementById('content-body');
let buttonClick = document.getElementById('colour-change');
let header = contentBody.querySelector('h1'); // Assuming there is an h1 element inside contentBody

// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to calculate the luminance of a color
function getLuminance(color) {
  const hex = color.substring(1); // Remove the '#' character
  const rgb = parseInt(hex, 16); // Convert hex to a number
  const r = (rgb >> 16) & 0xff; // Extract the red component
  const g = (rgb >> 8) & 0xff; // Extract the green component
  const b = (rgb >> 0) & 0xff; // Extract the blue component

  // Calculate luminance
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance;
}

buttonClick.addEventListener('click', () => {
  // Set the backgroundColor to a random color
  const randomColor = getRandomColor();
  contentBody.style.backgroundColor = randomColor;

  // Check if the background color is too dark
  header.style.color = getLuminance(randomColor) < 128 ? 'white' : 'black';
});
