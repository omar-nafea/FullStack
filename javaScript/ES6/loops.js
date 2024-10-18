// Challenge - For Of Loop

var wakiki = [255, 3638, 78555];
var wakiki = "hello world";
for (wak of wakiki) {
    console.log(wak);
}

// Using the For of Loop, iterate through the array and print into the console, a message like:
// Tom lives in Lisbon

const students = [{
        name: "John",
        city: "New York"
    },
    {
        name: "Peter",
        city: "Paris"
    },
    {
        name: "Kate",
        city: "Sidney"
    }
]

for (data of students) {
    console.log(`${data.name} lives in ${data.city}`)
}