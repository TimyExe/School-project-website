import React, { useState } from 'react';
import '../styles/admin.css';

function CardInput() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send the image, title, and description to your database
    console.log(image, title, description);
    // Reset form after submission
    setImage(null);
    setTitle('');
    setDescription('');
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Create Card</h2>
        <div className="inputbox">
          <label htmlFor="image" className="file-input-container">
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
            />
            <span className="file-input-button">Choose Image</span>
          </label>
        </div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
          required
        />
         <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={handlePriceChange}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={handleDescriptionChange}
          required
        />
        <button type="submit" className="dropbtn">Create Card</button>
      </form>
    </div>
  );
}

export default CardInput;
