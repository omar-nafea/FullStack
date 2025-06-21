"use strict";
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
function showTypes2(name = "Nothing", num = "Nothing", flag = "Nothing") {
    return `${name} - ${num} - ${flag}`;
}
function showTypes(name = "Nothing", num = "Nothing", flag = "Nothing") {
    return `${name} - ${num} - ${flag}`;
}
function showTypes3(value1, value2, value3) {
    const output1 = value1 !== undefined ? value1 : "Nothing";
    const output2 = value2 !== undefined ? value2 : "Nothing";
    const output3 = value3 !== undefined ? value3 : "Nothing";
    return `${output1} - ${output2} - ${output3}`;
}
console.log(showTypes());
console.log(showTypes2());
console.log(showTypes("String"));
console.log(showTypes("String", 100));
console.log(showTypes("String", 100, true));
console.log(showTypes2("String", 100, true));
class Game303 {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    gettheDiscount(val) {
        console.log(`The Discount is ${val}`);
    }
}
let game1One = new Game303("Ys", 100);
let game2Two = new Game303(2064, 100);
console.log(game1One.title);
console.log(game1One.price);
game1One.gettheDiscount("50");
console.log(game2Two.title);
console.log(game2Two.price);
game2Two.gettheDiscount(80);
//# sourceMappingURL=39.js.map