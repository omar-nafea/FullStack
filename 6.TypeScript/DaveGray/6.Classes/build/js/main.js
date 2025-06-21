"use strict";
// how to navigate to the next word that is identical to what I'm stantding on in vim: `*` goes to the next matching word and `#` goes to the previous matching word. 
class Coder {
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    constructor(name, music, _age, lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this._age = _age;
        this.lang = lang;
        // you could use the following syntax or not doesn't make a difference:
        // this.name = name
        // this.music = music
        // this.age = _age
        // this.lang = lang
    }
}
const Dave = new Coder('Dave', 'Rock', 42);
console.log(Dave.age);
// console.log(Dave.age)
// console.log(Dave.lang)
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sara = new WebDev('Mac', 'Sara', 'Lofi', 25);
console.log(Sara.getLang());
class Guitarist {
    // name: string
    // instrument: string
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
        // this.name = name
        // this.instrument = instrument
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist('Jimmy', 'guitar');
console.log(Page.play('strums'));
//////////////////////////////////////
// Static keyword
// what a static keyword does that it's variable (count) does not apply to any instantiation of the class it applies to the class directly itself so we'll be keeping track of varibale (count) not in any one instance of the class
// using the static keyword of course is that it applies directly to the class
// the benfit of using the static keyword is that it applies directly to the class and not to any specific object that you instantiate with the class.
class Peeps {
    // so the method getCount can access directly on the class as well and so that's why I'm accessing count directly in it.
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');
console.log(Amy.id);
console.log(Steve.id);
console.log(John.id);
console.log(Peeps.count);
//////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param is not an array of strings');
    }
}
const MyBands = new Bands();
MyBands.data = ['Neil Young', 'Led Zep'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'ZZ Top'];
console.log(MyBands.data);
MyBands.data = ['Van Halen', "5150"]; // must be string data
