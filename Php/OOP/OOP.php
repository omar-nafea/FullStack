<?php

/*
|--------------------------------------------------------------------------
| Object-Oriented Programming (OOP) in PHP
|--------------------------------------------------------------------------
|
| This file demonstrates the 4 main concepts of OOP in PHP:
| 1. Abstraction
| 2. Encapsulation
| 3. Inheritance
| 4. Polymorphism
|
| Special attention is given to PHP-specific syntax, including:
| - The '->' operator for accessing object members (properties & methods)
| - The '::' operator for referencing parent or static members
| - The '__construct' magic method for object construction
|
*/

/*
|--------------------------------------------------------------------------
| 1. Abstraction
|--------------------------------------------------------------------------
|
| Abstraction allows you to define a base class that cannot be instantiated,
| but requires derived classes to implement specific methods.
|
| - 'abstract class' defines a class that cannot be used directly.
| - 'abstract public function' declares a method that must be implemented by child classes.
*/
abstract class Animal {
    // Abstract method: must be implemented in subclasses
    abstract public function makeSound();
}

class Dog extends Animal {
    // Implementation of the abstract method
    public function makeSound() {
        return "Woof!";
    }
}

class Cat extends Animal {
    public function makeSound() {
        return "Meow!";
    }
}

// Example usage
// The '->' operator is used to access the makeSound() method of an object.
$dog = new Dog();
echo $dog->makeSound() . "\n"; // Outputs: Woof!

$cat = new Cat();
echo $cat->makeSound() . "\n"; // Outputs: Meow!

/*
|--------------------------------------------------------------------------
| 2. Encapsulation
|--------------------------------------------------------------------------
|
| Encapsulation restricts direct access to some of an object's components,
| which is achieved in PHP using access modifiers like 'private' and 'public'.
|
| - 'private' property (e.g., $balance) can only be accessed within the class.
| - 'public' methods (e.g., deposit, withdraw) provide controlled access.
| - '__construct' is a special method called automatically when an object is created.
|   The double underscore '__' denotes a PHP "magic method."
| - The '->' operator is used to access methods and properties of object instances.
*/
class BankAccount {
    private $balance; // Only accessible within this class

    // The constructor initializes the object with an initial balance
    public function __construct($initialBalance) {
        $this->balance = $initialBalance;
    }

    public function deposit($amount) {
        if ($amount > 0) {
            $this->balance += $amount;
        }
    }

    public function withdraw($amount) {
        if ($amount > 0 && $amount <= $this->balance) {
            $this->balance -= $amount;
        }
    }

    public function getBalance() {
        return $this->balance;
    }
}

// Example usage
$account = new BankAccount(100);
// The '->' operator is used to call the deposit and withdraw methods.
$account->deposit(50);
$account->withdraw(30);
echo "Balance: " . $account->getBalance() . "\n"; // Outputs: Balance: 120

/*
|--------------------------------------------------------------------------
| 3. Inheritance
|--------------------------------------------------------------------------
|
| Inheritance enables a class (child) to inherit properties and methods from another class (parent).
|
| - 'extends' keyword is used for inheritance.
| - 'parent::__construct()' uses the '::' scope resolution operator to call the parent's constructor.
| - The '::' operator is also used to access static properties or methods and overridden methods from the parent class.
| - The '->' operator accesses instance properties and methods.
*/
class Vehicle {
    public $brand;
    public $model;

    // Constructor initializes brand and model
    public function __construct($brand, $model) {
        $this->brand = $brand;
        $this->model = $model;
    }

    public function getDetails() {
        return "Brand: " . $this->brand . ", Model: " . $this->model;
    }
}

class Car extends Vehicle {
    public $numberOfDoors;

    // The constructor calls the parent constructor using 'parent::'
    public function __construct($brand, $model, $numberOfDoors) {
        parent::__construct($brand, $model); // Calls Vehicle's constructor
        $this->numberOfDoors = $numberOfDoors;
    }

    // Overrides the parent's getDetails method
    public function getDetails() {
        // Uses parent::getDetails() to call the parent's version
        return parent::getDetails() . ", Number of Doors: " . $this->numberOfDoors;
    }
}

// Example usage
$vehicle = new Vehicle("Toyota", "Corolla");
echo $vehicle->getDetails() . "\n"; // Outputs: Brand: Toyota, Model: Corolla

$car = new Car("Honda", "Civic", 4);  
echo $car->getDetails() . "\n"; // Outputs: Brand: Honda, Model: Civic, Number of Doors: 4

/*
|--------------------------------------------------------------------------
| 4. Polymorphism
|--------------------------------------------------------------------------
|
| Polymorphism allows objects of different classes to be treated as instances of the parent class.
| In PHP, this is often achieved by method overriding (same method name, different implementations).
|
| - The '->' operator is used to call the correct method based on the actual object instance, even if referenced by a parent type.
| - The 'getDetails()' method is overridden in the Car class.
*/
$car = new Car("BMW", "X5", 4);
echo $car->getDetails() . "\n"; // Outputs: Brand: BMW, Model: X5, Number of Doors: 4

/*
|--------------------------------------------------------------------------
| Additional Example: Person & Student Classes
|--------------------------------------------------------------------------
|
| Demonstrates inheritance, method overriding, and the use of '__construct'.
| - Student extends Person and adds a new property ($studentId) and method (study).
| - 'parent::__construct()' initializes inherited properties.
*/
class Person {
    public $name;
    public $age;

    // '__construct' is called when a new object is created.
    public function __construct($name, $age) {
        $this->name = $name;
        $this->age = $age;
    }

    public function greet() {
        return "Hello, my name is " . $this->name . " and I am " . $this->age . " years old.";
    }
}

class Student extends Person {
    public $studentId;

    public function __construct($name, $age, $studentId) {
        parent::__construct($name, $age); // Calls Person's constructor
        $this->studentId = $studentId;
    }

    public function study() {
        return $this->name . " is studying.";
    }
}

// Example usage
$person = new Person("Alice", 30);
echo $person->greet() . "\n"; // Hello, my name is Alice and I am 30 years old.

$student = new Student("Bob", 20, "S12345");
echo $student->greet() . "\n";   // Hello, my name is Bob and I am 20 years old.
echo $student->study() . "\n";   // Bob is studying.
echo "Student ID: " . $student->studentId . "\n"; // Student ID: S12345

?>