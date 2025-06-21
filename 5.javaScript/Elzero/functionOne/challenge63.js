/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
  */

function showDetails(...Data) {
    let name, age, availibility;
    for (let i = 0; i < Data.length; i++) {
        typeof Data[i] === "string" ?
            (name = Data[i]) :
            typeof Data[i] === "number" ?
            (age = Data[i]) :
            typeof Data[i] === "boolean" && Data[i] === true ?
            (availibility = `Available For Hire`) :
            (availibility = `Not Available For Hire`);
    }
    document.write(
        `<div>Hello ${name}, Your Age Is ${age}, You Are ${availibility}</div>`
    );
}

showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"