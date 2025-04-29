import { Link, useNavigate } from 'react-router-dom';
import Button from './Button';
import { useEffect, useState } from 'react';

export default function Navbar({ token }) {
  const navigate = useNavigate();
  const [userpicture, setUserPicture] = useState('');
  const [username, setUsername] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if(!user) return
    console.log('thsi is user id ',user);
    console.log('this user _id',user._id);
    setUserPicture(user.profilePicture);
      setUsername(user.username);
      setUserId(user._id);
    // if (user && user.profilePicture) {
    //   setUserPicture(user.profilePicture);
    //   setUsername(user.username);
    //   setUserId(user._id);
    // }
    // console.log(userId);
  }, []);

  return (
    <div className="nav-container">
      <div className="logo">
        <p>IQ Arena</p>
      </div>
      <div style={{ width: '50%' }}>
        <nav className="navbar">
          <Link className="nav-links" to="/">
            Home
          </Link>
          <Link className="nav-links" to="/about">
            About
          </Link>
          <Link className="nav-links" to="/quiz">
            Take-Quiz
          </Link>
          <Link className="nav-links" to="/login">
            Contact
          </Link>
        </nav>
      </div>
      {token ? (
        <div
          onClick={() =>
            navigate(`/profile/${username}`, { state: { userId: userId } })
          }
          style={{
            cursor: 'pointer',
            width: '4rem',
            height: '4rem',
            borderRadius: '50%',
            border: '2px solid',
            backgroundImage: userpicture ? `url(${userpicture})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
      ) : (
        <div className="nav-signup-btn">
          <Button data={'Signup'} onClick={() => navigate('/signup')} />
        </div>
      )}
    </div>
  );
}
