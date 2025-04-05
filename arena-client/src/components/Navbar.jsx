import { Link } from 'react-router-dom';
import Button from './Button';

export default function Navbar() {
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
          <Link className="nav-links" onClick={{}}>
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
      <div style={{ backgroundColor: '#FF8623', padding: '0 2.5rem' }}>
        <Button data={'signup'} />
      </div>
    </div>
  );
}
