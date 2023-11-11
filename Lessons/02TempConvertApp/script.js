document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('convert').addEventListener('click', performCalculation);
});

function performCalculation() {
    const number = document.getElementById("number").value;
    const sum = (Number(number) - 32) * 5/9
    document.getElementById("answer").textContent = sum;
}


