let food = ["pie", "apple", "banana", "cheese"];
let sen = "i am really hungry for some";
const capitalize = (sentence, word, numOfSen) => {
    let i = sentence.search(word);
    let wor = sentence.substring(i, numOfSen);
    let capital = wor.toUpperCase();
    let least = sentence.replace(wor, capital);
    return least;
}
let last = capitalize(sen, "i", 1);
last = capitalize(last, "really", 11);
// console.log(capFood());
// for (let meal of food) {
//     console.log(`${last} ${meal}`);
// }
for (var i = 0; i < food.length; i++) {
    if (i % 2 === 0) {
        let finish = last.concat(` ${food[i].toUpperCase()}`);
        console.log(finish);
    } else {
        let finish = last.concat(` ${food[i]}`);
        console.log(finish);
    };
}


