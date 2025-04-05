import { useState } from 'react';
import Button from './Button';

export default function QuizQuestion({ quiz }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizFinished, setQuizFinished] = useState(false);
  const [correctIndex, setCorrectIndex] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const checkCorrectAns = () => {
    const correctOptionIndex = quiz.questions[currentQuestionIndex].options.findIndex((option) => Object.values(option).includes(true));
    setCorrectIndex(correctOptionIndex);
  };

  const handleOptionClick = (index) => {
    checkCorrectAns();
    setSelectedAnswer(index);
    setShowResult(true);

    if (index === correctIndex) {
      setScore((prevScore) => prevScore + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex < quiz.questions.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      } else {
        setQuizFinished(true);
      }
      setShowResult(false);
      setSelectedAnswer(null);
    }, 2000);
  };

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <p>{quiz.title}</p>
        <p>{quiz.description}</p>
      </div>
      <div className="quiz-m">
        <div className="quiz-sidebar"></div>
        <div className="quiz-content">
          {!quizFinished ? (
            <>
              <h2 className="quiz-questext">
                {currentQuestionIndex + 1}. {quiz.questions[currentQuestionIndex].questionText}
              </h2>
              <div className="option-container">
                {quiz.questions[currentQuestionIndex].options.map((option, index) => (
                  <div className="option">
                    <button
                      className="option-btn"
                      key={index}
                      data={option.text}
                      onClick={() => handleOptionClick(option, index)}
                      disabled={showResult}
                    >
                      {option.text}
                    </button>
                  </div>
                ))}
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '90%' }}>
                  <button
                    className="prev-next"
                    disabled={currentQuestionIndex === 0}
                    onClick={() => setCurrentQuestionIndex((next) => next - 1)}
                  >
                    ⬅ Prev
                  </button>
                  <button
                    className="prev-next"
                    disabled={currentQuestionIndex === quiz.questions.length - 1}
                    onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
                  >
                    Next ➡
                  </button>
                </div>
              </div>

              {showResult && <p className="result-message">{selectedAnswer === correctIndex ? '✅ Correct!' : '❌ Incorrect!'}</p>}
            </>
          ) : (
            <div>
              <h2>Quiz Finished</h2>
              <p>Your Answers: {JSON.stringify(selectedAnswer)}</p>
              <p>
                Score: {score}/{quiz.questions.length}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
