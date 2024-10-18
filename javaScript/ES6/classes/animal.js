// export class Animal {
//     constructor(type, legs) {
//         this.type = type;
//         this.legs = legs;
//     }

//     makeNoise(sound = 'Loud Noise') {
//         console.log(sound);
//     }

//     get metaData() {
//             return `Type: ${this.type}, Legs: ${this.legs}`;
//         }
//         // static function used when without need to create a new instance of this class
//     static return10() {
//         return 10;
//     }
// }
// // we make a child class or Subclass that inherits from this parent class and may be add some features
// export class Cat extends Animal {
//     constructor(type, legs, tail) {
//         // super keyword used to throw the properties of the super class to child class (inheritance)
//         super(type, legs);
//         this.tail = tail;
//     }
//     makeNoise(sound = "meow") {
//         console.log(sound);
//     }
// }

export class Player {
    constructor(Name, Country) {
        this.Name = Name;
        this.Country = Country;
    }
    get bornPlace() {
        return `${this.Name} was born in ${this.Country}`;
    }
    bornPlace_1(Name, Country) {
        console.log(`${Name} was born in ${Country}`);
    }
}
export class TennisPlayer extends Player {
    constructor(Name, Country, Age) {
        super(Name, Country);
        this.Age = Age;
    }
    get playerAge() {
        return `${this.Name} is ${this.Age} years old and knows how to play Tennis`;
    }
    playerAge_1(Name, Age) {
        console.log(`${Name}is ${Age} years old and knows how to play Tennis`);
    }
}