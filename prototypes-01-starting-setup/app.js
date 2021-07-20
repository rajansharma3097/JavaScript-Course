// class AgedPerson {
//   printAge() {
//     console.log(this.age);
//   }
// }


// class Person extends AgedPerson {
//   name = 'RJay';

//   constructor() {
//     super();
//     this.age = 23;
//   }

//   greet() {
//     console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
//   }

// }

function Person() {
  console.log(this);
  this.age = 23;
  this.name = "RJay";
  this.greet = function () {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
  }
}

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   }
// }

// Person.prototype.printAge = function () {
//   console.log(this.age);
// }

// const person = new Person();
// person.greet();
// person.printAge();
// console.log(person.__proto__);

const course = {
  title: 'Javascript - the complete guide',
  rating: 5
};

Object.setPrototypeOf(course, {
  // ...Object.getPrototypeOf(course),
  printRating: function () {
    console.log(`${this.rating}/5`);
  }
});

console.log(course.__proto__);

course.printRating();