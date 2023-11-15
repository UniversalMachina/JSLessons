// Example 1: Simple Function
function traditionalAdd(a, b) {
    return a + b;
}
const arrowAdd = (a, b) => a + b;
console.log('Simple Function:', traditionalAdd(3, 4), arrowAdd(3, 4));

// Example 2: Single Parameter
function traditionalSquare(n) {
    return n * n;
}
const arrowSquare = n => n * n;
console.log('Single Parameter:', traditionalSquare(5), arrowSquare(5));

// Example 3: No Parameters
function traditionalGreet() {
    return 'Hello World!';
}
const arrowGreet = () => 'Hello World!';
console.log('No Parameters:', traditionalGreet(), arrowGreet());

// Example 4: Multiple Statements
function traditionalComplexOperation(a, b) {
    const result = a + b;
    return result * 2;
}
const arrowComplexOperation = (a, b) => {
    const result = a + b;
    return result * 2;
};
console.log('Multiple Statements:', traditionalComplexOperation(2, 3), arrowComplexOperation(2, 3));

// Example 5: Returning Object Literals
function traditionalCreatePerson(name, age) {
    return {
        name: name,
        age: age
    };
}
const arrowCreatePerson = (name, age) => ({ name, age });
console.log('Returning Object Literals:', traditionalCreatePerson('Alice', 30), arrowCreatePerson('Bob', 25));

// Example 6: As an Argument to Array Methods
const numbers = [1, 2, 3, 4];
const traditionalSquares = numbers.map(function(number) {
    return number * number;
});
const arrowSquares = numbers.map(number => number * number);
console.log('Array Methods:', traditionalSquares, arrowSquares);



