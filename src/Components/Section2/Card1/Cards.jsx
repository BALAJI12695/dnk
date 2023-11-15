import "../Card1/Cards.css"
import womenfashion from '../../../Assets/women-fashion.jpg'


import React from 'react'

export const Cards = () => {
  return (
    <div className="cards" >
      
      <div className="women"> 
      <img src={womenfashion} alt="" />
      <h4>20% Off On Tank Tops</h4> 
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</p>
      <button> Shop Now </button>
      </div>

      <div className="men">
      <h4>20% Off On Tank Tops</h4> 
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</p>
      <button> Shop Now </button>
      </div>
      
      <div className="heels">
      <h4>20% Off On Tank Tops</h4> 
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</p>
      <button> Shop Now </button>
      </div>

    </div>
  )
}


