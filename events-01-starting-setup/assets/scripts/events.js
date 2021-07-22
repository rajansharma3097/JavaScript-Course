const buttons = document.querySelectorAll('button');

const buttonClickHandler = event => {
  event.target.disabled = true;
  console.log(event);
}

// button.onclick = buttonClickHandler;

// button.addEventListener('click', buttonClickHandler);

// setTimeout(() => {
//   button.removeEventListener('click', buttonClickHandler);
// }, 2000);

buttons.forEach(button => {
  button.addEventListener('click', buttonClickHandler);
});

const form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(event);
});

