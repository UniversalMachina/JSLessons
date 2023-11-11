document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('counter').addEventListener('click', count);
});

function count() {
    const text = document.getElementById("word-input").value;
    const words = text.split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    document.getElementById("Count").textContent = wordCount;
}


