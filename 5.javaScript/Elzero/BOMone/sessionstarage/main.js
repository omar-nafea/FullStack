/*
    <form action="">
        <input type="text">
        <input type="number">
        <input type="email">
        <label for="chosingNum">chosingNum</label>
        <select name="thisIsExperimental" id="chosingNum">
            <option value="24">twinty four</option>
            <option value="25">twinty five</option>
            <option value="26">twinty six</option>
            <option value="27">twinty seven</option>
            <option value="28">twinty eight</option>
        </select>
        <input type="submit">
    </form>
    */
// let form = document.forms;
let text = document.querySelector("[type='text']");
let number = document.querySelector("[type='number']");
let email = document.querySelector("[type='email']");
let chosingNum = document.getElementById("chosingNum");
// sessionStorage.removeItem("IsThisFirstTime_Log_From_LiveServer");
text.onblur = function() {
    window.sessionStorage.setItem("text", text.value);
};
email.onblur = function() {
    window.sessionStorage.setItem("email", email.value);
};
number.onblur = function() {
    window.sessionStorage.setItem("number", number.value);
};
if (window.sessionStorage.getItem("text")) {
    text.value = window.sessionStorage.getItem("text");
}
if (window.sessionStorage.getItem("number")) {
    number.value = window.sessionStorage.getItem("number");
}
if (window.sessionStorage.getItem("email")) {
    email.value = window.sessionStorage.getItem("email");
}

function asigning() {
    window.sessionStorage.setItem(
        "option",
        chosingNum.options[chosingNum.selectedIndex].value
    );
}
chosingNum.onchange = asigning;

if (window.sessionStorage.getItem("option")) {
    document
        .querySelector(`[value="${window.sessionStorage.getItem("option")}"]`)
        .setAttribute("selected", "selected");
}