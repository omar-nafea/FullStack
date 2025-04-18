/*
  Encapsulation
  - Class Fields Are Public By Default
  - Guards The Data Against Illegal Access.
  - Helps To Achieve The Target Without Revealing Its Complex Details.
  - Will Reduce Human Errors.
  - Make The App More Flexible And Manageable.
  - Simplifies The App.
*/

class User {
    // Private Property
    // #e;
    constructor(id, username, eSalary) {
        this.i = id;
        this.u = username;
        this.#e = eSalary;
    }
    getSalary() {
        return parseInt(this.#e);
    }
}
let userOne = new User(100, "Elzero", "5000 Gneh");

console.log(userOne.e);
console.log(userOne.getSalary() * 0.3);
// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     set name(value) {
//         this.name = value;

//     }
//     get name() {
//         return this.name;
//     }
// }
// const dom = new Person("Dom");
// console.log(dom.name);