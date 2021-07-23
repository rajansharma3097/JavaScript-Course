// Pure Function
function add(num1, num2) {
  return num1 + num2;
}

console.log(add(1, 5));
console.log(add(12, 15));

//Impure Functions
function addRandom(num) {
  return num + Math.random();
}

console.log(addRandom(5));

let previousResult = 0;

// Impure Functions with Side effects
function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum;
  return sum;
}

//Factory Function
function createTaxCalculation(tax) {
  function calculateTax(amount) {
    return amount * tax;
  }
  return calculateTax;
}

const calculateVatAmount = createTaxCalculation(0.19);
const calculateIncomeTaxAmount = createTaxCalculation(0.25);

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(500));

// Closure
let username = "RJay";

function greetUser() {
  console.log("Hi " + username);
}

username = "Rajan";

greetUser();