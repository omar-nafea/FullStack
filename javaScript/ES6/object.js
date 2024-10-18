let user = {
    // Properties
    theName: "Osama",
    theAge: 38,
    // Methods
    sayHello: function() {
        return `Hello`;
    },
};


const { theName, theAge, sayHello } = user;
console.log(theName, theAge, sayHello);

// Osama 38

// object literal 

function addressMaker(city, state) {
    const newAdress = { city, state };

    console.log(newAdress);
}

addressMaker('Austin', 'Texas');

// {city: "Austin", state: "Texas"}

function addressMaker(address) {
    const { city, state } = address;

    const newAddress = {
        city,
        state,
        country: 'United States'
    };
    console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`)
}

addressMaker({ city: 'Austin', state: 'Texas' });

let person = {
    name: "Adam",
    age: 25,
    city: "Manchester"
}

let employee = {
    ...person,
    salary: 50000,
    position: "Software Developer"
}

console.log(employee);

// Austin, Texas, United States

function addressMaker(address) {
    const newAddress = {
        city: address.city,
        state: address.state,
        country: 'United States'
    };
    const { country } = newAddress;
    const total = {...address, country };
    console.log(`${total.city}, ${total.state}, ${total.country}`)
}

addressMaker({ city: 'Austin', state: 'Texas' });

// const in objects 
const example = {};
example.firstName = 'Dylan';
console.log(example)
    // {firstName : Dylan}

example = { firstName: 'Dylan' };
console.log(example)
    // Uncaught TypeError: Assignment to constant variable.