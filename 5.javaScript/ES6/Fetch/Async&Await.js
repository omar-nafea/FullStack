const photos = [];

function photoUpload() {
    let uploadStatus = new Promise((resolve, reject) => {
        setTimeout(() => {
            photos.push("Profile Pic");
            resolve("Photo Uploaded")
        }, 3000)
    })

    let result = uploadStatus;

    console.log(result);
    console.log(photos.length);
}

photoUpload();

// Promise 
// 0
// you tell him in async await turn the function to asynchronous and wait until uploadStatus is having
// a value from the asynchronous function and dont console bottom line until this condition

// but with async function and await variable to fullfill you have this 
const things = [];

async function photoUpload() {
    let uploadStatus = new Promise((resolve, reject) => {
        setTimeout(() => {
            things.push("Profile Pic");
            resolve("Photo Uploaded")
        }, 3000)
    })

    let result = await uploadStatus;

    console.log(result);
    console.log(things.length);
}

photoUpload();

// Photo Uploaded
// 1

// challenges

const apiUrl = "https://api.chucknorris.io/jokes/random";
// fetch('https://api.chucknorris.io/jokes/random')
//     .then(response => response.json())
//     .then(data => console.log(data.value));

async function fetchData() {
    let myData = await fetch(apiUrl);
    let theD = await myData.json();
    console.log(theD.value);
}

fetchData();