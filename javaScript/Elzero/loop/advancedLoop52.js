/*
  Loop For Advanced Example
*/

// traditional

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
}

// advanced

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let i = 0;

for (;;) {
    console.log(products[i]);
    i++;
    if (i === products.length) break;
}