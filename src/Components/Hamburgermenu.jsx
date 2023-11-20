import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';
import '../Components/Hamburgermenu.css'

export const Hamburgermenu = () => {
  return (
    <>
        <div className="navbar">
        <div className="nav-left">
            <span>
                <ul >
                <Link to='/'><a href="http://"> <div className='brandlogo'> </div></a></Link>
                <Link to='/'><a href="http://"><li>EVERYTHING</li></a></Link>
                <Link to='/women'><a href="http://"><li>WOMEN</li></a></Link>
                <Link to='/men'><a href="http://"><li>MEN</li></a></Link>
                <Link to='/accessories'> <a href="http://"><li>ACCESSORIES</li></a></Link>
                </ul>
            </span>
        </div>
        <div className="nav-right">
                <ul >
              <Link to='/about' ><a href="http://"><li>ABOUT</li></a></Link> 
              <Link to='/contact' ><a href="http://"><li><p>CONTACT US</p></li></a></Link>
                <a href="http://"> <li>$00.00</li></a>
              <Link to='/wishlist' ><a href="http://"><li> <span><Icon.SuitHeartFill className="align-top" size="20" /></span></li></a></Link>
              <Link to='/cart' ><a href="http://"><li> <span><Icon.BagFill className="align-top" size="20" /></span></li></a></Link>
                <a href="http://"><div className="nav-cart-count">0</div></a>
              <Link to='/login' ><a href="http://"><li> <span><Icon.PersonFill className="align-top" size="24" /></span></li></a></Link> 
                </ul>
        </div>
    </div>
    </>
  )
}