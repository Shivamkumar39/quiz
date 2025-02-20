import React from "react";
import { Link } from "react-router-dom";
import { quizData } from "../data/quizData";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-10 flex flex-col items-center">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-12 text-center">
        Available Quizzes
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {quizData.map((quiz, index) => (
          <div
            key={index}
            className="bg-white shadow-md border border-slate-200 rounded-lg w-full sm:w-96"
          >
            <div className="p-6"> {/* Increased padding */}
              <h5 className="mb-4 text-2xl font-semibold text-slate-800"> {/* Adjusted heading size */}
                {quiz.title}
              </h5>
              <p className="text-slate-600 leading-normal font-light line-clamp-3 mb-4"> {/* Added margin bottom */}
                {quiz.description}
              </p>
              <Link
                to={`/quiz/${index}`}
                className="rounded-md bg-slate-800 py-3 px-6 text-sm text-white transition-all shadow-md inline-block" /* Adjusted padding and removed hover effects */
              >
                Start Quiz
              </Link>
            </div>
          </div>
        ))}
      </div>



    </div>
  );
};

export default Home;