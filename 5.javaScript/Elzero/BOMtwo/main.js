/*  #114 BOM Challenge :  */

let input = document.querySelector(".input");
let mytask = document.querySelector(".tasks");

// < function 1 =>  add items (localstorage.tasks) to div(.tasks):
function addItemsToDiv() {
    if (localStorage.tasks) {
        JSON.parse(localStorage.tasks).forEach((ele) => {
            let myP = document.createElement("p");
            myP.append(ele.titel);
            let myButton = document.createElement("button");
            myButton.classList = "btn";
            myButton.append("delete");
            let div = document.createElement("div");
            div.id = ele.id;
            div.append(myP);
            div.append(myButton);
            mytask.append(div);
        });
    }
}
addItemsToDiv();

// add new items and update local storage
document.forms[0].onsubmit = function(submit) {
    submit.preventDefault();
    if (input.value) {
        addnewTask();
        updatelocalTasks();
    } else {
        input.value = "";
    }
};

// < function 2 => create a nwew item:
function addnewTask() {
    let myP = document.createElement("p");
    myP.append(input.value);
    let myButton = document.createElement("button");
    myButton.classList = "btn";
    myButton.append("delete");
    let div = document.createElement("div");
    div.id = Date.now();
    div.append(myP);
    div.append(myButton);
    mytask.append(div);
}

// < function 3 =>  update local storage (tasks):
function updatelocalTasks() {
    let resalts = [];
    [...mytask.children].forEach((element) => {
        let resalt = {
            id: element.id,
            titel: element.firstElementChild.textContent,
        };
        resalts.push(resalt);
    });
    window.localStorage.setItem("tasks", JSON.stringify(resalts));
}

// delelet items
document.addEventListener("click", (ele) => {
    if (ele.target.matches(".btn")) {
        ele.target.parentElement.remove();
    }
    updatelocalTasks();
    if (JSON.parse(localStorage.tasks).length == 0) {
        window.localStorage.removeItem("tasks");
    }
});