"use strict";
class Game94 {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
class RPG extends Game94 {
    constructor(title, price, rate) {
        super(title, price);
        this.rate = rate;
    }
    getLocation() {
        return `Location`;
    }
    getDiscount() {
        return `Discount`;
    }
}
class Action extends Game94 {
    constructor(title, price, rate, company) {
        super(title, price);
        this.rate = rate;
        this.company = company;
    }
    getLocation() {
        return `Location`;
    }
    getDiscount() {
        return `Discount`;
    }
}
let gameOne = new RPG("Ys", 100, 10);
let gameTwo = new Action("Uncharted", 90, 15, "Sony");
console.log(gameOne.title);
console.log(gameOne.price);
console.log(gameOne.rate);
console.log(gameOne.getDiscount());
console.log(gameOne.getLocation());
console.log(gameTwo.title);
console.log(gameTwo.price);
console.log(gameTwo.rate);
console.log(gameTwo.company);
console.log(gameTwo.getDiscount());
console.log(gameTwo.getLocation());
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
//# sourceMappingURL=32_38ass.js.map