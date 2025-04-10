"use strict";
let user1 = {
    id: 100,
    username: "Elzero",
    country: "Egypt"
};
user1.country = "Syria";
console.log(user1);
function getData(data) {
    console.log(`Id Is ${data.id}`);
    console.log(`Username Is ${data.username}`);
    console.log(`Country Is ${data.country}`);
}
getData({ id: 200, username: "Osama", country: "KSA" });
let user121 = {
    id: 100,
    username: "Elzero",
    country: "Egypt",
    sayHello() {
        return `Hello ${this.username}`;
    },
    sayWelcome: () => {
        return `Welcome ${user121.username}`;
    },
    getDouble(n) {
        return n * 2;
    }
};
console.log(user121.id);
console.log(user121.sayHello());
console.log(user121.sayWelcome());
console.log(user121.getDouble(100));
let userSettin = {
    theme: true,
    font: "Open Sans",
    sidebar: false,
    external: true
};
let user3 = {
    id: 100,
    username: "Elzero",
    country: "Egypt",
    role: "Mod",
    protect: true
};
console.log(user3.id);
let userSettings = {
    theme: true,
    font: "Open Sans",
    sidebar: false,
    external: true
};
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
//# sourceMappingURL=22_31code.js.map