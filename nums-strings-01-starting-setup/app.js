function randomIntBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomIntBetween(30, 100));

function productDesc(strings, productName, productPrice) {
  console.log(strings);
  console.log(productName);
  console.log(productPrice);
  let priceCategory = "pretty cheap reagrding its price";
  if (productPrice > 20) {
    priceCategory = "fairly priced";
  }
  return `${strings[0]}${productName}${strings[1]}${priceCategory}${strings[2]}`;
}

const prodName = "JavaScript Course";
const prodPrice = 29.99;

const productOutput = productDesc`This Product (${prodName}) is ${prodPrice}.`;

console.log(productOutput);