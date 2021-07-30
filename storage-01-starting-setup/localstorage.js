const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

const userId = 'u123';

const user = {
  name: 'RJay',
  age: 23,
  hobbies: ["cricket", 'music']
}

storeBtn.addEventListener('click', () => {
  sessionStorage.setItem('uid', userId);
  localStorage.setItem('user', JSON.stringify(user));
});

retrBtn.addEventListener('click', () => {
  console.log(sessionStorage.getItem('uid'));
  console.log(JSON.parse(localStorage.getItem('user')));
});