import Navbar from '../components/Navbar';
import Button from '../components/Button';
import About from './About';
import { useEffect, useState } from 'react';
import Card from '../components/card';
import QuizModal from '../components/QuizModel';
import { useNavigate } from 'react-router-dom';
import Contact from './Contact';

export default function Home() {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/v1/quiz/get-quiz');
        const data = await response.json();
        console.log(data);
        if (response.ok) {
          setQuizzes(data.quiz);
        } else {
          console.log('Error fetching quizzes');
          throw new Error(data.message || 'Error fetching quizzes');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchQuizzes();
  }, []);

  const handleStartQuiz = async (quizId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:3000/api/v1/quiz/start/${quizId}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();

      if (response.ok) {
        console.log('Quiz started: ', data);
        navigate(`/quiz/${quizId}`, { state: { quiz: data.quiz } });
      } else {
        navigate(`/signin`);
      }
    } catch (error) {
      console.error('Error: ', error.message);
    }
  };

  const openQuizModel = (quiz) => {
    setSelectedQuiz(quiz);
  };

  const closeQuizModel = () => {
    setSelectedQuiz(null);
  };

  return (
    <>
      <div className="container-m-home" style={{height: '100vh' }}>
        <Navbar />
        <div className="home-container">
          <div className="catalog-header">
            <div class="arrow-container">
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'rgb(255, 134, 35)' }}>Quiz Catalog</p>
              <span class="arrow">➜</span>
            </div>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#00B3AA' }}>Welcome to IQ Arena! 🎉 </p>
            <p style={{ margin: '20px 0', color: '#666' }}>
              Get ready to challenge your mind, test your knowledge, and have fun! IQ Arena is the ultimate space for quiz lovers, where you
              can take exciting quizzes, compete with others, and sharpen your skills.
            </p>
            <div style={{ backgroundColor: '#FF8623', width: "10rem" }}>
              <Button data={'Create Quiz'} />
            </div>
          </div>
          <div className="quiz-catalog">
            {loading ? (
              <div className="spinner"></div>
            ) : error ? (
              <p className="error-message">{error}</p>
            ) : quizzes.length > 0 ? (
              quizzes.map((quiz) => <Card key={quiz._id} quiz={quiz} openQuizModel={openQuizModel} />)
            ) : (
              <p className="error-message">No quizzes available.</p>
            )}
          </div>
        </div>
      </div>
      {selectedQuiz && <QuizModal quiz={selectedQuiz} onClose={closeQuizModel} handleStartQuiz={handleStartQuiz} />}
      <About />
	  <Contact />
    </>
  );
}
