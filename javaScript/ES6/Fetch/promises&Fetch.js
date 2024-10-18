// Promises

const buyFlightTicket = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = true;

            if (error) {
                reject("Sorry your payment was not successful")
            } else {
                resolve("Thank you, your payment was successful");
            }
        }, 3000)
    })
}

buyFlightTicket()
    .then((success) => console.log(success))
    .catch((error) => console.log(error));

const userData = new Promise((resolve, reject) => {
    const error = false;

    if (error) {
        reject('500 Level Error');
    } else {
        resolve({
            firstName: 'Dylan',
            age: 32,
            email: 'DylansEmail310@gmail.com'
        });
    }
});

userData
    .then((data) => console.log(data))
    .catch((error) => console.log(error));


// Fetch


// RESTFul API - https://jsonplaceholder.typicode.com/
// Docs - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch


fetch('https://jsonplaceholder.typicode.com/comments/1')
    .then(response => response.json())
    .then(data => console.log(data))
    // {postId: 1, id: 1, name: 'id labore ex et quam laborum', email: 'Eliseo@gardner.biz', body: 'laudantium enim quasi est quidem magnam voluptate …utem quasi\nreiciendis et nam sapiente accusantium'}

fetch('https://jsonplaceholder.typicode.com/comments', {
        method: "POST",
        body: JSON.stringify({
            postId: 1,
            name: 'Dylan',
            email: 'dylansemail310@gmail.com',
            body: 'That was dope!'
        }),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    // {id: 501}

fetch('https://jsonplaceholder.typicode.com/comments', {
        method: 'POST',
        body: JSON.stringify({
            postId: 1,
            name: 'Dylan',
            email: 'dylansemail310@gmail.com',
            body: 'That was dope!'
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));

// {postId: 1, name: 'Dylan', email: 'dylansemail310@gmail.com', body: 'That was dope!', id: 501}