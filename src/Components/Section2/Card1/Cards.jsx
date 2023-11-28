import "../Card1/Cards.css"



import React from 'react'

export const Cards = () => {
  return (
    <div className="cards" >
      
      <div className="women"> 
      <div className="frame">
      <h5>20% Off On Tank Tops</h5> 
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</p>
      <button className="button1"> SHOP NOW </button>
      </div>
      </div>

      <div className="men">
      <div className="frame">
      <h5>Latest Eyewear For You</h5> 
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</p>
      <button className="button1"> SHOP NOW </button>
      </div>
      </div>
      
      <div className="heels">
      <div className="frame">
      <h5>Let's Lorem Suit Up!</h5> 
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</p>
      <button className="button1"> CHECK OUT </button>
      </div>
      </div>

    </div>
  )
}


