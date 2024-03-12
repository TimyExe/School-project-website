import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../styles/login.css"; // Import your CSS file
import { Navigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    number: '',
    image: null, // Store the chosen image file
    imagePreview: null // Store the image preview URL
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

  };
// useEffect(()=>{
// console.log(formData)
// },[formData])
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the first file from the array
    setFormData(prevState => ({
      ...prevState,
      image: file,
      imagePreview: URL.createObjectURL(file) // Create a preview URL for the image
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    
    
    return  <Navigate to="/" />
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <img src={formData.imagePreview || "/ourlogo.png"} alt="Logo" className="login-logo" /> {/* Display the image preview or default logo */}
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" required />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
          <input type="number" name="number" value={formData.number} onChange={handleChange} placeholder="Number" required />
          
          {/* Input field for uploading image */}
          <input type="file" accept="image/*" name="image" onChange={handleImageChange} />
          <button type="submit" className="dropbtn" onClick={handleSubmit}>Register</button>
        </form>
        <p>Har en Account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}

export default Register;
