import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import Button from "./Button";
import Question from "./Question";

const API_URL =
  "https://opentdb.com/api.php?amount=5&category=12&difficulty=easy&type=multiple";

const generateShuffledAnswers = (incorrectAnswers, correctAnswer) => {
  const randomIndex = Math.floor(Math.random() * (incorrectAnswers.length + 1));
  const shuffledAnswers = [...incorrectAnswers];
  shuffledAnswers.splice(randomIndex, 0, correctAnswer);
  return shuffledAnswers;
};

export default function Game() {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [isGameWon, setIsGameWon] = useState(false);
  const [canRevealAnswers, setCanRevealAnswers] = useState(false);
  const [questionsData, setQuestionsData] = useState([]);
  const [areAnswersRevealed, setAreAnswersRevealed] = useState(false);
  const [score, setScore] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const fetchQuestions = async () => {
    setIsFetching(true);
    try {
      const response = await fetch(API_URL);
      const responseData = await response.json();
      return responseData.results;
    } catch (error) {
    } finally {
      setIsFetching(false);
    }
  };

  const selectAnswer = (currentQuestion, selectedAnswer) => {
    setQuestionsData((prevState) =>
      prevState.map((answer) =>
        answer.question === currentQuestion
          ? { ...answer, selectedAnswer }
          : answer
      )
    );
  };

  const restartCurrentGame = () => {
    setIsGameWon(false);
    setCanRevealAnswers(false);
    setAreAnswersRevealed(false);
    setQuizQuestions((prevState) => [...prevState]);
  };

  const startNewGame = async () => {
    const newQuestions = await fetchQuestions();
    setQuizQuestions(newQuestions);
    setIsGameWon(false);
    setCanRevealAnswers(false);
    setAreAnswersRevealed(false);
  };

  const revealAnswers = () => setAreAnswersRevealed(true);

  useEffect(() => {
    (async () => {
      const question = await fetchQuestions();
      setQuizQuestions(question);
    })();
  }, []);

  useEffect(() => {
    setQuestionsData(
      quizQuestions.map((quizQuestion) => ({
        question: quizQuestion.question,
        selectedAnswer: null,
        correctAnswer: quizQuestion.correct_answer,
        allChoices: generateShuffledAnswers(
          quizQuestion.incorrect_answers,
          quizQuestion.correct_answer
        ),
      }))
    );
  }, [quizQuestions]);

  useEffect(() => {
    const isAllQuestionsAnswered =
      questionsData.length > 0 &&
      questionsData.every((question) => question.selectedAnswer);
    if (isAllQuestionsAnswered) setCanRevealAnswers(true);
  }, [questionsData]);

  useEffect(() => {
    if (areAnswersRevealed) {
      const score = questionsData.reduce((totalScore, currentQuestion) => {
        if (currentQuestion.selectedAnswer === currentQuestion.correctAnswer)
          return totalScore + 1;
        return totalScore;
      }, 0);
      setScore(score);
      if (score === questionsData.length) setIsGameWon(true);
    }
  }, [areAnswersRevealed]);

  return (
    <section className="flex flex-col w-3/5 mx-auto mt-6 max-w-[1200px]">
      {isFetching ? (
        <h3 className="text-2xl font-semibold">Getting questions...</h3>
      ) : (
        <>
          {isGameWon && (
            <Confetti recycle={false} width={1200} className="mx-auto" />
          )}

          {questionsData.map((questionInfo, index) => {
            const { question, allChoices, selectedAnswer, correctAnswer } =
              questionInfo;
            return (
              <div
                className="px-2 py-5 border-b hover:bg-slate-100 border-slate-300 last:border-none"
                key={index}
              >
                <Question
                  title={question}
                  answers={allChoices}
                  selectAnswer={selectAnswer}
                  selectedAnswer={selectedAnswer}
                  isAnswersRevealed={areAnswersRevealed}
                  correctAnswer={correctAnswer}
                />
              </div>
            );
          })}

          {!areAnswersRevealed ? (
            <Button
              className="mx-auto disabled:bg-[#a6a7b5] my-6"
              disabled={!canRevealAnswers}
              onClick={revealAnswers}
            >
              Check answers
            </Button>
          ) : (
            <div className="flex justify-between items-center my-6">
              <Button className="w-fit" onClick={restartCurrentGame}>
                Restart current game
              </Button>
              <h2 className="text-xl font-semibold">
                You scored {score}/{questionsData.length} correct answers
              </h2>
              <Button
                className="w-fit"
                onClick={startNewGame}
                disabled={isFetching}
              >
                Play a new game
              </Button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
