import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';
import '../Components/Hamburgermenu.css'

export const Hamburgermenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <div className={`navbar ${menuOpen ? 'active' : ''}`}>
                <div className="hamburger-menu" onClick={handleMenuToggle}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <div className="nav-left">
             <Link to='/'><a href="http://"> <div className='brandlogo'> </div></a></Link>
            <ul>
              <Link to='/' onClick={() => setMenuOpen(false)}><li>EVERYTHING</li></Link>
              <Link to='/women' onClick={() => setMenuOpen(false)}><li>WOMEN</li></Link>
              <Link to='/men' onClick={() => setMenuOpen(false)}><li>MEN</li></Link>
              <Link to='/accessories' onClick={() => setMenuOpen(false)}><li>ACCESSORIES</li></Link>
            </ul>
    
        </div>
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
       
    );
};
