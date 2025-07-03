<?php

# OOP in PHP

# Abstraction in PHP
abstract class Animal {
    abstract public function makeSound();
}
class Dog extends Animal {
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
$dog = new Dog();
echo $dog->makeSound() . "\n"; // Outputs: Woof!
$cat = new Cat();
echo $cat->makeSound() . "\n"; // Outputs: Meow!

# Encapsulation in PHP
class BankAccount {
    private $balance;

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
$account->deposit(50);
$account->withdraw(30);
echo "Balance: " . $account->getBalance() . "\n"; // Outputs: Balance: 120
# Inheritance in PHP
class Vehicle {
    public $brand;
    public $model;

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

    public function __construct($brand, $model, $numberOfDoors) {
        parent::__construct($brand, $model);
        $this->numberOfDoors = $numberOfDoors;
    }

    public function getDetails() {
        return parent::getDetails() . ", Number of Doors: " . $this->numberOfDoors;
    }
}
// Example usage
$vehicle = new Vehicle("Toyota", "Corolla");
echo $vehicle->getDetails() . "\n"; // Outputs: Brand: Toyota, Model: Corolla
$car = new Car("Honda", "Civic", 4);  
echo $car->getDetails() . "\n"; // Outputs: Brand: Honda, Model: Civic, Number of Doors: 4

# Polymorphism in PHP
$car = new Car("BMW", "X5", 4);
echo $car->getDetails() . "\n", 4; // Outputs: Brand: BMW, Model: X5, Number of Doors: 4




class Person {
    public $name;
    public $age;

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
        parent::__construct($name, $age);
        $this->studentId = $studentId;
    }

    public function study() {
        return $this->name . " is studying.";
    }
}
// Example usage
$person = new Person("Alice", 30);
echo $person->greet() . "\n";
$student = new Student("Bob", 20, "S12345");
echo $student->greet() . "\n";
echo $student->study() . "\n";
echo "Student ID: " . $student->studentId . "\n";



?>