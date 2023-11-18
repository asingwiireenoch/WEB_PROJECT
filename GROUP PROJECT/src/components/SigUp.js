import React, { useState } from 'react';
import './Signup.css'; // Assuming you have a separate CSS file for styling
import { Link } from 'react-router-dom';

const SignupForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission

    // Add your signup logic here (e.g., API call to register the user)

    alert('Signup successful!'); // Replace with redirection or display success message
  };

  return (
    <div className="signup-container">
      <video autoPlay muted loop id="video-background">
        <source src={require('./video.mp4')} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="signup-form">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              id="phone"
              placeholder="Phone"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <button type="submit" className='button'>Sign Up</button>
          <p>Already have an Account.?<Link to='/Login'> Login</Link></p>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
