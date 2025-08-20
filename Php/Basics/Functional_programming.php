<?php

# to declare a function in PHP
function greet($name) {
    echo "Hello, $name!\n";
}
# to call a function in PHP
greet("Omar Nafea");
# to declare a function with default parameter in PHP
function greetWithDefault($name = "Guest") {
    echo "Hello, $name!\n";
}
greetWithDefault(); // Calls with default parameter
greetWithDefault("Alice"); // Calls with custom parameter
# to declare a function with return value in PHP
function add($a, $b) {
    return $a + $b;
}
$result = add(5, 10);
echo "The sum is: $result\n";
# to declare a function with variable number of arguments in PHP
# to declare a function that can accept any number of parameters, you can use the splat operator (...).
# splat operator is used to collect all remaining arguments into an array.
function sum(...$numbers) {
    $total = 0;
    foreach ($numbers as $number) {
        $total += $number;
    }
    return $total;
}
$sumResult = sum(1, 2, 3, 4, 5);
echo "The total sum is: $sumResult\n";

# to declare a function with type hinting in PHP
# type hinting allows you to specify the expected data types of function parameters.
function multiply(int $a, int $b): int {
    return $a * $b;
}
$product = multiply(4, 5);
echo "The product is: $product\n";

# to declare a function with anonymous function in PHP
# anonymous function is a function without a name.
$greetAnonymous = function($name) {
    echo "Hello from anonymous function, $name!\n";
};
$greetAnonymous("Omar Nafea");

# to declare a function with closure in PHP
# closure is a special type of anonymous function that can capture variables from its surrounding scope.
$closure = function($name) {
    return "Hello from closure, $name!";
};
echo $closure("Omar Nafea") . "\n";
# to declare a function with callback in PHP
# callback functions are functions that can be passed as arguments to other functions.
function executeCallback($callback, $name) {
    return $callback($name);
}
$callbackFunction = function($name) {
    return "Hello from callback, $name!";
};
echo executeCallback($callbackFunction, "Omar Nafea") . "\n";
# to declare a function with recursion in PHP
# recursion is a technique where a function calls itself to solve a problem.
function factorial($n) {
    if ($n <= 1) {
        return 1;
    }
    return $n * factorial($n - 1);
}
echo "Factorial of 5 is: " . factorial(5) . "\n";

# call by value and call by reference in PHP
# call by value means passing a copy of the variable to the function, while call by reference means passing a reference to the variable.
function incrementValue($value) {
    $value++;
    return $value;
}
function incrementReference(&$value) {
# This function modifies the original variable by reference
    // The & symbol before $value indicates that we are passing by reference
    // This means that any changes made to $value inside the function will affect the original variable outside the function.
    // This is useful when you want to modify the original variable without returning a new value.
    $value++;
}
$value = 10;
$incrementedValue = incrementValue($value);
echo "Value after call by value: $incrementedValue\n"; // 11
incrementReference($value);
echo "Value after call by reference: $value\n"; // 11
# to declare a function with variadic functions in PHP


// # 0.1 how to get global variables in functions in PHP
// Global variables can be accessed in functions using the global keyword

$fruits = ["apple", "banana", "cherry"]; // Global array
function displayFruits() {
    global $fruits; // Accessing the global $fruits array
    echo "Fruits in the global array: " . implode(", ", $fruits) . "\n"; // Displaying the global array
    #  implode() is a function that joins array elements into a string, using a specified separator (in this case, ", ").
    // This will output: Fruits in the global array: apple, banana, cherry
}
displayFruits(); // Calling the function to display the global array


?>
