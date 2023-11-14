document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('start').addEventListener('click', count);
    let timepassed = 0;
    const timerElement = document.getElementById('timer');

    function count() {

        const timerId = setInterval(() => {
            let text = document.getElementById("WPM").value;
            if (text=="Write this sentence") {
                clearInterval(timerId);
                YourWPM(timepassed);
            } else {
                timepassed++;
                timerElement.textContent = `${timepassed} seconds`;
                
            }
        }, 1000);
    }
    
    function YourWPM(time){
        document.getElementById("WPMdisplay").textContent = time/4;
    }
    

});


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('start').addEventListener('click', count);


});

function count() {
    let timeLeft = 0;
    const timerElement = document.getElementById('timer');
    const timerId = setInterval(() => {
        let text = document.getElementById("WPM").value;
        if (text=="Write this sentence") {
            clearInterval(timerId);
            YourWPM(timeLeft);
        } else {
            timerElement.textContent = `${timeLeft} seconds`;
            timeLeft++;
        }
    }, 1000);
}

function YourWPM(time){
    document.getElementById("WPMdisplay").textContent = time/4;
}