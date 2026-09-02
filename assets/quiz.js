/**
 * quiz.js — Reusable quiz widget for lessons.
 *
 * Usage:
 *   <div class="quiz" data-quiz="unique-id">
 *     <p class="quiz-question">Your question here?</p>
 *     <ul class="quiz-options">
 *       <li class="quiz-option" data-correct="true">Correct answer</li>
 *       <li class="quiz-option">Wrong answer A</li>
 *       <li class="quiz-option">Wrong answer B</li>
 *       <li class="quiz-option">Wrong answer C</li>
 *     </ul>
 *     <div class="quiz-feedback correct-feedback">Explanation for correct.</div>
 *     <div class="quiz-feedback incorrect-feedback">Explanation for incorrect.</div>
 *   </div>
 */

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.quiz').forEach(quiz => {
    const options = quiz.querySelectorAll('.quiz-option');
    const correctFeedback = quiz.querySelector('.correct-feedback');
    const incorrectFeedback = quiz.querySelector('.incorrect-feedback');
    let answered = false;

    options.forEach(option => {
      // Prepend radio indicator
      const radio = document.createElement('span');
      radio.className = 'quiz-radio';
      option.prepend(radio);

      option.addEventListener('click', () => {
        if (answered) return;
        answered = true;

        const isCorrect = option.dataset.correct === 'true';

        // Disable all options
        options.forEach(o => o.classList.add('disabled'));

        // Highlight selected
        option.classList.add(isCorrect ? 'correct' : 'incorrect');

        // Also highlight the correct answer if user picked wrong
        if (!isCorrect) {
          options.forEach(o => {
            if (o.dataset.correct === 'true') o.classList.add('correct');
          });
        }

        // Show feedback
        if (isCorrect && correctFeedback) {
          correctFeedback.classList.add('visible');
        } else if (!isCorrect && incorrectFeedback) {
          incorrectFeedback.classList.add('visible');
        }
      });
    });
  });
});
