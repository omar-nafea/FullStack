// Edit The Class
class User {
    // #c;
    constructor(username, card) {
        this.u = username;
        this.#c = card;
    }
    get usercard() { return this.#c; }
        /**
         * @param {any} newvalue
         */
    set showData(newvalue) {
        this.#c = newvalue;
        // let re = /(\s|\/|\D)/ig;
        // if (typeof newvalue === "number" || typeof newvalue === "string" && !re.test(newvalue)) {
        //     let omar = [...newvalue.toString()];
        //     let me = [];
        //     for (let i = 0; i <= omar.length; i++) {
        //         me.push(omar[i]);
        //         if (me.length === 4 || me.length === 9 || me.length === 14) {
        //             me.push("-");
        //         }
        //     }
        //     newvalue = me.join("");
        // }
        // if (isNaN(newvalue)) {
        //     newvalue = newvalue.replaceAll(re, "-");
        // }
    }

}
// let userOne = new User("Osama", "5678-5678-1234-5678");
let userTwo = new User("Ahmed", 8765567812345678);
let userThree = new User("Ghareeb", 4321567812345678);
// let userfour = new User("omar", "1234 5678 1234 5678");
// userOne.showData(this.c);
// console.log(userOne.usercard);
console.log(userTwo.usercard);
console.log(userThree.usercard);
// console.log(userfour.usercard);