<?php


# Assiciative Arrays (Dictionary)
# Example on simple Assiciative Array
$person = [
  "name" => "John Doe",
  "age" => 30,
  "email" => "example@yahoo.com",
];

echo "Name: " . $person["name"] . "\n"; // Accessing the value of the "name" key
echo "Age: " . $person["age"] . "\n"; // Accessing the value of the "age" key
echo "Email: " . $person["email"] . "\n";

// # Example on complex Assiciative Array
// # Complex associative arrays can contain multiple key-value pairs, and each value can be of any data type, including other arrays.
// # In this example, we create an associative array called $person that contains information about a person.
// # The $person array has three key-value pairs: "name", "age", and "email".
// # The "name" key has a string value, the "age" key has an integer value, and the "email" key has a string value. 

$people = [
  [
    "name" => "John Doe",
    "age" => 30,
    "email" => "example@yahoo.com",
  ],
  [
    "name" => "omar nafea",
    "age" => 25,
    "email" => "omarnafea@gmail.com",
  ]
];

echo $people[0]["name"] . " is " . $people[0]["age"] . " years old and can be reached at " . $people[0]["email"] . ".\n"; // Accessing the first person's information

# if I want to print all names in people array
foreach ($people as $individual) {
  echo $individual["name"] . "\n"; // Looping through each person and printing their name
} 
print_r($people);

# if I want to add I new key-value element in assciative array in PHP
$person = [
  "name" => "John Doe",
  "age" => 30,
  "email" => "example@yahoo.com",
];
$person["address"] = "123 Main St"; // Adding a new key-value pair to the associative array

# if I want to reassign a value to an existing key in an associative array in PHP
$person["age"] = 21;

# if I want to remove a key-value pair from an associative array in PHP
function removeKeyValuePair(&$array, $key) {
    if (array_key_exists($key, $array)) {
      # array_key_exists() checks if the key exists in the associative array
        unset($array[$key]); // Unsetting the key-value pair from the associative array
    }
    if(isset($person["email"])){
      # isset() checks if the key exists in the associative array
        unset($person["email"]); // Removing the "email" key-value pair from the associative array
    }
}

# if I want to get keys exists in an associative array in PHP 
$keys = array_keys($person); // Getting the keys of the associative array
# if I want to get values exists in an associative array in PHP
$values = array_values($person); // Getting the values of the associative array 

# if I want to loop over keys in associative array in PHP
foreach ($keys as $key){
  echo $key . ": " . $person[$key] . "\n"; // Looping through each key and printing its value
//   /*
//   name: John Doe
//   age: 21
//   address: 123 Main St
// */
}

# if I want to loop over key-value items in acciative array in PHP
foreach ($person as $key => $value) {
  echo $key . " : " . $value . "" . "\n";
}

?>