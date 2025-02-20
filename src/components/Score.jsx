import React from "react";
import { useParams, Link } from "react-router-dom";
import { quizData } from "../data/quizData";

const Score = () => {
  const { id, score } = useParams();
  const quiz = quizData[id];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-lg border border-gray-200 rounded-lg p-6 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-4">Quiz Completed!</h1>
        <h2 className="text-xl font-semibold">{quiz?.title}</h2>
        <p className="mt-4 text-lg font-medium">
          Your Score: <span className="text-blue-600">{score}</span> / {quiz?.questions.length}
        </p>
        <div className="mt-6 space-y-3">
          <Link
            to={`/quiz/${id}`}
            className="block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Retry Quiz
          </Link>
          <Link
            to="/"
            className="block bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Score;
