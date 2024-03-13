import React from 'react';
import Card from "./card"; 
import {Link} from "react-router-dom";


export default function Home() {
  return (
    <div className="home-container"> 
      <div className="maincard">UWUmarketplace</div>
      <div className="overlaycard">
        <div className="mainpart">
          <h1>Welcome to UWUmarketplace</h1>
          <p>Et markedsplads hvor du både kan købe produkter og ydelser</p>
          <Link to="/login" className="getready">Kom i gang</Link>
        </div>
      </div>
      <div className="tempCards">
      <div className="cards-container"> 
       
       <Card />
        <Card />
        <Card />
        <Card />
       
      
      </div>
      </div>
    </div>
  );
}
