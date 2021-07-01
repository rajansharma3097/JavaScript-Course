const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber > 0.7) {
    alert("Number is greater than 0.7 " + randomNumber);
}

let numArr = [1, 4, 5, 7, 4];

console.log("First Loop");
for (let i = 0; i < numArr.length; i++) {
    console.log(numArr[i]);
}
console.log("Second Loop");
for (const iterator of numArr) {
    console.log(iterator);
}
console.log("Third Loop");
for (let i = numArr.length - 1; i >= 0; i--) {
    console.log(numArr[i]);
}

const randomSec = Math.random();

if ((randomNumber > 0.7 && randomSec > 0.7) || (randomNumber < 0.2 || randomSec < 0.2)) {
    alert("Fourth Task Alert ");
}

console.log(randomNumber, randomSec);

