import { useState } from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

export default function QuizQuestion({ quiz }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [enable, setEnable] = useState('');
  const [timeId, setTimeId] = useState(0);

  const navigate = useNavigate()

  const handleOptionClick = (option, index) => {
    setEnable('option-disable');
    console.log('clicked index:', index);
    const correctOptionIndex = quiz.questions[
      currentQuestionIndex
    ].options.findIndex((option) => Object.values(option).includes(true));

    console.log('correct Index:', correctOptionIndex);

    if (index === correctOptionIndex) {
      setIsCorrect(true);
      setScore((prevScore) => prevScore + 1);
    }
    setShowResult(true);

    const timeOutId = setTimeout(() => {
      if (currentQuestionIndex < quiz.questions.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      }
      setEnable('option-enable');
      setShowResult(false);
      setIsCorrect(false);
    }, 3000);

    setTimeId(timeOutId);

    if (currentQuestionIndex === quiz.questions.length) {
      console.log('get clear timeout id');
      setShowResult(true);
      clearTimeout(timeId);
      setQuizFinished(true);
    }
  };

  const submitQuiz = async () => {
    const jwt = JSON.parse(localStorage.getItem('jwt'));
    const user = JSON.parse(localStorage.getItem('user'));

    console.log(user._id, jwt.token);
    if (!jwt || !user) {
      console.log('failed to post quiz stats');
    }

    console.log(quiz.questions.length, score);
    try {
      const totalQuestionAttemted = quiz.questions.length
      const response = await fetch(
        'http://localhost:3000/api/v1/question/submit-ques',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${jwt.token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ totalQuestionAttemted, score }),
        }
      );

      const data = await response.json();

      const recentQuiz = {
        totalQues: totalQuestionAttemted,
        score: score,
        quizTitle: quiz.title,
        attemptedAt: Date.now()
      }

      if(response.ok) {
        localStorage.setItem('recentQuiz', JSON.stringify(recentQuiz))
        navigate('/quiz/stats')
      } else {
        console.log('failed to submit quiz');
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
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
                {currentQuestionIndex + 1}.{' '}
                {quiz.questions[currentQuestionIndex].questionText}
              </h2>
              <div className="option-container">
                {quiz.questions[currentQuestionIndex].options.map(
                  (option, index) => (
                    <div className="option">
                      <button
                        className={`option-btn ${enable}`}
                        key={index}
                        data={option.text}
                        onClick={() => handleOptionClick(option, index)}
                        disabled={showResult}
                      >
                        {option.text}
                      </button>
                    </div>
                  )
                )}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '.6rem',
                    width: '88%',
                  }}
                >
                  <button
                    className="prev-next"
                    disabled={currentQuestionIndex === 0}
                    onClick={() => {
                      clearTimeout(timeId);
                      setEnable('option-enable');
                      setShowResult(false);
                      setIsCorrect(false);
                      setCurrentQuestionIndex((next) => next - 1);
                    }}
                  >
                    ⬅ Prev
                  </button>
                  {currentQuestionIndex === quiz.questions.length - 1 ? (
                    <div
                      style={{
                        width: '9rem',
                        padding: '.1rem 0rem',
                        border: '3px solid #00B3AA',
                        textAlign: 'center',
                        color: '#00B3AA',
                      }}
                    >
                      <Button onClick={submitQuiz} data={'Submit Quiz'} />
                    </div>
                  ) : (
                    <button
                      className="prev-next"
                      onClick={() => {
                        clearTimeout(timeId);
                        setEnable('option-enable');
                        setShowResult(false);
                        setIsCorrect(false);
                        setCurrentQuestionIndex((prev) => prev + 1);
                      }}
                    >
                      Next ➡
                    </button>
                  )}
                </div>
              </div>

              <div
                style={{
                  width: '90%',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                {showResult && (
                  <p
                    style={{
                      width: '100%',
                      textAlign: 'center',
                      border: '3px solid #eaeaea',
                      borderRadius: '.5rem',
                      padding: '1rem',
                    }}
                  >
                    {isCorrect === true ? '✅ Correct!' : '❌ Incorrect!'}
                  </p>
                )}
              </div>
            </>
          ) : (
            <div>
              <div></div>
              <h2>Quiz Finished</h2>
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
