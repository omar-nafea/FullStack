const monday = [{
        name: "Write a tutorial",
        duration: 180,
    },
    {
        name: "Some web development",
        duration: 120,
    },
];

const tuesday = [{
        name: "Keep writing that tutorial",
        duration: 240,
    },
    {
        name: "Some more web development",
        duration: 180,
    },
    {
        name: "A whole lot of nothing",
        duration: 240,
    },
];

const tasks = [monday, tuesday];
const result = tasks
    // Concatenate our 2D array into a single list
    .reduce((acc, current) => acc.concat(current))
    // Extract the task duration, and convert minutes to hours
    .map((task) => task.duration / 60)
    // Filter out any task that took less than two hours
    .filter((duration) => duration >= 2)
    // Multiply each tasks' duration by our hourly rate
    .map((duration) => duration * 25)
    // Combine the sums into a single dollar amount
    .reduce((acc, current) => [+acc + +current])
    // Convert to a "pretty-printed" dollar amount
    .map((amount) => "$" + amount.toFixed(2))
    // Pull out the only element of the array we got from map
    .reduce((formatted_amount) => formatted_amount);

console.log(result);

function generatechoise() {
    let random = Math.floor(Math.random() * btns.length) + 1;
    if (random === 1) {
        let img = document.createElement("img");
        img.src = "images/paper-ft-1.jpg";
        img.style.width = "100px";
        img.style.height = "100px";
        resulting = img;
    }
    if (random === 2) {
        let img = document.createElement("img");
        img.src = "images/rock-ft-1.jpg";
        img.style.width = "100px";
        img.style.height = "100px";
        resulting = img;
    }
    if (random === 3) {
        let img = document.createElement("img");
        img.src = "images/scissor-ft-1.jpg";
        img.style.width = "100px";
        img.style.height = "100px";
        resulting = img;
    }
    computerChoise.innerHTML = resulting;
}
//     <!-- <script src="https://kit.fontawesome.com/1f658823aa.js" crossorigin="anonymous"></script> -->

// <img src="images/paper-ft-1.jpg" alt="" style="width:100px;height:100px;">
// <img src="images/scissor-ft-1.jpg" alt="" style="width:100px;height:100px;">
// <img src="images/rock-ft-1.jpg" alt="" style="width:100px;height:100px;">