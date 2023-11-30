import "../Card1/Cards.css"



import React from 'react'

export const Cards = () => {
  return (
    <div className="cards" >

      <div className="container">
        <div className="row">

          <div className="col-xl-4 ">
            <div className="card women rounded-0">
              <div className="frame">
                <h4>20% Off On Tank Tops</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</p>
                <button className="buttonshop"> SHOP NOW </button>
              </div>
            </div>
          </div>

          <div className="col-xl-4 ">
            <div className="card men rounded-0">
              <div className="frame">
                <h4>20% Off On Tank Tops</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</p>
                <button className="buttonshop"> SHOP NOW </button>
              </div>
            </div>
          </div>

          <div className="col-xl-4 ">
            <div className="card heels rounded-0">
              <div className="frame">
                <h4>20% Off On Tank Tops</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</p>
                <button className="buttonshop"> CHECK OUT </button>
              </div>
            </div>
          </div>
          

        </div>
      </div>

    </div>
  
  )
}


