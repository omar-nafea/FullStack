/*
  Promise And XHR
*/

const getData = (apiLink) => {
    return new Promise((resolve, reject) => {
        let myRequest = new XMLHttpRequest();
        myRequest.onload = function() {
            if (this.readyState === 4 && this.status === 200) {
                let x = (JSON.parse(this.responseText));
                console.log(x.length);
                for (let i = 0; i < x.length / 2; i++) {
                    console.log(x[i]);
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
    // .then((result) => {
    //     result.length = 10;
    //     return result;
    // })
    // .then((result) => console.log(result[0].name))
    // .catch((rej) => console.log(rej));