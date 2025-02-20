import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Score from "./components/Score";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:id" element={<Quiz />} />
        <Route path="/score/:id/:score" element={<Score />} /> {/* Add score parameter */}
      </Routes>
    </Router>
  );
};

export default App;
