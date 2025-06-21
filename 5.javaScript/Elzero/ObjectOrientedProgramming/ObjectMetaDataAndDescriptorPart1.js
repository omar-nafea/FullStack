/*
  Object Meta Data And Descriptor
  - writable
  - enumerable
  - configurable [Cannot Delete Or Reconfigure]
*/

const myObject = {
    a: 1,
    b: 2,
};

Object.defineProperty(myObject, "c", {
    writable: false,
    enumerable: true,
    configurable: false,
    value: 3,
});

// delete myObj.username; //   Delete myObj.username from the object
// writable: false, you can not write over it it again
// enumerable: false, you can not loop or any thing related to numbering
// configurable: false, you can not delete or redefine it  


myObject.c = 100;

console.log(delete myObject.c);

for (let prop in myObject) {
    console.log(prop, myObject[prop]);
}

console.log(myObject);