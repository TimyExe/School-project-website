



import React, { useState } from 'react';
import { Link, useNavigate,Navigate } from 'react-router-dom';
import "../styles/login.css"; 

import { useAuth } from '../contexts/AuthContext'; 

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    number: '',
    image: null, 
    imagePreview: null 
  });
  const [isRegistered, setIsRegistered] = useState(false);
  const { signUp, error,currentUser } = useAuth();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
   
    const file = e.target.files[0];
    setFormData(prevState => ({
      ...prevState,
      image: file,
      imagePreview: URL.createObjectURL(file)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(formData.email === ""|| formData.password ===""||formData.username===""||formData.number===""){
      return
    }
    await signUp(formData);
    console.log(currentUser);
     if (!error) {
      navigate("/")
       setIsRegistered(true);
     }
  };

  if (isRegistered) {
    return <Navigate to="/" />;
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <img src={formData.imagePreview || "/ourlogo.png"} alt="Logo" className="login-logo" />
        <form onSubmit={handleSubmit}>
          {error && <p className="error-message" style={{color:"red"}}>{error}</p>}
          
          <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" required />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
          <input type="number" name="number" value={formData.number} onChange={handleChange} placeholder="Number" required />
         
          <div className="file-input-container">
        <label className="file-input-button" htmlFor="file-upload">Upload Image</label>
        <input type="file" accept="image/*" name="image" id="file-upload" onChange={handleImageChange} />
      </div>
         
          
       
        <button type="submit" className="dropbtn" onClick={handleSubmit}>Register</button>
        </form>
        <p>Har en Account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}

export default Register;
