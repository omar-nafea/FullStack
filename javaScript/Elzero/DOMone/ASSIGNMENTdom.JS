console.log(document.getElementById("elzero"));
console.log(document.getElementsByTagName("div")[0]);
console.log(document.getElementsByClassName("element")[0]);
console.log(document.getElementsByName("js")[0]);
console.log(document.querySelector("div"));
console.log(document.querySelector("#elzero"));
console.log(document.querySelector(".element"));
console.log(document.querySelector("[name = 'js']"));
console.log(document.querySelectorAll("div")[0]);
console.log(document.querySelectorAll("#elzero")[0]);
console.log(document.querySelectorAll(".element")[0]);
console.log(document.querySelectorAll("[name = 'js']")[0]);
console.log(document.body.firstElementChild);
console.log(document.body.children[0]);
console.log(document.body.childNodes[1]);

// 2

let images = document.querySelectorAll("[class = 'imo']");
for (let i = 0; i < images.length; i++) {
    document.images[i].src =
        "https://i.guim.co.uk/img/media/364089a4778d97eac2be1a48913931b6f562e169/920_1562_2138_1282/master/2138.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=c6b604fb567ffa5e9f8172a4c82a7ec5";
    document.images[i].alt = "Elzero Logo";
    document.images[i].width = 50;
    document.images[i].height = 50;
}

// 3
let divi = document.querySelector(".resulto");
let age = document.querySelector("[name = 'dollar']").value;
age.oninput = function() {
    divi.textContent = `{${age.value}} USD Dollar = {${(
		age.value * 15.6
	).toFixed(2)}} Egyptian Pound`;
};
// 4

let one = document.querySelector(".one");
let two = document.querySelector(".two");

one.title = one.className;
two.title = two.className;
one.textContent = one.title;
two.textContent = `${two.title} ${two.attributes.length}`;

console.log(one);
console.log(two);
// 5
let img2 = document.querySelectorAll("[class = 'ima']");
for (let i = 0; i < img2.length; i++) {
    if (img2[i].hasAttribute("alt")) {
        img2[i].alt = "Old";
    } else {
        img2[i].alt = "Elzero New";
    }
    console.log(img2[i]);
}

let form = document.forms;
let valueOfnumbs = document.querySelector("[name = 'elements']");
let valueOftext = document.querySelector("[name = 'texts']");
let container = document.querySelector(".results");
form[1].onsubmit = function(e) {
    e.preventDefault();
    document.querySelectorAll(".box").forEach(function(e) {
        e.remove();
    });
    for (let j = 0; j < valueOfnumbs.value; j++) {
        let sections = document.createElement(`div`);
        sections.textContent = `${valueOftext.value}`;
        sections.className = "box";
        sections.setAttribute("id", `id-${j + 1}`);
        sections.title = "Element";
        container.appendChild(sections);
    }
};