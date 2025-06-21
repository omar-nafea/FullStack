// Rest operator
function add(nums) {
    console.log(arguments);
}
// Arguments(5) [4, 5, 7, 8, 12, callee: ƒ, Symbol(Symbol.iterator): ƒ] 0: 41: 52: 73: 84: 12 callee: ƒ add(nums) length: 5 Symbol(Symbol.iterator): ƒ values()[[Prototype]]: Object
function add(...nums) {
    console.log(nums);
}
// (5) [4, 5, 7, 8, 12]

add(4, 5, 7, 8, 12)

// Arrow Functions
//function declaration
function breakfastMenu() {
    return "I'm going to scrambled eggs for breakfast";
}

//anonymous function
const lunchMenu = function() {
    return "I'm going to eat pizza for lunch";
}

const dinnerMenu = () => {
        return "I'm going to eat a burger for dinner";
    }
    // or 
const dinnerMen_para = (food, meal) => `I'm going to eat a ${food} for ${meal}`;

console.log(dinnerMen_para("chicken salad", "dinner"));

// but if you have only one parameter you could use arrow function like

const dinnerMenu_2 = food => `I'm going to eat a ${food} for dinner`;

console.log(dinnerMenu_2("chicken salad"));

console.log(dinnerMenu());


// Default Params

const leadSinger_1 = (artist) => {
    console.log(`${artist} is the lead singer of Cold Play`);
}

leadSinger_1("Chris Martin");
// Chris Martin is the lead singer of Cold Play

const leadSinger_d = (artist = "someone") => {
    console.log(`${artist} is the lead singer of Cold Play`);
}

leadSinger_d();

// someone is the lead singer of Cold Play

const buy = (item = "something") => {
    console.log(`I'm going to buy ${item} from the grocery shop`);
}

buy();
// I'm going to buy something from the grocery shop
buy("milk");
// I'm going to buy milk from the grocery shop