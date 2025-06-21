async function fetchData() {
    console.log("Before Fetch");
    try {
        let myData = await fetch("object.json");
        let mo = await myData.json();
        for (let i = 0; i < mo.length / 2; i++) {
            let div = document.createElement("div");
            let title = document.createElement("h2");
            let body = document.createElement("p");
            title.textContent = mo[i].title;
            body.textContent = mo[i].description;
            div.appendChild(title);
            div.appendChild(body);
            document.body.appendChild(div);
            console.log(mo[i]);
        }
    } catch (reason) {
        console.log(`Reason: ${reason}`);
    } finally {
        console.log("After Fetch");
    }
}

fetchData();


const getData = (apiLink) => {
    return new Promise((resolve, reject) => {
        let myRequest = new XMLHttpRequest();
        myRequest.onload = function() {
            if (this.readyState === 4 && this.status === 200) {
                let x = (JSON.parse(this.responseText));
                for (let i = 0; i < x.length / 2; i++) {
                    let div = document.createElement("div");
                    let title = document.createElement("h2");
                    let body = document.createElement("p");
                    title.textContent = x[i].title;
                    body.textContent = x[i].description;
                    div.appendChild(title);
                    div.appendChild(body);
                    document.body.appendChild(div);
                    // console.log(x[i]);
                }
            } else {
                reject(Error("No Data Found"));
            }
        };

        myRequest.open("GET", apiLink);
        myRequest.send();
    });
};

getData("object.json")