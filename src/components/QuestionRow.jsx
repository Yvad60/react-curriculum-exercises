import { decode } from "html-entities";

const QuestionRow = ({ title, answers, selectedAnswer, selectAnswer, areAnswersRevealed, correctAnswer }) => {
  const setButtonBackground = (currentAnswer) => {
    if (areAnswersRevealed) {
      if (currentAnswer === correctAnswer) return "bg-[#94D7A2]";
      if (currentAnswer === selectedAnswer) return "bg-[#F8BCBC]";
    }
    if (currentAnswer === selectedAnswer) return "bg-[#D6DBF5]";
  };

  return (
    <div className="text-[#293264]">
      <h1 className="text-xl font-semibold">{decode(title)}</h1>
      <div className="flex gap-10 mt-3 text-lg">
        {answers.map((answer, index) => (
          <button
            disabled={areAnswersRevealed}
            key={index}
            className={`px-8 py-1 border border-current rounded-lg ${setButtonBackground(answer)}`}
            onClick={() => selectAnswer(title, answer)}
          >
            {decode(answer)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionRow;
