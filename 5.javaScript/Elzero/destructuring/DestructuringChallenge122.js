/*
  Destructuring
  - Challenge
*/
let chosen = 3;
if (chosen === 1) {
    let one;
    let myFriends = [
        { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
        {
            title: "Ahmed",
            age: 25,
            available: false,
            skills: ["Python", "Django"],
        },
        {
            title: "Sayed",
            age: 33,
            available: true,
            skills: ["PHP", "Laravel"],
        },
    ];
    [one] = myFriends;
    ({ title, age, available, skills } = one);
    let [, y] = skills;

    function availability() {
        if (available === true) {
            console.log("available");
        } else {
            console.log("not available");
        }
    }
    console.log(title);
    console.log(age);
    availability();
    console.log(y);
}
if (chosen === 2) {
    let two;
    let myFriends = [
        { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
        {
            title: "Ahmed",
            age: 25,
            available: false,
            skills: ["Python", "Django"],
        },
        {
            title: "Sayed",
            age: 33,
            available: true,
            skills: ["PHP", "Laravel"],
        },
    ];
    [, two] = myFriends;
    ({ title, age, available, skills } = two);
    let [, y] = skills;

    function availability() {
        if (available === true) {
            console.log("available");
        } else {
            console.log("not available");
        }
    }
    console.log(title);
    console.log(age);
    availability();
    console.log(y);
}
if (chosen === 3) {
    let three;
    let myFriends = [
        { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
        {
            title: "Ahmed",
            age: 25,
            available: false,
            skills: ["Python", "Django"],
        },
        {
            title: "Sayed",
            age: 33,
            available: true,
            skills: ["PHP", "Laravel"],
        },
    ];
    [, , three] = myFriends;
    ({ title, age, available, skills } = three);
    let [, y] = skills;

    function availability() {
        if (available === true) {
            console.log("available");
        } else {
            console.log("not available");
        }
    }
    console.log(title);
    console.log(age);
    availability();
    console.log(y);
}