// Register.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css'

function Register({ onRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
    if (!passwordRegex.test(password)) {
      setError('Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one digit, and one special character');
      return;
    }
  
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
  
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    if (!usernameRegex.test(username)) {
      setError('Username can only contain letters and numbers');
      return;
    }
  
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const userExists = registeredUsers.find((u) => u.username === username);
  
    if (userExists) {
      setError('Username already exists');
    } else {
      const newUser = { username, password };
      registeredUsers.push(newUser);
      localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
      onRegister();
      setError('');
    }
  };

  return (
    <div className="auth-container">
      <div className="register-container">
        <h2>Register</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <input class="username"
            type="text"
            placeholder="Enter a username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input class="password"
            type="password"
            placeholder="Enter a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input class="password"
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="button-container">
            <button class="submit" type="submit">Register</button>
            <Link to="/login" className="register-link">Login Here</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
