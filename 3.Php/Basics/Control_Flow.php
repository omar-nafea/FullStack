<?php 
# 1. Conditional statements in PHP
# 1.1- how to control the flow of a program with if-else statement in PHP
$grade = 85;
if ($grade >= 90) {
    echo "A\n";
} elseif ($grade >= 80) {
    echo "B\n";
} elseif ($grade >= 70) {
    echo "C\n";
} elseif ($grade >= 60) {
    echo "D\n";
} else {
    echo "F\n";
}


# 1.2- switch statement in PHP
$day = "Monday";
switch ($day) {
    case "Monday":
        echo "Start of the week\n";
        break;
    case "Tuesday":
        echo "Second day of the week\n";
        break;
    case "Wednesday":
        echo "Midweek\n";
        break;
    case "Thursday":
        echo "Almost weekend\n";
        break;
    case "Friday":
        echo "End of the work week\n";
        break;
    case "Saturday":
    case "Sunday":
        echo "Weekend!\n";
        break;
    default:
        echo "Invalid day\n";
}

# you can do in switch statement like this
$fruit = "apple";
switch ($fruit) {
    case "apple":
    case "banana":
        echo "It's a fruit\n";
        break;
    case "carrot":
        echo "It's a vegetable\n";
        break;
    default:
        echo "Unknown item\n";
}

# short-hand to switch statement in PHP

$menu_option = 9;
$result = '';


switch ($menu_option) {
    case 1:
        $result = "Arabic or english selected";
        break;
    case 7:
    case 3:
        $result = "3. French";
        break;
    default:
        $result = "No option found";
}

// match
$result = match($menu_option) {
    1 => "Arabic or english selected",
    7, 3 => "3. French",
    default => "No option found"
};
echo $result . "\n";

/*
The match expression is a more modern (PHP 8.0+) and concise way to handle conditional assignments compared to switch. It's an expression, meaning it evaluates to a value.
It strictly compares the value of $menu_option.
1 => "Arabic or english selected",: If $menu_option is 1, the match expression evaluates to "Arabic or english selected".
7, 3 => "3. French",: If $menu_option is 7 OR 3, it evaluates to "3. French". This is a concise way to handle multiple conditions leading to the same result.
default => "No option found": If no other arm matches, it evaluates to "No option found".
*/

# another example of match expression in PHP
$color = "red";
echo match ($color) {
    "red" => "Color is red\n",
    "green" => "Color is green\n",
    "blue" => "Color is blue\n",
    default => "Unknown color\n",
};

# 1.3- Ternary operator in PHP
$is_logged_in = false;
$message = $is_logged_in ? "Welcome back!" : "Please log in.";
echo $message . "\n";


# 2. Looping structures in PHP

# 2.1- for loop in PHP
# for loop is used when the number of iterations is known beforehand.
for ($i = 0; $i < 5; $i++) {
    echo "Iteration: $i\n";
}

# 2.2- while loop in PHP
# while loop continues as long as the condition is true.    
$i = 0;
while ($i < 5) {
    echo "Iteration: $i\n";
    $i++;
}

# 2.3- do-while loop in PHP
# do-while loop guarantees that the loop body will execute at least once, even if the condition is false initially.
$i = 0;
do {
    echo "Iteration: $i\n";
    $i++;
} while ($i < 5);
# 2.4- foreach loop in PHP
$fruits = ["apple", "banana", "cherry"];
foreach ($fruits as $fruit) {
    echo "Fruit: $fruit\n";
}

# 3. Jumping statements in PHP

# 3.1- break statement in PHP
for ($i = 0; $i < 10; $i++) {
    if ($i == 5) {
        break; // Exit the loop when $i is 5
    }
    echo "Iteration: $i\n";
}



# 3.2- continue statement in PHP
for ($i = 0; $i < 10; $i++) {
    if ($i % 2 == 0) {
        continue; // Skip even numbers
    }
    echo "Odd number: $i\n";
}

# another example of break statement in PHP
while(true){
    echo "Enter a number: ";
    $input = trim(fgets(STDIN));
    # fgets(STDIN) reads a line from standard input
    # STDIN is a constant that represents the standard input stream in PHP
    # streams are used to read and write data in PHP, and STDIN is specifically for reading input from the user.
    # string: The input is read as a string, so we need to convert it to an integer if we want to perform numerical operations.
    # trim() is used to remove any whitespace or newline characters from the input. 
    if ($input >= 0){
        echo "You entered a non-negative number: $input\n";
    } else {
        echo "Negative number entered, exiting loop.\n";
        break; // Exit the loop if a negative number is entered
    }
}
?>
