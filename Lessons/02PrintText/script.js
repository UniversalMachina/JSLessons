document.addEventListener('DOMContentLoaded', () => {
    let text = "";
    document.getElementById('submit').addEventListener('click', function() {
        text= document.getElementById("input").value
        document.getElementById("output").textContent = text;


    });


});