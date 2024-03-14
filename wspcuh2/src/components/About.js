import React from 'react'
import "../styles/about.css"
export default function About() {
  return (
    <>
        <h1 className='title'>About us</h1>
          <div className='box'>
          
          <p className='maintext'>Denne hjemmeside er blevet lavet som et skole project</p>
           
            <div className='images'>      
                 <div> 
                    <img className='image' src='https://i.pinimg.com/236x/e6/a3/5f/e6a35f05a00d970805ada7cf759039d5.jpg'></img>
                    <h3 className='animate-charcter'> Toji</h3>
                    <p className='desc'>Backend, main programer, monkey</p>
                  </div>
                
                  <div> 
                    <img className='image' src='https://i.pinimg.com/236x/01/bb/17/01bb17afa8d8ff24e13a881b0f22043c.jpg'></img>
                    <h3 className='animate-charcter'> Hookey</h3>
                    <p className='desc'>Main styler/designer, walking vodka </p>
            </div>
                  
            <p className='sectext'>  Vi lavede hjemmesiden som et consept for en web app hvor man kan købe både prudukter og servicer</p>
            
            
            
          </div>
         </div>
    </>
  )
}
