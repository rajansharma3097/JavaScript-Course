const h1 = document.getElementById('main-title');

h1.textContent = "Some New Title!!";
h1.style.color = "white";
h1.style.backgroundColor = "black";

const lastLi = document.querySelector("li:last-of-type");
lastLi.textContent = lastLi.textContent + " (Changed!)";

const listItemElements = document.querySelectorAll('li');

for (const listItemEl of listItemElements) {
    console.dir(listItemEl);
}
