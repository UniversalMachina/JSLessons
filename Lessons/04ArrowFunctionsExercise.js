// Function 1: A Simple Addition Function
function add(a, b) {
    return a + b;
}

// Function 2: A Function Returning a String
function sayHello(name) {
    return "Hello, " + name + "!";
}

// Function 3: A Function with Multiple Statements
function calculateArea(width, height) {
    const area = width * height;
    return area;
}

// Function 4: A Function Using `this` (Tricky!)
const person = {
    name: 'Alice',
    getName: function() {
        return this.name;
    }
};

// Function 5: A Function with No Parameters
function getRandomNumber() {
    return Math.random();
}

// Placeholders for console.log to test the original functions
console.log('Function 1 (Addition):', add(3, 5));
console.log('Function 2 (Say Hello):', sayHello('John'));
console.log('Function 3 (Calculate Area):', calculateArea(4, 5));
console.log('Function 4 (Get Name):', person.getName());
console.log('Function 5 (Random Number):', getRandomNumber());
