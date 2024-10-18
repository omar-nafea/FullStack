function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
        function firstword() {
            strFirstWord = zName.split(" ")[0];
            return strFirstWord;
        }
        firstword();
        let nameing = zName.split("");

        function lastletter() {
            for (i = 0; i <= nameing.length; i++) {
                if (nameing[i] === " ") {
                    nameing = nameing[i + 1].toUpperCase();
                    // console.log(last);
                }
            }
            return nameing;
        }
        lastletter();
        return `${strFirstWord} ${nameing}.`;
    }
    namePattern(zName);
    // namePattern("omar ahmed");
    // namePattern("osama mohamed");
    // namePattern("ahmed fady");
    // namePattern("tarek wakel");

    function ageWithMessage(zAge) {
        // Write Your Code Here
        // 38 Is My Age => Your Age Is 38
        // 32 Is The Age => Your Age Is 32
        return `Your Age Is ${parseInt(zAge)}`;
    }
    ageWithMessage(zAge);
    // ageWithMessage("32 Is The Age");

    function countryTwoLetters(zCountry) {
        // Write Your Code Here
        // Egypt => You Live In EG
        // Syria => You Live In SY
        let theCoun = zCountry.slice(0, 2).toUpperCase();
        return `You Live In ${theCoun}`;
    }
    // countryTwoLetters("Egypt");
    countryTwoLetters(zCountry);

    function fullDetails() {
        // Write Your Code Here
        return `Hello ${namePattern(zName)}, ${ageWithMessage(
			zAge
		)}, ${countryTwoLetters(zCountry)}`;
    }
    return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

// 2
let itsMe = () => `Iam A Normal Function`;

console.log(itsMe()); // Iam A Normal Function
let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

// 3
// Currying Function Technique
//  standard way
// function add(x, y, z) {
//     return x + y + z;
// }
// console.log("standard: ", add(1, 2, 3));

//  curried style
// const add2 =
//     (
//         x // if you have only one argument in the lambda function you can omit the parenthesis
//     ) =>
//     (y) =>
//     (z) =>
//     x + y + z;

// console.log("curried: ", add2(1)(2)(3));
// //

// function checker(zName) {
//     return function(status) {
//         return function(salary) {
//             return status === "Available" ?
//                 `${zName}, My Salary Is ${salary}` :
//                 `Iam Not Avaialble`;
//         };
//     };
// }

const checker = (zName) => (status) => (salary) =>
    status === "Available" ?
    `${zName}, My Salary Is ${salary}` :
    `Iam Not Avaialble`;

console.log(checker("Osama")("Available")(4000)); // My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

// 4

function specialMix(...data) {
    let result = 0;
    for (j = 0; j < data.length; j++) {
        if (typeof data[j] === "number") {
            result += data[j];
        }
        if (typeof data[j] === "string") {
            let numbs = parseInt(data[j]);
            let hasNumber = /\d/;
            let number = hasNumber.test(data);
            if (number === true) {
                if (!Number.isNaN(numbs)) {
                    result += numbs;
                }
            } else {
                result = "All Is Strings";
            }
        }
    }
    return result;
}

console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50