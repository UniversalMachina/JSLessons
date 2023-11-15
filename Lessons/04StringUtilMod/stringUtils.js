function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function greet(name) {
    return `Hello, ${capitalize(name)}!`;
}

// Your task: Export 'capitalize' and 'greet'
