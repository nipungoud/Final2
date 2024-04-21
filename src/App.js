import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Project1 from './Project1';
import Products from './Products';
import './App.css';

function App() {
  // No need to use useState for isLoggedIn if it's always true
  const handleLogin = () => {
    // Handle login logic here
  };

  const handleRegister = () => {
    // Handle register logic here
  };

  // If isLoggedIn is always true, you can directly use the Navigate component to redirect
  // This will redirect to Project1 by default
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route path="Register" element={<Register onRegister={handleRegister} />} />
          <Route path="Project1" element={<Project1 />} />
          <Route path="Products" element={<Products />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
