/*
<div>
    <h2>Title 1</h2>
    <p>Article Number 1 Body</p>
    <p>Author: Ali</p>
    <p>Category: Science</p>
</div>
  */


let myRequest = new XMLHttpRequest();
myRequest.open("GET", "articles.json");
myRequest.send();
myRequest.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        let jsData = JSON.parse(this.responseText);
        jsData.forEach(mobile => {
            let data = document.getElementById("data");
            let div = document.createElement("div");
            let title = document.createElement("h2");
            let body = document.createElement("p");
            let category = document.createElement("p");
            let author = document.createElement("p");
            title.textContent = mobile.title;
            body.textContent = mobile.body;
            category.textContent = `category :${mobile.category}`;
            author.textContent = `author: ${mobile.author}`;
            div.appendChild(title);
            div.appendChild(body);
            div.appendChild(author);
            div.appendChild(category);
            data.appendChild(div);
        });
    }
};