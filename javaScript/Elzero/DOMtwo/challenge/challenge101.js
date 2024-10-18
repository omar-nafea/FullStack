let header = document.createElement(`header`);
let headerContainer = document.createElement(`div`);
headerContainer.className = `headerContainer`;
headerContainer.style.cssText =
    "display: flex;justify-content: space-between;margin-top: 20px;";
let elzero = document.createElement(`div`);
elzero.className = `elzero`;
elzero.textContent = `Elzero`;
elzero.style.cssText =
    "font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: #23A96E; margin: 0 20px; font-size: 30px;";
let headerList = document.createElement(`ul`);
headerList.style.cssText = "display: flex;";
let home = document.createElement(`li`);
home.textContent = `home`;
home.style.cssText =
    "list-style: none; margin-right: 15px; margin-top: 6px; font-size: 20px; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;";
let about = document.createElement(`li`);
about.textContent = `about`;
about.style.cssText =
    "list-style: none; margin-right: 15px; margin-top: 6px; font-size: 20px; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;";
let contact = document.createElement(`li`);
contact.textContent = `contact`;
contact.style.cssText =
    "list-style: none; margin-right: 15px; margin-top: 6px; font-size: 20px; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;";
let service = document.createElement(`li`);
service.textContent = `service`;
service.style.cssText =
    "list-style: none; margin-right: 15px; margin-top: 6px; font-size: 20px; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;";
headerList.append(home);
headerList.append(about);
headerList.append(contact);
headerList.append(service);
headerContainer.appendChild(elzero);
headerContainer.appendChild(headerList);
header.appendChild(headerContainer);

document.body.append(header);
let container = document.createElement("div");
container.style.cssText =
    "background-color: #ECECEC; padding: 20px; width: 100%; height: 650px; margin: 25px 0 0; display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px 20px;";

for (let i = 0; i < 18; i++) {
    let Thecard = document.createElement("div");
    let HThree = document.createElement("h3");
    let paragraph = document.createElement("p");
    Thecard.className = `card`;
    Thecard.style.cssText =
        "background-color: #fff; padding: 10px; display: flex;justify-content: center; align-items: flex-start;";
    HThree.textContent = `${i + 1}`;
    HThree.style.cssText = "transform: translateX(30px);";
    paragraph.textContent = `product`;
    paragraph.style.cssText =
        "padding: 10px; font-size: 20px; color: #EAE3DD; transform: translate(-10px, 20px);";
    Thecard.append(HThree);
    Thecard.append(paragraph);
    container.append(Thecard);
    document.body.append(container);
}
let footer = document.createElement(`footer`);
footer.textContent = `copy right is to 2022`;
footer.style.cssText =
    "background-color: #23A96E; display: flex; justify-content: center; font-family: 'Courier New', Courier, monospace; padding: 20px; color: #fff; font-size: 22px; font-weight: bolder;";
document.body.append(footer);