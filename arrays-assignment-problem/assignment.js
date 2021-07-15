const numberArr = [3, 7, 2, 8, 9, 6];

const filterArr = numberArr.filter(num => num > 5);
console.log(filterArr);

const mapArr = numberArr.map(num => { return { 'num': num } });
console.log(mapArr);

const reduceArr = numberArr.reduce((prev, curr) => prev + curr);
console.log(reduceArr);

// Find only max number
// const findMax = (arr) => {
//     return arr.reduce(function (p, v) {
//         return (p < v ? p : v);
//     });
// }

const findMax = (arr) => {
    const max = arr.reduce(function (p, v) {
        return (p < v ? p : v);
    });

    const min = arr.reduce(function (p, v) {
        return (p > v ? p : v);
    });

    return [max, min];
}

const [maxVal, minVal] = findMax(numberArr);
console.log(maxVal, minVal);