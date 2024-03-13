
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/login.css";
import { useAuth } from '../contexts/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, error,currentUser } = useAuth();
  const navigate = useNavigate();
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signIn(email, password);
    console.log(currentUser);
    if(!error){
      navigate("/");
    }
  

  };

  return (
    <div className="login-container">
      <div className="login-form">
        <img src="/ourlogo.png" alt="Logo" className="login-logo" /> {/* Ensure the path to your logo is correct */}
        {error && <p className="error-message">{error}</p>} {/* Display login errors */}
        <form onSubmit={handleSubmit}>
          <input
            className='inputbox'
            type="email" 
            name="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Email" 
            required 
          />
          <input 
            className='inputbox'
            type="password" 
            name="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Password" 
            required 
          />
          <button type="submit" className="dropbtn">Login</button>
        </form>
        <p>Har ikke en? <Link to="/register">Registere</Link></p>
      </div>
    </div>
  );
}

export default Login;
