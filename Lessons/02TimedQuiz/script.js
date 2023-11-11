document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        { question: "What is 1+1?", answers: [1, 2], correct: 2 },
        { question: "What is 2+2?", answers: [3, 4], correct: 4 }
        // Add more questions as needed
    ];
    
    let currentQuestionIndex = 0;
    let score = 0;

    function displayQuestion() {
        const questionElement = document.getElementById('question');
        questionElement.textContent = questions[currentQuestionIndex].question;
        
        document.getElementById('button1').textContent = questions[currentQuestionIndex].answers[0];
        document.getElementById('button2').textContent = questions[currentQuestionIndex].answers[1];
    }

    function checkAnswer(selectedAnswer) {
        const correctAnswer = questions[currentQuestionIndex].correct;
        if (selectedAnswer === correctAnswer) {
            console.log("Correct answer");
            score++;
            alert("Correct!"); // Immediate feedback
        } else {
            console.log("Wrong answer");
            alert("Wrong!"); // Immediate feedback
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            endQuiz();
        }
    }

    function startTimer() {
        let timeLeft = 30;
        const timerElement = document.getElementById('timer');
        const timerId = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(timerId);
                endQuiz();
            } else {
                timerElement.textContent = `${timeLeft} seconds remaining`;
                timeLeft--;
            }
        }, 1000);
    }

    function endQuiz() {
        clearInterval(timerId);
        console.log("Quiz ended");
        alert(`Quiz finished! Your score: ${score}/${questions.length}`);
    }

    displayQuestion();
    startTimer();

    document.getElementById('button1').addEventListener('click', () => checkAnswer(questions[currentQuestionIndex].answers[0]));
    document.getElementById('button2').addEventListener('click', () => checkAnswer(questions[currentQuestionIndex].answers[1]));
});
