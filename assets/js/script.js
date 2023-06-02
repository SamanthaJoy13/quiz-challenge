function startQuiz() {
const timerEl = document.getElementById('timer');
  const questionCon = document.getElementById('questionsContainer');
  const questionEl = document.getElementById('question');
  const answersCon = document.getElementById('answers');


  const startButton = document.getElementById('start');
  startButton.addEventListener('click', () => {
    let currentQuestionIndex = 0;
    let time = 75;
    let timerInterval;

    startTimer();

    function startTimer() {
      timerInterval = setInterval(updateTimer, 1000);
    }

    function updateTimer() {
      time--;
      timerContainer.textContent = `Time: ${time}`;

      if (time <= 0) {
        // Time's up, end the game
        endGame();
      }
    }

    const quizQuestions = [
        {
            question: 'Commonly used data types DO NOT include:',
            answers: ['strings', 'booleans', 'alerts', 'numbers'],
            correctAnswer: 'alerts'
        },
        {
            



      // Clear previous answer buttons
      answersContainer.innerHTML = '';

      // Create answer buttons for each possible answer
      for (let i = 0; i < currentQuestion.answers.length; i++) {
        const answer = currentQuestion.answers[i];

        const answerButton = document.createElement('button');
        answerButton.textContent = answer;
        answerButton.addEventListener('click', () => {
          // Handle answer selection
          handleAnswer(answer);
        });

        answersContainer.appendChild(answerButton);
      }
    }

    function handleAnswer(selectedAnswer) {
      const currentQuestion = quizQuestions[currentQuestionIndex];

      // Compare selected answer with the correct answer
      if (selectedAnswer === currentQuestion.correctAnswer) {
        // Answer is correct
        // ...
      } else {
        // Answer is incorrect, subtract 15 seconds
        time -= 10;

        // Check if the timer goes below 0
        if (time <= 0) {
          // Time's up, end the game
          endGame();
          return;
        }
      }

      // Move to the next question
      currentQuestionIndex++;
      if (currentQuestionIndex < quizQuestions.length) {
        displayQuestion();
      } else {
        // End the game when all questions are answered
        endGame();
      }
    }

    function endGame() {
      clearInterval(timerInterval);

      // Hide question container
      questionContainer.style.display = 'none';

      // Show the form to save initials and score
      // ...
    }

    // Display the first question
    displayQuestion();
  });
}

document.addEventListener('DOMContentLoaded', startQuiz);
