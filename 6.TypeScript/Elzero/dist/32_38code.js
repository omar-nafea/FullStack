"use strict";
class User14 {
    constructor(username, salary) {
        this.u = username;
        this.s = salary;
        this.msg = function () {
            return `my name is ${this.u} Your Salary Is ${this.s}`;
        };
    }
    sayMsg() {
        return `Hello ${this.u} Your Salary Is ${this.s}`;
    }
}
let userOne = new User14("omar", 4000);
console.log(userOne.u);
console.log(userOne.s);
console.log(userOne.msg());
console.log(userOne.sayMsg());
class User16 {
    constructor(username, salary, address) {
        this.username = username;
        this.salary = salary;
        this.address = address;
        this.msg = function () {
            return `Welcome ${this.username} Your Salary Is ${this.salary}`;
        };
    }
    sayMsg() {
        return `Hello ${this.username} Your Salary Is ${this.salary}`;
    }
}
let usere = new User16("Elzero", 65000, "Cairo");
console.log(usere.msg());
console.log(usere.sayMsg());
class User21 {
    get changename() {
        return this._changename;
    }
    set changename(value) {
        this._changename = value;
    }
    constructor(_changename, salary, address) {
        this._changename = _changename;
        this.salary = salary;
        this.address = address;
        this.msg = function () {
            return `Hello ${this._changename} Your Salary Is ${this.salary}`;
        };
    }
    sayMsg() {
        return `Hello ${this._changename} Your Salary Is ${this.salary}`;
    }
}
let user1e = new User21("Elzero", 6000, "Cairo");
console.log(user1e.changename);
user1e.changename = "Ahmed";
console.log(user1e.changename);
console.log(user1e.salary);
console.log(user1e.msg());
console.log(user1e.sayMsg());
class User22 {
    static get created() {
        return User22._created;
    }
    static set created(value) {
        User22._created = value;
    }
    static getCount() {
        console.log(`${this.created} Objects Created`);
    }
    constructor(username) {
        this.username = username;
        User22.created++;
    }
}
User22._created = 0;
let u1 = new User22("Elzero");
let u2 = new User22("Web");
let u3 = new User22("School");
User22.getCount();
User22.created;
class Usr {
    constructor(username, theme, font) {
        this.username = username;
        this.theme = theme;
        this.font = font;
    }
    save() {
        console.log(`Saved`);
    }
    update() {
        console.log(`Updated`);
    }
}
let usrOne = new Usr("Elzero", true, "Open Sans");
console.log(usrOne.username);
console.log(usrOne.font);
usrOne.save();
usrOne.update();
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
//# sourceMappingURL=32_38code.js.map