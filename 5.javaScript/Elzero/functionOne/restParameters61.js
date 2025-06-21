/*
Function
- Rest Parameters
- Only One Allowed
- Must Be Last Element
*/
function calc(num1, num2, num3) {
    return num1 + num2 + num3;
}
console.log(calc(10, 20, 10, 30, 50));

// rest parameter is used to create an array for parameters when you dont know the amount
// of arrguments do you recieve by creating the name of the array after three dots
function calc(...numbers) {
    // console.log(Array.isArray(numbers)); // true
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i]; // result = result + numbers[i]
    }
    return `Final Result Is ${result}`;
}
console.log(calc(10, 20, 10, 30, 50, 30));