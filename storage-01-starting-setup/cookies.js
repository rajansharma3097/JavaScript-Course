const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

storeBtn.addEventListener('click', () => {
  const uid = 'u123';
  const user = {
    name: 'RJay',
    age: 23,
    hobbies: ["cricket", 'music']
  }
  document.cookie = `uid=${uid}`;
  document.cookie = `user=${JSON.stringify(user)}`;
});

retrBtn.addEventListener('click', () => {
  console.log(document.cookie);
});