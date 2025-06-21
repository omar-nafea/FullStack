let fighters = ["🐉", "🐥", "🐊", "💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷", "🐆", "🦕", "🦁"]

function fighting() {
    const randomFighter = Math.floor(Math.random() * fighters.length);
    const secFighter = Math.floor(Math.random() * 17);
    const content = `${fighters[randomFighter]} vs ${fighters[secFighter]}`
    console.log(content)
}
fighting()


let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = '';
let orangeShelf = '';

function sorting() {
    for (let fru of fruit) {
        if (fru === '🍎') {
            appleShelf += fru;
        } else if (fru === '🍊') {
            orangeShelf += fru;
        }
    }
    console.log("appleShelf: " + appleShelf)
    console.log("orangeShelf: " + orangeShelf)
}

sorting()