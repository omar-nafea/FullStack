let classAdd = document.querySelector(".classes-to-add");
let classRemove = document.querySelector(".classes-to-remove");
let container = document.querySelector(".classes-list div");
let current = document.querySelector("[title = 'Current']");

function addremove() {
    document.querySelectorAll("span").forEach((ele) => ele.remove());

    for (let i = 0; i < this.value.trim().split(" ").length; i++) {
        if (classAdd.value) {
            current.classList.add(
                classAdd.value.trim().toLowerCase().split(" ")[i]
            );
        }
        if (classRemove.value) {
            current.classList.remove(
                classRemove.value.trim().toLowerCase().split(" ")[i]
            );
        }
    }
    this.value = "";

    if (current.classList.length) {
        [...current.classList].sort().forEach((ele) => {
            let span = document.createElement("span");
            span.textContent = ele;
            container.append(span);
        });
    } else {
        span.textContent = "No Classes To Show";
    }
}
classAdd.onblur = addremove;
classRemove.onblur = addremove;

let element = document.querySelector(".our-element");
let para = document.querySelector("p");

// remove Paragraph
para.remove();

// Create Two Divs
let beforeDiv = document.createElement("div");
let afterDiv = document.createElement("div");

// set attribute and Class and Text of beforeDiv
beforeDiv.textContent = "Start";
beforeDiv.classList.add("start");
beforeDiv.setAttribute("title", "Start Element");
beforeDiv.setAttribute("data-value", "Start");
// Set Before element
element.before(beforeDiv);

// set attribute and Class and Text of afterDiv
afterDiv.textContent = "End";
afterDiv.classList.add("end");
afterDiv.setAttribute("title", "End Element");
afterDiv.setAttribute("data-value", "End");

element.after(afterDiv);

let myDiv = document.getElementsByTagName("div")[7];
console.log(myDiv);
console.log(myDiv.lastChild.data.trim());
console.log(myDiv.childNodes[4].textContent.trim());

document.addEventListener("click", function(e) {
    console.log(`This Is ${e.target.nodeName}`);
});