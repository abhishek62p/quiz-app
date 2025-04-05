import React from 'react';

export default function Contact() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5', display: 'flex', flexDirection: 'column' }}>

      {/* Main Contact Section */}
      <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto', textAlign: 'center', flex: 1 }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#333' }}>Contact Us</h1>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#666' }}>
          We'd love to hear from you! Reach out via social media or send us a message directly.
        </p>

        {/* Social Links */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.2rem', color: '#1DA1F2' }}>
            Twitter 🐦
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.2rem', color: '#0077B5' }}>
            LinkedIn 💼
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.2rem', color: '#333' }}>
            GitHub 💻
          </a>
          <a href="mailto:example@email.com" style={{ fontSize: '1.2rem', color: '#D44638' }}>
            Email 📧
          </a>
        </div>

        {/* Contact Form */}
        <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
          <input
            type="text"
            placeholder="Your Name"
            style={{ width: '100%', padding: '0.8rem', marginBottom: '1rem', fontSize: '1rem', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <input
            type="email"
            placeholder="Your Email"
            style={{ width: '100%', padding: '0.8rem', marginBottom: '1rem', fontSize: '1rem', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            style={{ width: '100%', padding: '0.8rem', fontSize: '1rem', borderRadius: '5px', border: '1px solid #ccc', resize: 'none' }}
          ></textarea>
          <button
            style={{
              marginTop: '1rem',
              padding: '0.8rem 2rem',
              fontSize: '1rem',
              borderRadius: '5px',
              backgroundColor: '#00B3AA',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Send Message
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: '#222', color: '#eee', padding: '2rem 1rem' }}>
        <div style={{ maxWidth: '1200px', margin: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {/* Navigation */}
          <div style={{ flex: '1', minWidth: '200px', marginBottom: '1rem' }}>
            <h3 style={{ color: '#fff' }}>Quick Links</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="/events" style={{ color: '#bbb', textDecoration: 'none' }}>Upcoming Events</a></li>
              <li><a href="/contests" style={{ color: '#bbb', textDecoration: 'none' }}>Contests</a></li>
              <li><a href="/resources" style={{ color: '#bbb', textDecoration: 'none' }}>Useful Resources</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div style={{ flex: '1', minWidth: '200px', marginBottom: '1rem' }}>
            <h3 style={{ color: '#fff' }}>Connect With Us</h3>
            <p style={{ color: '#bbb' }}>Email: support@iqarena.com</p>
            <p style={{ color: '#bbb' }}>Phone: +91 98765 43210</p>
            <p style={{ color: '#bbb' }}>Location: India</p>
          </div>
        </div>
        <p style={{ textAlign: 'center', marginTop: '2rem', color: '#777' }}>© {new Date().getFullYear()} IQ Arena. All rights reserved.</p>
      </footer>
    </div>
  );
}
