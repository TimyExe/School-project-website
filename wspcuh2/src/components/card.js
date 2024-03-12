import React from 'react'
import {Link} from "react-router-dom"
export default function card() {
  return (
    <>
    
      <div className="maincard">UWUmarketplace</div>
      <div className="overlaycard">
          <div className="mainpart">
              <h1>Welcome to UWUmarketplace</h1>
              <p>Et markedsplads hvor du både kan købe produkter og ydelser</p>
              <Link to="/login" id="getready">Kom i gang</Link>
           
             
          </div>
      </div>
            
      <p></p>
    </>

  )
}

