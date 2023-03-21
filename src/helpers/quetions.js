export const generateShuffledAnswers = (incorrectAnswers, correctAnswer) => {
  const randomIndex = Math.floor(Math.random() * (incorrectAnswers.length + 1));
  const shuffledAnswers = [...incorrectAnswers];
  shuffledAnswers.splice(randomIndex, 0, correctAnswer);
  return shuffledAnswers;
};

export const generateQuestionData = (rawQuestions) =>
  rawQuestions.map((quizQuestion) => ({
    question: quizQuestion.question,
    selectedAnswer: null,
    correctAnswer: quizQuestion.correct_answer,
    allChoices: generateShuffledAnswers(
      quizQuestion.incorrect_answers,
      quizQuestion.correct_answer
    ),
  }));
