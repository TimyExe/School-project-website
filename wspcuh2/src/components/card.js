import React, { useState } from 'react';
import '../styles/Card.css';
import { Link } from "react-router-dom";

function Card() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
   
  };

  return (
    <div className="card">
    
      <div className="content-wrapper" style={{ transform: `translateY(${isExpanded ? '-100%' : '0'})` }}>
        
        <div className="container">
          <div className="card-content">
            <img src="path/to/your/image.jpg" alt="Card Detailed" className="card-image"/>
            <h3 className="card-title">Card Title Detailed</h3>
            <p className="card-description">More detailed description here</p>
            <button className="card-link" onClick={toggleContent}>tilføj til kurve 🛒</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
