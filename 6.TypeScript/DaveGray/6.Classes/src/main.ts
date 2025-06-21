// how to navigate to the next word that is identical to what I'm stantding on in vim: `*` goes to the next matching word and `#` goes to the previous matching word. 

class Coder {
    public get age(): number {
        return this._age
    }
    public set age(value: number) {
        this._age = value
    }
// ! this means in typescript to ignore the error "I know What I'm doing and ofcourse is not best practice"
    secondLang!: string

    constructor(
        public readonly name: string,
        public music: string,
        private _age: number,
        protected lang: string = 'Typescript'
    ) {
        // you could use the following syntax or not doesn't make a difference:
        // this.name = name
        // this.music = music
        // this.age = _age
        // this.lang = lang
    }

    // public getAge() {
    //     return `Hello, I'm ${this.age}`
    // }
}

const Dave = new Coder('Dave', 'Rock', 42)
console.log(Dave.age)
// console.log(Dave.age)
// console.log(Dave.lang)

class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number,
    ) {
        super(name, music, age)
    }

    public getLang() {
        return `I write ${this.lang}`
    }
}

const Sara = new WebDev('Mac', 'Sara', 'Lofi', 25)
console.log(Sara.getLang())
// console.log(Sara.age)
// console.log(Sara.lang)
/////////////////////////////////////

interface Musician {
    name: string,
    instrument: string,
    play(action: string): string
}

class Guitarist implements Musician {
    // name: string
    // instrument: string

    constructor(public name: string, public instrument: string) {
        // this.name = name
        // this.instrument = instrument
    }

    play(action: string) {
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const Page = new Guitarist('Jimmy', 'guitar')
console.log(Page.play('strums'))
//////////////////////////////////////
// Static keyword
// what a static keyword does that it's variable (count) does not apply to any instantiation of the class it applies to the class directly itself so we'll be keeping track of varibale (count) not in any one instance of the class

// using the static keyword of course is that it applies directly to the class

// the benfit of using the static keyword is that it applies directly to the class and not to any specific object that you instantiate with the class.


class Peeps {
    static count: number = 0
  // so the method getCount can access directly on the class as well and so that's why I'm accessing count directly in it.
    static getCount(): number {
        return Peeps.count
    }

    public id: number

    constructor(public name: string) {
        this.name = name
        this.id = ++Peeps.count
    }
}

const John = new Peeps('John')
const Steve = new Peeps('Steve')
const Amy = new Peeps('Amy')

console.log(Amy.id)
console.log(Steve.id)
console.log(John.id)
console.log(Peeps.count)
//////////////////////////////////

class Bands {
    private dataState: string[]

    constructor() {
        this.dataState = []
    }

    public get data(): string[] {
        return this.dataState
    }

    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value
            return
        } else throw new Error('Param is not an array of strings')
    }
}

const MyBands = new Bands()
MyBands.data = ['Neil Young', 'Led Zep']
console.log(MyBands.data)
MyBands.data = [...MyBands.data, 'ZZ Top']
console.log(MyBands.data)
MyBands.data = ['Van Halen', "5150"] // must be string data