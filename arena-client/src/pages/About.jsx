import React from 'react';
export default function About() {
  return (
    <div
      style={{
        height: "100vh",
        padding: '40px',
        maxWidth: '100%',
        margin: '0 auto',
        fontFamily: 'sans-serif',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: '#333',
      }}
    >
      <h1 style={{ fontSize: '2.8rem', fontWeight: 'bold', color: '#FF8623', marginBottom: '20px' }}>
        About IQ Arena 🧠
      </h1>

      <p style={{ fontSize: '1.2rem', marginBottom: '25px' }}>
        Welcome to <strong>IQ Arena</strong> — your one-stop hub for quiz challenges! Whether you’re here to learn, test your skills,
        or just have fun, IQ Arena makes quizzing exciting and rewarding.
      </p>

      <h2 style={{ fontSize: '2rem', fontWeight: '600', color: '#00B3AA', marginBottom: '15px' }}>🚀 What We Offer</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '30px', lineHeight: '1.7' }}>
        <li>Diverse quizzes across science, history, sports, pop culture, and more</li>
        <li>Create and share your own quizzes</li>
        <li>Track progress and scores</li>
        <li>Engaging UI for a smooth quiz experience</li>
      </ul>

      <h2 style={{ fontSize: '2rem', fontWeight: '600', color: '#00B3AA', marginBottom: '15px' }}>🌟 Why IQ Arena?</h2>
      <p style={{ fontSize: '1.1rem' }}>
        Because we believe knowledge should be fun, challenging, and accessible to everyone. Ready to test your IQ and have a blast?
        Join the arena now and let the mind games begin!
      </p>
    </div>
  );
}
