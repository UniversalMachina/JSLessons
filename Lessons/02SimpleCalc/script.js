function performCalculation() {
    const num1 = document.getElementById('number1').value;
    const num2 = document.getElementById('number2').value;
    const sum = Number(num1) + Number(num2);
    document.getElementById('result').textContent = sum;
}