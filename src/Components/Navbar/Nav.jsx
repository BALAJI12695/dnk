import * as Icon from 'react-bootstrap-icons';
import '../Navbar/Nav.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className={`navbar ${menuOpen ? 'menu-open' : ''}`}>
        <div className="nav-left">
        <Link to='/'><a href="http://"> <div className='brandlogo'> </div></a></Link>
          <span>
            <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
              <Link to='/' onClick={() => setMenuOpen(false)}><li>EVERYTHING</li></Link>
              <Link to='/women' onClick={() => setMenuOpen(false)}><li>WOMEN</li></Link>
              <Link to='/men' onClick={() => setMenuOpen(false)}><li>MEN</li></Link>
              <Link to='/accessories' onClick={() => setMenuOpen(false)}><li>ACCESSORIES</li></Link>
            </ul>
          </span>
        </div>
        <div className="nav-right">
          <div className="menu-toggle" onClick={handleMenuToggle}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
            <Link to='/about' onClick={() => setMenuOpen(false)}><li>ABOUT</li></Link>
            <Link to='/contact' onClick={() => setMenuOpen(false)}><li><p>CONTACT US</p></li></Link>
            <a href="http://"><li>$00.00</li></a>
            <Link to='/wishlist' onClick={() => setMenuOpen(false)}><li><span><Icon.SuitHeartFill className="align-top" size="20" /></span></li></Link>
            <Link to='/cart' onClick={() => setMenuOpen(false)}><li><span><Icon.BagFill className="align-top" size="20" /></span></li></Link>
            <a href="http://"><div className="nav-cart-count">0</div></a>
            <Link to='/login' onClick={() => setMenuOpen(false)}><li><span><Icon.PersonFill className="align-top" size="24" /></span></li></Link>
          </ul>
        </div>
      </div>
    </div>
  );
};



