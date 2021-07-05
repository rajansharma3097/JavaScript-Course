
const sayHello = (name) => {
  console.log('Hi ' + name);
}
sayHello('RJay');

const greet = (greet, name) => {
  console.log(greet + ' ' + name);
};
greet('Hi', 'RJay');

const greetNo = () => {
  console.log('Hi RJay');
};

greetNo();

const greetShort = name => name;

console.log(greetShort('RJay'));

function defaultFxn(name = 'RJay') {
  console.log('Hi ' + name);
}

defaultFxn();

const checkInput = (noEmpty, ...strings) => {
  let empty = false;
  for (const str of strings) {
    if (!str) {
      empty = true;
    }
  }

  if (!empty) {
    noEmpty();
  }

}

const noEmpty = () => {
  console.log("No Empty String Found");
}

checkInput(noEmpty, 'test', 'hi', 'hello', 'rjay');