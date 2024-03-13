import React from 'react'
import '../styles/cart.css'
export default function Cart() {
  return (
    <div>
      <div id="titlecart">Cart</div>
      <div className="box">
        <div className="incart">

            <div>
                <h1> Someitem </h1>
                <p className='thep'> someitem thats in your cart </p>
            </div>

            <div className='price'>
                <p>35kr</p>
            </div>


                
        </div>
        
      </div>
    </div>
  )
}
