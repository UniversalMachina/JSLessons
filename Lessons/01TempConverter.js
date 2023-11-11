// Remember the Formulas:

// To convert Celsius to Fahrenheit: (Celsius * 9/5) + 32
// To convert Fahrenheit to Celsius: (Fahrenheit - 32) * 5/9

function CelsiustoFarenheit(x){
    let answer = (x * 9/5) + 32
    return answer;
}
function FahrenheittoCelsius(x){
    let answer = (x - 32) * 5/9;
    return answer;
}
console.log(CelsiustoFarenheit(5));
console.log(FahrenheittoCelsius(5));