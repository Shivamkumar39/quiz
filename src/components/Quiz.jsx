import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { quizData } from "../data/quizData";
import Timer from "./Timer";

const Quiz = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [timeUp, setTimeUp] = useState(false);

  const quiz = quizData[id];
  if (!quiz) return <div>Quiz not found!</div>;

  const question = quiz.questions[currentQuestion];

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    setShowFeedback(true);
    if (answer === question.correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 < quiz.questions.length) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
      setTimeUp(false);
    } else {
      navigate(`/score/${id}/${score}`);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{quiz.title}</h1>
      <div className="mb-4">
        <Timer duration={30} onTimeUp={() => setTimeUp(true)} />
      </div>
      <div className="border p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">{question.question}</h2>
        <div className="mt-4 space-y-2">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              disabled={showFeedback || timeUp}
              className={`w-full text-left p-2 rounded ${
                selectedAnswer === option
                  ? option === question.correctAnswer
                    ? "bg-green-500"
                    : "bg-red-500"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        {showFeedback && (
          <div className="mt-4">
            {selectedAnswer === question.correctAnswer ? (
              <p className="text-green-600">Correct!</p>
            ) : (
              <p className="text-red-600">
                Incorrect! The correct answer is: {question.correctAnswer}
              </p>
            )}
          </div>
        )}
        {timeUp && !showFeedback && <p className="text-red-600 mt-4">Time's up!</p>}
        <button
          onClick={nextQuestion}
          disabled={!showFeedback && !timeUp}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {currentQuestion + 1 < quiz.questions.length ? "Next Question" : "Finish Quiz"}
        </button>
      </div>
    </div>
  );
};

export default Quiz;
