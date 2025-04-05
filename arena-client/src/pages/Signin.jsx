import { useState } from 'react';
import Button from '../components/Button';
import Header from '../components/Header';
import InputBox from '../components/InputBox';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Signin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    if (!username || !password) {
      setErrorMsg('All field are required');
      setTimeout(() => setErrorMsg(''), 5000);
      return;
    }
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/v1/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      console.log('response', response);

      if (response.ok) {
        localStorage.setItem('token', data.token);
        console.log('login successfully');
        navigate('/');
      } else {
        setErrorMsg(data.msg);
        setTimeout(() => setErrorMsg(''), 5000);
        console.log('data.msg', data.msg);
      }
      console.log('data', data);
    } catch (error) {
        setErrorMsg(`server not responding: ${error.message}`)
        setTimeout(() => setErrorMsg(''), 5000)
        console.log('error msg', error.message);
    }
  };

  return (
    <div
      style={{
        backgroundColor: '#DAE6FF',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Error Popup */}
      {errorMsg && (
        <div
          style={{
            backgroundColor: '#FC3D00',
            color: 'white',
            padding: '10px 20px',
            position: 'absolute',
            top: '27%',
            right: '37%',
          }}
        >
          {errorMsg}
        </div>
      )}
      <div className="signin-container">
        <div className="auth-header">
          <Header header={'Welcome back to IQ Arena'} />
        </div>
        <div className="input-container">
          <InputBox
            onchange={(e) => {
              setUsername(e.target.value);
              console.log(username);
            }}
            placeholder={'enter username or email'}
          />
          <InputBox
            onchange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder={'enter password'}
          />
          <div className="auth-btn">
            <Button onClick={handleSignup} data={'Sign up'} />
          </div>
          <div style={{ textAlign: 'center', fontSize: '14px', color: 'gray' }}>
            <p>
              new user?{' '}
              <Link to={'/signup'} style={{ color: 'blue' }}>
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
