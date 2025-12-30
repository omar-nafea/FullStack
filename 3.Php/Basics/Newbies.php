<?php
# how to print a message in PHP
// This is a single-line comment
echo "Hello, World!";
echo " This is a PHP script.\n";
# how to store a variable in PHP
$name = "Omar Nafea";
echo "My name is $name.\n";

# primitive data types in PHP
$number = 42;
$floatNumber = 3.14;
$booleanValue = true;
$NUllValue = null;

/* you can write multi-line comments like this
   or use the # or // symbol for single-line comments */

# how to initialize array in PHP
$students = ["hazem", "yomna", "ahmed", "malek", "adam"];
echo $students[0] . "\n"; # to concaticnate in echo you can add . and them what you want to add

# How to initialize Constent in PHP
define("MY_SITE", "google.com");
echo MY_SITE . "\n";

# Arithmetic operations in PHP

$coffee_quantity = 4;
$sandwitch_quantity = 2;
$sandwitch_price= 20;
$coffee_price = 10;
$num_friends = 3;
$discount = 0.1; // 10% discount

$sandwitch_total = $sandwitch_quantity * $sandwitch_price;
$coffee_total = $coffee_quantity * $coffee_price;
$total = $sandwitch_total + $coffee_total;
$cost_per_friend = $total / $num_friends;
$total_after_discount = $total - ($total * $discount);

echo "Total price for coffee: $coffee_total\n";
echo "Total price for sandwiches: $sandwitch_total\n";
echo "Total price for all items: $total\n";
echo "Total cost per friend: $cost_per_friend\n";
echo "Total after discount: $total_after_discount\n";
echo "Is the Total Even or Odd: ", $total_after_discount % 2 == 0 ? "Even\n" : "Odd\n";


# Assignment operators in PHP

$number = 10;
$number += 5; // equivalent to $number = $number + 5
$number -= 3; // equivalent to $number = $number - 3
$number *= 2; // equivalent to $number = $number * 2
$number /= 4; // equivalent to $number = $number / 4  
$number %= 3; // equivalent to $number = $number % 3

echo "Final value of number: $number\n";


# Logical operators in PHP

$age = 20;
$is_student = true;

# The AND operator returns true if both operands are true.
if ($age >= 18 && $is_student) {
    echo "Eligible for student discount\n";
# The OR operator returns true if at least one of its operands is true.
} elseif ($age < 18 || !$is_student) {
    echo "Not eligible for student discount\n";
} else {
    echo "Unknown eligibility\n";
}

# The Exclusive OR operator returns true if one and only one of its operands is true. If both are true or both are false, it returns false

$has_item_A = true;
$has_item_B = false;

// Eligible for a special offer if they have EITHER item A OR item B, but not both.
if ($has_item_A xor $has_item_B) {
    echo "You are eligible for the special exclusive offer!\n";
} else {
    echo "You are not eligible for this specific exclusive offer.\n";
}

$is_day_shift = true;
$is_night_shift = true; // A person cannot be on both shifts simultaneously for this rule

if ($is_day_shift xor $is_night_shift) {
    echo "Shift assignment is valid.\n";
} else {
    echo "Error: Shift assignment is conflicting or missing.\n"; // Will output this
}


# Null coalescing operator in PHP
$username = null;
$default_username = "Guest";
# The null coalescing operator (??) returns the left-hand operand if it exists and is not null; otherwise, it returns the right-hand operand.
echo $username ?? $default_username . "\n";

# The null coalescing assignment operator (??=) assigns the right-hand operand to the left-hand operand only if the left-hand operand is null.
$username ??= $default_username;
echo "Username after null coalescing assignment: $username\n";
?>