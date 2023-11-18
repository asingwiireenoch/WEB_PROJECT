import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission

    // Simulate authentication logic (Replace with actual backend API calls)
    if (username === 'user' && password === 'password') {
      alert('Login successful!'); // Replace with redirection or session management
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <video autoPlay muted loop id="video-background">
        <source src={require('./video.mp4')} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="login-form">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="username"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <Link to='/Menu'><button className='login button' type="submit">Login</button></Link>
          <p>New User? <Link to='/Signup'>Sign Up</Link></p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
