"use strict";
let userass = {
    id: 100,
    username: "Elzero",
    state: true,
    getName() {
        return this.username;
    }
};
userass.id = 200;
userass.id = "200";
userass.state = false;
let client = {
    id: 100,
    username: "Elzero",
    active: true,
    discount: 10,
    getPrice(price) {
        return price - this.discount;
    }
};
console.log(`Client Id Is ${client.id}`);
console.log(`Client Name Is ${client.username}`);
console.log(`Client Has Dicount ${client.discount}%`);
console.log(`Client Product After Discount Is ${client.getPrice(200)}`);
let creature = {
    title: "Superman",
    weight: 100,
    age: 500,
    canFly: true,
    bodyType: "Iron",
    origin: "Krypton"
};
console.log(creature);
//# sourceMappingURL=22_31ass.js.map