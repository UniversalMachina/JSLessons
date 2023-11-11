// const prompt = require('prompt-sync')();

// for (let i = 0; i < 10; i++){
//     let password = prompt("Enter your password");
//     if (password.includes("!") && password.length > 8){
//         console.log("password contains an alphanumeric and is longer than 8");
//         break;
//     }
//     else{
//         console.log("invalid password");
        
//     }


// }

const prompt = require('prompt-sync')();

function isValidPassword(password) {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return password.length >= 8 && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
}

for (let i = 0; i < 10; i++) {
    let password = prompt("Enter your password: ");

    if (isValidPassword(password)) {
        console.log("Valid password. Good job!");
        break;
    } else {
        console.log("Invalid password. Please try again.");
        // List the criteria that are not met (optional, for better user guidance)
    }
}
