// SWITCH STATEMENT

let question = +prompt('In which year did Ghana gain independence?');

switch (question) {
  case 1957:
    alert(`That's correct.`);
    break;
  case 1958:
    alert(`You nearly got it.`);
    break;
  default:
    alert(`Sorry, try again`);
    break;
}
