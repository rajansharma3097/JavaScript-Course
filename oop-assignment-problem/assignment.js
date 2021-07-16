class Course {
  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.price = price;
  }

  calculateLength(price) {
    const calculatedHrs = (+this.length / +price).toFixed(2);
    console.log(`You will get ${calculatedHrs} hrs of content in ${price} price.`);
  }

  courseSummary() {
    const summary = `
      ${this.title}
      Content Length: ${this.length} hours.
      Price: \$${this.price}
    `;
    console.log(summary);
  }

}

const instance1 = new Course('NodeJS', '14', '19.99');
// console.log(instance1);
instance1.calculateLength(5);
instance1.courseSummary();

const instance2 = new Course('MongoDB', '14', '19.99');
console.log(instance2);