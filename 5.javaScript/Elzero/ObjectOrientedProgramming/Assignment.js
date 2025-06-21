// 1
class Car {
    constructor(name, model, price) {
        this.n = name;
        this.m = model;
        this.p = price;
    }
    Details() {
        return `Car One Name Is ${this.n} And Model Is ${this.m} And Price Is  ${this.p}`
    }
}
let carone = new Car("MG", 2022, 42000);
let cartwo = new Car("bmw", 2021, 15000);
let carthree = new Car("tesla", 2020, 50000);
Car.prototype.run = function() { return `Car Is Running Now` };
Car.prototype.stop = function() { return `Car Is Stopped` };
// Needed Output
console.log(carone.Details());
console.log(Car.prototype.run());
// "Car One Name Is MG And Model Is 2022 And Price Is 420000"
// "Car Is Running Now"

// 2

class Phone {
    constructor(name, serial, price) {
        this.name = name;
        this.serial = serial;
        this.price = price;
    }
}

// Write Tablet Class Here

// Derived Class
class Tablet extends Phone {
    constructor(name, serial, price, size) {
        super(name, serial, price);
        this.size = size || "unknown";
    }
    fullDetails() {
        return `${this.name} Serial is ${this.serial} And Size Is ${this.size}`;
    }
}

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown

// 3

// Edit The Class
class User {
    // #c;
    constructor(username, card) {
        this.u = username;
        this.#c = card;
    }
    showData() {
        let re = /(\s|\/|\D)/ig;
        if (typeof this.#c === "number" || typeof this.#c === "string" && !re.test(this.#c)) {
            let omar = [...this.#c.toString()];
            let me = [];
            for (let i = 0; i <= omar.length; i++) {
                me.push(omar[i]);
                if (me.length === 4 || me.length === 9 || me.length === 14) {
                    me.push("-");
                }
            }
            this.#c = me.join("");
        }
        if (isNaN(this.#c)) {
            this.#c = this.#c.replaceAll(re, "-");
        }
        return `Hello ${this.u} Your Credit Card Number Is ${this.#c}`;
    }
}

let userOne = new User("Osama", "5678-5678-1234-5678");
let userTwo = new User("Ahmed", "8765567812345678");
let userThree = new User("Ghareeb", 4321567812345678);
let userfour = new User("dfadsf", "1234 5678 1234 5678");

userTwo.showData
console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678
console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678
console.log(userThree.showData);
console.log(userfour.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678
console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined
// 4
// Write Your Code Here
String.prototype.addLove = function() {
    return `I Love ${this} Web School`;
};
// Do Not Edit Below
let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School

// 5
/*

*/
const myObj = {
    username: "Elzero",
    id: 100,
    score: 1000,
    country: "Egypt",
};
// Write Your Code Here
Object.defineProperties(myObj, {
    id: {
        enumerable: false,
    },
    score: {
        writable: false,
    },
});
delete myObj.country;
myObj.score = 500;

for (let prop in myObj) {
    console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);
// Needed Output
// "username => Elzero"
// "score => 1000"
// { username: 'Elzero', score: 1000, id: 100 }