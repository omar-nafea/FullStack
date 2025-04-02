"use strict";
class Food {
    constructor(title) {
        this.title = title;
    }
}
class Pizza extends Food {
    constructor(title, price) {
        super(title);
        this.price = price;
    }
    getCookingTime() {
        console.log(`Cooking Time For Pizza Is 1 Hour`);
    }
}
class Burger extends Food {
    constructor(title, price) {
        super(title);
        this.price = price;
    }
    getCookingTime() {
        console.log(`Cooking Time For Burger Is Half Hour`);
    }
}
let pizzaOne = new Pizza("Awesome Pizza", 100);
console.log(pizzaOne.title);
console.log(pizzaOne.price);
pizzaOne.getCookingTime();
class Player43 {
    constructor(name) {
        this.name = name;
    }
    attack() {
        console.log("Attacking Now");
    }
}
class Amazon extends Player43 {
    constructor(name, spears) {
        super(name);
        this.spears = spears;
    }
    attack() {
        console.log("Attacking With Spear");
        this.spears -= 1;
    }
}
class Barbarian extends Player43 {
    constructor(name, axeDurability) {
        super(name);
        this.axeDurability = axeDurability;
    }
    attack() {
        console.log("Attacking With Axe");
        this.axeDurability -= 1;
    }
}
let barOne = new Barbarian("Elzero", 100);
console.log(barOne.name);
barOne.attack();
console.log(barOne.axeDurability);
function returnNumber(val) {
    return val;
}
function returnString(val) {
    return val;
}
function returnBoolean(val) {
    return val;
}
console.log(returnNumber(100));
console.log(returnString("Elzero"));
console.log(returnBoolean(true));
function returnType(val) {
    return val;
}
console.log(returnType(100));
console.log(returnType("Elzero"));
console.log(returnType(true));
console.log(returnType([1, 2, 3, 4]));
function returnFun(val) {
    return val;
}
console.log(returnFun(100));
console.log(returnFun("Elzero"));
const returnTypeArrowSyntax = (val) => val;
console.log(returnTypeArrowSyntax(100));
console.log(returnTypeArrowSyntax("Elzero"));
function testType(val) {
    return `The Value Is ${val} And Type Is ${typeof val}`;
}
console.log(testType(100));
console.log(testType("Elzero"));
function multipleTypes(valueOne, valueTwo) {
    return `The First Value Is ${valueOne} And Second Value ${valueTwo}`;
}
console.log(multipleTypes("Osama", 100));
console.log(multipleTypes("Elzero", true));
function createArray(length, value) {
    return new Array(length).fill(value);
}
const numbers = createArray(3, 42);
const strings = createArray(3, "Hello");
console.log(numbers);
console.log(strings);
class User92 {
    constructor(value) {
        this.value = value;
    }
    show(msg) {
        console.log(`${msg} - ${this.value}`);
    }
}
let usertherteen = new User92("Elzero");
console.log(usertherteen.value);
usertherteen.show("Message");
let userTwenty = new User92(100);
console.log(userTwenty.value);
userTwenty.show("Message");
class Collection {
    constructor(data = []) {
        this.data = data;
    }
    add(item) {
        this.data.push(item);
    }
}
let itemOne = new Collection();
itemOne.add({ itemType: "Book", title: "Atomic Habits", isbn: 150510 });
itemOne.add({ itemType: "Book", title: "Follow Your Heart", isbn: 650650 });
console.log(itemOne);
let itemTwo = new Collection();
itemTwo.add({ itemType: "Game", title: "Uncharted", style: "Action", price: 150 });
console.log(itemTwo);
//# sourceMappingURL=32_38code.js.map