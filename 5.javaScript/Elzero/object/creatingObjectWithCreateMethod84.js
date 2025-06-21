/*
  Object
  - Create Object With assign Method
*/

let userOne = {
    age: 20,
    doubleAge: function() {
        return user.age * 2;
    },
};

let user = {
    age: 20,
    doubleAge: function() {
        // i separate the user age from duplicate or asign from the original object in
        // object.creat() by(this) keyword
        return this.age * 2;
    },
};

console.log(user);
console.log(user.age);
console.log(user.doubleAge());

// let obj = Object.create({});

// obj.a = 100;

// console.log(obj);

let objo = Object.create(userOne);

objo.age = 50;

console.log(objo);
console.log(objo.age);
console.log(objo.doubleAge());

let copyObj = Object.create(user);

copyObj.age = 50;

console.log(copyObj);
console.log(copyObj.age);
console.log(copyObj.doubleAge());