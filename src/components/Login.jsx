import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  // Get the navigate function from React Router
  const navigate = useNavigate();

  // Function to handle login button click and navigate to the home page
  const handleLoginClick = () => {
    // Use the navigate function to go to the desired route
    navigate('/Home'); // Replace with actual email and password
  };

  return (
    <div className="cover">
      <h1>Login</h1>
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />

      <div className="login-btn" onClick={handleLoginClick}>
        Login
      </div>
    </div>
  );
}

export default Login;
