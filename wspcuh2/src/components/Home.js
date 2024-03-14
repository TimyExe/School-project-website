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
       
        <Card image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.licdn.com%2Fdms%2Fimage%2FC5603AQEp3ko5AWZeAQ%2Fprofile-displayphoto-shrink_800_800%2F0%2F1517790810528%3Fe%3D2147483647%26v%3Dbeta%26t%3DE3p6fv9SZuAZbOEdear5ta0BE68_RYI99k1x_zKCP8g&f=1&nofb=1&ipt=aa55c95b6ca6729a54465cfdcb72f717413ffa65d6bd0ab1579c5f34cd7fc223&ipo=images"/>
        <Card image="https://www.pngarts.com/files/12/Cuisine-Burger-Sandwich-PNG-Image-Background.png"/>
        <Card image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FRgVBbOl-K9s%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=3003ede2bdcc9e7724344ec5fccab00440a1910bda88d6901180e1d993809dc9&ipo=images"/>
        <Card image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.styleoholic.com%2F2016%2F02%2Ftrendy-spring-2016-casual-outfits-for-men-27.jpg&f=1&nofb=1&ipt=fd389ce2c190f87c544428a5e32c2967160f7fcee096f4fc01521e6992e00e51&ipo=images" />
       
      
      </div>
      </div>
    </div>
    </div>
  );
}
