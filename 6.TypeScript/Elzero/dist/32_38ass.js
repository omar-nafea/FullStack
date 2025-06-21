"use strict";
class Player {
    constructor(username, game, score, isVip = false) {
        this.username = username;
        this.game = game;
        this.score = score;
        this.isVip = isVip;
    }
    details() {
        return `${this.isVip ? 'VIP ' : ''}${this.username}, Type Is ${this.game} Level Is ${this.score}`;
    }
}
let player1 = new Player("Osama", "Mage", 90, true);
let player2 = new Player("Shady", "Archer", "85", false);
let player3 = new Player("Amr", "Fighter", 50, true);
let player4 = new Player("Mahmoud", "Assassin", 77);
console.log(player1.details());
console.log(player2.details());
console.log(player3.details());
console.log(player4.details());
class Shorten {
    constructor(id, username, title) {
        this.id = id;
        this.username = username;
        this.title = title;
    }
}
let tester1223 = new Shorten(100, "Elzero", "Developer");
console.log(tester1223.id);
console.log(tester1223.username);
class Show {
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    constructor(_title) {
        this._title = _title;
    }
    setterFun() {
        return `Hello ${this._title}`;
    }
}
let tester = new Show("Elzero");
console.log(tester.title);
tester.title = "Osama";
console.log(tester.title);
class Player223 {
    constructor(id, title, level) {
        this.id = id;
        this.title = title;
        this.level = level;
    }
    logIn() {
        console.log("Logged In");
    }
    logOut(val) {
        console.log(`Logged Out, ${val}`);
    }
}
let player121 = new Player223(100, "Elzero", 95);
console.log(player121.id);
console.log(player121.title);
console.log(player121.level);
player121.logIn();
player121.logOut("Good Bye");
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
//# sourceMappingURL=32_38ass.js.map