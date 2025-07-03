<?php
# Arrays in PHP
# First Indexed Arrays in PHP
// # 1. How to initialize an array in PHP
$fruits = ["apple", "banana", "cherry"];
echo "First fruit: " . $fruits[0] . "\n"; // Accessing the first element

// # 2 How to add multiple elements to the end of an array in PHP
array_push($fruits, "elderberry", "fig"); // Adding multiple elements to the end of the array
echo "After adding elderberry and fig: " . implode(", ", $fruits) . "\n"; // Displaying the array after adding multiple elements  

// # 2.1 How to add an element at the beginning of an array in PHP
array_unshift($fruits, "grape"); // Adding "grape" at the beginning of the array
echo "After adding grape at the beginning: " . implode(", ", $fruits) . "\n"; // Displaying the array after adding an element at the beginning


// # 2.2 How to add an element at a specific position in an array in PHP
array_splice($fruits, 1, 0, "blueberry"); // Adding "blueberry" at index 1
echo "After adding blueberry at index 1: " . implode(", ", $fruits) . "\n"; // Displaying the array after adding an element at a specific position

// # 2.3 How to remove the last element from an array in PHP
array_pop($fruits); // Removing the last element from the array
echo "After removing the last element: " . implode(", ", $fruits) . "\n"; // Displaying the array after removing the last element

// # 2.4 How to remove the first element from an array in PHP
array_shift($fruits); // Removing the first element from the array
echo "After removing the first element: " . implode(", ", $fruits) . "\n"; // Displaying the array after removing the first element

// # 2.5 How to remove an element from an array in PHP
unset($fruits[1]); // Removing the second element (banana)
echo "After removing banana: " . implode(", ", $fruits) . "\n"; // Displaying the array after removing an element

// # 3. How to loop through an array in PHP     
foreach ($fruits as $fruit) {
    echo "Fruit: $fruit\n"; // Looping through each element in the array
}

// # 3.1 How to check if an element exists in an array in PHP
if (in_array("apple", $fruits)) {
    echo "Apple is in the array.\n"; // Checking if "apple" exists in the array
} else {
    echo "Apple is not in the array.\n";
}

// # 3.2 How to get the length of an array in PHP
echo "Number of fruits: " . count($fruits) . "\n"; // Getting the length of the array

// # 3.3 How to sort an array in PHP
sort($fruits); // Sorting the array in ascending order
echo "Sorted fruits: " . implode(", ", $fruits) . "\n"; // Displaying the sorted array

// # 3.4 How to reverse an array in PHP
$reversedFruits = array_reverse($fruits); // Reversing the array
echo "Reversed fruits: " . implode(", ", $reversedFruits) . "\n"; // Displaying the reversed array

// # 4. How to merge two arrays in PHP
$vegetables = ["carrot", "broccoli", "spinach"];
$combined = array_merge($fruits, $vegetables); // Merging two arrays
echo "Combined array: " . implode(", ", $combined) . "\n"; // Displaying the combined array

// # 4.1 How to slice an array in PHP
$slicedFruits = array_slice($fruits, 1, 2); // Slicing the array to get a portion
echo "Sliced fruits: " . implode(", ", $slicedFruits) . "\n"; // Sliced fruits: banana, cherry


// # 4.2.1 Strings in PHP
# Strings are just arrays but differs from each programming language to another on the build-in methods of strings that these languages provide

$name = "Omar Nafea";
for ($i = 0; $i < strlen($name); $i++) {
    echo "Character at position $i: " . $name[$i] . "\n"; // Looping through each character in the string
    // # strlen() is a built-in PHP function that returns the length of a string
}

// # 4.2.2 How to get position of characters in string
$position = strpos($name, "n"); // Getting the position of the first occurrence of "n"
if ($position !== false) {
    echo "The character 'n' is found at position: $position\n"; // Displaying the position of the character
} else {
    echo "The character 'n' is not found in the string.\n"; // If the character is not found
}
// # 4.2.3 How to replace a substring in a string
$replacedName = str_replace("Nafea", "BinNafea", $name); // Replacing "nafea" with "nafea" (no change)
echo "Replaced name: $replacedName\n"; // Displaying the replaced string

// # 4.2.4 How to split a string into an array in PHP,
$nameArray = str_split($name); // Splitting the string into an array of characters
echo "Characters in the name: " . implode(", ", $nameArray) . "\n"; // Displaying the characters in the string

// # 4.2.4 How to split a string into an array using a delimiter in PHP
// # explode() is a built-in PHP function that splits a string into an array using a specified delimiter
$words = explode(" ", $name); // Splitting the string into an array using space as a delimiter
print_r($words); // Displaying the array of words
echo "Words in the name: " . implode(", ", $words) . "\n"; // Displaying the words in the string
// # 4.2.5 How to join an array into a string in PHP
$joinedName = implode(" ", $words); // Joining the array back into a string using space as a delimiter
echo "Joined name: $joinedName\n"; // Displaying the joined string
// # 4.2.6 How to convert a string to lowercase in PHP
$lowercaseName = strtolower($name); // Converting the string to lowercase
echo "Lowercase name: $lowercaseName\n"; // Displaying the lowercase string
// # 4.2.7 How to trim whitespace from a string in PHP
$trimmedName = trim($name); // Trimming whitespace from the beginning and end of the string
echo "Trimmed name: $trimmedName\n"; // Displaying the trimmed string
// # 4.2.8 How to check if a string starts with a specific substring in PHP
$startsWithOmar = str_starts_with($name, "omar"); // Checking if the string starts with "omar"  


// # 5. How to filter an array in PHP
$filteredFruits = array_filter($fruits, function($fruit) {
    return strlen($fruit) > 5; // Filtering fruits with names longer than 5 characters
    // # strlen() is a built-in PHP function that returns the length of a string
});
echo "Filtered fruits: " . implode(", ", $filteredFruits) . "\n"; // Displaying the filtered array

// # 5.1 How to map an array in PHP
// Mapping is used to apply a function to each element of the array
$mappedFruits = array_map(function($fruit) {
    return strtoupper($fruit); // Converting each fruit name to uppercase
    // # strtoupper() is a built-in PHP function that converts a string to uppercase
}, $fruits);
echo "Mapped fruits: " . implode(", ", $mappedFruits) . "\n"; // Displaying the mapped array

// # 5.2 How to check if an array is empty in PHP
if (empty($fruits)) {
    echo "The fruits array is empty.\n"; // Checking if the array is empty
} else {
    echo "The fruits array is not empty.\n"; // The array has elements
}

// # 6. Exercise: Create a multidimensional array in PHP
$seatingList = [
    ["A1", "A2", "A3", "A4"],
    ["B1", "B2", "-", "B4"],
    ["C1", "C2", "C3", "C4"]
    ];
for ($i = 0; $i < count($seatingList); $i++) {
  echo "Row " . ($i + 1) . ": "; // Displaying student number
  for ($j = 0; $j < count($seatingList[$i]); $j++) {
    if ($seatingList[$i][$j] === "-") {
      echo "X "; // Skip empty seats
    } elseif (str_contains($seatingList[$i][$j], "1")) {
      echo "VIP "; // Display VIP seat
    } else {
      echo $seatingList[$i][$j] . " "; // Displaying student information
    }
  }
  echo "\n"; // New line after each student's information
  // # The above code uses a nested loop to iterate through the multidimensional array
  // # The outer loop iterates through each student, and the inner loop iterates through each key-value pair of the student.
}

  
?>