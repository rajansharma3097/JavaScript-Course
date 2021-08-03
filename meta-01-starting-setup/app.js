const uid = Symbol();
console.log(uid);

const user = {
  // id: 'p1',
  [uid]: 'p1',
  name: 'RJay',
  age: 30,
  [Symbol.toStringTag]: 'User'
};

user[uid] = 'p2';
user.uid = 'p2';

console.log(user.toString());

const company = {
  // currEmp: 0,
  employees: ['RJay', 'Max', 'Joe'],
  // next() {
  //   if (this.currEmp >= this.employees.length) {
  //     return { value: this.currEmp, done: true };
  //   }
  //   const returnValue = {
  //     value: this.employees[this.currEmp],
  //     done: false
  //   };
  //   this.currEmp++;
  //   return returnValue;
  // },
  [Symbol.iterator]: function* employeeGenerator() {
    // let employee = company.next();
    // while (!employee.done) {
    //   yield employee.value;
    //   employee = company.next();
    // }

    let currentEmp = 0;
    while (currentEmp < this.employees.length) {
      yield this.employees[currentEmp];
      currentEmp++;
    }
  }
}

// let employee = company.next();

// while (!employee.done) {
//   console.log(employee.value);
//   employee = company.next();
// }

for (const employee of company) {
  console.log(employee);
}

// const it = company.getEmployee();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());