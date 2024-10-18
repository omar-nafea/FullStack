/*
  DOM [Events Simulation]
  - click
  - focus
  - blur
*/

// window.onload = function() {
//     two.focus();
// };

// one.onblur = function() {
//     document.links[0].click();
// };

let inOne = document.querySelector(".in1");
let inTwo = document.querySelector(".in2");
let inThree = document.querySelector(".in3");
let inFour = document.querySelector(".in4");

document.forms[0].onfocus = function() {
    // you have to initialize the bariable that you will control in the function

    if (inOne.value.length < 2) {
        // return inOne.blur;
        return inTwo.focus;
    }
    if (inTwo.value.length < 2) {
        // return inOne.blur;
        return inThree.focus;
    }
    if (inThree.value.length < 2) {
        // return inOne.blur;
        return inFour.focus;
    }
};