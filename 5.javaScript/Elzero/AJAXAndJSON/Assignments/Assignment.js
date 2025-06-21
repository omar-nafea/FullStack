// 1
let myRequest = new XMLHttpRequest();
myRequest.open("GET", "articles.json");
myRequest.send();
console.log(myRequest);

myRequest.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText);
        console.log("Data Loaded");
    }
};
// "JSON Object Content Here"
// "Data Loaded"

// 2
let myRequest1 = new XMLHttpRequest();
myRequest1.open("GET", "articles.json");
myRequest1.send();
myRequest1.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        let jsData = JSON.parse(this.responseText);
        for (let i = 0; i < jsData.length; i++) {
            jsData[i].category = "All"
        }
        console.log(...jsData)
    }
};
setTimeout(() => {
    console.log("JSON Object Content Here");
}, 100);

// {writer: 'omar nafea', id: 2456832, category: 'All', title: 'what is under the river', subject: 'lorem Ips incorrectly called the ground truth'} 
// {writer: 'omar nafea', id: 2456832, category: 'All', title: 'what is under the river', subject: 'lorem Ips incorrectly called the ground truth'} 
// {writer: 'omar nafea', id: 2456832, category: 'All', title: 'what is under the river', subject: 'lorem Ips incorrectly called the ground truth'} 
// {writer: 'omar nafea', id: 2456832, category: 'All', title: 'what is under the river', subject: 'lorem Ips incorrectly called the ground truth'} 
// {writer: 'omar nafea', id: 2456832, category: 'All', title: 'what is under the river', subject: 'lorem Ips incorrectly called the ground truth'}
// A JSON Object Content Here