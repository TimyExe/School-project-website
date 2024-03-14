import React from 'react';
import Card from "./card"; 
import {Link} from "react-router-dom";


export default function Home() {
  return (
    <div>
      <div className="maincard">UWUmarketplace</div>
    <div className="home-container"> 
      
      <div className="overlaycard">

        <div className="mainpart">
              <h1>Welcome to UWUmarketplace</h1>
              <p>Et markedsplads hvor du både kan købe produkter og ydelser</p>
              <p>vores største supporter ⬇⬇⬇⬇</p>
              <div className='button'>
            <Link to="/login" className="getready">Kom i gang</Link>
          </div>
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
    </div>
  );
}
