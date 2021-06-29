const task3Element = document.getElementById('task-3');

function first() {
    alert("first function called!!");
}

function second(name) {
    alert("Hello " + name);
}

first();
second('RJay');

task3Element.addEventListener('click', first);

function third(str1, str2, str3) {
    return `${str1} ${str2} ${str3}`;
}

alert(third("Hello", "World", "RJay"));

