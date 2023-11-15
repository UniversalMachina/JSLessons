class User {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return `Hello, my name is ${this.name}`;
    }
}

const user = new User('Alice');
console.log(user.greet()); // Output: Hello, my name is Alice


class Calculator {
    static add(a, b) {
        return a + b;
    }

    static subtract(a, b) {
        return a - b;
    }

    static multiply(a, b) {
        return a * b;
    }

    static divide(a, b) {
        return a / b;
    }
}

console.log(Calculator.add(5, 3));        // Output: 8
console.log(Calculator.subtract(5, 3));   // Output: 2
console.log(Calculator.multiply(5, 3));   // Output: 15
console.log(Calculator.divide(5, 3));     // Output: 1.6666666666666667


class Animal {
    speak() {
        return 'Some generic sound';
    }
}

class Dog extends Animal {
    speak() {
        return 'Woof!';
    }
}

const myDog = new Dog();
console.log(myDog.speak()); // Output: Woof!
