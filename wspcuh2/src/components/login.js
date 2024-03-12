import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/login.css"; // Import your CSS file

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    number: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <img src="/ourlogo.png" alt="Logo" className="login-logo" />
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" required />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
          <input type="number" name="number" value={formData.number} onChange={handleChange} placeholder="Number" required />
          <div className="dropdown">
            <button className="dropbtn">Dropdown</button>
            <div className="dropdown-content">
              <Link to="/link1">Link 1</Link>
              <Link to="/link2">Link 2</Link>
              <Link to="/link3">Link 3</Link>
            </div>
          </div>
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <Link to="/register">Register here</Link></p>
      </div>
    </div>
  );
}

export default Login;
