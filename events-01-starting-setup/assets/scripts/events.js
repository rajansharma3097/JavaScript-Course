const button = document.querySelector('button');

const buttonClickHandler = event => {
  event.target.disabled = true;
  console.log(event);
}

// button.onclick = buttonClickHandler;

// button.addEventListener('click', buttonClickHandler);

// setTimeout(() => {
//   button.removeEventListener('click', buttonClickHandler);
// }, 2000);

// buttons.forEach(button => {
//   button.addEventListener('click', buttonClickHandler);
// });

const form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(event);
});

const div = document.querySelector('div');

div.addEventListener('click', event => {
  console.log("DIV");
  console.log(event);
});

button.addEventListener('click', event => {
  event.stopPropagation();
  console.log("Button");
  console.log(event);
});

const listItems = document.querySelectorAll('li');

const list = document.querySelector('ul');

// listItems.forEach(listItem => {
//   listItem.addEventListener('click', event => {
//     event.target.classList.toggle('highlight');
//   })
// });

list.addEventListener('click', event => {
  event.target.classList.toggle('highlight');
})