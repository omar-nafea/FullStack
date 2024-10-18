/*
  Loop Control
  - Break
  - Continue
  - Label
*/

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let colors = ["Red", "Green", "Black"];
// break
for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
    if (products[i] === "Pen") break;
}
// continue
for (let i = 0; i < products.length; i++) {
    if (typeof products[i] === "number") {
        continue;
    }
    console.log(products[i]);
}
// label
mainLoop: for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
    nestedLoop: for (let j = 0; j < colors.length; j++) {
        console.log(`- ${colors[j]}`);
        if (colors[j] === "Green") {
            break mainLoop;
        }
    }
}