function startQuiz() {
    const timerEl = document.getElementById('timerCon');
    const questionEl = document.getElementById('question');
    const answersContainer = document.getElementById('answers');
  
    const startButton = document.querySelector('.start');
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
        timerEl.textContent = `Time: ${time}`;
  
        if (time <= 0) {
          // Time's up, end the game
          endGame();
        }
      }
  
      const quizQuestions = [
        {
          question: 'Commonly used data types DO NOT include:',
          answers: ['1. Strings', '2. Booleans', '3. Alerts', '4. Numbers'],
          correctAnswer: '3. Alerts'
        },
        {
          question: 'String values must be enclosed within ______ when being assigned to variables.',
          answers: ['1. Commas', '2. Curly brackets', '3. Quotes', '4. Parentheses'],
          correctAnswer: '3. Quotes'
        },
        {
          question: 'The else/if statement is enclosed with the following:',
          answers: ['1. Quotes', '2. Curly brackets', '3. Parentheses', '4. Square brackets'],
          correctAnswer: '2. Curly brackets'
        },
      ];
  
      function displayQuestion() {
        const currentQuestion = quizQuestions[currentQuestionIndex];
        questionEl.textContent = currentQuestion.question;
  
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
          // Answer is incorrect, subtract 10 seconds
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
        document.getElementById('questionsContainer').style.display = 'none';
  
        // Show the form to save initials and score
        // ...
      }
  
      // Display the first question
      displayQuestion();
    });
  }
  
  document.addEventListener('DOMContentLoaded', startQuiz);
  