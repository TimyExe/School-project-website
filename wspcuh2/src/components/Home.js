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
              <div className='button'>
            <Link to="/login" className="getready">Kom i gang</Link>
          </div>
        </div>
      </div>
      <div className="tempCards">
      <div className="cards-container"> 
       
        <Card image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcbsnews3.cbsistatic.com%2Fhub%2Fi%2Fr%2F2011%2F09%2F09%2F5787c9f3-a645-11e2-a3f0-029118418759%2Fthumbnail%2F1240x930%2F01cdacb4a431655526a92d09b51e3aaf%2Fprogeria-AP110824079526.jpg&f=1&nofb=1&ipt=60e91d9da69e5106d1f60505dd352b0dc55a05fbb0c90a2fe0b3355e9fe3b90c&ipo=images"/>
        <Card image="https://www.pngarts.com/files/12/Cuisine-Burger-Sandwich-PNG-Image-Background.png"/>
        <Card image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FRgVBbOl-K9s%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=3003ede2bdcc9e7724344ec5fccab00440a1910bda88d6901180e1d993809dc9&ipo=images"/>
        <Card image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.styleoholic.com%2F2016%2F02%2Ftrendy-spring-2016-casual-outfits-for-men-27.jpg&f=1&nofb=1&ipt=fd389ce2c190f87c544428a5e32c2967160f7fcee096f4fc01521e6992e00e51&ipo=images" />
       
      
      </div>
      </div>
    </div>
    </div>
  );
}
