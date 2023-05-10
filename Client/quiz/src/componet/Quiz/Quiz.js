import React, { useState, useEffect } from "react";
import "./Quiz.css";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/quiz")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQuiz(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleOptionClick = (option) => {
    if (option === quiz[currentQuestion].answer) {
      setScore(score + 1);
    }
    if (currentQuestion === quiz.length - 1) {
      setShowResult(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  const Result = () => {
    return (
      <div className="result">
        <p>Your score: {score}</p>
        <div className="answer-container">
          {quiz.map((q, index) => (
            <div key={index} className="answer">
              <p>
                {index + 1}. {q.question}
              </p>
              <p>Correct answer: {q.answer}</p>
            </div>
          ))}
        </div>
        <button onClick={restartQuiz}>Restart Quiz</button>
      </div>
    );
  };

  return (
    <div className="container">
      {quiz.length > 0 ? (
        showResult ? (
          <Result />
        ) : (
          <div className="quiz">
            <h2>Question {currentQuestion + 1}</h2>
            <p>{quiz[currentQuestion].question}</p>
            <div className="options">
              {quiz[currentQuestion].options.map((option, index) => (
                <button key={index} onClick={() => handleOptionClick(option)}>
                  {option}
                </button>
              ))}
            </div>
          </div>
        )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Quiz;
