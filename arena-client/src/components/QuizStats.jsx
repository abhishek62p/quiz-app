import { useNavigate } from 'react-router-dom';
import Button from './Button';

export function QuizStats({ recentQuiz, name }) {
  const navigate = useNavigate();
  console.log(recentQuiz);
  const date = new Date();
  const currentTime = date.toString().split(' ').slice(1, 4).join(' ');

  return (
    <div
      style={{
        textAlign: 'center',
        color: '#4d4d4d',
        backgroundColor: 'whitesmoke',
        width: '25%',
        padding: '3rem 1.75rem',
        borderRadius: '.5rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2.5rem',
        }}
      >
        <div>
          <p
            style={{ fontSize: '1.85rem', fontWeight: 'bold' }}
          >{`${name}, Successfully completed Quiz`}</p>
        </div>
        <div
          style={{
            fontSize: '1.1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            gap: '1rem',
          }}
        >
          <p>{`Quiz : ${recentQuiz.quizTitle}`}</p>
          <p>{`Total Question : ${recentQuiz.totalQues}`}</p>
          <p>{`Your Score : ${recentQuiz.score}`}</p>
          <p>{`Total Question : ${currentTime}`}</p>
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <div className="stats-btn">
            <Button data={'Restart'} />
          </div>
          <div className="stats-btn">
            <Button onClick={() => navigate('/')} data={'Home Page'} />
          </div>
        </div>
      </div>
    </div>
  );
}
