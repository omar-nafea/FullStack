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
//# sourceMappingURL=22_31code.js.map