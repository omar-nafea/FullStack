OOP is a programming paradigm based on the concept of "objects", which can contain data in the form of fields (often known as attributes or properties) and code in the form of procedures (often known as methods). This approach allows for more organized, reusable, and maintainable code.

## Core OOP Concepts in PHP

Here are the fundamental concepts of OOP in PHP:

### 1. Classes and Objects

- **Class**: A **blueprint** or template for creating objects. It defines a set of properties and methods that all objects of that class will have.

  - Think of a `Car` class. It would define properties like `color`, `model`, and methods like `startEngine()`, `accelerate()`.

  ```php
  <?php

  class Car {
      // Properties
      public $color;
      public $model;

      // Constructor
      public function __construct($color, $model) {
          $this->color = $color;
          $this->model = $model;
          echo "A new {$this->color} {$this->model} car has been created.\n";
      }

      // Methods
      public function startEngine() {
          return "Engine started for {$this->model}!\n";
      }

      public function accelerate() {
          return "The {$this->model} is accelerating.\n";
      }

      // Destructor (called when the object is no longer in use)
      public function __destruct() {
          echo "The {$this->color} {$this->model} car object is being destroyed.\n";
      }
  }

  ?>
  ```

- **Object**: An **instance** of a class. When you create an object, you are creating a specific item based on the class blueprint.

  - Using the `Car` class, you could create objects like `$myRedCar` (a red Toyota) or `$blueSuv` (a blue Ford).

  ```php
  <?php

  // Assuming the Car class from above is defined

  // Creating objects (instances) of the Car class
  $myCar = new Car("Red", "Toyota Camry");
  $anotherCar = new Car("Blue", "Honda Civic");

  // Accessing properties
  echo "My car's color: " . $myCar->color . "\n"; // Output: My car's color: Red
  echo "Another car's model: " . $anotherCar->model . "\n"; // Output: Another car's model: Honda Civic

  // Calling methods
  echo $myCar->startEngine();     // Output: Engine started for Toyota Camry!
  echo $anotherCar->accelerate(); // Output: The Honda Civic is accelerating.

  // When the script ends or objects are unset, the __destruct method is called.
  // unset($myCar); // This would explicitly trigger the destructor for $myCar

  ?>
  ```

- **`$this` Keyword**: Inside a class's methods, the `$this` keyword refers to the **current object instance**. It's used to access the object's properties and methods from within the class.

- **`new` Keyword**: Used to create an instance (object) of a class.

- **Constructor (`__construct`)**: A special method that is automatically called when an object is created. It's often used to initialize an object's properties.

- **Destructor (`__destruct`)**: A special method that is automatically called when an object is destroyed or when the script finishes execution. It's useful for cleanup tasks like closing database connections or releasing resources.

---

### 2. Encapsulation 💊

Encapsulation is the bundling of data (properties) and methods that operate on that data within a single unit (the class). It also involves restricting direct access to some of an object's components, which is known as **access control**.

- **Access Modifiers**: PHP provides three access modifiers:

  - `public`: Properties and methods can be accessed from anywhere (outside the class and by derived classes). This is the default if no modifier is specified.
  - `protected`: Properties and methods can be accessed only within the class itself and by classes that inherit from it (child classes).
  - `private`: Properties and methods can be accessed only within the class that defines them. They are not accessible by child classes or from outside the class.

  ```php
  <?php

  class BankAccount {
      public $accountHolderName;
      private $balance; // Encapsulated: cannot be directly accessed from outside
      protected $accountType;

      public function __construct($name, $initialBalance, $type = "Savings") {
          $this->accountHolderName = $name;
          if ($initialBalance >= 0) {
              $this->balance = $initialBalance;
          } else {
              $this->balance = 0;
          }
          $this->accountType = $type;
          echo "Account for {$this->accountHolderName} created with balance: {$this->balance}\n";
      }

      public function deposit($amount) {
          if ($amount > 0) {
              $this->balance += $amount;
              echo "Deposited {$amount}. New balance: {$this->balance}\n";
          } else {
              echo "Deposit amount must be positive.\n";
          }
      }

      public function withdraw($amount) {
          if ($amount > 0 && $amount <= $this->balance) {
              $this->balance -= $amount;
              echo "Withdrew {$amount}. New balance: {$this->balance}\n";
          } else {
              echo "Invalid withdrawal amount or insufficient funds.\n";
          }
      }

      // Getter method to access the private balance property
      public function getBalance() {
          return $this->balance;
      }

      protected function getAccountType() {
          return $this->accountType;
      }
  }

  $account1 = new BankAccount("John Doe", 1000);
  echo "Account Holder: " . $account1->accountHolderName . "\n"; // OK, public

  // echo $account1->balance; // Fatal error: Cannot access private property BankAccount::$balance
  // echo $account1->accountType; // Fatal error: Cannot access protected property BankAccount::$accountType

  $account1->deposit(500);
  $account1->withdraw(200);
  echo "Current Balance for {$account1->accountHolderName}: " . $account1->getBalance() . "\n"; // Access balance via public getter

  ?>
  ```

  **Getters and Setters**: These are public methods used to access (get) and modify (set) the values of private or protected properties, allowing controlled access.

---

### 3. Inheritance 👨‍👩‍👧‍👦

Inheritance is a mechanism where a new class (child or subclass) derives properties and methods from an existing class (parent or superclass). This promotes code reuse and establishes a "is-a" relationship (e.g., a `Dog` _is an_ `Animal`).

- **`extends` Keyword**: Used to define a child class that inherits from a parent class.
- **`parent::` Keyword**: Used to call a parent class's constructor or methods from within a child class, especially when overriding them.
- **Method Overriding**: A child class can provide a specific implementation for a method that is already defined in its parent class.
- **`final` Keyword**:

  - If a **class** is declared `final`, it cannot be inherited.
  - If a **method** is declared `final`, it cannot be overridden by a child class.

  ```php
  <?php

  class Animal {
      public $name;
      protected $sound;

      public function __construct($name, $sound = "makes a sound") {
          $this->name = $name;
          $this->sound = $sound;
          echo "Animal {$this->name} created.\n";
      }

      public function makeSound() {
          return "{$this->name} {$this->sound}.\n";
      }

      public function sleep() {
          return "{$this->name} is sleeping.\n";
      }

      final public function breathe() { // This method cannot be overridden
          return "{$this->name} is breathing.\n";
      }
  }

  class Dog extends Animal { // Dog inherits from Animal
      private $breed;

      public function __construct($name, $breed) {
          parent::__construct($name, "barks"); // Call parent constructor
          $this->breed = $breed;
          echo "A {$this->breed} dog named {$this->name} created.\n";
      }

      // Overriding the makeSound method from the Animal class
      public function makeSound() {
          return "{$this->name} the {$this->breed} woofs loudly!\n";
      }

      public function fetch() {
          return "{$this->name} is fetching the ball.\n";
      }

      // Attempting to override a final method would cause a fatal error:
      // public function breathe() { /* ... */ } // Error!
  }

  final class Cat extends Animal { // Cat inherits from Animal, but cannot be extended further
      public function __construct($name) {
          parent::__construct($name, "meows");
      }

      public function purr() {
          return "{$this->name} is purring.\n";
      }
  }

  // class BengalCat extends Cat {} // Fatal error: Class BengalCat may not inherit from final class (Cat)

  $genericAnimal = new Animal("Creature");
  echo $genericAnimal->makeSound(); // Output: Creature makes a sound.
  echo $genericAnimal->breathe();   // Output: Creature is breathing.

  $myDog = new Dog("Buddy", "Golden Retriever");
  echo $myDog->makeSound(); // Output: Buddy the Golden Retriever woofs loudly! (Overridden method)
  echo $myDog->sleep();     // Output: Buddy is sleeping. (Inherited method)
  echo $myDog->fetch();     // Output: Buddy is fetching the ball. (Dog specific method)
  echo $myDog->breathe();   // Output: Buddy is breathing. (Inherited final method)

  $myCat = new Cat("Whiskers");
  echo $myCat->makeSound(); // Output: Whiskers meows.
  echo $myCat->purr();      // Output: Whiskers is purring.

  ?>
  ```

---

### 4. Polymorphism 🎭

Polymorphism ("many forms") allows objects of different classes to respond to the same method call in different ways. It's often achieved through inheritance and interfaces. It allows you to treat objects of different classes in a uniform way if they share a common parent class or implement the same interface.

    ```php
    <?php

    interface Shape { // Define a contract
        public function calculateArea();
    }

    class Circle implements Shape {
        private $radius;

        public function __construct($radius) {
            $this->radius = $radius;
        }

        public function calculateArea() { // Implementation specific to Circle
            return pi() * pow($this->radius, 2);
        }
    }

    class Rectangle implements Shape {
        private $width;
        private $height;

        public function __construct($width, $height) {
            $this->width = $width;
            $this->height = $height;
        }

        public function calculateArea() { // Implementation specific to Rectangle
            return $this->width * $this->height;
        }
    }

    function printArea(Shape $shape) { // Type hinting with the interface
        // The same method call $shape->calculateArea() behaves differently based on the object's actual class
        echo "Area: " . $shape->calculateArea() . "\n";
    }

    $circle = new Circle(5);
    $rectangle = new Rectangle(4, 6);

    printArea($circle);    // Output: Area: 78.539816339745
    printArea($rectangle); // Output: Area: 24

    // Another polymorphism example with class inheritance
    class Bird {
        public function fly() {
            echo "Bird is flying.\n";
        }
    }

    class Sparrow extends Bird {
        public function fly() { // Overriding
            echo "Sparrow is flying quickly.\n";
        }
    }

    class Penguin extends Bird {
        public function fly() { // Overriding
            echo "Penguin cannot fly, it swims.\n";
        }
    }

    function makeBirdFly(Bird $bird) {
        $bird->fly(); // Polymorphic call
    }

    $sparrow = new Sparrow();
    $penguin = new Penguin();

    makeBirdFly($sparrow); // Output: Sparrow is flying quickly.
    makeBirdFly($penguin); // Output: Penguin cannot fly, it swims.

    ?>
    ```
    In the `Shape` example, both `Circle` and `Rectangle` objects can call `calculateArea()`, but the actual calculation performed is specific to each class. The `printArea` function can work with any object that implements the `Shape` interface.
    In the `Bird` example, `makeBirdFly` can accept any object that is a `Bird` or its subclass. The `fly()` method behaves differently for `Sparrow` and `Penguin`.

---

### 5. Abstraction 🖼️

Abstraction means hiding complex implementation details and showing only the essential features of an object. It focuses on _what_ an object does rather than _how_ it does it. This is achieved using abstract classes and interfaces.

- **Abstract Class**:

  - A class that cannot be instantiated on its own. It's meant to be a base class for other classes.
  - Can contain both abstract methods (methods without a body, only a signature) and concrete methods (methods with implementation).
  - Child classes inheriting from an abstract class **must** implement all abstract methods defined in the parent abstract class, unless the child class is also abstract.
  - Declared using the `abstract` keyword.

  ```php
  <?php

  abstract class PaymentGateway {
      protected $apiKey;

      public function __construct($apiKey) {
          $this->apiKey = $apiKey;
          echo "PaymentGateway initialized.\n";
      }

      // Abstract method: must be implemented by child classes
      abstract public function processPayment($amount);

      // Concrete method
      public function getTransactionDetails($transactionId) {
          return "Fetching details for transaction: {$transactionId} using API key {$this->apiKey}\n";
      }
  }

  class PayPal extends PaymentGateway {
      public function processPayment($amount) { // Implementation of abstract method
          return "Processing PayPal payment of {$amount}...\n";
      }
  }

  class Stripe extends PaymentGateway {
      public function processPayment($amount) { // Implementation of abstract method
          return "Processing Stripe payment of {$amount}...\n";
      }
  }

  // $gateway = new PaymentGateway("some_key"); // Fatal error: Cannot instantiate abstract class PaymentGateway

  $paypal = new PayPal("paypal_api_key_123");
  echo $paypal->processPayment(100);
  echo $paypal->getTransactionDetails("txn_paypal_789");

  $stripe = new Stripe("stripe_api_key_xyz");
  echo $stripe->processPayment(200);
  echo $stripe->getTransactionDetails("txn_stripe_abc");

  ?>
  ```

- **Interface**:

  - A contract that defines a set of methods that a class **must** implement. It specifies _what_ methods a class should have, but not _how_ they should be implemented.
  - Cannot contain properties (though can contain constants).
  - All methods in an interface are implicitly `public` and `abstract`.
  - A class can implement multiple interfaces using the `implements` keyword. This helps achieve a form of multiple inheritance.
  - Declared using the `interface` keyword.

  ```php
  <?php

  interface Logger { // Contract for logging
      public function log($message);
      public function error($message);
  }

  interface Notifier { // Contract for notification
      public function sendNotification($recipient, $message);
  }

  class FileLogger implements Logger { // Implements the Logger interface
      private $logFile;

      public function __construct($filePath) {
          $this->logFile = $filePath;
      }

      public function log($message) {
          file_put_contents($this->logFile, "LOG: " . $message . "\n", FILE_APPEND);
          echo "Logged to file: {$message}\n";
      }

      public function error($message) {
          file_put_contents($this->logFile, "ERROR: " . $message . "\n", FILE_APPEND);
          echo "Error logged to file: {$message}\n";
      }
  }

  class EmailNotifier implements Notifier { // Implements the Notifier interface
      public function sendNotification($recipient, $message) {
          // In a real app, this would send an email
          echo "Sending email to {$recipient}: {$message}\n";
      }
  }

  // A class can implement multiple interfaces
  class UserActionHandler implements Logger, Notifier {
      private $actionLogFile;

      public function __construct($logFilePath) {
          $this->actionLogFile = $logFilePath;
      }

      // Logger interface methods
      public function log($message) {
          file_put_contents($this->actionLogFile, "USER_ACTION_LOG: " . $message . "\n", FILE_APPEND);
          echo "User action logged: {$message}\n";
      }

      public function error($message) {
          file_put_contents($this->actionLogFile, "USER_ACTION_ERROR: " . $message . "\n", FILE_APPEND);
          echo "User action error logged: {$message}\n";
      }

      // Notifier interface methods
      public function sendNotification($recipient, $message) {
          echo "Sending user action notification to {$recipient}: {$message}\n";
      }

      public function performAction($user, $action) {
          $logMessage = "User '{$user}' performed action '{$action}'.";
          $this->log($logMessage);
          $this->sendNotification($user, "Your action '{$action}' was successful.");
      }
  }

  $fileLogger = new FileLogger("app.log");
  $fileLogger->log("Application started.");
  $fileLogger->error("A minor error occurred.");

  $emailNotifier = new EmailNotifier();
  $emailNotifier->sendNotification("admin@example.com", "System backup complete.");

  $userHandler = new UserActionHandler("user_actions.log");
  $userHandler->performAction("Alice", "update_profile");

  ?>
  ```

  **Difference between Abstract Classes and Interfaces**:

  - An abstract class can have implemented methods and properties; an interface can only have method signatures and constants.
  - A class can inherit from only one abstract class but can implement multiple interfaces.
  - Abstract classes are used for "is-a" relationships when there's shared code. Interfaces are used for "can-do" relationships, defining a capability.

---

### 6. Traits ✨

Traits are a mechanism for code reuse in single-inheritance languages like PHP. A Trait is similar to a class but is only intended to group functionality in a fine-grained and consistent way. It cannot be instantiated on its own. Traits are used to add blocks of methods to classes horizontally.

- **`trait` Keyword**: Used to define a trait.
- **`use` Keyword**: Used within a class to include a trait's methods.
- **Conflict Resolution**: If multiple traits used in a class have methods with the same name, PHP will raise a fatal error unless the conflict is explicitly resolved using `insteadof` or `as`.

  ```php
  <?php

  trait Sharable {
      public function share($item) {
          return "Sharing item: {$item}\n";
      }
  }

  trait Taggable {
      protected $tags = [];

      public function addTag($tag) {
          $this->tags[] = $tag;
          return "Tag '{$tag}' added.\n";
      }

      public function getTags() {
          return implode(', ', $this->tags);
      }
  }

  trait LoggerTrait { // Another trait, potentially with a conflicting method name
      public function log($message) {
          echo "Logging from LoggerTrait: {$message}\n";
      }
  }

  trait DetailedLoggerTrait {
      public function log($message) { // Same method name as LoggerTrait
          echo "Detailed logging: {$message}\n";
      }
  }


  class Post {
      use Sharable, Taggable; // Use multiple traits
      public $title;

      public function __construct($title) {
          $this->title = $title;
      }
  }

  class Comment {
      use Sharable; // Use a single trait
      public $text;

      public function __construct($text) {
          $this->text = $text;
      }
  }

  class Message {
      use LoggerTrait, DetailedLoggerTrait {
          DetailedLoggerTrait::log insteadof LoggerTrait; // Resolve conflict: use log() from DetailedLoggerTrait
          LoggerTrait::log as logSimple; // Alias LoggerTrait's log() to logSimple()
      }

      public function sendMessage($text) {
          $this->log("Attempting to send message: {$text}"); // This will call DetailedLoggerTrait::log
          $this->logSimple("Simple log for message: {$text}"); // This will call LoggerTrait::log
          echo "Message '{$text}' sent.\n";
      }
  }

  $myPost = new Post("My Awesome Blog Post");
  echo $myPost->share($myPost->title);
  echo $myPost->addTag("php");
  echo $myPost->addTag("oop");
  echo "Post Tags: " . $myPost->getTags() . "\n";

  $myComment = new Comment("Great post!");
  echo $myComment->share("this comment");
  // $myComment->addTag("feedback"); // Error: Comment class does not use Taggable trait

  $message = new Message();
  $message->sendMessage("Hello Trait Conflict Resolution!");

  ?>
  ```

---

### 7. Static Members (Properties and Methods) 🧍‍♂️

Static members belong to the **class itself**, not to a specific instance (object) of the class. They are accessed using the class name and the scope resolution operator (`::`).

- **`static` Keyword**: Used to declare static properties and methods.
- **`self::` Keyword**: Used to access static members from _within_ the class.
- **`static::` Keyword (Late Static Binding)**: In the context of inheritance, `self::` always refers to the class where it's defined. `static::` refers to the class that was initially called at runtime. This is particularly useful when a static method in a parent class needs to refer to static properties or methods in the child class that called it.

  ```php
  <?php

  class MathUtils {
      public static $pi = 3.14159; // Static property

      public static function add($a, $b) { // Static method
          return $a + $b;
      }

      public static function circleArea($radius) {
          // Accessing static property from within the class using self::
          return self::$pi * $radius * $radius;
      }
  }

  // Accessing static property and method without creating an object
  echo "Value of PI: " . MathUtils::$pi . "\n";
  echo "Sum of 5 and 3: " . MathUtils::add(5, 3) . "\n";
  echo "Area of circle with radius 2: " . MathUtils::circleArea(2) . "\n";

  // Late Static Binding example
  class ParentClass {
      protected static $name = "Parent";

      public static function getNameUsingSelf() {
          return self::$name; // Always refers to ParentClass::$name
      }

      public static function getNameUsingStatic() {
          return static::$name; // Refers to the class that is called at runtime
      }
  }

  class ChildClass extends ParentClass {
      protected static $name = "Child";
  }

  echo "Using self:: from Parent: " . ParentClass::getNameUsingSelf() . "\n"; // Output: Parent
  echo "Using static:: from Parent: " . ParentClass::getNameUsingStatic() . "\n"; // Output: Parent

  echo "Using self:: (called via Child): " . ChildClass::getNameUsingSelf() . "\n"; // Output: Parent (self refers to ParentClass)
  echo "Using static:: (called via Child): " . ChildClass::getNameUsingStatic() . "\n"; // Output: Child (static refers to ChildClass)

  // Example with a counter
  class Counter {
      private static $count = 0; // Static property to count instances

      public function __construct() {
          self::$count++; // Increment static counter on each object creation
      }

      public static function getCount() {
          return self::$count;
      }
  }

  $c1 = new Counter();
  $c2 = new Counter();
  $c3 = new Counter();

  echo "Number of Counter objects created: " . Counter::getCount() . "\n"; // Output: 3
  // echo $c1->getCount(); // Can also be called on an instance, but it's conceptually a class method

  ?>
  ```

  Static methods cannot access non-static properties (instance properties) using `$this` because `$this` refers to an object instance, and static methods are not tied to any specific instance.

---

### 8. Namespaces 📁

Namespaces are a way of encapsulating items (like classes, interfaces, functions, and constants) to avoid name collisions between code from different libraries or parts of a large application.

- **`namespace` Keyword**: Declares a namespace. It must be the first statement in a PHP file (after `declare` statements).
- **`use` Keyword**: Imports a namespace or specific classes/interfaces/functions from a namespace, allowing you to refer to them with shorter names (aliasing).

  ```php
  <?php
  // File: src/MyApp/Utils/Logger.php
  namespace MyApp\Utils; // Declare namespace

  class Logger {
      public function log($message) {
          echo "MyApp\Utils\Logger: " . $message . "\n";
      }
  }

  interface Formatter {
      public function format($text);
  }

  // File: src/AnotherLib/Logging/Logger.php
  namespace AnotherLib\Logging; // Declare a different namespace

  class Logger { // Same class name, but in a different namespace
      public function log($message) {
          echo "AnotherLib\Logging\Logger: " . $message . "\n";
      }
  }

  // File: index.php
  // require 'src/MyApp/Utils/Logger.php'; // Assume autoloading or direct requires
  // require 'src/AnotherLib/Logging/Logger.php';

  // Using fully qualified names
  // $myAppLogger = new \MyApp\Utils\Logger();
  // $myAppLogger->log("App event.");

  // $anotherLibLogger = new \AnotherLib\Logging\Logger();
  // $anotherLibLogger->log("Library event.");

  // Using the 'use' keyword
  use MyApp\Utils\Logger as AppLogger; // Import and alias MyApp's Logger
  use AnotherLib\Logging\Logger as LibLogger; // Import and alias AnotherLib's Logger
  use MyApp\Utils\Formatter; // Import an interface

  // $appLogger = new AppLogger();
  // $appLogger->log("App event with 'use'.");

  // $libLogger = new LibLogger();
  // $libLogger->log("Library event with 'use'.");

  class MyCustomFormatter implements Formatter { // Implement imported interface
      public function format($text) {
          return strtoupper($text);
      }
  }

  // $formatter = new MyCustomFormatter();
  // echo $formatter->format("hello world") . "\n";

  // To run this example, you would typically set up an autoloader.
  // For simplicity, imagine these files are included or autoloaded.
  // Example (very basic autoloader for this structure):
  spl_autoload_register(function ($className) {
      $file = __DIR__ . '/src/' . str_replace('\\', '/', $className) . '.php';
      // A better autoloader would strip the leading part of the namespace
      // if it's mapped to a base directory.
      // For this example, let's assume 'src' is the base for both MyApp and AnotherLib.
      // This is a simplified autoloader. PSR-4 autoloaders are standard.

      // This is a mock path for demonstration since the files are not actually in subdirs here.
      // In a real project, these files (Logger.php etc.) would be in the specified directory structure.
      // For now, let's assume the classes are defined above for this script to be self-contained.
  });


  // Re-defining classes for this self-contained example (remove if using actual separate files)
  if (!class_exists('MyApp\Utils\Logger', false)) {
      // Content of src/MyApp/Utils/Logger.php (already shown above)
  }
  if (!class_exists('AnotherLib\Logging\Logger', false)) {
      // Content of src/AnotherLib/Logging/Logger.php (already shown above)
  }


  // Actual usage in index.php (assuming classes are now "available")
  $myAppLogger = new AppLogger(); // Uses the alias AppLogger for MyApp\Utils\Logger
  $myAppLogger->log("App event with 'use' and alias.");

  $libLogger = new LibLogger();   // Uses the alias LibLogger for AnotherLib\Logging\Logger
  $libLogger->log("Library event with 'use' and alias.");

  class MyBetterFormatter implements Formatter { // Implement MyApp\Utils\Formatter
      public function format($text) {
          return "**" . strtoupper($text) . "**";
      }
  }

  $formatter = new MyBetterFormatter();
  echo $formatter->format("test formatting") . "\n"; // Output: **TEST FORMATTING**

  ?>
  ```

---

### 9. Autoloading Classes 🚗💨

Instead of manually including every class file using `require` or `include`, PHP allows you to define an autoloader function. This function is automatically called when your code tries to use a class that hasn't been defined yet.

- **`spl_autoload_register()`**: Registers a function (or multiple functions) with the PHP autoload queue.
- **PSR-4**: A common standard for autoloading classes from file paths based on their namespaces. Composer (PHP's dependency manager) heavily relies on PSR-4 for autoloading.

  ```php
  <?php
  // File: src/MyLibrary/MyClass.php (Illustrative - not created in this single file example)
  // namespace MyLibrary;
  // class MyClass {
  //     public function __construct() {
  //         echo "MyLibrary\MyClass instantiated!\n";
  //     }
  // }

  // File: src/AnotherLibrary/Utility.php (Illustrative)
  // namespace AnotherLibrary;
  // class Utility {
  //     public static function doSomething() {
  //         echo "AnotherLibrary\Utility::doSomething() called!\n";
  //     }
  // }

  // Autoloader function (PSR-4 inspired, simplified)
  spl_autoload_register(function ($className) {
      // $className will be like "MyLibrary\MyClass" or "AnotherLibrary\Utility"

      echo "Autoloader trying to load: {$className}\n";

      // Replace namespace separator with directory separator
      $filePath = str_replace('\\', '/', $className) . '.php';

      // Prepend a base directory (e.g., 'src/')
      // In a real app, you might have multiple rules or base directories
      $fullPath = __DIR__ . '/src/' . $filePath; // Assuming 'src' is in the same directory as this script

      // For this self-contained example, we'll simulate the files are found
      // by defining them here if they match the expected names.
      // In a real project, this 'if (file_exists($fullPath))' would be crucial.

      if ($className === 'MyLibrary\MyClass') {
          // Simulate loading MyLibrary/MyClass.php
          if (!class_exists('MyLibrary\MyClass', false)) { // 'false' to not trigger autoload again
              // Define the class as if it were in its own file
              namespace MyLibrary; // Must be at the top of its "file"
              class MyClass {
                  public function __construct() {
                      echo "MyLibrary\MyClass instantiated via autoloader!\n";
                  }
              }
          }
          return; // Exit autoloader function
      }

      if ($className === 'AnotherLibrary\Utility') {
          // Simulate loading AnotherLibrary/Utility.php
          if (!class_exists('AnotherLibrary\Utility', false)) {
              namespace AnotherLibrary;
              class Utility {
                  public static function doSomething() {
                      echo "AnotherLibrary\Utility::doSomething() called via autoloader!\n";
                  }
              }
          }
          return; // Exit autoloader function
      }

      // echo "File not found by autoloader: {$fullPath}\n"; // Uncomment for real file checks
  });

  // Now, try to use classes without explicitly including their files
  // The autoloader should handle it.

  // Need to ensure the namespace context is correct for instantiating
  // If this file (index.php) itself is not namespaced, direct class names with namespaces work.

  $obj = new MyLibrary\MyClass(); // Autoloader will be triggered for MyLibrary\MyClass
  AnotherLibrary\Utility::doSomething(); // Autoloader will be triggered for AnotherLibrary\Utility

  // If you had 'use MyLibrary\MyClass;' at the top (after namespace declaration if any),
  // you could then do: '$obj = new MyClass();'

  ?>
  ```

  **Using Composer**: For larger projects, Composer is the standard way to manage dependencies and handle autoloading. You define your autoloading rules (e.g., PSR-4 mapping your namespaces to directories) in a `composer.json` file, and Composer generates an optimized autoloader file (`vendor/autoload.php`) that you include in your project.

---

### 10. Magic Methods 🪄

PHP provides a number of special method names that are triggered automatically by certain actions or events when performed on objects. These method names are prefixed with a double underscore (`__`).

- `__construct()`: Called when an object is created.
- `__destruct()`: Called when an object is destroyed.
- `__call($name, $arguments)`: Triggered when invoking inaccessible methods in an object context.
- `__callStatic($name, $arguments)`: Triggered when invoking inaccessible methods in a static context.
- `__get($name)`: Utilized for reading data from inaccessible (protected or private) or non-existing properties.
- `__set($name, $value)`: Run when writing data to inaccessible (protected or private) or non-existing properties.
- `__isset($name)`: Triggered by calling `isset()` or `empty()` on inaccessible or non-existing properties.
- `__unset($name)`: Invoked when `unset()` is used on inaccessible or non-existing properties.
- `__sleep()`: Called before `serialize()` and should return an array of property names to be serialized.
- `__wakeup()`: Called after `unserialize()` to reconstruct any resources.
- `__toString()`: Allows a class to decide how it should react when an object is treated as a string (e.g., `echo $obj;`).
- `__invoke()`: Called when a script tries to call an object as a function.
- `__set_state($array)`: Called for `var_export()` when exporting an object.
- `__clone()`: Called when an object is cloned using the `clone` keyword. Useful for deep copying properties that are objects themselves.
- `__debugInfo()`: Called by `var_dump()` when dumping an object to get the properties that should be shown. (PHP 5.6+)

  ```php
  <?php

  class MagicDemo {
      private $data = [];
      public $name;

      public function __construct($name = "Demo Object") {
          $this->name = $name;
          echo "__construct: Object '{$this->name}' created.\n";
      }

      public function __destruct() {
          echo "__destruct: Object '{$this->name}' being destroyed.\n";
      }

      public function __call($methodName, $arguments) {
          echo "__call: Attempted to call inaccessible method '{$methodName}' with arguments: " . implode(', ', $arguments) . "\n";
          return null; // Or some other default behavior
      }

      public static function __callStatic($methodName, $arguments) {
          echo "__callStatic: Attempted to call inaccessible static method '{$methodName}' with arguments: " . implode(', ', $arguments) . "\n";
      }

      public function __get($propertyName) {
          echo "__get: Attempting to get property '{$propertyName}'.\n";
          return isset($this->data[$propertyName]) ? $this->data[$propertyName] : null;
      }

      public function __set($propertyName, $value) {
          echo "__set: Setting property '{$propertyName}' to '{$value}'.\n";
          $this->data[$propertyName] = $value;
      }

      public function __isset($propertyName) {
          echo "__isset: Checking if property '{$propertyName}' is set.\n";
          return isset($this->data[$propertyName]);
      }

      public function __unset($propertyName) {
          echo "__unset: Unsetting property '{$propertyName}'.\n";
          unset($this->data[$propertyName]);
      }

      public function __toString() {
          echo "__toString: Object is being treated as a string.\n";
          return "This is a MagicDemo object named '{$this->name}' with data: " . json_encode($this->data);
      }

      public function __invoke($x) {
          echo "__invoke: Object called as a function with argument '{$x}'.\n";
          return "Invoked with {$x}";
      }

      public function __clone() {
          echo "__clone: Object '{$this->name}' is being cloned.\n";
          // If $this->data contained objects, you might want to deep clone them here.
      }

      public function __debugInfo() {
          echo "__debugInfo: var_dump() called.\n";
          return [
              'name' => $this->name,
              'custom_data' => $this->data,
              'info' => 'This is custom debug info!'
          ];
      }
  }

  $obj = new MagicDemo("MyMagic");

  // __set and __get
  $obj->secretValue = 42;       // Calls __set('secretValue', 42)
  echo $obj->secretValue . "\n"; // Calls __get('secretValue')
  echo $obj->nonExistentProperty . "\n"; // Calls __get('nonExistentProperty')

  // __isset and __unset
  var_dump(isset($obj->secretValue)); // Calls __isset('secretValue')
  unset($obj->secretValue);           // Calls __unset('secretValue')
  var_dump(isset($obj->secretValue));

  // __call
  $obj->doSomething("param1", "param2"); // Calls __call('doSomething', ['param1', 'param2'])

  // __callStatic
  MagicDemo::doStaticThing("static_param"); // Calls __callStatic('doStaticThing', ['static_param'])

  // __toString
  echo $obj . "\n"; // Calls __toString()

  // __invoke
  echo $obj("test_invoke") . "\n"; // Calls __invoke('test_invoke')

  // __clone
  $obj2 = clone $obj;
  $obj2->name = "ClonedMagic";
  echo "Original object name: " . $obj->name . "\n";
  echo "Cloned object name: " . $obj2->name . "\n";

  // __debugInfo (PHP 5.6+)
  var_dump($obj);

  // __destruct will be called when the script ends or $obj, $obj2 are unset.
  // unset($obj);
  // unset($obj2);

  ?>
  ```

---

### 11. Object Comparison 🆚

- **Comparison Operator (`==`)**: Two object instances are considered equal if they are instances of the same class and have the same properties with the same values. This is a shallow comparison of property values.
- **Identity Operator (`===`)**: Two object instances are identical if and only if they refer to the _exact same instance_ of the same class.

  ```php
  <?php

  class Point {
      public $x;
      public $y;

      public function __construct($x, $y) {
          $this->x = $x;
          $this->y = $y;
      }
  }

  $p1 = new Point(10, 20);
  $p2 = new Point(10, 20);
  $p3 = $p1; // $p3 now refers to the same object as $p1
  $p4 = new Point(5, 15);

  var_dump($p1 == $p2);  // bool(true) - Same class, same property values
  var_dump($p1 === $p2); // bool(false) - Different instances

  var_dump($p1 == $p3);  // bool(true)
  var_dump($p1 === $p3); // bool(true) - Same instance

  var_dump($p1 == $p4);  // bool(false) - Different property values

  ?>
  ```

---

### 12. Object Cloning 🐑

You can create a copy of an object using the `clone` keyword. By default, PHP performs a shallow copy, meaning that if an object property is itself an object, the new (cloned) object's property will point to the _same instance_ of that inner object.

- **`__clone()` Magic Method**: If you need to perform a deep copy (i.e., also clone any inner objects), you can define the `__clone()` magic method in your class. This method is called on the newly created clone _after_ the initial shallow copy.

  ```php
  <?php

  class Profile {
      public $name;
      public function __construct($name) {
          $this->name = $name;
      }
  }

  class User {
      public $id;
      public Profile $profile; // Type hinting the Profile object

      public function __construct($id, Profile $profile) {
          $this->id = $id;
          $this->profile = $profile;
      }

      // To ensure a deep copy when cloning a User object
      public function __clone() {
          echo "User object cloned. Performing deep copy of profile.\n";
          // $this->profile is the profile of the NEWLY cloned User object.
          // We need to clone the original User's profile object and assign it here.
          $this->profile = clone $this->profile;
      }
  }

  $originalProfile = new Profile("Alice");
  $user1 = new User(1, $originalProfile);

  $user2 = clone $user1; // Clones the User object. __clone() will be called.

  // Modify the cloned user's profile name
  $user2->id = 2;
  $user2->profile->name = "Alice Clone";

  echo "User 1 ID: " . $user1->id . ", Profile Name: " . $user1->profile->name . "\n";
  // Output without __clone(): User 1 ID: 1, Profile Name: Alice Clone (because it was a shallow copy)
  // Output with __clone(): User 1 ID: 1, Profile Name: Alice (because profile was also cloned - deep copy)

  echo "User 2 ID: " . $user2->id . ", Profile Name: " . $user2->profile->name . "\n";
  // Output: User 2 ID: 2, Profile Name: Alice Clone

  var_dump($user1->profile === $user2->profile); // bool(false) if __clone() is implemented for deep copy
                                              // bool(true) if __clone() is NOT implemented (shallow copy)
  ?>
  ```

---

### 13. Type Hinting / Type Declarations 📝

PHP allows you to specify the expected data type for function arguments, return values, and class properties (PHP 7.4+). This helps in writing more robust and self-documenting code. If a value of an incorrect type is provided, PHP will throw a `TypeError` (unless strict types are not declared and coercion is possible).

- **Parameter Type Declarations**: `function myFunction(MyClass $obj, array $arr, string $name) {}`
- **Return Type Declarations**: `function getValue(): int {}`
- **Property Type Declarations (PHP 7.4+)**: `public string $name; public ?User $user;` (nullable type)
- **Union Types (PHP 8.0+)**: `public int|float $number;` `function process(int|string $input): bool|string {}`
- **`mixed` Type (PHP 8.0+)**: Represents any value.
- **`void` Return Type (PHP 7.1+)**: Indicates a function does not return a value.
- **`object` Type**: Can be any object.
- **`iterable` Type**: Can be an array or an object implementing `Traversable`.
- **`self` and `parent`**: Can be used as type hints in class context.

  ```php
  <?php
  // declare(strict_types=1); // Optional: Enforce strict type checking

  class Product {
      public string $name; // Property type declaration (PHP 7.4+)
      public float $price;
      public ?string $description = null; // Nullable string property

      public function __construct(string $name, float $price) {
          $this->name = $name;
          $this->price = $price;
      }

      public function getDisplayName(): string { // Return type declaration
          return "Product: " . $this->name;
      }
  }

  class Order {
      // Union type for property (PHP 8.0+)
      public int|string $orderId;
      private array $products = [];

      public function __construct(int|string $id) {
          $this->orderId = $id;
      }

      // Parameter type declaration for an object and an array
      public function addProduct(Product $product, int $quantity = 1): void { // void return type
          $this->products[] = ['product' => $product, 'quantity' => $quantity];
          echo "Added {$quantity} of {$product->name} to order {$this->orderId}.\n";
      }

      public function getTotalPrice(): float {
          $total = 0.0;
          foreach ($this->products as $item) {
              $total += $item['product']->price * $item['quantity'];
          }
          return $total;
      }

      public function getProducts(): iterable { // iterable return type
          return $this->products;
      }
  }

  $product1 = new Product("Laptop", 1200.50);
  $product1->description = "High-end gaming laptop";
  $product2 = new Product("Mouse", 25.99);

  echo $product1->getDisplayName() . "\n"; // Output: Product: Laptop

  $order = new Order("ORD-2024-001"); // String orderId
  $order->addProduct($product1, 1);
  $order->addProduct($product2, 2);

  $order2 = new Order(10502); // Integer orderId
  $order2->addProduct($product1);

  echo "Total for order {$order->orderId}: $" . $order->getTotalPrice() . "\n";

  // function processItem(mixed $item): void { // mixed type (PHP 8.0+)
  //     var_dump($item);
  // }
  // processItem($product1);
  // processItem("a string");
  // processItem(123);

  ?>
  ```
